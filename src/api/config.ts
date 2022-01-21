import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from "axios";
import { Store } from "redux";

const createInstance = () => {
  return axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      timeout: 5 * 60 * 1000, // default timeout
      "Content-Type": "application/json",
    },
  });
};

interface CustomInterceptorRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

const requestInterceptorSeqStorage: { [key: string]: number } = {};

const responseInterceptorSeqStorage: { [key: string]: number } = {};

export const defaultInstance = createInstance();

export const refreshInstance = createInstance();

interface SetupAxiosType {
  instance: AxiosInstance;
  instanceKey: string;
  store: Store;
}

export const setupAxios = ({
  instance,
  instanceKey,
  store,
}: SetupAxiosType) => {
  instance.interceptors.request.eject(
    requestInterceptorSeqStorage[instanceKey]
  );
  instance.interceptors.response.eject(
    responseInterceptorSeqStorage[instanceKey]
  );

  const requestInterceptor =
    (store: Store) => (config: CustomInterceptorRequestConfig) => {
      // 인증처리
      // config.headers = {
      //   ...config.headers,
      //   Authorization: `Bearer`,
      // };
      return config;
    };
  requestInterceptorSeqStorage[instanceKey] = instance.interceptors.request.use(
    requestInterceptor(store),
    (error) => {
      return Promise.reject(error);
    }
  );

  const loggingForResponse = (response: AxiosResponse) => {
    const originalRequest = response.config as CustomInterceptorRequestConfig;
    console.log(`[AXIOS RESPONSE URL : ${originalRequest?.url}]`);
    console.log(" 1. ORIGINAL REQUEST");
    console.table(originalRequest);
    console.log(" 2. RESPONSE");
    console.table(response, [
      "code",
      "content-type",
      "url",
      "baseUrl",
      "method",
    ]);
    console.log(" 3. RESPONSE BODY DATA");
    console.table(response?.data?.data);
  };

  const responseInterceptor = (response: AxiosResponse) => {
    const originalRequest = response.config as CustomInterceptorRequestConfig;

    loggingForResponse(response);

    if (!originalRequest._retry) {
      // 리프레쉬 처리?
    }

    return response;
  };

  responseInterceptorSeqStorage[instanceKey] =
    instance.interceptors.response.use(responseInterceptor);
};

export interface CallApiType {
  url: string;
  method: Method;
  data?: any;
  contentType?: HttpContentType;
  config?: AxiosRequestConfig;
}

export type HttpContentType =
  | "application/json"
  | "application/x-www-form-urlencoded"
  | "multipart/form-data"
  | "form-data";

export const callApi = ({
  url,
  method,
  data,
  contentType = "application/json",
  config,
}: CallApiType) => {
  return defaultInstance({
    method: method,
    url: url,
    data: data || {},
    params: method === "GET" ? data : {},
    headers: {
      "Content-Type": contentType,
    },
    ...config,
  }).catch((error) => {
    console.error("api error", error);
    return error.response;
  });
};

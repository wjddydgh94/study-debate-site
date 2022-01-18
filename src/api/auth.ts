import axios from "axios";

interface SignUpUrlRequestType {
  email: string;
  password: string;
}

export const signUpUrl = async (req: SignUpUrlRequestType) => {
  return await axios({
    url: "user",
    method: "POST",
    data: {
      email: req.email,
      password: req.password,
    },
  });
};

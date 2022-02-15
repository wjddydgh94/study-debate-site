import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { RegisterCommentFormDataType } from "@/types/issues";

interface WritePropsType {
  handleRegistComment: (formData: RegisterCommentFormDataType) => void;
}

const Write = ({ handleRegistComment }: WritePropsType) => {
  const { handleSubmit, register } = useFormContext();
  return (
    <WriteWrapper>
      <form onSubmit={handleSubmit(handleRegistComment)}>
        <textarea
          {...register("comment", {
            required: { value: true, message: "의견을 작성해주세요" },
          })}
          placeholder="의견을 작성해주세요"
        ></textarea>
        <input type="submit" value="의견등록" />
      </form>
    </WriteWrapper>
  );
};

const WriteWrapper = styled.section`
  margin-top: 50px;
  padding: 50px 37.5px;
  background-color: #fff;
  form {
    textarea {
      width: 100%;
      height: 200px;
      border: 1px solid #d6d6d6;
      padding: 15px;
    }
    input[type="submit"] {
      width: 100%;
      height: 70px;
      border: 0;
      background-color: #274287;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
    }
  }
`;

export default Write;

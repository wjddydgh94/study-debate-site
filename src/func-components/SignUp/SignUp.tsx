import React from "react";
import styled from "styled-components";
import useSignUp from "./hooks/useSignUp";

const SignUp = () => {
  const {
    hookForm: {
      register,
      formState: { errors },
      handleSubmit,
    },
    handleSignUp,
  } = useSignUp();
  return (
    <Wrapper>
      <Container>
        <h1>가입하기</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <input
            type="text"
            {...register("email", {
              required: { value: true, message: "이메일을 입력해주세요." },
            })}
            placeholder="이메일을 입력해주세요."
          />
          <input
            type="password"
            {...register("password", {
              required: { value: true, message: "비밀번호를 입력해주세요." },
            })}
            placeholder="비밀번호를 입력해주세요."
          />
          {(errors.email || errors.password) && (
            <p>
              이메일과 비밀번호를 입력해주세요.
              <br />
              비밀번호는 영어 소문자와 영어 대문자를 포함해야합니다.
            </p>
          )}
          <input type="submit" value="회원가입" />
        </form>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  padding: 40px 0;
`;

const Container = styled.section`
  background-color: #fff;
  text-align: center;
  padding: 60px;
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 50px;
  }
  form {
    input[type=\"text\"],
    input[type=\"password\"] {
      width: 100%;
      border: 1px solid rgb(221, 221, 221);
      background: rgb(250, 250, 250);
      height: 55px;
      margin-bottom: 15px;
      padding: 0 15px;

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        transition: background-color 5000s;
      }
    }
    input[type=\"submit\"] {
      width: 100%;
      background: #2f3747;
      border-radius: 5px;
      height: 60px;
      color: #fff;
      box-shadow: 0px 4px 2px 0px rgb(0 0 0 / 25%);
      font-size: 15px;
      font-weight: bold;
      margin-top: 35px;
      cursor: pointer;
    }
    p {
      color: red;
    }
  }
`;

export default SignUp;

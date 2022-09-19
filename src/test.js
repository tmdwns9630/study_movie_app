import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Fotms() {
  const {
    register, // 태그에 등록할때 사용 <input {...register("username")} />
    watch, // 상태를 모니터링
    handleSubmit, // submit 핸들러 <form onSubmit={handleSubmit(onValid, onInValid)}>
    formState: { errors }, // form 상태
    setError,
    setValue,
    reset,
    resetField,
  } = useForm <
  LoginForm >
  {
    mode: "onChange",
  };

  const onValid = (data: LoginForm) => {
    console.log("검증됨");
  };

  const onInValid = (erros: FieldErrors) => {
    console.log(erros);
  };

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <input
        {...register("username", {
          required: {
            value: true,
            message: "사용자 이름을 입력하세요",
          },
          minLength: {
            value: 5,
            message: "5글자 이상으로 입력하세요",
          },
        })}
        type="text"
        placeholder="username"
        className={`${Boolean(errors.username?.message) ? "bg-red-200" : ""} `}
      />
      <input
        {...register("email", {
          required: "이메일을 입력하세요",
          validate: {
            noNaver: (value) =>
              value.includes("@naver.com") || "naver 메일만 지원합니다",
          },
        })}
        type="email"
        placeholder="email"
        className={`${Boolean(errors.email?.message) ? "bg-red-200" : ""} `}
      />
      {errors.email?.message}
      <input
        {...register("password", {
          required: "비밀번호를 입력하세요",
        })}
        type="password"
        placeholder="password"
      />
      <input type="submit" value="계정생성" />
    </form>
  );
}

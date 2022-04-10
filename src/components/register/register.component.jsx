import * as S from "./register.style"

const Register = () => {
  return (
    <S.Form>
      <h2>Register!</h2>
      <S.Label>Email</S.Label>
      <S.Input type="email" />
      <S.Label>Passowrd</S.Label>
      <S.Input type="password" />
      <S.Label>Password Confirmation</S.Label>
      <S.Input type="password" />
      <S.Submit type="submit" text="Register!" />
    </S.Form>
  )
}

export default Register

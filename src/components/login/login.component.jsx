import * as S from "./login.style"

const Login = () => {
  return (
    <S.Form>
      <h2>Log In!</h2>
      <S.Label>Email</S.Label>
      <S.Input type="email" required />
      <S.Label>Password</S.Label>
      <S.Input type="password" required />
      <S.Submit type="submit" value="Log In" />
    </S.Form>
  )
}

export default Login

import { useRef } from "react"
import * as S from "./register.style"

const Register = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  return (
    <S.Form>
      <h2>Register!</h2>
      <S.Label>Email</S.Label>
      <S.Input type="email" ref={emailRef} required />
      <S.Label>Passowrd</S.Label>
      <S.Input type="password" ref={passwordRef} required />
      <S.Label>Password Confirmation</S.Label>
      <S.Input type="password" />
      <S.Submit
        type="submit"
        text="Register!"
        ref={passwordConfirmRef}
        required
      />
    </S.Form>
  )
}

export default Register

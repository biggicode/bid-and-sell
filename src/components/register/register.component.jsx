import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, Link } from "react-router-dom"
import * as S from "./register.style"

const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfrim: "",
  })

  const { displayName, email, password, passwordConfrim } = state

  const handleSubmit = () => {}
  const handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <h2>Register!</h2>
      <S.Label>Name</S.Label>
      <S.Input
        type="text"
        name="displayName"
        onChange={handleChange}
        value={displayName}
        required
      />
      <S.Label>Email</S.Label>
      <S.Input
        type="email"
        name="email"
        onChange={handleChange}
        value={email}
        required
      />
      <S.Label>Passowrd</S.Label>
      <S.Input
        type="password"
        name="password"
        onChange={handleChange}
        value={password}
        required
      />
      <S.Label>Password Confirmation</S.Label>
      <S.Input
        type="password"
        name="confirmPassword"
        onChane={handleChange}
        value={passwordConfrim}
        required
      />
      <S.Submit type="submit">Register!</S.Submit>
      <p>Already have an account?</p>
      <Link to="/login">Log In</Link>
    </S.Form>
  )
}

export default Register

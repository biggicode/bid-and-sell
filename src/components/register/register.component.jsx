import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { registerInitiate } from "../../redux/user.action"
import * as S from "./register.style"

const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })
  const { currentUser } = useSelector((state) => state.user)

  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser) {
      navigate("/")
    }
  }, [currentUser])

  const dispatch = useDispatch()

  const { displayName, email, password, passwordConfirm } = state

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      return
    }

    dispatch(registerInitiate(email, password, displayName))
    setState({ email: "", displayName: "", password: "", passwordConfrim: "" })
  }

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
        name="passwordConfirm"
        onChange={handleChange}
        value={passwordConfirm}
        required
      />
      <S.Submit type="submit">Register!</S.Submit>
      <p>Already have an account?</p>
      <Link to="/login">Log In</Link>
    </S.Form>
  )
}

export default Register

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom"

import * as S from "./login.style"
import {
  facebookLogInInitiate,
  googleLogInInitiate,
  loginInitiate,
} from "../../redux/user.action"

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  })

  const { email, password } = state

  const { currentUser } = useSelector((state) => state.user)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentUser) {
      navigate("/")
    }
  }, [currentUser])

  const handleGoogleSignIn = () => {
    dispatch(googleLogInInitiate())
  }
  const handleFBSignIn = () => {
    dispatch(facebookLogInInitiate())
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      return
    }
    dispatch(loginInitiate(email, password))
    setState({ email: "", password: "" })
  }

  const handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <h2>Log In!</h2>
      <S.Button type="button" onClick={handleGoogleSignIn}>
        <i className="icon__google" />
        Sign In with Google
      </S.Button>
      <S.Button type="button" onClick={handleFBSignIn}>
        <i className="icon__google" />
        Sign In with FaceBook
      </S.Button>
      <p>OR</p>
      <S.Label>Email</S.Label>
      <S.Input
        type="email"
        name="email"
        onChange={handleChange}
        value={email}
        required
      />
      <S.Label>Password</S.Label>
      <S.Input
        type="password"
        name="password"
        onChange={handleChange}
        value={password}
        required
      />
      <S.Submit type="submit">Log In</S.Submit>
      <hr />
      <p>Don't have an account</p>
      <Link to="/register">Create new account</Link>
    </S.Form>
  )
}

export default Login

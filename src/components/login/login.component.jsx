import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as S from "./login.style";
import { loginInitiate } from "../../redux/user.action";
import AuthButton from "../auth-button";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormTitle>Log In!</S.FormTitle>
      <AuthButton type="Google" />
      <AuthButton type="Facebook" />
      <S.CenteredP>or</S.CenteredP>
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
      <S.CenteredP>
        Don't have an account?
        <S.StyledLink to="/register">Create new account</S.StyledLink>
      </S.CenteredP>
    </S.Form>
  );
};

export default Login;

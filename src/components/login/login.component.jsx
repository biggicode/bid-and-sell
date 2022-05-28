import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as S from "./login.style";
import CircleGradient from "../circle-gradient";
import { loginInitiate } from "../../redux/user.action";
import AuthButton from "../auth-button";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const { currentUser, error } = useSelector((state) => state.user);

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
    <>
      <CircleGradient top="200px" right="140px" />
      <CircleGradient bottom="400px" left="140px" />
      <CircleGradient top="100px" left="200px" type="black" />
      <CircleGradient bottom="300px" right="20px" type="black" />
      <S.Form onSubmit={handleSubmit}>
        <S.FormTitle>Logheza-te!</S.FormTitle>
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
        <S.Label>Parola</S.Label>
        <S.Input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        {error && (
          <S.Error>
            {error.includes("user-not-found")
              ? "Nu a fost gasit un utilizator cu acest email."
              : error.includes("wrong-password")
              ? "Parola este gresita."
              : error}
          </S.Error>
        )}
        <S.Submit type="submit">Log In</S.Submit>
        <S.CenteredP>
          Nu ai un cont?
          <S.StyledLink to="/register">Creeaza un cont nou</S.StyledLink>
        </S.CenteredP>
      </S.Form>
    </>
  );
};

export default Login;

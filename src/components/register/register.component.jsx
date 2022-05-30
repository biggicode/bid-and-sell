import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import * as S from "./register.style";
import AuthButton from "../auth-button";
import CircleGradient from "../circle-gradient";
import { registerInitiate } from "../../redux/user.action";

const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { currentUser, error } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  const dispatch = useDispatch();

  const { displayName, email, password, passwordConfirm } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }

    dispatch(registerInitiate(email, password, displayName));
    setState({ email: "", displayName: "", password: "", passwordConfirm: "" });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <CircleGradient top="0px" left="200px" />
      <CircleGradient bottom="0px" right="20px" />
      <CircleGradient top="200px" right="140px" type="black" />
      <CircleGradient bottom="200px" left="140px" type="black" />
      <S.Form onSubmit={handleSubmit}>
        <S.FormTitle>Formular Inregistrare!</S.FormTitle>
        <AuthButton type="Google" />
        <AuthButton type="Facebook" />
        <S.CenteredP>or</S.CenteredP>
        <S.Label>Nume</S.Label>
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
        <S.Label>Parola</S.Label>
        <S.Input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <S.Label>Confirma Parola</S.Label>
        <S.Input
          type="password"
          name="passwordConfirm"
          onChange={handleChange}
          value={passwordConfirm}
          required
        />
        {error?.includes("email-already-in-use") && (
          <S.Error>Emailul este folosit deja pentru un alt cont.</S.Error>
        )}
        {error?.includes("weak-password") && (
          <S.Error>Parola trebuie sa contina minim 6 caractere.</S.Error>
        )}
        <S.Submit type="submit">Inregistrare!</S.Submit>
        <S.CenteredP>
          Ai deja un cont?
          <S.StyledLink to="/login">Autentificare</S.StyledLink>
        </S.CenteredP>
      </S.Form>
    </>
  );
};

export default Register;

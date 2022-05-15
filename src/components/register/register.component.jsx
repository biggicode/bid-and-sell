import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerInitiate } from "../../redux/user.action";
import * as S from "./register.style";

const Register = () => {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { currentUser } = useSelector((state) => state.user);

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
    <S.Form onSubmit={handleSubmit}>
      <S.FormTitle>Register!</S.FormTitle>
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
      <S.BottomText>
        Already have an account?<S.StyledLink to="/login">Log In</S.StyledLink>
      </S.BottomText>
    </S.Form>
  );
};

export default Register;

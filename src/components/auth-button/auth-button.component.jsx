import { useDispatch } from "react-redux";

import * as S from "./auth-button.style";
import {
  facebookLogInInitiate,
  googleLogInInitiate,
} from "../../redux/user.action";

const handleGoogleSignIn = () => {
  dispatch(googleLogInInitiate());
};
const handleFBSignIn = () => {
  dispatch(facebookLogInInitiate());
};

const AuthButton = ({ type }) => {
  const dispatch = useDispatch();

  return <div></div>;
};

export default AuthButton;

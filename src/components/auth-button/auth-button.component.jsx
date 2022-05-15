import { useDispatch } from "react-redux";

import * as S from "./auth-button.style";
import {
  facebookLogInInitiate,
  googleLogInInitiate,
} from "../../redux/user.action";

const AuthButton = ({ type }) => {
  const dispatch = useDispatch();

  const handleGoogleSignIn = () => {
    dispatch(googleLogInInitiate());
  };
  const handleFBSignIn = () => {
    dispatch(facebookLogInInitiate());
  };

  return (
    <S.Button onClick={type === "Google" ? handleGoogleSignIn : handleFBSignIn}>
      Continuati cu {type}
      <i
        className={type === "Google" ? "icon__google" : "icon__facebook"}
        style={{ color: "#BB3FDD" }}
      />
    </S.Button>
  );
};

export default AuthButton;

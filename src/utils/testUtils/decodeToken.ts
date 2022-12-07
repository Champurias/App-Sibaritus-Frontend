import jwtDecode from "jwt-decode";
import { JwtCustomPayload } from "../../redux/types/types";

const decodeToken = (token: string) => {
  const jwtPayload: JwtCustomPayload = jwtDecode(token);

  return {
    id: jwtPayload.id,
    email: jwtPayload.email,
  };
};

export default decodeToken;

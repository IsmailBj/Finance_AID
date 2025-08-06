import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  id: number;
  username: string;
  exp: number; // UNIX timestamp
}

const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (err) {
    console.error("Invalid token", err);
    return true;
  }
};

export default isTokenExpired;

import { getToken } from "../utils/token";
import AuthRouter from "./authRouter";
import HomeRouter from "./homeRouter";

export default function RouterIndex() {
  const token = getToken();
  if (token) return <HomeRouter />;
  return <AuthRouter />;
}

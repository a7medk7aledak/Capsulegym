import AuthForm from "../components/AuthForm";
import Header from "../components/Header";

const Login = () => {
  return (
    <>
      <Header />
      <AuthForm mode="login" />
    </>
  );
};

export default Login;

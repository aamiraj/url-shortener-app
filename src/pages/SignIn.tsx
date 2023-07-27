import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <h1>Sign in page</h1>
      <Link to="/register">Go to register page</Link>
    </div>
  );
};

export default SignIn;

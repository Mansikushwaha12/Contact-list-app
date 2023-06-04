import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { useNavigate } from "react-router-dom";
import "./login.css"
function Login() {
    const navigate = useNavigate();
  return (
    <div className="login">
        <h1>Contact List App</h1>
        <div className="login_card">
        <h1>Sign In</h1>
      <LoginSocialGoogle
        client_id={"590938007545-e5vev2lkg5j45sot283hb6c7hpv8au6q.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
          navigate("/contactList")
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton style={{width:"280px", height:"50px", border:"2px solid white"}}/>
      </LoginSocialGoogle></div>
    </div>
  );
}

export default Login;
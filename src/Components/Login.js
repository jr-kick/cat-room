import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";
import { setCurrentPath } from "../redux/currentpath";
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPath(window.location.pathname));
  }, []);
  
  /* const google = window.google;

  function handleCallbackResponse(response) {
    var user = jwtDecode(response.credential);
    dispatch(login({ name: user.name, avatar: user.picture }));
  };

  useEffect(() => { */
    /* global google */
    /* google.accounts.id.initialize({
      client_id: '650598283556-4tl875cetd7ueallsq486darhpj5e30n.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large' }
    );
  }, []); */
  
  return (
    <div className="content login">
      <div className='greeting-text'>
        <h1>Welcome to <br className="br" /> Cat Room!</h1>
        <p>Here you can talk about some very interesting topics, like milk, yarn balls, mice and many more. So don't be shy, come and join us! You can log in with Google right below this pharagraph.</p>
      </div>
      <div id="signInDiv">
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse.credential);
            var user = jwtDecode(credentialResponse.credential);
            dispatch(login({ name: user.name, avatar: user.picture }));
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>
      {/* <div id="signInDiv">
      </div> */}
    </div>
  );
};
 
export default Login;

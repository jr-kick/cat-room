import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";

const Login = () => {
  const dispatch = useDispatch();

  function handleCallbackResponse(response) {
    var user = jwtDecode(response.credential);
    dispatch(login({ name: user.name, avatar: user.picture }));
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '650598283556-4tl875cetd7ueallsq486darhpj5e30n.apps.googleusercontent.com',
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large' }
    );
  }, []);
  
  return (
    <div>
      <div id="signInDiv">
      </div>
    </div>
  );
};
 
export default Login;

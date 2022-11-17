import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";
import catImg from '../Images/paw.png';

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
    <div className='login background'>
      <header className="header greeting-page">
        <div>
          <div className="title">
            <div className="cat-img">
              <img src={catImg} alt="" />
            </div>
            <h1>Cat Room</h1>
          </div>
        </div>
      </header>
      <div className="content">
        <div className='greeting-text'>
          <h1>Welcome to Cat Room!</h1>
          <p>Here you can talk about some very interesting topics, like milk, yarn balls, mice and many more. So don't be shy, come and join us! You can log in with Google right below this pharagraph.</p>
          <div id="signInDiv">
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Login;

import { useDispatch } from "react-redux";
import { logout } from "../redux/user";
import { useSelector } from "react-redux";
import catImg from '../Images/paw.png';
import triangle from '../Images/triangle.png';
import { useState } from "react";

const Home = () => {
  const [divStyle, setDivStyle] = useState(null);

  const dispatch = useDispatch();

  let user = useSelector((state) => state.user);

  const handleClick = () => {
    const div = document.querySelector('.drop-down-menu>div');

    if (!divStyle) {
      div.style.display = 'flex';
      setDivStyle({
        opacity: '100%',
        transform: 'translateX(0px) translateY(0px) scale(1)',
      });
    } else {
      setDivStyle(null);
      setTimeout(() => {
        div.style.display = 'none';
      }, 200);
    }
  };

  const handleSliding = () => {
    const slidingBar = document.querySelector('.sliding-bar');
    const button = document.querySelector('.slide-button>img');
    
    if (!slidingBar.style.width) {
      slidingBar.style.width = '200px';
      button.style.transform = 'translateX(-5px)';
      button.style.rotate = '-180deg';
    } else {
      slidingBar.style.width = '';
      button.style.transform = '';
      button.style.rotate = '';
    };
  };

  return (
    <div className="home background">
      <header className="header logged-in">
        <div>
          <div className="title">
            <div className="cat-img">
              <img src={catImg} alt=""/>
            </div>
            <h1>Cat Room</h1>
          </div>
          <div className="drop-down-container">
            <div className="drop-down-button-container">
              <button className="user drop-down-button" onClick={handleClick}>
                <img src={user.value.avatar} alt=""/>
              </button>
            </div>
            <div className="user drop-down-menu" style={divStyle}>
              <div>
                <img src={user.value.avatar} alt=""/>
                <h3>{user.value.name}</h3>
                <button onClick={() => dispatch(logout())}>Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="content home">
        <div className="sidebar">
          <button>
            <div>
              <div>
                <p>Cat Nip</p>
              </div>
            </div>
          </button>
          <button>
            <div>
              <div>
                <p>Cat Nip</p>
              </div>
            </div>
          </button>
          <button>
            <div>
              <div>
                <p>Cat Nip</p>
              </div>
            </div>
          </button>
          <button>
            <div>
              <div>
                <p>Cat Nip</p>
              </div>
            </div>
          </button>
        </div>
        <div className="chat-window-container">
          <div className="sliding-bar">
            <button className="slide-button" onClick={handleSliding}><img src={triangle} alt="" /></button>
          </div>
          <div className="chat-window">
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Home;
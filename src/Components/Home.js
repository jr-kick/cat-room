import { useDispatch } from "react-redux";
import { logout } from "../redux/user";
import { setMessages } from "../redux/messages";
import { useSelector } from "react-redux";
import catImg from '../Images/paw.png';
import triangle from '../Images/triangle.png';
import like from '../Images/like.svg';
import send from '../Images/send.svg';
import { useEffect, useState } from "react";
import Messages from "./Messages";
import prr from '../Images/prr.jpg';
import mrJinks from '../Images/Mr. Jinks.jpg';
import puss from '../Images/Puss.jpg';

const Home = () => {
  const [divStyle, setDivStyle] = useState(null);
  const [buttonImg, setButtonImg] = useState(like);
  const [display, setDisplay] = useState([]);

  const dispatch = useDispatch();

  let user = useSelector((state) => state.user);

  let conversation = useSelector((state) => state.messages);

  useEffect(() => {
    setDisplay(conversation.value);
  }, [conversation]);

  useEffect(() => {
    const div = document.querySelector('.message-out');

    div.scrollTop = div.scrollTopMax;
  }, [display]);

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
    const friends = document.querySelector('.friends');
    const button = document.querySelector('.slide-button>img');
    
    if (!slidingBar.style.width) {
      slidingBar.style.width = '200px';
      button.style.transform = 'translateX(-5px)';
      button.style.rotate = '-180deg';
      friends.style.opacity = 1;
    } else {
      slidingBar.style.width = '';
      button.style.transform = '';
      button.style.rotate = '';
      friends.style.opacity = '';
    };
  };

  const handleInput = (e) => {
    const textContainer = document.querySelector('.message-in');

    if (!e.target.value) {
      setButtonImg(like);
    } else {
      setButtonImg(send);
    };

    e.target.style.height = '0px';

    if (e.target.scrollHeight < 57) {
      e.target.style.height = e.target.scrollHeight + 'px';
      textContainer.style.height = 41 + e.target.scrollHeight + 'px';
    } else {
      e.target.style.height = '57px';
      textContainer.style.height = 41 + 57 + 'px';
    }
  };

  const handleSend = () => {
    const text = document.querySelector('.message-text-container>textarea');
    const textContainer = document.querySelector('.message-in');

    if (text.value) {
      dispatch(setMessages({text: text.value, time: new Date().getTime(), type: 'sent'}));
      text.value = null;
      text.style.height = 0;
      text.style.height = text.scrollHeight + 'px';
      textContainer.style.height = 41 + text.scrollHeight + 'px';
      setButtonImg(like);
    } else {
      dispatch(setMessages({text: ':like:', time: new Date().getTime(), type: 'sent'}));
    }
  };

  const handleHover = (e) => {
    let temp = conversation.value;
    temp = temp.find(message => e.target.slot == message.time);
    let date = new Date(temp.time).toDateString();
  };

  const showCats = () => {
    const cats = document.querySelector('.search-for-friends');

    if (!cats.style.height) {
      cats.style.height = cats.children.length * 65 + 'px';
    } else {
      cats.style.height = '';
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
          <button onClick={showCats}>
            <div>
              <div>
                <p>Search for Friends</p>
              </div>
            </div>
          </button>
          <div className="search-for-friends">
            <button>
              <div>
                <div>
                  <div className="img-holder"><img src={mrJinks} alt="" /></div>
                  <p>Mr. Jinks</p>
                  <p className="plus">+</p>
                </div>
              </div>
            </button>
            <button>
              <div>
                <div>
                  <div className="img-holder"><img src={puss} alt="" /></div>
                  <p>Puss</p>
                  <p className="plus">+</p>
                </div>
              </div>
            </button>
            <button>
              <div>
                <div>
                  <div className="img-holder"><img src={prr} alt="" /></div>
                  <p>prr</p>
                  <p className="plus">+</p>
                </div>
              </div>
            </button>
          </div>
          <button>
            <div>
              <div>
                <p>Options</p>
              </div>
            </div>
          </button>
          <button>
            <div>
              <div>
                <p>Events</p>
              </div>
            </div>
          </button>
        </div>
        <div className="chat-window-container">
          <div className="sliding-bar">
            <button className="slide-button" onClick={handleSliding}><img src={triangle} alt="" /></button>
            <div className="friends">
            </div>
          </div>
          <div className="chat-window">
            <div className="message-out">
              <div>
                {display != [] && display.map(message => {
                  if (message.text === ':like:') {
                    return (
                      <div slot={message.time} className="sent message like" key={message.time} onMouseEnter={e => handleHover(e)}>
                        <img slot={message.time} className="purple" src={like} alt="" />
                      </div>
                    )
                  } else if (message.type === 'sent') {
                    return (
                      <div slot={message.time} className="sent message" key={message.time} onMouseEnter={e => handleHover(e)}>
                        <p slot={message.time}>{message.text}</p>
                      </div>
                    )
                  } else {
                    return (
                      <div slot={message.time} className="recieved message" key={message.time} onMouseEnter={e => handleHover(e)}>
                        <p slot={message.time}>{message.text}</p>
                      </div>
                    )
                  }
                })}
              </div>
            </div>
            <div className="message-in">
              <div className="message-text-container">
                <textarea onInput={handleInput}></textarea>
              </div>
              <div className="message-button-container">
                <button onMouseDown={handleSend}><img className="purple" src={buttonImg} alt=""/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Home;
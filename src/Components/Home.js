import { useDispatch } from "react-redux";
import { createChat, updateChat } from "../redux/chats";
import { addFriend } from "../redux/friends";
import { useSelector } from "react-redux";
import triangle from '../Images/triangle.png';
import like from '../Images/like.svg';
import send from '../Images/send.svg';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";




const Home = () => {
  const [dialogRan, setDialogRan] = useState([0, 0, 0]);
  const [sendButton, setSendButton] = useState(like);
  const [chat, setChat] = useState(null);
  const [friend, setFriend] = useState(null);
  const dispatch = useDispatch();
  const {id} = useParams();

  const this_user_key = 5214214;

  let user = useSelector(state => state.user.value);

  let chats = useSelector(state => state.chats.value);

  let cats = useSelector(state => state.cats.value);

  let friends = useSelector(state => state.friends.value);

  let fakeMsg = useSelector(state => state.fakeMsg.value);

  useEffect(() => {
    if (id == false) {
      return
    } else {
      let tempChat = chats.find(chat => chat.chat_id === id);
      let tempFriend = tempChat.members.find(member => member != this_user_key);
      tempFriend = cats.find(cat => cat.key === tempFriend);
      setChat(tempChat);
      setFriend(tempFriend);
    }
  }, [chats, id]);
  
  useEffect(() => {
    const div = document.querySelector('.message-out');
    
    div.scrollTop = div.scrollTopMax;
  }, [chat]);

  useEffect(() => {
    let key = friends[friends.length - 1];
    switch(key) {
      case 2343243252:
        if (!dialogRan[0]) {
          startDialog(key);
        }
        break;

      case 52352342:
        if (!dialogRan[1]) {
          startDialog(key);
        }
        break;

      case 436324234:
        if (!dialogRan[2]) {
          startDialog(key);
        }
        break;
    }
  }, [friends])

  const startDialog = (key) => {
    if (key === 2343243252) {
      setTimeout(() => {
        let temp = dialogRan;
        temp[0] = 1;
        setDialogRan(temp);
        let id = chats.find(chat => chat.members.includes(key));
        id = id.chat_id;
        let text = fakeMsg[0].texts[0];
        sendFakeMsg(id, text, 'Mr. Jinks');
      }, 2000)
    } else if (key === 52352342) {
      let temp = dialogRan;
      temp[1] = 1;
      setDialogRan(temp);

    } else if (key === 436324234) {
      let temp = dialogRan;
      temp[2] = 1;
      setDialogRan(temp);

    }
  };

  const sendFakeMsg = (id, text, name) => {
    dispatch(updateChat({chat_id: id, message: {text: text, time: new Date().getTime(), name: name}}));
  };

  const handleSliding = () => {
    const slidingBar = document.querySelector('.sliding-bar');
    const friends = document.querySelector('.friends>div');
    const button = document.querySelector('.slide-button>button>img');
    
    if (!slidingBar.style.width) {
      slidingBar.style.width = '200px';
      button.style.transform = 'translateX(-3px)';
      button.style.rotate = '-180deg';
      friends.style.opacity = 1;
    } else {
      slidingBar.style.width = '';
      button.style.transform = '';
      button.style.rotate = '';
      friends.style.opacity = '';
    };
  };

  const showCats = () => {
    const cats = document.querySelector('.search-for-friends');

    if (!cats.style.height) {
      cats.style.height = cats.children.length * 65 + 'px';
    } else {
      cats.style.height = '';
    };
  };

  const handleAddFriend = (e) => {
    let element = e.target;
    if (element.tagName === 'BUTTON') {
      let key = Number(element.attributes.user_key.value);
      if (friends.includes(key)) {
        return
      } else {
        dispatch(addFriend(key));
        dispatch(createChat([key, this_user_key]));
      }
    } else {
      e.target = e.target.parentElement;
      handleAddFriend(e);
    }
  };

  const handleSend = () => {
    const text = document.querySelector('.message-text-container>textarea');
    const textContainer = document.querySelector('.message-in');

    if (text.value) {
      dispatch(updateChat({chat_id: chat.chat_id, message: {text: text.value, time: new Date().getTime(), name: user.name, key: this_user_key}}));
      text.value = null;
      text.style.height = 0;
      text.style.height = text.scrollHeight + 'px';
      textContainer.style.height = 41 + text.scrollHeight + 'px';
      setSendButton(like);
    } else {
      dispatch(updateChat({chat_id: chat.chat_id, message: {text: ':like:', time: new Date().getTime(), name: user.name}, key: this_user_key}));
    }
  };

  const handleHover = (e) => {
    let date = new Date(e.target.slot).toDateString();
  };

  const handleInput = (e) => {
    const textContainer = document.querySelector('.message-in');

    if (e.keyCode === 13) {
      e.preventDefault();
      handleSend();
    };

    if (!e.target.value) {
      setSendButton(like);
    } else {
      setSendButton(send);
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

  return (
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
          {cats && cats.map(cat => {
            return (
              <button key={cat.key} user_key={cat.key} onClick={e => handleAddFriend(e)}>
                <div className="user-item">
                  <div className="user-item-inside">
                    <div className="img-holder">
                      <img src={cat.avatar} alt="" />
                    </div>
                    <p>{cat.name}</p>
                  </div>
                </div>
              </button>
            )
          })}
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
          <div className="slide-box">
            <div className="slide-button">
              <button onClick={handleSliding}><img src={triangle} alt="" /></button>
            </div>
          </div>
          <div className="friends">
            <div>
              {chats && chats.map(chat => {
                let friend = chat.members.find(member => {
                  return member != this_user_key;
                });
                friend = cats.find(cat => {
                  return cat.key == friend;
                });
                return (
                  <div className="user-item" key={chat.chat_id}>
                    <Link className="user-item-inside" to={`/chats/${chat.chat_id}`}>
                      <div className="img-holder">
                        <img src={friend.avatar} alt="" />
                      </div>
                      <p>{friend.name}</p>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="chat-window">
          <div className="current-friend">
            {friend && (
              <div>
                <div>
                  <img src={friend.avatar} alt="" />
                </div>
                <p>{friend.name}</p>
              </div>
            )}
          </div>
          <div className="message-out">
            <div>
              {chat && chat.messages.map(message => {
                if (message.key === this_user_key) {
                  if (message.text === ':like:') {
                    return (
                      <div slot={message.time} className="sent message like" key={message.time} onMouseEnter={e => handleHover(e)}>
                        <img slot={message.time} className="purple" src={like} alt="" />
                      </div>
                    )
                  } else {
                    return (
                      <div slot={message.time} className="sent message" key={message.time} onMouseEnter={e => handleHover(e)}>
                        <p slot={message.time}>{message.text}</p>
                      </div>
                    )
                  }
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
              <textarea onKeyDown={handleInput}></textarea>
            </div>
            <div className="message-button-container">
              <button onMouseDown={handleSend}><img className="purple" src={sendButton} alt=""/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Home;
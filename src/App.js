import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { useSelector } from "react-redux";
import catImg from './Images/paw.png';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "./redux/user";
import sidebar_img from './Images/sidebar.png';
import { setRecieved } from "./redux/recieved";

function App() {
  const user = useSelector((state) => state.user.value);
  const recieved = useSelector((state) => state.recieved.value);
  const [divStyle, setDivStyle] = useState(null);
  const dispatch = useDispatch();
  const currentpath = useSelector(state => state.currentpath.value);

  useEffect(() => {
    if (user != null) {
      dispatch(setRecieved(true))
    };
  }, [user]);

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

  const handleClick_2 = () => {
    const sidebar = document.querySelector('.sidebar');
    const chat = document.querySelector('.chat-window-container');
    
    if (sidebar.style.display == '') {
      sidebar.style.display = 'block';
      chat.style.display = 'none';
    } else {
      sidebar.style.display = '';
      chat.style.display = '';
    }
  }

  return (
      <div className="App">
        <header className="header">
          <div>
            <div className="title">
              <div className="cat-img">
                <img src={catImg} alt=""/>
              </div>
              <h1>Cat Room</h1>
            </div>
            {user && <button className="sidebar-button img-holder purple" onClick={handleClick_2}>
              <img src={sidebar_img} alt="" />
            </button>}
            {user && currentpath != '/cat-room' && (
              <div className="drop-down-container">
                <div className="drop-down-button-container">
                  <button className="user drop-down-button" onClick={handleClick}>
                    <img src={user.avatar} alt=""/>
                  </button>
                </div>
                <div className="user drop-down-menu" style={divStyle}>
                  <div>
                    <img src={user.avatar} alt=""/>
                    <h3>{user.name}</h3>
                    <button onClick={() => dispatch(logout())}>Log Out</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
        <BrowserRouter basename="/cat-room">
            <Routes>
              <Route exact path='/' element={recieved == true ? <Navigate to='/chats/0' /> : <Login />} />
              <Route path='/chats/:id' element={user == null ? <Navigate to='/' /> : <Home />} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

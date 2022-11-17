import { useDispatch } from "react-redux";
import { logout } from "../redux/user";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const handleClick = () => {
    const dropDownMenu = document.querySelector('.drop-down-menu');

    if (dropDownMenu.hidden == true) {
      dropDownMenu.hidden = false;
      dropDownMenu.style.display = 'flex';
    } else {
      dropDownMenu.hidden = true;
      dropDownMenu.style.display = 'none';
    }
  };

  return (
    <div className="home background">
      <header className="header logged-in">
        <div>
          <div className="title">
            <h1>Cat Room</h1>
          </div>
          <div className="drop-down-container">
            <div className="drop-down-button-container">
              <button className="user drop-down-button" onClick={handleClick}>
                <img src={user.value.avatar}/>
              </button>
            </div>
            <div className="user drop-down-menu" hidden>
              <img src={user.value.avatar}/>
              <h3>{user.value.name}</h3>
              <button onClick={() => dispatch(logout())}>Log Out</button>
            </div>
          </div>
        </div>
      </header>
      <div className="content home">
        <div className="chat-window">

        </div>
      </div>
    </div>
  );
};
 
export default Home;
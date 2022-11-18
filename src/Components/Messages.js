import { setMessages } from "../redux/messages";
import { useDispatch } from "react-redux";
import uniqid from 'uniqid';

const Messages = () => {
  const dispatch = useDispatch();

  const catOne = () => {
    console.log('hi')
  };

  const catTwo = () => {

  };

  const catThree = () => {

  };

  const sendMessage = (text) => {
    dispatch(setMessages({text: text, time: new Date().getTime(), type: 'recieved'}));
  };

  return {
    catOne,
    catTwo,
    catThree
  }
}

export default Messages;
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.value);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/login' element={user != null ? <Navigate to='/' /> : <Login />} />
          <Route exact path='/' element={user == null ? <Navigate to='/login' /> : <Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

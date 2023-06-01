import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeaderTop from "./Components/HeaderTop";
import Login from "./Components/Login";
import Main from "./Components/Main";
import Register from "./Components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <HeaderTop></HeaderTop>
    <Header></Header>
  <Routes>
    <Route path="/" element={<Main></Main>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/register" element={<Register></Register>}></Route>
    <Route path="/home" element={<Main></Main>}></Route>
  </Routes>
  <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

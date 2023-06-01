import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidate";
import axios from "axios";
function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleInput=(event)=>{
    setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
  }
  const [errors,setErrors]=useState({})
  const navigate = useNavigate();
  const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(Validation(values))
    if( errors.email===""&& errors.password===""){
      axios.post('http://localhost:3001/register',values)
      .then(res=>{
        if(res.data === "success"){
          navigate('/home')
        }else{
          alert("sai mk")
        }
      })
      .catch(err=>console.log(err))
      }
  }
  return (
    <form action="" onSubmit={handleSubmit} className="login1">
      <h3 className="h3Login">Đăng Nhập Tài Khoản CGV</h3>

      <b>Email hoặc số điện thoại</b>
      <input onChange={handleInput}
        type="text"
        className="ipnLogin"
        placeholder="Email " name="email"
      />
      {errors.email && <span>{errors.email}</span> }
      <b>Mật Khẩu</b>
      <input onChange={handleInput} type="password" className="ipnPass" placeholder="Mật Khẩu" name="password"  />
      {errors.password && <span>{errors.password}</span> }
      <button type="submit" className="btnLogin">
        Đăng Nhập
      </button>
      <Link to="/register" href="" className="aLogin">
        Đăng Ký Tài Khoản
      </Link>
    </form>
  );
}

export default Login;

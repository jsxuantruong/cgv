import React ,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./RegisterValidate";
import axios from "axios";
function Register() {
  const [values, setValues] = useState({
    name:"",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInput=(event)=>{
    setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
  }
  const [errors,setErrors]=useState({})
  const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(Validation(values));
    if(errors.name ==="" && errors.email===""&& errors.password===""){
    axios.post('http://localhost:3001/register',values)
    .then(res=>{
      navigate('/')
   
    })
    .catch(err=>console.log(err))
    }
  }
  return (
    <form action="" className="login1" onSubmit={handleSubmit}>
      <h3 className="h3Login">Đăng Ký Tài Khoản CGV</h3>
      <b>Họ và Tên</b>
      <input onChange={handleInput} type="text" placeholder="Họ và Tên" className="ipnLogin" name="name"  />
      {errors.name && <span>{errors.name}</span> }
      <b>Email </b>
      <input onChange={handleInput}
        type="text"
        className="ipnLogin"
        placeholder="Email " name="email"
      />
       {errors.email && <span>{errors.email}</span> }
      <b>Mật Khẩu</b>
      <input onChange={handleInput} type="password" className="ipnPass" placeholder="Mật Khẩu" name="password" />
      {errors.password && <span>{errors.password}</span> }
      <button className="btnRegister">Đăng Ký</button>
      <Link to="/login" href="" className="aLogin">
        Bạn Đã Có Tài Khoản?
      </Link>
    </form>
  );
}

export default Register;

import React from "react";
import { Link } from "react-router-dom";
function HeaderTop() {
  return (
    <div className="header-language-background">
      <div class="header-top-account">
     <div className="login">
        <Link to="/login"><i class="fa-solid fa-user"></i> Đăng Nhập/</Link>
        <Link to="register">Đăng Ký</Link>
     </div>
     </div>
    </div>
  );
}

export default HeaderTop;

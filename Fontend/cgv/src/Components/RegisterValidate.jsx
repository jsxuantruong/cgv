function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^[^\s@]+@[^\s@]+$/;
    if (values.email === "") {
      error.email = "email không dc để trống";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Nhập đúng định dạng email";
    } else {
      error.email = "";
    }
    if (values.password === "") {
      error.password = "password không dc để trống";
    } else if (!password_pattern.test(values.password)) {
      error.password = "Nhập đúng định dạng password";
    } else {
      error.password = "";
    }
    
    return error;
  }
  export default Validation
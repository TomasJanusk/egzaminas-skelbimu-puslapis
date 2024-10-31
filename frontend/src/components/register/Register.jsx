import { useState } from "react";
import axios from "axios";
import { url } from "../../utilities/backend";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPasword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/users/register`, user);
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("role", res.data.role);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="container  col-xl-10 col-xxl-8 px-4 py-5 p-3 mb-2">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-md-10 mx-auto col-lg-5">
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <form
            className="p-4 p-md-5 border rounded-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded"
            onSubmit={handleSubmit}
          >
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={user.username}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">User name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm password"
                value={user.confirmPassword}
                onChange={handleChange}
              />
              <label htmlFor="floatingPassword">Confirm password</label>
            </div>
            <hr className="my-4" />
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Register
            </button>

            <div className="m-2 w-75 text-center">
              <a href="/login">Have an account?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

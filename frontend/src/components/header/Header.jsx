import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    navigate("/login");
  };
  const handlePost = () => {
    navigate("/form");
  };
  const handleMain = () => {
    navigate("/");
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  const handleUsers = () => {
    navigate("/users");
  };
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-around py-3 mb-4 border-bottom text-bg-dark p-3 ">
      <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <div className="d-inline m-1">
          {localStorage.getItem("token") && (
            <button className="btn btn-secondary fs-1" onClick={handleMain}>
              Home
            </button>
          )}
        </div>
        <div className="d-inline m-1">
          {localStorage.getItem("token") && (
            <button className="btn btn-secondary fs-1" onClick={handlePost}>
              Add
            </button>
          )}
        </div>
      </div>
      <div>
        <div className="d-inline m-1">
          {localStorage.getItem("token") && (
            <button className="btn btn-secondary fs-1" onClick={handleUsers}>
              Users
            </button>
          )}
        </div>
        <div className="d-inline m-1">
          {localStorage.getItem("token") && (
            <button className="btn btn-secondary fs-1" onClick={handleProfile}>
              {username}
            </button>
          )}
        </div>
        <div className="d-inline m-1">
          {localStorage.getItem("token") && (
            <button className="btn btn-secondary fs-1" onClick={handleLogout}>
              Log Out
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

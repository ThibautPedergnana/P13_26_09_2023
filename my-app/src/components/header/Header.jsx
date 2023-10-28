import React from "react";
import mainLogo from "../../assets/img/argentBankLogo.png";
import "../../../src/Global.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_USER } from "../../store/reducers/userReducer";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onLogout = () => {
    localStorage.removeItem("token");
    dispatch({ type: REMOVE_USER });
    navigate("/login");
  };

  const onSignIn = () => {
    navigate("/login");
  };

  const onClickProfile = () => {
    navigate("/profile");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={mainLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {user ? (
          <>
            <span className="main-nav-item pseudo" onClick={onClickProfile}>
              {user.firstName}
            </span>
            <span className="main-nav-item" onClick={onLogout}>
              <i className="fa fa-user-circle"></i>
              Logout
            </span>
          </>
        ) : (
          <span className="main-nav-item" onClick={onSignIn}>
            <i className="fa fa-user-circle"></i>
            Sign In
          </span>
        )}
      </div>
    </nav>
  );
}

export default Header;

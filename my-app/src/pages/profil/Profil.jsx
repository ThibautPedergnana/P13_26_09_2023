import React, { useEffect, useMemo, useState } from "react";
import Container from "../../components/container/Container";
import "../../../src/Global.css";
import CheckingBalance from "../../components/balance/CheckingBalance";
import CreditCardBalance from "../../components/balance/CreditCardBalance";
import SavingsBalance from "../../components/balance/SavingsBalance";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  getAuthToken,
  getCurrentProfile,
  updateAxiosAuthorization,
  updateProfile,
} from "../../services/apiService";
import {
  ADD_USER,
  REMOVE_USER,
  UPDATE_USER,
} from "../../store/reducers/userReducer";

function Profil() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [showEditButton, setShowEditButton] = useState(true);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const toggleEditButton = () => {
    setShowEditButton(!showEditButton);
    setIsOpenUpdate(!isOpenUpdate);
  };

  const initUserProfile = async () => {
    updateAxiosAuthorization();
    const profileUser = await getCurrentProfile();
    dispatch({ type: ADD_USER, payload: profileUser });
  };

  useEffect(() => {
    if (!getAuthToken()) {
      user && dispatch({ type: REMOVE_USER });
      navigate("/login");
    } else initUserProfile();
  }, []);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
    }
  }, [user]);

  const fullName = useMemo(
    () => (user ? `${user.firstName} ${user.lastName}` : ""),
    [user]
  );

  const updateProfileUser = async () => {
    const profileUpdated = await updateProfile({
      firstName: firstName,
      lastName: lastName,
    });
    dispatch({
      type: UPDATE_USER,
      payload: profileUpdated,
    });
  };

  return (
    <Container>
      {user ? (
        <div className="main bg-dark">
          <div className="header">
            <h1>
              Welcome back
              <br />
              {fullName}
            </h1>
            {showEditButton && (
              <button
                className="edit-button"
                onClick={() => toggleEditButton(true)}
              >
                Edit Name
              </button>
            )}
            {isOpenUpdate && (
              <div className="container-profil-input">
                <input
                  className="profil-firstname-input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  name="firstName"
                />
                <input
                  className="profil-lastname-input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  name="lastName"
                />
              </div>
            )}

            {!showEditButton && (
              <div className="container-profil-button">
                <button
                  className="edit-button save-button"
                  onClick={updateProfileUser}
                >
                  Save
                </button>
                <button
                  className="edit-button cancel-button"
                  onClick={() => toggleEditButton(true)}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
          <h2 className="sr-only">Accounts</h2>
          <CheckingBalance />
          <SavingsBalance />
          <CreditCardBalance />
        </div>
      ) : (
        <>Loading...</>
      )}
    </Container>
  );
}

export default Profil;

// export const ProfileStore = connect(
//   (state) => ({
//     user: userSelector(state),
//   }),
//   (dispatch) => ({
//     add: (user) => dispatch(addUserAction(user)),
//   })
// )(Profile);

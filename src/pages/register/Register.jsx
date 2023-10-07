import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.scss";
import InputField from "../../components/inputField/InputField";

const inputArr = [
  {
    name: "name",
    placeholder: "Name",
    errorText: "Field is required",
    value: "",
    minLength: 3,
    id: 0,
  },
  {
    name: "username",
    placeholder: "UserName",
    errorText: "Field is required",
    value: "",
    minLength: 3,
    id: 1,
  },
  {
    name: "email",
    placeholder: "Email",
    errorText: "Field is required",
    value: "",
    minLength: 3,
    id: 2,
  },
  {
    name: "mobile",
    placeholder: "Mobile",
    errorText: "Field is required",
    value: "",
    minLength: 3,
    id: 3,
  },
];

const userdataObj = {
  name: "",
  username: "",
  email: "",
  mobile: "",
};

const Register = () => {
  const [userData, setUserData] = useState(userdataObj);
  const [error, setError] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isCheckboxErrorShowing, setIsCheckboxErrorShowing] = useState(false);

  const navigate = useNavigate();

  // console.log("userData: ", userData);
  // console.log("error: ", error);
  // console.log("isCheckbox: ", isCheckboxChecked);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    // console.log("userData: ", userData);
  };

  const handleCheckbox = (e) => {
    // console.log("checkbox e: ", e);
    setIsCheckboxChecked(e.target.checked);
    // console.log("isCheckboxChecked: ", isCheckboxChecked)
    if (e.target.checked == false) {
      setIsCheckboxErrorShowing(true);
    } else if (e.target.checked == true) {
      setIsCheckboxErrorShowing(false); //reseting the checkbox error state to false if checkbox is checked
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log("isCheckboxChecked: ", isCheckboxChecked);
    let err = handleError();
    // console.log("form submit e: ", e);
    // console.log("submit error: ", error);
    if (isCheckboxChecked == true && err == false) {
      console.log("form userData is: ", userData);

      setUserData(userdataObj); //reseting the form
      setIsCheckboxChecked(false); //reseting the checkbox
      setError(false); //reseting the error state
      // Serializing the object using JSON.stringify()
      const userDataStr = JSON.stringify(userData); 
      localStorage.setItem("registerData", userDataStr);
      navigate('/categories')
    } else if (isCheckboxChecked == false) {
      setIsCheckboxErrorShowing(true);
    } else {
      console.log("Form not completed.");
    }
  };

  const handleError = () => {
    let { name, username, email, mobile } = userData;
    if (
      name.length == 0 ||
      username.length == 0 ||
      email.length == 0 ||
      mobile.length == 0 ||
      isCheckboxChecked == false
    ) {
      setError(true);
      return true;
    } else {
      // console.log("no error");
      setError(false);
      return false;
    }
  };

  return (
    <div className="registration-container flex">
      <div className="bg-section flex">
        <h1>Discover new things on Superapp</h1>
      </div>

      <div className="register">
        <h1 className="super-app-logo ff-single-day">Super app</h1>
        <p className="title-text">Create your new account</p>

        <form className="register-form ff-dm-sans" onSubmit={handleFormSubmit}>
          {inputArr.map((input) => {
            return (
              <InputField
                key={input.id}
                {...input}
                value={userData[input.name]}
                onChange={handleChange}
                error={error}
              />
            );
          })}

          <div className="checkbox">
            <div className="checkbox-field">
              <input
                type="checkbox"
                checked={isCheckboxChecked}
                readOnly={true}
                onClick={handleCheckbox}
              />
              <label>Share my registration data with Superapp</label>
            </div>
            {isCheckboxErrorShowing ? (
              <p>Check this box if you want to proceed</p>
              
            ) : (
              ""
            )}
          </div>

          <button className="signup-btn">Sign Up</button>

          <p className="form-footer">
            By clicking on Sign up. you agree to Superapp{" "}
            <span className="light-green">Terms and Conditions of Use</span>
          </p>

          <p className="form-footer">
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
            <span className="light-green">Privacy Policy</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

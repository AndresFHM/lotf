
import { FormEvent, useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { FunctionalPhoneInput, FunctionalPhoneInputState } from "./FunctionalPhoneInput";
import { allCities } from "../utils/all-cities";
import { calculateIsFirstNameValid, calculateIsLastNameValid, isEmailValid, isCityValid } from "../utils/validations";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cityInput, setCityInput] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFirstNameInputValid = calculateIsFirstNameValid(firstNameInput);
  const isLastNameInputValid = calculateIsLastNameValid(lastNameInput);
  const isEmailInputValid = isEmailValid(emailInput);
  const isCityInputValid = isCityValid(cityInput)
  const [isPhoneInputValid, setIsPhoneInputValid] = useState(false);

  const shouldShowFirstNameError = isSubmitted && !isFirstNameInputValid;
  const shouldShowLastNameError = isSubmitted && !isLastNameInputValid;
  const shouldShowEmailError = isSubmitted && !isEmailInputValid;
  const shouldShowCityError = isSubmitted && !isCityInputValid;
  const shouldShowPhoneError = isSubmitted && !isPhoneInputValid;

  const [phoneInput, setPhoneInput] = useState<FunctionalPhoneInputState>([
    "", 
    "",
    "",
    ""]);


  const setPhoneInputState = (newState: FunctionalPhoneInputState) => {
    const isInputFilled = newState.every((input) => input.length > 0);
    setIsPhoneInputValid(isInputFilled);
    setPhoneInput(newState)
  }

  const userSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  }


  return (
    <form
      id="user-info-form"
      onSubmit={userSubmitHandle}      
    >
      <u>
        <h3>User Information Form</h3>
      </u>

      {/* first name input */}
      <div className="input-wrap">
        <label>{"First Name"}:</label>
        <input
          placeholder="Bilbo"
          onChange={(e) => {
            setFirstNameInput(e.target.value)
          }}
          value={firstNameInput}
        />
      </div>
      {shouldShowFirstNameError && (
        <ErrorMessage message={firstNameErrorMessage} show={true} />
      )}


      {/* last name input */}
      <div className="input-wrap">
        <label>{"Last Name"}:</label>
        <input
          placeholder="Baggins"
          onChange={(e) => {
            setLastNameInput(e.target.value)
          }}
          value={lastNameInput}
        />
      </div>
      {shouldShowLastNameError && (
        <ErrorMessage message={lastNameErrorMessage} show={true} />
      )}


      {/* Email Input */}
      <div className="input-wrap">
        <label>{"Email"}:</label>
        <input
          placeholder="bilbo-baggins@adventurehobbits.net"
          onChange={(e) => {
            setEmailInput(e.target.value)
          }}
          value={emailInput}
        />
      </div>
      {shouldShowEmailError && (
        <ErrorMessage message={emailErrorMessage} show={true} />
      )}


      {/* City Input */}
      <div className="input-wrap city-input-container">
        <label>{"City"}:</label>
        <input
          className="city-input"
          placeholder="Hobbiton"
          onChange={(e) => {
            setCityInput(e.target.value)
          }}
          value={cityInput}
        />
      </div>
      {shouldShowCityError && (
        <ErrorMessage message={cityErrorMessage} show={true} />
      )}


      <FunctionalPhoneInput
        phoneInputState={phoneInput}
        setPhoneInputState={setPhoneInputState}
      /> 
      <ErrorMessage message={phoneNumberErrorMessage} show={shouldShowPhoneError} />

      <input type="submit" value="Submit" />
    </form>
  );
};
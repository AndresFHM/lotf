
import { FormEvent, useState } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { FunctionalPhoneInput, FunctionalPhoneInputState } from "./FunctionalPhoneInput";
import { allCities } from "../utils/all-cities";
import { calculateIsFirstNameValid, calculateIsLastNameValid, isEmailValid } from "../utils/validations";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export const FunctionalForm = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFirstNameInputValid = calculateIsFirstNameValid(firstNameInput);
  const isLastNameInputValid = calculateIsLastNameValid(lastNameInput);
  const isEmailInputValid = isEmailValid(emailInput);
  

  const shouldShowFirstNameError = isSubmitted && !isFirstNameInputValid
  const shouldShowLastNameError = isSubmitted && !isLastNameInputValid
  const shouldShowEmailError = isSubmitted && !isEmailInputValid

  const [selectedCity, setSelectedCity] = useState("");
  const [phoneInput, setPhoneInput] = useState<FunctionalPhoneInputState>([
    "", 
    "",
    "",
    ""]);
  const [isPhoneInputValid, setIsPhoneInputValid] = useState(false);

  const setPhoneInputState = (newState: FunctionalPhoneInputState) => {
    const isInputFilled = newState.every((input) => input.length > 0);
    setIsPhoneInputValid(isInputFilled);
    setPhoneInput(newState)
  }

  const userSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  }
  const shouldShowPhoneError = isSubmitted && !isPhoneInputValid;

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

      <div className="input-wrap">
        <label>{"City"}:</label>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="city-select"
        >
        <option disabled value="">
          Hobbiton
        </option>
          {allCities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
        ))}
        </select>

      </div>
      <ErrorMessage message={cityErrorMessage} show={!selectedCity} />

      <FunctionalPhoneInput
        phoneInputState={phoneInput}
        setPhoneInputState={setPhoneInputState}
      /> 
      <ErrorMessage message={phoneNumberErrorMessage} show={shouldShowPhoneError} />

      <input type="submit" value="Submit" />
    </form>
  );
};


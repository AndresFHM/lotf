import { Component, FormEvent } from "react";
import { ErrorMessage } from "../ErrorMessage";
import { allCities } from "../utils/all-cities";

const firstNameErrorMessage = "First name must be at least 2 characters long";
const lastNameErrorMessage = "Last name must be at least 2 characters long";
const emailErrorMessage = "Email is Invalid";
const cityErrorMessage = "State is Invalid";
const phoneNumberErrorMessage = "Invalid Phone Number";

export class ClassForm extends Component {
  userSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  };
  render() {
    return (
      <form id="user-info-form" onSubmit={this.userSubmitHandle}>
        <u>
          <h3>User Information Form</h3>
        </u>

        {/* first name input */}
        <div className="input-wrap">
          <label>{"First Name"}:</label>
          <input placeholder="Bilbo" />
        </div>
        <ErrorMessage message={firstNameErrorMessage} show={true} />

        {/* last name input */}
        <div className="input-wrap">
          <label>{"Last Name"}:</label>
          <input placeholder="Baggins" />
        </div>
        <ErrorMessage message={lastNameErrorMessage} show={true} />

        {/* Email Input */}
        <div className="input-wrap">
          <label>{"Email"}:</label>
          <input placeholder="bilbo-baggins@adventurehobbits.net" />
        </div>
        <ErrorMessage message={emailErrorMessage} show={true} />

        {/* City Input */}
        <div className="input-wrap">
          <label>{"City"}:</label>
          <select
          value="Hobbiton"

          className="city-select"
          >
          <option value="">Hobbiton</option>
            </select>
        </div>
      {/* <div className="input-wrap">
        <label>{"City"}:</label>
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="city-select"
        >
          <option value="">Hobbiton</option>
          {allCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div> */}

        <ErrorMessage message={cityErrorMessage} show={true} />

        <div className="input-wrap">
          <label htmlFor="phone">Phone:</label>
          <div id="phone-input-wrap">
            <input type="text" id="phone-input-1" placeholder="55" />
            -
            <input type="text" id="phone-input-2" placeholder="55" />
            -
            <input type="text" id="phone-input-3" placeholder="55" />
            -
            <input type="text" id="phone-input-4" placeholder="5" />
          </div>
        </div>

        <ErrorMessage message={phoneNumberErrorMessage} show={true} />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

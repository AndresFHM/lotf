import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";
import { PhoneInput, PhoneInputState } from "../PhoneInput";
import { createRef, useState } from "react";

export const FunctionalApp = () => {
  const [phoneInput, setPhoneInput] = useState<PhoneInputState>(["", "", ""]);
  const reset = () => {
    setNameInput("");
    setPhoneInput(["", "", ""])
  }
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
      reset()   
      }}>

      <PhoneInput phoneInputState={phoneInput} setPhoneInputState={setPhoneInput} />
      <input type="submit" value="Submit" />
      </form>
      <h2>Functional</h2>

      <ProfileInformation userData={null} />
      <FunctionalForm />
    </>
  );
};
function setNameInput(arg0: string) {
  throw new Error("Function not implemented.");
}


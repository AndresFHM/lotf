
import { ProfileInformation } from "../ProfileInformation";
import { FunctionalForm } from "./FunctionalForm";


export const FunctionalApp = () => {

  const reset = () => {
    setNameInput("");
  }
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
      reset()   
      }}>

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


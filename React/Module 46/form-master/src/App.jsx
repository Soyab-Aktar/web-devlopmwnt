import "./App.css";
import CustomHookForm from "./Components/CustomHookForm/CustomHookForm";
import GrandPa from "./Components/GrandPa/GrandPa";
import RefForm from "./Components/RefForm/RefForm";
import ReusableForm from "./Components/Reusableform/ReusableForm";
import SimpleForm from "./Components/SimpleForm/SimpleForm";
import StateFullForm from "./Components/StateFullForm/StateFullForm";

function App() {
  // const handleSignSubmit = (data) => {
  //   console.log("Sign Up Data", data);
  // };
  // const handleUpdateProfile = (data) => {
  //   console.log("Update Profile Data", data);
  // };
  return (
    <div>
      {/* <h1>Simple Form</h1> */}
      {/* <SimpleForm></SimpleForm> */}
      {/* <h1>State Full Form</h1> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <CustomHookForm></CustomHookForm> */}
      {/* <ReusableForm
        formTitle={"Sign Up"}
        handleSubmit={handleSignSubmit}
        submitBtn={"Submit"}
      >
        <div>Lets Sign Up</div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        submitBtn={"Update"}
        handleSubmit={handleUpdateProfile}
      >
        <div>Lets Update Profile</div>
      </ReusableForm> */}
      <GrandPa></GrandPa>
    </div>
  );
}

export default App;

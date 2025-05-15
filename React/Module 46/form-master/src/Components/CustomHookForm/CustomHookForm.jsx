import useInputState from "../../Hooks/useInputState";

const CustomHookForm = () => {
  // const [name, handleNameChange] = useInputState("Soyab");
  const emailState = useInputState("iamkonsu@gmail.com");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data", emailState.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          className="input"
        /> */}
        <br />
        <input {...emailState} type="email" name="email" className="input" />
        <br />
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
};

export default CustomHookForm;

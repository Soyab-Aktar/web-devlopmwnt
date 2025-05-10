import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
  };
  return (
    <div>
      <h1>Ref Form</h1>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="name" className="input" />
        <br />
        <input ref={emailRef} type="email" name="email" className="input" />
        <br />
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
};

export default RefForm;

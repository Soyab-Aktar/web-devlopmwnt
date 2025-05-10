const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log("Form Submitted ..");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" className="input" />
        <br />
        <input type="email" name="email" className="input" />
        <br />
        <input type="submit" value="Submit" className="btn" />
      </form>
    </div>
  );
};

export default SimpleForm;

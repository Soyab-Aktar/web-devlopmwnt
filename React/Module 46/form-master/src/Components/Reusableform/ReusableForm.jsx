const ReusableForm = ({ submitBtn, handleSubmit, children }) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      {children}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" className="input mb-4" />
        <br />
        <input type="email" name="email" className="input mb-4" />
        <br />
        <input type="password" name="password" className="input mb-4" />
        <br />
        <input type="submit" value={submitBtn} className="btn" />
      </form>
    </div>
  );
};

export default ReusableForm;

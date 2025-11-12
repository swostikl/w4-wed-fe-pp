import { useState } from "react";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const contactUsInformation = {
      name,
      email,
      phone,
    };

    console.log(contactUsInformation);

    // Reset the form state.
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="form-container">
      <h2>Registration form</h2>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            className="form-input"
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-input"
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Phone:
          </label>
          <input
            className="form-input"
            id="phone"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Registration;

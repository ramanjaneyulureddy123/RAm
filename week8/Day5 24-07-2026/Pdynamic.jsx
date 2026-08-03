import { useState } from "react";

function Pdynamic() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit=(e)=>{
    
    e.preventDefault()
    console.log(form)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="name"
        value={form.name}
        onChange={handleChange}
      />
      <br/>
      <br/>

      <input
        name="email"
        placeholder="email"
        value={form.email}
        onChange={handleChange}
      />
      <br/>
      <br/>
      <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default Pdynamic
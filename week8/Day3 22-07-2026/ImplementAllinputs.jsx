import React, { useState } from 'react'

function ImplementAllinputs() {
    const [formData, setFormData]=useState({
        name:"", email:"", address:"",country:"",gender:"",skills:[], file:null
    })
    // handle input chnages 
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    // handle checkbox

    const handleCheckbox=(e)=>{
        const {value, checked}=e.target
    
    setFormData({
        ...formData,
        skills: checked ? [...formData.skills, value]
        : formData.skills.filter((skill)=> skill !==value)
    })
    }
    // handle file upload 

    const handleFile=(e)=>{
        setFormData({
            ...formData,
            file:e.target.files[0]
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div>
      <h2>Registration form</h2>
      <form onSubmit={handleSubmit}>
{/* Text Field */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

{/* Email Field */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        {/* Text Area */}
        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <br /><br />

        <label>Country:</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        <br /><br />

        {/* Radio Buttons */}
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        /> Male

        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        /> Female

        <br /><br />

        
        {/* Checkboxes */}
        <label>Skills:</label>
<input
          type="checkbox"
          value="HTML"
          onChange={handleCheckbox}
        /> HTML

        <input
          type="checkbox"
          value="CSS"
          onChange={handleCheckbox}
        /> CSS

        <input
          type="checkbox"
          value="JavaScript"
          onChange={handleCheckbox}
        /> JavaScript

        <br /><br />

        {/* File Input */}
        <label>Upload File:</label>
        <input
          type="file"
          onChange={handleFile}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ImplementAllinputs

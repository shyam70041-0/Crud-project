import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Directory.css";
import { Link } from "react-router-dom";
// This link will send the user to the "/directory" route
<Link to="/directory">Go to Directory</Link>;

//The component named Directory is starting
function Directory() {

 // The complete list of students or directory is stored in the entries state. 
  const [entries, setEntries] = useState([]);

  // The data of the input fields of the form is stored in the formData state.
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
  });
  // showForm true/false whether to show the popup form or not.
  const [showForm, setShowForm] = useState(false);

  // Load entries on page load
  //Use effect always call on load of the page
  useEffect(() => {

    getStudentList(); // The student list is fetched as soon as the component is loaded.
  }, []);

  //This function call to get latest list of student data
  function getStudentList() {
    axios
      .get("http://localhost:5000/api/directory")
      .then((res) => {
        setEntries(res.data); // The data received in response was put into the entries state.
      })
      .catch((err) => {
        console.error("Fetch error:", err.message); // If any error occurs then print it in console.
      });
  }

  // This function updates the formData when any input of the form changes.
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //This function help to create new student entry in the table
  const createDirectry = async () => {
    //it help  to check weather all required field have data or not
    if (!formData.name || !formData.mobile || !formData.address) {
      alert("Please fill all fields.");
      return;
    }
     // A POST request is sent with the formData.
    axios
      .post("http://localhost:5000/api/directory", formData)
      .then((res) => {
        getStudentList(); // After making a new entry, bring back a fresh list.
        setFormData({ name: "", mobile: "", address: "" }); // reset the form fields.
        setShowForm(false); // close the popup form.
      })
      .catch((err) => {
        console.error("Fetch error:", err.message);
      });
  };

  return (
    <div className="directory-container"> {/* main container div */}
      <h2>Directory</h2>
      <button className="add-btn" onClick={() => setShowForm(true)}>
        Add  {/* This button will open a popup form */}
      </button>
       {/* If showForm is true then the form popup will be displayed */}
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-top-form">
            <h3>Add Entry</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="number"
              name="mobile"
              placeholder="Mobile"
              maxlength="10"
              value={formData.mobile}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <div className="btn-group">
              <button onClick={createDirectry}>Save</button>
              <button onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      
      {/* A table showing all entries */}
      <table className="directory-table">
        {/* table heading */}
        <thead> 
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>

          {/* Each entry is displayed as a single row */}
          {entries?.map((entry, idx) => (
            <tr key={idx}>
              {console.log("entry : " + entry, idx)}   (console log for debugging purpose)
              <td>{entry.name}</td>
              <td>{entry.mobile}</td>
              <td>{entry.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Directory;

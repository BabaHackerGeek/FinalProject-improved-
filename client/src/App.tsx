// import {useState, useEffect} from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   const [data, setData] = useState(null);
//   const [name, setName] = useState(null);
//   const BASE_URL = process.env.REACT_APP_BASE_URL;
//   const send = () => {
//    if(name){
//     fetch(`/api/${name}`)
//       .then((res) => {
//         console.log("res", res);
//         return res.json();
//       })
//       .then((data) => {
//         console.log("data", data);
//         setData(data.message);
//       })
//       .catch((e) => console.log(e));
//     }
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{!data ? "write your name..." : data}</p>
//         <input onChange={(e)=>setName(e.target.value)}/>
//         <button onClick={()=>send()}>Send</button>
//       </header>
//     </div>
//   );
// }

// export default App;


// client/src/App.js
import React, { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";

// Define an interface for the form data
interface FormData {
  firstName: string;
  lastName: string;
  eventDate: string;
  eventCity: string;
  email: string;
  phone: string;
  serviceType: string;
  guestCount: string;
  eventDetails: string;
}

const App: React.FC = () => {
  // Initialize the state with the FormData type
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    eventDate: "",
    eventCity: "",
    email: "",
    phone: "",
    serviceType: "",
    guestCount: "",
    eventDetails: "",
  });

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        alert("Form submitted successfully");
        // Clear the form
        setFormData({
          firstName: "",
          lastName: "",
          eventDate: "",
          eventCity: "",
          email: "",
          phone: "",
          serviceType: "",
          guestCount: "",
          eventDetails: "",
        });
      } else {
        console.error(data.message);
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="App">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          First Name *
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Last Name *
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Event Date *
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          City where the event will take place *
          <input
            type="text"
            name="eventCity"
            value={formData.eventCity}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email Address *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number *
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="(?=.*[+\d])[+\d\s]+"
            required
          />
        </label>

        <label>
          Service Type *
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="wedding">Wedding</option>
            <option value="private-event">Private Event</option>
            <option value="professional-event">Professional Event</option>
          </select>
        </label>

        <label>
          Estimated Number of Guests *
          <input
            type="number"
            name="guestCount"
            value={formData.guestCount}
            onChange={handleChange}
            min="1"
            required
          />
        </label>

        <label>
          About Your Event (Optional)
          <textarea
            name="eventDetails"
            value={formData.eventDetails}
            onChange={handleChange}
            rows={5}
          ></textarea>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

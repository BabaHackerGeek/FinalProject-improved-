// import React, { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     eventDate: '',
//     eventCity: '',
//     email: '',
//     phone: '',
//     serviceType: '',
//     guestCount: '',
//     eventDetails: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Submitted:', formData);
//     // Add form submission logic here (e.g., API call)
//   };

//   return (
//     <div className="contact-container">
//       <h2>Contact Form</h2>
//       <form onSubmit={handleSubmit} className="contact-form">
//         <label>First Name</label>
//         <input 
//           type="text" 
//           name="firstName" 
//           value={formData.firstName} 
//           onChange={handleChange} 
//           required 
//         />

//         <label>Last Name</label>
//         <input 
//           type="text" 
//           name="lastName" 
//           value={formData.lastName} 
//           onChange={handleChange} 
//           required 
//         />

//         <label>Event Date</label>
//         <input 
//           type="date" 
//           name="eventDate" 
//           value={formData.eventDate} 
//           onChange={handleChange} 
//           required 
//         />

//         <label>City where the event will take place</label>
//         <input 
//           type="text" 
//           name="eventCity" 
//           value={formData.eventCity} 
//           onChange={handleChange} 
//           required 
//         />

//         <label>Email Address</label>
//         <input 
//           type="email" 
//           name="email" 
//           value={formData.email} 
//           onChange={handleChange} 
//           required 
//         />

//         <label>Phone Number (without spaces)</label>
//         <input 
//           type="tel" 
//           name="phone" 
//           value={formData.phone} 
//           onChange={handleChange} 
//           pattern="\d*" 
//           required 
//         />

//         <label>You would like to use our services for:</label>
//         <select 
//           name="serviceType" 
//           value={formData.serviceType} 
//           onChange={handleChange} 
//           required
//         >
//           <option value="">Select an option</option>
//           <option value="wedding">Wedding</option>
//           <option value="private-event">Private Event</option>
//           <option value="professional-event">Professional Event</option>
//         </select>

//         <label>What is your event budget?</label>
//         <select 
//           name="budget" 
//           value={formData.budget} 
//           onChange={handleChange} 
//           required
//         >
//           <option value="">Select an option</option>
//           <option value="option1">$75-$100K</option>
//           <option value="option2">$100-$150K</option>
//           <option value="option3">$150-$250K</option>
//           <option value="option4">$250K+</option>
//         </select>

//         <label>Estimated Number of Guests</label>
//         <input 
//           type="number" 
//           name="guestCount" 
//           value={formData.guestCount} 
//           onChange={handleChange} 
//           min="1" 
//           required 
//         />

//         <label>About Your Event - Tell Us About Your Dream in More Detail...</label>
//         <textarea 
//           name="eventDetails" 
//           value={formData.eventDetails} 
//           onChange={handleChange} 
//           rows="10" 
//           required 
//         ></textarea>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;


import React, { useState, ChangeEvent, FormEvent } from 'react';
import './Contact.css';

interface FormData {
  firstName: string;
  lastName: string;
  eventDate: string;
  eventCity: string;
  email: string;
  phone: string;
  serviceType: string;
  budget: string;
  guestCount: string;
  eventDetails: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    eventDate: '',
    eventCity: '',
    email: '',
    phone: '',
    serviceType: '',
    budget: '',
    guestCount: '',
    eventDetails: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setFormData({
          firstName: '',
          lastName: '',
          eventDate: '',
          eventCity: '',
          email: '',
          phone: '',
          serviceType: '',
          budget: '',
          guestCount: '',
          eventDetails: ''
        });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          First Name <span className="required">*</span>
        </label>
        <input 
          type="text" 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleChange} 
          required 
        />

        <label>
          Last Name <span className="required">*</span>
        </label>
        <input 
          type="text" 
          name="lastName" 
          value={formData.lastName} 
          onChange={handleChange} 
          required 
        />

        <label>
          Event Date <span className="required">*</span>
        </label>
        <input 
          type="date" 
          name="eventDate" 
          value={formData.eventDate} 
          onChange={handleChange} 
          required 
        />

        <label>
          City where the event will take place <span className="required">*</span>
        </label>
        <input 
          type="text" 
          name="eventCity" 
          value={formData.eventCity} 
          onChange={handleChange} 
          required 
        />

        <label>
          Email Address <span className="required">*</span>
        </label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label>
          Phone Number (without spaces) <span className="required">*</span>
        </label>
        <input 
          type="tel" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange} 
          pattern="(?=.*[+\d])[+\d\s]+"  
          required 
        />

        <label>
          You would like to use our services for: <span className="required">*</span>
        </label>
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

        <label>
          What is your event budget? <span className="required">*</span>
        </label>
        <select 
          name="budget" 
          value={formData.budget} 
          onChange={handleChange} 
          required
        >
          <option value="">Select an option</option>
          <option value="$75-$100K">$75-$100K</option>
          <option value="$100-$150K">$100-$150K</option>
          <option value="$150-$250K">$150-$250K</option>
          <option value="$250K+">$250K+</option>
        </select>

        <label>
          Estimated Number of Guests <span className="required">*</span>
        </label>
        <input 
          type="number" 
          name="guestCount" 
          value={formData.guestCount} 
          onChange={handleChange} 
          min="1" 
          required 
        />

        <label>
          About Your Event - Tell Us About Your Dream in More Detail...
        </label>
        <textarea 
          name="eventDetails" 
          value={formData.eventDetails} 
          onChange={handleChange} 
          rows={10} 
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
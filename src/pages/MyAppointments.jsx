import React, { useState } from 'react';

const MyAppointments = () => {
  const [appointment, setAppointment] = useState({
    doctor: "",
    date: "",
    time: "",
  });

  const doctors = ["Dr. John Smith", "Dr. Lisa Ray", "Dr. Adam Brown"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send appointment details to the backend
    console.log("Appointment Details:", appointment);
    alert("Appointment booked successfully!");
  };

  return (
    <div className="p-5 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Select Doctor</label>
          <select
            name="doctor"
            value={appointment.doctor}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Choose a Doctor</option>
            {doctors.map((doc, index) => (
              <option key={index} value={doc}>{doc}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Select Date</label>
          <input
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Select Time</label>
          <input
            type="time"
            name="time"
            value={appointment.time}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default MyAppointments;
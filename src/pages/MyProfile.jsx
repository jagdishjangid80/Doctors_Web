import React, { useState } from 'react';

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Jagdish Jangid",
    email: "jagsa123@gmail.com",
    phone: "+91 8079066042",
  });

  const handleEdit = () => setIsEditing(!isEditing);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Save updated profile data to the backend
    console.log("Updated Profile:", profile);
  };

  return (
    <div className="p-5 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">
            Save Changes
          </button>
        </form>
      ) : (
        <div>
          <p className="mb-2"><strong>Name:</strong> {profile.name}</p>
          <p className="mb-2"><strong>Email:</strong> {profile.email}</p>
          <p className="mb-2"><strong>Phone:</strong> {profile.phone}</p>
          <button
            onClick={handleEdit}
            className="bg-primary text-white px-4 py-2 rounded-md mt-4"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default MyProfile;

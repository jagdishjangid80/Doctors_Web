import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate =useNavigate()
  const [relDocs, setRelDocs] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc.id !== docId
      );
      setRelDocs(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium text-center">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-2 gap-4 pt-5 gap-y-6 px-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {relDocs.slice(0, 5).map((item) => (
          <div
            key={item._id}
            onClick={() => {navigate(`/appointment/${item._id}`);scrollTo(0,0)}}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <div className="relative w-full h-40 sm:h-48 lg:h-52 overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={item.image}
                alt={`Dr. ${item.name}, ${item.speciality}`}
                onError={(e) => {
                  e.target.src = "path/to/default/image.jpg";
                }}
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          window.scrollTo(0, 0);
        }}
        className="mt-10 px-12 py-3 bg-blue-50 text-gray-900 rounded-full transition-colors duration-200 hover:bg-blue-100"
      >
        More
      </button>
    </div>
  );
};

export default RelatedDoctors;

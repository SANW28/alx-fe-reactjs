import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className=" bg-gray-100 my-20 rounded-lg shadow-lg md:p-8 sm:p-4 sm:max-w-xs md:max-w-sm mx-auto hover:shadow-xl">
      <div className="flex flex-col items-center">
        {/* Responsive Image */}
        <img
          src={user.profileImage}
          alt={user.name}
          className="sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full object-cover mb-4 hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        {/* Responsive Typography */}
        <h1 className="sm:text-lg md:text-xl font-bold text-gray-800 hover:text-blue-500">
          {user.name}
        </h1>
        <p className="text-sm sm:text-base text-gray-600 text-center">
          {user.bio}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;


import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className=" md:p-8 sm:p-4 sm:max-w-xs md:max-w-sm mx-auto">
      <div className="flex flex-col items-center">
        {/* Responsive Image */}
        <img
          src={user.profileImage}
          alt={user.name}
          className="w-24 h-24 sm:w-36 sm:h-36 rounded-full object-cover mb-4"
        />
        {/* Responsive Typography */}
        <h1 className="sm:text-lg md:text-xl font-bold text-gray-800">
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


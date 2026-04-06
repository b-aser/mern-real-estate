import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form action="" className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="Avatar"
          className="cursor-pointer rounded-full h-24 w-24 object-cover self-center mt-2"
        />
        <input
          type="text"
          id="username"
          placeholder={currentUser.username}
          defaultValue={currentUser.username}
          className="border p-3 rounded-lg"
        />
        <input
          type="text"
          id="email"
          placeholder={currentUser.email}
          defaultValue={currentUser.email}
          className="border p-3 rounded-lg"
        />
        <input
          type="text"
          id="password"
          placeholder="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-90 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer hover:underline">
          Delete Account
        </span>
        <span className="text-red-700 cursor-pointer hover:underline">
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Profile;

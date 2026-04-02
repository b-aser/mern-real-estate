import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success === false) {
      setError(data.message);
      setLoading(false);
      return;
    }
    setLoading(false);
    console.log(data);
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        action=""
        method="post"
        className="flex flex-col gap-4"
      >
        <input
          className="border border-slate-300 p-3 rounded-lg"
          type="text"
          placeholder="Name"
          id="username"
          onChange={handleChange}
        />
        <input
          className="border border-slate-300 p-3 rounded-lg"
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          className="border border-slate-300 p-3 rounded-lg"
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5 justify-center">
        <p>Already have an account?</p>
        <Link to={"/signin"} className="text-blue-500 hover:underline">
          Sign In
        </Link>
      </div>
      {error && <p className="text-red-500 mt-3 text-center">{error}</p>}
    </div>
  );
};

export default SignUp;

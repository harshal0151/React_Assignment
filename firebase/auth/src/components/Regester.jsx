import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";

function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(userCredentials);
      await updateProfile(userCredentials.user, { displayName: data.username });
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already in use.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  }

  return (
    <div className="p-10 w-[50%] m-auto">
      <form
        className="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10"
        onSubmit={handleSubmit}
        method="post"
      >
        <h1 className="text-xl font-semibold lg:text-2xl mb-8">Create Account</h1>
        {error && <div className="text-red-500">{error}</div>}
        <div>
          <label> Username </label>
          <input
            type="text"
            placeholder="Username"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring "
            name="username"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> Email Address </label>
          <input
            type="email"
            placeholder="Info@example.com"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> Password </label>
          <input
            type="password"
            placeholder="******"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="submit"
            className="mt-5 mb-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring"
          />
        </div>
        <Link to="/login" className="text-center text-blue-900 hover:text-blue-500">
          <p>Already Have an Account</p>
        </Link>
      </form>
    </div>
  );
}

export default Register;

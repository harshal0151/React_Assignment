import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { UserContext } from "../UserContext";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    try {
      const loggedUser = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(loggedUser);

      if (loggedUser) {
        setUser(loggedUser.user);
        navigate("/home");
      }
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("User not registered.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  }

  return (
    <div className="p-10 w-[50%] m-auto">
      <form
        className="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10"
        method="post"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-semibold lg:text-2xl mb-8">Login</h1>
        {error && <div className="text-red-500">{error}</div>}
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
        <Link to="/register" className="text-center text-blue-900 hover:text-blue-500 ">
          <p>Create New Account</p>
        </Link>
      </form>
    </div>
  );
}

export default Login;

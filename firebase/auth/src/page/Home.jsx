// Home.jsx
import { useContext } from "react";
import { UserContext } from "../UserContext";

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div className="w-full h-screen flex justify-center  items-center text-2xl">
      <h1 className=" text-amber-500"><span className=" text-gray-900">Welcome,</span> {user ? user.email : "Guest"}!</h1>
    </div>
  );
}

export default Home;

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl">Welcome to Task-Flow</h1>
      <p>Sign-in to get started</p>
      <div className="flex space-x-4 mt-3">
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Sign In
        </button>
        <button
          onClick={() => navigate("/register")}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Register
        </button>
      </div>
    </div>
  );
};
export default Home;

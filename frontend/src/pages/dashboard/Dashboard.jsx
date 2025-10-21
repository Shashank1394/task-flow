const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome, {user?.fullname || user?.username} 👋
        </h1>
        <p className="mt-2 text-gray-600">
          This is your dashboard. Start managing your tasks!
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

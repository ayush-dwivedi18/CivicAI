import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-blue-100 flex items-center justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
          <h1 className="text-5xl font-bold text-blue-700">
            CivicAI 🚀
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            AI Powered Constituency Development Platform
          </p>

          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
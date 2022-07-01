import "./App.css";
import Home from "./components/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import CompletedTasks from "./components/CompletedTasks";
import CalendarComponent from "./components/CalendarComponent";
import Footer from "./components/Shared/Footer";

function App() {
  return (
    <div className="bg-[#E5E5E5] lg:px-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/completed-tasks" element={<CompletedTasks />} />
        <Route path="/calendar" element={<CalendarComponent />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

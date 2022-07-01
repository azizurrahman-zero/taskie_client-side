import "./App.css";
import Home from "./components/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import CompletedTasks from "./components/Tasks/CompletedTasks";
import CalendarComponent from "./components/Calendar/CalendarComponent";
import Footer from "./components/Shared/Footer";
import NotFound from "./components/Shared/NotFound";

function App() {
  return (
    <div className="bg-[#FFC700] lg:px-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/completed-tasks" element={<CompletedTasks />} />
        <Route path="/calendar" element={<CalendarComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

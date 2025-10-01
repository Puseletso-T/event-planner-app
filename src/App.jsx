import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import AddEvent from "./pages/AddEvent";
import Help from "./pages/Help";
import { AppProvider } from "./context/AppContext";


function App() {
  return (
    <AppProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
export default App;
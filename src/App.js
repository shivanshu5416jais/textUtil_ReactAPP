import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DotGrid from "./DotGrid";

function App() {
  const funn = (data) => {
    console.log("xxxx", data);
  };
  const [mode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode == "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtils-Dark Mode";
      // to show diifferent title continuoulsy
      // setInterval(() => {
      //   document.title = "Install dsf"

      // }, 2000);
      // setInterval(() => {
      //   document.title = "Iddsf"

      // }, 1500);
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils-Light Mode";
      showAlert("Light Mode Enabled", "success");
    }
  };
  return (
    <>
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <DotGrid
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>
      <Router>
        <Navbar
          title="Text Utils"
          aboutText="About T"
          xx={funn}
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter text"
                  showAlert={showAlert}
                  mode={mode}
                ></TextForm>
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

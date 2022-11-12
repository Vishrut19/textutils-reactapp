import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //This is a state variable that tells us whether the dark Mode is enabled or not.

  const [alert, setAlert] = useState(null); //This is going to be an Object.

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      setInterval(() => {
        document.title = "TextUtils is Amazing!";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  //This is a showAlert method that takes message and type of alert as parameters.
  const showAlert = (message, type) => {
    //This is a function that will help us to display the alert messages.
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="about/*" element={<About />} /> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text that you want to analyze below" mode={mode}/>}/> */}
            <TextForm showAlert={showAlert} heading="Enter the text that you want to analyze below" mode={mode}/>
          {/* </Routes> */}
          {/* <About mode={mode}/> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;

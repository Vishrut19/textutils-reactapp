import React, { useState } from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "rgb(36 74 104)" : "white",
  };

  // Here we are using useState to change the background color of the about us component.
  // const [myStyle, setMyStyle] = useState({
  //     color: 'white',
  //     backgroundColor:'#212529'
  // })

  //Here we are using useState to toggle between light mode and dark mode.
  // const [btnText, setBtnText] = useState("Enable Dark Mode")

  //     const toggleStyle = () => {
  //         if(myStyle.color === '#212529'){
  //             setMyStyle({
  //                 color: 'white',
  //                 backgroundColor:'#212529',
  //                 border : '1px solid white'
  //             })
  //             setBtnText("Enable Light Mode")
  //         }
  //         else{
  //             setMyStyle({
  //                 color: '#212529',
  //                 backgroundColor:'white',
  //                 border : '1px solid #212529'
  //         })
  //         setBtnText("Enable Dark Mode")

  //     };
  // }

  return (
    <>
      <div className="container">
        <h2 className="my-3" style={{color: props.mode === "dark" ? "white" : "#042743"}}>About Us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong>Analyse your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  This App can be used to analyse your text and contains other
                  functionalities that can help you to manipulate the text.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>This is free to use Text Utility website</p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  This App is Compatible with every browser and every device i.e
                  IOS,Android and Windows also.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

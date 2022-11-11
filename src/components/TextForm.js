import React, {useState} from "react";

export default function TextForm(props) {

    //This is useState method to convert lowercase sentence into upper case.
    const handleUpClick = () => {
      let newUpText = text.toUpperCase();
      setText(newUpText);
      props.showAlert("Converted to Upper Case","success");
    };

    //This is useState method to convert upper case into lower case.
    const handleDownClick = () => {
      let newDownText = text.toLowerCase();
      setText(newDownText);
      props.showAlert("Converted to Lower Case","success");
    };

    const handleReplace = () => {
      let replace = text.replace("a" ,"z");
      setText(replace);
    };

    // Onchange handler is used to listen to any events.
    const handleOnChange = (event) => {
      setText(event.target.value);
    };

    //Here we have created useState Hook
    const [text, setText] = useState(""); //Enter text here is the default value.

  return (
    <>
      <div className="container" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>{props.heading}</h2>
        <div className="form-group">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            placeholder="Enter text here"
            style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white',color:props.mode === 'dark' ? 'white' : '#042743'}}
          >
          </textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleDownClick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-3 mx-3" onClick={handleReplace}>Replace A with Z</button>
        </div>
        <div className="container my-2" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
          <h1>Your text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes Taken To Read A Word</p>
          <h2>Preview</h2>
          <p><strong>{text.length > 0 ? text : "Enter something in the text area above to preview it here"}</strong></p>
        </div>
    </>
  );
}

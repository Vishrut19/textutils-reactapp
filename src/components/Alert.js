import React from "react";

function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }

  return (
    <div style={{height:'40px'}}>
    {/* This is the syntax of react.
        Agar props.alert null hai toh div tag ka part return nhi hoga.
        and agar props.alert null nhi hai toh div tag return hoga. */}
    {props.alert && <>
       <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>:
        {props.alert.msg}
      </div>
    </>}
    </div>
  );
}

export default Alert;

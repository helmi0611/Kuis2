import React from "react";

function KotakTeks(props) {
  return (
    <>
      <label htmlFor={props.teks} placeholder={props.teks}>
        {props.teks}
      </label>
      <input type="text" id={props.teks} />
    </>
  );
}

export default KotakTeks;
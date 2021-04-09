import React from "react";
import "./App.css";

const StopTimer = ({click }) => {
    return <input className="time" type="time" id="appt" name="appt" min="00:00" max="24:00" onChange={click} required/>
}
export default StopTimer;
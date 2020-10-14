import React, { useState } from "react";
import { Button } from "semantic-ui-react";
// import InterviewerList from "../InterviewList";

export default function Form(props) {
  // const {interviewers, onSave, onCancel} = props;

  // const [name, setName] =  useState(props.name || "");
  // const [interviewer, setInterviewer] = useState(props.interviewer || null);
  // const [error, setError] = useState("");

  // function reset() {
  //   setName("");
  //   setInterviewer(null);
  //   setError("");
  // }

  // function cancel(event) {
  //   reset();
  //   onCancel();
  //   event.target.value="";
  // }

  // function validate() {
  //   if (name === "") {
  //     setError("Student name cannot be blank");
  //     return;
  //   }

  //   setError("");
  //   onSave(name, interviewer);
  // }

  return (
    <div className="appointment__card appointment__card--create">
      <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
        <div className="header"> Appoinment ticket </div>
        <h3 className="formHeader">
          <label className="labelForForm">Date: </label>
          {props.date.toDateString().toString()}
        </h3>
        <h3 className="formHeader">
          <label className="labelForForm">Time:</label> {props.time}:00
        </h3>
      </form>
      {/* <InterviewerList
          interviewers={interviewers}
          interviewer={interviewer}
          setInterviewer={setInterviewer}
        /> */}
      {/* </section> */}
      {/* <section className="appointment__card-right"> */}
      <section className="appointment__actions">
        <Button
          className="ui large inverted green button"
          confirm
          onClick={() => props.onSave(props.date, props.time)}
        >
          Confirm
        </Button>
        <Button
          className="ui large red inverted button"
          danger
          onClick={() => props.setTime("")}
        >
          Cancel
        </Button>
        {/* </section> */}
      </section>
    </div>
  );
}

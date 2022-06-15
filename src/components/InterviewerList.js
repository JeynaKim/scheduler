import React from "react";
import InterviewerListItem from './InterviewerListItem';
import "./InterviewerList.scss";

export default function InterviewerList(props) {
  const interviewerList = props.interviewers.map(individualInterviewer => {
    return (
      <InterviewerListItem
        key={individualInterviewer.id}
        id={individualInterviewer.id}
        name={individualInterviewer.name}
        avatar={individualInterviewer.avatar}
        selected={individualInterviewer.id === props.interviewer}
        setInterviewer={props.setInterviewer}
      />
    );
  });
  return (
  <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">{interviewerList}</ul>
  </section>
  )
}

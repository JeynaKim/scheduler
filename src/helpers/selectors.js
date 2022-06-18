export function getAppointmentsForDay(state, day) {
  const appointments = [];
  state.days.forEach(item => {
    if (item.name === day) {
      item.appointments.forEach((appointment) => {
        appointments.push(state.appointments[appointment])
      })
    }
  });
  return appointments;
}

export function getInterview(state, interview) {
  if (!interview) return null;
  const fullInterview = {
    ...interview,
    interviewer: {...state.interviewers[interview.interviewer]}
  };
  return fullInterview;
}


// if (!interview.interviewer) return null;
// fullInterview.student = interview.student;
// const interviewer = {
//   id : interview.interviewer, 
//   name: state.interviewers[interview.interviewer].name,
//   avatar: state.interviewers[interview.interviewer].avatar
// };
// fullInterview.interviewer = interviewer;  
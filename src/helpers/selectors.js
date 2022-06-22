export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find((eachDay) => eachDay.name === day);
  if (!filteredDay) return [];
  
  return filteredDay.appointments.map((appointmentId) => {
    return state.appointments[appointmentId];
  });
}

export function getInterview(state, interview) {
  if (!interview) return null;
  const fullInterview = {
    ...interview,
    interviewer: { ...state.interviewers[interview.interviewer] },
  };
  return fullInterview;
}

export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.find((eachDay) => eachDay.name === day);
  if (!filteredDay) return [];
  // if (filteredDay.length === 0) return [];

  return filteredDay.interviewers.map((interviewerId) => {
    return state.interviewers[interviewerId];
  });
}
import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then(response => {
      setState(prev => ({
        ...prev,
        days: response[0].data,
        appointments: response[1].data,
        interviewers: response[2].data
      }))
    });
  }, []);

  function updateSpots(isBooking, isEditing) {
    const updatedDays = state.days.map((day) => {
      const spots = isBooking ? day.spots - 1 : day.spots + 1
      return {
        ...day, 
        spots: day.name === state.day  && !isEditing ? spots : day.spots
      }
    })
    return updatedDays;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, { interview }) 
      .then((response) => {
        const isEditing = state.appointments[id].interview !== null;
        const days = updateSpots(true, isEditing); 
        setState({...state, days, appointments});
      })
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`) 
      .then((response) => {
        const days = updateSpots(); 
        setState({ ...state, days, appointments });
    })
  }
  return { state, setDay, bookInterview, cancelInterview };
}
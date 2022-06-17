import React, { useState } from "react";
import axios from "axios";
import "components/Application.scss";
import DayList from "./DayList";
import Appointment from './Appointment';
import { getAppointmentsForDay } from "helpers/selectors";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const convertedAppointments = dailyAppointments.map((appointment) => {
    return <Appointment key={appointment.id} {...appointment} />;
  })

  const setDay = day => setState({ ...state, day });

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
  })

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {convertedAppointments}
        <Appointment time="5pm" />
      </section>
    </main>
  );
}

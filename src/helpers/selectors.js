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

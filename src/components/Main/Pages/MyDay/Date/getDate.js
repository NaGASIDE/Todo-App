export const getDate = () => {
  let date = new Date()
  const weekDays = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Satuday`, `Sunday`]
  const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`]
  let weekDay = weekDays[date.getDay() - 1]
  let monthsDay = date.getDate()
  let month = months[date.getMonth()]
  return `${weekDay}, ${monthsDay} ${month}`
}
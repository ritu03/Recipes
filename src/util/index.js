export const getResponseKey = (path, response) => {
  if (Array.isArray(path)) {
    return path.reduce((obj, key) => (obj && obj[key]) ? obj[key] : null, response)
  }
  return null
}


export const getDateInMonthFormat = (reqDate) =>{
  let monthNames = ["Jan","Feb","Mar","Apr",
                    "May","Jun","Jul","Aug",
                    "Sep", "Oct","Nov","Dec"]
  const date = new Date(reqDate)
  const day = date.getDate()
  let monthIndex = date.getMonth()
  let monthName = monthNames[monthIndex]
  return `${monthName} ${day}`
}

export const getDayFromDate = (reqDate) =>{
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date(reqDate)
  return days[d.getDay()]
}

export const convertToF = (temp) =>{
  return temp * 9/5 + 32
}

export const convertToC = (temp) =>{
  return (5/9) * (temp-32)
}
const Util={
  getResponseKey,
  getDateInMonthFormat,
  getDayFromDate,
  convertToF



}
export default Util
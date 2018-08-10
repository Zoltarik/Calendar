import React from "react";
import "./Calendar.css";
import moment from "moment";
const CellCalendar = props => {
  return (
    <div className="WrapDays">
      <div className="WrapData">
        <p className="numDay">{props.day}</p>
        <p className="WorkShift">Утро</p>
        <p className="Worker">Ринат</p>
        <p className="WorkShift">Вечер</p>
        <p className="Worker">Алексей</p>
      </div>
    </div>
  );
};

const Calendar = () => {
  moment.locale("ru");
  let currentMonth = moment().format("MMMM");
  let maxDays = moment()
    .endOf("month")
    .format("D");
  let arrayDaysList = [];
  for (let i = 1; i <= maxDays; i++) {
    arrayDaysList.push(<CellCalendar day={i} />);
  }

  return (
    <div className="WrapMonth">
      <div className="selectMonth">
        <p className="monthName">{currentMonth}</p>
      </div>
      <div className="placeDays">{arrayDaysList}</div>
    </div>
  );
};
export default Calendar;

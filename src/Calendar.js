import React from "react";
import "./Calendar.css";

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
  let arrayMonth = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ];
  let currentDate = new Date();
  let numberMonth = arrayMonth[currentDate.getMonth()];

  const getNumberDays = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  let maxDays = getNumberDays(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );
  let arrayDaysList = [];
  for (let i = 1; i <= maxDays; i++) {
    arrayDaysList.push(<CellCalendar day={i} />);
  }

  return (
    <div className="WrapMonth">
      <div className="selectMonth">
        <p className="monthName">{numberMonth}</p>
      </div>
      <div className="placeDays">{arrayDaysList}</div>
    </div>
  );
};
export default Calendar;

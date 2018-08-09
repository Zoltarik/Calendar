import React from "react";
import "./Calendar.css";

const CellCalendar = () => {
  return (
    <div className="WrapDays">
      <div className="WrapData">
        <p className="numDay">1</p>
        <p className="WorkShift">Утро</p>
        <p className="Worker">Ринат</p>
      </div>
    </div>
  );
};

const Calendar = () => {
  return (
    <div className="WrapMonth">
      <div className="selectMonth">
        <p className="monthName">Август</p>
      </div>
      <div className="placeDays">
        <CellCalendar/>
      </div>
    </div>
  );
};
export default Calendar;

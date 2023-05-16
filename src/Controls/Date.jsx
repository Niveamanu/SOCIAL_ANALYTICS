import React from "react";

import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";

const DateControl = ({ setFieldValue, values, ...item }) => {
  return (
    <DatePicker
      selected={item.name == "start_time" ? values.start_time : values.end_time}
      dateFormat="MMMM d, yyyy"
      className="form-control"
      name={item.name}
      onChange={(date) => {
        setFieldValue(`${item.name}`, date);
      }}
    />
  );
};

export default DateControl;

import TextField from "@mui/material/TextField";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function DatePickerComponent() {
  const [value, setValue] = useState(new Date());

  return (
    <>
      <DatePicker />
      <TimePicker />
    </>
  );
}

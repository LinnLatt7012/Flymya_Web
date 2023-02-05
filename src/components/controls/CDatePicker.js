import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";

export default function CDatePicker({ value, onChange, minDate, maxDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CalendarPicker
        minDate={minDate}
        {...(maxDate && { maxDate: maxDate })}
        date={value}
        onChange={(newDate) => {
          onChange(newDate);
        }}
      />
    </LocalizationProvider>
  );
}

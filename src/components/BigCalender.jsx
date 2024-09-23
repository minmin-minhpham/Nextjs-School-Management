"use client";

import { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { calendarEvents } from "@/lib/data";

const localizer = momentLocalizer(moment);

export default function BigCalender() {
  const [view, setView] = useState(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
  );
}

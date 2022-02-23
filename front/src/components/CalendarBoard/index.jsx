import React from "react";
import { createCalendar } from "../../services/calendar";
import CalendarElement from "../CalendarElement";
import { GridList } from "@material-ui/core";
import * as styles from "./style.css";

const calendar = createCalendar();

const CalendarBoard = () => {
  console.log(calendar);

  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {calendar.map(c => (
       <li key={c.toISOString()}>
       <CalendarElement>{c.format("D")}</CalendarElement>
     </li>
        ))}
      </GridList>
    </div>
  )
        }

export default CalendarBoard;

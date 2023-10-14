import React, { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { BsFillCalendar2PlusFill } from "react-icons/bs";

export function Header({ setInputValue, setSelectedDate, addAssignment,selectedDate,input }: any) {
  const [isButtonActive, setButtonActive] = useState(false);
  const [isCalendarVisible, setCalendarVisible] = useState(false);



  const handleSetInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setButtonActive(!!value);
  };

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };

 //calculate day difference 
  const calculateDaysDifference = (selectedDate: Date ) => {
    if (selectedDate) {
      const currentDate = new Date();
      const dayDifference = selectedDate.getDate()-currentDate.getDate();
      addAssignment(dayDifference);
      setCalendarVisible(false);
      setSelectedDate (null);
    }
  };

  
  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form
        className={styles.newAssignmentForm}
        onSubmit={(e) => {
          e.preventDefault();
          calculateDaysDifference(selectedDate);
        }}
      >
        <input
          placeholder="Add a new assignment"
          type="text"
          value={input}
          onChange={handleSetInput}
        />

        <div id="calendar" onClick={toggleCalendar}>
          {isCalendarVisible ? (
            <div>
              <DayPicker
                selected={selectedDate}
                onDayClick={(date) => setSelectedDate(date)}
              />
            </div>
          ) : (
            <BsFillCalendar2PlusFill size={50} style={{ fill: '#5e60ce '}}/>
          )}
        </div>

        <button
          id="createAssignment"
          className={isButtonActive ? styles.cursorMove : styles.cursor}
          disabled={!input.trim() || !selectedDate || isCalendarVisible}
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}

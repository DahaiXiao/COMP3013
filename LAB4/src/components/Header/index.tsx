import React, { useState } from "react";
import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";

export function Header({ setInputValue, addAssignment, input }: any) {
  const [inputValue, setInput] = useState("");
  const [isButtonActived, setButtonActived]=useState(false);

  const handleSetInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);
    setInputValue(value);
    setButtonActived(true);
  };

  return (
    <header className={styles.header}>
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form
        className={styles.newAssignmentForm}
        onSubmit={(e) => {
          e.preventDefault(); // Prevent form submission
          addAssignment(); // Call the addAssignment function when the form is submitted
        }}
      >
        <input
          placeholder="Add a new assignment"
          type="text"
          value={input}
          onChange={handleSetInput}
        />
        <button className={ isButtonActived ? styles.cursorMove : styles.cursor}  disabled={!inputValue.trim()}>Create <AiOutlinePlusCircle size={20} /></button>
      </form>
    </header>
  );
}


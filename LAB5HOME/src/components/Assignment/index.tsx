import React, { useState } from "react";
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface AssignmentProps {
  assignmentname: string;
  assignmentdueday: number;
  removeAssignment: () => void;
  addComplete: (completedAssignment: string) => void;
}

export function Assignment({ assignmentname, assignmentdueday, removeAssignment, addComplete }: AssignmentProps) {
  const [isdeleted, setIsDeleted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleDeleted = () => {
    setIsDeleted(true);
    removeAssignment();
  };

  const handleIsChecked = () => {
    setIsChecked(true);
    addComplete(assignmentname);
  };

  const isDueUrgent = assignmentdueday <= 3;

  return (
    <div className={styles.assignment}>
      <button id="complete"
        className={!isChecked ? styles.checkContainer : styles.checked}
        onClick={handleIsChecked}
      >
        {!isChecked ? <div /> : <BsFillCheckCircleFill size={20} />}
      </button>

      <p className={!isChecked ? styles.p : styles.textCompleted}>{assignmentname}  </p>
      <p className={`${isDueUrgent ? styles.dueurgent : styles.due}`}>Due: {assignmentdueday} days</p>

      <button id="delete" className={styles.deleteButton} onClick={handleDeleted}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}

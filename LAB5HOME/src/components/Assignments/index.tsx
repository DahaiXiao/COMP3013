import React from "react";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface Props {
  assignmentList: { name: string; dueday: number }[];
  removeAssignment: (index: number) => void;
  completeList: string[];
  addComplete: (completedAssignment: string) => void;
}

export function Assignments({ assignmentList, removeAssignment, completeList, addComplete }: Props) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignmentList.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span> {completeList.length} of {assignmentList.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignmentList.map((assignment, index) => (
          <Assignment key={index}
            assignmentname={assignment.name}
            assignmentdueday={assignment.dueday}
            removeAssignment={() => removeAssignment(index)}
            addComplete={addComplete}
          />
        ))}
      </div>
    </section>
  );
}

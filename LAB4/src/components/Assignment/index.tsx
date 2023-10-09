
import React, { useState } from "react";
import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface AssignmentProps {
  assignmentname: string;
 removeAssignment: () => void;
 addComplete: (completedAssignment: string) => void; 
}

export function Assignment({ assignmentname,removeAssignment, addComplete}: AssignmentProps) {
  const [isdeleted, setIsDeleted]=useState(false);
  const [isChecked, setIsChecked] =useState(false);


  const handleDeleted = () => {
    setIsDeleted(true);
    removeAssignment(); 
  };

  const handleIsChecked= () => {
    setIsChecked(true); 
    addComplete(assignmentname);
  };



  return (
    <div className={styles.assignment}>
      <button id="complete"
        className={!isChecked ? styles.checkContainer : styles.checked}
        onClick={handleIsChecked}{...addComplete}>
           {!isChecked ? <div /> : <BsFillCheckCircleFill size={20} />}
       
      </button>

      <p className={!isChecked ? styles.p : styles.textCompleted}>{assignmentname}</p> 
      
      <button id="delete" className={styles.deleteButton} onClick={handleDeleted}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}

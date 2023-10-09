import React, { useState } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { Assignment } from "../Assignment";

function App() {
  const [input, setInput] = useState("");
  const [assignmentList, setAssignmentList] = useState<string[]>([]);
  const [completeList, setCompleteList] = useState<string[]>([]);

  const handleInput = (value: any) => {
    setInput(value);
  };

  const addAssignment = () => {
    if (input.trim() !== "") {
      setAssignmentList([...assignmentList, input]);
      setInput(""); 
    }
  };

  const removeAssignment = (index: number) => {
    const newList = [...assignmentList];
    newList.splice(index, 1);
    setAssignmentList(newList);
  };

  const addComplete = (completedAssignment: string) => {
    setCompleteList([...completeList, completedAssignment]);
  };

  return (
    <>
      <Header setInputValue={handleInput} addAssignment={addAssignment} />
      <Assignments assignmentList={assignmentList} 
      removeAssignment={removeAssignment} 
      completeList={completeList}
      addComplete={addComplete}/>
    </>
  );
}

export default App;

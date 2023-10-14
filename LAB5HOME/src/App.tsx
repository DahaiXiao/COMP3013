import React, { useState } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

function App() {
  const [input, setInput] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [assignmentList, setAssignmentList] = useState<{ name: string; dueday: number }[]>([]);
  const [completeList, setCompleteList] = useState<string[]>([]);

  const handleInput = (value: any) => {
    setInput(value);
  };

  const addAssignment = (dueDay: number | null) => {
    if (input.trim() !== "" && dueDay !== null) {
      const newAssignment = { name: input, dueday: dueDay };
      setAssignmentList([...assignmentList, newAssignment]);
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
      <Header input={input} setInputValue={handleInput} selectedDate={selectedDate}setSelectedDate={setSelectedDate} addAssignment={addAssignment} />
      <Assignments
        assignmentList={assignmentList}
        removeAssignment={removeAssignment}
        completeList={completeList}
        addComplete={addComplete}
      />
    </>
  );
}

export default App;

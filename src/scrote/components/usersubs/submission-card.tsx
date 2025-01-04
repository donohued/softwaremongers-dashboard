import React from 'react';

interface SubmissionCardProps {
  table: string;
  date: string;
  ip: string;
  name: string;
  status: number;
  id: string;
  selectData: (table: string, id: string) => void;
}

export default function SubmissionCardComponent({ table, date, ip, name, status, id, selectData }: SubmissionCardProps) {
  const handleSelectData = () => {
    selectData(table, id);
  };


  return (
    <>
      <div onClick={handleSelectData} className="submission-card" style={{cursor:"pointer", backgroundColor: (status === 0 ? "lightgrey" : "yellow"), borderBottom: '1px solid black', display: "flex" }}>
        <div style={{ flex: 5, paddingLeft: "4px", paddingTop: "2px", borderRight: "1px solid black", overflow: "hidden" }}>{table}</div>
        <div style={{ flex: 4, paddingLeft: "4px", paddingTop: "2px", borderRight: "1px solid black", overflow: "hidden" }}>{date}</div>
        <div style={{ flex: 6, paddingLeft: "4px", paddingTop: "2px", overflow: "hidden" }}>{name}</div>
      </div>
    </>
  );
}
import React from 'react'
import SubmissionWindowComponent from './submission-window'
import { SubmissionTable } from '../../types'

type SubmissionCardProps = {
  table: string,
  date: string,
  ip: string,
  excerpt: string,
  status: number,
  id: string,
  showWindow: React.Dispatch<React.SetStateAction<boolean>>,
  canOpenWindow: boolean
}

export default function SubmissionCardComponent({ table, date, ip, excerpt, status, id, showWindow, canOpenWindow }: SubmissionCardProps) {

  const [showDetails, setShowDetails] = React.useState(false)

  const toggleDetails = () => {
    setShowDetails(!showDetails)
    showWindow(!showDetails)
    return
  }

  const tableName = table as SubmissionTable

  return (
    <>
      {showDetails ? <SubmissionWindowComponent setWindowState={toggleDetails} table={table} id={id} /> : null}
      <div onClick={toggleDetails} className="user-form-data-box" style={{ width: "", backgroundColor: (status === 0 ? "lightgrey" : "yellow"), borderBottom: '1px solid black', display: "flex" }}>
        <div style={{ flex: 5, paddingLeft: "4px", paddingTop:"2px", borderRight: "1px solid black", overflow: "hidden" }}>{table}</div>
        <div style={{ flex: 2, paddingLeft: "4px", paddingTop:"2px", borderRight: "1px solid black", overflow: "hidden" }}>{id}</div>
        <div style={{ flex: 4, paddingLeft: "4px", paddingTop:"2px", borderRight: "1px solid black", overflow: "hidden" }}>{date}</div>
        <div style={{ flex: 12, paddingLeft: "4px", paddingTop:"2px", borderRight: "1px solid black", overflow: "hidden" }}>{excerpt}</div>
        <div style={{ flex: 4, paddingLeft: "4px", paddingTop:"2px", overflow: "hidden" }}>{ip}</div>
      </div>
    </>

  )
}

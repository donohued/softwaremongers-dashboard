import React from 'react'
import SubmissionWindowComponent from './submission-window'
import { SubmissionTable } from '../types'

type SubmissionCardProps = {
  table: SubmissionTable,
  date: string,
  ip: string,
  attention: boolean,
  archived: boolean,
  id: string
  showWindow: React.Dispatch<React.SetStateAction<boolean>>,
  canOpenWindow: boolean
}

export default function SubmissionCardComponent({ table, date, ip, attention, archived, id, showWindow, canOpenWindow }: SubmissionCardProps) {

  const [showDetails, setShowDetails] = React.useState(false)

  const toggleDetails = () => {
      setShowDetails(!showDetails)
      showWindow(!showDetails)
    return
  }

  return (
    <>
      {showDetails ? <SubmissionWindowComponent setWindowState={toggleDetails} table={table} id={id} /> : null}
      <div onClick={toggleDetails} className="user-form-data-box" style={{ width: "", height: "80px", backgroundColor: "grey", border: '1px solid black', margin: "8px 4px ", padding: '4px' }}>



        Form: {table}<br />
        Date Posted: {date}<br />
        IP: {ip}<br />
        Requires Attention:
        {
          attention ? "Yes" : "No"
        }
        <br />


      </div>
    </>

  )
}

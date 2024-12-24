import React from 'react'

type SubmissionWindowHeaderProps = {
    table: string,
    id: number
    date: string,
    senderIP: string,
    status: string
}

export default function SubmissionWindowHeaderComponent({ table, id, date, senderIP, status }: SubmissionWindowHeaderProps) {
    return (
        <div style={{ width: '100%' }} >
            {table}, ID: {id}<br />
            {date}
            <hr />
            Sender IP: {senderIP} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; IP Status: OK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button disabled>BAN IP</button>
            <hr />
        </div>
    )
}

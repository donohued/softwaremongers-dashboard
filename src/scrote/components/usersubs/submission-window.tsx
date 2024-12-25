import React from 'react'
import { SubmissionTable } from '../../types'
import SubmissionWindowHeaderComponent from './sub-window-header-data'
import SubmissionWindowFooterComponent from './sub-window-footer-data'
import { useState, useEffect } from 'react';
import SubmissionWindowMainComponent from './sub-window-spec-data'

type SubmissionWindowProps = {
    setWindowState: () => void,
    table: string,
    id: string
}
export default function SubmissionWindowComponent({ setWindowState, table, id }: SubmissionWindowProps) {



    React.useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}` + '/scrote/submission/' + table + '/' + id,
                    {
                        method: 'GET',
                        credentials: 'include'
                    });
                const data = await response.json();
                setSubmissionData(data);
                console.log(data);
            } catch (error) {
                console.error('Error fetching submission data:', error);
            }
        }

        fetchData();
    }, []);

    const [submissionData, setSubmissionData] = React.useState(
        {
            table: "",
            id: 0,
            date: "",
            sender: "",
            subStatus: "",
            sendStatus: "",
            new: true,
            specs: {

            }
        }
    );

    return (
        <div>
            <div className="window" style={{ width: '500px', position: 'absolute' }}>
                <div className="title-bar">
                    <div className="title-bar-text">User Form Submission</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button onClick={setWindowState} aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">

                    <div style={{ width: '100%' }} >
                        <strong>{submissionData.table}</strong>, ID: {submissionData.id}<br />
                        {submissionData.date}
                        <hr />
                        Sender IP: {submissionData.sender} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; IP Status: OK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button disabled>BAN IP</button>
                        <hr />
                    </div>


                    <SubmissionWindowMainComponent data={submissionData.specs as Record<string, string[]>} />


                    <div style={{ width: '100%' }} >
                        <hr />
                        {//make the hide button say "Deny" if the status is a warning, and "Hide" if the status is OK
                        }
                        <button disabled>Approve</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button disabled>Deny</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

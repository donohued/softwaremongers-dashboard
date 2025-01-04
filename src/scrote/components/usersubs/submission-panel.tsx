import React from 'react'
import { SubmissionTable } from '../../types'
import SubmissionWindowHeaderComponent from './sub-window-header-data'
import SubmissionWindowFooterComponent from './sub-window-footer-data'
import { useState, useEffect } from 'react';
import SubmissionWindowMainComponent from './sub-window-spec-data'

type SubmissionPanelProps = {
    data: {
        table: "",
        id: 0,
        date: "",
        sender: "",
        subStatus: "",
        sendStatus: "",
        new: true,
        specs: {}
    }
}
export default function SubmissionPanelComponent({ data }: SubmissionPanelProps) {

    return (
        <div style={{ flex: 3 }} className="tree-view">
            <div style={{ border: "1px solid black", marginLeft: "8px", padding: '6px' }}>
                <div style={{ width: '100%' }} >
                    <strong>{data.table}</strong>, ID: {data.id}<br />
                    {data.date}
                    <hr />
                    Sender IP: {data.sender} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; IP Status: OK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button disabled>BAN IP</button>
                    <hr />
                </div>

                {!data.specs ? (
                    <div style={{ color: 'red' }}>Error: Missing specifications</div>
                ) : (
                    <SubmissionWindowMainComponent data={data.specs as Record<string, string[]>} />
                )}


                <div style={{ width: '100%' }} >
                    <hr />
                    {//make the hide button say "Deny" if the status is a warning, and "Hide" if the status is OK
                    }
                    <button disabled>Approve</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button disabled>Deny</button>
                </div>
            </div>
        </div>
    )
}

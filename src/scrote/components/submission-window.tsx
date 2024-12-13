import React from 'react'
import { SubmissionTable } from '../types'
import SubmissionWindowHeaderComponent from './sub-window-header-data'
import SubmissionWindowFooterComponent from './sub-window-footer-data'
import SubmissionWindowAlbumComments from './submissions/album-comments'
import SubmissionWindowAlienContactForm from './submissions/alien-contact-form'
import SubmissionWindowConfessions from './submissions/confessions'
import { useState, useEffect } from 'react';
import SubmissionWindowMissingPersons from './submissions/missing-persons-reports'
import SubmissionWindowOldScroteFeedback from './submissions/old-scrote-feedback'
import SubmissionWindowPrayerRequests from './submissions/prayer-requests'
import SubmissionWindowSkidmarks from './submissions/skidmarks'

type SubmissionWindowProps = {
    setWindowState: () => void,
    table: SubmissionTable,
    id: string
}
export default function SubmissionWindowComponent({ setWindowState, table, id }: SubmissionWindowProps) {

    return (
        <div>
            <div className="window" style={{ width: '400px', position: 'absolute' }}>
                <div className="title-bar">
                    <div className="title-bar-text">User Form Submission</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button onClick={setWindowState} aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">

                    <SubmissionWindowHeaderComponent />

                    {table === SubmissionTable.AlbumComments && <SubmissionWindowAlbumComments name='' comment='' />}
                    {table === SubmissionTable.AlienContactForm && <SubmissionWindowAlienContactForm name='' email='' subject='' message='' />}
                    {table === SubmissionTable.Confessions && <SubmissionWindowConfessions name='' confession='' email='' />}
                    {table === SubmissionTable.MissingPersons && <SubmissionWindowMissingPersons name='' email='' person='' dateLastSeen='' description='' />}
                    {table === SubmissionTable.OldScroteFeedback && <SubmissionWindowOldScroteFeedback name='' title='' company='' address='' telephone='' fax='' email='' category='' comment='' />}
                    {table === SubmissionTable.PrayerRequests && <SubmissionWindowPrayerRequests name='' request='' subject='' />}
                    {table === SubmissionTable.Skidmarks && <SubmissionWindowSkidmarks name='' message='' />}

                    <SubmissionWindowFooterComponent />

                </div>
            </div>
        </div>
    )
}

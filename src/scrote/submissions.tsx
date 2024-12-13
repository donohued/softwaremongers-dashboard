import React from "react";
import SubmissionCardComponent from "./components/submission-card";
import { SubmissionTable } from "./types";

export default function ScroteSubmissions() {

    const [windowState, setWindowState] = React.useState(false)

    return (
        <main style={{ flex: 5, padding: '1rem' }}>
            <div className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Scrote User Submissions</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    <h3>User Submissions</h3>
                    <div style={{ display: 'flex' }}>
                        
                        <div style={{margin:'0px 8px'}}>cool</div>

                        <ul style={{ flex: 5 }} className="tree-view">
                            <SubmissionCardComponent table={SubmissionTable.AlienContactForm} date="1" ip="1" attention={false} archived={false} id="1" showWindow={setWindowState} canOpenWindow={!windowState} />
                            <SubmissionCardComponent table={SubmissionTable.AlienContactForm} date="1" ip="1" attention={false} archived={false} id="1" showWindow={setWindowState} canOpenWindow={!windowState}/>
                            <SubmissionCardComponent table={SubmissionTable.Confessions} date="1" ip="1" attention={false} archived={false} id="1" showWindow={setWindowState} canOpenWindow={!windowState}/>
                            <SubmissionCardComponent table={SubmissionTable.OldScroteFeedback} date="1" ip="1" attention={false} archived={false} id="1" showWindow={setWindowState} canOpenWindow={!windowState}/>
                        </ul>
                    </div>



                </div>
            </div>
        </main>
    )
}

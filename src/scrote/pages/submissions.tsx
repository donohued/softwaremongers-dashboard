import React from "react";
import SubmissionCardComponent from "../components/usersubs/submission-card";
import { useNavigate } from 'react-router-dom';
import { SubmissionTable } from "../types";
import SubmissionWindowMainComponent from "../components/usersubs/sub-window-spec-data";

export default function ScroteSubmissions() {

    const navigate = useNavigate();
    const [windowState, setWindowState] = React.useState(false)

    React.useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}` + '/scrote/submissions',
                    {
                        method: 'GET',
                        credentials: 'include'
                    });
                if (!response.ok) {
                    console.error('Error fetching submission data:', response.statusText);
                    navigate('/login');
                    return;
                }
                const data = await response.json();
                setSubmissionData(data);
            } catch (error) {
                console.error('Error fetching submission data:', error);
            }
        }

        fetchData();
    }, []);

    const [submissionData, setSubmissionData] = React.useState(
        [{
            form: "",
            id: "",
            date: "",
            sender: "",
            status: 0,
            new: false,
            excerpt: "",
        }]
    );

        const [submissionData1, setSubmissionData1] = React.useState(
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

                    <div style={{ display: 'flex' }}>

                        <div style={{ flexWrap: "wrap", flex: 1, padding: "4px", color: 'black', textWrap: 'nowrap' }}>
                            <h4 style={{ margin: '0px', fontSize: '1.33em' }}>Filter:</h4>

                            <input type="checkbox" id="showAll" placeholder="All" />
                            <label htmlFor="showAll">Show All</label>
                            <br />
                            <input type="checkbox" id="albumComments" placeholder="AlbumComments" />
                            <label htmlFor="albumComments">Album Comments</label>
                            <br />
                            <input type="checkbox" id="confessions" placeholder="Confessions" />
                            <label htmlFor="confessions">Confessions</label>
                            <br />
                            <input type="checkbox" id="prayerRequests" placeholder="PrayerRequests" />
                            <label htmlFor="prayerRequests">Prayer Requests</label>
                            <br />
                            <input type="checkbox" id="missingPersonsReports" placeholder="MissingPersonsReports" />
                            <label htmlFor="missingPersonsReports" >Missing Persons Reports</label>
                            <br />
                            <input type="checkbox" id="skidmarks" placeholder="Skidmarks" />
                            <label htmlFor="skidmarks">Skidmarks</label>
                            <br />
                            <input type="checkbox" id="oldScroteFeedback" placeholder="OldScroteFeedback" />
                            <label htmlFor="oldScroteFeedback">Old Scrote Feedback</label>
                            <br />
                            <input type="checkbox" id="alienContactForm" name="AlienContactForm" placeholder="AlienContactForm" />
                            <label htmlFor="alienContactForm">Alien Contact Form</label>
                            <br />
                        </div>

                        <div style={{ flex: 5, border: "1px solid black" }} className="tree-view">
                            <div style={{ width: "100%", backgroundColor: "white", display: 'flex' }}>
                                <div style={{ flex: 5, paddingLeft: "4px", borderRight: "1px solid black" }}>Table</div>
                                <div style={{ flex: 4, paddingLeft: "4px", borderRight: "1px solid black" }}>Date</div>
                                <div style={{ flex: 6, paddingLeft: "4px" }}>Name</div>
                            </div>

                            {submissionData.slice(0, 25).map((submission, index) => (
                                <SubmissionCardComponent
                                    key={index}
                                    table={submission.form}
                                    date={submission.date}
                                    ip={submission.sender}
                                    excerpt={submission.excerpt}
                                    status={submission.status}
                                    id={submission.id}
                                    showWindow={setWindowState}
                                    canOpenWindow={!windowState}
                                />
                            ))}

                            <center>Load More</center>
                        </div>

                        <div style={{ flex: 3, backgroundColor: "white", border: "1px solid black", marginLeft: "8px" }} className="tree-view">
                            <div style={{ width: '100%' }} >
                                <strong>{submissionData1.table}</strong>, ID: {submissionData1.id}<br />
                                {submissionData1.date}
                                <hr />
                                Sender IP: {submissionData1.sender} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; IP Status: OK &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button disabled>BAN IP</button>
                                <hr />
                            </div>


                            <SubmissionWindowMainComponent data={submissionData1.specs as Record<string, string[]>} />


                            <div style={{ width: '100%' }} >
                                <hr />
                                {//make the hide button say "Deny" if the status is a warning, and "Hide" if the status is OK
                                }
                                <button disabled>Approve</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button disabled>Deny</button>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </main>
    )
}

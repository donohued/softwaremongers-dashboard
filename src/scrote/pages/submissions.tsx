import React from "react";
import SubmissionCardComponent from "../components/usersubs/submission-card";
import { useNavigate } from 'react-router-dom';
import { SubmissionTable } from "../types";

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

                        <div style={{ margin: '0px 8px' }}>
                            <button disabled>Form 1</button> <br /><br />
                            <button disabled>Form 2</button> <br /><br />
                            <button disabled>Form 3</button> <br /><br />
                            <button disabled>Form 4</button> <br /><br />
                            <button disabled>Form 5</button> <br /><br />
                            <button disabled>Form 6</button> <br /><br />
                        </div>

                        <div style={{ flex: 5, backgroundColor: "white", border: "1px solid black" }} className="tree-view">
                            <div style={{ width: "100%", display: 'flex' }}>
                                <div style={{ flex: 5, paddingLeft: "4px", borderRight: "1px solid black" }}>Table</div>
                                <div style={{ flex: 2, paddingLeft: "4px", borderRight: "1px solid black" }}>ID</div>
                                <div style={{ flex: 4, paddingLeft: "4px", borderRight: "1px solid black" }}>Date</div>
                                <div style={{ flex: 12, paddingLeft: "4px", borderRight: "1px solid black" }}>Submission Excerpt</div>
                                <div style={{ flex: 4, paddingLeft: "4px" }}>Sender IP</div>
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

                        </div>
                    </div>



                </div>
            </div>
        </main>
    )
}

import React from "react";
import SubmissionCardComponent from "../components/usersubs/submission-card";
import { useNavigate } from 'react-router-dom';
import { SubmissionTable } from "../types";
import SubmissionWindowMainComponent from "../components/usersubs/sub-window-spec-data";
import SubmissionPanelComponent from "../components/usersubs/submission-panel";
import rotskull from "../../assets/rotatingskull.gif";
import coolguy from "../../assets/alien.gif";

export default function ScroteSubmissions() {

    const navigate = useNavigate();
    const [windowState, setWindowState] = React.useState(false)
    const [table, setTable] = React.useState("")
    const [id, setId] = React.useState("")
    const [selData, setSelData] = React.useState({})

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
            name: "",
            sender: "",
            status: 0,
            new: false,
            excerpt: "",
        }]
    );


    const fetchDataSpec = async (table: string, id: string) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/scrote/submission/${table}/${id}`, {
            method: 'GET',
            credentials: 'include',
          });
          const data = await response.json();
          setSingleTableData(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching submission data:', error);
        }
      };
    
      React.useEffect(() => {
        if (table === '' || id === '') {
          return;
        }
        fetchDataSpec(table, id);
      }, [table, id]);

    const [singleTableData, setSingleTableData] = React.useState<any>([]);


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
                                    name={submission.name}
                                    status={submission.status}
                                    id={submission.id}
                                    selectData= {fetchDataSpec}
                                />
                            ))}

                            <center>Load More</center>
                        </div>
                        
                        
                        {singleTableData && Object.keys(singleTableData).length === 0 ? (
                            <div style={{ flex: 3, border: "1px solid black", marginLeft: "8px", padding:'6px' }} className="tree-view">
                                <img src={coolguy} alt="No Data Available" />
                            </div>
                        ) : (
                            <SubmissionPanelComponent data={singleTableData} />
                        )}
                    </div>



                </div>
            </div>
        </main>
    )
}

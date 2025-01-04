import React from "react";
import SubmissionCardComponent from "../components/usersubs/submission-card";
import { useNavigate } from 'react-router-dom';
import SubmissionPanelComponent from "../components/usersubs/submission-panel";

export default function ScroteSubmissions() {

    const navigate = useNavigate();
    const [singleTableData, setSingleTableData] = React.useState<any>([]);
    const [loadLimit, setLoadLimit] = React.useState(25);
    const [loadOffset, setLoadOffset] = React.useState(0);
    const [tableFilters, setTableFilters] = React.useState<string[]>([
        "album_comments",
        "alien_contact_form",
        "confessions",
        "missing_persons_reports",
        "old_scrote_feedback",
        "prayer_requests",
        "skidmarks"]);

    const [tempFilters, setTempFilters] = React.useState<string[]>([...tableFilters]);


    React.useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}` + '/scrote/submissions/' + loadLimit + '/' + loadOffset + '/' + tableFilters.join(','),
                    {
                        method: 'GET',
                        credentials: 'include',
                        signal: controller.signal
                    });
                if (!response.ok) {
                    console.error('Error fetching submission data:', response.statusText);
                    navigate('/login');
                    return;
                }
                const data = await response.json();
                setSubmissionData(prevData => [...prevData, ...data]);
            } catch (error) {
                if (error !== 'AbortError') {
                    console.error('Error fetching submission data:', error);
                }
            }
        };
        fetchData();
        return () => {
            controller.abort();
        };
    }, [loadOffset, tableFilters]);
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
        } catch (error) {
            console.error('Error fetching submission data:', error);
        }
    };

    function handleFilterChange(name: string, checked: boolean) {
        setTempFilters(prevFilters => {
            if (checked && !prevFilters.includes(name)) {
                return [...prevFilters, name];
            } else if (!checked && prevFilters.includes(name)) {
                return prevFilters.filter(filter => filter !== name);
            }
            return prevFilters;
        });
    }

    function UpdateApplyFilters() {
        setTableFilters(tempFilters);
        setSubmissionData([]);
        setLoadOffset(0);
    }


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

                            <input type="checkbox" id="albumComments" placeholder="AlbumComments" defaultChecked onChange={(e) => handleFilterChange("album_comments", e.target.checked)} />
                            <label htmlFor="albumComments">Album Comments</label>
                            <br />
                            <input type="checkbox" id="confessions" placeholder="Confessions" defaultChecked onChange={(e) => handleFilterChange("confessions", e.target.checked)} />
                            <label htmlFor="confessions">Confessions</label>
                            <br />
                            <input type="checkbox" id="prayerRequests" placeholder="PrayerRequests" defaultChecked onChange={(e) => handleFilterChange("prayer_requests", e.target.checked)} />
                            <label htmlFor="prayerRequests">Prayer Requests</label>
                            <br />
                            <input type="checkbox" id="missingPersonsReports" placeholder="MissingPersonsReports" defaultChecked onChange={(e) => handleFilterChange("missing_persons_reports", e.target.checked)} />
                            <label htmlFor="missingPersonsReports" >Missing Persons Reports</label>
                            <br />
                            <input type="checkbox" id="skidmarks" placeholder="Skidmarks" defaultChecked onChange={(e) => handleFilterChange("skidmarks", e.target.checked)} />
                            <label htmlFor="skidmarks">Skidmarks</label>
                            <br />
                            <input type="checkbox" id="oldScroteFeedback" placeholder="OldScroteFeedback" defaultChecked onChange={(e) => handleFilterChange("old_scrote_feedback", e.target.checked)} />
                            <label htmlFor="oldScroteFeedback">Old Scrote Feedback</label>
                            <br />
                            <input type="checkbox" id="alienContactForm" name="AlienContactForm" placeholder="AlienContactForm" defaultChecked onChange={(e) => handleFilterChange("alien_contact_form", e.target.checked)} />
                            <label htmlFor="alienContactForm">Alien Contact Form</label>
                            <br />
                            <label htmlFor="loadLimit">Load Limit:</label>
                            <select id="loadLimit" value={loadLimit} onChange={(e) => setLoadLimit(Number(e.target.value))} disabled>
                                <option value={25}>25</option>
                                <option value={100}>100</option>
                                <option value={500}>500</option>
                            </select>
                            <div style={{ textAlign: 'right', padding: '8px' }}>
                                <button onClick={UpdateApplyFilters}>Apply</button>
                            </div>
                        </div>

                        <div style={{ flex: 5 }} className="tree-view">
                            <div style={{ border: "1px solid black", borderBottom: "0px" }}>
                                <div style={{ width: "100%", backgroundColor: "white", display: 'flex' }}>
                                    <div style={{ flex: 5, paddingLeft: "4px", borderRight: "1px solid black" }}>Table</div>
                                    <div style={{ flex: 4, paddingLeft: "4px", borderRight: "1px solid black" }}>Date</div>
                                    <div style={{ flex: 6, paddingLeft: "4px" }}>Name</div>
                                </div>

                                {submissionData.map((submission, index) => (
                                    <SubmissionCardComponent
                                        key={index}
                                        table={submission.form}
                                        date={submission.date}
                                        ip={submission.sender}
                                        name={submission.name}
                                        status={submission.status}
                                        id={submission.id}
                                        selectData={fetchDataSpec}
                                    />
                                ))}
                            </div>

                            <center><span style={{ cursor: "pointer" }} onClick={() => setLoadOffset(loadOffset + loadLimit)}>Load More</span></center>
                        </div>



                        {singleTableData && Object.keys(singleTableData).length === 0 ? (
                            <div style={{ flex: 3, }} className="tree-view">
                                <div style={{border: "1px solid black", marginLeft: "8px", padding: '6px'}}>
                                    <img src="./alien.gif" alt="No Data Available" />
                                </div>
                                
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

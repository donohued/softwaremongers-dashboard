import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../scrote-style.css'

export default function ScroteOverview() {
    const navigate = useNavigate();

    React.useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}` + '/scrote/overview',
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
                setOverviewData(data);
            } catch (error) {
                console.error('Error fetching submission data:', error);
            }
        }

        fetchData();
    }, []);

    const [overviewData, setOverviewData] = React.useState(
        {
            totalHits: "",
            uniqueHits: "",
            totalVisitorsToday: "",
            newVisitorsToday: "",
            formsSubmittedToday: "",
        }
    );

    return (
        <main style={{ flex: 5, padding: '1rem' }}>


            <div className="window" >
                <div className="title-bar">
                    <div className="title-bar-text">Scrote Stats Overview</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    <div className="stats">
                        <div className="stat-box">
                            <div className="icon">👁️</div>
                            <h3 id="visitorsToday">{overviewData.totalVisitorsToday}</h3>
                            <p>Visitors Today</p>
                        </div>
                        <div className="stat-box">
                            <div className="icon">🆕</div>
                            <h3 id="newVisitorsToday">{overviewData.newVisitorsToday}</h3>
                            <p>New Visitors Today</p>
                        </div>
                        <div className="stat-box">
                            <div className="icon">📥</div>
                            <h3 id="newSubmissions">{overviewData.formsSubmittedToday}</h3>
                            <p>New Submissions</p>
                        </div>
                    </div>

                    <div className="small-stats">
                        <div className="small-stat-box">
                            <h3 id="totalVisits">{overviewData.totalHits}</h3>
                            <p>Total Visits</p>
                        </div>
                        <div className="small-stat-box">
                            <h3 id="totalVisitors">{overviewData.uniqueHits}</h3>
                            <p>Total Visitors</p>
                        </div>
                    </div>

                </div>
            </div>

        </main>
    )
}

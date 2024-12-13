import './scrote-style.css'
export default function ScroteOverview() {
    return (
        <main style={{ flex: 5, padding: '1rem' }}>


            <div className="window" >
                <div className="title-bar">
                    <div className="title-bar-text">Scrote Dashboard</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">

                        <h3>Scrote.org Site Overview</h3>
                        <div className="stats">
                            <div className="stat-box">
                                <div className="icon">👁️</div>
                                <h3 id="visitorsToday">0</h3>
                                <p>Visitors Today</p>
                            </div>
                            <div className="stat-box">
                                <div className="icon">🆕</div>
                                <h3 id="newVisitorsToday">0</h3>
                                <p>New Visitors Today</p>
                            </div>
                            <div className="stat-box">
                                <div className="icon">📥</div>
                                <h3 id="newSubmissions">0</h3>
                                <p>New Submissions</p>
                            </div>
                        </div>

                        <div className="small-stats">
                            <div className="small-stat-box">
                                <h3 id="totalVisits">0</h3>
                                <p>Total Visits</p>
                            </div>
                            <div className="small-stat-box">
                                <h3 id="totalVisitors">0</h3>
                                <p>Total Visitors</p>
                            </div>
                        </div>

                        <ul style={{ color: 'black' }}>
                            Stuff to add to this page:
                            <li>submissions that need attention</li>
                            <li>set scrote as prefered dashboard</li>
                        </ul>


                </div>
            </div>

        </main>
    )
}

import { Link } from "react-router-dom";
import dancingguy from "../../assets/alien_ani.gif";

export default function ScroteNav() {
    return (
        <nav style={{ flex: 1,  padding: '1rem', minWidth:"269px" }}>
            <div className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Scote Admin Navigation</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    <div><Link to={"/scrote/overview"}>Site Overview</Link></div>
                    <div><Link to={"/scrote/submissions"}>Form Submissions</Link></div>
                    <div><Link to={"/scrote/files"}>Manage Files</Link></div>
                    <div><Link to={"/scrote/email"}>Send Email</Link></div>
                    <div><Link to={"/scrote/observer"}>Scrote Observer</Link></div>
                    <hr />
                    <img src="/alien_ani.gif" alt="bill murray" />
                </div>
            </div>

        </nav>
    )
}

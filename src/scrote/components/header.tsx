import { Link } from 'react-router-dom'

export default function ScroteHeader() {
    return (
        <header className='title-bar' style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#282c34', padding:'8px' }}>
            <div style={{ flex: 20, display: 'flex', justifyContent: 'space-around', textDecoration:'none'}}>
                <div><Link to="/scrote"><button style={{}} >Scrote.Org</button></Link></div>
                <div><button style={{}} >SeriouslyNIX.com</button></div>
                <div><button style={{}} >SoftwareMongers.com</button></div>
            </div>


            <div style={{ flex: 1 }}><button style={{backgroundColor:'#fa3c52'}} className="logout-btn" id="logoutButton">Logout</button></div>
        </header>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function SeriouslyNav() {
    return (
        <div style={{ width: '50%', margin: '12px auto', justifyContent: 'center', textAlign: 'center', color: 'white', lineHeight: '1.5' }}>

            <p style={{ fontSize: '1.25rem' }}>SeriouslyNIX.com</p>
            <div><Link to={"/srsnix/overview"}>Overview</Link></div>
            <div><Link to={"/srsnix/updates"}>Write Update</Link></div>
            <div><Link to={"/srsnix/files"}>Manage Files</Link></div>
            <div><Link to={"/srsnix/polls"}>Poll Manager</Link></div>
            <div><Link to={"/srsnix/harold"}>Harold Manager</Link></div>
            <div><Link to={"/srsnix/ip"}>Guest Manager</Link></div>
            <div><Link to={"/srsnix/stats"}>StatTrak™</Link></div>

        </div>
    )
}

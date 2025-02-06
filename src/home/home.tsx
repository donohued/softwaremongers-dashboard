import React from 'react'
import ScroteNav from '../scrote/components/nav'
import HomeHeader from './header'
import { Link } from 'react-router-dom'

export default function AdminHomepage() {

    const mainPages = {
        page1: {
            title: 'Scrote.org',
            url: 'https://scrote.org',
            dash: 'scrote',
            devUrl: 'https://gentle-sky-08a050f10-40.centralus.3.azurestaticapps.net/',
            imgUrl: '/public/scrotethumbnail.JPG'
        },
        page2: {
            title: 'Seriouslynix.com',
            url: 'https://seriouslynix.com',
            dash: 'srsnix',
            devUrl: 'https://nice-pebble-063bfc510-10.centralus.3.azurestaticapps.net/home',
            imgUrl: '/public/srsnixthumbnail.JPG'
        }
    }

    return (
        <>
            <div style={{ width: "100%" }}>

                <HomeHeader />
                <h2 style={{ color: 'black' }}>Softwaremongers Admin Dashboard :)</h2>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>

                {Object.values(mainPages).map((page, index) => (
                        <div key={index} style={{ flex: '1' }}>
                            <div style={{ width: '80%', margin: 'auto' }}>
                                <Link to={page.url}>
                                    <img style={{ width: '100%', margin: 'auto', aspectRatio: '2/1', border:'1px solid black' }} src={page.imgUrl} alt={page.title} />
                                </Link>
                                <h3 style={{ textAlign: 'center', color: 'black', margin:0}}>
                                    <a href={page.dash} style={{ color: 'black', textDecoration: 'none' }}>{page.title}: [Dash]</a>
                                </h3>
                                <p style={{ textAlign: 'center' }}>
                                    <a href={page.devUrl} style={{ color: 'black' }}>[dev site]</a>
                                </p>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </>
    )
}

import React from 'react'
import ScroteNav from '../scrote/components/nav'
import HomeHeader from './header'

export default function AdminHomepage() {

    const mainPages = {
        page1: {
            title: 'Scrote.org',
            url: 'https://scrote.org',
            devUrl: 'https://gentle-sky-08a050f10-40.centralus.3.azurestaticapps.net/',
            imgUrl: 'https://i.imgur.com/2zvR1Z4.jpg'
        },
        page2: {
            title: 'Seriouslynix.com',
            url: 'https://seriouslynix.com.com/page1',
            devUrl: 'https://nice-pebble-063bfc510-10.centralus.3.azurestaticapps.net/home',
            imgUrl: 'https://i.imgur.com/2zvR1Z4.jpg'
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
                                <a href={page.url}>
                                    <img style={{ width: '100%', margin: 'auto' }} src={page.imgUrl} alt={page.title} />
                                </a>
                                <h3 style={{ textAlign: 'center', color: 'black', margin:0}}>
                                    <a href={page.url} style={{ color: 'black', textDecoration: 'none' }}>{page.title}</a>
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

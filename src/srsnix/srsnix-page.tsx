import React, { useEffect, useRef, useState } from 'react'
import HomeHeader from '../home/header'
import { Link, Outlet, useLocation } from 'react-router-dom'
import SeriouslyNav from './srsnix-nav'
import GoBack from './components/go-back';



export default function SeriouslyNixPage() {
    const [outlet, setOutlet] = useState<boolean>(false);
    const outletRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        const checkOutletData = () => {
            if (outletRef.current && outletRef.current.children.length > 0) {
                setOutlet(true);
            } else {
                setOutlet(false);
            }
        };

        checkOutletData();
    }, [location]);


    return (
        <div style={{ width: "100%" }}>

            <HomeHeader />

            {!outlet && <SeriouslyNav />}

            {outlet && <GoBack url='/srsnix' />}

            <div ref={outletRef}>
                <Outlet />
            </div>

        </div>
    )
}

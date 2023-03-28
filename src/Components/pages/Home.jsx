import React from 'react'
import { Header } from '../Layouts/Home/Header'
import { MainHome } from '../Layouts/Home/MainHome'
import { FooterH } from '../Layouts/Home/FooterH'




export const Home = () => {
    return (
    <>
        <div className='divHeader'>
            <Header/>
        </div>
        <div className='divMain'>
            <MainHome/>
        </div>
        <div className='divFooter'>
        <FooterH />
        </div>
    </>
    )
}

import React from 'react'
import Carousel from '../Home/Carousel/Carousel'
import { Form } from './Form'
import { Information } from './Information'



export const MainHome = () => {
  return (
    <>
    <div className='mainHome'>
    <div className='div-carousel'>
        <Carousel className="carousel"/>
      </div>
      <div className='div-form'>
        <Form/>
      </div>
    </div>
    <div className='information'>
      <Information/>
    </div>
  </>
  )
}

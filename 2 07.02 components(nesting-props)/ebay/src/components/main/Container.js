import React from 'react'
import Carousel from './Carousel'
import Nav from './Nav'
import OffersList from './OffersList'

export default function Container({products}) {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
    <Nav/>
    <Carousel/>
    <OffersList products = {products}/>
    </div>
  )
}

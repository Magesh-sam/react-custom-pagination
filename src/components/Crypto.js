import React from 'react'
import './Crypto.css'

export default function Crypto({coinsData}) {
    
  return (
    <>
    <h1 className='cryptocoins'>Crypto Currency</h1>
    <section className="coinslist" >
    {coinsData.map((coin,index) => (
        <div className='coin'  key={index}>
            <h1>{coin.name}</h1>
            <img src={coin.image} alt={coin.name} />
            <h5>Price in INR: ₹{coin.current_price}</h5>
        </div>
    ))}
    </section>
    
    </>
  )
}

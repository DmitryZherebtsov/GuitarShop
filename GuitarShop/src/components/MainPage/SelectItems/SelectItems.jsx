import React from 'react'
import './SelectItems.css'
import { guitars } from '../../../assets/assets'

const SelectItems = () => {
  return (
    <div className='select_item'>
        <br />

        <h1>Select your Guitar<span className='dot'>.</span></h1>

        <div className='guitar_items'>
            {guitars.map(item => (
                <div className='item'>
                    <div>
                        <img src={item.image} alt="" />
                    </div>

                    <div>
                        <h2>{item.title}</h2> 
                    </div>

                    <div>
                        <p>USD $ {item.price_text}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SelectItems
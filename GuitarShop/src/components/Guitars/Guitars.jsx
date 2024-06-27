import React from 'react'
import './Guitars.css'
import { guitars, nav_assets } from '../../assets/assets'

const Guitars = () => {
  return (
    <div className='guitars_page'>
      <div className='guitar_collection'>
        <p>Choose the best one for you</p>
        <h1 className='caption_guitars'>Our Guitar collection<span className='dot'>.</span></h1>
      </div>

      <div className='collection'>
        {guitars.map(item => (
          <div className='collection_item' key={item.title}>

            <div className='image_container'>
              <img className='collection_item_image' src={item.collection} alt={item.title} />
            </div>

            <div className='collection_item_description'>
              <div className='title_element'>
                <h2>{item.title} <span className='dot'>.</span></h2>
                <img src={nav_assets.decorador} alt="decorador" />
              </div>

              <p className='guitar_description'>{item.description}</p>

              <p className='additional_info'>{item.additional}</p>

              <div className='price_guitars'>
                <h3>{item.price_text} $</h3>
                <button className='button_guitars'>More Information</button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Guitars

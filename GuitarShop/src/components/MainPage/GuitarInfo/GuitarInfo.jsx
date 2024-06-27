import React from 'react'
import './GuitarInfo.css'
import { nav_assets } from '../../../assets/assets'

const GuitarInfo = () => {
  return (
    <div>
        <div className='background_more'> </div>
        <div className='more_info'>
            <div className='first_more'>

                <p>Advanced customization</p>

                <h1>Customize your Les Paul <span className='dot'>.</span></h1>

                <p>     If you are a guitarist looking for a Les Paul
                    that reflects your personality and style,
                    you need to know our customization process.
                    <br />
                    <br />
                        Our services allow you to create a unique
                    and exclusive guitar, tailored to your needs
                    and preferences.   
                </p>
            
                <span className='check_boxes'>
                    <h5><img src={nav_assets.check} alt="" /> Accessories</h5>
                    <h5><img src={nav_assets.check} alt="" />Finish and appearance</h5>
                    <h5><img src={nav_assets.check} alt="" />Changing pickups, knobs and bridge</h5>
                    <h5><img src={nav_assets.check} alt="" />Adding decorative elements</h5>
                    <h5><img src={nav_assets.check} alt="" />And much more</h5>
                </span>

                <a className='link_for_more' href="/AboutUs">MORE INFORMATION</a>
            </div>

            <div className='second_more'>
                <img src={nav_assets.img_intro2} className='more_img' alt="" />
            </div>

        </div>
    </div>
  )
}

export default GuitarInfo
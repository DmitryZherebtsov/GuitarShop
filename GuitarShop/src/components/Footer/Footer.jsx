import React from 'react'
import './Footer.css'
import {nav_assets} from "../../assets/assets.js"
import Media from './Media/Media.jsx'
import Information from './Information/Information.jsx'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_logo'>

        <a href="">
          <img className='img_footer' src={nav_assets.logo} alt="" />
        </a>

          <p className='rights_reserved'>Les Paul Garage © All rights reserved.</p>

        </div>

        <div>
          <Media />
        </div>

        <div className='info_class'>
          <Information />
        </div>

    </div>
  )
}

export default Footer
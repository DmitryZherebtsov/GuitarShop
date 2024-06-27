import React from 'react'
import './Media.css'
import { nav_assets } from '../../../assets/assets'

const Media = () => {
  return (
    <div>

       <div>
        <h2>Contacts</h2>
       </div>

       <div>
            <p>
                +55 21 99999-9999
                <br />
                contato@lespaulgarage.com
            </p>
       </div>

       <div>
             <hr />
             <br />
            <p>
                Rua das Guitarras, 136 
                <br /> 
                Flamengo
                Rio de Janeiro - RJ
            </p>
       </div>

       <div className='medias'>
             <hr />
             <br />
            <a href="https://www.instagram.com/gibsonguitar/">
              <img className='insta' src={nav_assets.instagram} alt="" />
            </a>

            <a href="https://www.facebook.com/Gibson">
              <img className='faceb' src={nav_assets.facebook} alt="" />
            </a>

            <a href="https://www.youtube.com/@gibsonguitar">
              <img className='yout' src={nav_assets.youtube} alt="" />
            </a>
       </div>   
     
       <p className='rights_reserved_mobile'>Les Paul Garage © All rights reserved.</p>

    </div>
  )
}

export default Media

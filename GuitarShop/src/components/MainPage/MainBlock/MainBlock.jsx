import React from 'react'
import './MainBlock.css'
import { nav_assets } from '../../../assets/assets'

const MainBlock = () => {
  return (
        <div className='main_block'>
                <div className='background_black'></div>
                
                <div className='main_caption'>
                    <div className='background_black_mobile'></div>
                    <div>
                        <h1>Les Paul guitars in perfect condition and customizable<span className='dot'>.</span></h1>

                        <p>
                        We are a company made up of people
                            in love with iconic guitars
                            Les Paul. If you share this
                            same passion, your place is here.
                        </p>

                        <button className='choose_yours'> 
                            <a href="/Guitars">CHOOSE YOURS</a>
                        </button>
                    </div>
                </div>

                <div>
                    <img src={nav_assets.img_intro} className='img_intro' alt="" />
                </div>

        </div>
  )
}

export default MainBlock

import React from 'react'
import './style.scss'
const Header = () => {
  return (
    <section className='header'>
        <div className='header_container'>
            <div className='header_container_content'>
                <h1>Select Your New Perfect Style</h1>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
                <div className='btn'>
                <button>SHOP NOW</button>
                <button>SHOP NOW</button>
                </div>
            </div>
            <div className='header_container_img'>
                {/* <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" alt="" /> */}
            </div>
        </div>
    </section>
  )
}

export default Header
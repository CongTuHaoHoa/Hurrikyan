import React from 'react'
import me from '../Assets/me.png'

const Banner = () =>
{
    return  <div className='banner'>
        <div className='banner-container'>
            <div className='banner-image'>
                <img src={ me } alt='Me'/>
            </div>
            <div className='banner-greeting'>
                <p>Hi</p>
                <div>
                    <p>I'm</p>
                    <h1>Hurrikyan</h1>
                </div>
                <p>Backend Developer</p>
                <button>Hire me</button>
            </div>
        </div>
    </div>
}

export default Banner

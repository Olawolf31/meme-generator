import React from 'react'
import logo from './images/meme.png'

const Header = () => {
    return (
        <div>
            <header>
                <section>
                    <div className="top">
                        <img src={logo} width='50px' alt='' /> 
                        <div className='header-title'>MemeGenerator</div>
                        <div className='header-title2'>React Course - Project 3</div>
                    </div>
                </section>
            </header>
        </div>
    )
}

export default Header
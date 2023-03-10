import React from 'react'

const Header = (props) => {
    const {countCartItems} = props
    return (
        <header className='row block center'>
            <div>
                <a href='#/'>
                    <h1>Small Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href='#/cart'>Cart</a> 
                
                Cart { ' '}
                {countCartItems ? (
                    <button className='badge'>{countCartItems}</button>
                ): (' ')}

                <a href='#/signin'>Sign In</a>
            </div>
        </header>
    )
}

export default Header
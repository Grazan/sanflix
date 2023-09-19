import React from 'react';
import './Header.css';

export default ({black})=> {
    return(
        <header className={black ?'black': ''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='./logo.png' alt="Sanflix"/>
                </a>
            </div>
            <div className='header--user'>
                <a href='/'>
                    <img src='https://i.pinimg.com/564x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg' alt='usuário'/>
                </a>
            </div>
        </header>

    );
}
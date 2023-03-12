import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo=()=>{
    return(
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' options={{max:55}} style={{height:230, width: 230}}>
                <div className='Tilt-inner pa5'>
                    <img style={{paddingTop:'2px', transform:'scale(1.5)'}} src={brain} alt='brain'/>
                </div> 
            </Tilt>

        </div>
    );
}

export default Logo;
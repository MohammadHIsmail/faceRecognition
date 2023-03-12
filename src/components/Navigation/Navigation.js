import React from 'react';

//in sign in form and routing min 18:40 he used another way to show the sign in

const Navigation=({onRouteChange})=>{
    return(
        <nav style={{display: 'flex',justifyContent:'flex-end'}}>
            <p onClick={()=>onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    );
}

export default Navigation;
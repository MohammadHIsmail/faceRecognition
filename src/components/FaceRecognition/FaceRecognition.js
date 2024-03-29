import React from 'react';
import './FaceRecognition.css';


const FaceRecognition=({imageURL, box})=>{
    
    if(imageURL){
        return(
            <div className='center pa3 ma'>
                <div className='absolute mt2'>
                    <img id='inputImage' src={imageURL} alt='' width='500px' height='auto'/>
                    <div className='bounding-box' style={{top:box.topRow, right:box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>

                    </div>
                </div>
            </div>
        );
    }
    else{
        return(
            <div className='center pa3'>
            </div>
        );
    }
    
}

export default FaceRecognition;
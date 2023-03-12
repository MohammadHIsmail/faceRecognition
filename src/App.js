import React, {useState} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Signin from './components/Signin/Signin.js';
import Register from './components/Register/Register.js';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


function App() {
  
  //can multiple useState be initialized in 1 line?
  const [input, setInput]=useState('');
  const [imageURL, setImageURL]=useState('');
  const [box, setBox]=useState({});
  const [route, setRoute]=useState('signin')


  const app=new Clarifai.App({
    apiKey:'806c7d6d26d64da6b67b6ef56dad09c8'
  });

  const calculateFaceLocation=(data)=>{
    const clarifaiFace= data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol: clarifaiFace.left_col * width,
      topRop: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)

    }
  }

  const displayBox=(box)=>{
    setBox(box)
  }

  const onInputChange=(event)=>{
    setInput(event.target.value)
  }

  const onButtonSubmit=()=>{
    setImageURL(input);
    app.models.predict(Clarifai.FACE_DETECT_MODEL,input)
    .then(response=>displayBox(calculateFaceLocation(response)))
    .catch(err=> console.log(err));
  }

  const onRouteChange=(route)=>{
    setRoute(route)
  }
  
  const particlesOptions={
    particles: {
      number:{
        value:70,
        density:{
          enable:true,
          value_area:800
        }
      }
    }
  }
  return (
    <div className="App">
      <Particles className='particles' params={particlesOptions}/>

      {route ==='signin'? <Signin onRouteChange={onRouteChange}/>
      :(route==='register'?<Register onRouteChange={onRouteChange}/>
      :<div>
        <Navigation onRouteChange={onRouteChange}/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={onInputChange} onButtonSubmit={onButtonSubmit}/>
        <FaceRecognition box={box} imageURL={imageURL}/>
      </div>)}

    </div>
  );
}

export default App;
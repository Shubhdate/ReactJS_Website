import React from 'react'
import HeroSectiuon from './components/HeroSectiuon'
import { useEffect } from 'react';
import { useGlobalContext } from './Context'

const About = () => {
  // const data = {
  //   name:"Shubham Date",
  //   image: "./image/about1.svg",
  // };

  const {updateAboutPage} = useGlobalContext();
  useEffect(() => updateAboutPage(), []);

  return (
    // <HeroSectiuon {...data}/>
    <HeroSectiuon/>
  )
}

export default About
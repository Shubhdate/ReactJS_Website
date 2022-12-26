import React from 'react'
import HeroSectiuon from './components/HeroSectiuon'
import { useGlobalContext } from './Context'
import { useEffect } from 'react'
import Service from './Service'
import Contact from './Contact'

const Home = () => {

  // const data = {
  //     name:"Shubhaaam.com",
  //     image:"./images/hero.svg",
  // };

  const {updateHomePage} = useGlobalContext();
  useEffect(() => updateHomePage(), []);
  

  return (
    <>
    {/* // <HeroSectiuon {...data}/> */ }
    <HeroSectiuon/>
    <Service />
    <Contact/>
    </>
  )
}

export default Home
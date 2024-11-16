import React from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import LandingPageLeftSection from './LandingPageLeftSection';
import LandingPageRightCard from './LandingPageRightCard';
import AchievementCard from './AchievementCard';

const LandingPage = () => {
    useGSAP(()=>{
        gsap.from(".landingRightImage", { duration: .8, x: 120, });
       })

  return (
    <section className='primaryBgColor h-[65rem] grid grid-cols-2 relative '>
      <LandingPageLeftSection/>
      <LandingPageRightCard/>
      <AchievementCard/>
    </section>
  )
}

export default LandingPage

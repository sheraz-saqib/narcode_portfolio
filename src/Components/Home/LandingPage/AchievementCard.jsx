import React from 'react'

const AchievementCard = () => {
    const achiveCardData = [
        {
            "title":"$70M",
            "text" :"annual client impact"
        },
        {
            "title":"40+",
            "text" :"Unique Ideas"
        },
        {
            "title":"10k+",
            "text" :"Happy Client"
        },
        {
            "title":"5000",
            "text" :"patents issued"
        },
       ];
  return (
    <div className="w-screen h-[9rem]  absolute bottom-[-4rem] flex justify-center items-center">
    <div className="LandingPageCardsGroup flex justify-between w-full px-[15rem]">
        {
            achiveCardData.map(item=>{
                return <div className="LandingPageCard secondaryBgColor w-[25rem] h-[9rem] rounded-[2rem] px-[2rem] py-[1rem]">
                <h2 className="cardHeading text-[3rem] text-white">{item.title}</h2>
                <p className="text text-[1.2rem] text-white ">{item.text}</p>
            </div>;
            })
        }

    </div>
</div>
  )
}

export default AchievementCard

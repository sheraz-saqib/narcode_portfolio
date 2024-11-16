import React from 'react'

const ProductLeftCard = () => {
    const cardBody = [
        {
            "title" :"1100+",
            "subTitle":"projects Delivered"
        },
        {
            "title" :"95%",
            "subTitle":"Client Retention"
        },
        {
            "title" :"80+",
            "subTitle":"warehouse Automation software Solutions"
        },
        {
            "title" :"1500+",
            "subTitle":"web projects"
        },
    ];
  return (
    <div className="leftSide w-[45rem]  flex flex-col justify-center items-center">
    <div className="TopHeading">
    <div className="heading text-[4rem] font-bold">
        Our Products
    </div>
    <p className="text-[1.3rem]">Explore Our Top Quality Selection</p>
    </div>
    {/* bottom content */}
    <div className="LeftBottomCardsGroup">
        {cardBody.map(item=>{
            return (
                <div className="leftCard mt-[5rem] mr-[2.5rem]">
                    <h2 className='text-[4rem]'>{item.title}</h2>
                   <p className='text-[1.2rem]'>{item.subTitle}</p>
                </div>
            )
        })}

    </div>
</div>
  )
}

export default ProductLeftCard

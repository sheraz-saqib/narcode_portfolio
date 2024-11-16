import React from 'react'
import ProductLeftCard from './ProductLeftCard';

const OurProduct = () => {

  return (
    <section className='OurProductSection h-[80rem]  mt-[10rem] grid grid-cols-3 '>
      <ProductLeftCard/>
        <div className="rightSide  col-span-2 grid grid-rows-2 grid-cols-2 items-center justify-end  ">
            <div className="ProductCards">
                <img src="./public/image/product_image_1.png" className='h-[29rem]' alt="" />
                <p className='text-[1.4rem] font-bold'>POS Management System</p>
            </div>
            <div className="ProductCards">
                <img src="./public/image/product_image_1.png" className='h-[29rem]' alt="" />
                <p className='text-[1.4rem] font-bold'>POS Management System</p>
            </div>
            <div className="ProductCards">
                <img src="./public/image/product_image_1.png" className='h-[29rem]' alt="" />
                <p className='text-[1.4rem] font-bold'>POS Management System</p>
            </div>
            <div className="ProductCards">
                <img src="./public/image/product_image_1.png" className='h-[29rem]' alt="" />
                <p className='text-[1.4rem] font-bold'>POS Management System</p>
            </div>
        </div>
    </section>
  )
}

export default OurProduct

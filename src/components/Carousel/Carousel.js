import React from 'react'
import Image from 'next/image'
import { useGetPhotoFromQuery } from "../../hooks/useGetPhotoFromQuery";
import {Carousel as ResCarousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useColorModeValue } from '@chakra-ui/react';

const Carousel = () => {
  // const colorMode = useColorModeValue()

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const imageData = useGetPhotoFromQuery(
  {
    query: "sale dhamaka offer",
    client_id: process.env.NEXT_PUBLIC_UNSPLASH_CLIENY_ID,
  },
  (data) => {
      console.log(data.results)
      var arrayData = [data.results[random(0,3)]?.urls.full,data.results[random(3,6)]?.urls.full,data.results[random(6,9)]?.urls.full,data.results[9]?.urls.full]
      return arrayData
  }
);

// const [imgURL, setimgURL] = useState(initialState);

// console.log(imageData, useColorModeValue)

  return (
    <div className='relative'>
      <div className={`absolute z-[1] w-full h-32 bg-gradient-to-t ${useColorModeValue('from-gray-100','from-[#1A202C]')} via-transparent  to-transparent bottom-0 z-20`}/>
      <div className={`absolute z-[1] w-full h-32 bg-gradient-to-b ${useColorModeValue('from-gray-100','from-[#1A202C]')} via-transparent  to-transparent bottom-[-128px] z-20`}/>
        <ResCarousel 
        autoPlay
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        stopOnHover={true}
        interval={3000}
        >
            {imageData?.map((src, i)=>{
               return(<header
                className=' text-white'
                key={i}
                style={{
                  opacity: '1',
                  backgroundImage:`url(${src})`,
                  height: '440px',
                  width: '100%',
                  position: 'relative',
                  objectFit: 'contain',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  paddingTop: '337px',
                  zIndex: '-1'
                }}
                />)
            })}
            {/* {imageData?.map((src, i)=>{
               return( <div key={i} className=''><img className='object-contain' loading='lazy' alt='offer' src={src} /></div>)
            })} */}

        </ResCarousel>

    </div>
  )
}

export default Carousel
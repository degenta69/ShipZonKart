import React from 'react'
import Image from 'next/image'
import { useGetPhotoFromQuery } from "../../hooks/useGetPhotoFromQuery";
import {Carousel as ResCarousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Carousel = () => {

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const imageData = useGetPhotoFromQuery(
  {
    query: "sale offer",
    client_id: process.env.NEXT_PUBLIC_UNSPLASH_CLIENY_ID,
  },
  (data) => {
      console.log(data.results)
      var arrayData = [data.results[random(0,3)]?.urls.full,data.results[random(3,6)]?.urls.full,data.results[random(6,9)]?.urls.full,data.results[9]?.urls.full]
      return arrayData
  }
);

// const [imgURL, setimgURL] = useState(initialState);

console.log(imageData)

  return (
    <div className='relative'>
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
               return( <div key={i}><img alt='offer' src={src} /></div>)
            })}

        </ResCarousel>

    </div>
  )
}

export default Carousel
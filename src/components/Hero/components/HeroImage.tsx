import React from 'react'

interface HeroImageProps  {
  src:string;
  alt:string;
}

const HeroImage:React.FC<HeroImageProps> = ({
  src,
  alt
}) => {
  return (
    <img src={src} alt={alt} className='h-[300px] w-auto'/>
  )
}

export default HeroImage
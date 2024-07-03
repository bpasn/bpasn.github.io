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
    <img src={src} alt={alt} className='h-[500px] w-auto object-contain '/>
  )
}

export default HeroImage
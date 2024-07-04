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
    <img src={src} alt={alt} className='w-[200px] md:w-[auto!important] object-contain '/>
  )
}

export default HeroImage
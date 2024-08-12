import Image from 'next/image'
import React from 'react'

export type image = {
  image_type: string,
  image: string
}

const Photo: React.FC<image>  = (props: image) => {
  return (
    <div className='w-full h-[45%] overflow-hidden'>
      <Image src={`data:${props.image_type};base64,${props.image}`} alt="" width={1000} height={1000} className={`${"w-full h-full bg-violet-600/80 object-cover group-hover:scale-110 transition-translate duration-500 "}`}></Image>
    </div>
  )
}

export default Photo


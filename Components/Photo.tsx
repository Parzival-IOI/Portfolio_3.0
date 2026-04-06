import Image from 'next/image'
import React from 'react'

export type image = {
  image_type: string,
  image: string
}

const Photo: React.FC<image>  = (props: image) => {
  return (
    <div className='w-full aspect-video overflow-hidden bg-neutral-900'>
      {
        props.image &&
        <Image src={`data:${props.image_type};base64,${props.image}`} alt="" width={1000} height={1000} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' />
      }
    </div>
  )
}

export default Photo


import Image, { StaticImageData } from 'next/image'
import React from 'react'
import php from '@/public/php.png'
import python from '@/public/python.png'
import micropython from '@/public/Micropython.png'
import react from '@/public/react.png'
import c_cpp from '@/public/c-cpp.jpg'
import cs from '@/public/c-sharp.png'
import ino from '@/public/ino.png'
import java from '@/public/java.png'
import hcj from '@/public/htmlcssjs-overview.png'
import NoImage from '@/public/NoImage.png'

interface Props {
    val : number
}

interface varibleConst {
  image : StaticImageData;
  background : string,
}

const Photo: React.FC<Props>  = (props) => {
  return (
    <div className='w-full h-[45%] overflow-hidden'>
      <Image src={variable[props.val].image} alt="" width={1000} height={1000} className={`${"w-full h-full object-cover group-hover:scale-110 transition-translate duration-500 "} ${variable[props.val].background}`}></Image>
    </div>
  )
}

export default Photo


const variable: varibleConst[] = [
  {
    image : c_cpp,
    background: "",
  },
  {
    image : react,
    background: " bg-gradient-to-br from-green-500 to-cyan-600 ",
  },
  {
    image : php,
    background: " bg-gradient-to-br from-rose-400 to-amber-300 ",
  },
  {
    image : python,
    background: "",
  },
  {
    image : micropython,
    background: "",
  },
  {
    image : cs,
    background: " bg-gradient-to-br from-orange-400 to-purple-600 ",
  },
  {
    image : ino,
    background: " bg-gradient-to-br from-pink-600 to-cyan-500 ",
  },
  {
    image : java,
    background: " bg-gradient-to-br from-purple-600 to-slate-100 ",
  },
  {
    image : hcj,
    background: "",
  },
  {
    image : NoImage,
    background: "",
  },
]
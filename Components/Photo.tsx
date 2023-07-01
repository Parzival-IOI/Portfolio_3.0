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
    pic? : string
}
interface PicName {
  name? : string
}

interface varibleConst {
  image : StaticImageData;
  text : string,
  background : string,
}


const Photo: React.FC<Props>  = (props) => {
  return (
    <div className='w-full h-[45%] overflow-hidden'>
      <Image src={variable[getPic(props.pic)].image} alt="" width={1000} height={1000} className={`${"w-full h-full object-cover group-hover:scale-110 transition-translate duration-500"} ${variable[getPic(props.pic)].background}`}></Image>
    </div>
  )
}

export default Photo

function getPic(name?:string | undefined) {
  let alpha:number;

  if(name == "c_cpp") alpha = 0;
  else if (name == "react") alpha = 1;
  else if (name == "php") alpha = 2;
  else if (name == "python") alpha = 3;
  else if (name == "micropython") alpha = 4;
  else if (name == "cs") alpha = 5;
  else if (name == "ino") alpha = 6;
  else if (name == "java") alpha = 7;
  else if (name == "hcj") alpha = 8;
  else alpha = 9;

  return alpha;
}


const variable:varibleConst[] = [
  {
    image : c_cpp,
    text : "",
    background: "",
  },
  {
    image : react,
    text : "",
    background: " bg-gradient-to-br from-green-500 to-cyan-600 ",
  },
  {
    image : php,
    text : "",
    background: "",
  },
  {
    image : python,
    text : "",
    background: "",
  },
  {
    image : micropython,
    text : "",
    background: "",
  },
  {
    image : cs,
    text : "",
    background: "",
  },
  {
    image : ino,
    text : "",
    background: "",
  },
  {
    image : java,
    text : "",
    background: "",
  },
  {
    image : hcj,
    text : "",
    background: "",
  },
  {
    image : NoImage,
    text : "",
    background: "",
  },
]
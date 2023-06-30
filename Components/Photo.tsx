import Image from 'next/image'
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

const Photo: React.FC<Props>  = (props) => {

  function getPic(name?:string | undefined) {
    let alpha;
    if(name == "c_cpp") alpha = c_cpp;
    else if (name == "react") alpha = react;  
    else if (name == "php") alpha = php;
    else if (name == "python") alpha = python;
    else if (name == "micropython") alpha = micropython;
    else if (name == "cs") alpha = cs;
    else if (name == "ino") alpha = ino;
    else if (name == "java") alpha = java;
    else if (name == "hcj") alpha = hcj;
    else alpha = NoImage;

    return alpha;
  }

  return (
    <div className='w-full h-[45%] overflow-hidden'>
      <Image src={getPic(props.pic)} alt="" width={1000} height={1000} className="w-full h-full object-cover bg-gradient-to-br from-green-500 to-cyan-600 group-hover:scale-110 transition-translate duration-500"></Image>
    </div>
  )
}

export default Photo
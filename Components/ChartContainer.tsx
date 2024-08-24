import { FC } from 'react'
import Chart from './Chart'
import Percentage from './Percentage'
import BoldU from './BoldU'

interface list {
    key : number,
    name : string,
    percentage : string,
}

interface props {
    title : string,
    lists : list[],
}

const ChartContainer:FC<props> = (props) => {
  return (
    <Chart>
        <div className='md:text-lg lg:text-xl md:px-8 py-2 '>
            <div className='m-2'>
                <BoldU>{props.title}</BoldU>
            </div> 
            {props.lists.map( (item) => {
                return(
                    <Percentage item={item} />
                )
            })}
        </div>
    </Chart>
  )
}

export default ChartContainer
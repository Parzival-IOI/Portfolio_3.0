import { FC } from 'react'
import Chart from './Chart'
import Percentage from './Percentage'

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
            <div className='underline underline-offset-4 decoration-2 font-bold m-2'>{props.title}</div> 
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
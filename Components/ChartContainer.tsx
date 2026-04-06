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
        <div>
            <h3 className='text-sm font-medium text-neutral-400 mb-4'>{props.title}</h3>
            {props.lists.map( (item) => {
                return(
                    <Percentage item={item} key={item.key} />
                )
            })}
        </div>
    </Chart>
  )
}

export default ChartContainer
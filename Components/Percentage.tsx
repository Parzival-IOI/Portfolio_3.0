import { FC } from 'react'

interface props {
    item : {
        key: number,
        name: string,
        percentage: string,
    }
}

const Percentage:FC<props> = (props) => {
    return (
        <div className='flex items-center gap-3 py-1.5' key={props.item.key}>
            <span className='text-sm text-neutral-400 w-32 shrink-0'>{props.item.name}</span>
            <div className='flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden'>
                <div className='h-full bg-neutral-400 rounded-full' style={{width: props.item.percentage}}></div>
            </div>
            <span className='text-xs text-neutral-500 w-10 text-right'>{props.item.percentage}</span>
        </div>
    )
}

export default Percentage
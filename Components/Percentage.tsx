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
        <>
            <div className='p-2 grid grid-cols-6 items-start gap-2' key={props.item.key}>
                <div className='col-span-4'>
                    <div className='h-4 w-full mt-1 bg-green-800 rounded-md'>
                        <div className={`${'h-full bg-green-600/80 rounded-md'}`} style={{width: props.item.percentage}}></div>
                    </div>
                    <div className='text-center'>{props.item.percentage}</div>
                </div>
                <span className='col-span-2'>{props.item.name}</span>
            </div>
        </>
    )
}

export default Percentage
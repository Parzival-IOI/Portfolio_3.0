export default function Column (props:{content: string, title: boolean}) {
  return (
    <div className={` p-1 text-center ${props.title ? 'bg-[#23427b]' : 'bg-[#0f1b31]'}`} >{props.content}</div>
  )
}
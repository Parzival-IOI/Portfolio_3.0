export default function Column (props:{content: string, title: boolean}) {
  return (
    <div className={`p-2 text-center text-xs ${props.title ? 'bg-neutral-800 text-neutral-300 font-medium' : 'bg-neutral-900/50 text-neutral-400'}`}>{props.content}</div>
  )
}
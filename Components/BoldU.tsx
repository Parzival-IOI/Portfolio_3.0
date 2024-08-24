
const BoldU = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <strong className='underline underline-offset-4 decoration-2'>
      {children}
    </strong>
  )
}

export default BoldU
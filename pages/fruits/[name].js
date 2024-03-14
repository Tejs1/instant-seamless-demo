import Image from 'next/image'
import Nutrition from '../../components/nutrition'
import { middleware } from '../../utils/middleware'
// Codelab: Add the Shared Element Transitions API.
// import { usePageTransition } from '../../utils/use-page-transition'

const Item = ({ data }) => {
  const { name, image, amountPer, nutrition } = data
  // Codelab: Add the Shared Element Transitions API.
  const ref = null
  // const ref = usePageTransition()

  return (
    <div className={'flex flex-col items-center justify-center py-4 px-4 sm:flex-row'} ref={ref}>
      <div className='flex flex-col items-center sm:w-2/4'>
        <Image
          className='object-cover border-gray-100 border-2 rounded-full shared-element'
          src={image}
          width='240'
          height='240'
          alt={`picture of ${name}`}
        />
        <h1 className='text-4xl font-bold mt-4'>{name}</h1>
      </div>

      <div className='sm:w-2/4 w-full'>
        <Nutrition amountPer={amountPer} nutrition={nutrition} />
      </div>
    </div>
  )
}

export const getServerSideProps = middleware(async (ctx) => {
  const { req, query } = ctx
  const { name } = query
  const apiResponse = await fetch(`${req.hostWithProtocol}/api/fruits/${name}`)
  const data = await apiResponse.json()
  return {
    props: {
      data,
    },
  }
})

export default Item

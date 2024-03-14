import Image from 'next/image'
import Nutrition from '../../components/nutrition'
import { middleware } from '../../utils/middleware'

const Item = ({ data }) => {
  const { name, image, amountPer, nutrition } = data
  return (
    <div className={'flex flex-col items-center justify-center py-4 px-4 sm:flex-row'}>
      <div className='flex flex-col items-center sm:w-2/4'>
        <Image
          className='object-cover border-gray-100 border-2 rounded-full '
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
  const { req, res, query } = ctx
  // Codelab: Modify the cache-control header.
  // res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')

  const { name } = query
  const apiResponse = await fetch(`${req.hostWithProtocol}/api/vegetables/${name}`)
  const data = await apiResponse.json()
  return {
    props: {
      data,
    },
  }
})

export default Item

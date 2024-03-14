import ListItem from '../../components/list-item'
import { middleware } from '../../utils/middleware'

const Vegetables = ({ data }) => {
  return (
    <div className={'flex-col items-center justify-center py-4 px-4'}>
      <h1 className='my-4 text-xl'>List of vegetables</h1>

      <ul className='divide-y-2 divide-gray-100'>
        {data.items.map((item) => (
          <ListItem
            key={`v-${item.name}`}
            item={item}
            clientSideRouting={false}
            href={`/vegetables/${item.name}`}
          />
        ))}
      </ul>
    </div>
  )
}

export const getServerSideProps = middleware(async (ctx) => {
  const { req, res } = ctx
  // Codelab: Modify the cache-control header.
  // res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')

  const apiResponse = await fetch(`${req.hostWithProtocol}/api/vegetables`)
  const data = await apiResponse.json()

  return {
    props: {
      data,
    },
  }
})

export default Vegetables

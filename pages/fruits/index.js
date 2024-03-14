import ListItem from '../../components/list-item'
import { middleware } from '../../utils/middleware'

const Fruits = ({ data }) => {
  return (
    <div className={'flex-col items-center justify-center py-4 px-4'}>
      <h1 className='my-4 text-xl'>List of fruits</h1>

      <ul className='divide-y-2 divide-gray-100'>
        {data.items.map((item) => (
          <ListItem
            key={`f-${item.name}`}
            item={item}
            clientSideRouting={true}
            href={`/fruits/${item.name}`}
          />
        ))}
      </ul>
    </div>
  )
}

export const getServerSideProps = middleware(async (ctx) => {
  const { req } = ctx
  const apiResponse = await fetch(`${req.hostWithProtocol}/api/fruits`)
  const data = await apiResponse.json()
  return {
    props: {
      data,
    },
  }
})

export default Fruits

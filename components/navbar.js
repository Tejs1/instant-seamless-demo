import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <nav className='bg-white sticky top-0 flex sm:justify-center space-x-4 p-4 shadow z-10'>
        {[
          ['Home', '/'],
          ['Vegetables', '/vegetables'],
        ].map(([title, url]) => (
          <a
            href={url}
            key={title}
            className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'
          >
            {title}
          </a>
        ))}
        <Link href='/fruits'>
          <a className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>
            Fruits
          </a>
        </Link>
      </nav>
    </>
  )
}

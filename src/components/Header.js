import Link from 'next/link'

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fi Portfolio</h1>
        <nav>
          <ul className="flex">
            <li className="ml-4 hover:text-gray-300">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="ml-4 hover:text-gray-300">
              <Link href="/">
                About
              </Link>
            </li>
            <li className="ml-4 hover:text-gray-300">
              <Link href="/">
                Project
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

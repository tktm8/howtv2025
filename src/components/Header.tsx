import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/"
              className="text-xl font-bold text-gray-900 mr-8"
            >
              Howtv
            </Link>
            <div className="flex space-x-8">
            <Link 
              href="/codescoring"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              コードスコアリング
            </Link>
            <Link 
              href="/matching"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              マッチング
            </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

export default function BreadCrumbs()
{
    return (<>
     <nav className="flex">
            <ol role="list" className="flex items-center space-x-0.5">
                <li>
                    <div className="-m-1">
                        <a href="#" className="p-1 text-sm font-medium text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700"> Home </a>
                    </div>
                </li>

                <li>
                    <div className="flex items-center">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                        <div className="-m-1">
                            <a href="#" className="p-1 ml-0.5 text-sm font-medium text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700"> Products </a>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="flex items-center">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                        <div className="-m-1">
                            <a href="#" className="p-1 ml-0.5 text-sm font-medium text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700" aria-current="page"> CarityUI </a>
                        </div>
                    </div>
                </li>
            </ol>
        </nav>
    </>);
}

import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'





function ProductTable(props) {

    return (

        <div className="overflow-x-auto w-full p-4 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 dark:bg-gray-800 ">
            <div className="sm:flex sm:items-center sm:justify-between pb-4 bg-white dark:bg-gray-900">

                {/* Select Box */}
                <div><h1 className="text-2xl mb-2 sm:mb-0 font-semibold">Product Sell</h1></div>

                <div className='flex space-x-4'>

                    <div>
                        <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Month</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Quarterly</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Annually</a>
                                </li>
                            </ul>

                        </div>

                        <label for="table-search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />


                        </div>
                    </div>

                    <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Action button</span>
                        Quarterly
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>


                </div>

            </div>
            <table className="w-full text-sm table-auto text-center text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-400 border-b dark:bg-gray-800 dark:border-gray-700  ">
                    <tr>

                        {
                            props.head.map((element, i) => {

                                if (i == 0) {
                                    return (<td scope="col" className="text-left px-6 py-3">
                                        {element}
                                    </td>
                                    )
                                }

                                else {
                                    return (<td scope="col" className="px-6 py-3">
                                        {element}
                                    </td>
                                    )
                                }

                            })
                        }


                    </tr>
                </thead>
                <tbody>

                    {
                        props.rows.map(element => {
                            return (
                                <tr key={crypto.randomUUID()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                    <tr scope="row" colSpan={3} className="flex text-left w-64 lg:w-full items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">

                                        <img className="w-16 object-cover h-10 rounded" src={element.img} alt="Jese image" />
                                        <div className="pl-3">
                                            <div className="text-base font-semibold">{element.title}</div>
                                            <div className="font-normal w-full text-gray-400">{element.description}</div>
                                        </div>

                                    </tr>
                                    <td className="px-6 py-4">
                                        {element.stock}
                                    </td>
                                    <td className="px-6 py-4">
                                        {element.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {element.sales}
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                        <th scope="row" colSpan={3} className="flex w-full items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img className="w-16 object-cover h-10 rounded" src="https://wallpapers-clan.com/wp-content/uploads/2023/01/aesthetic-anime-girl-pfp-15.jpg" alt="Jese image" />
                            <div className="pl-3">
                                <div className="text-base font-semibold">Neil Sims</div>
                                <div className="font-normal text-gray-400">neil.sims@flowbite.com</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            React Developer
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                        </td>
                    </tr>
                    <tr className="col-span-2 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img className="w-16 object-cover h-10 rounded" src="https://wallpapers-clan.com/wp-content/uploads/2023/01/aesthetic-anime-girl-pfp-15.jpg" alt="Jese image" />
                            <div className="pl-3">
                                <div className="text-base font-semibold">Bonnie Green</div>
                                <div className="font-normal text-gray-400">bonnie@flowbite.com</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            Designer
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img className="w-16 object-cover h-10 rounded" src="https://wallpapers-clan.com/wp-content/uploads/2023/01/aesthetic-anime-girl-pfp-15.jpg" alt="Jese image" />
                            <div className="pl-3">
                                <div className="text-base font-semibold">Jese Leos</div>
                                <div className="font-normal text-gray-400">jese@flowbite.com</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            Vue JS Developer
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img className="w-16 object-cover h-10 rounded" src="https://wallpapers-clan.com/wp-content/uploads/2023/01/aesthetic-anime-girl-pfp-15.jpg" alt="Jese image" />
                            <div className="pl-3">
                                <div className="text-base font-semibold">Thomas Lean</div>
                                <div className="font-normal text-gray-400">thomes@flowbite.com</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            UI/UX Engineer
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <img className="w-16 object-cover h-10 rounded" src="https://wallpapers-clan.com/wp-content/uploads/2023/01/aesthetic-anime-girl-pfp-15.jpg" alt="Jese image" />
                            <div className="pl-3">
                                <div className="text-base font-semibold">Leslie Livingston</div>
                                <d  iv className="font-normal text-gray-400">leslie@flowbite.com</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            SEO Specialist
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>

    )

}



export default ProductTable

import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'





function Card(props) {
    // {
    //     bgColor,
    //     smallHeading,
    //     heading,
    //     caption,
    //     icon,
    // }
    return (


        <a href="#" className="flex flex-col p-4 w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            {/* <img className="object-cover rounded-full h-28 " src="https://wallpapers-clan.com/wp-content/uploads/2023/01/aesthetic-anime-girl-pfp-15.jpg" alt="" /> */}
            <div className={'flex text-center justify-center items-center rounded-full p-3 bg-gradient-to-t ' + props.from + ' ' + props.to}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 lg:w-14 lg:h-14"> <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg>


            </div>
            <div className="flex flex-col items-center text-center md:text-left md:items-start p-1 justify-between leading-normal">
                <p className="font-normal text-xs text-gray-400">{props.smallHeading}</p>

                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.heading}</h5>


                <p className="flex items-center font-bold text-green-400 lg:text-xs text-xs  dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-3 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />

                    </svg>
                    {/* <div className="content" dangerouslySetInnerHTML={{__html: props.caption}}></div> */}
                    {props.captionNum}  <span className='font-normal text-black'> &nbsp; {props.captionText}</span>
                </p>
            </div>
        </a>


    )

}



export default Card
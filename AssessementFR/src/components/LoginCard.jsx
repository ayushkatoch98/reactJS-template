
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'





function LoginCard(props) {

    return (


        <a href="#" className="flex flex-row p-4 w-full items-center bg-white border border-gray-200 rounded-lg shadow max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            {/* <img className="object-cover rounded-full h-28 " src="https://wallpapers-clan.com/wp-content/uploads/2023/01/aesthetic-anime-girl-pfp-15.jpg" alt="" /> */}
            
            <img class="object-cover rounded-full h-10 w-10" src={props.img} alt=""/>
            <div className="flex flex-col p-1 justify-between leading-normal">

                <h6 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {props.name}</h6>
                <p className="font-normal text-xs text-gray-400">{props.email}</p>
                
            </div>
        </a>


    )

}



export default LoginCard
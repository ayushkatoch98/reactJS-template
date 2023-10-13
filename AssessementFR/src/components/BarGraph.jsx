
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../App.css'




ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
// TO REDUCE COMPLEXITY, THE GRAPHS ARE STATIC
// REGARDLESS, ITS PRETTY EASY TO MAKE IT DYNAMIC 
// USING PROPS
function BarGraph() {

    
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40],
            borderRadius: 30,
            borderSkipped: false,
            backgroundColor: [
                '#f1eefd',
                '#f1eefd',
                '#f1eefd',
                '#5634ff',
                '#f1eefd',
                '#f1eefd',
                '#f1eefd',
                '#f1eefd',
                '#f1eefd',
                '#f1eefd',
                '#f1eefd',
            ],
            borderColor: 'transparent',
            borderWidth: 0,
        }]
    };

    const options = {
            responsive: true,
            maintainAspectRatio: false, // Disable aspect ratio constraints

            scales: {
                y: {
                    display: false,
                },
                x: {
                    grid: {
                        display: false,

                        drawBorder: false //<- set this
                    }
                }
            },
            plugins: {
                legend: {
                    display: false, // Hide legend
                }
            }
        }

    return (

        <div className="bg-white overflow-x-auto  border w-full p-4  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center p-4">
                <div>
                    <a href="#">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Overview</h5>
                    </a>
                    <p className="font-normal text-gray-400 dark:text-gray-400">Monthly Earning</p>
                </div>
                <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="p-4 inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span className="sr-only">Action button</span>
                    Quarterly
                    <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>
            </div>

            <div className='p-4 h-64  w-full overflow-x-auto '>
               
                
                <Bar className='w-full' options={options} data={data} />


            </div>

        </div>



    )

}



export default BarGraph
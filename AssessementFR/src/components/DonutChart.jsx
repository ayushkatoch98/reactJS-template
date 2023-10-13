
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

import {Chart, ArcElement} from 'chart.js'


import { Doughnut } from "react-chartjs-2";

import { Bar } from 'react-chartjs-2';
import '../App.css'


Chart.register(ArcElement);
// TO REDUCE COMPLEXITY, THE GRAPHS ARE STATIC
// REGARDLESS, ITS PRETTY EASY TO MAKE IT DYNAMIC 
// USING PROPS
function DonutChart() {


    const data = {
        labels: ["Jan", "Feb", "Mar"],

        datasets: [{
            label: 'My First Dataset',
            data: [30, 50, 100],
            // borderRadius: 30,
            borderSkipped: false,
            backgroundColor: [
                '#e2408e',
                '#5634ff',
                '#f1effb',
        
            ],
            borderColor: 'transparent',
            borderWidth: 0,
            cutout: "70%"
        }]
    };

    const options = {
        responsive: true,
        // maintainAspectRatio: false, // Disable aspect ratio constraints

        scales: {
            y: {
                display: false,
            },
            x: {
                display: false,
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


    const plugins = [{
        beforeDraw: function(chart) {
        var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
            ctx.restore();
            var fontSize = (height / 120).toFixed(2);
            ctx.font = " bold " + fontSize + "em sans-serif";
        
            ctx.textBaseline = "top";
            
            var text = "65%",
            
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 3;
            ctx.fillText(text, textX, textY);
            fontSize = (height / 200).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            text = "Total New"
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 3;
            ctx.fillText(text, textX, textY + 30);
            text = "Customers"
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            ctx.fillText(text, textX, textY + 50);
            ctx.save();
        } 
    }]



    return (

        <div className="bg-white  border w-full p-4  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4">
                <div>
                    <a href="#">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Customers</h5>
                    </a>
                    <p className="font-normal text-gray-400 dark:text-gray-400 ">Customers that buy products</p>
                </div>
               
            </div>

            <div className='p-4 h-64 flex justify-center items-center  '>


                <Doughnut
                className='w-full'
                    type="doughnut"
                    data={data}
                    options={options}
                    plugins={plugins}
                />


            </div>

        </div>



    )

}



export default DonutChart
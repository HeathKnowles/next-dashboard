"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBell } from 'react-icons/fa';
import { Line, Bar } from 'react-chartjs-2'; // Example for Chart.js
import 'chart.js/auto'; 

export default function Home() {
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56],
        borderColor: '#4B9CD3', 
        backgroundColor: 'rgba(75, 192, 192, 0.2)', 
      },
    ],
  };

  const barChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue',
        data: [4000, 4500, 3000, 5000],
        backgroundColor: '#A4A4FF', // Soft Purple
        borderColor: '#6B4F8C', // Darker Purple
      },
    ],
  };

  return (
    <div className='overflow-clip'>
      <header className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 ease-in'>
        <nav className='flex justify-between items-center p-4'>
          <div>
            <Image 
              src='https://avatar.iran.liara.run/public/32' 
              alt='profile-image' 
              width={80} 
              height={80}
              className='w-14 rounded-full'
            />
          </div>
          <div>
            <ul className='flex items-center justify-between gap-6'>
              <li>
                <Link href='#' className='text-white hover:text-cyan-300 transition-colors duration-200'>
                  Product
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white hover:text-cyan-300 transition-colors duration-200'>
                  Solutions
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white hover:text-cyan-300 transition-colors duration-200'>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white hover:text-cyan-300 transition-colors duration-200'>
                  Docs
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white hover:text-cyan-300 transition-colors duration-200'>
                  Customers
                </Link>
              </li>
              <li>
                <Link href='#' className='text-white hover:text-cyan-300 transition-colors duration-200'>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex items-center'>
            <FaBell className='text-white text-2xl mr-4 cursor-pointer hover:text-cyan-300 transition-colors duration-200' />
            <button className='bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-md px-4 py-2 hover:from-blue-700 hover:to-blue-500 transition-colors duration-200'>
              Sign in
            </button>
          </div>
        </nav>
      </header>
      <main className='bg-gray-50 h-screen p-6'>
        <div className='mb-6'>
          <h1 className='text-3xl font-bold text-gray-800'>Dashboard</h1>
          <p className='mt-2 text-gray-600'>Monitor your key metrics and KPIs here.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-white p-4 rounded-lg shadow-md border border-gray-200'>
            <h2 className='text-lg font-semibold text-gray-700'>Total Sales</h2>
            <p className='text-2xl font-bold text-gray-800'>$12,345</p>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-md border border-gray-200'>
            <h2 className='text-lg font-semibold text-gray-700'>Monthly Revenue</h2>
            <p className='text-2xl font-bold text-gray-800'>$4,567</p>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-md border border-gray-200'>
            <h2 className='text-lg font-semibold text-gray-700'>Sales Trend</h2>
            <Line data={lineChartData} />
          </div>
          <div className='bg-white p-4 rounded-lg shadow-md border border-gray-200'>
            <h2 className='text-lg font-semibold text-gray-700'>Quarterly Revenue</h2>
            <Bar data={barChartData} />
          </div>
        </div>
        <div className='mt-6'>
          <div className='flex items-center mb-4'>
            <label htmlFor='filter' className='mr-2 text-gray-700'>Filter:</label>
            <select id='filter' className='p-2 border rounded bg-white text-gray-800'>
              <option value='all'>All</option>
              <option value='sales'>Sales</option>
              <option value='revenue'>Revenue</option>
            </select>
          </div>
          <div className='bg-white p-4 rounded-lg shadow-md border border-gray-200'>
            <h2 className='text-lg font-semibold text-gray-700'>Detailed Data</h2>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-100'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Metric</th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Value</th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap text-gray-700'>Sales</td>
                  <td className='px-6 py-4 whitespace-nowrap text-gray-800'>$12,345</td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap text-gray-700'>Revenue</td>
                  <td className='px-6 py-4 whitespace-nowrap text-gray-800'>$4,567</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

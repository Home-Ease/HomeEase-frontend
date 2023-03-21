import { Card } from 'grommet'
import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import MediaUpload from '../components/MediaUpload'

const SellProperty = () => {

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <form className="w-1/3 mt-6 ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label style={{ fontSize: "10px" }} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                House Number
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="123">
                            </input>
                        </div>
                        <div className="w-full px-3 mt-6">
                            <label style={{ fontSize: "10px" }} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                street Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder='main st'>
                            </input>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label style={{ fontSize: "10px" }} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                City
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
                            </input>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label style={{ fontSize: "10px" }} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                State
                            </label>
                            <div className="relative">
                                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option>AL</option>
                                    <option>AK</option>
                                    <option>AZ</option>
                                    <option>AR</option>
                                    <option>CA</option>
                                    <option>CO</option>
                                    <option>CT</option>
                                    <option>DE</option>
                                    <option>DC</option>
                                    <option>FL</option>
                                    <option>GA</option>
                                    <option>HI</option>
                                    <option>ID</option>
                                    <option>IL</option>
                                    <option>IN</option>
                                    <option>IA</option>
                                    <option>KS</option>
                                    <option>KY</option>
                                    <option>LA</option>
                                    <option>ME</option>
                                    <option>MD</option>
                                    <option>MA</option>
                                    <option>MI</option>
                                    <option>MN	</option>
                                    <option>MS</option>
                                    <option>MO</option>
                                    <option>MT</option>
                                    <option>NH</option>
                                    <option>NJ</option>
                                    <option>NY	</option>
                                    <option>NC</option>
                                    <option>ND</option>
                                    <option>OH</option>
                                    <option>OK</option>
                                    <option>PA</option>
                                    <option>RI</option>
                                    <option> SC </option>
                                    <option>TN</option>
                                    <option>TX</option>
                                    <option>WA</option>
                                    <option>WI</option>
                                    <option>WY</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label style={{ fontSize: "10px" }} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Zip
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" placeholder="90210">
                            </input>
                        </div>
                        <div className='w-full ml-3 mb-6 md:mb-0 mt-6'>
                            <label style={{ fontSize: "12px" }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea style={{ fontSize: "1em" }} id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-36" placeholder="Write your house description here..."></textarea>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 mt-6">
                            <label style={{ fontSize: "10px" }} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Listing Price
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number">
                            </input>
                        </div>
                    </div>
                </form>
            </div>
            {<MediaUpload />}
            <div className='flex justify-center mt-8 mb-6'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <a href=""><p className='text-white'>Upload</p></a>
                </button>
            </div>
            
        </>
    )
}

export default SellProperty
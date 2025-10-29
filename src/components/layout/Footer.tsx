'use client'

import React from 'react'
import Logo from '../base/Logo'
import { useProofPopup } from './AppWrapper'

import { MdLocalPhone } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoIosPaper } from "react-icons/io";

const Footer = () => {
    const { openProofPopup } = useProofPopup()

    return (
        <footer className="bg-[#F2E7DA] border-t border-[#DBDBDB]">
            <div className="py-10 flex flex-col md:flex-row justify-between items-start max-w-[1202px] min-[1440px]:max-w-[1682px] mx-auto px-[20px] md:px-[30px] min-[1202px]:px-0">
                <div className="w-full md:w-1/2 xl:w-[60%]">
                    <Logo variant="footer" />
                </div>
                <div className="font-inter w-full md:w-1/2 xl:w-[40%] flex flex-col md:flex-row justify-between">
                    <div>
                        <h1 className="text-primary font-bold tracking-[.2em] mb-2 mt-6 md:mt-0">Company Details</h1>
                        <div className="flex items-start gap-1 mt-2">
                            <MdLocalPhone className="text-[15px] mt-0.5" />
                            <div className="flex flex-col leading-tight">
                                <h1 className="text-[15px] font-semibold">Phone Number</h1>
                                <p className="text-[15px]">0993-727-7628</p>
                                <p className="text-[15px]">0920-679-9195</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-1 mt-5">
                            <HiBuildingOffice2 className="text-[15px] mt-0.5" />
                            <div className="flex flex-col leading-tight">
                                <h1 className="text-[15px] font-semibold">Address</h1>
                                <p className="text-[15px]">
                                    Tulip Drive Corner 6th Street, Ecoland <br/>Subd. 1, Bucana, Davao City
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-1 mt-5">
                            <IoIosPaper className="text-[15px] mt-0.5" />
                            <div className="flex flex-col leading-tight">
                                <h1 className="text-[15px] font-semibold">SEC Registration No.</h1>
                                <p className="text-[15px]">2025070210546-21</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="mt-6 md:mt-0 text-primary font-bold tracking-[.2em]">Quick Links</h1>
                        <p 
                            className="text-[15px] mt-2 cursor-pointer hover:text-primary transition-all duration-300 inline-block relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                            onClick={openProofPopup}
                        >
                            Proof of Legalities
                        </p>
                    </div>
                </div>
            </div>
            <div className="border-t border-primary flex justify-center items-center py-6">
                <p className="font-inter text-primary text-center text-[14px] md:text-[16px]">© 2025 Covenant Care. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
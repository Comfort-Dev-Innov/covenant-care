import React from 'react'
import Logo from '../base/Logo'

const Footer = () => {
  return (
    <footer className="bg-[#F2E7DA] border-t border-[#DBDBDB]">
        <div className="py-10 flex justify-between items-center max-w-[1202px] min-[1440px]:max-w-[1682px] mx-auto px-[10px] sm:px-[20px] md:px-[30px] min-[1202px]:px-0">
            <div className="w-1/2">
                <Logo />
            </div>
            <div className="w-1/2">
                <div>
                    
                </div>
            </div>
        </div>
        <div className="border-t border-primary flex justify-center items-center py-6">
            <p className="font-inter text-primary">© 2025 Covenant Care. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
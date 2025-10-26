import React from 'react'
import Image from 'next/image'

const Logo = () => {
    return (
        <div className="bg-background flex gap-[5px] lg:gap-[10px] items-center w-full h-[91px] rounded-bl-[80px]">
            <div className="w-[40px] sm:w-[60px] lg:w-[84px] h-auto lg:h-[91px]">
                <Image src="/assets/image/logo-icon.png" className="!w-full !h-full object-contain" alt="logo" width={84} height={91} />
            </div>
            <div className="flex flex-col font-new-renaissance">
                <p className="text-primary text-[18px] sm:text-[22px] lg:text-[27px]">Covenant Care</p>
                <p className="text-secondary mt-[-5px] text-[10px] sm:text-[12px] lg:text-[15px]">Because Every Life Deserves Love and Care</p>
            </div>
        </div>
    )
}

export default Logo
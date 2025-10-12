import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
        <div>
            <div className="w-[356px] h-[91px]">
            <Image src="/assets/image/covenant-care-logo.png" className="!w-full !h-full object-contain" alt="logo" width={356} height={91} />
            </div>
        </div>
        <div>

        </div>
    </header>
  )
}

export default Header
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outline'
  className?: string
  children: React.ReactNode
}

const Button = ({ 
  variant = 'filled', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) => {
  const baseStyles = 'font-inter font-medium text-[18px] rounded-[10px] px-[18px] py-[10px] transition-all duration-300 hover:cursor-pointer hover:scale-105 active:scale-95 hover:shadow-lg'
  
  const variantStyles = {
    filled: 'bg-primary text-white hover:bg-primary/90 shadow-md',
    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white'
  }

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button


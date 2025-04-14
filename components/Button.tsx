import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className='w-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 border border-transparent px-4 py-2 text-white font-semibold shadow-md hover:shadow-lg hover:from-green-500 hover:to-emerald-600 transition-all duration-300 ease-in-out'
    >
      {children}
    </button>
  )
}

export default Button
import React from 'react'
import { currencyFormater } from '../styles/formatting'

export default function CartItem({ name, price, quantity, onIncrease, onDecrease}) {
  return (
    <li className='flex justify-between my-[0.5rem]' >
        <p>
            {name} - {quantity} * {currencyFormater.format(price)}
        </p>
        <p className='flex gap-[1rem]'>
            <button onClick={onDecrease} className='bg-[#312c1d] text-[#ffc404] w-[1.5rem] h-[1.5rem] rounded-[50%] cursor-pointer flex justify-center items-center'>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease} className='bg-[#312c1d] text-[#ffc404] w-[1.5rem] h-[1.5rem] rounded-[50%] cursor-pointer flex justify-center items-center'>+</button>
        </p>
    </li>
  )
}

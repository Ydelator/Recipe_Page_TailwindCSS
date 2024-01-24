import React from 'react'

const Header = () => {
  return (
    <section className='border-b-2 border-Eggshell px-10 py-8 flex flex-col items-center w-[97%]'>
        <h1 className='font-Young text-3xl mb-5'>Simple Omelette Recipe</h1>
        <p className='font-Outfit text-Wenge-Brown text-base mb-10'> An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
        to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
        <div className='bg-Rose-White w-full p-6 space-y-5 rounded-md mb-10'>
            <h2 className='font-Outfit text-xl font-semibold text-Dark-Raspberry'>Preparation time</h2>
            <ul className='font-Outfit w-full list-disc list-inside space-y-2 text-Wenge-Brown'>
                <li><b>Total</b>: Approximately 10 minutes</li>
                <li><b>Preparation</b>: 5 minutes</li>
                <li><b>Cooking</b>: 5 minutes</li>
            </ul>
        </div>
        <div className='space-y-5 w-full'> 
            <h2 className='font-Young text-2xl text-Nutmeg'>Ingredients</h2>
            <ul className='font-Outfit text-Wenge-Brown list-disc list-inside space-y-2'>
                <li>2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li>Pepper, to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
        </div>
    </section>
  )
}

export default Header
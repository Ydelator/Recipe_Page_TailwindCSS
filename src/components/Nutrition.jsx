import React from 'react'

const Nutrition = () => {
  return (
    <section className='text-Wenge-Brown px-10 py-8 space-y-5 w-full'>
        <h2 className='font-Young text-2xl text-Nutmeg'>Nutrition</h2>
        <p className='font-Outfit'>The table below shows nutritional values per serving without the additional fillings.</p>
        <div className='flex border-b-2 border-Eggshell font-Outfit gap-[30%] md:gap-[40%]'>
            <p className='ml-5 w-12'>Calories</p>
            <p className='font-semibold text-Nutmeg mb-3'>277kcal</p>
        </div>
        <div className='flex border-b-2 border-Eggshell font-Outfit gap-[30%] md:gap-[40%]'>
            <p className='ml-5 w-12'>Carbs</p>
            <p className='font-semibold text-Nutmeg mb-3'>0g</p>
        </div>
        <div className='flex border-b-2 border-Eggshell font-Outfit gap-[30%] md:gap-[40%]'>
            <p className='ml-5 w-12'>Protein</p>
            <p className='font-semibold text-Nutmeg mb-3'>20g</p>
        </div>
        <div className='flex font-Outfit gap-[30%] md:gap-[40%]'>
            <p className='ml-5 w-12'>Fat</p>
            <p className='font-semibold text-Nutmeg mb-3'>22g</p>
        </div>
    </section>
  )
}

export default Nutrition
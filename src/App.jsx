import Omelette from './assets/images/image-omelette.jpeg'
import Header from './components/Header'
import Instructions from './components/Instructions'
import Nutrition from './components/Nutrition'

function App() {

  return (
    <div className='bg-Eggshell flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center md:w-[50%] md:my-[5%] bg-white md:rounded-[20px]'>
        <img src={Omelette} alt="Omelette" className='w-full overflow-hidden md:rounded-[20px] md:w-[90%] md:mt-10'/>
        <Header></Header>
        <Instructions></Instructions>
        <Nutrition></Nutrition>
      </div>
    </div>
  )
}

export default App

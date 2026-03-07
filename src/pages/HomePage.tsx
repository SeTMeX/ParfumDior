import Button from '../components/home/LandingButtons'


const HomePage =() => {
    return(
        <div className="relative h-screen w-full bg-center bg-cover flex flex-row justify-between items-center font-playfair">
            <img className = "absolute top-0 left-0 object-fill z-[-1]"src="/photos/landing-bk.jpg" alt="" fetchPriority='high'/>
            <div className='flex flex-col text-center h-100vh w-50vh px-20'>
                <span className=' font-playpen text-8xl text-gray-300 pb-2'>Products <br />
                    Luxorious</span>
                <span className='text-white'>An extraordinary concentration of aromas that combines <br /> the freshness of spices with the warmth of wood.</span>
                <div className='flex flex-row justify-center mt-8 gap-5'>
                    <Button text="BUY NOW" className="h-14 w-36" />
                    <span className='text-white py-3 text-2xl'>$420.<span className='text-gray-600'>00</span></span>
                </div>
            </div>
            <div className='flex flex-col pt-120 h-100vh w-50vh px-20 gap-2'>
                <div className='flex flex-row gap-3'><Button text='Jasmine' /><Button text='Rose' /><Button text='Vanilla' />
                </div>
                <div className='flex flex-row gap-3'><Button text='Melon' /><Button text='Amber' /></div>
            </div>
        </div>
    )
}
export default HomePage
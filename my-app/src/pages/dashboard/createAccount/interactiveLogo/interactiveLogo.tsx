
import Logo from '../../../../assets/brand/interactiveBrokersLogo.png'



const InteractiveLogo = () => {
  return (
    <div className='w-full flex gap-2 justify-normal items-center pb-6' >
    <p className='pt-2'>Trusted broker:</p>
    <div className='w-40 flex justify-center items-center'>
      <img className='content object-cover' src={Logo} />
    </div>
  </div>
  )
}

export default InteractiveLogo
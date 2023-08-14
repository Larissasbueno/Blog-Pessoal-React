import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
       <footer className="bg-cyan_700 pt-10">
        
        <div className=" mx-auto  w-full flex p-4 py-6 lg:py-8  lg:py-8 justify-center bg-cyan_950 text-white">
          
          <div className="container flex flex-col items-center py-4 ">
            <p className='text-xl font-bold '>TDAH e Eu-Superando Desafios | Copyright: </p>
            <p className='text-lg'>Redes Sociais</p>
            
            <div className='flex gap-2  '>
              <a href="https://www.linkedin.com/in/larissasbueno/" target='_blank'><LinkedinLogo size={48} weight='bold' /></a>
              <a href="https://www.instagram.com/eularibueno/" target='_blank'><InstagramLogo size={48} weight='bold' /></a>
              <a href="https://www.facebook.com/larissasbuenno/" target='_blank'><FacebookLogo size={48} weight='bold' /></a>
            </div>
          
          
          </div>
        </div>
        </footer>
      </>
  )
}

export default Footer
import React from 'react';
import homeLogo from '../../assets/home.jpg'
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';



function Home() {
  return (
    <>
      <div className="bg-white flex justify-center">
        <div className='container grid grid-cols-2 text-cyan_950'>

          <div className="flex flex-col gap-4 items-center justify-center py-4">

            <h2 className='text-5xl font-bold'>Que bom te ver por aqui!</h2>
            <p className='text-xl'>Quer dividir conosco seus pensamentos?</p>

            <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className="text-white bg-gradient-to-br from-[#083344] to-[#22d3ee] hover:bg-gradient-to-bl focus:ring-4 
          transition duration-300 ease-out focus:outline-none focus:ring-cyan-700 dark:focus:ring-cyan-700
          font-medium rounded-lg text-sm px-14 py-3 text-center mr-2 mb-2 w-1/2" >Minhas Postagens</button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt=""  />

          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;
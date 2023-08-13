import React from 'react';
import FormularioPostagem from '../formularioPostagem/FormularioPostagem';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <Popup 
      trigger={<button className="text-white bg-gradient-to-br from-[#083344] to-[#22d3ee] hover:bg-gradient-to-bl focus:ring-4 
      transition duration-300 ease-out focus:outline-none focus:ring-cyan-700 dark:focus:ring-cyan-700
      font-medium rounded-lg text-sm px-14 py-3 text-center mr-2 mb-2 w-1/2" >Criar Postagem</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;
import React from 'react'
import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}

function CardTemas({tema}: CardTemaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-cyan_700 text-white font-bold text-2xl'>Tema</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
      <div className="flex">
        <Link to={`/editarTema/${tema.id}`} className='text-white bg-gradient-to-br from-[#083344] to-[#22d3ee] hover:bg-gradient-to-b text-slate-100 bg-cyan_700 w-full flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className='text-white bg-gradient-to-br from-[#450a0a] to-[#b91c1c] hover:bg-gradient-to-bl text-slate-100 bg-red-400  w-full flex items-center justify-center py-2'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
    
  )
}

export default CardTemas
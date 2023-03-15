import style from './page.module.css'
import { FotoPerfil } from '@/components/Cv/FotoPerfil'
import { Banner } from '@/components/Cv/Banner'
import { Sobre } from '@/components/Cv/Sobre'
import { Experiencia } from '@/components/Cv/Experiencia'
import { Educacao } from '@/components/Cv/Educacao'
import { Indicacoes } from '@/components/Cv/Indicacoes'
import { Tecnologias } from '@/components/Cv/Tecnologias'

export default function Home() {
  return (

    <main>
      <div className={`${style.cabecalho}`}>
        <Banner />
        <div className='container'>
          <FotoPerfil />
        </div>
      </div>

      <div className={`${style.infoCabecalho} container`}>
        <div className='d-flex align-items-center'>
          <h2>Michael Reis</h2>
          <p className={`${style.status} ml-5`}></p>
        </div>
        <p>Full Stack Developer | PHP | Node | Javascript | React JS | SQL</p>
      </div>
      
      <Sobre />
      <Experiencia />
      <Tecnologias />
      <Educacao />
      <Indicacoes />
    </main>

  )
}

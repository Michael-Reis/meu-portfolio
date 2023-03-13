import style from './style.module.css'
import Image from 'next/image'
import Leticia from './Leticia.jpg'
import Laudir from './Laudir.jpg'

export const Indicacoes = () => {
    return (
        <div className={`${style.cardInfo} container position-relative mt-5`}>
            <h5>INDICAÇÕES</h5>

            <div className={`${style.containerIndicacao} d-flex`}>
                <div className={`${style.espacamentoDireita} position-relative mt-5`}>
                    <div className={style.cardIndicacao}>
                        <div className='d-flex justify-content-center'>
                            <Image src={Leticia} alt="Leticia Midori Loureiro" />
                        </div>
                        <div className='mt-3'>
                            <h3 className='text-center mb-4'>Letícia Fokuda</h3>
                            <p>Michael é um profissional incrível, tive o prazer de tê-lo como meu funcionário, dinâmico, pró-ativo, estudioso, sempre buscando evoluir e agregar, trabalha super bem em equipe e faz do ambiente de trabalho gostoso de se conviver!</p>
                        </div>
                    </div>
                </div>
                <div className={`${style.espacamentoDireita} position-relative mt-5  ml-2`}>
                    <div className={style.cardIndicacao}>
                        <div className='d-flex justify-content-center'>
                            <Image src={Laudir} alt="Laudir"/>
                        </div>
                        <div className='mt-3'>
                            <h3 className='text-center mb-4'>Laudir Winck</h3>
                            <p>Michael foi muito ético ao encontrar uma falha de segurança existente em nosso site e nos reportar o erro. Isso nos possibilitou corrigir o problema e evitar que essa falha pudesse ser explorada de forma maliciosa. Obrigado Michael, sucesso em sua carreira!</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
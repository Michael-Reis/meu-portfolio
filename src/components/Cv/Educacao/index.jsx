import style from './style.module.css'
import Anglo from './anglo.jpg'
import Uninove from './uninove.jpg'
import Image from 'next/image'

export const Educacao = () => {
    return (
        <div className={`${style.cardInfo} container position-relative mt-5`}>
            <h5>EDUCAÇÃO</h5>
            <div>
                <div className={`${style.separatorEducacao} d-flex flex-column align-items-start`}>
                    <div className={`d-flex position-relative align-items-center w-100`}>
                        <div className={style.boxImage}>
                            <Image src={Uninove} alt="logo-orit" />
                        </div>
                        <div className={style.dadosEnsino}>
                            <p>UNINOVE</p>
                            <p>Analise e desenvolvimento de sistemas</p>
                        </div>
                    </div>
                </div>
                <div className={`${style.separatorEducacao} d-flex flex-column align-items-start`}>
                    <div className={`d-flex position-relative align-items-center w-100`}>
                        <div className={style.boxImage}>
                            <Image src={Anglo} alt="logo-orit" />
                        </div>
                        <div className={style.dadosEnsino}>
                            <p>ANGLO</p>
                            <p>Pacote office avançado</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
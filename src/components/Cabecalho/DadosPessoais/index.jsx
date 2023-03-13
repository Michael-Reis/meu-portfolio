import style from './style.module.css'

export const DadosPessoais = () => {
    return (
        <div className={style.dadosPessoais}>
            <div>
                <p>24</p>
                <p>Age</p>
            </div>
            <div>
                <p>06 years</p>
                <p>Experience</p>
            </div>
            <div>
                <p>Developer</p>
                <p>Office</p>
            </div>
        </div>
    )
}
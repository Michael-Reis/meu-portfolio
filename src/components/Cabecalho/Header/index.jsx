import style from "./style.module.css"
import { DadosPessoais } from "@/components/Cabecalho/DadosPessoais"
import Menu  from "@/components/Cabecalho/Menu"
import { RedeSocial } from "@/components/Cabecalho/RedeSocial"
import { Perfil } from "@/components/Cabecalho/Perfil"
export const Header = () => {
    return (

        <div className="mb-5">
            <div>
                <div>
                    <div className={style.containerBanner}>
                        <img src="/header/banner.jpg" alt="banner de um homen programandos" />
                        <div className={style.escurecerBanner}></div>
                    </div>
                </div>
                <div className={`d-flex ${style.sessionFotoPerfil}`}>
                    <Perfil style={style}/>
                </div>
                <div className={`d-flex`}>
                    <div className={`${style.dadosHeader} ${style.infoEsquerda} d-flex justify-content-end`}>
                        <DadosPessoais />
                    </div>
                    <div className={style.dadosHeaderMeio}>
                        <div>
                            <h1>Michael Reis</h1>
                            <div className={`${style.dadosPais} d-flex align-items-center justify-content-center`}>
                                <img className={style.fotoBandeira} src="/header/icon-brasil.png" />
                                <p>Brazilian</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.dadosHeader} ${style.caixaSocial} d-flex justify-content-start`}>
                      <RedeSocial/>
                    </div>
                </div>
                <div className={`d-flex align-items-center justify-content-center`}>
                    <Menu/>
                </div>
            </div>
        </div>

    )
}
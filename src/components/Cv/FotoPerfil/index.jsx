import style from "./style.module.css";
import Perfil3 from "./perfil-cv3.png"
import Selo2 from "./selo-verificado2.png"
import Image from 'next/image'

export const FotoPerfil = (url) => {
    return (
        <div className={`${style.cabecalho} position-relative`}>
            <div className={`${style.circularImagem} `}>
                <Image src={Perfil3} alt="foto de perfil 3"/>
            </div>
            <Image className={`${style.selo}`} alt="selo" src={Selo2} />
        </div>
    );
}
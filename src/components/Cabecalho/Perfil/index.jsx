
export const Perfil = ({ style }) => {
    return (
        <>
            <div className={`${style.dadosHeader} d-flex justify-content-end`}>
                <button className={style.btnContato}>Contact</button>
            </div>
            <div className={style.dadosHeaderMeio}>
                <div className={`${style.circularImagemCorFundo} position-relative`}>
                    <div className={`${style.circularImagem} `}>
                        <img src="/header/perfil.jpg" alt="minha foto de perfil" />
                    </div>
                    <div className={style.status}>
                        <img src="/bola.png" className={style.rodaroda} style={{ width: "30px" }} />
                    </div>
                </div>
            </div>
            <div className={`${style.dadosHeader} d-flex justify-content-start`}>
                <button className={style.btnInscrever}>Subscribe</button>
            </div>
        </>
    )
}
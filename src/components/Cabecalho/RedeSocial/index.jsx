import style from "./style.module.css"
import Image from "next/image"
export const RedeSocial = () => {
    return (
        <>
            <div className={style.boxSocial}>
                <img src="/instagram.svg" className={style.iconeSocial} />
            </div>
            <div className={style.boxSocial}>
                <img src="/facebook-f.svg" className={style.iconeSocial} />
            </div>
            <div className={style.boxSocial}>
                <img src="/twitter.svg" className={style.iconeSocial} />
            </div>
            <div className={style.boxSocial}>
                <img src="/linkedin-in.svg" className={style.iconeSocial} />
            </div>
            <div className={style.boxSocial}>
                <img src="/paper-plane-regular.svg" className={style.iconeSocial} />
            </div>
        </>
    )
}
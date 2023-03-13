
import style from './style.module.css'
import Link from 'next/link';

export default function Menu() {

    return (
        <div className={`${style.boxGeralMenu} mt-5 d-flex`}>
            <Link href="/">
                <div className={`${style.boxMenu}`}>
                    <img src="/user-regular.svg" className={style.iconeMenu} />
                </div>
            </Link>
            <Link href="/filmes">
                <div className={`${style.boxMenu}`}>
                    <img src="/clapperboard-solid.svg" className={style.iconeMenu} />
                </div>
            </Link>
        </div>

    )
}
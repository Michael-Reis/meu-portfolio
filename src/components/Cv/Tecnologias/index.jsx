"use client"

import Image from 'next/image';
import ReactLogo from './react.png';
import style from './style.module.css';
import csharp from './c.png';
import php from './PHP.png';
import mysql from './Mysql.png';
import css from './css.png';
import html from './html.png';
import js from './js.png';
import node from './node.png';
import jquery from './jquery.png';
import bootstrap from './bootstrap.png';
import next from './next.png';
import sql from './sql.png';
import firebird from './firebird.png';
import github from './github.png';
import git from './git.png';
import vscode from './vscode.png';
import { useRef, useState } from 'react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Tecnologias = () => {

    const [marcas, setMarcas] = useState([html, css, js, bootstrap, ReactLogo, next, node, mysql, sql, php, csharp, firebird, git, github, jquery, vscode]);
    const meusitems = useRef(null)

    const RolarEsquerda = (event) => {
        meusitems.current.scrollBy(-180, 0)
    }

    const RolarDireita = (event) => {
        meusitems.current.scrollBy(180, 0)
    }

    return (
        <div className="container mt-5 p-0">
            <div className="items-wrapper position-relative">
                <div className={style.items} ref={meusitems}>
                    {
                        marcas.map((marca, index) => {
                            return (
                                <div key={index} className={style.item} >
                                    <Image src={marca} alt="logo" loading="eager" height={60} width={60} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className={style.rolarDireita} onClick={RolarDireita}></div>
                <div className={style.rolarEsquerda} onClick={RolarEsquerda}></div>
            </div>

        </div >
    );

}
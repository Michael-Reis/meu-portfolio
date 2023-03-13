"use client"

import style from "./style.module.css"
import Image from "next/image"
import Orit from "./logo-orit.png"
import Exercito from "./logo-exercito.png"
import Ge from "./logo-ge.jpg"
import Bbt from "./bbtbrasil.jpg"
import { useState } from "react"

export const Experiencia = () => {

    const [experiencia, setExperiencia] = useState({
        orit: false,
        bbt: false,
        eb: false,
        ge: false
    })

    return (
        <div className={`${style.cardInfo} container position-relative mt-5`}>
            <h5>EXPERIENCE</h5>
            <div>
                <div className={`${style.separatorExperience} d-flex flex-column align-items-start`}>
                    <input type="checkbox" className="d-none" name="orit" id={style.experienceorit}
                        onChange={(e) => {
                            const exp = { ...experiencia }
                            exp.orit = e.target.checked
                            setExperiencia(exp)
                        }}
                    />

                    <div className={`d-flex position-relative align-items-center w-100`}>
                        <div className={style.boxImage}>
                            <Image src={Orit} alt="logo-orit" />
                        </div>
                        <div className={style.dadosEmpresa}>
                            <p>ORIT ARTIGOS DE LUXO LTDA</p>
                            <p>Tempo integral - 3 a 2 m</p>
                        </div>
                        <div className={style.exibirMaisOrit}>
                            <label htmlFor={style.experienceorit} className="w-100 h-100 d-flex justify-content-end align-items-center">
                                <div dangerouslySetInnerHTML={{ __html: experiencia.orit === false ? '&#x25BC;' : '&#x25B2;' }}></div>
                            </label>

                        </div>
                    </div>

                    <div>
                        <div className={style.timeline}>
                            <div className={style.outer}>
                                <div className={style.card}>
                                    <div className={style.info}>
                                        <h3 className={style.title}>Gerente de tecnologia</h3>
                                        <span>fev de 2023 - o momento</span>
                                        <p> Lidero uma equipe de profissionais de tecnologia para garantir que as soluções tecnológicas da empresa atendam às necessidades de negócios e alinhem-se à estratégia da empresa. Com ampla experiência em desenvolvimento de software, arquitetura de sistemas e gerenciamento de projetos de tecnologia, sou capaz de identificar oportunidades para melhorar processos e implementar soluções eficazes para aumentar a eficiência e produtividade da empresa. Também tenho habilidades interpessoais para trabalhar em equipe, comunicar e negociar com stakeholders de diferentes áreas. </p>
                                    </div>
                                </div>
                                <div className={style.card}>
                                    <div className={style.info}>
                                        <h3 className={style.title}>Coordenador de tecnologia</h3>
                                        <span>ago de 2022 - fev de 2023 · 6 meses</span>
                                        <p>Atúo na análise de requisitos, arquitetura dos sistemas a serem desenvolvidos.
                                            Desenvolvo e asseguro que as aplicações construídas sigam os padrões de projetos (Design Patterns) e aos padrões de seguranças constituídos pela OWASP.
                                            <br /><br />
                                            Tecnologias utilizadas: PHP, Node JS, Javascript, React JS, Jquery, C#, MySQL, SQL, Firebird, HTML, CSS, Bootstrap
                                        </p>
                                    </div>
                                </div>
                                <div className={style.card}>
                                    <div className={style.info}>
                                        <h3 className={style.title}>Desenvolvedor full stack pleno</h3>
                                        <span>nov de 2021 - ago de 2022 · 10 meses</span>
                                        <p>Experiência em melhorar processos empresariais com soluções tecnológicas. Participei de diversos projetos, incluindo desenvolvimento de sistemas internos, criação de relatórios utilizando SQL Server e MySQL, automação de processos com APIs, construção de um E-commerce e site de compras, implementação de um chatbot com IA NLP para melhorar o atendimento ao cliente e construção de um Data Warehouse com integrações de APIs, incluindo Facebook Marketing, TrayCorp, RDStation, E-notas e Zenvia.</p>
                                    </div>
                                </div>
                                <div className={style.card}>
                                    <div className={style.info}>
                                        <h3 className={style.title}>Desenvolvedor full stack júnior</h3>
                                        <span>mar de 2021 - nov de 2021 · 9 meses</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                    </div>
                                </div>
                                <div className={style.card}>
                                    <div className={style.info}>
                                        <h3 className={style.title}>Assistente de desenvolvimento de software</h3>
                                        <span>jan de 2020 - fev de 2021 · 1 ano 2 meses</span>
                                        <p>Levantamento de requisitos e modelagem de dados com objetivo de estudar e implementar sistemas de acordo com as regras de negócio. Desenvolvimento de sistemas, integrações e relatórios SQL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`${style.separatorExperience} d-flex flex-column align-items-start`}>
                    <input type="checkbox" className="d-none" name="bbt" id={style.experiencebbt}
                        onChange={(e) => {
                            const exp = { ...experiencia }
                            exp.bbt = e.target.checked
                            setExperiencia(exp)
                        }}
                    />

                    <div className={`d-flex position-relative align-items-center w-100`}>
                        <div className={style.boxImage}>
                            <Image src={Bbt} alt="logo-bbt" />
                        </div>
                        <div className={style.dadosEmpresa}>
                            <p>BBT BRASIL</p>
                            <p>jan de 2018 - dez de 2019 · 2 anos</p>
                        </div>
                        <div className={style.exibirMaisBbt}>
                            <label htmlFor={style.experiencebbt} className="w-100 h-100 d-flex justify-content-end align-items-center">
                                <div dangerouslySetInnerHTML={{ __html: experiencia.bbt === false ? '&#x25BC;' : '&#x25B2;' }}></div>
                            </label>

                        </div>
                    </div>

                    <div>

                        <div>
                            <div className={style.timeline}>
                                <div className={style.outer}>
                                    <div className={style.card}>
                                        <div className={style.info}>
                                            <h3 className={style.title}>Suporte técnico</h3>
                                            <p> Prestação de suporte técnico de grandes sistemas de diversos seguimentos, e apoio aos colaboradores no que tange a dúvidas sistêmicas e processos.
                                                Participação no desenvolvimento e implantação de sistemas ERP, PDV, CRM e SCM.
                                                Extração de consultas na base do banco de dados SQL Server, criação de procedures, triggers e functions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`${style.separatorExperience} d-flex flex-column align-items-start`}>
                    <input type="checkbox" className="d-none" name="eb" id={style.experienceeb}
                        onChange={(e) => {
                            const exp = { ...experiencia }
                            exp.eb = e.target.checked
                            setExperiencia(exp)
                        }}
                    />

                    <div className={`d-flex position-relative align-items-center w-100`}>
                        <div className={style.boxImage}>
                            <Image src={Exercito} alt="logo-exercito" />
                        </div>
                        <div className={style.dadosEmpresa}>
                            <p>EXÉRCITO BRASILEIRO</p>
                            <p>jan de 2017 - dez de 2017 · 1 ano</p>
                        </div>
                        <div className={style.exibirMaisEb}>
                            <label htmlFor={style.experienceeb} className="w-100 h-100 d-flex justify-content-end align-items-center">
                                <div dangerouslySetInnerHTML={{ __html: experiencia.eb === false ? '&#x25BC;' : '&#x25B2;' }}></div>
                            </label>

                        </div>
                    </div>

                    <div>
                        <div className={style.timeline}>
                            <div className={style.outer}>
                                <div className={style.card}>
                                    <div className={style.info}>
                                        <h3 className={style.title}>Infraestrutura TI</h3>
                                        <p> Integrante do pelotão de comunicações, trabalhando diretamente com manutenção e instalação de redes, manutenção de hardware, operações de garantia da lei e da ordem, segurança presidencial e investigações criminais..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`${style.separatorExperience} d-flex flex-column align-items-start`}>
                    <input type="checkbox" className="d-none" name="ge" id={style.experiencege}
                        onChange={(e) => {
                            const exp = { ...experiencia }
                            exp.ge = e.target.checked
                            setExperiencia(exp)
                        }}
                    />

                    <div className={`d-flex position-relative align-items-center w-100`}>
                        <div className={style.boxImage}>
                            <Image src={Ge} alt="logo-ge" />
                        </div>
                        <div className={style.dadosEmpresa}>
                            <p>GENERAL ELETRIC</p>
                            <p>jan de 2017 - dez de 2017 · 1 ano</p>
                        </div>
                        <div className={style.exibirMaisGe}>
                            <label htmlFor={style.experiencege} className="w-100 h-100 d-flex justify-content-end align-items-center">
                                <div dangerouslySetInnerHTML={{ __html: experiencia.ge === false ? '&#x25BC;' : '&#x25B2;' }}></div>
                            </label>

                        </div>
                    </div>

                    <div>

                        <div>
                            <div className={style.timeline}>
                                <div className={style.outer}>
                                    <div className={style.card}>
                                        <div className={style.info}>
                                            <h3 className={style.title}>Gestão administrativa</h3>
                                            <p> Responsável pela projeção de custos e gastos do setor de revestimento.
                                                Planejamento e controle de produção do setor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
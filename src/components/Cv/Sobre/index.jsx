import style from "./style.module.css"


export const Sobre = () => {
    return (
        <div className={`${style.cardInfo} container position-relative mt-5`}>
            <h5>ABOUT</h5>
            <p className={style.descricao}>
                Passionate about technology and business rules. I have a degree in systems analysis and development, and I'm fascinated by reading, design, and animals. I have experience in web systems analysis and development, integrations, system diagnosis and problem resolution, website creation, and agile methodologies. I have intermediate knowledge in the following languages: PHP, Node JS, Javascript, Jquery, React JS, Next JS, C#, MySQL, SQL, Firebird, HTML, CSS, and Bootstrap.
            </p>
        </div>
    )
}
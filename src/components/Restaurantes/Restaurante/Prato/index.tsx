import { IPrato } from '@/interfaces/IPrato'
import styles from './Prato.module.scss'

interface PratoProps {
    prato: IPrato
}

const Prato = ({ prato }: PratoProps) => {
    return (
        <div className={styles.prato}>
            <div className={styles.container}>
                <div className={styles.efeito}>
                    <img
                        className={styles.imagem}
                        src={prato.imagem}
                        alt={prato.descricao}
                    />
                </div>
            </div>
            <div className={styles.conteudo}>
                <h3 className={styles.nome}>
                    {prato.nome}
                </h3>
                <div className={styles.tag}>
                    {prato.tag}
                </div>
                <p>
                    {prato.descricao}
                </p>
            </div>
        </div>
    )
}

export default Prato

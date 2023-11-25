import axios from 'axios'
import { useEffect, useState } from 'react'
import { IRestaurante } from '@/interfaces/IRestaurante'
import { IPaginacao } from '@/interfaces/IPaginacao'
import Restaurante from './Restaurante'
import styles from './Restaurantes.module.scss'

const Restaurantes = () => {
    const [listaRestaurantes, setListaRestaurantes] = useState<IRestaurante[]>([])
    const [proximaPagina, setProximaPagina] = useState<string>('')

    useEffect(() => {
        axios.get<IPaginacao<IRestaurante>>('http://localhost:8000/api/v1/restaurantes/')
            .then(resposta => {
                setListaRestaurantes(resposta.data.results)
                setProximaPagina(resposta.data.next)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    const verMais = () => {
        axios.get<IPaginacao<IRestaurante>>(proximaPagina)
            .then(resposta => {
                setListaRestaurantes([
                    ...listaRestaurantes,
                    ...resposta.data.results
                ])
                setProximaPagina(resposta.data.next)
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    return (
        <section className={styles.restaurantes}>
            <h1 className={styles.titulo}>
                Os restaurantes mais <em>bacanas</em>!
            </h1>
            {listaRestaurantes?.map(item => (
                <Restaurante key={item.id} restaurante={item} />
            ))}
            {proximaPagina && (
                <button
                    className={styles.mais}
                    onClick={() => verMais()}
                >
                    Ver Mais
                </button>
            )}
        </section>
    )
}

export default Restaurantes

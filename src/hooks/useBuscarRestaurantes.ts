import axios from 'axios'
import { useEffect, useState } from 'react'
import { IRestaurante } from '@/interfaces/IRestaurante'
import { IPaginacao } from '@/interfaces/IPaginacao'

export const useBuscarRestaurantes = () => {
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

    return {
        listaRestaurantes,
        proximaPagina,
        verMais
    }
}
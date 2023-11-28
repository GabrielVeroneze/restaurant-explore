import axios, { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'
import { IRestaurante } from '@/interfaces/IRestaurante'
import { IPaginacao } from '@/interfaces/IPaginacao'

export const useBuscarRestaurantes = () => {
    const [listaRestaurantes, setListaRestaurantes] = useState<IRestaurante[]>([])
    const [proximaPagina, setProximaPagina] = useState<string>('')
    const [paginaAnterior, setPaginaAnterior] = useState<string>('')

    const carregarDados = (url: string, opcoes: AxiosRequestConfig = {}) => {
        axios.get<IPaginacao<IRestaurante>>(url, opcoes)
            .then(resposta => {
                setListaRestaurantes(resposta.data.results)
                setProximaPagina(resposta.data.next)
                setPaginaAnterior(resposta.data.previous)
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    useEffect(() => {
        carregarDados('http://localhost:8000/api/v1/restaurantes/')
    }, [])

    return {
        listaRestaurantes,
        carregarDados,
        proximaPagina,
        paginaAnterior
    }
}
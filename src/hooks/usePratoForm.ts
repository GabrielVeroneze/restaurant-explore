import { useEffect, useState } from 'react'
import { IPratoForm } from '@/interfaces/IPratoForm'
import { IRestaurante } from '@/interfaces/IRestaurante'
import { ITag } from '@/interfaces/ITag'
import http from '@/http'

export const usePratoForm = () => {
    const [pratoForm, setPratoForm] = useState<IPratoForm>({
        nome: '',
        descricao: '',
        tag: '',
        restaurante: '',
        imagem: null
    })

    const [listaTags, setListaTags] = useState<ITag[]>([])
    const [listaRestaurantes, setListaRestaurantes] = useState<IRestaurante[]>([])

    useEffect(() => {
        http
            .get<{ tags: ITag[] }>('tags/')
            .then(resposta => {
                setListaTags(resposta.data.tags)
            })

        http
            .get<IRestaurante[]>('restaurantes/')
            .then(resposta => {
                setListaRestaurantes(resposta.data)
            })
    }, [])

    const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (evento.target.files?.length) {
            setPratoForm({
                ...pratoForm,
                imagem: evento.target.files[0]
            })
        } else {
            setPratoForm({
                ...pratoForm,
                imagem: null
            })
        }
    }

    return {
        pratoForm,
        setPratoForm,
        listaTags,
        listaRestaurantes,
        selecionarArquivo
    }
}

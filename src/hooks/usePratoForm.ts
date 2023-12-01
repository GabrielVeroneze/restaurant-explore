import { useEffect, useState } from 'react'
import { IRestaurante } from '@/interfaces/IRestaurante'
import { ITag } from '@/interfaces/ITag'
import http from '@/http'

export const usePratoForm = () => {
    const [nome, setNome] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')
    const [tag, setTag] = useState<string>('')
    const [restaurante, setRestaurante] = useState<number | string>('')
    const [imagem, setImagem] = useState<File | null>(null)

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
            setImagem(evento.target.files[0])
        } else {
            setImagem(null)
        }
    }

    return {
        nome,
        setNome,
        descricao,
        setDescricao,
        tag,
        setTag,
        restaurante,
        setRestaurante,
        imagem,
        setImagem,
        listaTags,
        listaRestaurantes,
        selecionarArquivo
    }
}

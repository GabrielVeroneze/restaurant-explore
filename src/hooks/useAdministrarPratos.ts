import { useEffect, useState } from 'react'
import { IPrato } from '@/interfaces/IPrato'
import http from '@/http'

export const useAdministrarPratos = () => {
    const [pratos, setPratos] = useState<IPrato[]>([])

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }  

    useEffect(() => {
        carregarPratos()
    }, [])

    const carregarPratos = () => {
        http
            .get<IPrato[]>('pratos/')
            .then(resposta => {
                setPratos(resposta.data)
            })
    }

    const cadastrarPrato = (prato: FormData) => {
        http
            .post('pratos/', prato, config)
            .then(() => {
                alert('Prato cadastrado com sucesso!')
            })
    }

    const editarPrato = (prato: FormData, pratoId: string) => {
        http
            .put(`pratos/${pratoId}/`, prato, config)
            .then(() => {
                alert('Prato atualizado com sucesso!')
            })
    }

    const excluirPrato = (pratoId: number) => {
        http
            .delete(`pratos/${pratoId}/`)
            .then(() => {
                setPratos(
                    pratos.filter(
                        prato => prato.id !== pratoId
                    )
                )
            })
    }

    return {
        pratos,
        cadastrarPrato,
        editarPrato,
        excluirPrato
    }
}

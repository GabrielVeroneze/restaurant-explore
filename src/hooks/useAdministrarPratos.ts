import { useEffect, useState } from 'react'
import { IPrato } from '@/interfaces/IPrato'
import http from '@/http'

export const useAdministrarPratos = () => {
    const [pratos, setPratos] = useState<IPrato[]>([])

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
            .request({
                url: 'pratos/',
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: prato
            })
            .then(() => {
                alert('Prato cadastrado com sucesso!')
            })
    }

    const editarPrato = (prato: FormData, id: string) => {
        http
            .put(`pratos/${id}/`, prato)
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

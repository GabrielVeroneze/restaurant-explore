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
        excluirPrato
    }
}

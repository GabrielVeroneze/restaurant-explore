import axios from 'axios'
import { useEffect, useState } from 'react'
import { IPrato } from '@/interfaces/IPrato'

export const useBuscarPratos = (restauranteId: number) => {
    const [pratos, setPratos] = useState<IPrato[]>([])

    useEffect(() => {
        axios.get<IPrato[]>(`http://localhost:8000/api/v1/restaurantes/${restauranteId}/pratos/`)
            .then(resposta => {
                setPratos(resposta.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [restauranteId])

    return {
        pratos
    }
}

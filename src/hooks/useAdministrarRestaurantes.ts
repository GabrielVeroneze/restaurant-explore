import axios from 'axios'
import { useEffect, useState } from 'react'
import { IRestaurante } from '@/interfaces/IRestaurante'

export const useAdministrarRestaurantes = () => {
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    useEffect(() => {
        axios
            .get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
            .then(resposta => {
                setRestaurantes(resposta.data)
            })
    }, [])

    const excluirRestaurante = (restauranteId: number) => {
        axios.delete(`http://localhost:8000/api/v2/restaurantes/${restauranteId}/`)
        .then(() => {
            setRestaurantes(
                restaurantes.filter(
                    restaurante => restaurante.id !== restauranteId
                )
            )
        })
    }

    return {
        restaurantes,
        excluirRestaurante
    }
}

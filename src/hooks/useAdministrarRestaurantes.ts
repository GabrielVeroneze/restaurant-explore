import axios from 'axios'
import { useEffect, useState } from 'react'
import { IRestaurante } from '@/interfaces/IRestaurante'

export const useAdministrarRestaurantes = () => {
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    useEffect(() => {
        carregarRestaurantes()
    }, [])

    const carregarRestaurantes = () => {
        axios
            .get<IRestaurante[]>('http://localhost:8000/api/v2/restaurantes/')
            .then(resposta => {
                setRestaurantes(resposta.data)
            })
    }

    const cadastrarRestaurante = (nomeRestaurante: string) => {
        axios
            .post('http://localhost:8000/api/v2/restaurantes/', {
                nome: nomeRestaurante,
            })
            .then(() => {
                alert('Restaurante cadastrado com sucesso!')
            })
    } 

    const editarRestaurante = (nomeRestaurante: string, restauranteId: string) => {
        axios
            .put(`http://localhost:8000/api/v2/restaurantes/${restauranteId}/`, {
                nome: nomeRestaurante,
            })
            .then(() => {
                alert('Restaurante atualizado com sucesso!')
            })
    }

    const excluirRestaurante = (restauranteId: number) => {
        axios
            .delete(`http://localhost:8000/api/v2/restaurantes/${restauranteId}/`)
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
        cadastrarRestaurante,
        editarRestaurante,
        excluirRestaurante,
    }
}

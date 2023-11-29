import { useEffect, useState } from 'react'
import { IRestaurante } from '@/interfaces/IRestaurante'
import http from '@/http'

export const useAdministrarRestaurantes = () => {
    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    useEffect(() => {
        carregarRestaurantes()
    }, [])

    const carregarRestaurantes = () => {
        http
            .get<IRestaurante[]>('restaurantes/')
            .then(resposta => {
                setRestaurantes(resposta.data)
            })
    }

    const cadastrarRestaurante = (nomeRestaurante: string) => {
        http
            .post('restaurantes/', {
                nome: nomeRestaurante,
            })
            .then(() => {
                alert('Restaurante cadastrado com sucesso!')
            })
    } 

    const editarRestaurante = (nomeRestaurante: string, restauranteId: string) => {
        http
            .put(`restaurantes/${restauranteId}/`, {
                nome: nomeRestaurante,
            })
            .then(() => {
                alert('Restaurante atualizado com sucesso!')
            })
    }

    const excluirRestaurante = (restauranteId: number) => {
        http
            .delete(`restaurantes/${restauranteId}/`)
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

import { IPrato } from '@/interfaces/IPrato'

export interface IRestaurante {
    id: number
    nome: string
    pratos: IPrato[]
}

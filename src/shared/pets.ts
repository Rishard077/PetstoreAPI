import supertest from 'supertest'
import constants from '../utils/constants'
import { petEnpoint } from '../utils/constants'

export const addPet = async (pet: Pet, id: number) => {
    return supertest(constants.BASE_URL).post(petEnpoint.PET).send({ ...pet, id })
}

export const updatePet = async (pet: Pet, id: number) => {
    return supertest(constants.BASE_URL).put(petEnpoint.PET).send({ ...pet, id })
}

export const getPet = async (petId: string) => {
    return supertest(constants.BASE_URL).get(petEnpoint.PET + '/' + petId)
}

export const getStatus = async (status: string) => {
    return supertest(constants.BASE_URL).get(petEnpoint.PET_STATUS).query({ status: status })
}

export const deletePet = async (petId: string) => {
    return supertest(constants.BASE_URL).delete(petEnpoint.PET + '/' + petId)
}



export interface Pet {
    id: number
    category: Category
    name: string
    photoUrls: string[]
    tags: Tag[]
    status: string
}

export interface Category {
    id: number
    name: string
}

export interface Tag {
    id: number
    name: string
}


export function randomNumber(): number {
    const min = 100;
    const max = 999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
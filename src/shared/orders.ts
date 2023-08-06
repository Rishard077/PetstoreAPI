import supertest from "supertest"
import constants, { petEnpoint, store } from "../utils/constants"

export const orderPet = async (pets:petOrder,petId:number,shipDate:string) => {
    return  supertest(constants.BASE_URL).post(store.ORDER).send({...pets,petId,shipDate})
  }


export const getOrder = async (orederId:string)=>{
    return supertest(constants.BASE_URL).get(store.ORDER+'/'+orederId)
}

export const deleteOrder = async (orederId:string)=>{
    return supertest(constants.BASE_URL).delete(store.ORDER+'/'+orederId)
}


export const getInventory = async (orederId:string)=>{
    return supertest(constants.BASE_URL).get(store.INVENTORY)
}








  export interface petOrder {
    id: number
    petId: number
    quantity: number
    shipDate: string
    status: string
    complete: boolean
  }


  export function generateIsoTimestamp(): string {
    const now = new Date();
    return now.toISOString();
  }
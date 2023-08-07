import supertest from "supertest"
import constants, { user } from "../utils/constants"
import { use } from "chai"


export const createUser = async (userData: users, username: string) => {
    return supertest(constants.BASE_URL).post(user.USER).send({ ...userData, username })
}

export const getUser = async (usernam: string) => {
    return supertest(constants.BASE_URL).get(user.USER + '/' + usernam)
}

export const updateUser = async (userData: users, username: string) => {
    return supertest(constants.BASE_URL).put(user.USER + '/' + username).send({ ...userData, username })
}


export const authenticat = async (username: string, password: string) => {
    return supertest(constants.BASE_URL).get(user.AUTH).query({
        username: username,
        password: password
    })
}

export const logOut = async () => {
    return supertest(constants.BASE_URL).get(user.LOGOUT)
}

export const deleteUser = async (usernam: string) => {
    return supertest(constants.BASE_URL).delete(user.USER + '/' + usernam)
}

export const createWithList = async (userData: userList) => {
return supertest(constants.BASE_URL).post(user.CREATE_WITH_LIST).send(userData)
}

export const createWithArray = async (userData: userList) => {
    return supertest(constants.BASE_URL).post(user.CREATE_WITH_ARRAY).send(userData)
    }


export interface users {
    id: number
    username: string
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string
    userStatus: number
}


export type userList = Root[]

export interface Root {
  id: number
  username: string
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  userStatus: number
}

export function generateRandomUsername(): string {
    const randomNumber = Math.floor(Math.random() * 1000);
    const timestamp = Date.now();
    const randomUsername = `user_${timestamp}_${randomNumber}`;
    return randomUsername;
}
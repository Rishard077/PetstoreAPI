import { expect } from "chai"
import { authenticat, createUser, deleteUser, generateRandomUsername, getUser, logOut, updateUser } from "../shared/users"
import { updateUserData, userData } from "../utils/paylaod"
import { deletePet } from "../shared/pets"

let response: any
let userId: any
let username: any

describe('User Tests', () => {


    before("Genarate Random user name", async () => {
        username = generateRandomUsername()
       
    })

    it('Should be able to create a new user ', async () => {
        response = await createUser(userData, username)
        expect(response.status).to.equal(200)
    })

    it("user should be able to get users by user name", async () => {
        response = await getUser(username)
        expect(response.status).to.equal(200)
        expect(response.body.username).to.equal(username)
        expect(response.body.firstName).to.equal(userData.firstName)
        expect(response.body.lastName).to.equal(userData.lastName)
        expect(response.body.email).to.equal(userData.email)
    })

    it('User should be able to update user data', async () => {
        response = await updateUser(updateUserData, username)
        expect(response.status).to.equal(200)
    })

    it('User should be able to retreive updated user details', async () => {
        response = await getUser(username)
        expect(response.status).to.equal(200)
        expect(response.body.username).to.equal(username)
        expect(response.body.firstName).to.equal(updateUserData.firstName, "First Name was not updated")
        expect(response.body.lastName).to.equal(updateUserData.lastName, "Last Name was not updated")
        expect(response.body.email).to.equal(updateUserData.email, "Email was not updated")
    })



    it('user should be able to login successfully', async () => {
        response = await authenticat(username, updateUserData.password)
        expect(response.status).to.equal(200)
    })

    it('user should be able to login successfully', async () => {
        response = await logOut()
        expect(response.status).to.equal(200)
    })

    it('User should be able to delete a user', async () => {
        response = await deleteUser(username)
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal(`${username}`)
    })

    it('User should not be able to get a deleted user', async () => {
        response = await getUser(username)
        expect(response.status).to.equal(404, 'A deleted user was retrieved')
        expect(response.body.message).to.equal('User not found')
    })

})
import { expect } from "chai"
import { addPet, deletePet, getStatus, getPet, randomNumber, updatePet } from "../shared/pets"
import { ADD_NEW_PET, UPDATE_PET } from "../utils/paylaod"
import { petEnpoint } from "../utils/constants"

let response: any
export let petId: any
let availableStatuses: any

describe('Pet Test', () => {

    before('Generate Pet ID', async () => {
        petId = randomNumber();
    })

    it('User should be able to add a new pet to the system', async () => {
        response = await addPet(ADD_NEW_PET, petId)
        expect(response.status).to.equal(200)
        expect(response.body.id).to.equal(petId)
        expect(response.body.name).to.equal(ADD_NEW_PET.name)
    })

    it('User should be able to update a pet ', async () => {
        response = await updatePet(UPDATE_PET, petId)
        expect(response.status).to.equal(200)
        expect(response.body.id).to.equal(petId)
        expect(response.body.name).to.equal(UPDATE_PET.name)
    })

    it('User should be able to get pet by Id ', async () => {
        response = await getPet(petId)
        expect(response.status).to.equal(200)
        expect(response.body.id).to.equal(petId)
        expect(response.body.name).to.equal(UPDATE_PET.name)

    })

    it('User should be able delete pet by pet id', async () => {
        response = await deletePet(petId)
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal(`${petId}`)
    })

    it('User should not able to get deleted pet', async () => {
        // Verify the pet is deleted from the system
        response = await getPet(petId)
        expect(response.status).to.equal(404)
        expect(response.body.message).to.equal('Pet not found')
    })

    it('User should be able to get all available pets ', async () => {
        response = await getStatus(petEnpoint.STATUS_AVAILABLE)
        expect(response.status).to.equal(200)
        availableStatuses = response.body.map((pet: { status: any }) => pet.status); // map all the values in the status field to an array
        expect(availableStatuses).to.include.members(['available']); // assert weather all the value of status array is availbe 
    })

    it('User should be able to get all pending pets ', async () => {
        response = await getStatus(petEnpoint.STATUS_PENDING)
        expect(response.status).to.equal(200)
        availableStatuses = response.body.map((pet: { status: any }) => pet.status); // map all the values in the status field to an array
        expect(availableStatuses).to.include.members(['pending']);
    })

    it('User should be able to get sold pets ', async () => {
        response = await getStatus(petEnpoint.STATUS_SOLD)
        expect(response.status).to.equal(200)
        availableStatuses = response.body.map((pet: { status: any }) => pet.status); // map all the values in the status field to an array
        expect(availableStatuses).to.include.members(['sold']);
    })

})
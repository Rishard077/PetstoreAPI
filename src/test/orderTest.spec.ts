import { expect } from "chai"
import { petId } from "../test/petTest.spec"
import { deleteOrder, generateIsoTimestamp, getInventory, getOrder, orderPet, } from "../shared/orders"
import { ORDER_PET } from "../utils/paylaod"


let response: any
let timeStamp: any
let orderId: any



describe('Order Pet Test', () => {

    before("Generate time stamp", async () => {
        timeStamp = generateIsoTimestamp()
    })

    it('User should be able to create Pet order', async () => {
        response = await orderPet(ORDER_PET, petId, timeStamp)
        orderId = response.body.id
        expect(response.status).to.equal(200)
        expect(response.body.petId).to.equal(petId)
    })


    it('User should be able to get Pet purchase order by id', async () => {
        response = await getOrder(orderId)
        expect(response.status).to.equal(200)
        expect(response.body.id).to.equal(orderId)
        expect(response.body.petId).to.equal(petId)
        expect(response.body.quantity).to.equal(ORDER_PET.quantity)
        expect(response.body.status).to.equal('placed')
    })


    it('User should be able to delete a purchase order', async () => {
        response = await deleteOrder(orderId)
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal(`${orderId}`)
    })

    it('User should not be able to get deleted order', async () => {
        response = await getOrder(orderId)
        expect(response.status).to.equal(404)
        expect(response.body.message).to.equal('Order not found')
    })

    it('User Should be able to get inventory by status', async () => {
        response = await getInventory(orderId)
        expect(response.status).to.equal(200)
        expect(response.body).to.include.keys(
            ['unavailable',
                'pending',
                'available']
        )
    })
})
export default {
    BASE_URL:'https://petstore.swagger.io/v2'
}

export const petEnpoint = {
    PET:'/pet',
    PET_STATUS:'/pet/findByStatus',
    STATUS_AVAILABLE:'available',
    STATUS_PENDING:'pending',
    STATUS_SOLD:'sold'
    
}

export const store ={
    ORDER:'/store/order',
    INVENTORY:'/store/inventory'

}

export const user ={
    USER:'/user',
    AUTH:'/user/login',
    USERNAME:'username',
    PASSWORD:'password',
    LOGOUT:'/user/logout'
}


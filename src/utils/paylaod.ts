import constants from "./constants"

export const ADD_NEW_PET = {

        'id': 123,
        'category': {
            'id': 0,
            'name': 'Dogs'
        },
        'name': 'My Pet 1',
        'photoUrls': [
            'string'
        ],
        'tags': [
            {
                'id': 0,
                'name': 'string'
            }
        ],
        'status': 'available'  
           
}

export const UPDATE_PET = {

    'id': 123,
    'category': {
        'id': 0,
        'name': 'Dogs'
    },
    'name': 'My Pet 2',
    'photoUrls': [
        'string'
    ],
    'tags': [
        {
            'id': 0,
            'name': 'string'
        }
    ],
    'status': 'available'  
       
}

export const ORDER_PET ={
        'id': 0,
        'petId': 0,
        'quantity': 5,
        'shipDate': "{{$isoTimestamp}}",
        'status': "placed",
        'complete': true
}


export const userData ={
    
        'id': 0,
        'username': 'MyName',
        'firstName': 'firstname',
        'lastName': 'lastName',
        'email': 'anyemail',
        'password': 'anystring',
        'phone': '0000000',
        'userStatus': 0
      
}

export const updateUserData ={
    
    'id': 0,
    'username': 'UpdatedName',
    'firstName': 'firstnameUpdate',
    'lastName': 'lastNameUpdate',
    'email': 'anyemail',
    'password': 'anystring',
    'phone': '0000000',
    'userStatus': 0
  
}

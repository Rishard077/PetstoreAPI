import { generateRandomUsername } from "../shared/users";
import constants from "./constants"


export const listUserName1= generateRandomUsername()
export const listUserName2 =generateRandomUsername()
export const arraytUserName1= generateRandomUsername();
export const arrayUserName2 =generateRandomUsername()

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

export const userDataList =[
    {
      'id': 0,
      'username': `${listUserName1}`,
      'firstName': "string",
      'lastName': "string",
      'email': "string",
      'password': "string",
      'phone': "string",
      'userStatus': 0
    },
    {
        'id': 0,
        'username': `${listUserName2}`,
        'firstName': "string1",
        'lastName': "string2",
        'email': "string3",
        'password': "string",
        'phone': "string",
        'userStatus': 0
    }
  ]

  export const userDataArray =[
    {
      'id': 0,
      'username': `${arraytUserName1}`,
      'firstName': "string",
      'lastName': "string",
      'email': "string",
      'password': "string",
      'phone': "string",
      'userStatus': 0
    },
    {
        'id': 0,
        'username': `${arrayUserName2}`,
        'firstName': "string1",
        'lastName': "string2",
        'email': "string3",
        'password': "string",
        'phone': "string",
        'userStatus': 0
    }
  ]

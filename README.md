# Saga

-----

## Installation and deployment
1. git clone http://192.168.13.21/zhengh/saga.git
2. cd saga
3. npm Install
4. gulp / gulp clean / gulp build
5. Open browser http://localhost:5000/

-----

## Third party Library
* [Mongoose 4.x.x](http://mongoosejs.com/)
* [Express 4.x.x](https://expressjs.com/)
* [NodeJS 6.2.x](https://nodejs.org/)
* [React 15.2.x](http://facebook.github.io/react/)
* [Redux 3.5.x](https://github.com/reactjs/redux/)
* [React Router 2.x.x](https://github.com/reactjs/react-router/)
* [Ant Design 1.6.x](http://ant.design/)
* [Lodash 1.5.x](https://lodash.com/)
* [Q 1.4.x](https://github.com/kriskowal/q)

-----

## JSON Transfer Protocol
### Description
> head
* status: (Integer)，Server-side status
  1. 200：Http response success.
  2. 201：Warning infomation.
  3. 202：Login timeout.
  4. 400: Bad request.
  5. 404: No page found.
  6. 405: Request method is not support.
  7. 415: Unsupported media type.
  8. 500：Server-side exceptions.
* token: (String)，Encryption key。
* message: (String)，Server-side infomation for current http request.
* total: (Integer)，Sum of business logic result (if the results as the object then total equals 1, as an array equals length of the array).

> body
* (Object/Array)，Realistic & available datas.

### Example
    {
      head: {
        status: 200,
        token: "ghco9xdnaco31gmafukxchph",
        message: "Login Success!",
        total: 1
      },
      body: {
        username: "admin",
        password: "admin"
      }
    }

-----

## How to write markdown for CORS API ?
### Summary
    # Module name
    -----
    ## Module name -- Interface name(Comments)
    ### Restful URL
        Type: GET/POST/DELETE/PUT
    #### Parameter:
        name       data-type         'description(comment)'
    #### Result: String/Object/Array/Bollean/Null
        name       data-type         'description(comment)'
    -----
-----
# User Management [Markdown DEMO]
## User -- query(query all of the user infomation)
### /api/user
    Type: GET
#### Parameter:
    department_id    String         ID for user's department(If superuser login ignore this parameter)
#### Result: Array
    username         String         'User's alias name'
    password         String         'User's password'
    age              Integer        'User's age'
    realname         String         'User's real name'
    phone            String         'Telephone number'
    department       String         'Department'
    email            String         'E-mail'
## User -- update(update user infomation base on ID)
### /api/user
    Type: PUT
#### Parameter:
    user_id    String         ID for user's department(If superuser login ignore this parameter)
#### Result: Null
## User -- add(Add a user by ID)
### /api/user
    Type: POST
#### Parameter:
    username         String         'User's alias name'
    password         String         'User's password'
    age              Integer        'User's age'
    realname         String         'User's real name'
    phone            String         'Telephone number'
    department       String         'Department'
    email            String         'E-mail'
#### Result: Null
## User -- delete(delete a user by ID)
### /api/user/{:user_id}
    Type: DELETE
#### Parameter:
    user_id    String         ID for user's department(If superuser login ignore this parameter)
#### Result: Null
-----

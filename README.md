# Saga

![](./artifact/logo.png)

## Installation and deployment
1. git clone https://github.com/uinika/saga.git 
2. cd saga
3. npm install
4. gulp clean / build
5. open browser with http://localhost:5000/

## Thirdparty Library
* [React 15.2.x](http://facebook.github.io/react/)
* [Redux 3.5.x](https://github.com/reactjs/redux/)
* [Webpack 1.13.x](http://facebook.github.io/react/)
* [Babel with preset 6.x.x](https://babeljs.io/)
* [React Router 2.x.x](https://github.com/reactjs/react-router/)
* [NodeJS 6.2.x](https://nodejs.org/)
* [Ant Design 1.6.x](http://ant.design/)
* [Lodash 1.5.x](https://lodash.com/)
* [Q 1.4.x](https://github.com/kriskowal/q)

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


## How to write markdown for CORS API ?
### Summary
    # Module name
    -----
    ## Page name -- Interface name(Comments)
    ### Restful URL
        Type: GET/POST/DELETE/PUT
    #### Parameter:
        name       data-type         'description(comment)'
    #### Result: String/Object/Array/Bollean/Null
        name       data-type         'description(comment)'
    -----
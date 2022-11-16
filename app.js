const express = require('express')

const port = 9000

const app = express()

app.get('/profile', (peticion, respuesta) => {
    respuesta.json({
        name: 'Martin Paredes',
        age: 30,
        country: 'Paraguay'
    })
})

app.post('/profile', (peticion, respuesta) => {
    respuesta.json([
      "Apple", 
      "Google",
      "Microsoft"
    ])
})

app.patch('/profile', (peticion, respuesta) => {
    respuesta.json([
        "ir al gym",
        "cantar",
        "bailar"
    ])
})

app.listen(port, () => {
    console.log('server started at port ' + port);
})
import express from 'express'

const app = express()

const port = process.env.PORT || 3001

let prose = { 

    1:{
    name: love,
    text: `But if in your fear you would seek only\n
    love’s peace and love’s pleasure,
    Then it is better for you that you cover
    your nakedness and pass out of love’s
    threshing-floor,
    Into the seasonless world where you
    shall laugh, but not all of your laughter,
    and weep, but not all of your tears`
    },
    
    2:{
        name: marriage,
        text: `Give your hearts, but not into each
        other’s keeping.
             For only the hand of Life can contain
        your hearts.
             And stand together yet not too near
        together:
             For the pillars of the temple stand apart,
             And the oak tree and the cypress grow
        not in each other’s shadow.`
    }
    }

app.get('/', (req, res) =>{
    let prophetOn =[];
    Object.keys(prose),forEach((key, value) => {
if(req.query.name == prose[key].name){
    prophetOn.push(text)
}
    })
    res.send(prophetOn)
})

app.get('/', (req,res) => {
    console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const app = express();

const port = 3000

app.get("/", (req, res) => {
  res.send('Wey Estamos Aqui')
})


const myLogger = (req, res, next) => {
  const visitTime = new Date();
  console.log(`visited ${req.url} at ${visitTime.toLocaleString()}`);
  next();
};
app.use(myLogger);

//Primera parte
app.get("/add", (req, res) => {
  if (parseInt(req.query.value1) && parseInt(req.query.value2)) {
    const value1 = parseInt(req.query.value1)
    const value2 = parseInt(req.query.value2)
    res.send(`${value1} + ${value2} = ${value1 + value2}`)
  } else {
    res.send('Solo parametros numericos')
  }
})

app.get("/substract", (req, res) => {
  if (parseInt(req.query.value1) && parseInt(req.query.value2)) {
    const value1 = parseInt(req.query.value1)
    const value2 = parseInt(req.query.value2)
    res.send(`${value1} - ${value2} = ${value1 - value2}`)
  } else {
    res.send('Solo parametros numericos')
  }
})

app.get("/multiply", (req, res) => {
  if (parseInt(req.query.value1) && parseInt(req.query.value2)) {
    const value1 = parseInt(req.query.value1)
    const value2 = parseInt(req.query.value2)
    res.send(`${value1} x ${value2} = ${value1 * value2}`)
  } else {
    res.send('Solo parametros numericos')
  }
})

app.get("/divide", (req, res) => {
  if (parseInt(req.query.value1) && parseInt(req.query.value2)) {
    const value1 = parseInt(req.query.value1)
    const value2 = parseInt(req.query.value2)
    res.send(`${value1} / ${value2} = ${value1 / value2}`)
  } else {
    res.send('Solo parametros numericos')
  }
})

//Seguda Parte
app.get("/add/:value1/:value2", (req, res) => {
  if (parseInt(req.params.value1) && parseInt(req.params.value2)) {
    const value2 = parseInt(req.params.value2)
    const value1 = parseInt(req.params.value1)
    res.send(`${value1} + ${value2} = ${value1 + value2}`)
  }  else {
    res.send('Solo parametros numericos')
  }
})

app.get("/substract/:value1/:value2", (req, res) => {
  if (parseInt(req.params.value1) && parseInt(req.params.value2)) {
    const value1 = parseInt(req.params.value1)
    const value2 = parseInt(req.params.value2)
    res.send(`${value1} - ${value2} = ${value1 - value2}`)
  } else {
    res.send('Solo parametros numericos')
  }
})

app.get("/multiply/:value1/:value2", (req, res) => {
  if (parseInt(req.params.value1) && parseInt(req.params.value2)) {
    const value1 = parseInt(req.params.value1)
    const value2 = parseInt(req.params.value2)
    res.send(`${value1} x ${value2} = ${value1 * value2}`)
  } else {
    res.send('Solo parametros numericos')
  }
})


app.get("/divide/:value1/:value2", (req, res) => {
  if (parseInt(req.params.value1) && parseInt(req.params.value2)) {
    const value1 = parseInt(req.params.value1)
    const value2 = parseInt(req.params.value2)
    res.send(`${value1} / ${value2} = ${value1 / value2}`)
  } else {
    res.send('Solo parametros numericos')
  }
})



app.listen(port, () => {
  console.log(`localhost:${port}`)
})
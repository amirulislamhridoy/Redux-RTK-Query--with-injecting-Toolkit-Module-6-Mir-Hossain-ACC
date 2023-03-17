const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const cors = require("cors");

// mongoose connect
mongoose.connect('mongodb+srv://practise:32202910@cluster0.0exa02b.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('mongodb is connected'))
  .catch(e => console.log(e.message))

app.use(cors())
app.use(express.json())

const Schema = mongoose.Schema

const productSchema = new Schema([])
const productModel = mongoose.model('product', productSchema)

app.get('/', async (req, res) => {
  try {
    const result = await productModel.find()
    res.json(result).status(200)
  }catch(e){
    console.log(e)
  }
})
app.post('/add', async (req, res) => {
  try {
    const data = req.body
    // problem hoitesi tai ager tay jai tesi
    const result = await productModel.insertOne(data)
    res.json(result).status(200)
  }catch(e){
    console.log(e)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
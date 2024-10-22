const express = require('express');
const mongoose=require('mongoose');
const Product=require('./models/product.models.js');
const productRoute=require('./routes/product.route.js');
const app = express();

//middle ware
app.use(express.json())

//route
app.use('/api/products',productRoute);


app.get('/', (req, res) => {
    res.send("Hello from node API Request Server");
});



// app.get('/api/products',async(req,res)=>{
//     try{
//         const products=await Product.find({});
//         res.status(200).json(products);
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// });

// app.get('/api/products/:id/',async(req,res)=>{
//     try{
//         const{id}=req.params
//         const product=await Product.findById(id);
//         res.status(200).json(product);
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

// app.post('/api/products',async(req,res)=>{
//     try{
//         const product=await Product.create(req.body)
//         res.status(200).json(product);
//     }
//     catch(error){
//         res.status(500).json({message: error.message})
//     }
// });


// app.put('/api/products/:id',async(req,res)=>{
//     try{
//         const {id}=req.params;
//         const product=await Product.findByIdAndUpdate(id,req.body)
//         if(!product){
//             return res.status(400).json({message:"Product not found"})
//         }
//         const UpdatedProduct=await Product.findById(id);
//         res.status(500).json(UpdatedProduct);
//     }
//     catch(error){
//         res.status(500).json({message: error.message});
//     }
// });


// app.delete('/api/products/:id',async(req,res)=>{
//     try{
//         const {id}=req.params;

//         const product=await Product.findByIdAndDelete(id);

//         if(!product){
//             return res.status(404).json({message:"Product Not Found"})
//         }
//         res.status(200).json({message:"Product Deleted Successfully"});
//     }
//     catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

mongoose.connect('mongodb+srv://abi28:123@cluster0.xp4jt.mongodb.net/')
  .then(() =>{
    console.log('Connected to Database');

    app.listen(3000, ()=>{
        console.log("Server is running on Port 3000");
    });
  });


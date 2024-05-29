const express=require("express")
const joi =require("joi")
const app=express()
let PORT= 3300




app.use(express.json())

app.get('/',(req,res)=>{
    res.send("welcome...")
    
})
 


app.post( "/product", async (req,res)=>{

    
let shema=joi.object({
    title:joi.string().trim().min(4).required(),
    category:joi.string().trim().min(3).required(),
    quantity:joi.number().required(),
    price:joi.number().required()

})
 try {
   const data = await  shema.validateAsync(req.body)
res.send("data saved"+({data:data}) )
 } catch (error) {
    console.log(error);
    res.send('error   ' +error)
 }
})






app.listen(PORT,()=>{
    console.log('server runnig on port   '+PORT);
})
const express=require("express")
const path=require("path")
const app=express();
const PORT=process.env.PORT || 4000;
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    try{
        res.render("page",{pageContent:'page1',pageTitle:"Login"});
    }
    catch(error){
        res.status(404).send({message:error.message});
    }
})

app.get("/page1",(req,res)=>{
    try{
        res.render("page",{pageContent:'page1',pageTitle:"Login"});
    }
    catch(error){
        res.status(404).send({message:error.message});
    }
})
app.get("/page2",(req,res)=>{
    try{
        res.render("page",{pageContent:'page2',pageTitle:"Signup"});
    }
    catch(error){
        res.status(404).send({message:error.message});
    }
})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
const express = require("express");
const router = express.Router();
const Order =require('../model/Orders');

// router.post('/orderData',async(req,res)=>{
//     let data =req.body.order_data 
//     await data.splice(0,0, {Order_date:req.body.Order_data})

//     let eId =await Order.findOne({'email':req.body.email})
//     console.log (eId)
//     if(eId === nill){
//         try{
//             await Order.create({
//                 email: req.body.email,
//                 order_data:[data] 
//             }).then(()=>{
//                 res.json({ success:true})
//             })
//         }catch(error){
//             console.log(error.message)
//             res.send("Server Error",error.message)
//         }
//     }
//     else{
//         try{
//             await Order.findOneAndUpdate({ email:req.body.email},
//                 {
//                     $push:{ order_data:data}
//                 }).then(()=>{
//                     res.json({ success: true})
//                 })
//         } catch(error){

//             res.send("Server Error", error.massage)
//         }
//     }
// })
router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    let orderDate = new Date().toDateString(); // Assuming you want to use the current date as the order date

    try {
        let eId = await Order.findOne({ 'email': req.body.email });
        console.log(eId);

        if (!eId) {
            await Order.create({
                email: req.body.email,
                order_data: [{ Order_date: orderDate, ...data }] // Including the order date in the data array
            });
            res.json({ success: true });
        } else {
            await Order.findOneAndUpdate(
                { email: req.body.email },
                {
                    $push: { order_data: { Order_date: orderDate, ...data } } // Including the order date in the data array
                }
            );
            res.json({ success: true });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error: " + error.message); // Sending error message along with status
    }
});

// router.post('/orderData',async(req,res)=>{

//     try{
//         let myData = await Order.findOne({'email':req.body.email})
//         res.json({ orderData:myData})
//     } catch(error) {
//         res.send("Server Error",error,message)
//     }

// })

// router.post('/myorderData',async(req,res)=>{

//     try{
//         let myData = await Order.findOne({'email':req.body.email})
//         res.json({ orderData:myData})
//     } catch(error) {
//         res.send("Server Error",error,message)
//     }

// })


router.post('/myOrderData', async (req, res) => {
    try {
        console.log(req.body.email)
        let eId = await Order.findOne({ 'email': req.body.email })
        //console.log(eId)
        res.json({orderData:eId})
    } catch (error) {
        res.send("Error",error.message)
    }
    

});





module.exports=router;
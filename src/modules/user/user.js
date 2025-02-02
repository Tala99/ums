import { Router } from "express";
import bcrypt from 'bcryptjs';
import UserModel from "../../../DB/model/user.js";
import auth from "../../middleware/auth.js";
const router= Router();
router.get('/', auth() ,async (req, res) => {
   // const users= await UserModel.findAll();
   try {
      const users= await UserModel.findAll( 
         {
             attributes:["id","name","email"]
         }
        );
         return res.status(200).json({message:"success",users});
      
   } catch (error) {
      return res.status(500).json({message:"server error",error});
   }
   
});
router.delete('/:id', auth(), async (req,res) => {
   try {
      const {id}=req.params;
  const user =await UserModel.findOne({id:id});
  if (!user) return res.status(400).json({message:"not found"});
   await UserModel.destroy({
     where: {id:id}
  });
  return res.status(200).json({message:"User deleted successfully"});
   } catch (error) {
      return res.status(500).json({message:"server error",error});
   }
 
});


export default router;
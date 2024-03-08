import { Router } from "express";
const router = Router();

router.get('/user', (req,res)=>{
    res.send("Hola desde la ruta users")
});

export default router;
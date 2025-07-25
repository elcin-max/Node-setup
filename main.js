import expres from "express";
import cors from "cors";
import  fs from "fs/promises";
// import path from "path";


const app = expres();
app.use(cors());
app.use(expres.json()); 

app.post("/create_folder", (req, res)=> {
    const foldername = req.body.foldername;
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
const express = require("express")
const { getUserByEmail, checkUserPassword, addAuthSession, addUserAuth, validateSession, getUser, getSession } = require("./services/auth")
const app = express()

const PORT = 3060

app.use(express.json())




app.patch("/api/counter", async (req, res) => {
    try {
        
        const userId = req.body.userId;
        
    
        if (!user) {
          res.status(404).json("error");
          return;
        }
    
     
    
    
    });


app.listen(PORT, () => console.log("Server running on " + PORT))

const express = require("express")
const { getUserByEmail, checkUserPassword, addAuthSession, addUserAuth, validateSession, getUser, getSession } = require("./services/auth")
const app = express()

const PORT = 3060

app.use(express.json())

async function authorize(req, res, next) {
    const token = req.header("authorization")
    const result = await validateSession(token)
    if (!result) {
        return res.sendStatus(401)
    }
    const session = await getSession(token)
    req.user = await getUser(session.uid)
    next()
}

app.get("/api/posts", authorize, (req, res) => {
    try {

        // console.log(req.user)
        res.status(200).json({ posts: ["asfsaf", "asasf", "diouygysg", "ashfas"] })
    } catch (error) {
        console.log(error)
    }
})

app.post("/api/auth/login", async (req, res) => {
    try {
        const user = await getUserByEmail(req.body.email ?? "");
        const isCorrect = await checkUserPassword(req.body.email ?? "", req.body.password ?? "")
        if (isCorrect) {
            //CRIAR UMA SESSÃO
            const token = await addAuthSession(user._id)
            return res.status(200).json({ token })
        }

        return res.sendStatus(403)
    } catch (err) {
        console.log(err)
    }
})


app.post("/api/auth/signup", async (req, res) => {
    try {
        const { password, passwordConf, email } = req.body
        if (password !== passwordConf) {
            return res.status(400).json({ message: "passwords_dont_match" })
        }

        const user = await getUserByEmail(req.body.email ?? "");
        if (user) {
            return res.status(400).json({ message: "email_already_in_use" })
        }

        const result = await addUserAuth({ password, email })

        return res.status(200).json({ _id: result })

    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => console.log("Server running on " + PORT))


// Definir uma rota para a página inicial pra quando abrir o app 

app.get('/', (req, res) => {
  res.send('Bem-vindo ao servidor Pomodoro!');


});

// Definir outras rotas e endpoints do seu aplicativo aqui, iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Endpoint para iniciar um Pomodoro
app.post('/pomodoros/start', (req, res) => {
  // Lógica para STAAAAAAAART um Pomodoro
  // ...
  res.send('Pomodoro iniciado!');
});

// Endpoint para pausar um Pomodoro
app.post('/pomodoros/pause', (req, res) => {
  // Lógica para PAUSEEEEEE Pomodoro
  // ...
  res.send('Pomodoro pausado!');
});

// Endpoint para retomar um Pomodoro
app.post('/pomodoros/resume', (req, res) => {
  // Lógica para BACK TO Pomodoro
  // ...
  res.send('Pomodoro retomado!');
});

// Endpoint para parar um Pomodoro
app.post('/pomodoros/stop', (req, res) => {
  // Lógica para STOOOOOOOP  um Pomodoro // N DE CICLOS, N DE PAUSAS 
  // ... 
   res.send('Pomodoro parado!');
});



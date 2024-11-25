import express from "express"; // Importa o framework Express para criar a aplicação web
import routes from "./src/routes/postsRoutes.js";

// Array de posts de exemplo (será substituído pelos dados do banco de dados)
//const posts = [
    // ... (dados dos posts)
//];
const app = express(); // Cria uma instância do aplicativo Express
app.use(express.static("uploads"))
routes(app);


app.listen(3000, () => { // Inicia o servidor na porta 3000
    console.log("Servidor escutando..."); // Mensagem de log indicando que o servidor está ativo
});
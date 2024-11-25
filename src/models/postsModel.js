import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
    const db = conexao.db("imersão-Alura-insta"); // Seleciona o banco de dados "imersão-Alura-insta"
    const colecao = db.collection("posts"); // Seleciona a coleção "posts"
    return colecao.find().toArray(); // Retorna um array com todos os documentos da coleção
}

export async function criarPost(novoPost) {
    const db = conexao.db("imersão-Alura-insta");
    const colecao = db.collection("posts"); 
    return colecao.insertOne(novoPost) 
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersão-Alura-insta");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost})
}
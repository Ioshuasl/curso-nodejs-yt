const Sequelize = require("sequelize")
const sequelize = new Sequelize("teste", "root", "12345678", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(()=>{
    console.log(`Autenticação com o banco de dados estabelecida com sucesso!`)
}).catch((erro)=>{
    console.log(`Falha na autenticação:` + erro)
})

const Postagem = sequelize.define(`postagens`, {
    titulo: {
        type: Sequelize.STRING()
    },
    conteudo: {
        type: Sequelize.TEXT()
    }
})

//Postagem.sync({force: true})

const Usuario = sequelize.define(`usuarios`, {
    nome: {
        type: Sequelize.STRING()
    },
    sobrenome: {
        type: Sequelize.STRING()
    },
    idade: {
        type: Sequelize.INTEGER()
    },
    email: {
        type: Sequelize.STRING()
    }
})

//Usuario.sync({force: true})

Postagem.create({
    titulo: `rafael brandao`,
    conteudo: `rafael brandao top 3 arnold ohio`
})

Usuario.create({
    nome: `Ioshua`,
    sobrenome: `Souza Lopes`,
    idade: 19,
    email:`ioshua@emailteste.com`
})
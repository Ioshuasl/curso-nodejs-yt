//Usar para aprender métodos do sql



CREATE DATABASE sistemaDeCadastro; 
//cria banco de dados

SHOW DATABASES; 
//mostra banco de dados existentes

USE sistemaDeCadastro 
//selecionar o banco de dados

CREATE TABLE usuarios( 
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);
//criar tabela dentro do banco de dados com suas colunas

SHOW TABLES; 
//mostrar tabelas existentes dentro do banco de dados

DESCRIBE usuarios; 
//descreve a tabela e as colunas

INSERT INTO usuarios(nome,email,idade) VALUES( 
    "Feliphe",
    "feliphe@email.com",
    21
);
//usado para registrar dados na tabela

SELECT * FROM usuarios;
//usado para mostrar todos os dados da tabela

SELECT * FROM usuarios WHERE idade = 19;
//where é usado para fazer consultas especificas dentro do banco de dados

DELETE FROM usuarios 
// toda sua tabela vai ser excluida

DELETE FROM usuarios WHERE nome = "Feliphe";
// deletar um registro especifico

UPDATE usuarios SET nome = "Lanna Souza" WHERE nome = "Alanna Souza";
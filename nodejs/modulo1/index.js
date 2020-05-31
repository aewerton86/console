const express = require('express');

const server = express();

//localhos:3000/cursos
server.get('/cursos',(req, res) =>{
    return res.json({curso : "NODE JS"})
})
server.listen(3000);
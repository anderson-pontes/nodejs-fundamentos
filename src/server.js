import http from 'node:http'

//GET, POST, PUT, PATCH, DELETE

//GET => Buscar um recurso do back-end
//POST => Criar um recurso no back-end
//PUT => Atualizar um recurso no back-end
//PATCH => Atualizar uma informação específica de um recurso no back-end
//DELETE => Deletar um recurso do back-end

const users = []
const server = http.createServer((req, res) => {
  const { method, url} = req

  if(method === 'GET' && url === '/users') {
    return res.end(JSON.stringify(users))
  }
  if(method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'Anderson Pontes',
      email: 'anderson.pontes@email.com'
    },
    {
      id: 2,
      name: 'Oliver Pontes',
      email: 'oliver.pontes@email.com'
    })
    return res.end('Criação de usuários')
  }
  return res.end("Hello, World! Testando")

})

server.listen(3333)


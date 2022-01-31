const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./stub-server/books.json')
const middlewares = jsonServer.defaults()

const _ = require('lodash')
const cors = require('cors')

const relations = {
  books: 'reviews',
}

const allowList = ['http://localhost:3000']

const corsOptionsDelegate = (req, callback) => {
  let corsOptions

  let isDomainAllowed = allowList.indexOf(req.header('Origin')) !== -1
  let isExtensionAllowed = req.path.includes('/books')

  if (isDomainAllowed && isExtensionAllowed) {
    corsOptions = { origin: true }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}

server.use(cors(corsOptionsDelegate))

server.use((req, res, next) => {
  if (req.method === 'DELETE' && req.query['_cleanup']) {
    const db = router.db
    db.set(req.entity, []).write()

    if (relations[req.entity]) {
      db.set(relations[req.entity], []).write()
    }
    res.sendStatus(204)
  } else {
    next()
  }
})

server.use(router)

const buildRewrite = relations => {
  return _.reduce(
    relations,
    (sum, embed, resources) => {
      sum[`/${resources}/:id`] = `/${resources}/:id?_embed=${embed}`
      return sum
    },
    {}
  )
}

server.use(jsonServer.rewriter(buildRewrite(relations)))

server.use(middlewares)
server.use(router)
server.listen(8080, () => {
  console.log('JSON Server is running on http://localhost:8080')
})

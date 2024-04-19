import express, { json } from 'express' // require -> commonJS
import { moviesRouter } from './routes/movies.js'
import { paramentersRoutes } from './routes/parameters.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.use(json())
app.disable('x-powered-by')

app.use('/movies', moviesRouter)
app.use('/parameters', paramentersRoutes)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})

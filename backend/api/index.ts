import express, {Express} from 'express';
import dotenv from 'dotenv'
import connection from "../connection";
import router from "../router";

dotenv.config()

const app: Express = express();
const port = process.env.PORT || 3000

// parse body
app.use(express.json());

app.use('',(req,res)=> {
    res.send({
        message: 'hello'
    })
})

app.use('/api', router)


const start = async () => {
    try {
        connection.authenticate()
            .then(() => {
                console.log('Connection has been established successfully')
            })
            .catch((err) => {
                console.log(`Unable to connect to the database: ${err}`)
            })

        app.listen(port, () => {
            console.log(`[server]: Server is running at http://localhost:${port}`)
        })
    } catch (e) {
        console.log(`Error while starting server: ${e}`)
        process.exit(1)
    }
}


start()

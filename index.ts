import 'reflect-metadata';
import express from 'express';
import { router } from './src/routes';
import createConnection from './src/database';
import cors from 'cors'

createConnection();
const server = express()
server.use(cors())
server.use((request, response, next) => {
     response.setHeader('Access-Control-Allow-Origin', '*');
     response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
     response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
     response.setHeader('Access-Control-Allow-Headers', '*')
     response.set('Access-Control-Allow-Origin', '*')
     next();
});
server.use(express.json())
server.use(router)

server.listen(5000, () => {
     console.log('Server online, porta 5000 http://localhost:5000');

})
import express from "express";
import { UseCase } from "./application/usecase/usecase";
import { mysqlRepo } from "./infra/adapters/mysql/mysql";
import { createReservationH, deleteReservationH, getAllReservationH } from "./infra/adapters/http/handler.ts";

const app = express()
const port = 3000

const repository = new mysqlRepo();
const useCase = new UseCase(repository);

// Middleware for parse  Json Request
app.use(express.json());


app.post('/reservation', createReservationH(useCase));
app.delete('/reservation/:id', deleteReservationH(useCase));
app.get('/reservation', getAllReservationH(useCase));

// Run Server
app.listen(port, () => {
    console.log('Server Running on Port ${port}');
})

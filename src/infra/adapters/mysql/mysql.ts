import mysql, {Connection} from 'mysql';
import { Reservation } from '../../../domain/reservation';
import { ReposirotyRepoPort } from '../../../application/ports/reservationRepoPort';

export class mysqlRepo implements ReposirotyRepoPort {
    private connection: Connection;

    constructor() {
        this.connection = mysql.createConnection({
            host : 'localhost',
            user: 'root',
            password: 'K2uc99xx.',
            database: 'restaurant'
        });
        this.connection.connect((err) =>{
            if (err) {
                console.log('Error connecting to database', err);
                throw err
            }
            console.log('connected to MySQL DB');
        });
    }
    
    async createReservation(reservation: Reservation): Promise<Reservation> {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO reservation SET ?';
            this.connection.query(query, reservation, (err, result) => {
                if (err) {
                    reject(err)
                }else {
                    resolve({...reservation, id: result.insertId});
                }
            });
        });
    }

    async deleteReservation(id: number): Promise<void> {
        return new Promise((resolve, reject) => {
            const query = 'DELETE FROM reservation WHERE id = ?';
            this.connection.query(query, id, (err) => {
                if (err) {
                    reject(err);
                }else {
                    resolve();
                }
            });
        });
    }

     async getAllReservation(): Promise<Reservation[]> {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM reservation';
            this.connection.query(query, (err, result) => {
                if (err) {
                    reject(err);
                }else {
                    resolve(result);
                }
            });
        });
    }
}
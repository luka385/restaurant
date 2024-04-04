CREATE DATABASE restaurant;

USE restaurant;

CREATE TABLE reservation(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    date VARCHAR(8) NOT NULL,
    phone VARCHAR(15) NOT NULL,
);

SELECT * FROM reservation;

DESCRIBE reservation;


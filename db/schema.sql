-- Create the database employees_db
DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

-- Specify to use the employees_db database
USE employees_db;

-- Create the necessary tables for the application in the database
CREATE TABLE department (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    departmentName VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE role (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) UNIQUE NOT NULL,
    salary MEDIUMINT UNSIGNED NOT NULL, 
    departmentId INT UNSIGNED NOT NULL,
    INDEX (departmentId),
    CONSTRAINT DeptFK FOREIGN KEY (departmentId) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    positionId INT UNSIGNED NOT NULL,
    INDEX (positionId),
    CONSTRAINT PositionFK FOREIGN KEY (positionId) REFERENCES role(id) ON DELETE CASCADE,
    managerId INT UNSIGNED,
    INDEX (managerId),
    CONSTRAINT ManagerFK FOREIGN KEY (managerId) REFERENCES employee(id) ON DELETE SET NULL
);
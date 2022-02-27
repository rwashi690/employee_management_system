-- Creating seed data to build the app

-- Insert departments into DB
INSERT INTO department(name)
VALUES 
    ('Marketing'),--1
    ('Research and Development'),--2
    ('Accounting'),--3
    ('Human Resources'),--4
    ('Customer Relations');--5

-- Create 
INSERT INTO role (title, salary, departmentId)
VALUES
    ('Marketing Manager', 95000, 1),--1
    ('Marketing Intern', 25000, 1),--2
    ('Marking Analyst', 50000, 1),--3
    ('Salesperson', 45000, 1),--4
    ('Sales Lead', 75000, 1),--5
    ('Senior Marketing Manager', 125000, 1),--6
    ('Intern Software Engineer', 35000, 2),--7
    ('Junior Software Engineer', 80000, 2),--8
    ('Midlevel Software Engineer', 115000, 2),--9
    ('Senior Software Engineer', 175000, 2),--10
    ('Junior Accountant', 75000, 3),--11
    ('Senior Accountant', 105000, 3),--12
    ('Human Resources Intern', 20000, 4),--13
    ('Human Resources Manager', 75000, 4),--14
    ('Human Resources Director', 95000, 4),--15
    ('Customer Service Representative', 20000, 5),--16
    ('Customer Service Manager', 45000, 5);--17
INSERT INTO employee (firstName, lastName, positionId, managerId)
VALUES
    ('Jim Bob', 'Thorton', 3, NULL),--1
    ('Sally', 'Cute', 3, 1),--2
    ('Reggie', 'Hart', 2, 1),--3
    ('Rosie', 'Loves', 15, NULL),--4 
    ('Ryder', 'Goof', 13, 4);--5     



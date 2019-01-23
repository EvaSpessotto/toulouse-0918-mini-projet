CREATE TABLE product (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  brand VARCHAR(250),
  name VARCHAR(250),
  reference INT,
  slug VARCHAR(500),
  description TEXT,
  stock INT,
  price INT,
  picture VARCHAR(500),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  email VARCHAR(100),
  password VARCHAR(250),
  lastname VARCHAR(100),
  surname VARCHAR(100),
  id_order INT NOT NULL
);

CREATE TABLE basket (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  date DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_product (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  quantity INT,
  price INT,
  id_product INT NOT NULL,
  id_order INT NOT NULL
);

RENAME TABLE order_product TO basket_product;

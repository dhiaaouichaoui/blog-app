DROP DATABASE IF EXISTS happylife;

CREATE DATABASE happylife;

USE happylife;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  image varchar(255) NOT NULL,
  body TEXT NOT NULL,
  PRIMARY KEY (id)
);



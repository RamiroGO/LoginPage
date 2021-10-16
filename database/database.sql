SHOW DATABASES;
DROP SCHEMA IF EXISTS `database_links`;
CREATE DATABASE IF NOT EXISTS `database_links`;
USE `database_links`;

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions`(
  id INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  password VARCHAR(60) NOT null,
  fullname VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`(
  id INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  password VARCHAR(60) NOT null,
  fullname VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);
/*
-- ALTER TABLE `users` ADD PRIMARY KEY(id);
-- ALTER TABLE `users` MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;
*/
DESCRIBE `users`;
-- LINKS TABLE
DROP TABLE IF EXISTS `links`;
CREATE TABLE IF NOT EXISTS `links` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `fk_user` (`user_id`),
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

SELECT * FROM `database_links`.`links`;

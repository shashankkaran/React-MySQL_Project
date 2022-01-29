CREATE SCHEMA `employeesystem` ;
CREATE TABLE `employeesystem`.`employees` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(60) NOT NULL,
  `age` VARCHAR(40) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `position` VARCHAR(45) NOT NULL,
  `wage` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
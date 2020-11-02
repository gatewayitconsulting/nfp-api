CREATE TABLE IF NOT EXISTS contactForms (
    id                              int     NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    firstName                       VARCHAR(250),
    lastName                        VARCHAR(250),
    email                           VARCHAR(500),
    comment                         VARCHAR(2500)  
) DEFAULT CHARSET=utf8;
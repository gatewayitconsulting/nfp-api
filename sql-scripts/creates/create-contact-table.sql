CREATE TABLE IF NOT EXISTS contactForm (
    id                              int     NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    firstName                       VARCHAR(250)   NOT NULL,
    lastName                        VARCHAR(250)   NOT NULL,
    email                           VARCHAR(500)   NOT NULL,
    comment                         VARCHAR(2500)  NOT NULL
) DEFAULT CHARSET=utf8;
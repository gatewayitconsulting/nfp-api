CREATE TABLE IF NOT EXISTS events (
    id                              int     NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    name                            VARCHAR(250)   NOT NULL,
    category                        VARCHAR(100),
    eventThumbnailImagePath         VARCHAR(1000),
    eventThumbnailImageAltText      VARCHAR(500),
    eventImagePath                  VARCHAR(1000),
    eventImageAltText               VARCHAR(50),
    day                             VARCHAR(10),
    month                           VARCHAR(10),
    year                            VARCHAR(10),
    introDescription                VARCHAR(2000),
    bodyCopy1                       VARCHAR(1500),
    bodyCopy2                       VARCHAR(1500)
) DEFAULT CHARSET=utf8;
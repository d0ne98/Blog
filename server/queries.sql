CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  topic VARCHAR NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  date DATE NOT NULL,
  readtime INTEGER,
  fulltext TEXT NOT NULL
);



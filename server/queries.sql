CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  topic VARCHAR NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  date DATE NOT NULL,
  read_time INTEGER,
  full_text TEXT NOT NULL
);



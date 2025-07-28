CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  date DATE NOT NULL,
  read_time INTEGER,
  full_text TEXT NOT NULL,
  category_id INTEGER REFERENCES categories(id)
);


CREATE TABLE categories(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);


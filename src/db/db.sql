CREATE TABLE Admin (
  id uuid,
  email varchar,
  password varchar(10)
);

CREATE TABLE Food (
  id uuid,
  title varchar
);

CREATE TABLE work (
  id uuid,
  day varchar(25),
  active boolean,
  start varchar(10),
  end varchar(10),
  categoryId uuid
);

CREATE TABLE Categories (
  id uuid,
  title varchar(65),
  description varchar(200),
  location varchar(200),
  google varchar(100),
  yandex varchar(100),
  uploadImage text,
  foodId uuid
);

CREATE TABLE fililal (
  id uuid,
  title varchar(65),
  manzil varchar(100),
  google varchar(100),
  yandex varchar(100),
  categoryId uuid
);

CREATE TABLE fillialWork (
  id uuid,
  day varchar(25),
  active boolean,
  start varchar(10),
  end varchar(10),
  fillialId uuid
);

CREATE TABLE Product (
  id uuid,
  title varchar(65),
  description varchar(150),
  time varchar(65),
  price integer,
  img text,
  payment enum,
  fillialId uuid,
  FoodId uuid
);

ALTER TABLE Food ADD FOREIGN KEY (id) REFERENCES Categories (foodId);

ALTER TABLE Categories ADD FOREIGN KEY (id) REFERENCES work (categoryId);

ALTER TABLE Categories ADD FOREIGN KEY (id) REFERENCES fililal (categoryId);

ALTER TABLE fililal ADD FOREIGN KEY (id) REFERENCES fillialWork (fillialId);

ALTER TABLE fililal ADD FOREIGN KEY (id) REFERENCES Product (fillialId);

ALTER TABLE Food ADD FOREIGN KEY (id) REFERENCES Product (FoodId);
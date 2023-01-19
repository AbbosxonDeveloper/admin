CREATE TABLE Admin (
  id uuid default gen_random_uuid() not null PRIMARY KEY,
  email varchar not null,
  password varchar(10) not null
);

CREATE TABLE Food (
  id uuid default gen_random_uuid() not null PRIMARY KEY,
  title varchar not null
);

CREATE TABLE work (
  id uuid default gen_random_uuid() not null PRIMARY KEY,
  day varchar(25) not null,
  active boolean not null,
  dataStart varchar(10) not null,
  dataEnd varchar(10) not null,
  categoryId uuid not null
);

CREATE TABLE Categories (
  id uuid default gen_random_uuid() not null PRIMARY KEY,
  title varchar(65) not null,
  description varchar(200) not null,
  location varchar(200) not null,
  google varchar(100),
  yandex varchar(100),
  uploadImage text not null,
  foodId uuid
);

CREATE TABLE fililal (
  id uuid default gen_random_uuid() not null PRIMARY KEY,
  title varchar(65) not null,
  manzil varchar(100) not null,
  google varchar(100),
  yandex varchar(100),
  categoryId uuid not null
);

CREATE TABLE fillialWork (
  id uuid default gen_random_uuid() not null PRIMARY KEY,
  day varchar(25) not null,
  active boolean not null,
  dataStart varchar(10) not null,
  dataEnd varchar(10) not null,
  fillialId uuid
);

CREATE TABLE Product (
  id uuid default gen_random_uuid() not null PRIMARY KEY,
  title varchar(65) not null,
  description varchar(150) not null,
  time varchar(65) not null,
  price integer not null,
  img text not null,
  payment text not null,   --Enum
  fillialId uuid not null,
  FoodId uuid
);

ALTER TABLE Food ADD FOREIGN KEY (id) REFERENCES Categories (foodId);

ALTER TABLE Categories ADD FOREIGN KEY (id) REFERENCES work (categoryId);

ALTER TABLE Categories ADD FOREIGN KEY (id) REFERENCES fililal (categoryId);

ALTER TABLE fililal ADD FOREIGN KEY (id) REFERENCES fillialWork (fillialId);

ALTER TABLE fililal ADD FOREIGN KEY (id) REFERENCES Product (fillialId);

ALTER TABLE Food ADD FOREIGN KEY (id) REFERENCES Product (FoodId);
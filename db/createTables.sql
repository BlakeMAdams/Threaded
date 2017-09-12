CREATE TABLE customers (
	id SERIAL PRIMARY KEY,
	first_name TEXT,
	last_name TEXT,
	email TEXT,
	address TEXT,
	city TEXT,
	state TEXT,
	country TEXT,
	zip TEXT,
	phone INTEGER,
	picture TEXT,
	auth_id TEXT   
);

CREATE TABLE orders (
	id SERIAL PRIMARY KEY,
	customer_id INTEGER REFERENCES customers (id),
	clothing TEXT,
	price INTEGER,
	notes TEXT,
	status text,
	order_date date not null default CURRENT_DATE
);

CREATE TABLE materials (
	id SERIAL PRIMARY KEY,
	name TEXT,
	base_color TEXT,
	category TEXT,
	quantity INTEGER,
	cost INTEGER
);

CREATE TABLE clothing (
	id SERIAL PRIMARY KEY,
	category TEXT,
	type TEXT
);

CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	category TEXT,
	type TEXT,
	material TEXT
);

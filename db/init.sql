create table USERS(
    id serial primary key,
    name_first text,
    name_last text,
    username text unique not null,
    password varchar(20) not null,
    email text
)
create table PRODUCTS(
    id serial primary key,
    img text,
    name text,
    category text,
    current_price decimal(4,2)
)
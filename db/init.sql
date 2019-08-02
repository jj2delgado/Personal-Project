create table USERS(
    id serial primary key,
    name_first text,
    name_last text,
    username text unique not null,
    password varchar(70) not null,
    email text
)
create table PRODUCTS(
    id serial primary key,
    img text,
    name text,
    category text,
    current_price decimal(7,2)
)

create table LIST(
id serial primary key,
user_id integer references USERS(id),
type text
);

create table LIST_PRODUCTS(
id serial primary key,
product_id integer references PRODUCTS(id),
list_id integer references LIST(id),
quantity integer
);

create table ORDERS(
id serial primary key,
user_id integer references USERS(id),
ts date not null default current_date;
total decimal(7,2)
);

create table order_products(
id serial primary key,
order_id integer references ORDERS(id),
product_id integer references PRODUCTS(id),
quantity integer,
price_at_purchase decimal(7,2)
);
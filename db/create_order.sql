insert into ORDERS(user_id, total)
values($1, $2);

delete from LIST_PRODUCTS
where list_id = $3;

select * 
from LIST_PRODUCTS lp
join LIST ls 
on ls.id = lp.list_id
join PRODUCTS p
on p.id = lp.product_id
where ls.user_id = $1;
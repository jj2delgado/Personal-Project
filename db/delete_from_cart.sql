delete from LIST_PRODUCTS where product_id = $1;

select * 
from LIST_PRODUCTS lp
join LIST ls 
on ls.id = lp.list_id
join PRODUCTS p
on p.id = lp.product_id
where ls.user_id = $2;
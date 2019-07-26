select * 
from LIST_PRODUCTS lp
join LIST ls 
on ls.id = lp.list_id
join PRODUCTS p
on p.id = lp.product_id
where ls.user_id = $1;


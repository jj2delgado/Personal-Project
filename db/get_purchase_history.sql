select *
from order_products op
join ORDERS o
on o.id = op.order_id
where o.user_id = $1
insert into LIST(user_id, type)
values($1, $2);

select id from LIST where user_id = $1;
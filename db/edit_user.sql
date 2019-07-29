update USERS
set name_first = $2, name_last = $3, email = $4
where id = $1;
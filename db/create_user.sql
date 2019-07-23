insert into USERS(name_first, name_last, username, password, email)
values($1, $2, $3, $4, $5)
returning *;
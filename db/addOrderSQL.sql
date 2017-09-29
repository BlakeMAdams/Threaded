INSERT INTO orders
(customer_id, bag, total, notes, status)
VALUES
($1, $2, $3, $4, 'created')
returning *;

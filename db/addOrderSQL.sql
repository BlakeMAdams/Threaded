INSERT INTO orders
(customer_id, total, notes, status)
VALUES
($1, $3, $4, 'created')
returning *;



UPDATE orders
SET bag = $2
WHERE customer_id = $1 AND total = $3;
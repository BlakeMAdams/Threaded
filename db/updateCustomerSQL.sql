UPDATE customers
SET first_name = $2, last_name =$3, email =$4, address =$5, city =$6, state =$7, country =$8, zip =$9, phone =$10
WHERE id = $1;
INSERT INTO items 
(name, price)
VALUES
($1, $2)
RETURNING*;
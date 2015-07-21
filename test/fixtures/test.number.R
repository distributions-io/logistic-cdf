options( digits = 16 );
library( jsonlite );


mu = 2
s = 0.5
x = c( -5, -2.5, 0, 2.5, 5 )
y = plogis( x, mu,s )

cat( y, sep = ",\n" )

data = list(
	mu = mu,
	s = s,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )

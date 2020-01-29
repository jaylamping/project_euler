import math

fib_a = 1
fib_b = 2
max_value = 4000000
even_nums = []

while fib_b < max_value:
    if fib_b % 2 == 0:
        even_nums.append(fib_b)
    fib_a, fib_b = fib_b, (fib_b + fib_a)

print(sum(even_nums))

def is_multiple(num, multiples: list):
    for multiple in multiples:
        if (num % multiple) == 0:
            return True
    return False

sum = 0
for i, num in enumerate(range(0, 999), start=1):
    if is_multiple(i, (3, 5)):
        sum += i
print(sum)
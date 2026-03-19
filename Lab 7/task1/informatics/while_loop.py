import sys


def problem_a():
    n = int(input())
    i = 1
    while i * i <= n:
        print(i * i)
        i += 1


def problem_b():
    n = int(input())
    i = 2
    while n % i != 0:
        i += 1
    print(i)


def problem_c():
    n = int(input())
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    print(total)


def problem_d():
    n = int(input())
    result = 0
    while n > 0:
        result = result * 10 + n % 10
        n //= 10
    print(result)


def problem_e():
    n = int(input())
    a, b = 0, 1
    while a <= n:
        print(a)
        a, b = b, a + b

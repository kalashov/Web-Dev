import sys
import math


def problem_a():
    a = int(input())
    b = int(input())
    print(math.sqrt(a**2 + b**2))


def problem_b():
    a = int(input())
    b = int(input())
    print(a + b)


def problem_c():
    a = int(input())
    b = int(input())
    print(a * b / 2)


def problem_d():
    n = int(input())
    print(n - 1)
    print(n + 1)


def problem_e():
    n = int(input())
    k = int(input())
    print(k // n)
    print(k % n)
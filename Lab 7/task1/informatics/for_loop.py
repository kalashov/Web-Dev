import sys


def problem_a():
    n = int(input())
    print(sum(i**2 for i in range(1, n + 1)))


def problem_b():
    n = int(input())
    result = 1
    for i in range(1, n + 1):
        result *= i
    print(result)


def problem_c():
    a = int(input())
    b = int(input())
    print(b - a + 1)


def problem_d():
    a = int(input())
    b = int(input())
    result = []
    for i in range(a, b + 1):
        if i % 2 == 0:
            result.append(str(i))
    print(' '.join(result))


def problem_e():
    n = int(input())
    print(2 ** n)


def problem_f():
    n = int(input())
    for i in range(1, n + 1):
        print('*' * i)


def problem_g():
    n = int(input())
    print(n * (n + 1) // 2)


def problem_h():
    n = int(input())
    a, b = 0, 1
    for _ in range(n):
        print(a, end=' ')
        a, b = b, a + b
    print()


def problem_i():
    n = int(input())
    count = 0
    for i in range(1, n + 1):
        if n % i == 0:
            count += 1
    print(count)


def problem_j():
    n = int(input())
    for num in range(2, n + 1):
        divisor_sum = sum(i for i in range(1, num) if num % i == 0)
        if divisor_sum == num:
            print(num)


def problem_k():
    n = int(input())
    nums = list(map(int, input().split()))
    print(min(nums))


def problem_l():
    n = int(input())
    nums = list(map(int, input().split()))
    print(max(nums))


def problem_m():
    s = input()
    if s == s[::-1]:
        print("YES")
    else:
        print("NO")
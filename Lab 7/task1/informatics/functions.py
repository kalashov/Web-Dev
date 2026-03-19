import sys
import math


def min4(a, b, c, d):
    return min(a, min(b, min(c, d)))


def problem_a():
    nums = list(map(int, input().split()))
    print(min4(nums[0], nums[1], nums[2], nums[3]))


def segment_length(x1, y1, x2, y2):
    return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)


def problem_b():
    x1, y1, x2, y2 = map(float, input().split())
    print(segment_length(x1, y1, x2, y2))


def gcd(a, b):
    while b:
        a, b = b, a % b
    return a


def problem_c():
    a, b = map(int, input().split())
    print(gcd(a, b))

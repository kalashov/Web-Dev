import sys


def problem_a():
    nums = list(map(int, input().split()))
    print(' '.join(str(nums[i]) for i in range(0, len(nums), 2)))


def problem_b():
    nums = list(map(int, input().split()))
    result = []
    for i in range(1, len(nums)):
        if nums[i] > nums[i - 1]:
            result.append(str(nums[i]))
    print(' '.join(result))


def problem_c():
    nums = list(map(int, input().split()))
    print(min(nums))
    print(max(nums))


def problem_d():
    nums = list(map(int, input().split()))
    count = sum(1 for x in nums if x > 0)
    print(count)


def problem_e():
    nums = list(map(int, input().split()))
    print(' '.join(str(x) for x in reversed(nums)))


def problem_f():
    nums = list(map(int, input().split()))
    seen = set()
    result = []
    for x in nums:
        if x not in seen:
            seen.add(x)
            result.append(str(x))
    print(' '.join(result))


def problem_g():
    nums = list(map(int, input().split()))
    result = [x for x in nums if x != 0] + [0] * nums.count(0)
    print(' '.join(str(x) for x in result))
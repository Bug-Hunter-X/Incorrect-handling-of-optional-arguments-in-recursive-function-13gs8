# Incorrect handling of optional arguments in recursive function

This repository demonstrates a bug in a recursive JavaScript function that incorrectly handles optional arguments. The function `foo` should return different values based on the presence of the second argument, `b`. However, the current implementation does not correctly differentiate between the case when `b` is provided and when it is omitted, leading to incorrect results.

## Bug Description

The function `foo` is intended to work as follows:

- If `b` is provided, it recursively calculates `a + foo(a - 1, b)`, effectively summing up `b` from 1 to `a`.
- If `b` is not provided, it recursively calculates `a + foo(a-1)`, effectively calculating the sum from 1 to `a`.

However, the implementation currently fails to correctly interpret the case where `b` is omitted.  It defaults `b` to the value of `a` in this case rather than explicitly summing to `a`.

## Solution

The solution involves explicitly handling the case where `b` is undefined, using different recursive calls depending on the presence or absence of `b`.


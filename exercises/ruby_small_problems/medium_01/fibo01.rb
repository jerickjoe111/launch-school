def fibonacci(n)
  return 1 if n <= 2

  fibonacci(n - 1) + fibonacci(n - 2)
end
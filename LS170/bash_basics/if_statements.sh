#!/usr/bin/bash

# Single conditions

# Output a string if it is longer than 0.
string='This string is longer than 0 characters'

if [[ -n $string ]]
then
  echo $string
fi 

# Compare two integers

integer_a=10
integer_b=10

if [[ $integer_a -eq $integer_b ]]
then
  echo The two integers are equal
fi

# Output 'File exists' if the file hello_world.sh exists.

if [[ -e ./hello_world.sh ]]
then
  echo 'This file exists'
fi


# Multiple conditions

# Nested if statements

integer=4

if [[ $integer -ne 2 ]]
then
  if [[ $integer -eq 4 ]]

  then
    echo 'The integer is 4!'
  fi
fi

# Two conditional branches with if and else

integer=19

if [[ $integer -eq 10 ]]
then
  echo 'The integer is 10!'
else
  echo 'The integer is not 10!'
fi

# Three conditional branches with if, elif, and else

integer=30

if [[ $integer -eq 10 ]]
then
  echo 'The integer is 10!'
elif [[ $integer -eq 19 ]]
then
  echo 'The integer is 19!'
else
  echo 'The integer is not 10 nor 19!'
fi

# Matching two conditions using && (and)

integer=19

if [[ $integer -gt 10 ]] && [[ $integer -lt 30 ]]
then
  echo 'The integer is greater than 10 and less than 30!'
fi

# Matching one of two conditions using || (or)

integer=19

if [[ $integer -gt 10 ]] || [[ $integer -lt 30 ]]
then
  echo 'The integer is greater than 10 or less than 30!'
fi

# Negating conditions using ! (not)
integer=1

if [[ ! ($integer -eq 100) ]]
then
  echo 'The integer is not 100!'
fi

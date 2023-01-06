#!usr/bin/bash

# while loop

counter=1
max=10

while [[ $counter -le $max ]]
do
  echo Counter is $counter!
  ((counter++))
done
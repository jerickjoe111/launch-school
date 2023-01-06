#!usr/bin/bash

# until loop
counter=1
max=10

until [[ $counter -gt $max ]]
do
  echo Counter is $counter!
  ((counter++))
done

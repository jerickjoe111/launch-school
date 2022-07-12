NUMBER_OF_GRADES = 3

def get_grade(score_a, score_b, score_c)
  case average = (score_a + score_b + score_c) / NUMBER_OF_GRADES
  when (90..100) then "A"
  when (80..89)  then "B"
  when (70..79)  then "C"
  when (60..69)  then "D"
  when (0..59)   then "F"
  end
end


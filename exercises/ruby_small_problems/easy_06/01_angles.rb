SEXAGESIMAL_DEGREES = 360
SEXAGESIMAL_SUBDIVISIONS = 60

def dms(decimal)
  decimal %= SEXAGESIMAL_DEGREES

  degrees = decimal.to_i
  minutes = (decimal % 1).round(3) * SEXAGESIMAL_SUBDIVISIONS
  seconds = (minutes % 1).round(3) * SEXAGESIMAL_SUBDIVISIONS

  format(%(#{degrees}°%02d'%02d"), minutes, seconds)
end

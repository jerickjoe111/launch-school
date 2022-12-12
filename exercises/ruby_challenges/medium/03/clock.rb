class Clock
  MINUTES_PER_HOUR = 60
  HOURS_PER_DAY = 24

  attr_reader :minutes, :hours

  def self.at(hours, minutes=0)
    new(hours, minutes)
  end

  def initialize(hours, minutes)
    @hours = 0
    @minutes = 0
    self.minutes += (hours * MINUTES_PER_HOUR) + minutes
  end

  def ==(other_clock)
    to_s == other_clock.to_s
  end

  def +(minutes)
    new_clock = self.dup
    new_clock.minutes += minutes
    new_clock
  end

  def -(minutes)
    new_clock = self.dup
    new_clock.minutes -= minutes
    new_clock
  end

  def to_s
    format(
      "%02i:%02i",
      hours,
      minutes
    )
  end

  def minutes=(minutes)
    hours, minutes = minutes.divmod(MINUTES_PER_HOUR)
    @hours += hours % HOURS_PER_DAY
    @hours %= HOURS_PER_DAY
    @minutes = minutes
  end
end

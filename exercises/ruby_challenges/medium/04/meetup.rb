require 'date'

class Meetup
  DAYS_PER_WEEK = 7
  TEENTHS = (13..19).freeze

  WEEKDAYS = {
    'sunday' => 0,
    'monday' => 1,
    'tuesday' => 2,
    'wednesday' => 3,
    'thursday' => 4,
    'friday' => 5,
    'saturday' => 6
  }.freeze

  SCHEDULE = {
    'first' => 0,
    'second' => 1,
    'third' => 2,
    'fourth' => 3,
    'fifth' => 4
  }.freeze

  attr_reader :year, :month

  def initialize(year, month)
    @year = year
    @month = month
  end

  def day(weekday, schedule)
    date = find_first_wday(weekday)

    if schedule.match?(/first/i) then date
    elsif schedule.match?(/teenth/i) then find_teenth_wday(date)
    elsif schedule.match?(/last/i) then find_last_wday(date)
    else find_nth_wday(date, SCHEDULE[schedule.downcase])
    end
  end

  private

  def find_first_wday(weekday)
    weekday = WEEKDAYS[weekday.downcase]

    date = Date.civil(year, month, 1)
    date += 1 until date.wday == weekday

    date
  end

  def find_teenth_wday(date)
    date += DAYS_PER_WEEK until TEENTHS.include?(date.day)
    date
  end

  def find_last_wday(date)
    date += DAYS_PER_WEEK until date.month != month

    date - DAYS_PER_WEEK
  end

  def find_nth_wday(date, schedule)
    date += DAYS_PER_WEEK * schedule
    date.month == month ? date : nil
  end
end

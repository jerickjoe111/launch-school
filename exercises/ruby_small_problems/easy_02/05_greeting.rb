print "What is your name? "
name = gets.chomp.strip

name.end_with?("!") ? puts("HELLO #{name.upcase}. WHY ARE WE SCREAMING?") : puts("Hello #{name}.")

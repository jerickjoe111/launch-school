#module `UserInterface` 
- prompt format
- `enter to continue`
- ask yes/no questions
- ask user name
- ask weapon choice


#class `RPSGame`
  includes UserInterface!
- main game engine | Human
- `play`           | Computer
- contains rules   | Display
                   | History

#class `History` < `RPSGame`
- keeps track of all rounds | Human
- displays rounds           | Computer
               
#class `Player`
 - has a `name`
 - has a `move`
 - has a `score`
 - can display score and move
 - can reset score                  

#class `Human` < `Player`
  includes `UserInterface`!
- can compare its score to the computer's

#class `Computer` < `Player`
 - chooses random weapon

#class `Display`
  includes `UserInterface`!
 - displays messages for:
      - welcome
      - game rules
      - goodbye
      - round_winner
      - game_winner               
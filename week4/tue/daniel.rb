# Daniel is a lackadaisical teenager. In conversation, his responses are very limited.
#
# He answers 'Sure.' if you ask him a question.
# He answers 'Whatever.' if you tell him something.
# He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
# He says 'Fine. Be that way!' if you address him without actually saying anything.
#
# Write code in ruby so that you can have an interactive conversation with Daniel.
# Make sure you include some testing in order to verify your code.


# gets, get string is the opposite of puts put string.
#
# Notice that when you type "Something" and then hit enter, you get the string "Something\n"



loop do
#use include to check if there is ? for question or statement
  puts 'Ask Daniel a Question'
  question = gets
  #instead of gsub, can use tr.
  leet_question = question.gsub(/[aeio]/, 'a' => 4, 'e' => 3, 'i' => 1, 'o' => 0)

  puts 'Tell Daniel something'
  tell = gets
  leet_tell = tell.gsub(/[aeio]/, 'a' => 4, 'e' => 3, 'i' => 1, 'o' => 0)


  if question.length > 0 && question != question.upcase

    puts 'sure'

    elsif tell.length > 0  && tell != tell.upcase
      puts 'Whatever'

    elsif question == question.upcase || tell == tell.upcase
      puts 'Woah, chill out!'

  end

  break
end


# Extensions
#
# l33t sP34k
#
# Daniel, inspired by the 90s, is bringing back "l33t sP34k", and
# he'll teach you how to do it. Start any sentence with "Bro, ",
# and he'll translate the rest of it into l33t sP34k for you.
#
# In brief:
#
# Several vowels are always replaced with numbers: a = 4, e = 3, i = 1, o = 0
# Words that start with a consonant start with lower case
# Consonants after the first letter alternate upper and lower case,
# except the alternation starts over with lowercase after a digit (ex: sCh00l)

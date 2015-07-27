---
title: "Announcing my latest side project: Rocket League Replays!"
---

Website: [http://www.rocketleaguereplays.com/](http://www.rocketleaguereplays.com/)

For those of you who don't know, [Rocket League](http://rocketleague.psyonix.com/) is a little indie game made by a company called Psyonix.  The game is best described as football with rocket-powered cars.  It's a lot of fun and I've personally sunk a very large amount of hours into it over the last couple of weeks.  One of the features of the game is a replay system, where you can save a 'replay' of the match at the end of the game and watch it back at a later date. I wanted to create a site which made analysing and sharing replays easy, so that's what I set out to do.

## Byte level parsing

![Replay file data](http://i.imgur.com/NjhwTl4.jpg)

At a first glance of the Rocket League replay format it looks like a jumbled mess of data with some random strings dotted around, and unless you have a real replay parser that's pretty much what it is.  To be able to pull data out from this file I had to get down to the byte level and figure out how the format works and how it changes across different games played by different people.

My solution to this problem was a [Google Docs Spreadsheet](https://docs.google.com/spreadsheets/d/1aRSOJM9-0qKcRN1VS2jfFUgtA2AaJBv2R_l2xnsCivg/edit?usp=sharing).

![Google Sheets Screenshot](http://i.imgur.com/K4RFEXi.jpg)

The information I had was split into two parts, known data and unknown data.  The known data was information such as the final score of the game, or the number of players on each team.  With this known data I was able to look through the hex data and find out which values correlated, this proved to be an extremely effective strategy and the majority of the information was discovered this way.  With a string such as the one in the image above I knew which bytes changed and therefore how to write my regular expressions to suit.  In this case the entire string until column AJ is static, meaning I just needed to search for that string and then the next byte would be my score. Simple.  Unfortunately this wasn't the case for all of my data, so I painstakingly put together sheets after sheets of hex data and combed through looking for patterns until I was able to parse the entire metadata header from the replay file.

I then took my collection of regular expressions and created a parser, this is essentially a Python class which takes a file path, reads it and searches through it using each of the regular expressions.  This parser was then integrated into a standard Django application - more precisely into the Model `save()` function and the Form `clean()` function.  This allowed me to parse the replay files as soon as they are uploaded and store each of the parsed values into the model directly.  Fortunately the parser is fast enough that it doesn't cause too many issues running in at run-time, though I imagine it may not work at scale and might require splitting it out into a Celery task, or something similar.

All-in-all it was a fun project to work on, I've got plenty of ideas of how to improve it and the data I would like to pull from it.  Hopefully the Rocket League community will get behind it and make good use of it!

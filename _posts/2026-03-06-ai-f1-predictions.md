---
title: "AI-Powered F1 Predictions"
---
I love the new generative AI stuff.  I love Claude, I love [GitHub CoPilot CLI](https://github.com/features/copilot/cli), and I also secretly also love OpenClaw. No wait - come back!

I love exploring the boundaries of what the technology is capable of. That means throwing it at the hard problems I need to solve at work, or taking on the restructuring of my BTRFS pool after I replaced Windows with Bazzite. In this case, however, I decided to see how it would get on with another thing I love - Formula 1.

I'm part of a group of people who participate every year in a predictions tournament. Each race, we are given the names of 4 drivers and have to predict their finishing positions. It's a bit of fun, there's no money involved - though there is a trophy for the winner. Generally speaking, my wife and I tend to do reasonably well; last year, we finished 6th of 38, having led the tournament for 5 of the races, and being fairly close to the leaders the rest of the time.

This year, we're taking part again. But I'm also interested to see how the latest frontier models will fare. 

I'm fortunate to have access to GitHub CoPilot Enterprise through work, so I have access to a lot of the latest models. Additionally, I have access to Google's Gemini Pro models through their web interface. 

So, I've decided that this Formula 1 season - one that involves a new set of regulations, another team on the grid, and another rookie - will be one in which I exercise the intelligence of AI. I'm not going to submit their predictions in place of my own, as the tournament is very much a human-centric endeavour - one where AI isn't welcome.

Instead, I'm going to take the same subset of drivers given to us in the competition and ask AI where it believes they will place. One additional prediction we make in the competition is "most places gained" - this is a constant throughout the competition, and allows us to choose any driver on the grid as the person that we believe will make up the most places throughout the race. If multiple drivers make up the same number of places gained, they all count as winners.

## Methodology

My plan is to use the latest, most intelligent frontier model from each of the three leading AI companies: Google, Anthropic and OpenAI. 

For race 1 in Melbourne, Australia, this means Gemini 3.1 Pro, Claude Opus 4.6, and GPT-5.3-Codex. (GPT-5.4 was released after I asked 5.3-Codex for its predictions).

For Google Gemini, I will use the "Deep Research" option in the Web UI. For Claude and GPT, I will use the `/research` command in GitHub CoPilot CLI. If I get access to Gemini Pro via the GHCP CLI, I will switch to it to make them more consistent.

Each model will be given the same prompt, in the format of:

> It's the 2026 Australia (Melbourne) Formula 1 Grand Prix this weekend. In what positions do you believe Lindblad, Piastri, Perez, Bottas will finish? You can give the same answer for multiple drivers, you're trying to be closest to the actual result. Additionally, of all the drivers on the grid, who will get the most overtakes?


## Race 1 - Australia

So, let's get started - who are the drivers, and what are the predictions for Australia?

|                           | Lindblad | Piastri | Perez | Bottas | Most places gained |
| ------------------------- | -------- | ------- | ----- | ------ | ------------------ |
| Google Gemini 3.1 Pro     | 13       | 4       | 17    | 18     | Verstappen         |
| Anthropic Claude Opus 4.6 | 12       | 3       | 18    | 20     | Verstappen         |
| OpenAI GPT-5.3-Codex      | 11       | 4       | 14    | 17     | Perez              |

In general, they're fairly closely positioned - though clearly GPT-5.3 believes Cadillac will fare slightly better compared to the other models. No-one had the home favourite as a winner, with Gemini saying "data from the Bahrain tests indicates that the reigning Constructors' Champions do not possess the overwhelming pace advantage they enjoyed twelve months prior" - something that's still to be seen (Piastri was 2 tenths ahead at the end of FP2 this morning).

## Putting my money where Gemini's mouth is

As a fun extra to the predictions competition, I thought I'd ask Gemini to look at the betting markets for both the Australian Grand Prix and the wider season as a whole. Given £20 for the race and £30 for the season, what bets would it place?

Its picks for the race were as follows:

1. £8 on George Russell to Win the Race (Odds: 13/8)
2. £8 on Charles Leclerc for a "Podium Finish" (Odds: 5/6)
3. £4 on Valtteri Bottas "Not To Be Classified" (Odds: 8/5)

Potential returns: £23 + £14.67 + £10.40 = £48.07

It felt as though the pre-season testing went well for Mercedes, especially given the number of laps they completed. It believed the paddock suggestions that they were sandbagging and that they had more to offer on race day. It was also impressed by Ferrari's engine, which features a different approach to the turbo (smaller than everyone else's), and believed that their one-lap pace in qualifying will be hard to beat, as well as their ability to beat everyone off the line. 

For poor old Bottas, it doesn't think much of his chances, believing their lack of aerodynamic downforce will result in them starting at the back of the grid then not making much progress overall - this accords somewhat with its earlier prediction of a P18 - though you'd need quite a few other DNFs to come first to make that happen, though Aston Martin might be making a good case for being two of those.

Then for the season overall, it went for:

1. £10 on Mercedes to win the Constructors' Championship (Odds: 6/5)
2. £10 on George Russell to win the Drivers' Championship (Odds: 2/1)
3. £5 on the Season H2H Treble: Leclerc to beat Hamilton, Alonso to beat Stroll & Russell to beat Antonelli (Odds: 4/5)
4. £5 on Mercedes to Win 10+ Races & Ferrari to Win 5+ Races (Odds: 13/2)

Potential returns: £22 + £30 + £9 + £37.50 = £98.50

Continuing on the Mercedes engine hype-train, it took it one step further, tipping Mercedes and George Russell as being the Constructors' and Drivers' Champions for the 2026 season, and doing it in some style - the 2024 Season, won by McLaren, saw them win only 6 Grands Prix. Russell, as the overall winner, isn't a particularly controversial prediction - indeed, it accords with the betting markets as we go into the first Grand Prix weekend of the year.

On the head-to-head front, Gemini thinks Leclerc's got the pace to beat Hamilton overall, as shown at Bahrain testing. Over at Aston Martin, it prefers Alonso's chances over Stroll across the season - if the former doesn't give up on the Honda engine before the last race. In conjunction with the prediction of him winning the season as a whole, Gemini thinks Russell's experience advantage will give him the edge over Antonelli, who is entering his second season in Formula 1.

Finally, when it looks at the overall season, it thinks we're in for a two-horse race between Mercedes and Ferrari, with them separating themselves from the likes of McLaren and Red Bull. As a McLaren fan, it's hard to accept this prediction, and I most certainly hope they prove Gemini wrong!

# Looking ahead

My plan is to make a new post with the results each race weekend, including the individual and overall scores. I'll have the new predictions made before the start of Free Practice 1 each race, even if I don't get round to posting them until the weekend is already underway.

I do plan to keep the betting going; £20 a race is about right for having fun with it and not worrying too much. Who knows, perhaps I'll make back enough money to pay for OpenClaw's OpenRouter usage!
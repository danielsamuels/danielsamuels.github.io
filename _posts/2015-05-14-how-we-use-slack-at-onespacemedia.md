---
title: How we use Slack at Onespacemedia
canonical: http://www.onespacemedia.com/news/2015/may/14/how-we-use-slack-onespacemedia/
---

### How we use Slack at Onespacemedia

Since joining [Slack](https://slack.com/r/025q26m3-025rtx8g)
in early March of 2014 it’s grown to be the central communications system at
[Onespacemedia](http%3A%2F%2Fwww.onespacemedia.com%2F), even taking
over email. Over the years we tried various methods of communication, none of
which ever really took off.

But there was something different about Slack.

As soon as we joined and were guided through the basics by Slackbot we knew we
had found something special. Over the next few months we started making it our
own, adding custom slash commands, emojis and integrations with the other day-
to-day systems we use. What’s great about Slack is that it has benefits for
every member of an organisation, not just for managers, not just for
developers, but everyone in every role can gain something from using Slack.

### #developers

The development team are the dominant users of our Slack service with the team
gleaning an immense amount of value from the third-party integrations which
are available to us. Interestingly enough, whether a service integrates with
Slack or not has actually become a very important selling point for us — we
don’t want notification emails, we don’t want to have to visit a website to
get status updates — we want everything in one place and for us, that one
place is in Slack.

The current structure for the development team looks something like this:

  * #commits — The hive of automation. [Bitbucket](https://bitbucket.org/onespacemedia/), [Github](https%3A%2F/github.com/onespacemedia/), [TravisCI](https://travis-ci.org/onespacemedia/), [Coveralls](https://coveralls.io/r/onespacemedia/) and anything else to do with our code goes in here. While this channel is typically muted to stop excessive notifications, it’s still extremely useful to be able to keep track on who is working on what, which builds are passing or failing and how code coverage is looking across various projects.
  * #developers — The primary channel for development team discussion. Whether it be bug fixing, problem solving or link sharing, this is where it’s done. Probably the most active channel on our account, often filled with imgur or autotrader links.
  * #sentry — Website error notifications. If a message appears in this channel, something has gone wrong and [Sentry](https://getsentry.com/welcome/) allows us to dig into the issue immediately to help track down and resolve any problems. Thankfully this is a low activity channel.
  * #development-resources — This is the channel the development team use when they find something cool and want to show it to the rest of the team. Links in here have usually been posted in #developers already, but with the volume of conversation happening they can often get lost, so #development-resources serves as a team-wide bookmarking system.
  * #uptime-monitor — We use [Uptime Robot](https://uptimerobot.com/) to monitor the status of our websites and have a dedicated channel for it’s reports. Unfortunately we do seem to get a lot of false positives from Uptime Robot so it often feels like the boy who cried wolf.

### #designers

One of the great features of Slack is it’s image and website preview feature —
if you post a link to a website or upload a file it will expand the link and
show you a preview of the contents. InVision have taken advantage of this
feature in [a very clever way](https://www.invisionapp.com
/new-features/26/live-embed-bring-your-designs-into-trello-basecamp-
slack-and-more): by sharing a link to a file you will be shown a live preview
of how that file looks without having to leave Slack. This method of working
allows the design team to discuss and iterate over a design without having to
leave their desks.

It’s not just the design team using the design channel though, everyone who
works at Onespacemedia has an eye for design and any interesting blog
articles, nice looking websites or cool interactions get shared into the
design channel providing a constant source of design inspiration and a
catalyst for new ideas.

The design team don’t use any third-party integrations within Slack — it seems
most of the integrations available are primarily geared towards developers or
support staff.

### #social

Individually, the Onespacemedia team members browse a lot of webpages every
day and within some of those pages is some really great content. We utilise
Slack to collate those articles and get them queued up for sharing via our
[social media channels](https://twitter.com%2Fonespacemedia).
The social media team make use of the
[IFTTT](https://ifttt.com/) integration to remind people to
post any interesting articles into the channel. In addition to putting content
out, the team also makes use of the Twitter and Mailchimp integrations to keep
track of social interactions, newsletter signups and newsletter sends.

  * #social — The article aggregation channel. Contains the best of the web, the thought-provoking articles and the latest in industry news.
  * #twitter-feed — Our social interaction feed, contains information about @mentions and retweets.
  * #video — A newer channel designed to contain discussion around video related content such as team member opinions on current news topics or anything else they want to talk about.

### #projects

Whenever we start a new project, one of the first steps is to create a Slack
channel for it. These public channels contain all of the discussion around a
project and are the go-to place for finding out information, asking questions
and viewing related resources.

### #general

Outside of in-team, social media and project channels we also have various
social channels used for sharing random links or discussing certain topics.

  * #general — Used for general chat about anything and everything, typically contains a lot of links to random webpages that people have found interesting, or images that they’ve found in the depths of reddit.
  * #attendance — Used for reporting if you’re heading out for a bit, or going to be late due to the A14.
  * #bakeoff — The company baking competition. Once a month someone has the challenge of baking something and bringing it in for the team to judge. We’ve had bread, cakes, brownies, cakes and some more cakes. We rate each item against a few different metrics; Look, Taste and Difficulty. Currently in the lead is Chiara.
  * #office — Used for request office supplies such as pens, notebooks and rubber ducks.
  * #sport — Contains chat about anything sport related.

In addition to all of this, we also have a bunch of custom slash commands
which allow us to do things like get the definition of a word, link to a
subreddit or generate a excuse for why something isn’t working. These slash
commands were recently open sourced and released as [Slack Slash Commands as a
Service](https%3A%2F%2Fsscaas.eu%2F).

Slack really has revolutionised the way we work and communicate at
Onespacemedia. By bringing all of our tools and all of our team into one
centralised location it allows us to be more efficient with our time and more
focused with our work. Having conversations happening inside Slack means you
can catch up in your own time, you don’t feel like you’re missing out on
what’s happening and you can be less distracted by what’s going on around you.
We look forward to seeing what the Slack team do in the future and are looking
out for more exciting integrations in the future.

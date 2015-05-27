---
title: "Software Spotlight: Sublime Text"
canonical: http://www.onespacemedia.com/news/2014/jun/20/software-spotlight-sublime-text/
comments_disabled: true
---

In this episode of Onespacemedia’s ‘Tools of the Trade’ series, Lead Developer
[Daniel Samuels](http://www.onespacemedia.com/about/our-people/daniel-samuels)
and Head of Product [Thomas Rumbold](http://www.onespacemedia.com/about/our-people/thomas-rumbold)
talk about why Sublime Text is a vital weapon in any software developer's arsenal.


All of the developers at Onespacemedia use Sublime Text. It’s a fantastic,
lean text editor with a simple UI which is packed full of great features -
many of which really help to speed up our development workflow. However, the
real power under Sublime’s hood comes from its vast collection of plugins and
settings. Take a look at how our team are using some of Sublime’s best
features, plugins, settings and shortcuts to put our coding environments into
overdrive.

### Daniel Samuels - Lead Developer

I’ve only started to use Sublime in the last few years - before then I was
using Textmate. However, at the time I was having some serious issues with
writing to files over a local network. It would freeze up as it tried to scan
the entire folder structure and it got to the point where I just couldn’t get
anything done, so I knew I had to make a change. Sublime was still fairly new
at that point (even though it was version 2) but it was starting to gain
momentum - maturing into a editor worthy of succeeding Textmate. Throughout
the years I’ve refined my configuration and stripped out built-in plugins
which weren’t needed and it’s left me with a lean, fast, efficient platform to
work from.

#### Config

So, [here’s my
config](https://gist.github.com/danielsamuels/53ebcb34d4e9a7b4742f).

There’s one thing I haven’t been able to change since switching from Textmate
and that’s the Blackboard theme - I adore it and I don’t expect to ever change
it, it’s just that good. There’s a bunch of boring stuff in here, but here’s
some of the key changes:

  * **Font face**: I’m using [Inconsolata](http://levien.com/type/myfonts/inconsolata.html), a font designed for code. It was a tough choice changing my font, especially as I had used Monaco for many years before, but Inconsolata seemed like a very good replacement for it.
  * **Highlight** **line**: I’m not sure how anyone can use a text editor without this, it’s essential to keep track of where you are in your code.
  * **Save on focus lost**: This is a very useful setting, especially when working on HTML files - you can make a change, Cmd+Tab back to Chrome, refresh and it’s saved in the time it took you to switch context. It’s also great for making sure you don’t lose work, saving your SCSS files so they get rebuilt and saving me from hitting Cmd+S every 10 seconds (although I still do...).
  * **Scroll past end**: Ever been working on a file and the code you’ve been writing has been sitting right at the bottom of your screen, frustrating you? I was in that situation and it annoyed me, but along came scroll_past_end and saved the day. I don’t know what I would do without it.

There are 3 settings which are useful for keeping code consistency, especially
when conforming to PEP8:

  * **Ensure newline at EOF**: This one is simple - if there isn’t a newline at the end of your file when you save, it adds one. (W292)
  * **Translate tabs to spaces:** A pretty obvious one to Python developers, spaces is the preferred indentation method.
  * **Trim trailing whitespace on save**: Nothing like highlighting code and seeing 80 blank spaces dotted all over the place, this fixes that for us.

#### Plugins

I don’t have as many plugins as I used to, but here are the ones worth
mentioning:

  * **[Package Control](https://sublime.wbond.net/)**
  * **[Anaconda](https://sublime.wbond.net/packages/Anaconda)**: Makes Sublime awesome for Python development, adding autocomplete, IDE features, PEP8 / Pylint checks.
  * **[Djaneiro](https://sublime.wbond.net/packages/Djaneiro)**: The main thing I use this for is the syntax highlighting in templates.
  * **[Emmet](https://sublime.wbond.net/packages/Emmet)**: The fastest way to write HTML.
  * **[GitGutter](https://sublime.wbond.net/packages/GitGutter)**: An inline git diff, useful for seeing what has been changed.
  * **[Gutter Color](https://sublime.wbond.net/packages/Gutter%20Color)**: A nice plugin when you’re writing CSS, allows you to see what colours your hexes represent.
  * **[SideBarEnhancements](https://sublime.wbond.net/packages/SideBarEnhancements)**: One of the more mandatory plugins for Sublime, adds a whole host of features to the sidebar, hard to live without.

### Thomas Rumbold - Head of Product

A lot of what I do at Onespacemedia is to do with system specification, client
liaison, project management and trying to keep the communication moving
quickly between the development team and our clients. I joined the team as a
developer though - so although recently I’ve been less hands on with code,
there are a few, more general things that I think are worth mentioning that
make Sublime our obvious choice.

#### It’s very fast and lightweight
Sublime Text is fast. You can typically open a complex project in under ten seconds and get to work quickly. Based on previous experience, some IDE’s take up to a minute to boot a project with lots of moving parts. That gets very annoying very quickly (particularly if you’re switching around throughout the day). Sublime smokes the competition.

#### It’s easy
In a general sense, Sublime is easy to use and easy to customise. Working across projects is made simple by some great features and there are a stack of great plugins that help you keep your workflow fast. You can integrate version control plugins, language specific assistance and it’s got a rich collection of settings that lets you configure it exactly as you like it.

#### It looks awesome
Plainly put, it looks awesome. The vanilla installation looks great but it’s also easy to theme. If you’re staring at code for 8 hours a day, that makes a real difference.

#### It’s cross compatible
Sublime is compatible with Windows, Mac, and Linux. Although we’re a Mac house there’s value in this - in the case we ever need to fire up another machine that runs a different OS, we can still use our beloved Sublime. Little things like this helps keep us moving and that’s always something we like.

#### It has great shortcuts
There are lots of great shortcuts in Sublime that allows you to hack up your code, move it around, duplicate parts, find files and switch around between projects. This sort of stuff is really useful because once you’ve learnt them, you can keep your concentration focused on solving problems. In fact, they’re so valuable that we’ve included some of the best in the next section.

### Shortcuts

Sublime shortcuts are awesome. We’ve put together some of our favourites below
- lots of these we use heavily all day and actively contribute to the speed of
our development process. (It’s probably worth noting that these are Mac
shortcuts!)

  * **Cmd+Shift+D:** Duplicate selection (or line if nothing is selected)
  * **Cmd+D:** Select the next occurrence of the selected text.
  * **Cmd+Ctrl+G:** Select all occurrences of the selected text.
  * **Cmd+[ and Cmd+]:** Change indentation of selection (or line if nothing is selected)
  * **Cmd+[0-9]:** Change tab.
  * **Cmd+Shift+W:** Close project (different to Cmd+W in that Cmd+W won’t do anything when there are no open tabs)
  * **Cmd+Ctrl+P:** Switch between projects.
  * **Cmd+Ctrl+Up:** Move line up.
  * **Cmd+Ctrl+Down:** Move line down.
  * **Cmd+/:** Comment/uncomment.
  * **Cmd+Shift+F:** Search an entire project.
  * **Cmd+Opt+F:** Find &amp; Replace
  * **Cmd+P:** This is awesome. It basically provides a dropdown that lets you search your entire project for a certain file by keyword and dynamically returns results with their whole path. It makes finding files and code across your project very swift indeed!
  * **Cmd+R:** Want to get around a CSS, JS or Python file quickly? Cmd+R is the key. Use partial word lookups to get to where you need to be quickly and easily.

### In closing

Hopefully you’ve enjoyed this insight into our use of Sublime Text at
Onespacemedia. If we’ve missed a great shortcut, plugin or need to specify
something awesome in our settings, please let us know in the comments below
(but if you’re going to suggest that we use Vim or Emacs, don’t bother!).
Having said that, if anyone has actually found out how to exit vim, please let
us know.



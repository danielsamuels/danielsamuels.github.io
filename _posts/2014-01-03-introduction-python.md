---
title: "An introduction to Python"
canonical: http://www.onespacemedia.com/news/2014/jan/3/introduction-python/
comments_disabled: true
---

I started learning how to program at the age of 14 and worked as a freelance
programmer while still at school. Throughout my career I have learned a wide
variety of languages but none of them have been as fun or as easy to learn as
Python. With an extensive standard library and an enthusiastic community
providing 3rd party libraries it's easy to write the code you need to get the
outcome you desire. I've launched over 20 projects written in Python while at
Onespacemedia, as well as taking part in various communities and contributing
code to open source projects.

## Introduction

Python is a free and open source programming language which is extremely
popular within the technology community with individuals and organisations
using it for projects large and small, on the desktop and on the web. It has a
simple syntax which is easy to learn, a standard library which contains nearly
every utility you will ever need and a supporting repository of libraries for
everything else. Python is able to run on most operating systems and Linux
distributions generally come with it pre-installed or available from their
respective package managers. In this tutorial we're going to take a look at
some of the basic concepts of programming and how they are used in Python
applications.

To begin writing Python open up a Terminal and type `python`. If Python is
installed correctly, it will load up into the interactive shell, this is a
full Python environment which allows you to write and run any Python code in
the same way you can with a .py file. If you didn't get a Python shell from
running python you may need to download and install it from the Python website
- <http://www.python.org/download/> \- or from your operating system's package
manager.

## Writing our first lines of code

Now that we have Python running, we can start writing some code! Lets start
off by making some text appear, type the following:

{% highlight python %}
print "Hello World!"
{% endhighlight %}

and press Return to make it run - you should see a line of text (known as a
'string') saying Hello World! You can change this text to be almost anything
you want and Python will print it to the screen, this is the basis of most
Python applications. Next we're going to start storing some data and to do
that we're going to use something called a "variable", a variable is just a
way of naming something so you can get it back later. To define a variable,
you just need a name for it and something to store, here's an example of a
variable and how we would use it:

{% highlight python %}
fruit = 'Banana'
{% endhighlight %}

You won't see anything output from setting a variable, but we can combine it
with our print from earlier to display the name of your fruit: (Note: lines
prefixed with '&gt;&gt;' are showing the expected output, you do not need to
type these)

{% highlight python %}
print fruit
{% endhighlight %}

Python allows us to perform many different actions with a string such as
finding its length, counting the number of times a letter appears, changing
the case or simply taking a snippet of it. Take a look at these examples:

{% highlight python %}
len(fruit)
>> 6

fruit.count('a')
>> 3

fruit.upper()
>> BANANA

fruit[0:3]
>> Ban
{% endhighlight %}

We can also combine the printing of strings and variables to make customised
outputs such as declaring what our favourite fruit is:

{% highlight python %}
print "My favourite fruit is a " + fruit
{% endhighlight %}

With a special function named 'format', we can also put variables inside of
our strings to allow for a more dynamic text output. This might be used to
welcome a user on your application by saying "Hello, &lt;name&gt;." or to show
the price of an item in a web shop.

{% highlight python %}
print "I bought a {} from the shop.".format(fruit)
>> I bought a Banana from the shop.
{% endhighlight %}

In addition to using variables for making and formatting lines of text, we can
also use them to do maths, store data for later use, make decisions or a whole
host of other things. Here's a few more examples of using variables: (Note:
Text after a '#' are just comments, you don't need to type these)

{% highlight python %}
number1 = 10
number2 = 5
number1 + number2 # Add two numbers together.
>> 15

number1 * number2 # Multiply two numbers together.
>> 50

number1 ** number2 # Raise number1 to the power of number2 (xy)
>> 100000

fruit = "Banana"
fruit * 3 # Repeat the string 'Banana' 3 times.
>> BananaBananaBanana
{% endhighlight %}

The last example is quite interesting because rather than doing a
multiplication as it would if fruit was a number, Python knows to repeat
'Banana' 3 times due to it beings a string.

## Application Logic

Logic is a major part of programming, knowing when to show a username on a
webpage, or a button within a desktop application is vital. The simplest way
to write logic within Python, and indeed most programming languages, would be
to use an if statement. We can define what we want to check and we can run
different code depending on whether the check passes or not, thus allowing us
to control the flow of our application. As an example, you may only want to
display some content if a user is above a certain age and a simple if
statement would be able to achieve that with ease. (Note: indentations are
made using 4 spaces)

{% highlight python %}
age = 18

if age >= 18:
    print "You are allowed to enter."
else:
    print "You are not allowed to enter."

>> You are allowed to enter.
{% endhighlight %}

You may need to press Return twice for the statement to run. As you can see,
we're checking to see whether our variable age is greater than or equal to 18,
if it is then they are allowed to enter, otherwise they're not.

## Using files

One of the issues with the Python shell is that it's not very easy to save
your work for a later date, so lets start using a .py to save what we're
doing. Exit the Python shell by entering exit() and hitting Return, then open
up your text editor of choice and save an empty file somewhere named
"tutorial.py". In your Terminal, change into the folder where your new .py
file is. We are now able to make changes to the .py file in the text editor
and then simply run python tutorial.py in our Terminal to run the code. Lets
give a try:

In tutorial.py:

{% highlight python %}
print "We're now using a .py file!"
{% endhighlight %}

In your Terminal:

{% highlight python %}
python tutorial.py
>> We're now using a .py file!
{% endhighlight %}

Go ahead and try writing some your own variables, strings and if statements in
your new .py file and see what happens when you run the file in your Terminal,
you can use the same code we wrote earlier. You may see a .pyc generated when
you run your .py file, but don't worry too much about it, it's just what
Python compiled your code into. Generally speaking, most of the work you do in
Python will be within .py files, though the interactive shell can sometimes be
useful for testing out snippets of code before fully integrating them into
your application.

## Taking your next steps

I hope you enjoyed this introduction to programming with Python, it's an
extremely powerful language with an easy to read syntax. The different things
we learned about today aren't specific to Python, nearly every programming
language will have variables, strings, functions and methods, though they
won't necessarily be written in the same way. If you want to learn more about
Python, I would recommend visiting the official website -
<https://wiki.python.org/moin/BeginnersGuide> \- they have pages of links to
other useful resources which will allow you to take your programming to the
next level, we've barely scratched the surface. If you like learning to
program in an interactive manner, I would also recommend Codecademy (
<http://www.codecademy.com/tracks/python> ), their lessons are very easy to
follow along with and are a good extension of this tutorial.

[This article was originally published in issue 178 of Future Publications
'Linux Format' magazine.](http://www.linuxformat.com/archives?issue=178)

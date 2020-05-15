---
title: About
---

I'm currently a software developer at HP Inc after my previous employer Bromium was acquired in September 2019.

Previously I was the lead developer at [Onespacemedia](http://www.onespacemedia.com/), developing large, complex web applications written in Django for companies in Cambridge and beyond. Before that I wrote PHP at iBubble Media and Bug Interactive, working with clients such as Nigella Lawson, EDF Energy and RBS, among others.

I've written software in many programming languages over the years, including Python, Javascript, Go, PHP, Ruby, C# and Java. I frequently test out new languages and write full software appliations in them to gauge their use, the most recent of which being [Slack Slash Commands as a Service](https://sscaas.eu/) which was written in Go (more information in [Projects](/projects/)).

### My time at Onespacemedia
While at Onespacemedia I have revolutionised the development workflow, bringing it up-to-date with the industry accepted best practises, including end-to-end automation, unit testing, code coverage and post-deployment monitoring.  When I joined the company, it was using globally installed, unpinned dependencies and required the developer to check out the correct version of each dependency per project, every time.  I introduced the concept of virtual environments to remove version conflicts and create reproducable builds.

Over the years I evolved the CMS offering, making it available via `pip` and introducing features such as in-browser image manipulation, Google Apps domain based logins to the admin system, and a page creation system which made it simple for anyone to create high-quality, engaging web pages.

With modernisation of the project flow introducing additional processes and services to configure it started to require a large investment in time up-front before a project could really get off the ground.  I created a fully automated project which uses a combination of Selenium and Fabric to authenticate against all of our third-party services, generate the appropriate API keys and insert them into a new project's settings files.  This lead to a substantial reduction in the ramp up time for new projects, with most projects up-and-running within around 3 minutes. Later I replaced this system with one based on Cookiecutter.

In addition to automating the setup of a new project on a developer's machine, I also reformed the process of deploying a project onto a production web server.  Initially developers would have to follow a multi-page document detailing the steps required to deploy a website on to Webfaction, a shared hosting provider.  I saw this process as a weak point in our flow and so I spent some time putting together a management project which used Fabric and Ansible to define the final state of a server hosting a Django project.  This allowed us to spin up new instances on Digital Ocean and fully deploy a website in around 5 minutes.

Combining the deployment project with the set-up project meant we could go from having no project files at all to having an entire Django-based CMS hosted on Digital Ocean (or any other provider) in less than 10 minutes.

In addition to all of the back-end improvements, I also spearheaded the company-wide transition into responsive-only websites, trialling a variety of responsive frameworks before finally settling on Zurb's Foundation.  From then on, all of our websites were fully responsive and delivered at an exceptionally high standard, complete with microinteractions and leading-edge design. 

Outside of work related activites I'm an avid gym-goer and road cyclist.

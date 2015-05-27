---
title: "Getting started with Generic Class Based Views in Django"
canonical: http://www.onespacemedia.com/news/2014/feb/5/getting-started-generic-class-based-views-django/
comments_disabled: true
---

Before we start, there are a few things you’ll need to be able to follow along:

* Basic knowledge of Django.
* A fresh Django installation.
* A database of some sort.
* Django configured to work with said database.

If you don’t have time to read the whole article, you can find the finished code here: <https://github.com/danielsamuels/gcbv-article>

* * *

One of Django’s features that seems to cause a lot of confusion is “Generic
Class Based Views” and how on Earth they work. A lot of the confusion seems to
stem from the same questions:

* Why can’t I just use function views and just copy and paste the logic every time?
* Why can’t I write a ‘get all items from model’ script for each project?

Well, it’s the same reason why you don’t build a bicycle every time you want
to take a bike ride, it doesn’t make sense, that’s just a waste of time and
money.

Generic Class Based Views (GCBVs from here onwards - I’m lazy - which is why I
like GCBVs!) are designed to take the monotony and repetition out of building
database-driven websites, in the same way that the Django Admin automatically
makes an awesome administration system just by reading your models. The bottom
line is this - most developers don’t want to keep writing the same stuff for
every project, day in, day out. Using GCBVs help to filter out some of that
monotony - and allows us to focus on the new, inspiring, fun stuff.

The modern website’s main operations generally adhere to the “CRUD” model -
that is, Create, Read, Update, and Delete. A user Creates objects (perhaps a
blog post), Reads objects (like you’re doing right now), Updates objects (like
when I had to fix all the typos) and Deletes objects (please don’t, I spent so
long writing this). This is consistent across the most popular sites on the
web today; Reddit, Twitter, Tumblr, MySpace (just kidding) - they’re all
examples of CRUD applications.

So if we’re making a brand-new Web 3.0 application, how can GCBVs help us?
Let’s take a look. We’re going to look at making a very basic CRUD blogging
platform using GCBVs.

An example model could look something like this:


{% highlight python %}
from django.db import models


class Post(models.Model):
    title = models.CharField(
        max_length=100,
    )

    content = models.TextField()
{% endhighlight %}

We’re also going to need a URL scheme to allow us to list our posts, read them
etc, so lets start with something simple like this:

{% highlight python %}
from django.conf.urls import patterns, url
from .views import PostListing

urlpatterns = patterns('',
    url(r'^$', PostListing.as_view(), name='listing'),
)
{% endhighlight %}

Include this file from your base urls.py with [a namespace of
‘blog’](https://docs.djangoproject.com/en/dev/topics/http/urls/#url-
namespaces-and-included-urlconfs). You’ll notice that if you run this urls.py
you’re going to get an ImportError. That’s because we haven’t created our
actual view yet - so lets do it! As we want to return a list of all of our
blog posts, we’re going to use a ListView. A ListView takes a model and
returns a list of all of the objects in it, so if you have 3 posts in the
database, you’ll return a list with 3 posts in it, and if you have 5 posts in
the database, you’ll return a list with 5 posts - etc. All GCBVs live inside
django.views.generic, so we can go ahead and import ListView from there:

{% highlight python %}
from django.views.generic import ListView
{% endhighlight %}

Next we can simply make a view for our posts which extends ListView - this
means that we have our own version of a ListView which inherits all of it’s
values, but we can override anything we want - if we don’t like how something
works, we can change or replace it. Lets import our post model and make our
listing view for it.

{% highlight python %}
from .models import Post

class PostListing(ListView):
    model = Post
{% endhighlight %}

..and that’s it! The ListView will then take care of running the queries,
selecting the template to use, passing the information into the template - all
you have to do it give it the model you want it to work with. By default it
will try to return the list to a template name of the format &lt;application
name&gt;/&lt;model name&gt;_&lt;CBV type&gt;.html - so for a model named Post
in an application named Blog, we can expect it to load blog/post_list.html.
That means that you’ll have to go ahead and create that template manually. The
main thing you’ll want to use inside your template is the actual list of
objects that the CBV has put together. You’ll be able to find it in two
different template variables, one with a model specific name and one with a
generic name - and in this case they will be `{% raw %}{{ post_list }}{% endraw %}`
and `{% raw %}{{ object_list }}{% endraw %}`
respectively. You can do anything you could normally do with a
list with these variables too. You can loop over them, slice them, pass them
through to a template tag and so on. As we’re making a listing we’ll just go
ahead and loop over our posts and make a simple unordered HTML list.

{% highlight python %}
{% raw %}
<ul>
    {% for post in post_list %}
        <li>{{ post.title }}</li>
    {% endfor %}
</ul>
{% endraw %}
{% endhighlight %}

At the moment this won’t do a lot because you don’t have any posts, so lets
change that! What we’re going to need is the ‘C’ part of CRUD - a CreateView!
This works in a very similar fashion to the ListView. We import it, tell it
what we want and it’ll generate everything we need. Awesome.

{% highlight python %}
from django.views.generic import CreateView

class PostCreate(CreateView):
    model = Post
    success_url = '/'
{% endhighlight %}

Hurray, another View written! You’ll notice that there’s an extra line in this
one “success_url”, this basically is the URL we’re going to get sent to when
the new Post has been saved. Of course a View is nothing without a template,
and a CreateView is no exception. A CreateView uses a type of ‘form’, so it
will look for a template named blog/post_form.html - so lets go ahead and
create it. The cool thing about a CreateView is that all we need to do is
output a form (which it makes for us) and it’ll take care of the validation,
the database queries and everything you would normally need to do when adding
an object to the database. For now we’ll keep our template very basic, lets go
with this:

{% highlight html %}
{% raw %}
<form action="" method=”post”>
    {% csrf_token %}
    {{ form.as_p }}
    <input type=”submit”>
</form>
{% endraw %}
{% endhighlight %}

Yup. That’s really all you need to create new objects - 5 lines of HTML. Who
said programming was hard? You might be wondering what the csrf_token thingy
is in the middle, quite simply it’s a way to stop people faking your forms, if
you want more information check out [this documentation
page](https://docs.djangoproject.com/en/dev/ref/contrib/csrf/). Of course we
don’t have a way to actually get to this page yet, so we’ll need to add
another line to the patterns in the urls.py that we worked on earlier:

{% highlight python %}
url(r'^create/$', PostCreate.as_view(), name='create'),
{% endhighlight %}

Now you should be able to go to /create/ and see your shiny new CreateView! Go
ahead and make some posts, I’ll wait here.

Done? Cool. Lets take another look at the ListView we made earlier. You should
be able to see each of the posts you created in a nice little list - all from
a ListView which is 2 lines long! Now, having a list of posts is nice and all,
but if you can’t actually click on them to read the post it’s not really that
useful, so lets link them up. Change your &lt;li&gt; line to look like this:

{% highlight html %}
{% raw %}
<ul>
    <li>
        <a href='{% url "blog:detail" post.pk %}'>
            {{ post.title }}
        </a>
    </li>
</ul>
{% endraw %}
{% endhighlight %}

At this point you will probably be getting an error, something to do with a
reverse URL lookup not being found, that’s fine, we can fix this. What we need
is a URL for our actual blog article page, so lets add it!

{% highlight python %}
url(r'^(?P\d+)/$', PostDetail.as_view(), name='detail'),
{% endhighlight %}

You’ll see that we have a RegEx URL conf, which is basically going to match a
URL which has a number in it - that number will be our Post ID (known as a
‘pk’ or Primary Key in Django). As always, the view doesn’t exist yet, so
we’ll need to make it, this time we’re going to be using a DetailView. A
DetailView takes a Model and a way to get the object (usually via a URL
parameter) and passes the individual object through to a template.

{% highlight python %}
from django.views.generic import DetailView

class PostDetail(DetailView):
    model = Post
{% endhighlight %}

You may have noticed that we haven’t actually told it how to get our blog
post, that’s because by default it will look for a URL argument named ‘pk’ and
use that to filter the model. If you refresh your listing again, you should
now see that each blog post now has a link, though clicking on them will only
give you an error - so lets fix that!

What we need is a template and, as usual, GCBVs will try to use a standard
template name by default and for DetailView it’s ‘detail’. Shock. Horror! Lets
put something simple into this template for now:

{% highlight html %}
{% raw %}
<h1>{{ post.title }}</h1>
<p>{{ post.content }}</p>
{% endraw %}
{% endhighlight %}

Now your blog post page should work and you should see the blog post you wrote
earlier. So what we have now is a way to Create blog posts, view a List of
them and then View an invididual post, all with a views.py of less than 20
lines, a URL conf and some templates. The other two parts of CRUD are Update
and Delete and interestingly enough we can actually use the same form that we
used for the CreateView for the Update part of it.

So far we’ve only done really simple GCBVs, so I want to take it up a notch
and show you how to override methods and run your own code. Lets start by
making the outline of the UpdateView:

{% highlight python %}
from django.views.generic import UpdateView

class PostUpdate(UpdateView):
    model = Post
{% endhighlight %}

 and the connecting URL for it:

{% highlight python %}
url(r'^(?P\d+)/update/$', PostUpdate.as_view(), name='update'),
{% endhighlight %}

Feel free to go to this URL and take a look at what’s happening, it will look
exactly the same as the CreateView does, just with the fields pre-populated.
However you’ll notice that when you hit Submit, you’ll get the success_url
error again. This time around we don’t want to just go back to the main
listing - that’s rubbish - it would be much better to go back to the post we
just updated. What we’ll do is override the “get_success_url” method and
return a custom URL based on what post we’re updating. To override a method we
need to know it’s “signature”. The signature of a method is just the
parameters which it has, for example this method..

{% highlight python %}
def example_method(arg1, arg2):
    pass
{% endhighlight %}

..is essentially just a signature, it doesn’t do anything, but if you wanted
to override it you’d need to include arg1 and arg2 in your definition and it’s
the same for overriding GCBV methods. One of the best tools for finding out
CBV method signatures is “[Classy Class-Based Views](http://ccbv.co.uk/)”, you
can view any Class Based View for every version of Django and see what the
signatures are. What we’re going to need is the signature for
“get_success_url” for the UpdateView GCBV, so we’ll need [this page](http://cc
bv.co.uk/projects/Django/1.6/django.views.generic.edit/UpdateView/). If you
scroll down a little, you should be able to see the list of methods and
get_success_url within. You can click on the row to dive into the actual code
used by Django. As you should be able to see, get_success_url has a very
simple signature, it’s just ‘self’, so lets override it in our UpdateView:

{% highlight python %}
class PostUpdate(UpdateView):
    model = Post

    def get_success_url(self):
        return '/test'
{% endhighlight %}

If you were to save your UpdateView form again, you would be redirected to
/test, however this isn’t actually what we want, so lets fix that. We have a
few options, either we can hard-code the way the URL works “/ID/”, or we can
do a reverse lookup on the URL like we did in the ListView template earlier.
The reverse lookup method is the best way, and most Django-like, as it means
that if you decide to change your URL schema later on you would just need to
update your urls.py and your code would still point to the correct place.

To reverse a URL we’ll first need to import reverse!

{% highlight python %}
from django.core.urlresolvers import reverse
{% endhighlight %}

We then just call it with our namespaced URL (blog:detail) to get the actual
URL (/1):

{% highlight python %}
class PostUpdate(UpdateView):
    model = Post

    def get_success_url( self ):
        return reverse('blog:detail', kwargs={
            'pk': self.object.pk,
        })
{% endhighlight %}

..and there you have it! When the Post is saved, Django will automatically
call ‘get_success_url’ and because you’ve overridden it, your version will be
called instead of the usual one, awesome. So out of everything that the blog
needs to do we have the C, R, U and now you just want the D - a DeleteView.
Given everything that we’ve done so far, you should know that this won’t take
long!

{% highlight python %}
from django.views.generic import DeleteView

class PostDelete(DeleteView):
    model = Post
    success_url = '/'
{% endhighlight %}

You can duplicate the Update line in the urls.py and change everything from
‘update’ to ‘delete’ to match. Head over to a delete URL and you’ll see that
we need yet another template file! The DeleteView only needs a very simple
form, so simple in fact that it’s just a submit button! Copy the template from
the Create / Update form, but remove the `{% raw %}{{ form.as_p }}{% endraw %}`
bit - it won’t do anything anyway. What you will now be left with is a very
non-threatening submit button which, when clicked, will delete your blog post
and redirect to the listing once again.

With the Delete functionality added, our CRUD application is complete! As you
can see Django makes it very straightforward to get the core web development
tasks done without repeated code and without much time investment. This is
just a basic application, but you could quite easily expand upon it, feel free
to try adding a commenting system, adding some style, overriding some other
methods - just have a play around with it!

I hope this article has been useful. If you have any comments, complaints or
suggestions for future articles then please leave a message on the [original article]({{ page.canonical }}).

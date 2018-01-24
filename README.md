# AZCWR Randomizer

Simple javascript/Vue application to help volunteer find a project find a project to start

## Who

* AZCWR Volunteers, newbies to Arizona Cyber Warfare Range

## Why

* AZCWR newbies have a difficult time finding a project to complete


## What

* Application just from random list assigns individals a project for them to based on difficult tier.

# Contributing

* To begin contributing, please fork the repository to your personal account, clone it, and submit a pull request.  We'll respond with comments and should have your patch merged in short order. 

# Running the project for developers/testers

Basically all we need to do is serve a static site.  If you alreaady know how to do that, feel free to serve the root directory of this project.  Otherwise, keep reading to set up a simple Node.js server.


```
# install nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

# check for latest version of node
nvm ls-remote

# install, for instance node.js v8.9.4
nvm install v8.9.4

# install parcel build tool
npm install -g parcel-bundler

```

Now we can serve the site:

```
cd [where-ever-you-cloned-this-repo]

parcel client/index.html

```

Then just open your browser at [http://127.0.0.1:8080](http://127.0.0.1:8080).


# Making Changes

Well, it's just good ol' HTML, CSS, and Javascript.  You were expecting a build process?  Sorry.  We're too lazy for that (and it serves as an unnecessary barrier to learning).  We do use vue.js, so it should be possible to keep this code somewhat modular and well kept.

Take a look around and edit files as you see fit, then refresh to see your changes.  May the force be with you!

---
title: 'Automatic Version Switching with NVM'
date: '2020-04-25'
---

I'm a big fan of using [NVM](https://github.com/nvm-sh/nvm) for managing my Node version. For personal projects, I like to use the most current version, and generally bump it at the earliest opportunity. However, I have a number of projects (particularly older Ember projects) at work that have hard dependencies on older versions.

Normally, there are a few ways to use NVM to switch Node versions as needed. For a simple version switch, I could simply enter `nvm use 13.0.0`.

For something a little more automated, I can create a `.nvmrc` file containing the node version in my project's root, and simply `cd` into the folder and enter `nvm use`.

It would be nice to have something even more brainless though. Enter Zsh hooks! If you use Zsh, you can set up a hook that automatically makes the switch for you every time you `cd` into a folder that contains a `.nvmrc` file.

To set this up, simply add this snippet to your `.zshrc`, anywhere _after_ you initialize NVM:
`gist:akhtarja/2b7537b12f6edafa8242c612525dd00e#nvm_automation`

This hook makes using NVM completely hands-off. When you switch to a new folder, you'll automatically get switched to the version specified by that folder's `.nvmrc`.

If the file specifies a Node version that you don't have installed, it will get installed.

If the folder doesn't contain this file, you'll get switched to the default Node version.

The main disadvantage to this approach is that you need Zsh for this to work. Maybe this will be the encouragement you need to finally make the switch.

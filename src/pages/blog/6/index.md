---
title: 'Quick Wins: Getting Back to Your Previous Git Branch'
date: '2020-12-04'
---

I did this on a screen share in MacOS this week and a colleague asked me what it was. I realized that it's something I do all the time, but others are probably not aware of it.

Suppose you're on a git branch called `first-branch`. Then you use `git checkout second-branch` to switch to `second-branch`. To quickly get back to the branch you were on previously (in this case `first-branch`), use `git checkout -`. This can be used with any git command. One I often use is `git rebase -` to do a quick rebase against the branch I just came from.

This also works with folders. A quick `cd -` will return you to the folder you were in before you switched to the current one.

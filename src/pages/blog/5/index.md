---
title: 'gyp: No Xcode or CLT Version Detected!'
date: '2020-07-15'
---

If you just updated to the most recent MacOS Catalina (10.14.6), you might have noticed a new error in your terminal when performing a `npm install` or `yarn install`:

`gist:akhtarja/eda99e0e1a16a7b8964697ea27b59f94#1.sh`

There will be more information under this error on the lines that follow. The annoying thing about this error is that I'm 100% sure I have Xcode's command line tools installed. In fact if I try `xcode-select --install` from the command line, I get a message to that effect.

The solution is to re-install your command line tools by first removing the previously installed instance.

First, find the folder where the current instance is installed with:

`gist:akhtarja/eda99e0e1a16a7b8964697ea27b59f94#2.sh`

This will return a path such as:

`gist:akhtarja/eda99e0e1a16a7b8964697ea27b59f94#3.sh`

I like to just redirect the output to my clipboard with:

`gist:akhtarja/eda99e0e1a16a7b8964697ea27b59f94#4.sh`

Next, delete the current instance with:

`gist:akhtarja/eda99e0e1a16a7b8964697ea27b59f94#5.sh`

Since we were smart and we redirected the output from the previous command to our clipboard, we can simply hit cmd+v to paste the path. You'll be prompted for a root password, and the delete operation will remove your current instance of the command line tools.

At this point you may get a message from the MacOS system update prompting you to install an update. Disregard this for now, as we're going to install the necessary software from the command line instead.

Finally, run:

`gist:akhtarja/eda99e0e1a16a7b8964697ea27b59f94#6.sh`

This will start the install process. A window will appear - click on install and agree to the licence to proceed. This will take some time to complete.

Once complete, the error message will disappear when you run any `yarn` or `npm` commands.

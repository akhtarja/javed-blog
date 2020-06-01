---
title: 'TIL: Returning a JSON Field From Rails GraphQL'
date: '2020-04-28'
---

Sometimes a key in your GraphQL response needs to be a JSON object, and you can't define it in any greater granularity. This is often the case when the object's keys are different depending on specific logic rules. I had this exact problem today. The simplest way to deal with this is to define a custom `JSON type` in a separate module. You might end up with a few of these for various custom data types over time, so it's good to start a `graph_utils/types` folder to keep them together:

`gist:akhtarja/7a0557614aa2de6ed1119ed82586a433#1.rb`

Then, when you define your field types for your GraphQL response, use:

`gist:akhtarja/7a0557614aa2de6ed1119ed82586a433#2.rb`

Now the `aJSONField` key can contain any JSON data, of any shape. This is a surprisingly common use case in the project I'm currently working on.

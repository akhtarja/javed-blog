---
title: 'The Magic of Pattern Matching in Elixir'
date: '2020-04-27'
---

My main jam is JavaScript development, however for a recent role, I spent a lot of my days writing code in [Elixir](https://elixir-lang.org/), building an extensive back end integration for a major Shopify enterprise client. It was a really enjoyable challenge to come into a job with absolutely zero knowledge of the stack, and learn it from scratch during my onboarding. Being a functional language, Elixir has really concise syntax that often makes object-oriented languages look far more verbose than they need to be.

One of the most powerful features in Elixir is pattern matching. In many cases, properly leveraging pattern matching means you often don't need to rely on constructs like `if` or `case`.

At its most basic, Elixir's pattern matching looks like array and object deconstruction in JavaScript:

```
[a, b, c] = [:pattern, "matching", 100]

a #=> :pattern
b #=> "matching"
c #=> 100
```

The same can be done with maps, which are the Elixir equivalent of JavaScript objects:

```
%{first_name: first_name} =
  %{first_name: "Javed", last_name: "Akhtar"}

first_name #=> "Javed"
```

The real magic comes in the _matching_ part of pattern matching. If we try to match a map on a key that doesn't exist, we get an error:

```
%{middle_name: middle_name} =
  %{first_name: "Javed", last_name: "Akhtar"}

** (MatchError) no match of right hand side value
```

We're not limited to matching only on keys. We can also match on values:

```
%{first_name: first_name, last_name: "Akhtar"} =
  %{first_name: "Javed", last_name: "Akhtar"}

first_name #=> "Javed"
```

```
%{first_name: first_name, last_name: "Smith"} =
  %{first_name: "Javed", last_name: "Akhtar"}

** (MatchError) no match of right hand side value
```

One of my favourite applications of pattern matching is the ability to declare multiple instances of a function by leveraging pattern matching in the function declaration. Suppose you have the following function, which takes an integer between `1` and `3` inclusive, as its only parameter:

```
def process_integer(value) do
  case value do
    1 -> {:ok, "one"}
    2 -> {:ok, "two"}
    3 -> {:ok, "three"}
    _ -> :error
end
```

This can be re-written as:

```
def process_integer(1), do: {:ok, "one"}
def process_integer(2), do: {:ok, "two"}
def process_integer(3), do: {:ok, "three"}
def process_integer(_), do: :error
```

In many cases, this is much more concise and easy to read!

If you're a Ruby developer and you like what you've seen here, you're in luck! Pattern matching became available as an experimental feature in Ruby 2.7. I encourage you to try it out and see how it fits into your own dev workflow!

---
title: 'Parameterizing raw SQL Queries in Rails'
date: '2020-05-16'
---

For many applications, the `ActiveRecord` abstraction provided by Rails gives us a convenient and simple method of performing database operations in Rails.

However, in cases where performance is a concern, nothing beats raw SQL. This presents a problem though, as raw SQL is vulnerable to SQL injection attacks, particularly in cases where user input is being used. Consider this example:

```
select
  i.id as ItemId,
  i.name as ItemName,
  i.price as ItemPrice
from items i
where i.id = 12
```

This is simple a simple enough query, calling for a few columns in the `items` table, with a filter on the `id` column. To use this in Rails, we need a bit more:

```
query = %(
  select
    i.id as ItemId,
    i.name as ItemName,
    i.price as ItemPrice
  from items i
  where i.id = 12
)

query_results = ActiveRecord::Base.send(:sanitize_sql_array, query)
query_results = ActiveRecord::Base.connection.select_all(query_results).rows

query_results #=> [ [12, "My item", 4.99] ]
```

Now suppose we're getting a user input from an open text field in the UI for the item ID to filter by. In this case we could use string interpolation to insert the item ID into the query:

```
query = %(
  select
    i.id as ItemId,
    i.name as ItemName,
    i.price as ItemPrice
  from items i
  where i.id = #{item_id}
)
```

Since we're passing a user input directly into the query, we've now exposed ourselves to potential SQL injection.

One way to get around this is to parameterize the query. In doing this, we'll move the item ID value into a parameter that we pass when we run the query:

```
query = %(
  select
    i.id as ItemId,
    i.name as ItemName,
    i.price as ItemPrice
  from items i
  where i.id = ?
)

query_results = ActiveRecord::Base.send(:sanitize_sql_array, [query, item_id])
query_results = ActiveRecord::Base.connection.select_all(query_results).rows
```

Note that the `query` parameter in `ActiveRecord::Base.send` becomes an array, and we pass in the `item_id` value here. In composing the query, Rails will apply this value to the SQL where it sees the placeholder `?`.

The approach above works well if you need to parameterize a single value, but what about multiple values? Let's change up some of the filters on our query:

```
select
  i.id as ItemId,
  i.name as ItemName,
  i.price as ItemPrice
from items i
where i.price > 3
and i.name ~ 'item'
```

We can paramterize the two filter values like this:

```
query = %(
  select
    i.id as ItemId,
    i.name as ItemName,
    i.price as ItemPrice
  from items i
  where i.price > :item_price
  and i.name ~ :item_name
)
```

Now, when we call `ActiveRecord::Base.send`, we send in the filter values as key-value pairs:

```
ActiveRecord::Base.send(:sanitize_sql_array, [query, { item_price: 3, item_name: 'item' }])
```

It might look like we're just moving the literal from one place to another, but Active Record is doing some magic behind the scenes here. When you embed the user-supplied literals into the query, Active Record cannot perform quoting on it. But when the literals are provided as a parameter, Active Record will quote the literals to prevent injection attacks. This approach is also more performant, as Active Record will compose the query first and re-use it as needed but with different parameters.

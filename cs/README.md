# Personal Projects

This repository is part of the Personal Project series for Phase 2. This is 1 of the 3 Personal Projects for this phase. These projects are intentionally open ended but aim to cover all the Learning Competencies with your project. The instructors are available to answer any questions you have around these projects.

## Submission Process

1. Clone this repository.
2. Create a branch with your name.
3. Commit and push up to origin.
4. Create a pull request.
5. Tag an instructor on your pull request for review or when you are done.

# Client Side App

The goal of this Personal Project is to build a client side web application. For Rubyists this means you will be basing your project off of the [Sinatra Web App started on this branch](../../tree/rubyists) and for Sharpies the [ASP.NET MVC app started on this branch](../../tree/sharpies).

### Learning Competencies

The things we will be looking to see if you have learned in this project are:
  - **Write custom event handlers in JavaScript or jQuery**
  - **Use AJAX to retrieve partials from the server and replace or append them to a website**
  - **Use AJAX to retrieve JSON from the server and then modify the page based on the JSON**
  - **Use JSON to pass data via and AJAX call and modify the DOM**
  - Use URL parameters to pass data into a server application
  - Write OO JavaScript
  - Jasmine testing
  - Implement clean and flexible interfaces between objects
  - Separate my view concerns from my data verification concerns
  - Be able to map the flow of data through a web application
  - Use HandlebarsJS or another JS templating library to convert JSON to HTML *(stretch)*

### User Stories

We are going to create an online [customer relationship management](http://en.wikipedia.org/wiki/Customer_relationship_management) app.

- A user can see a list of customers
- A user can delete a customer
- A user can see all the notes for a customer by clicking "more" link for any listed customer
- A user can add a new note
- A user can filter the list of customers by typing in a text search input *(stretch)*
- A user can add a new customer with a name *(stretch)*

### Example UI

![Example UI](ppcsa-example-ui.jpg)

### The API

Your server provides the following HTTP verbs and URLs that you can consume with AJAX calls.


In the `Controllers/CustomersController.cs` file it provides the URLS:

* `get "api/Customers"`
* This URL will return a list of customers in `JSON`.

* `post "api/Customers"`
* This URL will try to create a new customer. It will expect data in the format of `[ "Customer" : { "Name" : "Sam", "Email" : "test@example.com", Pphone_number" : "111-222-3333" } ]`. It will return the saved customer back in `JSON` if successful and a `400` status if it was not (this could be handled by your `ajax` `failure` handler).

* `put "api/Customers/id"`
* This URL will try to update a new customer. It will expect data in the format of `[ Customer" : { "Name" : "Sam", "Email" : "test@example.com", "Phone_number" : "111-222-3333" } }`. It will return the updated customer back in `JSON` if successfull and a `400` status if it was not (this could be handled by your `ajax` `failure` handler).

* `delete "api/Customers/id"`
* This URL will try to delete a customer. You need to provide it the `id` in the URL and it will return a `200` success if it can delete the customer and `400` error status if not.


* `get "api/Customers/{CustomerID}/Notes"`
* This URL will return a list of notes for a specific customer. You must provide it the customer id in the URL. In this case **it will not return data in JSON** instead it will return `HTML` and you must append that HTML to an existing HTML node on your page.

* `post "api/Customers/{CustomerID}/Notes"`
* This URL will create a new note associated with a customer. You must pass the customer id in the URL as well as the note data in the format of `{ "Note" : { "Content" : "Good customer." } }` It will return the saved note in `JSON` if successful or a `400` error status if not successful.


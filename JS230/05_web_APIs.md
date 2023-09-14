# Working with Web APIs: Fundamental Concepts

## API

### What's an API

An API, or Application Programming Interface, provides a way for computer systems to interact with each other. 

in common is providing functionality for use by another program.

### Provided and Consumer

•	An API provider is the system that provides an API for other parties to use. GitHub is the provider of the GitHub API, and Dropbox is the provider of the Dropbox API.
•	An API consumer is the system that uses the API to accomplish some work. When you check the weather on your phone, it is running a program that is consuming a weather API to retrieve forecast data.


### Function of the APIs

#### Sharing Data

sharing data between systems. 

all APIs are used to transfer data between systems

#### Enabling Automation


#### Leverage Existing Services

APIs enable application developers to build their applications on top of a variety of other specialized systems, allowing them to focus on their actual objectives and not worry about all the complexities of every part of the system. In a way, it's like hiring a team of specialists for a construction project

## Accessibility

### Public and Private

Public APIs are intended for consumption outside the organization that provides them. Twitter, Facebook, Instagram, and many other social media sites provide public APIs that enable third-party programs to interact with their services. This is the type of web API this book deals with.
Private APIs are intended only for internal use. These APIs are subject to change at any time. The Google search page uses a private API to get a list of search suggestions to display while a user is entering search terms. Sometimes it is possible to call private APIs, but in general, doing so is a bad idea for a variety of technical, ethical, and even potentially legal reasons.

### API use and terms of acceptance

•	What restrictions does the API place on your use of its data? For example, data from the Amazon Product Advertising API is only available to Amazon Associates.
•	Is the API exposing any data that could be linked back to a person? Many social applications allow access to a user's personal information, and by accessing it, you are taking on the responsibility of keeping this information safe and secure.
•	Does the API have rate limits, and if so, what are they? Many APIs limit how many requests can be sent from a single user or application within a given time frame. Such restrictions can have an impact on the design of programs that interact with their APIs.

## HTTP 

[See HTTP course]()

## Media Types 

•	Media types describe the format of a response's body.
•	Media types are represented in an HTTP response's Content-Type header, and as a result, are sometimes referred to as content types.

HTML is one of many different media types (also called content types or sometimes MIME types) supported by modern web browsers. It is represented in an HTTP response as the `Content-Type` header as `text/html`:

The charset (or character set) tells the browser which set of characters the response is using. The charset for most requests will be UTF-8 or ISO-8859-1. 

### Data serialization

A data serialization format describes a way for programs to convert data into a form which is more easily or efficiently stored or transferred. The stored or transferred data can then be converted back into the original data at any time by the original program or any other program that can understand its format.

### XML

XML (or extensible markup language) shares common heritage with HTML: they are both based on an earlier and similar type of markup, SGML. XML is generally stricter than HTML and doesn't handle missing tags or improper nesting. It was fairly common to see XML used with APIs in the past, and while some services continue to support XML, JSON has become much more common.

### JSON

JSON (or JavaScript Object Notation) is perhaps the most popular data serialization format used by web APIs today. The syntax JSON uses is based on the way object literals are written in JavaScript, the ubiquitous scripting language of the web. While JSON's popularity is partially due to being based on existing web technologies, a distinction it shares with XML, it is also the result of JSON being a simpler and less ambiguous format.

## REST and CRUD

### REST

The term REST is often used to describe a set of conventions for how to build APIs. REST stands for representational state transfer

•	REST is a set of conventions about how to build APIs.

Resource-Oriented Thinking

•	representational refers to how a representation of a resource is being transferred, and not the resource itself.
•	state transfer refers to how HTTP is a stateless protocol. This means that servers don't know anything at all about the clients, and that everything the server needs to process the request (the state) is included in the request itself.

were based on observations about how the web already worked. From this, Fielding derived a set of formalized patterns about the kind of interactions that take place on the web. Loading web pages, submitting forms, and using links to find related content all factor into what REST is and how it applies to the web and API design. If you think about the web page as being a resource this makes a little more sense.

A good way to think about REST is as a way to define everything you might want to do with two values, what and how:
•	What: Which resource is being acted upon?
•	How: How are we changing / interacting with the resource?

What is most powerful about REST is that by being a set of conventions, it is universal and applies just as well to any kind of resource. By following REST conventions, API designers have fewer decisions to make about how to build an API and API consumers have fewer questions to answer before using one.

### CRUD

CRUD is an acronym that is used to describe the four actions that can be taken upon resources:
•	Create
•	Read
•	Update
•	Delete

RESTful APIs will model most functionality by matching one of these operations to the appropriate resource. 

APIs have far fewer limitations. As a result, web APIs tend to more fully embrace the concepts of HTTP

Resource-Oriented Thinking

•	By limiting actions to CRUD, REST requires thinking in a resource-oriented way.

. See how the resource (Placement) and the path (/orders/:id/placement) are both singular? This is what is called a singular resource or singleton resource. Paths and URLs for singular resources identify a single resource. Any of the routes in the table that include an :id placeholder are really singular resources since they identify single resources


While there are many benefits for both providers and consumers in the use of RESTful APIs, pragmatic solutions often require favoring practical solutions, and that can mean deviating from conventions when there is reason to.

It is important to remember that REST is a set of conventions and patterns for building APIs. 

•	It is worth being as RESTful as possible, but there are times when it is not the best solution.

### Resources

A resource is the representation of some grouping of data. A resource can be anything an API user needs to interact with. 

Every resource in a web API must have a unique URL that can be used to identify and access it

Elements are the representation of a single resource, such as the first request above. Operations that involve a single resource are done in the context of that resource, and will use that resource's path.

Collections represent a grouping of elements of the same type. It is common for collection and element resources to have a parent-child relationship, where the collection is the "parent" and an element is a "child", although this is not always the case. Here is what could be the path to a collection of blog posts:

## Requests

All requests made to web servers start with an HTTP method 

•	HTTP requests include a path, method, headers, and body.
•	The Accept header tells the provider what media types can be used to respond to the request.


## POST and PUT

While the HTTP spec defined a larger set of allowed methods, the only methods used for a long time were GET and POST. 

PUT is the correct HTTP method for updating the value of a resource and sending all of its values back to the server. 

•	Use HTTP method PUT to update resources.
•	Use HTTP method DELETE to delete resources.


## HTTP Response Headers

Access-Control-Allow-Origin
Lists what domains can access this resource using CORS. This header would allow all sites:

Allow
Used with a 405 Method Not Allowed response to a request with an invalid HTTP method. The value of this header lists what methods are allowed.

Content-Length
The length of the response body in bytes.

Content-Type
Describes the media type or format of the body. Common values include application/json and application/xml. For a fairly complete list of media types, see Wikipedia. This field will often include a charset attribute as well:
 
ETag
Used to identify a specific version of a resource. Any changes to the resource will result in a new value for ETag.

Last-Modified
The last time the requested resource was modified.

WWW-Authenticate
Indicates what type of authentication is required to access a resource. 

X-* Headers
Naming headers with names beginning with X- is a convention for headers that aren't standardized. These headers are often API or application-specific. 
## The Application Layer and its protocols

The application layer does not represent the application itself, but the protocols that bring communication services to the applications. These protocols (HTTP, FTP, SMTP...) are the ones which the applications most directly interacts with, as it is much less common to build applications that interact directly with protocols below the Transport layer. 

Application layer protocols focus on the structure of the message and the data sent, trusting on the protocols below them to ensure the messages are transported reliably. These protocols can be understood as systems of rules for how applications interact witch each other.

## The World Wide Web or Web

If the internet is a network of network, the infrastructure that allows inter-network communications, both in physical terms and the lower protocols that control its use; the Web is a service that we can access via that infrastructure. The Web is an immense information system comprised of *resources* (documents, images, files, etc.) which are accessible via a Uniform Resource Locator or URL.  

## HTML

HyperText Markup Language, the system of rules destined to structure of documents and resources in the Web.

## URL and URI

An URI is a "sequence of characters that identifies an abstract or physical resource"; an URL is "the subset of URIs that, in addition to identifying a resource, provide a means of locating the resource by describing its primary access mechanism (e.g., its network *location*).

Comparative table:

| URI |	URL |
| --- | --- |
| URI is an acronym for a Uniform Resource Identifier. |	URL is an acronym for a Uniform Resource Locator. |
| URI is the superset of a URL. |	URL is the subset of URI. |
| URI identifies a resource and differentiates it from others by using a name, location, or both. |	URL identifies the web address or location of a unique resource. |
| URI contains components like a scheme, authority, path, and query. |	URL has similar components to a URI, but its authority consists of a domain name and port. |
| An example of a URI is ISBN 0-476-35557-4. |	An example of a URL would be `https://hostinger.com`. |
| URI is usually used in XML, tag library files, and other files, such as JSTL and XSTL. |	URL is mainly for searching web pages on the internet. |
| URI scheme can be a protocol, a specification, or a designation like HTTP, file, or data. |	URL scheme is a protocol, such as HTTP and HTTPS. |

## The URL and its components

A URL or Uniform Resource Locator, a subset of URI, not only identifies a resource, but it specifies how to access via its location. In practice, it is how we can access to specific resources on the internet, like when, for example, we enter the web address on the browser's bar.

Components of a URL:

Example: `http://www.launch-school.com:8080/home/example/?item=grade&icon=pass`

| Component | Example | Function |
| --- | --- | --- |
| Scheme | `http` | It indicates the web client the way to access the resource; it can indicate which protocols should be used to access it. |
| Colon and two forward slashes | `://` | Separates the scheme from the host |
| Host | `www.launch-school.com` | Where the resource is hosted or located, written in domain name format. DNS will use this to retrieve the IP address equivalent |
| Port | `:8080 `| Only specified when it must be other than the default (Optional) |
| Path | `/home/example/` | It specifies what local resource is being requested (Optional) |
| Query String | `?item=grade&icon=pass` | It sends data to the server via query parameters in HTTP `GET` requests (Optional) |

A URL can be followed by a fragment identifier. The separator used between the URL and the fragment identifier is the `#` character. A fragment identifier is used to point the browser to a reference or function in the resource that it has just retrieved.

80 is the default port for HTTP, 443 is the default port for HTTPS.

URL Analysis Table Template:

| Name | Component | Function |
| --- | --- | --- |
| Scheme |  | It tells the web client the way to access the resource; it can indicate which protocols should be used to access it. |
| Colon and two forward slashes | `://` | Separates the scheme from the host |
| Host |  | Where the resource is hosted or located, written in domain name format. DNS will use this to retrieve the IP address equivalent|
| Port |  | Only specified when it must be other than the default.  |
| Path |  | Linus-like path, it specifies what local resource is being requested |
| Query String |  | It sends data to the server via query parameters |

## Query String

Component of the URL with specific syntax, used to send data to the server through the URL in HTTP `GET` requests. How the parameters sent are used will depend on the server side application.

Query String components:

| Component | Example |
| --- | --- |
| Reserved Characters | `?`, `&`, `=` |
| Parameter name-value pair | `search=ruby` |

Query String Reserved Characters:

| Character | Function |  
| --- | --- |
| `?` | Marks the start of the query string |  
| `=` | Separates parameter name from its parameter value in a name-value pair |  
| `&` | Used between parameters when adding multiple parameters |

But the use of query strings imply some limitations: they have *limited length*, so they only can be used to pass a limited amount of data; the parameters are *visible* in the URL, which is concerning in the context of sensitive information; and some special characters have to be *encoded*, because they are syntactically meaningful in query strings.

## URL Encoding

A URL only allows the use of certain characters in the ASCII standard table; reserved or unsafe ASCII characters not used for their original semantics in URLs must be encoded: Any character that is not a safe alphabetic character, a number, or a reserved character being used needs to be encoded. 
Reserved characters are the characters that have a special use and meaning within the URL, for example, `/`, `?`, `&`, or `:`. Unsafe characters are those that can be misinterpreted by some systems, like the escape character `%`, empty spaces ` `, `#`, `~`, etc. All characters without equivalent in the standard ASCII table should be encoded too. 

To convert the reserved, unsafe, and non-ASCII characters to a format acceptable to the URL, we must *encode* the characters. With encoding we mean the replacement of the characters with a `%` symbol as an escape character and two hexadecimal symbols, a sequence that represents the UTF-8 equivalent of that ASCII character. 

## Domain Name

A domain name is a unique identifier that refers to an IP address, or a set of IP addresses. It consists of a combination of, at least, two parts: a top-level domain (TLD) to the right of the (rightmost) `.`, and a second-level domain (SLD) to the left of the (rightmost) `.`.

So, for instance, for the domain `google.com`, `com` is the TLD and `google` is the SLD. There are other common TLDs: `net`, `org`, `gov`, etc.

Some domain names may contain an optional, third-level domain (called a subdomain), which would further delineate and carve out a unique IP address pointing to a specific server. Some common subdomains are: `www`, which is often the default subdomain for a home page, blog, which delineates the organization's blog, or `ftp`, which points to a server that handles file uploads.

## Domain Name System or DNS

To identify a host on the internet, we use IP addresses as labels, plus a port number that specifies the dedicated channel for communication. However, as the internet is composed by an innumerable number of hosts, it would be extremely confusing tracking which addresses identify which hosts, and wouldn't be very human-friendly. For this reason, the DNS service exist.

DNS is a distributed (not centralized) database across multiple, hierarchically organized servers, that is used for mapping the domain name with human-friendly host format like `www.google.com` to the appropriate IP address, like `197.251.230.45`, in an HTTP request.

In practice, this involves a process before the actual request is sent to the intended server:

1. After the URL is entered, the client (like a browser) creates an HTTP `GET` request, packs it up and sends it to the device's network interface.
2. If the device has already the IP address for the domain name in its cache, it sends it to that address.
3. If the device is not cached, a DNS request will be made to the DNS to retrieve the appropriate IP address for that domain.
4. After the DNS request has been responded, the device directs the request to the server with the IP address requested, and saves the IP address in its cache for future use.

## HyperText Transfer Protocol or HTTP

HTTP is a protocol or system of rules for formatting messages between networked applications and the transmission of hypertext documents. It is a stateless Application layer protocol, that functions according to a request-response cycle in a client-server model. In this model, a *client* (like a web browser) submits a request to a *server*, a process (like a web server's, that provides resources to clients and perform other functions on its behalf) running on another host. This message exchange relies on the TCP/IP operating at layers below to be transported successfully. When the server receives the request, it returns a *response*. The requests and responses are basically strings (text-based messages) that follow a standardized format that both parts are able to understand and process. HTTP is the protocol that governs this format.

HTTP has been through several iterations and changes since its inception in 1991, with the 0.9 version. HTTP/1.0, HTTP/1.1, and HTTP/2 have been adding features and improving its functionality; there is an HTTP/3 currently in development.

Is a robust and efficient protocol, but also insecure just by itself, as the requests and responses are not protected or encrypted.

## The client-server model

The client-server model is a type of network architecture by which the participants in the message exchange have clearly defined roles: *client* and *server*. Clients (in the context of HTTP, usually specialized processes such as web browsers) send requests to the servers expecting to retrieve some data or resource, or to trigger some action within the server on the client's behalf; servers send back a response to that request, with the data or resource requested, and/or some information about the action performed and valuable information about the processing of that request. Upon receipt, the client process that response. There may be many clients connected to a single server, but the dynamic is the same. 
There are other types of network architecture, like the peer-to-peer (P2P) model, which is a node-based no-hierarchy model.

## Server

The server can be a single device, but also an entity representing multiple devices working together, or even a whole infrastructure comprised of main machines or devices, and *intermediary machines*. There are however, three primary server-side infrastructure pieces or structures:

- The web server, that respond to request for static resources, like files or media, without data processing.

- The application server, that hosts the application code or *business logic*.

- Some form of permanent database from which retrieve or create the data, like a relational database.

## HTTP Request

An HTTP request is a string (text-based) message sent from the client to the server with the intent to retrieve a resource on the server or make the server to perform some action on its behalf. This string adheres to a specific format defined by the version of HTTP used. Many actions can trigger HTTP requests, for example, entering a URL into the browser bar, loading a website's image or clicking on a link or submitting a web form, all these actions cause the client (our browser) to send an HTTP request to a server.

An HTTP is composed by two elements: A *request header*, that includes a *request line* and some *headers* or *header fields*, and an (optional) *Body*. Each header is followed by a new line character. A blank line separates the header from the body.

- Header:
  * Request line: It contains the *request method*, which indicates the kind of action we want the server to perform, the local *path* to the resource requested within the server, and the HTTP *version* being used (also required from HTTP 1.0), all separated by a single space. For example:
  `GET /doc/test.html HTTP/1.1`

  * Headers: The headers are colon separated name-value pairs that provide additional metadata about the client, the resource or the request itself. The `host` header must be included in HTTP/1.1 and subsequent versions. Other headers are optional and can be useful to define the preferred client's connection type (like `keep-alive`), the languages it accepts, to provide session data (via the `session id`), or to define the `Content-Length`.

- Body:
  It is usually used for `POST` request, to send the actual data to the server. Its content depends on the particular method. Not used for GET requests.

## HTTP Request Methods

The two main request methods are `GET` and `POST`:

* `GET`: These requests are used to retrieve resources on the server. It is the method used when we click on most weblinks, enter a URL into the browser's bar, or when automatically the browser loads webpage contents. If we want to send data using this request method, we have to use visible query parameters in the URL, which exposes the data sent and implies a length limit.
* `POST`: These requests are used to send some data to the server and/or to trigger some server-side action. We usually employ this method when we submit a form, send large files to a server, or when we authenticate as users. The great advantage of this method is that we can send much larger data via the request body, and that the data sent is not exposed (useful in case of sensitive information).

There are other methods used for specific situations: `PUT`, `HEAD`, `DELETE`, `CONNECT`, etc.

## HTTP Response

An HTTP response is a string (text-based) message sent from the server to the client in response to a request sent by the latter. This response provides the client with the requested resource, inform the client that the requested action has been successful, or that it has been an error processing the request.

An HTTP response is composed by two elements: the response *header*, that includes the *status* or *response line*, and a series of *headers* or *header fields*, and a message *body*. As in HTTP requests, each header is followed by a new line character, and a black line separates the header from the body.

- Header:
  * Status line: It contains the HTTP *version* used, a three digit status code, and a status text. All separated by a single space. The status codes indicate the status of the request, and the status text is a short description of the code meaning. An example of a status line could be: `HTTP/1.1 200 OK`. The status line with the status code is the only required element in a response.

  * Headers: The headers are colon separated name-value pairs that provide additional information about the response data and the server that sent it. They can be useful to help the client displaying the response, caching the response for future use, the type of encoding used in the data, etc. It can also redirect the client to a new `Location` where the resource has been moved.

- Body:
  It consists of the data for the requested resource, like HTML code or a file's raw data.

## Common status codes

The status codes are classified by number range, with each range of code numbers having the same basic meaning.
* 100-199: Informational.
* 200-299: Successful.
* 300-399: Redirection.
* 400-499: Client error.
* 500-599: Server error.

| Status Code | Status Text | Meaning |
| --- | --- | --- |
| 200 | OK  | The request was handled successfully |
| 302 | Found | The requested resource has changed, and usually means a redirect to another URL |
| 303 | See Other | The URL you're trying to access is redirecting you to another URL, and this communication doesn't happen correctly |
| 404 | Not Found | The requested resource could not be found |
| 500  | Internal Server Error | The server has encountered an internal error |

## The HTTP cycle

HTTP is an Application protocol in both TCP/IP and OSI models' last layer, that functions according to a request-response cycle in a client-server model.

Let's describe this cycle in detail following a basic `GET` request model when the user wants to visit a webpage in the browser, for example:

1. The user enters the URL in the browser.
2. An HTTP `GET` request is submitted by the client (the web browser), consisting at least of the method and the path, and usually some headers (like `Host` if using HTTP/1.1 or subsequent versions)
3. The `GET` request is sent to a port *p* of the user's device, where *p* is the port number set by the client's process.
4. The DNS lookup maps the destination IP address for the URL host, if the IP for that host is not cached by the client, to direct the HTTP request to the server once the DNS request has been responded.
5. The processing and successive encapsulations of lower layers is taking place: multiplexing and segmentation in the Transport layer; packaging and network-to-network traveling at the Internet layer; framing, *de-framing* and reframing, and device-to-device transportation at the Data Link layer level, etc., until the packet reaches the server, opens it, reassembles the segments, performs demultiplexing, and finally opens the request on port 80 (the port by default for HTTP) and processes the HTTP request sent by the client.
6. Once the server has processed the request, it then sends an HTTP response to the client, including a header with the status line, and usually some headers with information about the response data and useful information for the client, plus the data of the resource requested in the response body, in this case, raw HTML code.
7. When the client receives the response, it will process the information within it and will render the HTML code contained in the response body in a human user-friendly way, with the help of the response headers. And, if the HTML contains references to other resources (like images), the browser automatically will send the corresponding `GET` requests for those too, and the cycle will be repeated until the client stops sending more requests.

## State and statelessness

In the context of the HTTP and network communications, *state* refers to persistent information between requests, to which the server would have to hang onto; however, HTPP is a *stateless* protocol: each request/response cycle is independent, and the server does not keep any information between them. For this reason, the system does not have to perform any kind of cleanup when a new request is being sent to it. This makes HTTP a very resilient and efficient performance-wise, but also difficult to work with when we are building web applications that we want them to simulate a *stateful experience*.

We talk about a stateful application when the application 'remembers' past interactions, for example, by keeping track of users and maintaining their logged in status and session during multiple request/response cycles, or some kind of user 'state', like a shopping cart. In order to achieve features like these, the application developer can use different tools and techniques to simulate the stateful experience, like session IDs, cookies, and AJAX (Asynchronous JavaScript and XML).

## Sessions

In the web applications' context, a session refers to the user's visit to a website, or a web application. In order to maintain a sense of *statefulness* and keep the user logged in, the client and the server can employ HTTP requests/responses in various ways, but the most common is by the means of *session identifiers* or session IDs. A session ID is a unique value that the server assigns to a specific user for the duration of that user's session. The session ID can be stored as a *cookie*, a form field, or simply by incrementing static numbers, but the usual way is storing them as cookies on the client's (the browser) side. 

Session IDs works as unique tokens that, first, are sent from the server to the client in an HTTP response; from then on, the client will append this session ID to all subsequent request that this client sends to this server, allowing the server to identify that specific client, and generating some kind of appropriate content unique to that user in the response, thus simulating a sense of state persistence between requests. Again, this is a simulation, as HTTP is *per se* a stateless protocol.

This technique implies a process that generates certain overhead:
1. Each request has to be processed to check if includes a session ID.
2. If it does, the server has to implement some process to check for the validity of that session ID, rules for session ID expiration, and how to store the user's session data.
3. It has to retrieve that session data from some kind of database.
4. And then the server has to generate a unique response based on that session's data.

This whole process compels the web developers to implement some kind of session optimization.

## Cookies

Employing cookies is the most common way to store session information. Cookies are unique, expiring session identifiers that are sent from the server to the client, to be stored in the client's side in the form of small files. The cookies will be sent to the server in all subsequent requests, so the server can identify the client's session on each request, store and/or retrieve the appropriate data for that session, and generate unique responses to that client with that retrieved data, thus simulating a sense of persistent information or state between request/response cycles (as HTTP is a stateless protocol)

In a more practical terms, usually the cookie data is sent to the client in an initial response via `set-cookie` headers, and then that cookie data is included in the client's following requests in the `cookie` request header.

## AJAX

Standing for Asynchronous JavaScript and XML, this technique allows the client (the browser) to submit requests and process the server's responses asynchronously, which in practice means that the webpage does not have to refresh and load again for each one of them.

AJAX requests are normal HTTP requests that are processed normally by the server, however, their great advantage is that their responses don't make the browser refresh and load the site again, but are processed by special *callback* functions, usually some client-side JavaScript logic. This callback functions are pieces of code that are passed to other functions, expecting to be triggered by some *event*, like an input from the user. 

## Security and HTTP

Many of the most advantageous HTTP features, like its simplicity (requests and responses are technically just shared strings), and its difficulty to control, are double-edged swords: they imply risks that we have to take seriously, specially those about security. HTTP is very difficult to secure. For example, HTTP requests and responses are not encrypted, and they can contain sensitive data, like passwords or even session IDs that uniquely identify a user. For this reason, and to avoid the risks of *packet sniffing*, *session hijacking*, and *cross-site scripting* (XSS), some security measures should be employed and encouraged. These measures include, among others, using HTTPS and same-origin policies, establishing special session management rules, and sanitizing any kind of user input on the websites.

## HTTPS

HTTPS is a protocol on which every request and response is encrypted via a protocol called TLS (Transport Layer Security), based on a system of certificates and shared encryption keys, before it is sent out to the network. By default, it uses the port number 443.

## Same-origin policy

This is one of the most important guards against session hijacking: This policy allows for the unrestricted access between resources of the same *origin*, but restricting some requests/responses between resources from different origins. *Origin refers to the same shared scheme, host, and patch.*

When almost any cross-origin resource request from APIs is restricted by this policy, there are interactions from different origins that are not restricted: for example, linking, redirections, form submissions, or embedding of external resources (like videos). However, this policy includes a *Cross-origin Resource Sharing* or CORS implementation, that allows for certain specified allowed cross-origin resource request thanks to adding special HTTP headers.

## Session hijacking

This hacking attack implies usurping the identity of some user or client by getting hold of its unique session identifier (like a cookie). With the intercepted session ID, the hacker can access resources from the victim's session by including it in the requests, thus tricking the server, that believes it's processing the normal client's session.

There are various ways to deal with this security risk, but the most common are: the implementation of some kind of session resetting, that makes the user to re-authenticate him/herself after some period of time, in order to access sensitive data; and setting short session expiration times. Of course, the use of HTTPS across the entire application has to be considered and implemented as well.

## Cross-Site Scripting or XSS

In websites that allow some kind of input from the user, like comment forms, the hacker can use the input fields to inject some kind of malicious HTML or JavaScript code into the site, so the browser can execute it, being able to bypass the XSS, as the infection comes from the web code itself.

The best ways to prevent this attack are: the sanitation of any kind of user input, removing any kind of code parts that might imply security risks, like `<script>` tags; *escaping* all user input, or just certain characters, replacing them with a combination of ASCII characters, which renders inoffensive; or just accepting already secure forms of input, like Markdown code.

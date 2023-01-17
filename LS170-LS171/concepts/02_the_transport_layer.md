## Multiplexing and demultiplexing
  
Multiplexing is a general concept in the context of network communication: it means the transmission of multiple and different signals over a single channel. Demultiplexing refers to the reverse process. For example, at the physical level it can mean the optical fiber cables transporting multiple light signals at different angles of refraction. At the application level, multiplexing is made possible by the use of *network ports*.

## Port

A port is a unique identifier in the form of an unsigned 16 bits number, assigned to a specific process or type of network service running on a host. In decimal this number can be an integer between 0 and 65535, with each section within this range reserved for specific purposes:

* 0-1023: Commonly used network services.
    * 20-21: File Transfer Protocol (FTP) Data Transfer
    * 25: Simple Mail Transfer Protocol (SMTP) E-mail Routing
    * 53: Domain Name System (DNS) service
    * 80: Hypertext Transfer Protocol (HTTP) used in World Wide Web
    * 443: HTTP Secure (HTTPS) HTTP over TLS/SSL
* 1024-49151: Registered ports, assigned as requested by private entities like Microsoft or IBM. Sometimes they are also used for allocation as ephemeral ports on the client side.
* 49152-65535: Dynamic or private ports, used for customized services or for allocation as ephemeral ports.

The source and destination port numbers are included in the PDUs for the transport layer: so, if the IP addresses in the packet header can be used to direct data from one host to another, the IP address and the port number *together* are what enables end-to-end communication between specific applications on different machines. This combination of IP address plus port define a *communication end-point*, generally known as a *socket*

## Socket

At a conceptual level, a socket is an abstraction for an end-point used in inter-process communication, defined by an IP address-port pair.

At the implementation or programming level, a socket refers to the instantiation of socket objects representing dedicated virtual connections between processes.

## Sockets and connections

In an example of a connectionless system, we could have a socket object defined by the IP address of the host machine and the port assigned to a particular process running on that machine. In this case, this socket would simply process any incoming messages as they arrived, sending any responses as necessary.

But in a connection-oriented system, we could instantiate a new socket object each time a new connection is established, defined this time by a *four-tuple* (IP address of the source, port number of the source, IP address of the destination and port number of the destination), thus creating a *dedicated virtual connection* between specific processes running on one host and specific processes running on another. This allows us to set additional rules to manage communications, adding more reliability and flexibility to them.

## Reliability

The first 3 layers of the OSI model (2 in case of the TCP/IP model), the media layers (Physical, Data Link and Network) are *unreliable*, which means that by themselves they don't provide a data loss handling system: it is left to the layers above to implement protocols that ensure us a reliable communication channel.

There are four fundamental elements required for any reliable data transfer:

* In-order delivery: The data is received in the order it was sent.
* Error detection: Data corruption can be identified.
* Data loss handling: Missing data can be retransmitted.
* Duplication: Duplicate data is eliminated.

TCP provides a reliable communication system that meets these elements, with the cost of speed; UDP provides a much faster system of communication, with the cost of reliability, as it does not meet these four criteria.

## Pipelining

Instead of sending one message at a time, which wouldn't be very efficient (too much time would be wasted waiting for *acknowledgements* or message arrival confirmations), we can send multiple messages at the same time. This mechanism is called pipelining. 

Although there are different ways to implement this approach, the basis is the same: a sender set a *window* size value representing the maximum number of messages that can be *in the pipeline* at the same time; once the sender has received the acknowledgements for the messages in the window, it moves the window on, so it can send more messages.

## TCP

The Transmission Control Protocol or TCP is the first of the host layers (before the Session, Presentation and Application layers in the OSI model; it is included in the Transport layer of the TCP/IP model) and provides, as its most fundamental characteristic, a reliable channel for network communication on top of an unreliable channel (the media layers), implementing a reliability based on its four fundamental principles: in-order delivery, Error detection, Data loss handling, and *Deduplication*.

Its PDU is named *segment*, and it also provides *multiplexing* and the encapsulation of data via *segmentation*. More of its features are mechanisms for *flow control* and *congestion avoidance*, in order to balance out the impact on performance from the reliability systems.

## Segment

Segments are the PDUs from the TCP protocol. It is formed by a header with metada, and a data payload, which is the data coming from layers above (like an HTTP request), thus, as other PDUs, providing a form of encapsulation. 

The most important fields in the segment's header (most of them are related to the TCP reliability's implementation):

* Source Port and Destination Port: This is what makes the multiplexing features of TCP possible; the port, joined to the IP address in a packet, provides end-to-end connections between processes.
* Checksum: It provides the reliability principle of Error Detection. It is a value generated by the sender with an algorithm: if the value generated by the receiver using the same algorithm does not match, the data is corrupted, and the segment dropped.
* Sequence Number and Acknowledgement Number: These fields make possible the other three principles of TCP reliability: in-order delivery, Data loss handling, and Deduplication.
* Window Size: Related the TCP flow control mechanisms, it is used for pipelining.
* Boolean flags: They are related to the importance or urgency of the payload (URG, PSH), and the establishment, management and ending of a TCP connection's state (SYN, ACK, FIN, RST).

## Three-way Handshake

TCP is a connection-based protocol, which means that, before application data can be sent, a connection has to be established between sender (client) and receiver (server) via a process named the *Three-way Handshake*:

This is a simplified version of this process:

1. The client sends to the server a TCP segment with the SYN flag set to *true* (`1`). This is the SYN (for *synchronize*) message, and includes the first of the sequence numbers that will be used during the connection.
2. The server, upon receiving the SYN message, responds to the client with a segment with the SYN and ACK flags set to `1`.
3. When the client receives the SYN ACK message, it sends back a segment with just the ACK flag set to `1`. Upon sending this last message, the client can start sending the actual application data. The connection has been established.

A connection changes of state during its lifetime. There are 10 (+ 1) possible states for a connection: `LISTEN`, `SYN-SENT`, `SYN-RECEIVED`, `ESTABLISHED`, `FIN-WAIT-1`, `FIN-WAIT-2`, `CLOSE-WAIT`, `CLOSING`, `LAST-ACK`, `TIME-WAIT` (and `CLOSED`, a fictional state representing the absence of a connection). `LISTEN` means when the server is waiting for connection requests, and `ESTABLISHED` means that the host are ready for data transfer. The rest are related to the establishment and closing of a connection.

As one can expect, this process implies an entire round-trip of latency before the actual data transfer. Considering that this has to occur every time a connection is established, the process has a concerning impact on any TCP application. For this reason, TCP incorporates a system for flow control and congestion avoidance, in order to compensate for the additional overhead and have more efficient data transfers.

## Four-way Handshake

A process similar to the Three-way Handshake, used for terminating TCP connections.

## Flow Control

A sender is only able to process some amount of data at a time; when data is waiting to be processed by the receiver, it is stored in a buffer, whose size will depend on the memory allocated on each situation. Flow control is a technique to prevent the sender from overwhelming the receiver with too much data at once. This is achieved thanks to the dynamic use of the WINDOW field in the segments sent: if the receiver's buffer is getting full, the receiver can let the sender know by adjusting and setting a lower WINDOW field value in the segment sent back to it.

However, in order to prevent both parts to overwhelm the underlying network, an extra congestion avoidance system is needed.

## Congestion Avoidance

When there is more data in the network than its capacity to process it and transfer it, we say the network is *congested*, and data is lost: when the routers' buffers are full of data waiting to be processed, extra data *over-flows*, and the data packets are dropped. Thanks to the TCP's capacity to retransmit lost data, it can use the amount of retransmitted data as a sign that the network is congested, and can adapt dynamically the size of the transmission window for each situation. Each variant of TCP use different algorithms and approaches to determine the dynamic size of the transmission window in various conditions.

## Head-of-Line (HOL)

Beside the latency overhead that the reliability systems adds to the TCP, there is also the risk of Head-of-Line blocking. As a general term, it refers to the situation when the delay or block in delivering or processing a message in a sequence of messages, delays or blocks the delivery and processing of all the subsequent messages.

In TCP this is a risk because this protocol implements in-order delivery and retransmission of lost data, which makes communications reliable but also more prone to increased queuing delay. 

## UDP

The User Datagram Protocol or UDP is a connectionless network communication system that sacrifices the reliability of TCP for speed and flexibility, implementing low-latency and loss-tolerating connection between applications. However, like TCP, it does provide multiplexing, which makes it suitable for many situations that TCP wouldn't be able to handle. Its PDU is called a *datagram*

Like TCP, the datagram encapsulates data from layers above. Unlike TCP, UDP does not guarantee delivery of messages or their order, no connection establishment processes (it is connectionless), no flow control or congestion avoidance mechanisms. But, as it does not need a connection for the delivery of the data, the latency of the TCP Three-way Handshake is simply removed, and, due to the lack of in-order delivery, the risk of Head-of-Line blocking disappears as well. With UDP, latency is less of an issue, as the data flows in one direction, from sender to receiver.

Usually, UDP is used as a base from which additional, specifically required services are implemented. For example, building a custom UDP application, fast with sequencing, but without retransmission. The best candidates for these approaches could be streaming services, on-line gaming, or video chat software. Some best practices have been established, though, like the addition of some form of congestion avoidance.

## Datagram

The datagram is a very simple PDU, with the payload and a header with only four fields, one of them optional when using IPv4 in the Network/Internet layer:

* Source Port and Destination Port: As in TCP, this is what makes the multiplexing possible in UDP; the port, joined to the IP address in a packet, provides end-to-end connections between processes.
* Length: The length in bits of the whole PDU, including the payload
* Checksum: Provides a value to be checked for error detection.

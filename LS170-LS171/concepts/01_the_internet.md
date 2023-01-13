## Network

In a broad sense, a network is composed by two or more devices connected to each other directly, in case of a net of just two devices, or indirectly, via a bridging device, usually a switch or a hub, plus some form of physical infrastructure to transmit data, like cables or radio signals. This forms a distinct network in which all the devices can communicate to each other by transmitting the data according a system of rules. 

In order to communicate to other networks, routers are added: these devices can route the traffic outside their own network to other routers connected to other networks. This way, they act as gateways into or out of the network.

## Local Area Network (LAN)

A LAN is composed by multiple devices (or hosts) connected together thanks to a bridging device, like a switch or a hub, plus the physical infrastructure to make this possible, like network cables or Wi-Fi signals. 

## Internet

The internet is essentially an immense web of interconnected networks, with a system of routers between those networks to direct the network traffic: it is *a network of networks*.

## Protocol

A protocol is a system of rules to manage the exchange or communication of data. For example, TCP, UDP, HTTP, IP, Ethernet... In a network context, the reason of the existence of numerous protocols are:

1. The development of rules appropriate to different aspects of network communications. For example, TCP is a protocol that governs the transport of messages between applications, while HTTP governs the structures of those messages.
2. The development of different rules to address the same aspect of communication, but in different ways for specific cases or needs. For example, TCP provides a *reliable* transmission of messages, and UDP provides a *fast* transmission of messages.

## The Layered Model

The overall system of network communication is highly complex, in which numerous levels or *layers* of protocols are functioning together. In order to better understand this complexity, different models of network communication have been developed, models that modularize and structure those protocols into layers, each one with different criteria on how to group the protocols into the layers. The most important models are the TCP/IP model, that divides de layers according the *scope of communications* between each other; and the OSI model, that does it according to the *function* each layer provides.

TABLE MODELS

## Protocol Data Unit (PDU)

A PDU or Protocol Data Unit is a block of data transmitted over a network; each protocol or protocol layers name this unit differently (*segment* for TCP in the Transport layer, *packet* for IP in the Internet/Network layer, etc.) but all are composed by the same elements:

* A Header, that contains protocol-specific metadata about the PDU, like the source and destination IP addresses in a *packet*, or boolean flags.
* The Data Payload, that contains the actual data we want to transport over the network according a specific protocol at a specific layer. One very important thing is that the entire PDU from a layer above composes the data payload for the PDU of the layer below (this is a form of data encapsulation, as we are hiding data from one layer, encapsulating it inside the PDU of the layer below)
* An optional Footer or Trailer, that, like the Header, contains more metadata about the PDU.

The use of PDUs in our model allows us to create a separation between the protocols at different layers, a system in which a layer below provides a service to the layers above. This way, this separation of layers provides a form of abstraction that also allows us to the use of protocols at some layer without having to worry about the layers working underneath.

## The Physical Network

The lower layer in the OSI models is the Physical layer, whose function is the transmission and reception of raw bit streams over a physical medium, converted to electrical signals, light signals or radio waves. This is the most basic level underneath all the upper layers of abstraction, the layer that connects them all to the physical world via tangible pieces like cables, wires, radio signals and networked devices.

Of course, the laws of physics determine how these bits are transported, involving real-world limitations that, ultimately, have an impact on how protocols function further up at the layered model.

Performance wise, the two main characteristics of the physical network are *latency* and *bandwidth*:

* Latency is a measure of delay: the amount of time it takes for some data to get from point A to point B, for example, two nodes in a network, or a client and a server. It is usually measured in milliseconds (ms). 

* Bandwidth is a measure of capacity: it indicates the amount of data that can be transferred in a unit of time, usually a second.

## Latency

Latency is a measure of delay: the amount of time it takes for some data to get from point A to point B, for example, two nodes in a network, or a client and a server. It is usually measured in milliseconds (ms). 

There are different types of delay; the total latency between two points is the sum of all the types of delay, given in milliseconds:

* Propagation delay: it is the amount of time it takes for a message to travel from the sender to the receiver, and can be calculated as the ratio between distance and speed.

* Transmission delay: it is the amount of time it takes to push the data onto a network device or *link*, like switches or routers.

* Processing delay: it is the amount of time it takes for the data sent to be processed at a link.

* Queuing delay: If a network device receives more data that it can handle at a time, it queues or *buffers* the data; the time that data is waiting in the queue to be processed is the queuing delay.

Other important concepts about latency are the *Last-mile Latency* and the *Round-trip Time*. The Last-mile latency refers to the delays involved in getting the data from, for example, the ISP's network to the destination network, as the data is approaching to its destination the hops become more frequent and shorter, being directed down the network hierarchy to the subnetwork.
The Round-trip Time refers to the time for a signal to be sent, plus the time for a response to that signal to be received.

## Hop

A hop is the journey of some data from one node in a network to another, like routers between networks. 

## Node 

A node in a network can be understood as a router that process the data and forward it to the next node on the path towards its destination.

## Bandwidth

Bandwidth is a measure of capacity: it indicates the amount of data that can be transferred in a unit of time, usually a second. This measure will vary across the network, and won't remain at a constant level on the data's entire journey from the sender to its destination.  The bandwidth that a connection receives is the lowest amount at a particular point in the overall connection.

A point at which bandwidth changes from relatively high to relatively low is generally referred to as a bandwidth *bottleneck*.

## Switch

A switch is a piece of hardware to which you connect devices to create a network. Unlike a hub, the switch uses the destination MAC address to direct a frame only to the device for which it is intended.
 
## Hub

A hub is a piece of hardware that replicates a message and forwards it to all the devices on a network.

## Router

A router is a networking device that forwards data units between networks; they perform the traffic directing functions between networks and on the global internet. A data unit is forwarded from one router to another until it reaches its destination node.
 
## Link/Data Link layer

This layer is the second layer in the OSI model, between the Physical and the Network layers, and it is the first layer in the TCP/IP model. The protocols at this layer are concerned with the transmission of data frames between two nodes connected by a physical layer: they identify devices on the physical network, and move the data over the network between the devices that comprise it, like hosts, routers or switches.

## Ethernet
The most commonly used protocol at this layer is the Ethernet protocol, with its different standards. The most popular and used of these standards is the IEEE 802.3; different standards have different framing structures. The main difference between standards is the framing structure, as newer Ethernet versions have more fields, for example. In any case, the two main aspects of this protocol remain the same: *framing* and *addressing*.

## Frame

The frame is the Protocol Data Unit for the Ethernet protocol. It encapsulates the packets from the Network/Internet layer above: the Link/Data Link is the lowest layer at which this form of encapsulation occurs. The Ethernet frame gives a *logical structure* to the stream of raw binary data at the physical layer: this structure defines what bits comprise the metadata to be used in the transport process of the frame, and what bits comprise the actual data payload to be transported.

A device is able to make the distinction between the different parts of a frame because each part and field have specific lengths in bytes, and appear at a specific order.

Important elements of Ethernet framing:

* Preamble and SFD (Start of Frame Delimiter): Sent before the actual frame as a synchronization measure for the receiver device, that prepares and identifies the following data as a frame. Length: The Preamble is 7 bytes and the SFD 8.

* Source and Destination MAC addresses: The source address is the MAC address of the device that created the frame, and the destination address identifies the device for which the data is ultimately intended. Length: each part is 6 bytes long.
* Length: The size of the Data Payload. 2 bytes.
* DSAP, SSAP, Control: They identify the protocol used for the Data Payload and information about the communication of the frame. Each 1 byte.
* Data Payload: It contains the whole PDU from the layer above, like an IP packet. This field is being used as an encapsulation mechanism for the layer above. It can be from 42 and 1497 bytes in length.
* Frame Check Sequence: The checksum generated by the device that created the frame. If it does not match the corresponding checksum generated by the device that receives this frame, the frame is dropped. (This protocol does not include any kind of data retransmission). 4 bytes.

* Interframe Gap: A very brief pause between the transmission of each frame, to help the device to receive the next frame. The length of this gap can vary according the connection capability, but it contributes to the Transmission Delay.


## MAC Address

MAC addresses are unique identifiers assigned to specific physical devices (the Network Interface Card or NIC) when they are manufactured. A MAC address is formatted as a sequence of six two-digit hexadecimal numbers, like, for instance, 00:B0:D0:63:C2:26. They are tied (burned in) to a specific device, and are flat and not hierarchical: they form a single indivisible sequence, unlike the IP addresses.

In a network with a switch as a bridging device, the switch keeps and updates a record (a MAC Address table) of the MAC addresses of the devices connected to it, associating each address with the Ethernet port to which the device is connected on the switch; it then uses the destination address in the frame to direct that frame only to the device for which it is destined. This way, the MAC addresses are also responsible for directing the data between each (physical) point/hop of its entire journey (physical addressing).


## Internet/Network Layer

This layer is the third in the OSI model, the last of the media layers (the others are host layers), between the Data Link layer and the Transport layer. In the TCP/IP layer, it is the second, between the Link and the Transport layers. The primary function of protocols at this layer is the structuring and managing the communication in a multi-node network: the communication between hosts on different networks, including IP logical addressing, routing, and traffic control.

Internet Protocol or IP is the most vastly-used protocol in this layer, with its two versions, IPv4 and IPv6, the former still being the predominant, but the most important features of these protocols are the same: routing capability via the IP *logical addressing*, and the encapsulation of data from layers above into *packets*.

## Packet

The PDU in the IP Protocol is the *packet*, composed by a header containing metadata about the packet transportation, and the payload, with the entire PDU from the Transport layer above, usually a TCP segment or a UDP datagram. As with frames, logical separation of the elements in the packet is determined by the size of each element and the order in they appear.

Important fields of a packet header:

* Version: Indicates the IP version
* ID, Flags, Fragment Offset: These fields control the fragmentation of a Transport layer PDU in case it is too large.
* TTL: A Time To Live value that sets the maximum number of network hops a packet can take before being dropped.
* Protocol: The protocol used for the Data Payload (TCP, UDP, etc.)
* Checksum: An error-checking value: if it does not match the corresponding checksum generated by the device that receives the packet, the frame is dropped. (This protocol does not include any kind of retransmission of dropped packets).
* Source Address: the 32 (or 138 in case of IPv6) bits value that identifies the sender of the packet in a network.
* Destination Address:the 32 (or 138 in case of IPv6) bits value that identifies the destination of the packet in a network.

## IP Addresses

IP address are numerical values associated to specific hosts in a computer network that uses the Internet Protocol for communication. They serve two main functions: *network interface identification* and *location addressing*.

Contrary to MAC addresses, they are not physical, but logical: they are not tied to specific devices, but rather assigned to particular devices as they join a network. This IP address assignment follows certain rules, as the local network defines a range of available addresses; this is possible thanks to a hierarchy by which the overall network is divided into logical subnetworks, defined by the range of IP addresses available to it.

Each network defines the address at the start of the range as the *network address*, and the last as the *broadcast address*. All the rest can be assigned to other devices on the network. Is the network address what identifies the specific network segment: if a router wants to direct a packet to any address in a range, it just needs to keep a record of which router has access to it, with the network address, thus creating a hierarchical and logical structure.

IP addresses can be divided further to create smaller sub-nets (sub-netting), more tiers within the network hierarchy.

There two variants for IP addresses, according each IP version, 4 and 6:

* In the IPv4, the addresses are represented by 4 sets of numbers, each containing 1 byte. The first two sets of numbers usually reference, respectively, the network and the subnetwork. The third is the host, and the fourth part references a device connected to that host.

* In case of the IPv6, the IP address is broken into 8 sets of hexadecimal digits, each containing 2 bytes of information. The first 4 sets are used to locate a specific network on the internet. The last 4 sets are typically used to identify a particular interface or device within that network.

## Routing and Routing Tables

All routers on the network keep a record of a local *routing table*. When an IP packet is received by a router, it reads the IP address of the destination and matches it agains a list of network addresses in that routing table. The matching network address will determine where in the network hierarchy that subnet is, and it will select the best possible route for the packet to reach its destination according various factors.

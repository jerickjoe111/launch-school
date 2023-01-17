## Transport Layer Security or TLS

One of the main disadvantages when working with HTTP is its lack of security: requests and responses are basically structured string messages shared across networks, and they can be easily faked, tampered with or intercepted to read their contents. By itself alone, HTTP doesn't provide any kind of security measures to counter these risks. This is where TLS comes into play: TLS, or Transport Security Layer, provides a secure message exchange over an insecure channel like HTTP.

The original SSL 1.0, 2.0 and 3.0 protocols were born from 1995 and 1996, until the last SSL 3.0 was upgraded and renamed TSL 1.0 in 1999. Since then different versions have been coming out; the most recent is TSL 1.3, from 2018.

TLS works mainly by bringing three basic services onto the table, here studied as separated, but in practice used in conjunction:

- Encryption: TLS can encode requests and responses in the way only those with the correct key can decode them. The symmetric key is also exchanged by secure means.

- Authentication: TLS provides a service to verify the identities of those who participate in the message transfer via a system of exchanged certificates given by trusted authorities.

- Integrity: TLS can also check if a message has been altered or faked.

However, useful as these services are, the impact that they have on the connection performance has to be taken into consideration, as they can add up to several round-trips of latency.

## TLS Encryption Service

This is the way by which TLS creates a secure connection between parties: it establishes an encrypted connection through a process called the *TLS Handshake*.

## The TLS Handshake

This process occurs right after the TCP Handshake (it assumes TCP is the protocol used at the Transport layer), and uses a combination of symmetric and asymmetric cryptography: after an initial message sharing phase, it uses *asymmetric* encryption to perform the *symmetric key exchange*, key that will be used by both parties in the *symmetric encryption*, on which the bulk of the message exchange will be conducted.

This is a general overview of a TLS Handshake process:

1. The client sends a `ClientHello` message right after the TCP `ACK`. This message contains the maximum supported version of TLS and the list of the *cipher suits* the client can accept.
2. The server responds to this message with a `ServerHello`, that sets the version of TLS and cipher suite that will be used, and includes the server's *certificate* and its *public key* (needed by the client to encrypt the data destined to the server via asymmetric encryption). A `ServerHelloDone` marker is also sent to confirm it has finished this step of the handshake. This step is important because it is used by both parties to agree on the TLS version and the cipher suite's algorithms that will be used.
3. When the client receives this marker, the symmetric key exchange process begins via asymmetric encryption with the server's public key. This process varies depending on the cipher suit's selected algorithm.
4. When both parties have received the symmetric key, `Finished` flags are sent to signal the end of the Handshake. The client and server can now start to exchange messages using a secure symmetric encryption.

Depending on the version of TLS, this process can add up to two round-trips of latency to each connection establishment process between client and server, on top of the TCP Handshake round-trip. This implies a considerable impact on performance that should be always taken into consideration.

## DTLS

Datagram Transport Layer Security: A protocol based on TLS (that assumes TCP) destined to secure UDP at the Transport layer.

## Cipher Suite

The set of cryptographic algorithms or *ciphers* that will be used for tasks of encryption, decryption, key exchange, symmetric key encryption, message integrity checks, etc. The ideal is to have a unique algorithm per each task. 

With the TLS Handshake clients and servers agree on which cipher suite and algorithm will be used, chosen from the ones supported by both, to secure and maintain the encrypted connection.

## TLS Authentication Service

TLS provides a service to verify the trustful identity of a party during the message exchange in a secure connection. This service is based on a digital certificate, part of the `ServerHello` message, the response to the `ClientHello` during the initial phase of the TLS Handshake. This certificate includes the public key, a *signature* (some data encrypted by the private key counterpart to the public key), and the original data before encryption. When the receiver receives the certificate, it uses the public key to decrypt the signature; if the resulting data matches against the original unencrypted data, also included in the certificate, then the sender is who it says it is, as only the owner of the corresponding private key could have encrypted that data.

The server's digital certificate is considered trustworthy when the certificate was issued by a *certified authority* or CA. The CA verifies the identity of the party requesting the certificate (the legal owner of the server, for example), and digitally signs the certificate with a signature that can be used to verify its authenticity. 

CAs exist in a hierarchy-based system or *chain of trust*, in which there are a series of lower level or *intermediate* CAs issuing certificates signed by CAs one level above them, creating thus a chain of trust until the top level, the *root CAs*, whose certificates are *self-signed*. Root CAs are part of a very small set of organizations, approved by browser and operating system vendors, who have proved their through longevity and prominence. However, this system is ultimately built upon trust, and not 100% infallible.

## TLS Integrity Service

TLS also provides a service to check the integrity of the message sent via the secure channel. TLS can be understood as a protocol working between HTTP and TCP, and, like other protocols, it employs its own PDU (a *record*) to transport application data: it encapsulates the data to be transported as the payload of a record, with also a header and a footer containing metadata. 

The footer of a record includes a MAC field (Message Authentication Code) that contains a *digest*, a small data generated via a hashing algorithm (also agreed upon in the TLS Handshake) used on the payload, before being encrypted with the symmetric key. When the receiver decrypts the payload, creates its own digest with the same algorithm: if it matches with the digest from the MAC field in the record's footer, the data contained in the payload has kept its integrity.

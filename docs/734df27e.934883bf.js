(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return h}));var o=a(3),n=a(7),i=(a(0),a(94)),r={slug:"/",title:"Frequently Asked Questions",sidebar_label:"FAQ"},s={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Why a new protocol?",source:"@site/../website-docs/faq.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/rsocket/rsocket-website/edit/master/website-docs/../website-docs/faq.md",version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1614656203,sidebar_label:"FAQ",sidebar:"docs",next:{title:"Motivations",permalink:"/docs/motivations"}},l=[{value:"Why a new protocol?",id:"why-a-new-protocol",children:[]},{value:"Why not make do with XYZ?",id:"why-not-make-do-with-xyz",children:[]},{value:"Why not HTTP/2?",id:"why-not-http2",children:[]},{value:"What about QUIC?",id:"what-about-quic",children:[]},{value:"Why \u201cReactive Streams\u201d <code>request(n)</code> Flow Control?",id:"why-reactive-streams-requestn-flow-control",children:[]},{value:"Connection Setup Requirement",id:"connection-setup-requirement",children:[]},{value:"Transport Layer",id:"transport-layer",children:[]},{value:"Proxying",id:"proxying",children:[]},{value:"Frame Length",id:"frame-length",children:[]},{value:"State Spanning Connections",id:"state-spanning-connections",children:[]},{value:"Future-Proofing",id:"future-proofing",children:[]},{value:"Prioritization, QoS, OOB",id:"prioritization-qos-oob",children:[]},{value:"Why is cancellation required?",id:"why-is-cancellation-required",children:[]},{value:"What are example use cases of cancellation?",id:"what-are-example-use-cases-of-cancellation",children:[]},{value:"What are example use cases of request-stream?",id:"what-are-example-use-cases-of-request-stream",children:[]},{value:"What are example use cases of fire-and-forget versus request-response?",id:"what-are-example-use-cases-of-fire-and-forget-versus-request-response",children:[]},{value:"Why Binary?",id:"why-binary",children:[]},{value:"Doesn\u2019t binary encoding make debugging harder?",id:"doesnt-binary-encoding-make-debugging-harder",children:[]},{value:"What tooling exists for debugging the protocol?",id:"what-tooling-exists-for-debugging-the-protocol",children:[]},{value:"Why are these different flow control approaches needed beyond what the transport layer offers?",id:"why-are-these-different-flow-control-approaches-needed-beyond-what-the-transport-layer-offers",children:[]},{value:"What are example use cases where RSocket flow control helps?",id:"what-are-example-use-cases-where-rsocket-flow-control-helps",children:[]},{value:"How does RSocket flow control behave?",id:"how-does-rsocket-flow-control-behave",children:[]},{value:"How does RSocket benefit a client-side load balancer in a data center?",id:"how-does-rsocket-benefit-a-client-side-load-balancer-in-a-data-center",children:[]},{value:"Why is multiplexing more efficient?",id:"why-is-multiplexing-more-efficient",children:[]},{value:"Is multiplexing equivalent to pipelining?",id:"is-multiplexing-equivalent-to-pipelining",children:[]},{value:"Why is the \u201cTLS False start\u201d strategy useful for establishing a connection?",id:"why-is-the-tls-false-start-strategy-useful-for-establishing-a-connection",children:[]},{value:"What are example use cases for payload data on the Setup frame?",id:"what-are-example-use-cases-for-payload-data-on-the-setup-frame",children:[]},{value:"Why multiple interaction models?",id:"why-multiple-interaction-models",children:[]},{value:"So why the \u201cRSocket\u201d name?",id:"so-why-the-rsocket-name",children:[]}],c={toc:l};function h(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"why-a-new-protocol"},"Why a new protocol?"),Object(i.b)("p",null,"The full explanation of our motivations in creating a new protocol can be found in the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/motivations"}),"Motivations document"),"."),Object(i.b)("p",null,"Some of the key reasons include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"support for interaction models beyond request/response such as streaming responses and push"),Object(i.b)("li",{parentName:"ul"},"application-level flow control semantics (async pull/push of bounded batch sizes) across network boundaries"),Object(i.b)("li",{parentName:"ul"},"binary, multiplexed use of a single connection"),Object(i.b)("li",{parentName:"ul"},"support resumption of long-lived subscriptions across transport connections"),Object(i.b)("li",{parentName:"ul"},"need of an application protocol in order to use transport protocols such as WebSockets and ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/real-logic/Aeron",title:"Efficient reliable UDP unicast, UDP multicast, and IPC message transport."}),"Aeron"))),Object(i.b)("h2",{id:"why-not-make-do-with-xyz"},"Why not make do with XYZ?"),Object(i.b)("p",null,"Ultimately all of the above motivations could be accomplished on top of most anything with enough effort. Those involved with starting this project desired something cleaner and more formalized. In other words, it was desired to have a solution that was not a hack."),Object(i.b)("h2",{id:"why-not-http2"},"Why not HTTP/2?"),Object(i.b)("p",null,"HTTP/2 is ",Object(i.b)("strong",{parentName:"p"},"much")," better than HTTP/1 for browsers and request/response document transfer, but unfortunately does not expose interaction models beyond request/response, nor support application-level flow control."),Object(i.b)("p",null,"Here are some quotes from the HTTP/2 spec and FAQ that are useful to provide context on what HTTP/2 was targeting:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u201cHTTP\u2019s existing semantics remain unchanged.\u201d")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u201c\u2026","\xa0","from the application perspective, the features of the protocol are largely unchanged","\xa0","\u2026\u201d")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u201cThis effort was chartered to work on a revision of the wire protocol\u2009\u2014\u2009i.e., how HTTP headers, methods, etc. are put \u2018onto the wire\u2019, not change HTTP\u2019s semantics.\u201d")),Object(i.b)("p",null,"Additionally, \u201cpush promises\u201d are focused on filling browser caches for standard web browsing behavior:"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u201cPushed responses are always associated with an explicit request from the client.\u201d")),Object(i.b)("p",null,"This means we still need SSE or WebSockets (and SSE is a text protocol so requires Base64 encoding to UTF-8) for push."),Object(i.b)("p",null,"HTTP/2 was meant as a better HTTP/1.1, primarily for document retrieval in browsers for websites. We can do better than HTTP/2 for applications."),Object(i.b)("p",null,"See also the RSocket ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/motivations"}),"Motivations document"),"."),Object(i.b)("h2",{id:"what-about-quic"},"What about QUIC?"),Object(i.b)("p",null,"QUIC isn\u2019t exposed or available enough at this point to be useful. If/when that changes, we hope to use it as a transport layer for RSocket."),Object(i.b)("p",null,"RSocket specifically is intended for layering on top of something like QUIC. QUIC offers reliable transport, congestion control, byte-level flow control, and multiplexed byte streams. RSocket layers on top of those things the binary framing and behavioral semantics of message streams (unidirectional and bidirectional), message-level flow control, resumption, etc."),Object(i.b)("p",null,"The RSocket spec was created with layering in mind so that on a protocol like TCP, RSocket includes frame length and stream IDs. But on something like HTTP/2 or QUIC, RSocket would skip those and use the ones offered by HTTP/2 or QUIC."),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/rsocket/rsocket/blob/master/Protocol.md#framing-format"}),"\u201cRSocket Protocol: Framing Format\u201d"),":"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"When using a transport protocol that does not provide compatible framing, the Frame Length MUST be prepended to the RSocket Frame.")),Object(i.b)("p",null,"And see ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/rsocket/rsocket/blob/master/Protocol.md#frame-header-format"}),"\u201cRSocket Protocol: Frame Header Format\u201d"),":"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Transport protocols that include demultiplexing, such as HTTP/2, MAY omit the Stream ID field if all parties agree. The means of negotiation and agreement is left to the transport protocol.")),Object(i.b)("h2",{id:"why-reactive-streams-requestn-flow-control"},"Why \u201cReactive Streams\u201d ",Object(i.b)("inlineCode",{parentName:"h2"},"request(n)")," Flow Control?"),Object(i.b)("p",null,"Without application feedback in terms of work units done (not bytes), it is easy to cause \u201chead of line blocking\u201d, overwhelm network and application buffers, and produce more data on the server than the client can handle. This is particularly bad when multiplexing multiple streams over a single connection where one stream can starve all others. Application layer ",Object(i.b)("inlineCode",{parentName:"p"},"request(n)")," semantics allows the consumer to signal how much it can receive on each stream, and allows the producer to interleave multiple streams together."),Object(i.b)("p",null,"Following are further details on some problems that can occur when using TCP and relying solely on its flow control:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Data is buffered by TCP on the sender and receiver side which means that understanding what is done at the level of the subscriber is not possible."),Object(i.b)("li",{parentName:"ul"},"A sender who needs to send a large work unit (larger than the buffering on the TCP sender or receiver sides) is stuck in a scenario of poor behavior where the TCP connection will cycle between full and empty, and under-utilize the buffering drastically (as well as the throughput)."),Object(i.b)("li",{parentName:"ul"},"TCP handles a single sender/receiver pair and Reactive Streams allows for multiple senders and/or multiple receivers (somewhat), and (most importantly) decoupling of data reception at the transport layer from application consumption control. An application may want to artificially slow down or limit processing separately from pulling off the data from the transport.")),Object(i.b)("p",null,"It all comes down to what TCP is designed to do (not overrun the receiver OS buffer space or network queues) and what Reactive Streams flow control is designed to do (allow for push/pull application work unit semantics, additional dissemination models, and application control of when it is ready for more or not). This clear separation of concerns is necessary for any real system to operate efficiently."),Object(i.b)("p",null,"This illustrates why every single solution that doesn\u2019t have built-in flow control at the application level (pretty much every solution mentioned aside from MQTT, AMQP, and STOMP) is not well-suited for usage, and why RSocket incorporates application-level flow control as a first-class requirement."),Object(i.b)("h2",{id:"connection-setup-requirement"},"Connection Setup Requirement"),Object(i.b)("p",null,"This is effectively the same as the HTTP/2 requirement to exchange SETTINGS frames\u2014see:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://http2.github.io/http2-spec/#ConnectionHeader"}),"HTTP/2 Spec: HTTP/2 Connection Preface")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://http2.github.io/http2-spec/#discover-http"}),'HTTP/2 Spec: Starting HTTP/2 for "http" URIs'))),Object(i.b)("p",null,"HTTP/2 and RSocket both require a stateful connection with an initial exchange."),Object(i.b)("h2",{id:"transport-layer"},"Transport Layer"),Object(i.b)("p",null,"HTTP/2 ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://http2.github.io/http2-spec/#starting"}),"requires TCP"),". RSocket ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://rsocket.io/docs/Protocol#terminology"}),"requires TCP, WebSockets or Aeron"),"."),Object(i.b)("p",null,"We have no intention of this running over HTTP/1.1. We also do not intend on running over HTTP/2 when fronted only by HTTP/1.1 APIs (as browsers expose), though that could be explored and conceptually is possible (with the use of SSE or chunked encoding). If using an HTTP/2 implementation that exposes the underlying byte streams, then HTTP/2 can be used as a transport (and this is in fact done in at least one production use of RSocket)."),Object(i.b)("h2",{id:"proxying"},"Proxying"),Object(i.b)("p",null,"Proxies that behave correctly for HTTP/2 will behave correctly for RSocket."),Object(i.b)("h2",{id:"frame-length"},"Frame Length"),Object(i.b)("p",null,"It is optional depending on the transport."),Object(i.b)("p",null,"On TCP, it will be included. On Aeron or WebSockets it is not needed."),Object(i.b)("h2",{id:"state-spanning-connections"},"State Spanning Connections"),Object(i.b)("p",null,"We determine this to be an unnecessary optimization at this protocol layer since the application has to be involved to make it work. Applications maintain state between connections. It is also very complex to implement for negligible gain. Many distributed systems implementations ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://aphyr.com/tags/jepsen"}),"fail to correctly handle these types of problems"),"."),Object(i.b)("p",null,"The RSocket protocol does however provide the necessary communication mechanisms for client and server to maintain state and re-establish sessions on new transport connections."),Object(i.b)("h2",{id:"future-proofing"},"Future-Proofing"),Object(i.b)("p",null,"There is no way to fully future-proof something, but we have made attempts to future-proof RSocket in the following ways:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Frame type has a reserved value for extension"),Object(i.b)("li",{parentName:"ul"},"Error code has a reserved value for extension"),Object(i.b)("li",{parentName:"ul"},"Setup has a version field"),Object(i.b)("li",{parentName:"ul"},"All fields have been sized according to given requirements as known currently (such as ",Object(i.b)("inlineCode",{parentName:"li"},"streamId")," supporting 4b requests)"),Object(i.b)("li",{parentName:"ul"},"There is plenty of space for additional flags"),Object(i.b)("li",{parentName:"ul"},"Separation of data and metadata"),Object(i.b)("li",{parentName:"ul"},"Use of MimeType in Setup to eliminate coupling with encoding")),Object(i.b)("p",null,"Additionally, we have stuck within connection-oriented semantics of HTTP/2 and TCP so that connection behavior is not abnormal or special."),Object(i.b)("p",null,"Beyond those factors, TCP has existed since 1977. We do not expect it to be eliminated in the near future. QUIC looks to be a legitimate alternative to TCP in the coming years. Since HTTP/2 is already working over QUIC, we see no reason why RSocket will not also work over QUIC."),Object(i.b)("h2",{id:"prioritization-qos-oob"},"Prioritization, QoS, OOB"),Object(i.b)("p",null,"Prioritization, QoS, OOB is allowed with metadata, app-level logic, and app control of emission.\nRSocket does not enforce a queuing model, nor an emission model, nor a processing model. To be effective with QoS, it would need to control all aspects. This is not realistically possible without cooperation from the app logic as well as the underlying network layer. It\u2019s the same reason why HTTP/2 does not go into that area either and simply provides a means to express intent. With metadata, RSocket doesn\u2019t even need to do that."),Object(i.b)("h2",{id:"why-is-cancellation-required"},"Why is cancellation required?"),Object(i.b)("p",null,"Modern distributed system topologies tend to have multiple levels of request fan-out. It means that one request at one level may lead to tens of requests to multiple backends. Being able to cancel a request can save a non-trivial amount of work."),Object(i.b)("h2",{id:"what-are-example-use-cases-of-cancellation"},"What are example use cases of cancellation?"),Object(i.b)("p",null,"Let\u2019s imagine a server responsible for computing the ",Object(i.b)("em",{parentName:"p"},"n"),"th digit of Pi. A client sends a request to that server but realizes later that it doesn\u2019t want/need the response anymore (for arbitrary reasons). Rather than letting the server do the computation in vain, it can cancel it (the server may not even have started the work)."),Object(i.b)("h2",{id:"what-are-example-use-cases-of-request-stream"},"What are example use cases of request-stream?"),Object(i.b)("p",null,"Let\u2019s imagine a chat server; you want to receive all the messages said in the chat server but you don\u2019t want to poll or continuously poll (long polling technique). Another example might be that you want to listen to a particular chat room and ignore all other messages."),Object(i.b)("h2",{id:"what-are-example-use-cases-of-fire-and-forget-versus-request-response"},"What are example use cases of fire-and-forget versus request-response?"),Object(i.b)("p",null,"Some requests don\u2019t require a response, and when it\u2019s fine to simply ignore any failure to send a response, fire-and-forget is the right solution. An example could be non-critical metrics-tracking in environments where UDP is inappropriate."),Object(i.b)("h2",{id:"why-binary"},"Why Binary?"),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://http2.github.io/faq/#why-is-http2-binary"}),"HTTP/2 FAQ: Why is HTTP/2 binary?")),Object(i.b)("h2",{id:"doesnt-binary-encoding-make-debugging-harder"},"Doesn\u2019t binary encoding make debugging harder?"),Object(i.b)("p",null,"Yes, but the tradeoff is worth it."),Object(i.b)("p",null,"Binary encoding makes reading messages more difficult for humans, but it also makes reading them easier for machines. There\u2019s also a significant performance gain by not decoding the content.\nBecause we estimate that 99.9999999%+ of the messages will be read by a machine, we decided to make the reading easier for a machine."),Object(i.b)("p",null,"There are extant tools for analyzing binary protocol exchanges, and new tools and extensions can readily be written to decode the binary RSocket format and present human-readable text."),Object(i.b)("h2",{id:"what-tooling-exists-for-debugging-the-protocol"},"What tooling exists for debugging the protocol?"),Object(i.b)("p",null,"Wireshark is the recommended tool. The plugin is at ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/rsocket/rsocket-wireshark"}),"https://github.com/rsocket/rsocket-wireshark"),"."),Object(i.b)("h2",{id:"why-are-these-different-flow-control-approaches-needed-beyond-what-the-transport-layer-offers"},"Why are these different flow control approaches needed beyond what the transport layer offers?"),Object(i.b)("p",null,"TCP Flow Control is designed to control the rate of bytes from the sender/reader based on the consuming rate of the remote side. With RSocket, the streams are multiplexed on the same transport connection, so having flow control at the RSocket level is actually mandatory."),Object(i.b)("h2",{id:"what-are-example-use-cases-where-rsocket-flow-control-helps"},"What are example use cases where RSocket flow control helps?"),Object(i.b)("p",null,"Flow control helps an application signal its capability to consume responses. This ensures that we never overflow any queue on the application layer.\nRelying on the TCP flow control doesn\u2019t work, because we multiplex the streams on the same connection."),Object(i.b)("h2",{id:"how-does-rsocket-flow-control-behave"},"How does RSocket flow control behave?"),Object(i.b)("p",null,"There are two types of flow control:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"One is provided by the request-",Object(i.b)("em",{parentName:"li"},"n")," semantics defined in Reactive Streams (please ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://www.reactive-streams.org",title:"Reactive Streams is an initiative to provide a standard for asynchronous stream processing with non-blocking back pressure."}),"read the spec")," for exhaustive details)."),Object(i.b)("li",{parentName:"ul"},"The second is provided via the lease semantics defined in the ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://rsocket.io/docs/Protocol#lease-semantics"}),"Protocol document"),".")),Object(i.b)("h2",{id:"how-does-rsocket-benefit-a-client-side-load-balancer-in-a-data-center"},"How does RSocket benefit a client-side load balancer in a data center?"),Object(i.b)("p",null,"Each RSocket provides an availability number abstractly representing its capacity to send traffic.\nFor instance, when a client doesn\u2019t have a valid lease, it exposes a \u201c0.0\u201d availability, indicating that it can\u2019t send any traffic. This extra piece of information, in combination with any load balancing strategy already used, gives more information to the client so it can make smarter decisions."),Object(i.b)("h2",{id:"why-is-multiplexing-more-efficient"},"Why is multiplexing more efficient?"),Object(i.b)("p",null,"See:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://http2.github.io/faq/#why-is-http2-multiplexed"}),"HTTP/2 FAQ: Why is HTTP/2 multiplexed?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://http2.github.io/faq/#why-just-one-tcp-connection"}),"HTTP/2 FAQ: Why just one TCP connection?"))),Object(i.b)("h2",{id:"is-multiplexing-equivalent-to-pipelining"},"Is multiplexing equivalent to pipelining?"),Object(i.b)("p",null,"No. Pipelining requires reading the responses in the order of the requests."),Object(i.b)("p",null,"For example, with pipelining: a client sends ",Object(i.b)("inlineCode",{parentName:"p"},"reqA"),", ",Object(i.b)("inlineCode",{parentName:"p"},"reqB"),", ",Object(i.b)("inlineCode",{parentName:"p"},"reqC"),". It has to receive the responses in this order: ",Object(i.b)("inlineCode",{parentName:"p"},"respA"),", ",Object(i.b)("inlineCode",{parentName:"p"},"respB"),", ",Object(i.b)("inlineCode",{parentName:"p"},"respC"),"."),Object(i.b)("p",null,"With multiplexing, the same client can receive responses in any order, e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"respB"),", ",Object(i.b)("inlineCode",{parentName:"p"},"respA"),", ",Object(i.b)("inlineCode",{parentName:"p"},"respC"),"."),Object(i.b)("p",null,"Pipelining can introduce ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Head-of-line_blocking"}),"head-of-line-blocking")," and degrade the performance of the system."),Object(i.b)("h2",{id:"why-is-the-tls-false-start-strategy-useful-for-establishing-a-connection"},"Why is the \u201cTLS False start\u201d strategy useful for establishing a connection?"),Object(i.b)("p",null,"When respecting the lease semantics, establishing a RSocket between a client and a server requires one round-trip (\u21d2","\xa0","SETUP, \u21d0","\xa0","LEASE, \u21d2","\xa0","REQUEST). On a slow network or when the connection latency is important, this round-trip is harmful. That\u2019s why you have the possibility to not respect the lease, and then can send your request right away (\u21d2","\xa0","SETUP, \u21d2","\xa0","REQUEST)."),Object(i.b)("h2",{id:"what-are-example-use-cases-for-payload-data-on-the-setup-frame"},"What are example use cases for payload data on the Setup frame?"),Object(i.b)("p",null,"You may want to pass data to your application at RSocket establishment, rather than reimplementing a connect protocol on top of RSocket.\nRSocket allows you to send information alongside the SETUP frame.\nFor instance, this can be used by a client to send its credentials."),Object(i.b)("h2",{id:"why-multiple-interaction-models"},"Why multiple interaction models?"),Object(i.b)("p",null,"The interaction models could be reduced to just one: \u201crequest-channel\u201d. Every other interaction model is a subtype of request-channel, but they have been specialized for two reasons:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ease of use from the client point of view."),Object(i.b)("li",{parentName:"ul"},"Performance.")),Object(i.b)("h2",{id:"so-why-the-rsocket-name"},"So why the \u201cRSocket\u201d name?"),Object(i.b)("p",null,"It started out as ReactiveSocket, but was shortened to RSocket:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"because it is shorter to write and speak"),Object(i.b)("li",{parentName:"ul"},"to stop overusing the word \u201creactive\u201d")),Object(i.b)("p",null,"That said, the \u201cR\u201d still refers to \u201creactive\u201d from \u201cReactiveSocket\u201d, which brings us to the follow-up question: isn\u2019t \u201cReactive\u201d a totally ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"http://www.gartner.com/technology/research/methodologies/hype-cycle.jsp"}),"hyped")," buzzword?"),Object(i.b)("p",null,"Unfortunately the word has become quite a buzzword, and overused."),Object(i.b)("p",null,"However, this library is directly related to several projects where \u201cReactive\u201d is an important part of their name and architectural pattern. Specifically, RSocket implements, uses, or follows the principles in these projects and libraries, thus the name:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://www.reactive-streams.org",title:"Reactive Streams is an initiative to provide a standard for asynchronous stream processing with non-blocking back pressure."}),"Reactive Streams")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://www.reactivex.io",title:"ReactiveX is an API for asynchronous programming with observable streams."}),"Reactive Extensions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/ReactiveX/RxJava",title:"RxJava is a library for composing asynchronous and event-based programs using observable sequences for the Java VM."}),"RxJava")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/ReactiveX/RxJS",title:"RxJS is a reactive programming library for JavaScript."}),"RxJS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"http://www.reactivemanifesto.org",title:"We want systems that are Responsive, Resilient, Elastic, and Message Driven. We call these Reactive Systems."}),"Reactive Manifesto"))))}h.isMDXComponent=!0}}]);
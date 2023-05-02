##### Application Programming Interface
- *Application* = Any software with a distinct function
- *Interface* = contract of service between two applications, how parties communicate with eachother using requests and responses (API docs tell us how to structure those requests and responses)

- Modern API's typically follow [HTTP](../../Terms/http.md) standard

- Designed for consumption of specific audiences (typically types of developers, ie: Mobile Dev)

- UI connects User -> Interface, API connects Software -> Software

- Calls that make up API are known as [subroutines](../../Terms/subroutines.md), [methods](../../Terms/methods.md), requests, or [endpoints](../../Terms/endpoints.md)

- simplifies programming [abstracting](../../Terms/abstracting.md) the underlying implementation and only exposing what the developer needs

- API integrations are components that automatically sync, used to integrate new applications with existing software(increase development speed)

- Just making changes on API level can update entire systems without having to mess with all the code

- Gateway between two systems, each system should make internal changes so API is not changed with each integration

- Set of definitions and protocols for building and integrating application software

- APIs are sometimes thought of as contracts, documentation that representing the agreement between parties: If party 1 sends a remote request structured a particular way, this is how party 2’s software will respond

- API gateway's could be used for user authentication, rate limiting, and statistics

###### TYPES of APIs
- *Private API*: Internal
- *Public API*: Available to be used by anyone
- *Partner API*: Only accessible to authorized external businesses/developers
- *Composite API*: Combine two or more APIs to address complex system requirements

- *WEB API*: Application interface between web server/browser. All web services are APIs. REST is a type of web API
  - WEB APIs are REST APIs and the terms can be used interchangeably

- *REST API*: architecture - Representational State Transfer. Defines a set of functions: GET, PUT, POST, PATCH, DELETE. Client sends request to Server as data. Server runs functions using data then sends response back to Client. Clients/Servers exchange data using HTTP. STATELESSNESS!!!: servers do not not save client data in between requests, unless stored in a database obviously
  - Architecture is composed of clients, servers, and resources, and it handles requests through HTTP
  - Statelessness, no cient data is stored on the server, session state is in client
  - Cacheability, eliminate need for some actions, shared chaching
  - Layered system, can add layers to handle load balancing, shared chaches, security
  - Code on demand, servers can extend functionality by offering executable code
  - Uniform interface, core to design
    - Resource identification in requests!
    - Resource manipulation through representations, clients get files that represent resources, should include enough to handle del/mod
    - Self-descriptive messages, each message sent to client should entail how client process received information
    - Hypermedia as the engine of application state, rest client should see all other actions available as hyperlinks(links lol)
- *GraphQL API*: GraphQL is a query language and server-side runtime for API's
  - Prioritizes giving clients exactly what they need & no more
  - Has IDE known as GraphiQL, developers can pull data from multiple sources in a single request
  - Allows developers to add/deprecate without impacting existing queries, GraphQL ensures it will work

- *SOAP API*: standard > protocol - Simple Object Access Protocal. Client/Server exchange messages with XML (not as popular now)
- *RPC API*: standard > Remote Procedure Calls. Client runs a procedure on Server then sends response back to Client

- *Websocket API*: Uses JSON objects to pass data. Supports two-way communication between Client/Server. Server can callback to connected clients (more effecient than REST)



### Kubernetes
- https://docs.celeryq.dev/en/stable/

##### General Info
- Task Queue

- Tasks are executed on at least one worker server

- Celery is written in python

- When setting up celery for a project, typically you'll want whats called a "Message Broker", which send and receives messages. Some of which include:
  - RabbitMQ
  - Redis
  - https://docs.celeryq.dev/en/stable/getting-started/backends-and-brokers/index.html#broker-overview

##### Getting Started
- When starting with celery on a project, the first thing you'll need is a celery app which is an entry point for everything you can do in celery
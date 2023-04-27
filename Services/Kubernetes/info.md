### Kubernetes
- https://kubernetes.io/docs/home/supported-doc-versions/

##### General Info
- Contains very short lived nodes that contain one version of your application, known as a pod

- Each application is accompanied with a copy of your database which is also known as a pod

- Pods are just instances of your projects that are isolated from eachother within the kubernetes node

- When pods die, a new one will will take its place

- Each pod by default has an address/temporary IP, which they use to communicate to eachother (application/server - database)

- You can opt to use a Service which is a permanent IP address, distinct from pod

- External Service opens communication to normal/external people

- Internal Service opens communication from within the node, like connecting to a database from server

- Ingress supplies a secure-protocal(https) and a domain. Forwarding happens to ingress then service

- Configure database endpoint usually with internal variable, You want to adjust the url within application

- In kubernetes some database configurations can be changed through the config map within the app

- Without kubernetes you'd have to create an image and rebuild the application

- Secret is configuration map that stores secret data, sometimes like credentials in base-64 encoded

- Can reference secrets within application through config map assigning environment variables

- When a pod gets restarted due to pods being short-lived/ephemeral, you can can lose data so you should opt-in to use Volumes

- Volumes store database storage externally, to persist past pod lives

- kubernetes cluster is everything within the node stated above except external persistent data like db volumes

- When restarting pods, you are potentially "down", to fix this you should have a replica kubernetes node with services being shared, which acts as a load balancer

- Usually you'll want to have replicas of clusters

- Replicates of pods are derived from deployment blueprints, a specification of replicate k8s pods

- Pods are layers/abstractions on container

- When a pod within a specific node dies, you want to get managed to another another pod by service/load-balancer

- StatefulSet avoids read/write inconsisties when pods go down and with multiple db pods, specifically meant for database pods

- Databases are often hosted outside of kubernetes to avoid setting up StatefulSet
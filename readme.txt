Create your front-end elements in the /frontend directory.

Prerequisites: Docker, docker-compose

You can spin up the back-end with `docker-compose up`.

You can query the back-end programmatically at http://localhost:8010/devices
The route accepts an `n` query parameter, which determines the number 
of devices that will be generated.

You can also visit http://localhost:8010/docs for SwaggerUI API explorer.
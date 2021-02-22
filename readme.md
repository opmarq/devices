# Upciti

Dashboard that display devices data in realtime.

## Features

### Overview Page

- Last 24h connected devices line chart

- Types of connections pie chart

- Last connected devices 

- Number of online/offline devices

### History of the connections

- Display all devices sorted by last seen 

- Sort by different columns

- Search by device number

### Technology Stack

- React + Typescript
- Ant design ui library
- Jest
- Storybook ?
- Docker

### How to start the project

Prerequisites: Docker, docker-compose

.1 Spin up the back-end & front-end with `docker-compose up`.
.2 go to http://localhost

You can also run the frontend alone by going to /frontend run run `npm run start`

To run unit test run `npm run test`

### Perspective

- Add more integation test and create CI/CD pipline with github actions and deploy the app in heroku & netlify
- Customize the ant design ui and use storybook to document the different components
- Manage release and generate changlog

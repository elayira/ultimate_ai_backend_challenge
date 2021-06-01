# ultimate AI Chatbot Backend Challenge API
a backend web server that exposes a single endpoint. This endpoint accepts a bot identifier and a visitor written message.
It returns a single reply corresponding to the highest predicted intent above a configurable confidence threshold.

## Running Locally

#### Prerequisites
* [Git](https://git-scm.com/downloads)
* [Node JS](https://nodejs.org/en/)
* [Mongo DB](https://www.mongodb.com) (I used mongoDB cloud Atlas)

#### Environment Variables

* BOT_ROOT_ENDPOINT
* THRESHHOOD_CONFIDENCE_LEVEL
* DB_PASSWORD
* DB_NAME
* DB_ADM_NAME
* DB_CLUSTER_URL
* DEV_PORT
* API_KEY_AUTH

#### Setup

* Setup cloud base mongodb
* Rename the `.sampleenv` file located at the root of the project to `.env` and populate with apropriate values.
* Run `npm install` at the project root.

#### Start Dev
Run the `npm run dev` at the root of the project.

#### Run Test
Run the `npm test` at the root of the project.

## TODO

* Make the project database agnostic
* Make the reply endpoint more fault tolerant
* make the test more robust and complete
* Exercise more deliberate control over the module dependencies in the project
* Configure auto documentation of the reply endpoint

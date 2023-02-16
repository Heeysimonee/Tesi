## TODOs

* [ ] document project structure
* [ ] better README structure
* [ ] insert more examples (model, migration, route, service, tests)
* [ ] explain the conventions/patterns/architectural choices
* [ ] add some small guides on how to extend this towards a real project

## How to run

* Install dependencies with `npm install`
* Run `docker-compose -f docker/docker-compose.yaml up`
* The server should be available at `localhost`

## How to setup for local development (on VSCode)

* Install the VSCode ESLint extension, if you haven't already
* Copy the default IDE settings with `cp .vscode/settings.json.default .vscode/settings.json`
* Configure git hooks with `git config --local core.hooksPath .githooks/`

## Structure

* docker
* lib
* logs
* seeds
* server
* test
* test_reporters
* test_results

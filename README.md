# E Corp Frontend demo application

[![Latest docker image version](https://img.shields.io/docker/v/devprofr/ecorp-frontend-demo.svg)](https://hub.docker.com/r/devprofr/ecorp-frontend-demo)

Demonstration of a simple frontend for E Corp (from [Mr Robot](https://en.wikipedia.org/wiki/Mr._Robot)). It is a web application (a Single Page Application to be precise), written in TypeScript, using Angular framework.

## Requirements

* NPM
* Angular CLI

```bash
npm install -g @angular/cli
```

* Docker (or Podman)

## Development server

* Run `ng serve` for a dev server
* Navigate to `http://localhost:4200/`

## Build

* Run `ng build` to build the project

## Unit tests

* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io)

## End-to-end tests

* Run `ng e2e` to execute the end-to-end tests via a platform of your choice (not implemented for the moment, will use Cypress in a near future)

## Local container

* Run `docker build -t ecorp-frontend-demo .` to build a new image
* Run `docker run -it --rm -p 9000:80 ecorp-frontend-demo` to run the image locally
* Navigate to `http://localhost:9000/`

# E Corp Frontend demo application

[![GitLab Pipeline Status](https://gitlab.20.101.158.124.sslip.io/ecorp/ecorp-frontend-demo/badges/develop/pipeline.svg)](https://gitlab.20.101.158.124.sslip.io/ecorp/ecorp-frontend-demo/-/pipelines)
[![Quality Gate Status](https://sonarqube.20.101.158.124.sslip.io/api/project_badges/measure?project=ecorp_ecorp-frontend-demo&metric=alert_status)](https://sonarqube.20.101.158.124.sslip.io/summary/new_code?id=ecorp_ecorp-frontend-demo)
[![Coverage](https://sonarqube.20.101.158.124.sslip.io/api/project_badges/measure?project=ecorp_ecorp-frontend-demo&metric=coverage)](https://sonarqube.20.101.158.124.sslip.io/summary/new_code?id=ecorp_ecorp-frontend-demo)

Demonstration of a simple frontend for E Corp (from [Mr Robot](https://en.wikipedia.org/wiki/Mr._Robot)). It is a web application (a Single Page Application to be precise), written in TypeScript, using Angular framework.

## How to run

### Container image

Container images are automatically built and available on [Harbor](https://harbor.20.101.158.124.sslip.io/harbor/projects/2/repositories/ecorp-frontend-demo/artifacts-tab).

Execute the following command line to run a container locally.

```bash
docker run -it --rm -p 9000:80 harbor.20.101.158.124.sslip.io/ecorp/ecorp-frontend-demo:1.0.17
```

Navigate to [localhost:9000](http://localhost:9001) to open the website.

### Helm chart

The best way to deploy and run this application is by executing the workload as containers orchestrated Kubernetes, thanks to the [Helm chart](https://devpro.github.io/helm-charts/).

Execute the following command lines to deploy the definitions to your Kubernetes cluster.

```bash
# adds devpro Helm repository
helm repo add devpro https://devpro.github.io/helm-charts

# installs E Corp applications
helm install ecorp-demo
```

## How to build

### Requirements

* NPM
* Angular CLI

```bash
npm install -g @angular/cli
```

* Docker (or Podman)
* Visual Studio Code or any other IDE

### Build & test

Execute the following command lines to build and test the solution.

```bash
# builds the project
ng build

# executes the unit tests via Karma (https://karma-runner.github.io)
dotnet test

# executes the end-to-end tests (not implemented for the moment, will use Cypress in a near future)
ng e2e
```

### Run the development server

Execute the following command line to run the web application.

```bash
ng serve
```

Navigate to [localhost:4200](http://localhost:4200/).

### Run in a local container

Execute the following command line to build and run the API in a container.

```bash
docker build . -t ecorp-frontend-demo
docker run -it --rm -p 9000:80 ecorp-frontend-demo
```

Navigate to [localhost:9000](http://localhost:9000/) to open the website.

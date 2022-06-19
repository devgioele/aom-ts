# Adaptive Object Modeling in TypeScript

This web app uses the adaptive object modeling (AOM) design pattern to dynamically create input forms based on the created entities.
The entities and their properties are not hardcoded, achieving a very high degree of flexibility.

## AOM

AOM introduces a runtime type-system that allows the dynamic creation and manipulation of entity properties.

![UML diagram of AOM](docs/aom.png)

An entity is made of an entity type and properties.
Each property has a property type, which depends on the type of the entity.

This enables the application model to be changed without changing the source code.

## GUI

This web app demonstrates AOM by dynamically generating a form based on the product type (entity type).
If the product type changes, the form automatically adapts!

## Getting started

Install [Node.js](https://nodejs.org/) 16.10 or higher.

Clone this repo:
```sh
git clone https://github.com/devgioele/aom-ts.git
```

Inside your local copy of the repo...

Enable corepack:
```sh
corepack enable
```

Install dependencies:
```sh
yarn
```

Start local server:
```sh
yarn dev
```

Visit the page at [http://localhost:3000](http://localhost:3000)

Make changes in the source code and see the result immediately, without having to restart the web server.
<p align="center">
  <a href="http://github.com/zuiidea/antd-admin">
    <img alt="antd-pelando" height="64" src="./public/imgs/logo.svg">
  </a>
</p>

<h1 align="center">Dashboard Boilerplate</h1>

<div align="center">

A Dashboard boilerplate made by Pelando using Ant Design UI library

</div>

#### Preview - [coming soon](#)

## Features

- **Neat Design**: Follow [Ant Design specification](http://ant.design/)
- **Authentication**: Authentication using Redux, Redux Saga e Reactotron
- **Route System**: Add a new Route, and Sidebar and Breadcrumbs components recognize
- **Styled Components**: Write CSS that's scoped to a single component
- **JSON Server**: Simutate a REST API and work without back-end block you.
- **UI Test**: coming soon..

## Prerequisite

- [Docker CE](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
- [Docker Compose](https://docs.docker.com/compose/overview/)

## Usage

1. Clone project code.

```bash
git clone https://github.com/pelando/dashboard-boilerplate.git
cd dashboard-boilerplate
```

2. Up the application.

```bash
make up
```

or

```bash
make up-silent
```

After the startup is complete, open a browser and visit http://localhost:3000

2. Down the application.

```bash
make down
```

## Dev Server

First, you need to install JSON Server globally `npm install -g json-server`, then:

```bash
make dev-server
```

After the startup is complete, open a browser and visit http://localhost:3333

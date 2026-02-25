---
title: 'Spring-Hex CLI'
description: 'A CLI tool that generates hexagonal architecture scaffolding for Spring Boot projects in seconds. Implements ports & adapters, CQRS, and domain-driven design patterns out of the box.'
heroImage: ''
tech: ['Java', 'Spring Boot', 'JPA', 'MongoDB', 'Redis', 'Flyway', 'CQRS']
liveUrl: 'https://spring-hex.github.io/'
repoUrl: 'https://github.com/Spring-hex/Spring-hex.github.io'
featured: true
sortOrder: 1
---

## Overview

Spring-Hex CLI is an open-source tool I built to eliminate the boilerplate headache of setting up clean architecture in Spring Boot projects. It generates complete hexagonal architecture scaffolding — domain models, ports, adapters, and tests — so developers can focus on business logic instead of infrastructure plumbing.

## Key Features

- **Hexagonal Architecture**: Generates proper domain, port, and adapter layer separation following ports & adapters pattern
- **CQRS Support**: Built-in CommandBus and QueryBus patterns for separating reads and writes
- **Multi-Database Adapters**: Supports JPA, MongoDB, and Redis out of the box
- **Database Migrations**: Integrated Flyway and Liquibase support for schema management
- **Configurable**: Customizable package structure through `.hex/config.yml`
- **Data Seeding**: Built-in Datafaker integration and custom seeders for test data

## Technical Highlights

- Generates complete module scaffolding: domain models, aggregates, value objects, commands/queries with handlers, repository ports, JPA adapters, REST controllers, and event infrastructure
- Full test suite generation including feature and unit tests with Mockito
- Simplified CRUD module generation for straightforward use cases
- Designed for Rapid Application Development within the Spring ecosystem

---
title: 'TypeScript Patterns I Use in Every Project'
description: 'Practical TypeScript patterns and utilities that improve type safety, developer experience, and code maintainability.'
pubDate: 2026-01-28
tags: ['TypeScript', 'Patterns', 'Best Practices']
draft: false
---

After years of writing TypeScript, I've settled on a set of patterns that I reach for in every project. Here are the ones that have proven most valuable.

## Discriminated Unions for State Management

Instead of using separate boolean flags, model your state as a discriminated union:

```typescript
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };
```

This makes impossible states unrepresentable and gives you exhaustive type checking in switch statements.

## The `satisfies` Operator

The `satisfies` operator lets you validate that a value matches a type without widening it:

```typescript
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
} satisfies Record<string, string | number>;
```

## Branded Types for Type-Safe IDs

Prevent mixing up IDs of different entity types:

```typescript
type Brand<T, B> = T & { __brand: B };
type UserId = Brand<string, 'UserId'>;
type OrderId = Brand<string, 'OrderId'>;
```

## Const Assertions for Configuration

Use `as const` to get narrow, literal types from your configuration objects:

```typescript
const ROUTES = {
  home: '/',
  about: '/about',
  blog: '/blog',
} as const;

type Route = (typeof ROUTES)[keyof typeof ROUTES];
// Type is '/' | '/about' | '/blog'
```

## Conclusion

These patterns have saved me countless hours of debugging and made my code more robust. Start with discriminated unions — they alone will transform how you model state in TypeScript.

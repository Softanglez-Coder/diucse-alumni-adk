# Contributing to DIUCSE Alumni ADK

Thank you for your interest in contributing to the DIUCSE Alumni ADK! This document provides guidelines for contributing to this project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/diucse-alumni-adk.git`
3. Install dependencies: `npm install`
4. Build all packages: `npm run build:all`

## Development Workflow

1. Create a new branch from `main`: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Build and test your changes: `npm run build:all && npm test`
4. Commit your changes using conventional commit messages
5. Push your branch and create a pull request

## Commit Message Convention

This project uses [Conventional Commits](https://conventionalcommits.org/) for automated versioning and changelog generation.

### Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature (triggers a minor release)
- `fix`: A bug fix (triggers a patch release)
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

### Scopes

Use the package name as scope when making changes to a specific package:

- `core`: Changes to @diucsealumni/core
- `models`: Changes to @diucsealumni/models
- `services`: Changes to @diucsealumni/services
- `utils`: Changes to @diucsealumni/utils

### Examples

```bash
feat(core): add user authentication service
fix(models): correct user interface definition
docs: update installation instructions
test(services): add unit tests for API service
```

### Breaking Changes

For breaking changes, add `BREAKING CHANGE:` in the footer or add `!` after the type:

```bash
feat(core)!: remove deprecated authentication method

BREAKING CHANGE: The old authentication method has been removed.
Please use the new JWT-based authentication.
```

## Package Structure

Each package should follow this structure:

```
projects/diucsealumni/<package-name>/
├── src/
│   ├── lib/
│   │   ├── <package-name>.ts
│   │   └── <package-name>.spec.ts
│   └── public-api.ts
├── package.json
├── ng-package.json
├── tsconfig.lib.json
├── tsconfig.lib.prod.json
├── tsconfig.spec.json
└── README.md
```

## Testing

- Write unit tests for all new functionality
- Ensure all tests pass before submitting a pull request
- Aim for high test coverage

## Documentation

- Update README.md files when adding new features
- Add JSDoc comments for all public APIs
- Update this CONTRIBUTING.md file if you change the development workflow

## Pull Request Process

1. Ensure your branch is up to date with `main`
2. Make sure all tests pass
3. Update documentation as needed
4. Use conventional commit messages
5. Request review from maintainers

## Release Process

Releases are automated using semantic-release. When commits are merged to `main`:

1. Semantic-release analyzes commit messages
2. Determines the next version number
3. Generates a changelog
4. Creates a GitHub release
5. Publishes packages to npm

## Questions?

If you have any questions about contributing, please:

1. Check existing issues and pull requests
2. Create a new issue for discussion
3. Reach out to the maintainers

Thank you for contributing!

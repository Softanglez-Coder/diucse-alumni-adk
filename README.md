# DiucseAlumniAdk

This project is an Angular library monorepo containing multiple packages for the DIUCSE Alumni platform.

## Packages

This monorepo contains the following packages:

- `@diucsealumni/core` - Core utilities and functionalities
- `@diucsealumni/models` - Data models and interfaces
- `@diucsealumni/services` - Services and API integrations
- `@diucsealumni/utils` - Utility functions and helpers

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build all packages:

```bash
npm run build:all
```

To build a specific package:

```bash
ng build @diucsealumni/core
ng build @diucsealumni/models
ng build @diucsealumni/services
ng build @diucsealumni/utils
```

## Semantic Release

This project uses semantic-release for automated versioning and publishing. The release process is triggered automatically when commits are pushed to the `main` branch.

### Commit Message Convention

This project follows the [Conventional Commits](https://conventionalcommits.org/) specification. Use the following format for your commit messages:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Types:
- `feat`: A new feature (triggers a minor release)
- `fix`: A bug fix (triggers a patch release)
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

#### Breaking Changes:
To trigger a major release, include `BREAKING CHANGE:` in the footer or add `!` after the type:

```
feat!: remove deprecated API
```

### Manual Release

To manually trigger a release for all packages:

```bash
npm run semantic-release
```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Build all packages: `npm run build:all`

### GitHub Repository Setup

1. Set up the following secrets in your GitHub repository:
   - `NPM_TOKEN`: Your NPM authentication token for publishing packages
   - `GITHUB_TOKEN`: Automatically provided by GitHub Actions

2. Ensure your repository URL is correctly set in each package's `package.json` file

3. Make sure the `main` branch is protected and requires pull request reviews

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

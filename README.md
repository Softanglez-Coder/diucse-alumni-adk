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

### Fixed Issues

The configuration has been updated to resolve common issues:
- ✅ Removed problematic `semantic-release-monorepo` dependency
- ✅ Fixed GitHub Actions permissions
- ✅ Added scope-based release rules for individual packages
- ✅ Added change detection to only release packages that have changes

### Commit Message Convention

This project follows the [Conventional Commits](https://conventionalcommits.org/) specification. **Important:** You must include the package scope for changes to be released:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

#### Required Scopes for Package Releases:
- `feat(core): description` - Releases @diucsealumni/core
- `fix(models): description` - Releases @diucsealumni/models  
- `feat(services): description` - Releases @diucsealumni/services
- `perf(utils): description` - Releases @diucsealumni/utils

#### Types:
- `feat`: A new feature (triggers a minor release)
- `fix`: A bug fix (triggers a patch release)
- `docs`: Documentation only changes (no release)
- `style`: Changes that do not affect the meaning of the code (no release)
- `refactor`: A code change that neither fixes a bug nor adds a feature (no release)
- `perf`: A code change that improves performance (triggers a patch release)
- `test`: Adding missing tests or correcting existing tests (no release)
- `chore`: Changes to the build process or auxiliary tools (no release)

#### Breaking Changes:
To trigger a major release, include `BREAKING CHANGE:` in the footer or add `!` after the type:

```
feat(core)!: remove deprecated API
```

### Testing Release Configuration

Test individual package configurations:

```bash
# Test core package
./scripts/test-release.sh core

# Test models package  
./scripts/test-release.sh models

# Test services package
./scripts/test-release.sh services

# Test utils package
./scripts/test-release.sh utils
```

### Manual Release

To manually trigger releases (requires proper Git setup and NPM token):

```bash
# Release only packages with changes
npm run release:all

# Force release all packages
./scripts/release-all.sh --force
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

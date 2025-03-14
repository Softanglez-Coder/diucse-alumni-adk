// release.config.js
module.exports = {
    branches: [
        'main',
        {
            name: 'dev',
            prerelease: true
        }
    ],
    repositoryUrl: 'https://github.com/Softanglez-Coder/diucse-alumni-adk',
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        '@semantic-release/npm',
        '@semantic-release/github',
        '@semantic-release/git'
    ],
    verifyConditions: [
        '@semantic-release/changelog',
        '@semantic-release/npm',
        '@semantic-release/github',
        '@semantic-release/git'
    ],
    prepare: [
        '@semantic-release/changelog',
        '@semantic-release/npm',
        {
            path: '@semantic-release/git',
            assets: ['package.json', 'CHANGELOG.md'],
            message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }
    ],
    publish: [
        '@semantic-release/npm',
        '@semantic-release/github'
    ],
    success: [
        '@semantic-release/github'
    ],
    fail: [
        '@semantic-release/github'
    ]
};

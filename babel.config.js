module.exports = (api) => {
    return {
        presents: [
            [
                '@quasar/babel-present-app',
                api.caller((caller) => caller && caller.target === 'node')
                    ? { targets: { node: 'current' } }
                    : {},
            ],
        ],
    }
}

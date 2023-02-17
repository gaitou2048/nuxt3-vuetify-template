module.exports = {
    apps: [
        {
            name: 'app',
            cwd: '/app',
            exec_mode: 'cluster',
            instances: 1,
            script: './.output/server/index.mjs',
            env: {
                NODE_ENV: 'production'
            }
        }
    ]
}
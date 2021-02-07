# Webpack 5

## Configuration

### `node`

node export에서 `global`, `__filename`, `__dirname`
Warning
As of webpack 5, You can configure only global, __filename or __dirname under node option. If you're looking for how to polyfill fs alike in Node.js under webpack 5, please check resolve.fallback for help.
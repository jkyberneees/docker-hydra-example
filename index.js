const HydraIntegrationPlugin = require('hydra-integration').HydraIntegrationPlugin;
const HydraHttpPlugin = require('hydra-plugin-http').HydraHttpPlugin;
const config = require('config');
const hydra = require('hydra');

hydra.use(new HydraIntegrationPlugin());
hydra.use(new HydraHttpPlugin());

(async() => {
    await hydra.init(config.service);
    await hydra.registerService();

    await hydra.integration.getService(service => {
        service.get('/index', (req, res) => {
            res.send('Hello World!');
        });
    });
})().catch(console.error);
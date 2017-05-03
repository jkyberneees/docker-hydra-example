module.exports = {
    service: {
        hydra: {
            'serviceName': process.env.SERVICE_NAME || 'default-service',
            'serviceDescription': 'Basic restana service on top of Hydra',
            'serviceIP': '127.0.0.1',
            'servicePort': process.env.PORT || 3000,
            'serviceType': 'restana',
            'serviceVersion': '1.0.0',
            'redis': {
                'url': process.env.REDIS_URL || 'redis://localhost:6379/15'
            }
        }
    }
}
module.exports = [{
    'name': 'eskimo',
    'apps': [{
            'name': 'API',
            'status': {
                'type': 'success',
                'text': 'Functional'
            },
            'description': 'Eskimo\'s API'
        },
        {
            'name': 'Client',
            'status': {
                'type': 'success',
                'text': 'Online'
            },
            'description': 'Eskimo it self'
        }
    ]
}, {
    'name': 'Test',
    'apps': [
        {
            'name': 'Working?',
            'status': {
                'type': 'success',
                'text': 'Yes'
            },
            'description': 'Test\'s API'
        },
        {
            'name': 'Page',
            'status': {
                'type': 'success',
                'text': 'Online'
            },
            'description': 'Test it self'
        }
    ]
}]

/**
 * Status string validation
 *
 * 1. primary (blue)
 * 2. secondary (grey)
 * 3. success (green)
 * 4. danger (red)
 * 5. warning (yellow)
 * 6. info (Aqua)
 * 7. light (light)
 * 8. dark (dark)
 */
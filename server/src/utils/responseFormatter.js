const statusCode = {
    '200': 'SUCCESS',

    '400': 'BAD_REQUEST',
    '401': 'UNAUTHORIZED',
    '404': 'NOT_FOUND',

    '500': 'SERVER_ERROR',
}

module.exports = {
    responseSuccess: (code, data, opt) => {
        const response = {
            'code': code,
            'status': statusCode[code],
            'data': data,
            ...opt
        }

        return response
    },
    responseError: (code, errors, opt) => {
        const response = {
            'code': code,
            'status': statusCode[code],
            'errors': errors,
            ...opt
        }

        return response
    }
}
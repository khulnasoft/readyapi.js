export const validRequestMethods = [
    'GET',
    'POST',
    'PUT',
    'HEAD',
    'DELETE',
    'PATCH',
    'OPTIONS',
    'CONNECT',
    'TRACE',
] as const

export type RequestMethod = typeof validRequestMethods[number];

export function isRequestMethod(s: string): s is RequestMethod {
return validRequestMethods.includes(s as RequestMethod)
}

export const requestMethodColors: { [x in RequestMethod]: string } = {
    POST: 'var(--readyapi-color-green)',
    DELETE: 'var(--readyapi-color-red)',
    PATCH: 'var(--readyapi-color-yellow)',
    GET: 'var(--readyapi-color-blue)',
    PUT: 'var(--readyapi-color-orange)',
    OPTIONS: 'var(--readyapi-color-purple)',
    HEAD: 'var(--readyapi-color-2)',
    CONNECT: 'var(--readyapi-color-2)',
    TRACE: 'var(--readyapi-color-2)',
}

export const requestMethodAbbreviations: { [x in RequestMethod]: string } = {
    POST: 'POST',
    DELETE: 'DEL',
    PATCH: 'PATCH',
    GET: 'GET',
    PUT: 'PUT',
    OPTIONS: 'OPTS',
    HEAD: 'HEAD',
    CONNECT: 'CONN',
    TRACE: 'TRACE',
}
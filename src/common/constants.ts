export const HTTP = 'http';
export const HTTPS = 'https';

export namespace App {
  export const TIMEZONE = Intl.DateTimeFormat().resolvedOptions().timeZone;
  export const TIMEZONE_OFFSET = new Date().getTimezoneOffset();
  export const DEFAULT_LOCALE = 'en.UTF-8';
  export const DEFAULT_DEBOUNCE_TIME = 500;
}

export namespace RequestTypes {
  export const SEND = 'SEND';

  export const GET_LIST = 'GET_LIST';
  export const GET_ONE = 'GET_ONE';
  export const GET_MANY = 'GET_MANY';
  export const GET_MANY_REFERENCE = 'GET_MANY_REFERENCE';
  export const CREATE = 'CREATE';
  export const UPDATE = 'UPDATE';
  export const UPDATE_MANY = 'UPDATE_MANY';
  export const DELETE = 'DELETE';
  export const DELETE_MANY = 'DELETE_MANY';

  export const SCHEME_SET: Set<string> = new Set<string>([
    SEND,
    GET_LIST,
    GET_ONE,
    GET_MANY,
    GET_MANY_REFERENCE,
    CREATE,
    UPDATE,
    UPDATE_MANY,
    DELETE,
    DELETE_MANY,
  ]);

  export function isValid(input: string): boolean {
    return RequestTypes.SCHEME_SET.has(input);
  }
}

export namespace RequestBodyTypes {
  export const NONE = 'none';
  export const FORM_DATA = 'form-data';
  export const FORM_URL_ENCODED = 'x-www-form-urlencoded';
  export const JSON = 'json';
  export const BINARY = 'binary';
};

export const RequestBodyTypesSet = new Set<string>([
  RequestBodyTypes.NONE,
  RequestBodyTypes.FORM_DATA,
  RequestBodyTypes.FORM_URL_ENCODED,
  RequestBodyTypes.JSON,
  RequestBodyTypes.BINARY,
]);

export function isRequestBodyTypeValid(input: string): boolean {
  return RequestBodyTypesSet.has(input);
}

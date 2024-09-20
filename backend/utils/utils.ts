export function stripUndefined(obj: any) {
    return JSON.parse(JSON.stringify(obj));
}

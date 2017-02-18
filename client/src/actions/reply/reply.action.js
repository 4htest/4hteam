export const CREATE = 'CREATE';
export const DELETE = 'DELETE';
export const UPDATE = 'UPDATE';
 
export function onCreate(item) {
    return {
        type: CREATE,
        content: item
    };
}
 
export function onDelete(item) {
    return {
        type: DELETE,
        index: item
    };
}
 
export function onUpdate(item) {
    return {
        type: UPDATE,
        index: item.index,
        content: item.content
    };
}

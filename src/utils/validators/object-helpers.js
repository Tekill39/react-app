export const updateObjectInArray = (items, itemId, objPropName, newObjectProps)=>{
return items.map(u => {
    if (u[objPropName] === itemId) {
        return {...u, ...newObjectProps}
    }
    return u;
})
} 
export default updateObjectInArray;

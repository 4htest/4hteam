const INCREMENT = "INCREMENT";
 
function increase(diff) {
    return {
        type: INCREMENT,
        addBy: diff
    };
}
// const myLogger = store => next => action => {
//     console.log("현재 상태", store.getState());
//     console.log("액션", action);

//     // reducer로 action을 넘긴다.
//     const result = next(action);

//     console.log("다음상태", store.getState());
//     console.log("\n");

//     return result;
// }

const myLogger = function (store) {
    return function (next) {
        return function (action) {
            console.log("현재 상태", store.getState());
            console.log("액션", action);

            // reducer로 action을 넘긴다.
            const result = next(action);

            console.log("다음상태", store.getState());
            console.log("\n");

            return result;
        }
    }
}
export default myLogger;
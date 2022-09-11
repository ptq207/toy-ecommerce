export const errorHandler = (successfn, errorAction, dispatch) => {
  return async (...args) => {
    try {
      await successfn(...args);
    } catch (error) {
      if (error.message) {
        console.log("ERROR", error);
        dispatch(errorAction(args[1], error.message));
      }
    }
  };
};
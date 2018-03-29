const loggingMiddleware = (store) => (next) => (action) => {
    console.info(`INFO: Dispatching a ${action.type} action with payload:`, action.payload); // eslint-disable-line
    const result = next(action);
    console.info('Next State:', store.getState()); // eslint-disable-line
    return result;
  };
  export default loggingMiddleware;
  
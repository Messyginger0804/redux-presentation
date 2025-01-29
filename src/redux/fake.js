const addTodo = {
    type: "ADD_TODO",
    payloud: {id:1, text: "Learn Redux"},
    meta: {'logged': true}
}

dispatch({
    type: "ADD_TODO",
    payload: { id: 1, text: "Learn Redux" },
    meta: {
      logToAnalytics: true,
      showNotification: true,
      performance: "ADD_TODO"
    }
  });

  const todoReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [...state, action.payload];
      case "REMOVE_TODO":
        return state.filter((todo) => todo.id !== action.payload.id);
      default:
        return state; 
    }
  };
  


const metaMiddleware = (store) => (next) => (action) => {
    if (action.meta) {
      // Handle Analytics
      if (action.meta.logToAnalytics) {
        console.log(`[Analytics] Logged action: ${action.type}`, action.meta);
        // Send data to Google Analytics, Mixpanel, etc.
      }
  
      // Handle Notifications
      if (action.meta.showNotification) {
        console.log(`[Notification] Showing notification: ${action.meta.message}`);
        // Trigger UI toast, push notification, etc.
      }
  
      // Handle Debugging
      if (action.meta.debug) {
        console.log(`[DEBUG] Action dispatched:`, action);
      }
  
      // Handle Performance Tracking
      if (action.meta.performance) {
        console.time(action.meta.performance);
        next(action);
        console.timeEnd(action.meta.performance);
        return;
      }
    }
  
    return next(action); // Continue to the next middleware/reducer
  };
  
  
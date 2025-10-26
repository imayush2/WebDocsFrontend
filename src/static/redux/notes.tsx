import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
import reduxLogo from "../../assets/redux1.png";

export const Introduction = () => (
  <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
    <li>
      Redux is a <strong>JavaScript library</strong> for state management.
    </li>
    <li>Provides a centralized store to store all data in an application.</li>
    <li>
      Helps avoid <strong>prop drilling</strong> passing props through multiple
      component levels unnecessarily.
    </li>
    <li>
      For small projects, <strong>Context API</strong> and{" "}
      <strong>useReducer</strong> hook can be enough.
    </li>
    <br />
    <img
      src={reduxLogo}
      alt="Redux Store Diagram"
      className="w-full max-w-3xl h-auto object-contain rounded "
    />
  </ul>
);

export const StoreNotes = () => (
  <div className="space-y-3 text-gray-700">
    <h2 className="text-2xl font-bold">1. Store</h2>
    <ul className="list-disc pl-6 space-y-1 text-lg">
      <li>A store is where Redux keeps all application data temporarily.</li>
      <li>
        Methods:
        <ul className="list-inside list-disc pl-4 space-y-1">
          <li>
            <code className="text-blue-500 font-bold">dispatch(action)</code>{" "}
            → send an action to the store.
          </li>
          <li>
            <code className="text-blue-500 font-bold">getState()</code> → read
            current state from the store.
          </li>
        </ul>
      </li>
      <li>
        <strong>Note:</strong> Store is temporary, not for permanent storage.
      </li>
    </ul>
  </div>
);

export const ActionNotes = () => (
  <div className="space-y-3 text-gray-700 text-lg">
    <h2 className="text-2xl font-bold">2. Action</h2>
    <ul className="list-disc pl-6 space-y-1">
      <li>
        A plain JavaScript object describing{" "}
        <span className="font-bold">what to do</span>.
      </li>
      <li>
        Must have:
        <ul className="list-inside list-disc pl-4 space-y-1">
          <li>
            <code><strong>type</strong></code>: a string describing the action.
          </li>
          <li>
            <code><strong>payload</strong></code> (optional): data associated with the action.
          </li>
        </ul>
      </li>
    </ul>

    <div className="mt-2">
      <p className="font-semibold">Example:</p>
      <pre className="bg-gray-100 p-3 rounded  overflow-x-auto w-3/5 text-[15px]">
        {`{ type: ADD_TASK, payload: "Learn Redux" }
{ type: DELETE_TASK, payload: 0 }`}
      </pre>
    </div>

    <div className="mt-2">
      <p className="font-semibold">Action Types:</p>
      <pre className="bg-gray-100 p-3 rounded overflow-x-auto w-3/5 text-[15px]">
        {`export const ADD_TASK = "task/add";
export const DELETE_TASK = "task/delete";`}
      </pre>
    </div>
  </div>
);

export const ActionCreatorNotes = () => {
  return (
    <div className="space-y-2 text-lg text-gray-700">
      <h2 className="text-2xl font-bold">3. Action Creator</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          A <span className="font-semibold">function</span> that returns an
          action object.
        </li>
        <li>Used to avoid repeating object literals everywhere.</li>
      </ul>
      <div className="">
        <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
          <SyntaxHighlighter language="javascript" style={coy}>
            {`
// Implicit return
export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task
});

// Explicit return
export const deleteTask = (index) => {
  return {
    type: "DELETE_TASK",
    payload: index
  };
};
`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export const ReducerNotes = () => {
  return (
    <div className="space-y-3 text-lg text-gray-700">
      <h2 className="text-2xl font-bold">4. Reducer</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          A <span className="font-semibold">pure function</span> that decides{" "}
          <span className="font-semibold">how the state changes</span> based on
          an action.
        </li>
        <li>Takes:</li>
        <ul className="list-decimal pl-6 space-y-1">
          <li>Current state</li>
          <li>Action</li>
        </ul>
        <li>
          Returns a <span className="font-semibold">new state</span> (never
          mutate old state).
        </li>
      </ul>
      <div className="bg-blue-100 p-4 rounded shadow text-[15px]">
        <SyntaxHighlighter language="javascript" style={coy}>
          {`
import { ADD_TASK, DELETE_TASK } from "./action.js";

const initialState = {
  task: []
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, task: [...state.task, action.payload] };

    case DELETE_TASK:
      const updatedTask = state.task.filter((_, index) => index !== action.payload);
      return { ...state, task: updatedTask };

    default:
      return state;
  }
};

`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const StoreNotes2 = () => {
    return (
      <div className="space-y-3 text-lg text-gray-700">
        <h2 className="text-2xl font-bold">5. Redux Store</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <code className="text-blue-500">createStore</code> → classic Redux
          </li>
          <li>
            <code className="text-blue-500">configureStore</code> → Redux
            Toolkit (recommended)
          </li>
          <li>
            <code className="text-blue-500">dispatch()</code> → send action to
            store
          </li>
          <li>
            <code className="text-blue-500">getState()</code> → get current
            state
          </li>
          <li>
            <code className="text-blue-500">combineReducers()</code> → combine
            multiple reducers into one root reducer
          </li>
        </ul>
  
        <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
          <SyntaxHighlighter
            language="javascript"
            style={coy}
            customStyle={{
              fontSize: "15px",
              margin: 0,
              background: "transparent",
            }}
          >
            {`
  import { createStore, combineReducers } from "redux";
  import { taskReducer } from "./taskReducer.js";
  import { userReducer } from "./userReducer.js";
  
  // Combine multiple reducers
  const rootReducer = combineReducers({
    task: taskReducer,
    user: userReducer
  });
  
  const store = createStore(rootReducer);
  
  // Dispatch actions
  store.dispatch({ type: ADD_TASK, payload: "Learn Redux" });
  store.dispatch({ type: DELETE_TASK, payload: 0 });
  
  console.log(store.getState());
  `}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  };
  

export const ReactReduxIntegrationNotes = () => {
  return (
    <div className="space-y-4 text-lg text-gray-700">
      <h2 className="text-2xl font-bold">6. React + Redux Integration</h2>

      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <span className="font-semibold">Install dependencies:</span>
          <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
            npm install react-redux redux redux-devtools-extension
          </pre>
        </li>

        <li>
          <span className="font-semibold">Wrap App with Provider:</span>
          <pre className=" p-2 rounded overflow-x-auto">
            <div className="bg-blue-100 p-4 rounded shadow text-[15px]">
              <SyntaxHighlighter language="javascript" style={coy}>
                {`import { Provider } from "react-redux";
import { store } from './redux/store.js';

<Provider store={store}>
  <App />
</Provider>`}
              </SyntaxHighlighter>
            </div>
          </pre>
        </li>

        <li>
          <span className="font-semibold">Access store in components:</span>
          <pre className="bg-blue-100 p-2 rounded overflow-x-auto text-[15px]">
            <SyntaxHighlighter language="javascript" style={coy}>
              {`import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../redux/store";

const tasks = useSelector(state => state.task);
const dispatch = useDispatch();`}
            </SyntaxHighlighter>
          </pre>
        </li>
      </ol>
    </div>
  );
};

export const ActionVsActionCreatorNotes = () => {
  return (
    <div className="space-y-4 text-lg text-gray-700">
      <h2 className="text-2xl font-bold">
        7. Difference between Action and Action Creator in Redux
      </h2>

      {/* Action */}
      <div>
        <p className="font-semibold">Action</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            A <span className="font-semibold">plain JavaScript object</span>.
          </li>
          <li>
            Must have a <code>type</code> property (string).
          </li>
          <li>
            Can optionally have extra data (<code>payload</code>).
          </li>
        </ul>

        <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
          <SyntaxHighlighter language="javascript" style={coy}>
            {`{ type: "ADD_TASK", payload: "Learn Redux" }`}
          </SyntaxHighlighter>
        </div>
      </div>

      {/* Action Creator */}
      <div>
        <p className="font-semibold mt-4">Action Creator</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            A <span className="font-semibold">function</span> that returns an
            action object.
          </li>
          <li>Used so you don’t repeat object literals everywhere.</li>
        </ul>

        <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
          <SyntaxHighlighter language="javascript" style={coy}>
            {`// way 1 
const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

// way 2 
// if you use {} you must write return 
const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: task,
  }
}`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export const LearningTipNotes = () => {
  return (
    <div className="space-y-4 text-lg text-gray-700">
      <h2 className="text-2xl font-bold">8. Learning Tip</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          ✅{" "}
          <span className="font-semibold">
            If you use parentheses <code>()</code> right after the arrow, the
            object is returned implicitly.
          </span>
        </li>
        <li>
          ❌{" "}
          <span className="font-semibold">
            If you use curly braces <code>{`{}`}</code>, you must write{" "}
            <code>return</code> explicitly.
          </span>
        </li>
      </ul>

      <div className="bg-blue-100 p-4 rounded overflow-x-auto mt-2 text-[15px] ">
        <SyntaxHighlighter language="javascript" style={coy}>
          {`// Using parentheses (implicit return)
export const incrementCounter = (value) => ({
  type: 'counter/add',
  payload: value
});

export const decrementCounter = (value) => ({
  type: 'counter/decrement',
  payload: value
});

// Using curly braces (explicit return)
export const decrementCounter = (value) => {
  return {
    type: 'counter/decrement',
    payload: value
  };
};`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const ReduxDevToolsNotes = () => {
  return (
    <div className="space-y-4 text-lg text-gray-700">
      {/* Heading */}
      <h2 className="text-2xl font-bold">9. Redux DevTools</h2>

      {/* Description */}
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Redux DevTools</span> is a{" "}
          <span className="font-semibold">browser extension</span> for debugging
          Redux applications.
        </li>
        <li>It allows you to:</li>
        <ul className="list-disc pl-6 space-y-1">
          <li>Inspect the current state of your store.</li>
          <li>Track all actions dispatched.</li>
          <li>See how the state changes over time.</li>
          <li>Time-travel: undo/redo state changes.</li>
        </ul>
        <li>
          Very helpful for{" "}
          <span className="font-semibold">
            debugging and learning Redux flow
          </span>
          .
        </li>
      </ul>

      {/* Installation */}
      <h3 className="text-xl font-bold mt-4">Installation</h3>
      <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
        <SyntaxHighlighter
          language="bash"
          style={coy}
          customStyle={{
            fontSize: "15px",
            margin: 0,
            background: "transparent",
          }}
        >
          {`npm install redux redux-devtools-extension`}
        </SyntaxHighlighter>
      </div>

      {/* Setup heading */}
      <h3 className="text-xl font-bold mt-4">Setup with Redux Store</h3>

      <p className="mt-2">
        <span className="font-semibold">Classic Redux:</span>
      </p>

      <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
        <SyntaxHighlighter
          language="javascript"
          style={coy}
          customStyle={{
            fontSize: "15px",
            margin: 0,
            background: "transparent",
          }}
        >
          {`import { createStore } from "redux";
import { taskReducer } from "./reducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(taskReducer, composeWithDevTools());
export default store;`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const ReduxThunkNotes = () => {
  return (
    <div className="space-y-4 text-lg text-gray-700">
      {/* Heading */}
      <h2 className="text-2xl font-bold">10. Redux Thunk</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Redux Thunk</span> is a{" "}
          <span className="font-semibold">middleware</span> for Redux.
        </li>
        <li>
          Allows{" "}
          <span className="font-semibold">
            action creators to return a function
          </span>{" "}
          instead of a plain action object.
        </li>
        <li>
          Used to write <span className="font-semibold">async logic</span>{" "}
          (e.g., API calls) inside action creators.
        </li>
      </ul>

      {/* Installation */}
      <h3 className="text-xl font-bold mt-4">Installation</h3>
      <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
        <SyntaxHighlighter
          language="bash"
          style={coy}
          customStyle={{
            fontSize: "15px",
            margin: 0,
            background: "transparent",
          }}
        >
          {`npm install redux-thunk`}
        </SyntaxHighlighter>
      </div>

      {/* Key Points */}
      <h3 className="text-xl font-bold mt-4">Key Points</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Normally, Redux actions must be{" "}
          <span className="font-semibold">plain objects</span>.
        </li>
        <li>
          With Thunk, an action can be a{" "}
          <span className="font-semibold">function</span> that:
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Receives <code>dispatch</code> and <code>getState</code>
            </li>
            <li>
              Can dispatch multiple actions (before/after async operations)
            </li>
          </ul>
        </li>
      </ul>

      {/* Setup Store with Thunk */}
      <h3 className="text-xl font-bold mt-4">Setup Store with Thunk</h3>
      <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
        <SyntaxHighlighter
          language="javascript"
          style={coy}
          customStyle={{
            fontSize: "15px",
            margin: 0,
            background: "transparent",
          }}
        >
          {`import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;`}
        </SyntaxHighlighter>
      </div>

      {/* i. Action Types */}
      <h3 className="text-xl font-bold mt-4">i. Action Types</h3>
      <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
        <SyntaxHighlighter
          language="javascript"
          style={coy}
          customStyle={{
            fontSize: "15px",
            margin: 0,
            background: "transparent",
          }}
        >
          {`// actions/types.js
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";`}
        </SyntaxHighlighter>
      </div>

      {/* ii. Thunk Action Creator */}
      <h3 className="text-xl font-bold mt-4">ii. Thunk Action Creator</h3>
      <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
        <SyntaxHighlighter
          language="javascript"
          style={coy}
          customStyle={{
            fontSize: "15px",
            margin: 0,
            background: "transparent",
          }}
        >
          {`// actions/userActions.js
import axios from "axios";
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./types";

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST }); // loading state
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
    }
  };
};`}
        </SyntaxHighlighter>
      </div>

      {/* iii. Reducer */}
      <h3 className="text-xl font-bold mt-4">iii. Reducer</h3>
      <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
        <SyntaxHighlighter
          language="javascript"
          style={coy}
          customStyle={{
            fontSize: "15px",
            margin: 0,
            background: "transparent",
          }}
        >
          {`// reducers/userReducer.js
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "../actions/types";

const initialState = {
  loading: false,
  users: [],
  error: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { loading: false, users: action.payload, error: "" };
    case FETCH_USERS_FAILURE:
      return { loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};

export default userReducer;`}
        </SyntaxHighlighter>
      </div>

      {/* iv. Component Usage */}
      <h3 className="text-xl font-bold mt-4">iv. Component Usage</h3>
      <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
        <SyntaxHighlighter
          language="javascript"
          style={coy}
          customStyle={{
            fontSize: "15px",
            margin: 0,
            background: "transparent",
          }}
        >
          {`// components/UserList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../actions/userActions";

function UserList() {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const ReduxToolkitNotes = () => {
  return (
    <div className="space-y-4 text-lg text-gray-700">
      {/* Heading */}
      <h2 className="text-2xl font-bold">Redux Toolkit</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          Provides a <span className="font-semibold">set of utilities</span>{" "}
          that make Redux code simpler, less boilerplate, and easier to
          maintain.
        </li>
        <li>Built on top of Redux + Thunk.</li>
        <li>
          Install:{" "}
          <span className="font-semibold">
            npm install @reduxjs/toolkit react-redux
          </span>
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-4">Key Utilities</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="font-semibold">configureStore:</span> sets up Redux
          store with good defaults.
        </li>
        <li>
          <span className="font-semibold">createSlice:</span> combines actions +
          reducers in one object.
        </li>
        <li>
          <span className="font-semibold">createAsyncThunk:</span> simplifies
          async API requests.
        </li>
        <li>
          <span className="font-semibold">Provider:</span> React component to
          connect store with the app.
        </li>
      </ul>

      {/* 1. Create a Slice */}
      <h3 className="text-xl font-bold mt-4">1. Create a Slice</h3>
      <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
        <SyntaxHighlighter
          language="javascript"
          style={coy}
          customStyle={{
            fontSize: "15px",
            margin: 0,
            background: "transparent",
          }}
        >
          {`// features/counter/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
    incrementByAmount: (state, action) => { state.value += action.payload }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;`}
        </SyntaxHighlighter>
      </div>

      {/* 2. Configure Store */}
      <h3 className="text-xl font-bold mt-4">2. Configure Store</h3>
      <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
        <SyntaxHighlighter
          language="javascript"
          style={coy}
          customStyle={{
            fontSize: "15px",
            margin: 0,
            background: "transparent",
          }}
        >
          {`// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;`}
        </SyntaxHighlighter>
      </div>

      {/* 3. Provide Store in App */}
      <h3 className="text-xl font-bold mt-4">3. Provide Store in App</h3>
      <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
        <SyntaxHighlighter
          language="javascript"
          style={coy}
          customStyle={{
            fontSize: "15px",
            margin: 0,
            background: "transparent",
          }}
        >
          {`// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);`}
        </SyntaxHighlighter>
      </div>

      {/* 4. Use in Component */}
      <h3 className="text-xl font-bold mt-4">4. Use in Component</h3>
      <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
        <SyntaxHighlighter
          language="javascript"
          style={coy}
          customStyle={{
            fontSize: "15px",
            margin: 0,
            background: "transparent",
          }}
        >
          {`// Counter.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}

export default Counter;`}
        </SyntaxHighlighter>
      </div>

      {/* Async Example */}
      <h3 className="text-xl font-bold mt-4">
        Async Example with createAsyncThunk
      </h3>
      <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
        <SyntaxHighlighter
          language="javascript"
          style={coy}
          customStyle={{
            fontSize: "15px",
            margin: 0,
            background: "transparent",
          }}
        >
          {`// features/users/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: { loading: false, users: [], error: "" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => { state.loading = true })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default userSlice.reducer;`}
        </SyntaxHighlighter>
      </div>

      <p className="mt-2">
        <span className="font-semibold">Notes:</span> Reducers + Actions are in
        one slice, Thunk is included by default, use{" "}
        <code>createAsyncThunk</code> for async requests, and always wrap your
        app in Provider.
      </p>
    </div>
  );
};

export const StateMutationNotes = () => {
  return (
    <div className="space-y-4 text-lg text-gray-700">
      <h2 className="text-2xl font-bold">
        🔹 State Mutation in Redux vs Redux Toolkit
      </h2>

      {/* 1. Redux Classic */}
      <h3 className="text-xl font-bold mt-4">1. Redux (Classic)</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          In plain Redux,{" "}
          <span className="font-semibold">state must be immutable</span>.
        </li>
        <li>
          You <span className="font-semibold">cannot directly change</span> the
          existing state object.
        </li>
        <li>
          You must <span className="font-semibold">return a new object</span>{" "}
          with updated values.
        </li>
      </ul>
      <p className="mt-2 font-semibold">Example:</p>
      <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
        <SyntaxHighlighter
          language="javascript"
          style={coy}
          customStyle={{
            fontSize: "15px",
            margin: 0,
            background: "transparent",
          }}
        >
          {`// ❌ Wrong (direct mutation)
case "INCREMENT":
  state.value = state.value + 1;
  return state;

// ✅ Correct (immutable update)
case "INCREMENT":
  return { ...state, value: state.value + 1 };`}
        </SyntaxHighlighter>
      </div>
      <p className="mt-2">
        ⚡ Why? Redux uses{" "}
        <span className="font-semibold">shallow equality checks</span> to detect
        changes. If you mutate state directly, Redux might not realize something
        changed → UI won’t re-render correctly.
      </p>

      {/* 2. Redux Toolkit */}
      <h3 className="text-xl font-bold mt-4">2. Redux Toolkit</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          RTK uses <span className="font-semibold">Immer.js</span> internally.
        </li>
        <li>
          Immer allows you to{" "}
          <span className="font-semibold">
            write code that looks like mutation
          </span>{" "}
          but produces an immutable copy behind the scenes.
        </li>
        <li>You can safely write:</li>
      </ul>
      <div className="bg-blue-100 p-4 rounded mt-2 overflow-x-auto text-[15px]">
        <SyntaxHighlighter
          language="javascript"
          style={coy}
          customStyle={{
            fontSize: "15px",
            margin: 0,
            background: "transparent",
          }}
        >
          {`increment: (state) => {
  state.value += 1;   // looks like mutation ✅
}`}
        </SyntaxHighlighter>
      </div>
      <p className="mt-2">
        Immer intercepts this and converts it into an immutable update behind
        the scenes.
      </p>
    </div>
  );
};

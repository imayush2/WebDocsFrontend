import {
  Introduction,
  StoreNotes,
  ActionNotes,
  ActionCreatorNotes,
  ReducerNotes,
  StoreNotes2,
  ReactReduxIntegrationNotes,
  ActionVsActionCreatorNotes,
  LearningTipNotes,
  ReduxDevToolsNotes,
  ReduxThunkNotes,
  ReduxToolkitNotes,
  StateMutationNotes,
} from "../static/redux/notes.tsx";

const Redux = () => {
  return (
    <div className="space-y-6">
      <h1 id="redux" className="text-6xl text-gray-800 font-bold">Redux</h1>

      <br />

      <h1 className="text-4xl text-gray-800 font-bold">What is Redux ?</h1>

      <div>
        <Introduction />
      </div>

      <div>
        <div id="store">
          <StoreNotes />
        </div>
      </div>
      <br />

      <div id="action">
        <div>
          <ActionNotes />
        </div>
      </div>

        <br />
      <div id="action-creator">
        <div>
          <ActionCreatorNotes />
        </div>
      </div>
      <br />

      <div id="reducer">
        <div>
          <ReducerNotes />
        </div>
      </div>
      <br />

      <div id="redux-store">
        <div>
          <StoreNotes2 />
        </div>
      </div>
      <br />

      <div id="react-redux-integration">
        <div>
          <ReactReduxIntegrationNotes />
        </div>
      </div>

      <div id="action-and-action-creator">
        <div>
          <ActionVsActionCreatorNotes />
        </div>
      </div>

      <div id="learning-tip">
        <div>
          <LearningTipNotes />
        </div>
      </div>

      <div id="redux-devtools">
        <div>
          <ReduxDevToolsNotes />
        </div>
      </div>

      <div id="redux-thunk">
        <div>
          <ReduxThunkNotes />
        </div>
      </div>

      <div id="redux-toolkit">
        <div>
          <ReduxToolkitNotes />
        </div>
      </div>

      <div id="state-mutation-in-redux-vs-redux-toolkit">
        <div>
          <StateMutationNotes />
        </div>
      </div>
    </div>
  );
};

export default Redux;



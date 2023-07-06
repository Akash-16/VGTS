import React, { Suspense } from "react";
import { Provider } from "react-redux";

import Routers from "./routers";
import state from "./redux/state";

function App() {
  return (
    <Suspense fallback={null}>
      <Provider store={state}>
        <Routers />
      </Provider>
    </Suspense>
  );
}

export default React.memo(App);

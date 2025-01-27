import PageScroller from "react-page-scroller";

import "./App.css";
import Scene from "./components/game/Scene/Scene";

function App() {
  return <Scene />;
  return (
    <PageScroller animationTimer={500}>
      <div style={{ height: "100vh", backgroundColor: "lightblue" }}>xd1</div>
      <div style={{ height: "100vh" }}>
        <Scene />
      </div>
    </PageScroller>
  );
}

export default App;

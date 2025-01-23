import PageScroller from "react-page-scroller";

import "./App.css";
import GameScene from "./components/game/GameScene/GameScene";

function App() {
  return <GameScene />;
  return (
    <PageScroller animationTimer={500}>
      <div style={{ height: "100vh", backgroundColor: "lightblue" }}>xd1</div>
      <div style={{ height: "100vh" }}>
        <GameScene />
      </div>
    </PageScroller>
  );
}

export default App;

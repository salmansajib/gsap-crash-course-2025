import AnimatedLetters from "./components/AnimatedLetters";
import GsapFrom from "./components/GsapFrom";
import GsapFromTo from "./components/GsapFromTo";
import GsapTimeline from "./components/GsapTimeline";
import GsapTo from "./components/GsapTo";

function App() {
  return (
    <main className="overflow-clip">
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />
      <GsapTimeline />
      {/* <AnimatedLetters text="Hello World" /> */}
    </main>
  );
}

export default App;

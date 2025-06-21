import AnimatedLetters from "./components/AnimatedLetters";
import GsapFrom from "./components/GsapFrom";
import GsapFromTo from "./components/GsapFromTo";
import GsapTo from "./components/GsapTo";

function App() {
  return (
    <main className="overflow-clip">
      <GsapTo />
      <GsapFrom />
      <GsapFromTo />
      <AnimatedLetters text="Hello World" />
    </main>
  );
}

export default App;

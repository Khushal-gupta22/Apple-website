import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/model/Model";
import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import Working from "./components/Working";

const App = () => {
  // return <button onClick={() => methodDoesNotExist()}>Break the world</button>;
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Working />
    </main>
  );
};

export default Sentry.withProfiler(App);

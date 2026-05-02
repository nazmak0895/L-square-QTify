// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Card from "./components/Card/Card";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />

//       <div style={{ padding: "20px" }}>
//       <Card
//         image="https://picsum.photos/300"
//         follows="100"
//         title="New English Songs"
//       />
//     </div>
//     </>
//   );
// }

// export default App;

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section
        title="Top Albums"
        endpoint="https://qtify-backend.labs.crio.do/albums/top"
      />
      <Section
        title="New Albums"
        endpoint="https://qtify-backend.labs.crio.do/albums/new"
      />
    </>
  );
}

export default App;
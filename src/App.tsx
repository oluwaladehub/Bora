// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Header from "./sections/Header.jsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Hero from "./sections/Hero.jsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Features from "./sections/Features.jsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Pricing from "./sections/Pricing.jsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Faq from "./sections/Faq.jsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Download from "./sections/Download.jsx";
// @ts-ignore
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Download />
      <Footer />
    </main>
  );
};

export default App;

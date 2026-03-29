import { useState } from "react";
import { StyleProvider } from "./context/StyleContext";
import { StyleSidebar, Header, Footer } from "./components/layout";
import {
  FormSection,
  ButtonSection,
  FeedbackSection,
  ContainerSection,
  MediaSection
} from "./components/sections";

// Import styles
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";

// Import all 20 style themes
import "./styles/flat-design.css";
import "./styles/soft-ui.css";
import "./styles/neobrutalism.css";
import "./styles/glassmorphism.css";
import "./styles/claymorphism.css";
import "./styles/material-design.css";
import "./styles/skeuomorphism.css";
import "./styles/minimalism.css";
import "./styles/dark-mode.css";
import "./styles/gradient-design.css";
import "./styles/aurora-ui.css";
import "./styles/frosted-glass.css";
import "./styles/retro-y2k.css";
import "./styles/cyberpunk.css";
import "./styles/biomorphic.css";
import "./styles/3d-immersive.css";
import "./styles/monochrome.css";
import "./styles/duotone.css";
import "./styles/memphis.css";
import "./styles/swiss-style.css";

// Import responsive and animations
import "./styles/responsive.css";
import "./styles/animations.css";

function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="app">
      <StyleSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <main className="main">
        <Header onMenuToggle={toggleSidebar} />

        <div className="content">
          <FormSection />
          <ButtonSection />
          <FeedbackSection />
          <ContainerSection />
          <MediaSection />
        </div>

        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <StyleProvider>
      <AppContent />
    </StyleProvider>
  );
}

export default App;

import { ThemeProvider } from "./components/theme-provider"
import Header from "./components/Header"
import Home from "./components/home"
import SpaceBackground from "./components/SpaceBackground"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground relative">
        <SpaceBackground />
        <Header />
        <main>
          <Home />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App

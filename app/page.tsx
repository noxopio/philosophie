import FloatingMenu from './components/FloatingMenu/FloatingMenu';
import ThemeSelector from './components/Theme/ThemeSelector';
// import { Sidebar } from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';

export default function Home() {
  return (
    <div>
      <FloatingMenu />
      <ThemeSelector />
      {/* <Sidebar /> */}
      <MainContent />
    </div>
  );
}

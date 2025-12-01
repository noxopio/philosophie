import FloatingMenu from './components/FloatingMenu';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

export default function Home() {
  return (
    <div>
      <FloatingMenu />
      <Sidebar />
      <MainContent />
    </div>
  );
}

import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import AdminHomepage from './home/home';
import Login from './home/login';
import Register from './home/register';
import SeriouslyNixPage from './srsnix/srsnix-page';
import SeriouslyOverview from './srsnix/pages/overview';
import SeriouslyUpdates from './srsnix/pages/updates';
import { ThemeProvider, useTheme } from './ThemeContext';
import ScrotePage from './scrote/scrote-page';
import ScroteOverview from './scrote/pages/overview';
import ScroteSubmissions from './scrote/pages/submissions';
import SeriouslyPolls from './srsnix/pages/polls';

function App() {
  const { theme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'theme-css';

    if (theme === 'srsnix') {
      link.href = '/themes/srsnix.css';
    } else {
      link.href = '/themes/default.css';
    }

    document.head.appendChild(link);

    return () => {
      const existingLink = document.getElementById('theme-css');
      if (existingLink) {
        document.head.removeChild(existingLink);
      }
    };
  }, [theme]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AdminHomepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="scrote" element={<ScrotePage />}>
          <Route index element={<ScroteOverview />} />
          <Route path="overview" element={<ScroteOverview />} />
          <Route path="submissions" element={<ScroteSubmissions />} />
          <Route path="files" element={<ScroteSubmissions />} />
          <Route path="email" element={<ScroteSubmissions />} />
          <Route path="observer" element={<ScroteSubmissions />} />
        </Route>

        <Route path="srsnix" element={<SeriouslyNixPage />}>
          <Route path="overview" element={<SeriouslyOverview />} />
          <Route path="updates" element={<SeriouslyUpdates />} />
          <Route path="polls" element={<SeriouslyPolls />} />
          <Route path="files" element={<SeriouslyUpdates />} />
          <Route path="harold" element={<SeriouslyUpdates />} />
          <Route path="ip" element={<SeriouslyUpdates />} />
          <Route path="stats" element={<SeriouslyUpdates />} />
        </Route>
      </Routes>

      <footer style={{ padding: '8px', color: 'white', textAlign: 'center' }}>
        <hr />
        <p>SoftwareMongers ©</p>
      </footer>
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter basename='/'>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
}
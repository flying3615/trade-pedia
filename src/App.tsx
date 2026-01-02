import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { DocsLayout } from './layouts/DocsLayout.tsx';
import { Home } from './pages/Home.tsx';
import IntroPage from './pages/IntroPage.tsx';

// Placeholder components for other pages
function Basics() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Price Action Basics</h1>
      <p>Understanding support, resistance, and trends.</p>
    </div>
  );
}

function Patterns() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Chart Patterns</h1>
      <p>Common formations that signal potential future price movements.</p>
    </div>
  );
}

import DecisionTreePage from './pages/decision-tree/DecisionTreePage.tsx';
import ICTPage from './pages/ict/ICTPage.tsx';
import ICTConceptDetail from './pages/ict/ICTConceptDetail.tsx';

import OptionsStrategiesPage from './pages/options/OptionsStrategiesPage.tsx';
import OptionStrategyDetailPage from './pages/options/OptionStrategyDetailPage.tsx';
import OptionsBasicsPage from './pages/options/OptionsBasicsPage.tsx';
import ForexNewsPage from './pages/news/ForexNewsPage.tsx';
import TrendLiquidityChecklist from './pages/checklist/TrendLiquidityChecklist.tsx';
import CoachPromptPage from './pages/prompts/CoachPromptPage.tsx';
import ChecklistPromptPage from './pages/prompts/ChecklistPromptPage.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DocsLayout><Home /></DocsLayout>} />
        <Route path="/news" element={<DocsLayout><ForexNewsPage /></DocsLayout>} />
        <Route path="/intro" element={<DocsLayout><IntroPage /></DocsLayout>} />
        <Route path="/basics" element={<DocsLayout><Basics /></DocsLayout>} />
        <Route path="/patterns" element={<DocsLayout><Patterns /></DocsLayout>} />
        <Route path="/decision-tree" element={<DocsLayout><DecisionTreePage /></DocsLayout>} />

        {/* Options Trading Routes */}
        <Route path="/options/basics" element={<DocsLayout><OptionsBasicsPage /></DocsLayout>} />
        <Route path="/options/strategies" element={<DocsLayout><OptionsStrategiesPage /></DocsLayout>} />
        <Route path="/options/strategies/:id" element={<DocsLayout disableScroll><OptionStrategyDetailPage /></DocsLayout>} />

        {/* Checklist Routes */}
        <Route path="/checklist/trend-liquidity" element={<DocsLayout><TrendLiquidityChecklist /></DocsLayout>} />

        {/* ICT Trading Routes */}
        <Route path="/ict" element={<DocsLayout><ICTPage /></DocsLayout>} />
        <Route path="/ict/:id" element={<DocsLayout disableScroll><ICTConceptDetail /></DocsLayout>} />

        {/* AI Prompts Routes */}
        <Route path="/prompts/coach" element={<DocsLayout><CoachPromptPage /></DocsLayout>} />
        <Route path="/prompts/checklist" element={<DocsLayout><ChecklistPromptPage /></DocsLayout>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

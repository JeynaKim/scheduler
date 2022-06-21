import { useState } from 'react';

export default function useVisualMode(initial) {
  // const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    if (replace) {
      setHistory(prev => [...prev.slice(0, -1), newMode]);
    } else {
      setHistory(prev => [...prev, newMode]);
    }
    // setMode(newMode);
  }

  function back() {
    if (history.length < 2) return;
    setHistory((prev) => {
      return [...prev.slice(0, history.length - 1)];
    })
  }
  return { mode: history[history.length - 1], transition, back };
};



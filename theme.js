try { const theme = localStorage.getItem('lumuna-theme'); if (theme === 'light' || theme === 'dark') document.documentElement.dataset.theme = theme; } catch {}

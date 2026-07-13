"use client";

/**
 * Dark-mode toggle.
 *
 * The `dark` class is set on <html> before paint by the inline script in
 * app/layout.js, so which icon shows is driven purely by CSS (`dark:` variants).
 * That avoids a hydration mismatch and a theme flash — the click handler only
 * flips the class and persists the choice.
 */
const ThemeToggle = ({ className = "" }) => {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.theme = isDark ? "dark" : "light";
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className={`grid place-items-center w-10 h-10 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-darkHover/60 ${className}`}
    >
      {/* Moon — shown in light mode (click to go dark) */}
      <svg
        className="w-5 h-5 dark:hidden"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>

      {/* Sun — shown in dark mode (click to go light) */}
      <svg
        className="w-5 h-5 hidden dark:block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    </button>
  );
};

export default ThemeToggle;

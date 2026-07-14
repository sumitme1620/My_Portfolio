const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 font-medium transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed";

export const btnPrimary =
  `${buttonBase} bg-gray-900 text-white hover:bg-gray-700 active:bg-gray-800 ` +
  "dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:active:bg-gray-300";

export const btnSecondary =
  `${buttonBase} border border-gray-300 text-gray-800 hover:bg-gray-100 hover:border-gray-400 active:bg-gray-200 ` +
  "dark:border-white/30 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/50 dark:active:bg-white/20";

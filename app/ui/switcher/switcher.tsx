'use client'
import { useDispatch, useSelector } from 'react-redux';

import { toggleDarkMode } from '../../redux/darkModeSlice';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function Switcher() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state:any) => state.darkMode); // Get dark mode state from Redux store

  const toggleMode = () => {
    dispatch(toggleDarkMode()); // Dispatch action to toggle dark mode
    document.body.dataset.theme = isDarkMode ? 'light' : 'dark'; // Update body's data-theme attribute
  };

  return (
    <button
      type="button"
      className="py-2.5 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle"
      onClick={toggleMode}
    >
      <span className="group inline-flex flex-shrink-0 justify-center items-center h-4 w-4 text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500">
        {isDarkMode ? <SunIcon className="w-6" /> : <MoonIcon className="w-6" />}
      </span>
    </button>
  );
}

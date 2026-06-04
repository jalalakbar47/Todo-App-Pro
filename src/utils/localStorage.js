/**
 * Helper functions to interact with the browser's Local Storage.
 */

const STORAGE_KEYS = {
  TODOS: 'todo_app_pro_tasks',
  THEME: 'todo_app_pro_theme',
};

/**
 * Save todos to local storage.
 * @param {Array} todos 
 */
export const saveTodos = (todos) => {
  localStorage.setItem(STORAGE_KEYS.TODOS, JSON.stringify(todos));
};

/**
 * Load todos from local storage.
 * @returns {Array}
 */
export const loadTodos = () => {
  const data = localStorage.getItem(STORAGE_KEYS.TODOS);
  return data ? JSON.parse(data) : [];
};

/**
 * Save theme preference to local storage.
 * @param {string} theme 
 */
export const saveTheme = (theme) => {
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
};

/**
 * Load theme preference from local storage.
 * @returns {string|null}
 */
export const loadTheme = () => {
  return localStorage.getItem(STORAGE_KEYS.THEME);
};

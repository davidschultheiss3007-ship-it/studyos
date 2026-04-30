/* ══════════════════════════════════════════════════════════════════════
   StudyOS · data/_registry.js
   ──────────────────────────────────────────────────────────────────────
   Globale Container. Muss VOR allen weiteren data/-Files geladen werden.
   Jede data/<modul>.js pusht in MODULES, QUESTIONS und/oder erweitert
   FULL_CONTENT.
   ══════════════════════════════════════════════════════════════════════ */
'use strict';

window.SEMESTERS    = window.SEMESTERS    || [
  {
    id: 'semester-04',
    title: '4. Semester',
    description: 'Module des vierten Semesters',
    modules: ['asset-management', 'behavioral-finance', 'hr']
  }
];
window.MODULES      = window.MODULES      || [];
window.QUESTIONS    = window.QUESTIONS    || [];
window.FULL_CONTENT = window.FULL_CONTENT || {};

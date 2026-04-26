'use strict';

(function () {
  const FULL_CONTENT = {
    'bf:zwei-systeme:system-1': `
      <div class="note-page">
        <h3>System 1 – schnelles Denken</h3>
        <p>System 1 arbeitet schnell, automatisch und mühelos. Es erzeugt spontane Urteile ohne bewusste Steuerung.</p>
      </div>`,
    'bf:zwei-systeme:system-2': `
      <div class="note-page">
        <h3>System 2 – langsames Denken</h3>
        <p>System 2 ist aufmerksamkeitsintensiv, bewusst und analytisch. Es wird bei komplexen Aufgaben aktiviert.</p>
      </div>`,
    'bf:zwei-systeme:zusammenspiel': `
      <div class="note-page">
        <h3>Zusammenspiel von System 1 und System 2</h3>
        <p>Beide Systeme arbeiten zusammen: System 1 liefert schnelle Vorschläge, System 2 prüft und korrigiert bei Bedarf.</p>
      </div>`,

    'bf:heuristiken:verfuegbarkeit': `
      <div class="note-page">
        <h3>Verfügbarkeitsheuristik</h3>
        <p>Wahrscheinlichkeiten werden überschätzt, wenn Beispiele leicht erinnerbar sind.</p>
      </div>`,
    'bf:heuristiken:repraesentativitaet': `
      <div class="note-page">
        <h3>Repräsentativitätsheuristik</h3>
        <p>Menschen beurteilen nach Ähnlichkeit mit Stereotypen und vernachlässigen Basisraten.</p>
      </div>`,
    'bf:heuristiken:anchoring': `
      <div class="note-page">
        <h3>Anchoring</h3>
        <p>Ausgangswerte beeinflussen Schätzungen stark, auch wenn sie sachlich wenig relevant sind.</p>
      </div>`,

    'bf:unsicherheit:prospect-theory': `
      <div class="note-page">
        <h3>Prospect Theory</h3>
        <p>Entscheidungen unter Risiko hängen von Referenzpunkten und Verlustaversion ab, nicht nur von Endvermögen.</p>
      </div>`,
    'bf:unsicherheit:loss-aversion': `
      <div class="note-page">
        <h3>Verlustaversion</h3>
        <p>Verluste werden psychologisch stärker gewichtet als gleich große Gewinne.</p>
      </div>`,
    'bf:unsicherheit:framing': `
      <div class="note-page">
        <h3>Framing-Effekte</h3>
        <p>Die Darstellung von Informationen beeinflusst Entscheidungen, obwohl die Sachlage unverändert bleibt.</p>
      </div>`
  };

  Object.assign(window.FULL_CONTENT, FULL_CONTENT);

  const MODULES = [
    {
      id: 'behavioral-finance',
      title: 'Behavioral Finance',
      subtitle: 'Kahneman-Systeme, Heuristiken und Entscheidungen unter Unsicherheit.',
      icon: 'brain',
      topics: [
        {
          id: 'modell-zwei-systeme',
          title: 'Das Modell der zwei Systeme nach Kahneman',
          intro: 'Schnelles und langsames Denken sowie ihr Zusammenspiel in Entscheidungen.',
          subtopics: [
            { id: 'system-1', title: 'System 1 – schnelles Denken', legacyKey: 'bf:zwei-systeme:system-1' },
            { id: 'system-2', title: 'System 2 – langsames Denken', legacyKey: 'bf:zwei-systeme:system-2' },
            { id: 'zusammenspiel', title: 'System 1 vs. System 2', legacyKey: 'bf:zwei-systeme:zusammenspiel' }
          ]
        },
        {
          id: 'heuristiken-kognitive-verzerrungen',
          title: 'Heuristiken und kognitive Verzerrungen',
          intro: 'Typische mentale Abkürzungen und systematische Urteilsfehler.',
          subtopics: [
            { id: 'verfuegbarkeit', title: 'Verfügbarkeitsheuristik', legacyKey: 'bf:heuristiken:verfuegbarkeit' },
            { id: 'repraesentativitaet', title: 'Repräsentativitätsheuristik', legacyKey: 'bf:heuristiken:repraesentativitaet' },
            { id: 'anchoring', title: 'Anchoring', legacyKey: 'bf:heuristiken:anchoring' }
          ]
        },
        {
          id: 'entscheidungen-unter-unsicherheit',
          title: 'Entscheidungen unter Unsicherheit',
          intro: 'Prospect Theory, Verlustaversion und Framing in Entscheidungsproblemen.',
          subtopics: [
            { id: 'prospect-theory', title: 'Prospect Theory', legacyKey: 'bf:unsicherheit:prospect-theory' },
            { id: 'loss-aversion', title: 'Verlustaversion', legacyKey: 'bf:unsicherheit:loss-aversion' },
            { id: 'framing', title: 'Framing-Effekte', legacyKey: 'bf:unsicherheit:framing' }
          ]
        }
      ]
    }
  ];

  window.MODULES.push(...MODULES);

  const QUESTIONS = [
    { topic: 'modell-zwei-systeme', type: 'quiz', q: 'Welches System arbeitet überwiegend automatisch?', a: ['System 1', 'System 2', 'Beide gleich', 'Keines'], c: 0, e: 'System 1 steht für schnelles, automatisches Denken.' },
    { topic: 'heuristiken-kognitive-verzerrungen', type: 'quiz', q: 'Was beschreibt Anchoring?', a: ['Einfluss eines Startwerts auf Schätzungen', 'Nur statistische Regression', 'Reine Zufallseffekte', 'Maximierung von Erwartungswert'], c: 0, e: 'Ankerwerte verzerren nachfolgende Urteile.' },
    { topic: 'entscheidungen-unter-unsicherheit', type: 'flash', q: 'Kernaussage der Verlustaversion?', ans: 'Verluste wiegen subjektiv stärker als gleich große Gewinne.', e: 'Zentrales Element der Prospect Theory.' }
  ];

  window.QUESTIONS.push(...QUESTIONS);
})();

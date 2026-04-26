'use strict';

(function () {
  const FULL_CONTENT = {
    'hr:grundlagen:hrm-und-organisation': `
      <div class="note-page"><h3>HRM und Organisation</h3><p>Human Resource Management verbindet Unternehmensziele mit personellen Ressourcen.</p></div>`,
    'hr:grundlagen:ziele-und-aufgaben': `
      <div class="note-page"><h3>Ziele und Aufgaben des HRM</h3><p>Wirtschaftliche, soziale und individuelle Ziele müssen ausgewogen gesteuert werden.</p></div>`,
    'hr:grundlagen:einflussfaktoren': `
      <div class="note-page"><h3>Einflussfaktoren im HRM</h3><p>Werte, Technologie, Markt und Globalisierung prägen Personalentscheidungen.</p></div>`,

    'hr:arbeitsrecht:arbeitsvertrag': `
      <div class="note-page"><h3>Arbeitsvertrag und Pflichten</h3><p>Arbeitgeber- und Arbeitnehmerpflichten ergeben sich aus dem Arbeitsvertrag.</p></div>`,
    'hr:arbeitsrecht:arbeitnehmerbegriff': `
      <div class="note-page"><h3>Arbeitnehmerbegriff</h3><p>Persönliche Abhängigkeit ist ein zentrales Merkmal im Arbeitsrecht.</p></div>`,
    'hr:arbeitsrecht:leitende-angestellte': `
      <div class="note-page"><h3>Leitende Angestellte</h3><p>Leitende Angestellte nehmen eine arbeitsrechtliche Sonderstellung ein.</p></div>`,

    'hr:politik:strategie-und-politik': `
      <div class="note-page"><h3>Unternehmens- und Personalpolitik</h3><p>Normative, strategische und operative Ebene müssen kohärent zusammenwirken.</p></div>`,
    'hr:politik:psychologischer-vertrag': `
      <div class="note-page"><h3>Psychologischer Vertrag</h3><p>Unausgesprochene Erwartungen beeinflussen Bindung und Motivation.</p></div>`,
    'hr:politik:magisches-dreieck': `
      <div class="note-page"><h3>Magisches Dreieck der Personalpolitik</h3><p>Personalpolitik balanciert Unternehmens- und Mitarbeiterinteressen.</p></div>`,

    'hr:planung:bedarf-und-bestand': `
      <div class="note-page"><h3>Personalbedarfs- und Bestandsanalyse</h3><p>Planung basiert auf Soll-Ist-Abgleich von Bedarf und Bestand.</p></div>`,
    'hr:planung:soll-ist-abgleich': `
      <div class="note-page"><h3>Soll-Ist-Abgleich</h3><p>Unter- und Überdeckungen erfordern unterschiedliche Maßnahmen.</p></div>`,
    'hr:planung:massnahmen': `
      <div class="note-page"><h3>Maßnahmen bei Abweichungen</h3><p>Interne und externe Instrumente steuern quantitative und qualitative Lücken.</p></div>`,

    'hr:gewinnung:kompetenzprofile': `
      <div class="note-page"><h3>Kompetenz- und Anforderungsprofile</h3><p>Kompetenzprofile strukturieren den Auswahlprozess in der Personalgewinnung.</p></div>`,
    'hr:gewinnung:stellenbeschreibung': `
      <div class="note-page"><h3>Stellenbeschreibung</h3><p>Stellenbeschreibungen definieren Aufgaben, Verantwortung und Einordnung.</p></div>`,
    'hr:gewinnung:arbeitsmarktanalyse': `
      <div class="note-page"><h3>Arbeitsmarktanalyse</h3><p>Interne und externe Beschaffungspotentiale sind systematisch zu prüfen.</p></div>`
  };

  Object.assign(window.FULL_CONTENT, FULL_CONTENT);

  const MODULES = [
    {
      id: 'hr',
      title: 'Human Resources',
      subtitle: 'Grundlagen, Arbeitsrecht, Personalpolitik, Personalplanung sowie Gewinnung & Entwicklung.',
      icon: 'book',
      topics: [
        {
          id: 'hr-grundlagen',
          title: 'Grundlagen des Human Resource Management',
          intro: 'Begriffe, Ziele, Aufgaben und Einflussfaktoren des HRM.',
          subtopics: [
            { id: 'hrm-und-organisation', title: 'HRM und Organisation', legacyKey: 'hr:grundlagen:hrm-und-organisation' },
            { id: 'ziele-und-aufgaben', title: 'Ziele und Aufgaben', legacyKey: 'hr:grundlagen:ziele-und-aufgaben' },
            { id: 'einflussfaktoren', title: 'Einflussfaktoren', legacyKey: 'hr:grundlagen:einflussfaktoren' }
          ]
        },
        {
          id: 'hr-arbeitsrecht',
          title: 'Arbeitsrechtliche Grundlagen',
          intro: 'Arbeitsvertrag, Pflichten, Arbeitnehmerbegriff und Sonderstellungen.',
          subtopics: [
            { id: 'arbeitsvertrag', title: 'Arbeitsvertrag und Pflichten', legacyKey: 'hr:arbeitsrecht:arbeitsvertrag' },
            { id: 'arbeitnehmerbegriff', title: 'Arbeitnehmerbegriff', legacyKey: 'hr:arbeitsrecht:arbeitnehmerbegriff' },
            { id: 'leitende-angestellte', title: 'Leitende Angestellte', legacyKey: 'hr:arbeitsrecht:leitende-angestellte' }
          ]
        },
        {
          id: 'hr-personalpolitik',
          title: 'Unternehmens- und Personalpolitik',
          intro: 'Strategische Ausrichtung, psychologischer Vertrag und Zielausgleich.',
          subtopics: [
            { id: 'strategie-und-politik', title: 'Strategie und Politik', legacyKey: 'hr:politik:strategie-und-politik' },
            { id: 'psychologischer-vertrag', title: 'Psychologischer Vertrag', legacyKey: 'hr:politik:psychologischer-vertrag' },
            { id: 'magisches-dreieck', title: 'Magisches Dreieck', legacyKey: 'hr:politik:magisches-dreieck' }
          ]
        },
        {
          id: 'hr-personalplanung',
          title: 'Personalplanung',
          intro: 'Bedarf, Bestand, Soll-Ist-Abgleich und Maßnahmensteuerung.',
          subtopics: [
            { id: 'bedarf-und-bestand', title: 'Bedarf und Bestand', legacyKey: 'hr:planung:bedarf-und-bestand' },
            { id: 'soll-ist-abgleich', title: 'Soll-Ist-Abgleich', legacyKey: 'hr:planung:soll-ist-abgleich' },
            { id: 'massnahmen', title: 'Maßnahmen', legacyKey: 'hr:planung:massnahmen' }
          ]
        },
        {
          id: 'hr-personalgewinnung-entwicklung',
          title: 'Personalgewinnung, Entwicklung und Karrierewege',
          intro: 'Kompetenzprofile, Stellenbeschreibung und Arbeitsmarktforschung.',
          subtopics: [
            { id: 'kompetenzprofile', title: 'Kompetenzprofile', legacyKey: 'hr:gewinnung:kompetenzprofile' },
            { id: 'stellenbeschreibung', title: 'Stellenbeschreibung', legacyKey: 'hr:gewinnung:stellenbeschreibung' },
            { id: 'arbeitsmarktanalyse', title: 'Arbeitsmarktanalyse', legacyKey: 'hr:gewinnung:arbeitsmarktanalyse' }
          ]
        }
      ]
    }
  ];

  window.MODULES.push(...MODULES);

  const QUESTIONS = [
    { topic: 'hr-grundlagen', type: 'quiz', q: 'Was ist eine Kernaufgabe des HRM?', a: ['Personal in erforderlicher Zahl und Eignung bereitstellen', 'Nur Lohnabrechnung verwalten', 'Ausschließlich Marketing steuern', 'Nur IT betreiben'], c: 0, e: 'HRM stellt geeignetes Personal termingerecht bereit.' },
    { topic: 'hr-arbeitsrecht', type: 'quiz', q: 'Welche Pflicht gehört typischerweise zum Arbeitgeber?', a: ['Entgeltzahlungspflicht', 'Arbeitspflicht', 'Gehorsamspflicht', 'Treuepflicht'], c: 0, e: 'Entgelt- und Fürsorgepflichten liegen beim Arbeitgeber.' },
    { topic: 'hr-personalpolitik', type: 'flash', q: 'Was beschreibt der psychologische Vertrag?', ans: 'Unausgesprochene Erwartungen zwischen Mitarbeitenden und Unternehmen.', e: 'Er beeinflusst Motivation, Bindung und Fairnesswahrnehmung.' },
    { topic: 'hr-personalplanung', type: 'task', q: 'Soll-Bedarf 120 FTE, Ist-Bestand 108 FTE. Wie groß ist die Unterdeckung?', ans: '12 FTE Unterdeckung.', e: 'Unterdeckung = Soll minus Ist.' },
    { topic: 'hr-personalgewinnung-entwicklung', type: 'cloze', q: 'Die __________ definiert Aufgaben, Verantwortung und Einordnung einer Position.', ans: 'Stellenbeschreibung', e: 'Sie ist ein zentrales Instrument der Personalgewinnung.' }
  ];

  window.QUESTIONS.push(...QUESTIONS);
})();

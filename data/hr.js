(function () {
  window.MODULES = window.MODULES || [];
  window.QUESTIONS = window.QUESTIONS || [];
  window.FULL_CONTENT = window.FULL_CONTENT || {};

  const moduleId = "hr";

  const hrModule = {
    id: "hr",
    title: "Human Resources",
    description: "Grundlagen, Arbeitsrecht, Personalpolitik, Ethik, Personalplanung sowie Personalgewinnung und Entwicklung.",
    icon: "👥",
    category: "BWL",
    topics: [
      {
        id: "hr-grundlagen",
        title: "Grundlagen des Human Resource Management",
        description: "Begriffe, Ziele, Aufgaben, Einflussfaktoren, Spannungsfelder und interdisziplinäre Schnittstellen des HRM.",
        icon: "📘",
        legacyKey: "hr-grundlagen",
        contentKey: "hr-grundlagen",
        subtopics: [
          "HRM und Organisation",
          "Begriffsklärung: Personal, Personalmanagement, Personalmarketing, Personalpolitik",
          "Wirtschaftliche, soziale und individuelle Ziele",
          "Hauptaufgaben des HRM",
          "Einordnung des Personalwesens",
          "Einflussfaktoren: Werte, Technologie, Markt, Organisation, Globalisierung",
          "Spannungsfelder im HRM",
          "Interdisziplinäre Schnittmenge"
        ]
      },
      {
        id: "hr-arbeitsrecht",
        title: "Arbeitsrechtliche Grundlagen",
        description: "Arbeitsvertrag, Arbeitgeber, Arbeitnehmer, Arbeitsverhältnis, Pflichten, leitende Angestellte und arbeitsrechtliche Teilbereiche.",
        icon: "⚖️",
        legacyKey: "hr-arbeitsrecht",
        contentKey: "hr-arbeitsrecht",
        subtopics: [
          "Individuelles Arbeitsrecht",
          "Pflichten von Arbeitgeber und Arbeitnehmer",
          "Personalbegriff: Köpfe und Kapazitäten",
          "Arbeitgeberbegriff",
          "Arbeitnehmerbegriff",
          "Arbeitsverhältnis",
          "Leitende Angestellte",
          "Arbeitsvertragsrecht, Arbeitsschutzrecht, Tarifrecht, Mitbestimmung"
        ]
      },
      {
        id: "hr-personalpolitik",
        title: "Unternehmens- und Personalpolitik",
        description: "Strategisches Management, Unternehmenspolitik, Personalpolitik, psychologischer Vertrag und aktuelle personalpolitische Herausforderungen.",
        icon: "🧭",
        legacyKey: "hr-personalpolitik",
        contentKey: "hr-personalpolitik",
        subtopics: [
          "Strategie und strategisches Management",
          "Normative, strategische und operative Ebene",
          "Unternehmenspolitik",
          "Definition und Ziele der Personalpolitik",
          "Ressource Mensch und Mitarbeiterqualifikation",
          "Magisches Dreieck der Personalpolitik",
          "Psychologischer Vertrag",
          "Mitarbeiterfreundliche Personalpolitik",
          "Unternehmenskultur und Corporate Identity",
          "Aktuelle Herausforderungen"
        ]
      },
      {
        id: "hr-ethik-werte-generationen",
        title: "Ethik, Werte und Generationen im HRM",
        description: "Wertewandel, Generationenführung, Arbeitgeberqualität, Ethik, Moral, Unternehmensethik und Führungsethik.",
        icon: "🧩",
        legacyKey: "hr-ethik-werte-generationen",
        contentKey: "hr-ethik-werte-generationen",
        subtopics: [
          "Wertewandel",
          "Generationen und Arbeitshaltung",
          "Führen unterschiedlicher Generationen",
          "Arbeitgeberqualität",
          "Ethik, Moral, Praxis und Tugend",
          "Aristoteles und Kant",
          "Trolley-Problem",
          "Utilitaristische und deontologische Ethik",
          "Unternehmens- und Führungsethik",
          "Ethik, Gesetz und Graubereich"
        ]
      },
      {
        id: "hr-personalplanung",
        title: "Personalplanung",
        description: "Personalstrategie, Personalbedarfsbestimmung, Personalbestandsanalyse, Soll-Ist-Abgleich und Maßnahmen bei Unter- oder Überdeckung.",
        icon: "📊",
        legacyKey: "hr-personalplanung",
        contentKey: "hr-personalplanung",
        subtopics: [
          "Personalstrategie",
          "Sachziel der Personalplanung",
          "Personalbedarfsbestimmung",
          "Ablauf der Personalplanung",
          "Personalbestandsanalyse",
          "Personalbedarfsanalyse",
          "Soll-Ist-Abgleich",
          "Quantitative Berechnung",
          "Bestandsprognose und Mitarbeiterjahre",
          "Maßnahmen bei Unterdeckung und Überdeckung"
        ]
      },
      {
        id: "hr-personalgewinnung-entwicklung",
        title: "Personalgewinnung, Entwicklung und Karrierewege",
        description: "Personalgewinnungsplanung, Kompetenzprofile, Anforderungsprofile, Funktionsmatrix, Stellenbeschreibung, Personalbesetzung und Arbeitsmarktforschung.",
        icon: "🎯",
        legacyKey: "hr-personalgewinnung-entwicklung",
        contentKey: "hr-personalgewinnung-entwicklung",
        subtopics: [
          "Personalgewinnungsplanung",
          "Planung offener Positionen",
          "Fach-, Persönlichkeits-, Methoden- und Sozialkompetenz",
          "Anforderungs- und Kompetenzprofile",
          "Funktionsmatrix",
          "Karrierewege: Linien-, Fach- und Projektmanagement",
          "Stellenbeschreibung",
          "Personalbesetzung",
          "Interne und externe Arbeitsmarktanalyse",
          "Offenes und latentes Beschaffungspotential"
        ]
      }
    ]
  };

  const existingModuleIndex = window.MODULES.findIndex(function (module) {
    return module && module.id === moduleId;
  });

  if (existingModuleIndex >= 0) {
    window.MODULES[existingModuleIndex] = hrModule;
  } else {
    window.MODULES.push(hrModule);
  }

  const hrContent = {
    "hr-grundlagen": `
      <article class="study-note">
        <header class="content-header">
          <p class="kicker">Human Resources</p>
          <h1>Grundlagen des Human Resource Management</h1>
          <p class="lead">
            Dieses Kapitel bildet die begriffliche und systematische Grundlage des Moduls. Es erklärt,
            was Human Resource Management ist, welche Ziele es verfolgt, welche Aufgaben es erfüllt
            und welche externen sowie internen Einflussfaktoren die Personalarbeit prägen.
          </p>
        </header>

        <section>
          <h2>1. Human Resource Management und Organisation</h2>
          <p>
            Unter einer Organisation wird eine Institution verstanden, in der eine abgegrenzte Gruppe
            von Personen ein auf Dauer angelegtes Regelsystem planvoll geschaffen hat, um gemeinsam
            Ziele zu verfolgen. Zusätzlich kann in Organisationen auch Ordnung von selbst entstehen.
          </p>
          <p>
            Human Resource Management ist der Bereich der Betriebswirtschaft, der sich mit dem
            Produktionsfaktor Arbeit beziehungsweise mit dem Personal auseinandersetzt. HRM zielt
            auf nachhaltigen Erfolg, langfristige Werterhaltung und Wertschöpfung. Es beschreibt
            zielorientierte Maßnahmen und Ressourcenplanung zum Erreichen von Unternehmenszielen.
            Die konkrete Ausgestaltung erfolgt in jedem Unternehmen individuell.
          </p>
        </section>

        <section>
          <h2>2. Zentrale Begriffe</h2>
          <div class="definition-grid">
            <div>
              <h3>Personal</h3>
              <p>
                Personal bezeichnet die Gesamtheit der abhängig beschäftigten Arbeitnehmer eines
                Unternehmens. Dazu zählen auch leitende Angestellte. Der Begriff ist weitgehend
                gleichbedeutend mit Belegschaft.
              </p>
            </div>
            <div>
              <h3>Personalmanagement</h3>
              <p>
                Personalmanagement umfasst den gesamten Aufgabenbereich, der sich mit personellen
                Fragen im Unternehmen befasst. Dazu gehören Systemgestaltung, Führungstätigkeiten
                und Verhaltenssteuerung.
              </p>
            </div>
            <div>
              <h3>Personalmarketing</h3>
              <p>
                Personalmarketing betrachtet das Personal aus personalmarktbezogener Perspektive.
                Die Personalbeschaffung hat hierbei eine besonders dominante Bedeutung.
              </p>
            </div>
            <div>
              <h3>Personalpolitik</h3>
              <p>
                Personalpolitik schafft den Gestaltungsrahmen für die Ziele der Personalwirtschaft.
                Sie richtet sich nach der Unternehmenspolitik und umfasst die Durchsetzung
                personalwirtschaftlicher Leitlinien.
              </p>
            </div>
            <div>
              <h3>Personalorganisation</h3>
              <p>
                Personalorganisation betrachtet Mitarbeiter als Teil der Unternehmensstruktur,
                insbesondere mit Blick auf Quantität, Qualifikation und Einsatz.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>3. Ziele des HRM</h2>
          <h3>Wirtschaftliche Ziele</h3>
          <p>
            Ausgangspunkt der wirtschaftlichen Ziele ist die Versorgung des Unternehmens mit
            bestgeeigneten Mitarbeitern unter Berücksichtigung des ökonomischen Prinzips.
          </p>
          <ul>
            <li>optimaler Einsatz des Elementarfaktors menschliche Arbeit,</li>
            <li>bestmögliche Kombination menschlicher Arbeit mit übrigen Einsatzfaktoren,</li>
            <li>Minimierung der Kostensumme aller Einsatzfaktoren,</li>
            <li>Steuerung menschlicher Arbeitsleistung,</li>
            <li>Nutzung von Kreativität und Erfahrung der Mitarbeiter zur Aufgabenerledigung.</li>
          </ul>

          <h3>Soziale Ziele</h3>
          <p>
            Soziales Hauptziel ist die bestmögliche Gestaltung der Arbeitsumstände für Mitarbeiter.
            Daraus ergeben sich Ziele in Bereichen wie Arbeitsphysiologie, Arbeitsplatzgestaltung,
            Arbeitsschutz, Arbeitszeitgestaltung, Entlohnung, Ergonomie, Führung,
            Mitarbeiterentwicklung und Mitarbeitermitbestimmung.
          </p>

          <h3>Individuelle Ziele</h3>
          <p>
            Individuelle Ziele decken sich teilweise mit sozialen Zielen. Sie entstehen aus dem Wunsch
            nach Erfüllung individueller Bedürfnisse, gesichertem Einkommen, Entfaltung der eigenen
            Persönlichkeit durch befriedigende Berufsarbeit sowie sozialer Geltung und Kooperation.
          </p>
        </section>

        <section>
          <h2>4. Hauptaufgabe des HRM</h2>
          <p>
            Hauptaufgabe des Human Resource Managements ist es, das erforderliche Personal in allen
            Unternehmensbereichen, in erforderlicher Zahl, mit fachlicher, menschlicher und
            gesundheitlicher Eignung, termingerecht und am rechten Ort zur Verfügung zu stellen,
            einzusetzen und zu erhalten.
          </p>
          <div class="exam-box">
            <strong>Prüfungslogik:</strong>
            HRM ist nicht nur Verwaltung von Beschäftigten. Es verbindet Unternehmensziele
            mit Mitarbeiterbedürfnissen. Deshalb muss HRM gleichzeitig unternehmensgemäß
            und mitarbeitergemäß handeln.
          </div>
        </section>

        <section>
          <h2>5. Einordnung des Personalwesens</h2>
          <p>
            Die Eingliederung des Personalwesens in die Unternehmenshierarchie hängt von mehreren
            Faktoren ab: Unternehmensgröße, Produktions- oder Leistungsgegenstand, organisatorische
            Grundstruktur und Zahl der Hierarchiestufen. In kleineren Unternehmen übernimmt häufig
            die oberste Führungsebene personalwirtschaftliche Funktionen selbst. In größeren
            Unternehmen können einzelne Funktionen, etwa Lohn- und Gehaltsbuchhaltung, ausgelagert
            werden. Dies wird als Outsourcing bezeichnet.
          </p>
          <p>
            Die Beispiele Hilti und Deutsche Bahn zeigen organisatorische Einordnungen des HRM.
            Die Detailgrafiken sind im Skript teilweise bildhaft dargestellt; einzelne Details sind
            im Skript nicht vollständig extrahierbar.
          </p>
        </section>

        <section>
          <h2>6. Einflussfaktoren auf HRM</h2>
          <h3>Werte</h3>
          <p>
            Werte sind kognitive Präferenzstrukturen. Sie wirken als Entscheidungsregeln und steuern
            Verhalten. Der Wertewandel reicht von der stillen Generation bis zur Generation Z.
            Jede Generation verfügt über ein eigenes Wertesystem. Zudem hat sich das Verhältnis
            von Arbeitszeit und Freizeit verschoben: 1950 dominierte die Arbeitszeit, 1970 holte
            die Freizeit auf, 1990 überholte die Freizeit die Arbeitszeit.
          </p>

          <h3>Technologie und Digitalisierung</h3>
          <ul>
            <li>Strukturwandel zur Informations- und Dienstleistungsgesellschaft,</li>
            <li>nachhaltige Arbeitslosigkeit in industriellen Berufssparten,</li>
            <li>neue fächerübergreifende Berufsbilder,</li>
            <li>Verschwinden alter Berufe,</li>
            <li>Innovationskraft der Mitarbeiter als Existenzfaktor,</li>
            <li>Schwinden räumlicher und zeitlicher Distanz durch IT und Netzwerke,</li>
            <li>Bedarf an flexiblen, wissensorientierten und kommunikationsversierten Mitarbeitertypen.</li>
          </ul>

          <h3>Markt</h3>
          <ul>
            <li>Bevölkerungsabnahme,</li>
            <li>Alterung der Gesellschaften,</li>
            <li>sinkenende Mitarbeiterrekrutierungspotenziale,</li>
            <li>Zunahme älterer Mitarbeiter,</li>
            <li>Anpassungsbedarf bei Arbeitsorganisation und Arbeitsumfeld,</li>
            <li>verlängerte Lebensarbeitszeit,</li>
            <li>Mangel an Nachwuchskräften und War for Talents.</li>
          </ul>

          <h3>Globalisierung</h3>
          <ul>
            <li>grenzenlose Unternehmung und virtuelle Organisation,</li>
            <li>Wegfall hierarchischer Ebenen,</li>
            <li>Qualifikationssteigerung des Humankapitals,</li>
            <li>stärkere Abstimmung zwischen Wissenschaft und Praxis,</li>
            <li>neue Beschäftigungsverhältnisse,</li>
            <li>globale Entsendungen und Reintegration,</li>
            <li>Reisezeiten- und Reisekostenmanagement,</li>
            <li>interkulturelles Management und Sprachkompetenzen,</li>
            <li>Standortverlagerungen und Economies of Scale.</li>
          </ul>
        </section>

        <section>
          <h2>7. Spannungsfelder im HRM</h2>
          <p>
            HRM bewegt sich zwischen unternehmensexternen und unternehmensinternen Einflüssen.
            Externe Einflüsse umfassen politische, gesetzliche, technologische und gesellschaftliche
            Faktoren. Interne Einflüsse umfassen Strategie, Marktsituation, Ertragslage, Kultur und
            Arbeitsbedingungen.
          </p>
          <p>
            Ein zentrales Spannungsfeld besteht zwischen wirtschaftlichem und humanitärem Zielbereich.
            Zwischen diesen Bereichen können konfliktäre, neutrale oder harmonische Beziehungen bestehen.
            Wirtschaftlich erfolgreiche Unternehmen können humanitäre Ziele besser erfüllen. Gleichzeitig
            besteht die Gefahr der Übersteuerung: zu viel Humanorientierung kann Produktivität schwächen,
            zu starke Gewinnorientierung kann humane Arbeitsbedingungen gefährden.
          </p>
          <p>
            Menschen sind in Organisationen nicht nur Objekte, sondern Subjekte mit eigenen Zielen.
            Daraus entsteht Regelungsbedarf zwischen Individuen und Organisation.
          </p>
        </section>

        <section>
          <h2>8. Interdisziplinäre Schnittmenge</h2>
          <ul>
            <li><strong>Soziologie:</strong> soziales Handeln von Menschen in Gruppen und Institutionen.</li>
            <li><strong>Psychologie:</strong> individuelles Verhalten, Persönlichkeitsstrukturen, Erleben im Betrieb.</li>
            <li><strong>Pädagogik:</strong> Bildungsprozesse, Aus- und Weiterbildungsmöglichkeiten und -grenzen.</li>
            <li><strong>Arbeitsphysiologie:</strong> Funktionen des menschlichen Körpers bei der Arbeit.</li>
            <li><strong>Informatik:</strong> elektronische Unterstützung personalwirtschaftlicher Prozesse.</li>
            <li><strong>Medizin:</strong> Prävention, Therapie, Rehabilitation, Arbeitsmedizin.</li>
            <li><strong>Rechtswissenschaften:</strong> gesetzlicher Rahmen für Arbeitsverhältnisse und Personalentscheidungen.</li>
          </ul>
        </section>
      </article>
    `,

    "hr-arbeitsrecht": `
      <article class="study-note">
        <header class="content-header">
          <p class="kicker">Human Resources</p>
          <h1>Arbeitsrechtliche Grundlagen</h1>
          <p class="lead">
            Dieses Kapitel ordnet die arbeitsrechtlichen Basisbegriffe ein. Im Zentrum stehen
            Arbeitsvertrag, Arbeitgeber, Arbeitnehmer, Arbeitsverhältnis, Pflichten der Vertragsparteien
            und die Sonderstellung leitender Angestellter.
          </p>
        </header>

        <section>
          <h2>1. Individuelles Arbeitsrecht</h2>
          <p>
            Das individuelle Arbeitsrecht befasst sich mit den Beziehungen zwischen einzelnen
            Arbeitgebern und Arbeitnehmern. Ausgangspunkt des Arbeitsrechts ist der Arbeitsvertrag.
            Aus dem Arbeitsvertrag ergeben sich Pflichten für beide Seiten.
          </p>
        </section>

        <section>
          <h2>2. Pflichten aus dem Arbeitsvertrag</h2>
          <div class="comparison-grid">
            <div>
              <h3>Pflichten des Arbeitgebers</h3>
              <ul>
                <li>Entgeltzahlungspflicht,</li>
                <li>Fürsorgepflicht,</li>
                <li>Zeugnisausstellungspflicht,</li>
                <li>Urlaubsgewährungspflicht.</li>
              </ul>
            </div>
            <div>
              <h3>Pflichten des Arbeitnehmers</h3>
              <ul>
                <li>Arbeitspflicht,</li>
                <li>Gehorsamspflicht,</li>
                <li>Haftungspflicht,</li>
                <li>Treuepflicht.</li>
              </ul>
            </div>
          </div>
          <div class="exam-box">
            <strong>Prüfungspunkt:</strong>
            Die Pflichten lassen sich gut als Gegenüberstellung lernen. Der Arbeitgeber schuldet
            insbesondere Entgelt, Fürsorge, Zeugnis und Urlaub; der Arbeitnehmer schuldet insbesondere
            Arbeit, Gehorsam, Haftung und Treue.
          </div>
        </section>

        <section>
          <h2>3. Personalbegriff</h2>
          <p>
            Personal ist die Gesamtheit aller in abhängiger Stellung arbeitenden Menschen eines
            Unternehmens, die innerhalb einer institutionell abgesicherten Ordnung eine Arbeitsleistung
            gegen Entgelt erbringen. Andere Bezeichnungen sind Belegschaft, Beschäftigte oder
            Mitarbeiterinnen und Mitarbeiter.
          </p>
          <p>
            Wer aus Unternehmenssicht als Mitarbeiter eingestuft wird, ist betriebsindividuell.
            Für manche Zwecke zählen Unternehmen beispielsweise Auszubildende oder Praktikanten
            nicht zum produktiven Personal, obwohl dies arbeitsrechtlich relevant sein kann.
          </p>
          <ul>
            <li><strong>Köpfe:</strong> Anzahl der Mitarbeiter ohne Berücksichtigung von Teilzeitfaktoren.</li>
            <li><strong>Kapazitäten:</strong> Anzahl der Full-Time-Equivalent-Mitarbeiter.</li>
          </ul>
          <p>
            Die grafische Darstellung unterscheidet Arbeitnehmer, Leiharbeiter, freie Mitarbeiter,
            arbeitnehmerähnliche Personen, Heimarbeiter, Handelsvertreter, Arbeiter, Angestellte,
            leitende Angestellte, Auszubildende, Praktikanten und Werkstudenten.
          </p>
        </section>

        <section>
          <h2>4. Arbeitgeber</h2>
          <p>
            Arbeitgeber im arbeitsrechtlichen Sinne ist jeder, der einen anderen als Arbeitnehmer
            beschäftigt. Arbeitgeber können natürliche oder juristische Personen sowie Privatpersonen
            oder Personen des öffentlichen Rechts sein.
          </p>
          <p>
            Arbeitgeber ist derjenige, dem die Verfügung über die Arbeitskraft, ihre Einstellung,
            Verwendung und Entlassung zusteht. Er bestimmt Art, Ort, Zeit und Weise der Arbeit,
            zahlt Lohn auf eigene Rechnung und erhält den Erfolg der Arbeit. Der Arbeitgeberbegriff
            ist im Arbeits-, Steuer- und Sozialversicherungsrecht weitgehend identisch.
          </p>
        </section>

        <section>
          <h2>5. Arbeitnehmer und Arbeitsverhältnis</h2>
          <p>
            Arbeitnehmer im arbeitsrechtlichen Sinne sind Personen, die aufgrund eines privatrechtlichen
            Vertrags im Dienst eines anderen zur Arbeit verpflichtet sind. Wesentliches Merkmal ist
            die persönliche Abhängigkeit. Auch ein Werkstudent, der nur in den Ferien arbeitet, ist
            ein Arbeitnehmer.
          </p>
          <p>
            Maßgebend für das Bestehen eines Arbeitsverhältnisses sind:
          </p>
          <ul>
            <li>Grad der persönlichen Abhängigkeit,</li>
            <li>Umfang der Weisungsgebundenheit bezüglich Zeit, Dauer und Ort der Ausführung,</li>
            <li>Eingliederung in den Betrieb des Auftraggebers,</li>
            <li>Notwendigkeit enger Zusammenarbeit mit anderen Beschäftigten,</li>
            <li>Unterordnung unter andere Betriebsmitglieder.</li>
          </ul>
          <p>
            Keine Arbeitnehmer sind unter anderem Beamte im beamtenrechtlichen Sinne, bestimmte
            Familienangehörige ohne Arbeitsvertrag, unfreie Arbeiter, Personen mit überwiegend
            karitativer oder religiöser Tätigkeit sowie gesetzliche Vertreter juristischer Personen.
          </p>
        </section>

        <section>
          <h2>6. Leitende Angestellte</h2>
          <p>
            Leitende Angestellte haben eine arbeitsrechtliche Sonderstellung. Sie sind einerseits
            Arbeitnehmer, nehmen andererseits Arbeitgeberfunktionen wahr. Dadurch stehen sie der
            Unternehmens- oder Betriebsleitung besonders nahe. Sie treffen gesteigerte Leistungs-,
            Treue- und Rücksichtnahmepflichten.
          </p>
          <p>
            Die Abgrenzung leitender Angestellter ist vor allem betriebsverfassungsrechtlich relevant.
            Der Betriebsrat ist für leitende Angestellte im Sinne des § 5 Abs. 3 BetrVG nicht zuständig.
            Sie unterfallen nicht den Betriebsvereinbarungen, die Arbeitgeber und Betriebsrat schließen.
          </p>
          <h3>Kriterien nach § 5 Abs. 3 BetrVG</h3>
          <ul>
            <li>Berechtigung zur selbständigen Einstellung und Entlassung von Arbeitnehmern,</li>
            <li>Generalvollmacht oder Prokura, sofern die Prokura im Verhältnis zum Arbeitgeber nicht unbedeutend ist,</li>
            <li>regelmäßige Wahrnehmung sonstiger Aufgaben von Bedeutung für Bestand und Entwicklung des Unternehmens oder Betriebs.</li>
          </ul>
          <p>
            Leitende Angestellte sind weder wahlberechtigt noch zum Betriebsrat wählbar. Die Wahrung
            der Arbeitgeberinteressen geht weiter als bei anderen Arbeitnehmern. Das Maß der Arbeitsleistung
            geht über das Übliche hinaus, und aufgrund des Vertrauensverhältnisses können niedrigere
            Anforderungen an Kündigungsgründe bestehen.
          </p>
        </section>

        <section>
          <h2>7. Arbeitsrechtliche Teilbereiche</h2>
          <div class="definition-grid">
            <div>
              <h3>Arbeitsvertragsrecht</h3>
              <p>
                Regelt Zustandekommen des Arbeitsverhältnisses, Pflichten von Arbeitgeber und Arbeitnehmer,
                Störungen im Arbeitsverhältnis sowie Beendigung und Kündigung.
              </p>
            </div>
            <div>
              <h3>Arbeitsschutzrecht</h3>
              <p>
                Dient dem Schutz des Arbeitnehmers als schwächerer Vertragspartei. Es umfasst Schutz vor
                Gefahren, Unfallschutz, Kündigungsschutzaspekte und Schutz besonders gefährdeter Gruppen.
              </p>
            </div>
            <div>
              <h3>Tarifvertragsrecht</h3>
              <p>
                Bildet die Grundlage für Tarifverträge und Arbeitskampfmaßnahmen. Tarifverträge sind
                schriftliche Vereinbarungen zwischen Arbeitgebervereinigungen und Arbeitnehmervereinigungen.
              </p>
            </div>
            <div>
              <h3>Mitbestimmungsrecht</h3>
              <p>
                Regelt Einflussmöglichkeiten von Arbeitnehmerinteressenvertretungen, insbesondere des
                Betriebsrats, bei betrieblichen Entscheidungen.
              </p>
            </div>
          </div>
        </section>
      </article>
    `,

    "hr-personalpolitik": `
      <article class="study-note">
        <header class="content-header">
          <p class="kicker">Human Resources</p>
          <h1>Unternehmens- und Personalpolitik</h1>
          <p class="lead">
            Dieses Kapitel erklärt, wie Personalpolitik in Unternehmenspolitik und strategisches
            Management eingebettet ist. Es verbindet langfristige Orientierung, Werte, Personalpolitik,
            Unternehmenskultur und aktuelle Herausforderungen.
          </p>
        </header>

        <section>
          <h2>1. Strategie: Wozu?</h2>
          <p>
            Strategie dient dazu, eine einheitliche Orientierung zu geben, Ressourcen und Aktivitäten
            im Unternehmen zu koordinieren, ein gemeinsames Verständnis aufzubauen, sich mit der Zukunft
            auseinanderzusetzen, verbindliche Ziele zu setzen, Zielerreichung zu überprüfen und aus
            Entscheidungen zu lernen.
          </p>
          <div class="quote-box">
            „Von Abweichungen vom Plan kann man lernen, vom Zufall nicht.“
          </div>
        </section>

        <section>
          <h2>2. Strategisches Management</h2>
          <p>
            Strategisch sind Aufgaben, die von besonderer Erfolgsbedeutung sind. Die strategische
            Führung unterscheidet sich von der operativen Führung durch Zeitbezug und Komplexität.
          </p>
          <table>
            <thead>
              <tr>
                <th>Ebene</th>
                <th>Zeithorizont</th>
                <th>Leitidee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Normative Führung</td>
                <td>mehr als 5 Jahre</td>
                <td>Sinngebende, werterhaltende Dinge tun.</td>
              </tr>
              <tr>
                <td>Strategische Führung</td>
                <td>2 bis 5 Jahre</td>
                <td>Die richtigen Dinge tun. Effektivität.</td>
              </tr>
              <tr>
                <td>Operative Führung</td>
                <td>bis 1 Jahr, taktisch bis 2 Jahre</td>
                <td>Die Dinge richtig tun. Effizienz.</td>
              </tr>
            </tbody>
          </table>
          <p>
            In der Praxis lassen sich diese Ebenen nicht exakt trennen. Unternehmensführung enthält
            immer normative, strategische und operative Bestandteile. Strategische Entscheidungen wirken
            erst, wenn sie umgesetzt werden. Operatives Handeln ohne strategische Grundlage führt zur
            Verzettelung der Kräfte.
          </p>
        </section>

        <section>
          <h2>3. Unternehmenspolitik</h2>
          <p>
            Unternehmenspolitik hat die Aufgabe, externe zweckbestimmende Interessen am Unternehmen
            mit intern verfolgten Zielen zu harmonisieren. Diese Harmonisierung soll dem Unternehmen
            tragfähige Wert- und Verhaltensleitlinien vermitteln, die Anpassung an Umweltherausforderungen
            ermöglichen und langfristig Autonomie sowie Wirtschaftskraft erhalten.
          </p>
          <p>
            Teilbereiche der Unternehmenspolitik sind unter anderem Steuerpolitik, Personalpolitik,
            Beschaffungspolitik, Absatzpolitik, Produktionspolitik und Finanzpolitik.
          </p>
        </section>

        <section>
          <h2>4. Personalpolitik: Definition und Ziele</h2>
          <p>
            Personalpolitik umfasst alle Grundsätze und Entscheidungen, die sich auf die wechselseitigen
            Beziehungen zwischen Vorgesetzten und Mitarbeitern, zwischen Mitarbeitern untereinander sowie
            zwischen Mitarbeitern und ihrer Arbeit beziehen.
          </p>
          <h3>Ziele der Personalpolitik</h3>
          <ul>
            <li>Ansprache und Auswahl der bestmöglich für Unternehmenszwecke geeigneten Mitarbeiter,</li>
            <li>Erhaltung und Steigerung von Leistungsbereitschaft und Leistungsfähigkeit,</li>
            <li>zielgerichtete und am Unternehmensleitbild orientierte Führung,</li>
            <li>Schaffung einer sozialverantwortlichen Unternehmenskultur.</li>
          </ul>
          <div class="exam-box">
            <strong>Kernlogik:</strong>
            Personalpolitik übersetzt Unternehmenspolitik in Leitlinien für den Umgang mit Menschen
            im Unternehmen.
          </div>
        </section>

        <section>
          <h2>5. Ressource Mensch und Qualifikation</h2>
          <p>
            Kreative und innovative Kräfte zählen zu den knappsten Ressourcen. Mitarbeiterqualifikation
            wird als nachhaltiger Wettbewerbsvorteil verstanden. Im Skript wird dies grafisch mit einer
            langfristig steigenden Bedeutung der Mitarbeiterqualifikation für die Umsetzung einer Strategie
            gezeigt. Einzelne Details der Grafik sind im Skript bildlich dargestellt; der Grundzusammenhang
            ist jedoch klar: Qualifikation ist langfristig schwer imitierbar und strategisch bedeutsam.
          </p>
        </section>

        <section>
          <h2>6. Magisches Dreieck der Personalpolitik</h2>
          <p>
            Das magische Dreieck der lebensphasenorientierten Personalpolitik besteht aus drei zentralen
            Feldern:
          </p>
          <ul>
            <li><strong>Beschäftigungsfähigkeit:</strong> steigende Bedeutung von Wissen und Kompetenz sowie zunehmender Bedarf an Fachkräften.</li>
            <li><strong>Demografie-Orientierung:</strong> Verschiebung der Altersstruktur und Verlängerung der Arbeitszeit.</li>
            <li><strong>Work-Life-Balance:</strong> Vereinbarkeit von Beruf, Freizeit und Familie.</li>
          </ul>
          <p>
            Im Skript wird ergänzend eine Verbindung zu Führung hergestellt: Identifikation und Motivation,
            Gesundheit und Wohlbefinden, Qualifikation und Kompetenzen sowie Glaubwürdigkeit, Verlässlichkeit
            und Beweglichkeit sind zentrale Bezugsgrößen.
          </p>
        </section>

        <section>
          <h2>7. Psychologischer Vertrag</h2>
          <p>
            Bei gut qualifizierten Kräften entsteht neben dem formalen Vertrag zwischen Unternehmen und
            Beschäftigten ein ungeschriebener psychologischer Vertrag. Er basiert auf einem Geben und Nehmen
            beider Seiten und führt zu einer Partnerschaft auf Augenhöhe über den Erwerbslebenszyklus hinweg.
            Persönliche Ziele und Wertvorstellungen haben dabei einen sehr hohen Stellenwert.
          </p>
        </section>

        <section>
          <h2>8. Mitarbeiterfreundliche Personalpolitik</h2>
          <p>
            Eine mitarbeiterfreundliche Personalpolitik zeigt sich in mehreren Bereichen:
          </p>
          <ul>
            <li><strong>Führungskommunikation:</strong> Führungsleitlinien und Grundsatz der offenen Vorgesetzten-Tür.</li>
            <li><strong>Mitarbeiterentwicklung:</strong> Richtlinien zur Förderung, Laufbahnplanung, Nachwuchsentwicklung und interne Aufstiegsbesetzung.</li>
            <li><strong>Mitarbeiterbeteiligung:</strong> vertrauensvolle Zusammenarbeit mit dem Betriebsrat, Mitarbeiterbeurteilung, repräsentative Meinungsermittlung.</li>
            <li><strong>Mitarbeiterauswahl:</strong> Berücksichtigung behinderter Bewerber, Förderung von Frauen in höhergradigen Positionen und Diversity.</li>
          </ul>
        </section>

        <section>
          <h2>9. Unternehmenskultur und Corporate Identity</h2>
          <p>
            Unternehmenskultur bezeichnet die von den Unternehmensmitgliedern verinnerlichten und vertretenen
            Werte und Normen, an denen sich Individuen in ihrem Verhalten orientieren. Zur Schaffung einer
            positiven Unternehmensidentität können Maßnahmen der Corporate Identity eingesetzt werden:
          </p>
          <ul>
            <li>Corporate Communications,</li>
            <li>Corporate Design,</li>
            <li>Corporate Behavior.</li>
          </ul>
        </section>

        <section>
          <h2>10. Aktuelle Herausforderungen</h2>
          <ul>
            <li><strong>Familienorientierung:</strong> Arbeitszeitflexibilität, neue Karrieremodelle, Familienunterstützung durch Serviceleistungen, Weiterbildung.</li>
            <li><strong>Demografie:</strong> angepasste Weiterbildungsmaßnahmen, neue Modelle der Arbeitsorganisation, Arbeitszeitmodelle und fließender Übergang in den Ruhestand.</li>
            <li><strong>Social Responsibility:</strong> CSR-Maßnahmen und Schaffung eines kooperativen Betriebsklimas.</li>
          </ul>
        </section>
      </article>
    `,

    "hr-ethik-werte-generationen": `
      <article class="study-note">
        <header class="content-header">
          <p class="kicker">Human Resources</p>
          <h1>Ethik, Werte und Generationen im HRM</h1>
          <p class="lead">
            Dieses Kapitel verbindet Wertewandel, Generationenführung, Arbeitgeberqualität und
            Unternehmensethik. Es zeigt, dass HRM nicht nur rechtlich und wirtschaftlich, sondern auch
            moralisch und gesellschaftlich eingebettet ist.
          </p>
        </header>

        <section>
          <h2>1. Werte und Wertewandel</h2>
          <p>
            Werte sind kognitive Präferenzstrukturen, die als Entscheidungsregeln fungieren und Verhalten
            steuern. Im HRM ist der Wertewandel relevant, weil unterschiedliche Generationen eigene
            Wertesysteme besitzen und andere Erwartungen an Arbeit, Führung, Feedback und Entwicklung haben.
          </p>
          <p>
            Im Skript wird außerdem die Verschiebung zwischen Arbeitszeit und Freizeit betont: 1950 dominierte
            die Arbeitszeit, 1970 holte die Freizeit auf, 1990 überholte die Freizeit die Arbeitszeit.
          </p>
        </section>

        <section>
          <h2>2. Generationen im Arbeitskontext</h2>
          <p>
            Die Skripte zeigen Generationen wie Baby Boomer, Generation X, Generation Y, Generation Z und
            Generation Alpha beziehungsweise zukünftige Nachwuchsgenerationen. Die zeitliche Einordnung und
            Attributtabellen sind teilweise grafisch dargestellt; einzelne Details sind im Skript nicht vollständig
            extrahierbar.
          </p>
          <div class="warning-box">
            <strong>Im Skript unklar / nicht vollständig extrahierbar:</strong>
            Die Tabelle „Werte und Arbeitshaltung – Generation Attribute“ enthält viele kleinteilige
            Zuordnungen. Für die App sollte der Fokus auf den sicher extrahierten Grundgedanken gelegt werden:
            Generationen unterscheiden sich in Erwartungen, Arbeitshaltung, Kommunikation und bevorzugten Medien.
          </div>
        </section>

        <section>
          <h2>3. Führung unterschiedlicher Generationen</h2>
          <p>
            Das Skript nennt sechs zentrale Ansätze zur Führung unterschiedlicher Generationen:
          </p>
          <ol>
            <li>Schaffung einer Führungs- und Organisationskultur, die auf Verständnis und Wertschätzung beruht.</li>
            <li>Verstehen und Ernstnehmen der Erwartungen, Bedürfnisse und Wünsche jeder Generation.</li>
            <li>Schaffung einer offenen und transparenten Feedback-Kultur.</li>
            <li>Angebot individueller Karriere-, Weiterbildungs- und Entwicklungsmöglichkeiten einschließlich Gesundheitsmanagement.</li>
            <li>Förderung digitalen Umdenkens und Einbindung aller Generationen.</li>
            <li>Bildung intergenerativer Teams sowie Einführung flexibler Arbeitszeiten, Arbeitseinteilung und Arbeitsbedingungen.</li>
          </ol>
          <p>
            Das Ziel generationengerechter Führung besteht darin, die unterschiedlichen Stärken der Generationen
            nutzbar zu machen und dadurch Innovationsgeist sowie langfristige Leistungsbereitschaft zu fördern.
          </p>
        </section>

        <section>
          <h2>4. Arbeitgeberqualität</h2>
          <p>
            Arbeitgeberqualität wird im Skript anhand verschiedener Facetten der Arbeitszufriedenheit erklärt.
            Sie ermöglicht den Vergleich von Unternehmen anhand interner Sichtweisen der Arbeitnehmer und bildet
            eine Achse der Employer Matrix.
          </p>
          <h3>Parameter der Arbeitgeberqualität</h3>
          <ul>
            <li><strong>Aufgabenstellung:</strong> Autonomie, interessante Aufgaben, empfundener Mehrwert.</li>
            <li><strong>Lernen:</strong> Lernpotenzial und Weiterentwicklungsmöglichkeiten.</li>
            <li><strong>Arbeitsbedingungen:</strong> Work-Life-Balance und Arbeitsbelastung.</li>
            <li><strong>Führung:</strong> Zufriedenheit mit Führungskraft oder Fachbetreuung.</li>
            <li><strong>Grundsätzliche Bewertung:</strong> Erwartungserfüllung, erneute Bewerbungsintention, Weiterempfehlung und allgemeine Zufriedenheit.</li>
            <li><strong>Teamklima:</strong> Arbeitsatmosphäre, gegenseitige Unterstützung und Feedback.</li>
            <li><strong>Arbeitszeit:</strong> Angemessenheit der Arbeitszeiten.</li>
            <li><strong>Vergütung:</strong> Angemessenheit der Bezahlung.</li>
          </ul>
          <p>
            In der Branchenübersicht wird ein Durchschnittswert von 4,2 auf einer Skala von 1 = sehr unzufrieden
            bis 5 = sehr zufrieden genannt. Details einzelner Branchenwerte sind im Skript grafisch dargestellt.
          </p>
        </section>

        <section>
          <h2>5. Ethik, Moral, Praxis und Tugend</h2>
          <p>
            Ethik ist die Wissenschaft vom Sittlichen. Sie befasst sich mit menschlichen Handlungen und sucht
            nach grundlegenden Normen für gutes Handeln, die für Menschen gelten sollen. Gegenstand der Ethik
            ist die Moral.
          </p>
          <ul>
            <li><strong>Ethik:</strong> kritische Reflexion gesellschaftlicher Praxis und Moral.</li>
            <li><strong>Moral:</strong> akzeptierte Regeln der Gesellschaft beziehungsweise Wert- und Normengefüge eines Kulturkreises.</li>
            <li><strong>Praxis:</strong> tatsächliches Handeln der Gesellschaftsmitglieder.</li>
            <li><strong>Tugend:</strong> Handeln, das einem Anspruch des Guten verpflichtet ist.</li>
          </ul>
        </section>

        <section>
          <h2>6. Aristoteles, Kant und Dialogethik</h2>
          <h3>Aristoteles</h3>
          <p>
            Aristoteles sieht Ethik gemeinsam mit Politik und Ökonomik als zentrale Säulen der Philosophie.
            Ethik basiert auf einer Verbindung von Glücklichsein, Erfolgreichsein und Gesegnetsein. Menschen
            sollen dies durch ihr Handeln erreichen. Aristoteles setzt die Verfolgung des Glücks vor Politik
            und Ökonomik; daraus folgt ein Primat der Ethik.
          </p>
          <h3>Immanuel Kant</h3>
          <p>
            Kant orientiert sich weniger am Glück des vernünftigen Menschen. Er formuliert den kategorischen
            Imperativ: Handle so, dass die Maxime deines Handelns jederzeit als Teil einer allgemeinen
            Gesetzgebung gelten könnte.
          </p>
          <h3>Dialogethik / Diskursethik</h3>
          <p>
            Aristoteles und Kant setzen voraus, dass Menschen tugendhaft genug sind. Das Skript betont deshalb
            die Bedeutung des Dialogs: Dialogethik beziehungsweise Diskursethik ist ein Verfahren, um aus
            impliziter Ethik explizite Handlungsnormen abzuleiten.
          </p>
        </section>

        <section>
          <h2>7. Trolley-Problem und ethische Theorien</h2>
          <p>
            Am Trolley-Problem werden Unterschiede zwischen utilitaristischen beziehungsweise
            konsequentialistischen und deontologischen Theorien verdeutlicht.
          </p>
          <ul>
            <li><strong>Utilitaristische Ethik:</strong> Eine Handlung ist gut, wenn die Folgen der Handlung nützlich sind.</li>
            <li><strong>Deontologische Ethik:</strong> Der moralische Wert einer Handlung orientiert sich nicht an den Folgen, sondern an Pflicht beziehungsweise dem Erforderlichen.</li>
          </ul>
        </section>

        <section>
          <h2>8. Ethische Einordnung im HRM</h2>
          <p>
            HRM erfordert moralisches Urteilsvermögen. Das Skript nennt dazu folgende Fähigkeiten:
          </p>
          <ul>
            <li>Entwicklung eines moralischen Sinns,</li>
            <li>Gespür für das Gewicht von Problemen,</li>
            <li>Fähigkeit, moralische Konfliktsituationen rechtzeitig und klar zu erkennen,</li>
            <li>Fähigkeit, Handlungsfolgen abzuschätzen,</li>
            <li>Fähigkeit, Probleme aus verschiedenen Gesichtspunkten zu betrachten,</li>
            <li>selbstkritisches Urteilsvermögen.</li>
          </ul>
        </section>

        <section>
          <h2>9. Unternehmens- und Führungsethik</h2>
          <p>
            Unternehmens- beziehungsweise Führungsethik befasst sich mit Zielen, Werten, Normen und Folgen
            des betrieblichen Wirtschaftens. Sie entwickelt Vorschläge für reflektiertes, sachgerechtes,
            menschenbezogenes und gesellschaftsverträgliches Wirtschaften.
          </p>
          <h3>Kernfragen</h3>
          <ul>
            <li>Welche moralischen Wertvorstellungen und Normen sollten Unternehmen erfüllen?</li>
            <li>Welche Verantwortung haben Unternehmen gegenüber Umwelt und Gesellschaft?</li>
            <li>Inwieweit lässt sich Gewinnstreben mit Moral vereinbaren?</li>
          </ul>
          <p>
            Ein ethisches Dilemma liegt vor, wenn Werte im Konflikt stehen, etwa interkulturell oder zwischen
            Organisations- und Stakeholderzielen.
          </p>
        </section>

        <section>
          <h2>10. Ethik und Gesetz</h2>
          <p>
            Moralische Bewertungen hängen stark von Werten ab und können sich zwischen Kulturen unterscheiden.
            Zwischen Ethik und Gesetz besteht ein Graubereich: Nicht alles, was legal ist, ist moralisch richtig.
            Nicht alles, was illegal ist, ist moralisch falsch. In der Unternehmenspraxis werden ethische
            Überlegungen vor allem dort relevant, wo keine gesetzlichen Regelungen bestehen.
          </p>
          <div class="exam-box">
            <strong>Merksatz:</strong>
            Legalität ist die ethische Mindestanforderung, aber nicht automatisch gleichbedeutend mit
            moralischer Richtigkeit.
          </div>
        </section>
      </article>
    `,

    "hr-personalplanung": `
      <article class="study-note">
        <header class="content-header">
          <p class="kicker">Human Resources</p>
          <h1>Personalplanung</h1>
          <p class="lead">
            Personalplanung übersetzt Unternehmensziele in konkrete personelle Anforderungen.
            Sie bestimmt, welches Personal in welcher Anzahl, Qualität, Zeit und an welchem Ort benötigt wird.
          </p>
        </header>

        <section>
          <h2>1. Personalstrategie</h2>
          <p>
            Ein wichtiger Teilaspekt der Personalplanung ist die Personalstrategie. Sie wird aus der
            Unternehmenspolitik abgeleitet und auf personalpolitische Ziele übertragen.
          </p>
          <h3>Leitfragen</h3>
          <ul>
            <li>Wo möchte sich das Unternehmen im Hinblick auf seine Personalarbeit künftig positionieren?</li>
            <li>Wie will das Unternehmen dieses Ziel erreichen?</li>
          </ul>
          <p>
            Strategisches Personalmanagement ist mehr als operative Umsetzung der Produkt- und Programmplanung.
            Bei entsprechender Ausgestaltung kann es eigenständige Impulse in die strategische Unternehmensplanung
            und -führung einbringen.
          </p>
        </section>

        <section>
          <h2>2. Sachziel der Personalplanung</h2>
          <p>
            Personalplanung hat das Sachziel, Personal zur Beseitigung personeller Unterdeckung bereitzustellen.
            Dabei werden vier Dimensionen unterschieden:
          </p>
          <ul>
            <li><strong>Anzahl:</strong> quantitative Dimension,</li>
            <li><strong>Art:</strong> qualitative Dimension,</li>
            <li><strong>Zeitpunkt und Dauer:</strong> zeitliche Dimension,</li>
            <li><strong>Einsatzort:</strong> räumliche Dimension.</li>
          </ul>
          <div class="exam-box">
            <strong>Prüfungsformel:</strong>
            Personalplanung fragt: Wie viele Personen mit welcher Qualifikation werden wann, wie lange und wo benötigt?
          </div>
        </section>

        <section>
          <h2>3. Personalbedarfsbestimmung</h2>
          <p>
            Die Personalbedarfsbestimmung beschäftigt sich mit der Ermittlung des jeweils erforderlichen
            Soll-Personalbestands. Dabei wird differenziert nach unterschiedlichen Perioden des Planungszeitraums
            sowie nach Qualifikationsgruppen beziehungsweise Arbeitsplätzen.
          </p>
          <p>
            Sie nimmt eine zentrale Position im betrieblichen Personalmanagement ein. Die daraus abgeleiteten
            Entscheidungen über Beschaffung oder Freistellung beeinflussen die Zukunftsfähigkeit des Unternehmens.
            Wichtig ist eine zukunftsorientierte Planung statt einer rein vergangenheitsorientierten Fortschreibung.
          </p>
        </section>

        <section>
          <h2>4. Ablauf der Personalplanung</h2>
          <ol>
            <li>
              <strong>Personalbestandsanalyse:</strong>
              Ermittlung der aktuellen Personalausstattung nach Quantität und Qualität.
            </li>
            <li>
              <strong>Personalbedarfsanalyse:</strong>
              Ermittlung des zukünftigen Personalbedarfs nach Quantität und Qualität.
            </li>
            <li>
              <strong>Soll-Ist-Abgleich:</strong>
              Ermittlung des Netto-Bedarfs als Differenz zwischen künftigem Personalbestand und erwartetem Personalbedarf.
            </li>
            <li>
              <strong>Planung der Maßnahmen:</strong>
              Ermittlung geeigneter Maßnahmen zur Beseitigung von Überdeckung oder Unterdeckung.
            </li>
          </ol>
          <p>
            Die Maßnahmenplanung bildet den Übergang zur Gewinnungs-, Entwicklungs- oder Abbauplanung.
          </p>
        </section>

        <section>
          <h2>5. Personalbestandsstatistik</h2>
          <p>
            In regelmäßigen Abständen sollten alle Mitarbeiter, die arbeitsvertraglich an das Unternehmen gebunden
            sind, in eine Bestandsstatistik aufgenommen werden. Dazu zählen auch Personen, die vorübergehend keinem
            produktiven Einsatz zugeordnet werden können, etwa wegen Elternzeit oder längerer Krankheit.
          </p>
          <h3>Quantitative Berechnung</h3>
          <pre><code>Personalausstattung am Jahresanfang
- Abgänge innerhalb des Jahres
+ Zugänge innerhalb des Jahres
= Personalausstattung am Anfang des Folgejahres</code></pre>
          <p>
            Das Beispiel im Skript unterscheidet Zugänge und Abgänge wie Beförderung, Versetzung,
            Rückkehr aus Weiterbildung, Übernahme nach Ausbildung, sichere Einstellungen, Pensionierung,
            Mutterschutz, Entlassung oder Kündigung durch Mitarbeiter.
          </p>
        </section>

        <section>
          <h2>6. Prognose und Bedarfsanalyse</h2>
          <p>
            Der zukünftige Personalbedarf leitet sich zunächst grob aus den Unternehmenszielen ab und muss
            anschließend von jedem Bereich im Detail geplant werden. Dies wird als Personalbestandsprognose
            beziehungsweise Personalbedarfsprognose verstanden.
          </p>
          <p>
            Das Generalproblem der Bedarfsanalyse besteht in der Berücksichtigung qualitativer
            Mitarbeiteranforderungen. Für eine vollständige und aussagekräftige Prognose braucht es eine
            einheitliche Definition. Da es auf verfügbare Personalkapazität ankommt, bietet sich eine Umrechnung
            relevanter Arbeitsverträge in Mitarbeiterjahre an.
          </p>
        </section>

        <section>
          <h2>7. Leitfragen der Personalplanungsanalyse</h2>
          <ul>
            <li>Werden zusätzliche Mitarbeiter zur Unternehmenszielerreichung benötigt?</li>
            <li>Wenn ja, in welchen Bereichen werden diese Ressourcen benötigt?</li>
            <li>Wie viele Mitarbeiter auf welchem Verantwortungslevel werden notwendig?</li>
            <li>Welche Anforderungen werden an diese Mitarbeiter gestellt?</li>
            <li>Müssen bestehende Mitarbeiter ihre Qualifikation steigern?</li>
            <li>Gibt es Bereiche, Funktionen oder Mitarbeiter, die aufgrund der Unternehmensplanung nicht mehr beschäftigt werden können?</li>
          </ul>
        </section>

        <section>
          <h2>8. Unterdeckung und Überdeckung</h2>
          <p>
            Das Ergebnis der Personalbedarfsplanung kann bei Unterdeckung oder Überdeckung zu weiteren Maßnahmen
            führen.
          </p>
          <div class="comparison-grid">
            <div>
              <h3>Unterdeckung</h3>
              <p>
                Es fehlen Mitarbeiter. Nach Abstimmung mit Entscheidungsträgern wie Unternehmensleitung,
                Abteilungsleitung oder Betriebsrat und nach Konkretisierung des quantitativen und qualitativen
                Bedarfs kann zur Beschaffungs- beziehungsweise Gewinnungsplanung übergegangen werden.
              </p>
            </div>
            <div>
              <h3>Überdeckung</h3>
              <p>
                Es sind mehr Mitarbeiter vorhanden als unter den gegebenen Bedingungen benötigt werden.
                Nach Abstimmung und Konkretisierung müssen Maßnahmen entschieden werden, um der Überdeckung
                entgegenzuwirken. Dies führt zur Freistellungsplanung.
              </p>
            </div>
          </div>
          <p>
            Das Soll-Ist-Beispiel im Skript zeigt eine grafische Gegenüberstellung von Ist-Situation und
            Soll-Situation mit Bedarf, Nicht-Bedarf und Unter-/Überdeckung. Einzelne Werte sind im Skript
            nicht vollständig extrahierbar.
          </p>
        </section>
      </article>
    `,

    "hr-personalgewinnung-entwicklung": `
      <article class="study-note">
        <header class="content-header">
          <p class="kicker">Human Resources</p>
          <h1>Personalgewinnung, Entwicklung und Karrierewege</h1>
          <p class="lead">
            Dieses Kapitel verbindet die operative Personalgewinnung mit Kompetenzprofilen, Funktionsmatrix,
            Karrierewegen und arbeitsmarktbezogenem Personalmarketing. Entwicklung und Karrierewege werden
            hier integriert, weil sie in den Skripten eng mit Anforderungsprofilen und Funktionsmatrix verbunden sind.
          </p>
        </header>

        <section>
          <h2>1. Personalgewinnungsplanung</h2>
          <p>
            Die Personalgewinnungsplanung enthält alle wichtigen und notwendigen Informationen für den
            Beschaffungsprozess:
          </p>
          <ul>
            <li>offene Positionen,</li>
            <li>geplanter Besetzungszeitpunkt,</li>
            <li>Planung der Beschaffungswege,</li>
            <li>beteiligte Personen,</li>
            <li>Festlegung der Gehaltsspannen,</li>
            <li>geplante Gewinnungskosten,</li>
            <li>Status des Gewinnungsprozesses.</li>
          </ul>
        </section>

        <section>
          <h2>2. Planung offener Positionen</h2>
          <p>
            Die Planung offener Positionen umfasst die genaue Festlegung, an welcher Stelle im Unternehmen,
            wie viele Mitarbeiter und mit welchen Kompetenzprofilen erforderlich sind. Für jede aufgeführte
            Stelle muss ein aktuelles Anforderungs- oder Kompetenzprofil vorhanden sein oder erstellt werden.
          </p>
          <p>
            Aus der genauen Beschreibung der Anforderungen an Bewerber können die präferierte Auswahl-Zielgruppe
            und der geeignete Beschaffungsweg festgelegt werden.
          </p>
        </section>

        <section>
          <h2>3. Kompetenzarten</h2>
          <table>
            <thead>
              <tr>
                <th>Kompetenzart</th>
                <th>Beispiele aus dem Skript</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fachkompetenz</td>
                <td>Ausbildung, Fachkenntnisse, Berufserfahrung, Projekterfahrung</td>
              </tr>
              <tr>
                <td>Persönlichkeitskompetenz</td>
                <td>Basisantrieb, Energie, analytische Fähigkeiten, Kreativität, Innovationsfähigkeit, Leidenschaft, Stabilität, Moral, Ethik, Integrität</td>
              </tr>
              <tr>
                <td>Methodenkompetenz</td>
                <td>Projektmanagement, Zeitmanagement, Anwendungswissen, Problemlösungskompetenz, Präsentationstechniken, Moderation</td>
              </tr>
              <tr>
                <td>Sozialkompetenz</td>
                <td>Kommunikation, Teamfähigkeit, Konflikt- und Kritikfähigkeit, Motivations- und Überzeugungsfähigkeit, Empathie</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>4. Anforderungs- und Kompetenzprofile</h2>
          <p>
            Anforderungs- und Kompetenzprofile können neu erstellt oder aus vorhandenen Grundlagen wie
            Bereichsentwicklungsplänen oder Stellenbeschreibungen weiterentwickelt werden. In das Profil
            fließen organisatorische Informationen, stellenbezogene Informationen und die Ausprägung des
            persönlichen Kompetenzgefühls ein.
          </p>
          <p>
            Im Anforderungsprofil werden Hauptaufgaben und Verantwortungsbereiche für eine Position festgelegt.
            Außerdem enthält es sämtliche Anforderungen und Wünsche, die ein Unternehmen an Mitarbeiter stellt.
            Es gliedert sich in fachliche und persönliche Anforderungsmerkmale.
          </p>
          <p>
            Im Idealfall wird das Anforderungsprofil auf Grundlage einer vorhandenen Stellenbeschreibung erstellt.
            Bei Bewerbungen werden die vom Unternehmen erstellten Anforderungsprofile mit den individuellen
            Kompetenzprofilen der Bewerber verglichen. Dieser Profilvergleich bildet eine Grundlage der Auswahl.
          </p>
          <div class="warning-box">
            <strong>Im Skript unklar / nicht vollständig extrahierbar:</strong>
            Das Beispiel-Anforderungsprofil ist als grafische Bewertungsmatrix dargestellt. Die Struktur ist erkennbar,
            einzelne Skalenwerte und Details sollten in der App als Beispielgrafik oder als unvollständig extrahiert
            markiert werden.
          </div>
        </section>

        <section>
          <h2>5. Funktionsmatrix</h2>
          <p>
            Die Summe aller Anforderungsprofile eines Unternehmens kann in einer Funktionsmatrix zusammengefasst
            werden. Eine Funktionsmatrix zeigt Entwicklungswege zwischen einzelnen Anforderungsprofilen. Jedes Profil
            gehört zu einer Funktionsfamilie und einem Verantwortungs- beziehungsweise Kompetenzlevel.
          </p>
          <p>
            Funktionsfamilien bilden die Hauptfunktionen der Prozesse eines Unternehmens ab. Mit Hilfe der
            Funktionsmatrix werden verschiedene Karrierewege sichtbar.
          </p>
        </section>

        <section>
          <h2>6. Karrierewege</h2>
          <p>
            Neben der klassischen Führungslaufbahn mit disziplinarischer Mitarbeiterverantwortung sollten je nach
            Unternehmenstyp auch alternative Entwicklungsmöglichkeiten mit gleicher Verantwortungsstufe angeboten
            werden.
          </p>
          <p>
            Neuere Karrieremodelle bieten üblicherweise zwei bis drei alternative Karrierewege:
          </p>
          <ul>
            <li>Linien-Management,</li>
            <li>Fach-Management,</li>
            <li>Projektmanagement.</li>
          </ul>
          <p>
            Die Beispiele „Klassiker“ und „Rheinmetall“ sind im Skript grafisch eingebunden. Die Grundidee ist
            eindeutig: Karriere muss nicht ausschließlich über Personalverantwortung erfolgen; auch Fach- und
            Projektlaufbahnen können vergleichbare Entwicklungswege darstellen.
          </p>
        </section>

        <section>
          <h2>7. Stellenbeschreibung</h2>
          <p>
            Die Stellenbeschreibung ist ein altbewährtes Instrument der Personalplanung und Personalgewinnung.
            Sie verschafft Mitarbeitern einen Überblick über Befugnisse sowie Art und Umfang der Anforderungen
            aus ihrer Tätigkeit. Sie grenzt Tätigkeits- und Verantwortungsbereich verbindlich ab und zeigt die
            Einordnung des Arbeitsplatzes in die betriebliche Organisation.
          </p>
          <p>
            Die Stellenbeschreibung ist zugleich Führungs- und Organisationsinstrument. Sie sollte jedoch kein
            fester Bestandteil des Arbeitsvertrags sein, damit sie jederzeit überarbeitet oder geändert werden kann.
            Sie ergänzt stellenbezogene Kompetenzprofile um weitere diskriminierungsfreie Informationen und wird
            funktionsbezogen, also mitarbeiterunabhängig, erstellt.
          </p>

          <h3>Vorteile</h3>
          <ul>
            <li>klare Abgrenzung von Aufgaben und Kompetenzen,</li>
            <li>festgelegte Vertretung und Vollmachten,</li>
            <li>gute Grundlage für Personalbeschaffung, Personalbeurteilung und Personalentwicklung.</li>
          </ul>

          <h3>Nachteile</h3>
          <ul>
            <li>großer Arbeitsaufwand bei ständiger Aktualisierung,</li>
            <li>starre Aufgabenbestimmung, wodurch Zusatzaufgaben möglicherweise nicht erfüllt werden müssen,</li>
            <li>geringe Flexibilität bei Änderungen.</li>
          </ul>

          <div class="warning-box">
            <strong>Im Skript unklar / nicht vollständig extrahierbar:</strong>
            Die Beispiel-Stellenbeschreibungen „International Sales Manager“ und „Produktmanager/in“ sind als
            Bildseiten enthalten. Die Überschriften sind erkennbar, Detailinhalte aber nicht vollständig extrahierbar.
          </div>
        </section>

        <section>
          <h2>8. Personalbesetzung</h2>
          <p>
            Nach Konkretisierung des Personalbedarfs und der Anforderungen an künftige Positionsinhaber muss
            die Personalbeschaffung geplant und umgesetzt werden. Neben innerbetrieblichen Abstimmungsprozessen
            stehen drei zentrale Überlegungen im Vordergrund:
          </p>
          <ul>
            <li>Beschaffungswege,</li>
            <li>Beschaffungsmedien,</li>
            <li>Auswahlmethoden.</li>
          </ul>
          <p>
            Um aktuelle und künftig möglichst ideale Positionsbesetzungen zu erreichen, müssen alle relevanten
            Fundorte geeigneter Bewerber identifiziert und möglichst dauerhaft beobachtet werden. Diese Analyse
            kann auf dem internen und externen Arbeitsmarkt erfolgen.
          </p>
        </section>

        <section>
          <h2>9. Personalmarketing und Arbeitsmarktforschung</h2>
          <h3>Beschaffungspotentiale</h3>
          <ul>
            <li><strong>Offenes Beschaffungspotential:</strong> Arbeitslose, arbeitsplatzsuchende Beschäftigte, neu Eintretende.</li>
            <li><strong>Latentes Beschaffungspotential:</strong> Abwerben von Arbeitskräften anderer Firmen, Steigerung der Erwerbstätigkeit.</li>
          </ul>

          <h3>Innerbetriebliche Analyse</h3>
          <p>
            Die innerbetriebliche Analyse erforscht Mitarbeiterpotenziale aus Daten der Personalverwaltung,
            Personalplanung und Personalentwicklung. Bewerber können räumlich aus dem eigenen Betrieb, aus
            anderen Betriebsteilen oder aus dem Gesamtunternehmen beziehungsweise Konzern stammen. Inhaltlich
            können sie aus dem gleichen oder einem anderen Tätigkeitsbereich kommen.
          </p>

          <h3>Außerbetriebliche Analyse</h3>
          <p>
            Die außerbetriebliche Analyse betrachtet den allgemeinen und betrieblich relevanten Arbeitsmarkt:
            Umfang und Struktur des Arbeitskräfteangebots, etwa nach Alter und Qualifikation; Umfang und Struktur
            der Arbeitskräftenachfrage, etwa nach Branchen- und Berufsverteilung; sowie die Entwicklung des
            Arbeitsmarkts nach Qualifikationstrends, Branchenentwicklung und Berufsbildentwicklung.
          </p>

          <h3>Abhängigkeiten des Arbeitsmarktes</h3>
          <ul>
            <li>strukturelle Veränderungen,</li>
            <li>konjunkturelle Schwankungen,</li>
            <li>saisonale Schwankungen,</li>
            <li>Bevölkerungsstruktur,</li>
            <li>Beschäftigungsstruktur,</li>
            <li>Staatspolitik: Bildungs-, Sozial- und Wirtschaftspolitik.</li>
          </ul>
        </section>

        <section>
          <h2>10. Warum Entwicklung hier integriert wird</h2>
          <p>
            Entwicklung, Führung und Karrierewege werden in diesem Kapitel integriert, weil die Skripte diese
            Inhalte nicht als vollständig eigenständigen Themenblock behandeln. Sie erscheinen im Zusammenhang
            mit Kompetenzprofilen, Funktionsmatrix, Laufbahnplanung, interner Aufstiegsbesetzung, Karrierewegen
            und generationengerechter Führung.
          </p>
          <p>
            Für die App ist daher die Einordnung als Anschlusslogik sinnvoll: Aus Personalbedarf entstehen
            Anforderungsprofile; aus Profilen entstehen Funktionsmatrix und Karrierewege; daraus ergeben sich
            Entwicklungsmöglichkeiten für bestehende und neue Mitarbeiter.
          </p>
        </section>
      </article>
    `
  };

  Object.keys(hrContent).forEach(function (key) {
    window.FULL_CONTENT[key] = hrContent[key];
  });

  const hrQuestions = [
    {
      id: "hr-q-001",
      topic: "hr-grundlagen",
      type: "mc",
      question: "Welche Aussage beschreibt Human Resource Management im Sinne der Skripte am besten?",
      options: [
        "HRM befasst sich mit dem Produktionsfaktor Arbeit bzw. Personal und verbindet Ressourcenplanung mit Unternehmenszielen.",
        "HRM ist ausschließlich Lohn- und Gehaltsabrechnung.",
        "HRM ist nur für arbeitsrechtliche Kündigungen zuständig.",
        "HRM ersetzt die Unternehmensstrategie vollständig."
      ],
      correct: 0,
      explanation: "HRM wird als BWL-Bereich verstanden, der sich mit Personal, nachhaltigem Erfolg und zielorientierter Ressourcenplanung befasst."
    },
    {
      id: "hr-q-002",
      topic: "hr-grundlagen",
      type: "mc",
      question: "Welche Zielgruppe gehört zu den sozialen Zielen des HRM?",
      options: [
        "Arbeitsphysiologie, Arbeitsplatzgestaltung, Arbeitsschutz, Arbeitszeitgestaltung, Entlohnung, Ergonomie, Führung und Mitarbeiterentwicklung",
        "Nur Gewinnmaximierung und Kapitalkostenminimierung",
        "Nur Marketing, Absatz und Produktion",
        "Nur Aktienkursentwicklung"
      ],
      correct: 0,
      explanation: "Die sozialen Ziele beziehen sich auf die bestmögliche Gestaltung der Arbeitsumstände."
    },
    {
      id: "hr-q-003",
      topic: "hr-grundlagen",
      type: "open",
      question: "Erkläre den Zielkonflikt zwischen wirtschaftlichen und humanitären Zielen im HRM.",
      answer: "Es gibt konfliktäre, neutrale und harmonische Beziehungen. Wirtschaftlicher Erfolg kann humane Ziele ermöglichen, aber zu starke Gewinnorientierung kann humane Arbeitsbedingungen gefährden. Umgekehrt kann zu hohe Humanorientierung Produktivität schwächen.",
      explanation: "Die Skripte sprechen von Übersteuerung in beide Richtungen: Ausbeutung des Kapitals oder Ausbeutung der Arbeit."
    },
    {
      id: "hr-q-004",
      topic: "hr-arbeitsrecht",
      type: "mc",
      question: "Welche Pflicht gehört zu den Pflichten des Arbeitgebers?",
      options: [
        "Entgeltzahlungspflicht",
        "Arbeitspflicht",
        "Gehorsamspflicht",
        "Treuepflicht"
      ],
      correct: 0,
      explanation: "Entgeltzahlungspflicht, Fürsorgepflicht, Zeugnisausstellungspflicht und Urlaubsgewährungspflicht sind Arbeitgeberpflichten."
    },
    {
      id: "hr-q-005",
      topic: "hr-arbeitsrecht",
      type: "mc",
      question: "Was ist ein wesentliches Merkmal des Arbeitnehmers im arbeitsrechtlichen Sinne?",
      options: [
        "Persönliche Abhängigkeit",
        "Alleinige Gewinnverantwortung",
        "Gesellschafterstellung",
        "Keine Weisungsgebundenheit"
      ],
      correct: 0,
      explanation: "Der Arbeitnehmerbegriff wird wesentlich durch persönliche Abhängigkeit geprägt."
    },
    {
      id: "hr-q-006",
      topic: "hr-arbeitsrecht",
      type: "open",
      question: "Warum haben leitende Angestellte arbeitsrechtlich eine Sonderstellung?",
      answer: "Sie sind einerseits Arbeitnehmer, nehmen andererseits Arbeitgeberfunktionen wahr. Sie stehen der Unternehmens- oder Betriebsleitung nahe, treffen gesteigerte Leistungs-, Treue- und Rücksichtnahmepflichten und sind im Sinne des § 5 Abs. 3 BetrVG nicht wie normale Arbeitnehmer in den Betriebsrat eingebunden.",
      explanation: "Die Sonderstellung ist vor allem betriebsverfassungsrechtlich relevant."
    },
    {
      id: "hr-q-007",
      topic: "hr-personalpolitik",
      type: "mc",
      question: "Welche Aussage trifft auf strategische Führung zu?",
      options: [
        "Strategische Führung bedeutet: die richtigen Dinge tun.",
        "Strategische Führung bedeutet: nur kurzfristige Tagesaufgaben erledigen.",
        "Strategische Führung bedeutet: ausschließlich Lohnabrechnung organisieren.",
        "Strategische Führung bedeutet: Personalplanung vermeiden."
      ],
      correct: 0,
      explanation: "Strategische Führung ist mit Effektivität verbunden: die richtigen Dinge tun."
    },
    {
      id: "hr-q-008",
      topic: "hr-personalpolitik",
      type: "mc",
      question: "Welche drei Elemente bilden das magische Dreieck der Personalpolitik?",
      options: [
        "Beschäftigungsfähigkeit, Demografie-Orientierung und Work-Life-Balance",
        "Absatz, Produktion und Finanzierung",
        "Kündigung, Abmahnung und Probezeit",
        "Steuern, Bilanzierung und Controlling"
      ],
      correct: 0,
      explanation: "Das magische Dreieck besteht aus Beschäftigungsfähigkeit, Demografie-Orientierung und Work-Life-Balance."
    },
    {
      id: "hr-q-009",
      topic: "hr-personalpolitik",
      type: "open",
      question: "Was bedeutet der psychologische Vertrag in der Personalpolitik?",
      answer: "Neben dem formalen Vertrag entsteht bei gut qualifizierten Kräften ein ungeschriebener psychologischer Vertrag. Er beschreibt ein Geben und Nehmen zwischen Unternehmen und Beschäftigten und führt zu einer Partnerschaft auf Augenhöhe über den Erwerbslebenszyklus hinweg.",
      explanation: "Der psychologische Vertrag betont persönliche Ziele und Wertvorstellungen."
    },
    {
      id: "hr-q-010",
      topic: "hr-ethik-werte-generationen",
      type: "mc",
      question: "Was ist nach dem Skript Gegenstand der Ethik?",
      options: [
        "Moral",
        "Bilanzgewinn",
        "Produktionsmenge",
        "Lagerbestand"
      ],
      correct: 0,
      explanation: "Ethik ist die Wissenschaft vom Sittlichen; Gegenstand der Ethik ist die Moral."
    },
    {
      id: "hr-q-011",
      topic: "hr-ethik-werte-generationen",
      type: "mc",
      question: "Welche Aussage beschreibt utilitaristische Ethik korrekt?",
      options: [
        "Eine Handlung ist gut, wenn die Folgen der Handlung nützlich sind.",
        "Eine Handlung ist gut, wenn sie unabhängig von Folgen einer Pflicht entspricht.",
        "Eine Handlung ist gut, wenn sie immer legal ist.",
        "Eine Handlung ist gut, wenn sie nur dem Unternehmen nutzt."
      ],
      correct: 0,
      explanation: "Utilitaristische Ethik bewertet Handlungen nach ihrem Nutzen beziehungsweise ihren Folgen."
    },
    {
      id: "hr-q-012",
      topic: "hr-ethik-werte-generationen",
      type: "open",
      question: "Warum ist der Bereich zwischen Ethik und Gesetz für Unternehmensethik relevant?",
      answer: "Nicht alles, was legal ist, ist moralisch richtig, und nicht alles, was illegal ist, ist moralisch falsch. Ethische Überlegungen werden in der Unternehmenspraxis besonders dort relevant, wo gesetzliche Regelungen fehlen oder nicht ausreichen.",
      explanation: "Legalität ist im Skript die ethische Mindestanforderung, aber nicht automatisch moralische Richtigkeit."
    },
    {
      id: "hr-q-013",
      topic: "hr-personalplanung",
      type: "mc",
      question: "Welche vier Dimensionen umfasst das Sachziel der Personalplanung?",
      options: [
        "Anzahl, Art, Zeitpunkt/Dauer und Einsatzort",
        "Preis, Produkt, Promotion und Place",
        "Eigenkapital, Fremdkapital, Umsatz und Gewinn",
        "Recht, Steuer, Bilanz und Controlling"
      ],
      correct: 0,
      explanation: "Personalplanung stellt Personal quantitativ, qualitativ, zeitlich und räumlich bereit."
    },
    {
      id: "hr-q-014",
      topic: "hr-personalplanung",
      type: "mc",
      question: "Welche Reihenfolge entspricht dem Ablauf der Personalplanung im Skript?",
      options: [
        "Personalbestandsanalyse, Personalbedarfsanalyse, Soll-Ist-Abgleich, Planung der Maßnahmen",
        "Kündigung, Abfindung, Zeugnis, Nachbesetzung",
        "Marketing, Absatz, Produktion, Finanzierung",
        "Auswahl, Einstellung, Ruhestand, Controlling"
      ],
      correct: 0,
      explanation: "Der Ablauf besteht aus Bestandsanalyse, Bedarfsanalyse, Soll-Ist-Abgleich und Maßnahmenplanung."
    },
    {
      id: "hr-q-015",
      topic: "hr-personalplanung",
      type: "open",
      question: "Welche Maßnahmen folgen aus Unterdeckung und Überdeckung?",
      answer: "Bei Unterdeckung fehlen Mitarbeiter; nach Abstimmung und Konkretisierung des Bedarfs kann zur Beschaffungs- beziehungsweise Gewinnungsplanung übergegangen werden. Bei Überdeckung sind mehr Mitarbeiter vorhanden als benötigt; dann müssen Maßnahmen gegen die Überdeckung entschieden werden, also Freistellungsplanung.",
      explanation: "Unterdeckung führt zur Beschaffungslogik, Überdeckung zur Freistellungslogik."
    },
    {
      id: "hr-q-016",
      topic: "hr-personalgewinnung-entwicklung",
      type: "mc",
      question: "Welche Information gehört zur Personalgewinnungsplanung?",
      options: [
        "Offene Positionen, Besetzungszeitpunkt, Beschaffungswege, Gehaltsspannen, Gewinnungskosten und Prozessstatus",
        "Nur der endgültige Jahresabschluss",
        "Nur die Inventur des Lagers",
        "Nur die Umsatzsteuererklärung"
      ],
      correct: 0,
      explanation: "Die Personalgewinnungsplanung enthält die zentralen Informationen des Beschaffungsprozesses."
    },
    {
      id: "hr-q-017",
      topic: "hr-personalgewinnung-entwicklung",
      type: "mc",
      question: "Welche Kompetenzart umfasst Kommunikation, Teamfähigkeit, Konfliktfähigkeit und Empathie?",
      options: [
        "Sozialkompetenz",
        "Fachkompetenz",
        "Methodenkompetenz",
        "Bilanzkompetenz"
      ],
      correct: 0,
      explanation: "Kommunikation, Teamfähigkeit, Konflikt- und Kritikfähigkeit sowie Empathie gehören zur Sozialkompetenz."
    },
    {
      id: "hr-q-018",
      topic: "hr-personalgewinnung-entwicklung",
      type: "open",
      question: "Warum passt Entwicklung und Karrierewege fachlich in das Kapitel Personalgewinnung?",
      answer: "Die Skripte behandeln Entwicklung nicht als vollständig separates Theoriepaket, sondern im Zusammenhang mit Anforderungsprofilen, Funktionsmatrix, Stellenbeschreibung und Karrierewegen. Aus Personalbedarf entstehen Profile, daraus Funktionsmatrix und Karrierepfade wie Linien-, Fach- und Projektmanagement.",
      explanation: "Deshalb wird Entwicklung hier als Anschlusslogik der Personalgewinnung integriert."
    }
  ];

  const existingQuestionKeys = new Set(
    window.QUESTIONS.map(function (question) {
      return question && question.topic + "::" + question.question;
    })
  );

  hrQuestions.forEach(function (question) {
    const key = question.topic + "::" + question.question;
    if (!existingQuestionKeys.has(key)) {
      window.QUESTIONS.push(question);
      existingQuestionKeys.add(key);
    }
  });
})();
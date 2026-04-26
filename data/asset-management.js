
/* ══════════════════════════════════════════════════════════════════════
   StudyOS · data/asset-management.js
   ──────────────────────────────────────────────────────────────────────
   Integriertes Modul "Asset Management" aus dem Starter-ZIP.
   Kompatibel zur bestehenden StudyOS-v3-Architektur:
     - erweitert window.FULL_CONTENT
     - pusht 1 Modul nach window.MODULES
     - pusht Quiz-/Karteikartenfragen nach window.QUESTIONS
   ══════════════════════════════════════════════════════════════════════ */
'use strict';

(function () {

const FULL_CONTENT = {
  "am:traditionelle-assetklassen:ueberblick-lernziele": "\n<div class=\"note-page\">\n  <h3>Überblick & Lernziele</h3>\n  <p>Definition, Systematisierung und zentrale Eigenschaften traditioneller Assetklassen mit Fokus auf Aktien und Anleihen.</p>\n  <div class=\"note-table\"><table><tbody>\n    <tr><th>Quelle</th><td>AM - trad. Assetklassen.pdf</td></tr>\n    <tr><th>Kapitel / Folien</th><td>Kapitel 2, Folien 18-50</td></tr>\n    <tr><th>Wichtigkeit</th><td>hoch</td></tr>\n    <tr><th>Geschätzte Lernzeit</th><td>180-240 Minuten</td></tr>\n  </tbody></table></div>\n  <h4>Lernziele</h4>\n  <ul><li>Assetklassen definieren und anhand von Fundamentalfaktoren einordnen können.</li><li>Standardisierte und nicht standardisierte Assetklassen unterscheiden können.</li><li>Aktien als Anteilsrechte an Aktiengesellschaften erklären können.</li><li>AG, KGaA und SE hinsichtlich Struktur, Organen und Besonderheiten vergleichen können.</li><li>Aktienarten nach Stimmrecht, Übertragbarkeit und Kapitalanteil unterscheiden können.</li><li>Anleihen als verbriefte Forderungsrechte erklären können.</li><li>Festverzinsliche, variabel verzinsliche und Nullkuponanleihen unterscheiden können.</li><li>Nominalverzinsung, Effektivverzinsung und Yield-to-Maturity einordnen können.</li><li>Den Unterschied zwischen versprochener und erwarteter Verzinsung bei Ausfallrisiko erklären können.</li><li>Zentrale Risiken von Anleihen systematisch nennen und erläutern können.</li><li>Ratingklassen nach Investmentqualität und spekulativer Anlage einordnen können.</li><li>Wandelanleihen, Optionsanleihen und Hybridanleihen voneinander abgrenzen können.</li></ul>\n  <h4>Tags</h4>\n  <ul><li>Assetklassen</li><li>Aktien</li><li>Anleihen</li><li>AG</li><li>KGaA</li><li>SE</li><li>Yield-to-Maturity</li><li>Ratingklassen</li><li>Wandelanleihen</li><li>Optionsanleihen</li><li>Hybridanleihen</li></ul>\n</div>",
  "am:traditionelle-assetklassen:systematisierung-assetklassen": "<div class=\"note-page\"><h3>Systematisierung von Assetklassen</h3><p>Grundbegriff Assetklasse, Fundamentalfaktoren und Abgrenzung traditioneller und alternativer Assetklassen.</p><div class=\"note-callout\"><b>Einordnung im Modul:</b> Kapitel 2 behandelt traditionelle Assetklassen innerhalb des Moduls Asset Management. Das Kapitel steht nach der Einführung und vor den alternativen Assetklassen.</div><h4>Assetklassen</h4><div class=\"note-callout\"><b>Definition:</b> Assetklassen sind Anlagen und Anlageinstrumente mit vergleichbaren Eigenschaften, die auf Veränderungen von Fundamentalfaktoren einer Wirtschaft ähnlich reagieren.</div><h4>Fundamentalfaktoren</h4><ul><li>Wirtschaftswachstum</li><li>Inflation</li><li>Technischer Fortschritt</li><li>Infrastruktur</li><li>Arbeit</li><li>Ressourcen</li></ul><h4>Standardisierte vs. nicht standardisierte Assetklassen</h4><div class=\"note-table\"><table><thead><tr><th>Kategorie</th><th>Eigenschaften</th><th>Beispiele</th></tr></thead><tbody><tr><td>Standardisierte Assetklassen</td><td>Höhere Liquidität und geringe Transaktionskosten.</td><td>Aktien, Anleihen, Geldmarktinstrumente, Währungen, entsprechende Derivate und Fonds.</td></tr><tr><td>Nicht standardisierte Assetklassen</td><td>Nicht austauschbare Einzelstücke, kein regelmäßiger Handel, meist keine laufenden Erträge.</td><td>Immobilien, Hedge Fonds, Private Equity, Venture Capital, Rohstoffe, Volatilität, Sammlerstücke, entsprechende Fonds.</td></tr></tbody></table></div><div class=\"note-callout\"><b>Abbildung / Chart: Idealtypische Risiko-Rendite-Darstellung:</b> Die Abbildung ordnet Anlagen entlang von Risiko und Rendite ein. Sichtbar sind kurzfristige Bundesanleihen, Spareinlagen, langfristige Bundesanleihen, Rentenfonds, Aktienfonds, Aktien, Optionen und Futures. Die Darstellung ist ausdrücklich idealtypisch und stark vereinfacht.</div><h4>Systematisierung der Assetklassen</h4><div class=\"note-table\"><table><thead><tr><th>Traditionelle standardisierte Assetklassen</th><th>Alternative nicht standardisierte Assetklassen</th></tr></thead><tbody><tr><td>Aktien</td><td>Immobilien</td></tr><tr><td>Anleihen</td><td>Hedge Fonds</td></tr><tr><td>Geldmarktinstrumente</td><td>Private Equity, Venture Capital</td></tr><tr><td>Währungen</td><td>Rohstoffe</td></tr><tr><td>entsprechende Derivate</td><td>Volatilität</td></tr><tr><td>Fonds</td><td>Sammlerstücke, z. B. Oldtimer, Kunst, Briefmarken, Uhren</td></tr><tr><td>etc.</td><td>entsprechende Fonds, etc.</td></tr></tbody></table></div><div class=\"note-callout\"><b>Prüfungsrelevanz:</b> Die Abgrenzung traditionelle/standardisierte Assetklassen vs. alternative/nicht standardisierte Assetklassen ist Grundlagenstoff und sollte sicher beherrscht werden.</div><div class=\"note-callout note-warning\"><b>Falle:</b> Nicht standardisiert bedeutet im Skript nicht automatisch risikolos oder renditestärker. Die Abgrenzung erfolgt über Austauschbarkeit, Handelbarkeit, Liquidität, Transaktionskosten und laufende Erträge.</div><div class=\"note-callout\"><b>Merkliste zum Unterthema</b></div><h4>Kernbegriffe</h4><ul><li>Assetklasse</li><li>Fundamentalfaktor</li><li>standardisierte Assetklasse</li><li>nicht standardisierte Assetklasse</li><li>Liquidität</li><li>Transaktionskosten</li></ul><h4>Beispiele aus dem Material</h4><ul><li>Aktien und Anleihen als traditionelle Assetklassen.</li><li>Immobilien und Rohstoffe als alternative Assetklassen.</li></ul><h4>Tabellen / Übersichten</h4><ul><li>Systematisierung Assetklassen</li></ul><h4>Prüfungshinweise</h4><ul><li>Definition Assetklasse lernen.</li><li>Abgrenzung standardisiert/nicht standardisiert können.</li></ul><h4>Typische Fallen</h4><ul><li>Alternative Assetklassen nicht pauschal mit Derivaten gleichsetzen.</li></ul></div>",
  "am:traditionelle-assetklassen:aktien-kapitalgesellschaften": "<div class=\"note-page\"><h3>Aktien und Kapitalgesellschaften</h3><p>AG, KGaA, Organe der AG und Europäische Aktiengesellschaft.</p><h4>Aktiengesellschaft</h4><div class=\"note-callout\"><b>Definition:</b> Aktiengesellschaften sind Kapitalgesellschaften, deren Grundkapital in Aktien zerlegt ist. Die Regelung erfolgt durch das AktG.</div><h4>Merkmale der AG</h4><ul><li>Organe: Vorstand, Aufsichtsrat, Aktionär, Hauptversammlung.</li><li>Haftung nur mit dem Gesellschaftsvermögen; keine persönliche Haftung.</li><li>Mindestnennbetrag des Grundkapitals: 50.000 EUR.</li><li>Vom Grundkapital sind mindestens 25 % einzuzahlen.</li><li>Einpersonengesellschaft und Einpersonengründung sind möglich.</li><li>Aktien: Mindestnennwert 1 EUR.</li></ul><h4>Vorteile der AG</h4><ul><li>Organisierter Markt für Beteiligungsfinanzierungen: Börse.</li><li>Hohe Fungibilität der Anteile.</li><li>Klare Trennung von Management und Eigentum möglich.</li></ul><h4>Kommanditgesellschaft auf Aktien</h4><div class=\"note-callout\"><b>Definition:</b> Eine KGaA ist eine Aktiengesellschaft, die an Stelle eines Vorstandes über persönlich haftende Gesellschafter, also Komplementäre, verfügt.</div><h4>KGaA: Organe und Struktur</h4><ul><li>Organe: Komplementäre, Kommanditisten, Aufsichtsrat, Hauptversammlung.</li><li>Persönlich haftende Gesellschafter heißen Komplementäre.</li><li>Komplementäre unterliegen dem Personengesellschaftsrecht nach § 278 Abs. 2 AktG.</li><li>Komplementäre sind geschäftsführungs- und vertretungsbefugt.</li><li>Die Geschäftsführung der Komplementärgesellschaft leitet die KGaA.</li><li>Ausschluss einzelner persönlich haftender Gesellschafter von Geschäftsführung und Vertretung ist möglich.</li></ul><h4>Kommanditaktionäre</h4><ul><li>Haben mitgliedschaftliche Rechte des Aktionärs einer AG.</li><li>Bringen das in Aktien zerlegte Grundkapital der KGaA auf.</li><li>Keine weitere Haftung, z. B. für Forderungen gegen die Gesellschaft.</li></ul><div class=\"note-callout\"><b>Beispiel: Beispiele KGaA an der Frankfurter Börse:</b> Borussia Dortmund GmbH &amp; Co. KGaA, CTS Eventim AG &amp; Co. KGaA, CEWE Stiftung &amp; Co. KGaA, Drägerwerk AG &amp; Co. KGaA, EUROKAI GmbH &amp; Co. KGaA, Fresenius Medical Care AG &amp; Co. KGaA, Fresenius SE &amp; Co. KGaA, Henkel AG &amp; Co. KGaA, Heliad Equity Partners GmbH &amp; Co. KGaA, Hella KGaA, Merck KGaA, Merkur Bank KGaA, Sedlmayr KGaA und STOSE &amp; Co. KGaA.</div><h4>Organe der Aktiengesellschaft</h4><div class=\"note-card\"><b>Modell / Zusammenhang</b><p>Die Hauptversammlung entscheidet über Bilanzgewinnverwendung, Abschlussprüfer, Satzungsänderungen, Kapitalmaßnahmen, Auflösung, Bestellung des Aufsichtsrates sowie Entlastung von Vorstand und Aufsichtsrat. Der Aufsichtsrat überwacht. Der Vorstand führt die laufenden Geschäfte.</p></div><h4>Hauptversammlung</h4><ul><li>Entscheidung über die Verwendung des Bilanzgewinns.</li><li>Bestellung des Abschlussprüfers.</li><li>Abstimmung bei Satzungsänderungen.</li><li>Kapitalerhöhungen und Kapitalherabsetzungen.</li><li>Auflösung der Gesellschaft.</li><li>Bestellung des Aufsichtsrates.</li><li>Entlastung von Vorstand und Aufsichtsrat.</li></ul><h4>Aufsichtsrat und Vorstand</h4><ul><li>Aufsichtsrat: überwachendes Organ.</li><li>Aufsichtsrat: mindestens 3, höchstens 21 Mitglieder, abhängig von der Höhe des Grundkapitals.</li><li>Vorstand: verantwortlich für die laufende Geschäftsführung.</li><li>Vorstand: mindestens 2 Personen bei Grundkapital über 3 Mio. EUR.</li></ul><div class=\"note-callout\"><b>Abbildung / Chart: Organstruktur der AG:</b> Aktionäre wählen und entlasten über die Hauptversammlung. Die Hauptversammlung entlastet den Vorstand. Der Aufsichtsrat bestellt, kontrolliert und entlastet den Vorstand. Arbeitnehmer wählen ab 500 Beschäftigten ebenfalls Vertreter in den Aufsichtsrat.</div><h4>Europäische Aktiengesellschaft</h4><div class=\"note-callout\"><b>Definition:</b> Die Europäische Aktiengesellschaft, auch Societas Europaea, SE oder Europa-AG genannt, ist eine Rechtsform für Aktiengesellschaften in der EU und im Europäischen Wirtschaftsraum.</div><h4>Merkmale der SE</h4><ul><li>Seit 2004 ermöglicht die EU Gründungen nach weitgehend einheitlichen Rechtsprinzipien.</li><li>Geeignet für Konzerne, die in mindestens zwei EU-Mitgliedstaaten vertreten sind.</li><li>Dualistisches System aus Vorstand und Aufsichtsrat möglich.</li><li>Monistisches System aus Verwaltungsrat möglich.</li><li>Erleichterung von Sitzverlegungen und Fusionen in der EU.</li><li>Keine Behinderung durch unterschiedliches nationales Recht.</li><li>Mindestkapital: 120.000 EUR.</li></ul><h4>SE: dualistisches vs. monistisches System</h4><div class=\"note-table\"><table><thead><tr><th>System</th><th>Struktur</th></tr></thead><tbody><tr><td>Dualistisches System</td><td>Vorstand und Aufsichtsrat.</td></tr><tr><td>Monistisches System</td><td>Verwaltungsrat bestimmt Executive Board Member für die Führung; Non-Executive Board Member müssen dann die Mehrheit haben. Alternativ können externe geschäftsführende Direktoren bestimmt werden.</td></tr></tbody></table></div><div class=\"note-callout\"><b>Prüfungsrelevanz:</b> AG, KGaA und SE müssen über Struktur, Organe, Haftungslogik und Mindestkapital sauber abgegrenzt werden können.</div><div class=\"note-callout\"><b>Merkliste zum Unterthema</b></div><h4>Kernbegriffe</h4><ul><li>AG</li><li>AktG</li><li>Vorstand</li><li>Aufsichtsrat</li><li>Hauptversammlung</li><li>Grundkapital</li><li>KGaA</li><li>Komplementär</li><li>Kommanditaktionär</li><li>SE</li><li>Societas Europaea</li></ul><h4>Beispiele aus dem Material</h4><ul><li>Borussia Dortmund GmbH &amp; Co. KGaA</li><li>Fresenius SE &amp; Co. KGaA</li><li>Merck KGaA</li></ul><h4>Prüfungshinweise</h4><ul><li>Organe der AG und Aufgaben lernen.</li><li>KGaA über Komplementäre statt Vorstand abgrenzen.</li><li>SE-Mindestkapital: 120.000 EUR.</li></ul><h4>Typische Fallen</h4><ul><li>Kommanditaktionäre haften nicht wie Komplementäre persönlich.</li></ul></div>",
  "am:traditionelle-assetklassen:aktien-arten-und-maerkte": "<div class=\"note-page\"><h3>Aktienarten und Aktienmärkte</h3><p>Aktie als Anteilsrecht, Aktionärs- und Emittentenziele, Aktiengattungen, Indizes und Aktionärszahlen.</p><h4>Aktie</h4><div class=\"note-callout\"><b>Definition:</b> Eine Aktie ist ein Anteilsrecht an Aktiengesellschaften. Der Aktionär wird Teilhaber an einem beschränkt haftenden Unternehmen.</div><h4>Ziele des Aktionärs</h4><ul><li>Partizipation am Unternehmenserfolg.</li><li>Partizipation an der Wertentwicklung.</li><li>Partizipation an Kapitalaufstockungen.</li><li>Partizipation am Liquidationserlös.</li></ul><h4>Ziele des Emittenten</h4><ul><li>Unternehmensfinanzierung mit unbegrenzter Laufzeit.</li><li>Hohe Fungibilität im Vergleich zu anderen Eigenkapital-Finanzierungsformen.</li></ul><h4>Aktien vs. Private Equity</h4><p>Bei einem Investment in nicht-börsennotierte Unternehmen spricht das Skript von Private Equity.</p><h4>Grundunterscheidungen von Aktien</h4><div class=\"note-table\"><table><thead><tr><th>Unterscheidung</th><th>Ausprägungen</th></tr></thead><tbody><tr><td>Kapitalanteil</td><td>Nennbetragsaktien vs. Stückaktien</td></tr><tr><td>Übertragung/Register</td><td>Inhaberaktien vs. Namensaktien</td></tr><tr><td>Stimmrecht/Vorzugsrechte</td><td>Stammaktien vs. Vorzugsaktien</td></tr></tbody></table></div><h4>Stammaktien</h4><div class=\"note-callout\"><b>Definition:</b> Stammaktien sind Aktien mit Stimmrecht. Englische Begriffe: Voting Shares oder Common Shares.</div><h4>Vorzugsaktien</h4><div class=\"note-callout\"><b>Definition:</b> Vorzugsaktien sind Aktien ohne Stimmrecht. Als Ausgleich besteht ein Recht auf Vorzugsbehandlung, z. B. höhere Dividende oder bessere Rangstelle bei Unternehmensliquidation.</div><h4>Merkmale von Vorzugsaktien</h4><ul><li>Maximal 50 % des Grundkapitals.</li><li>Vorrangiger Dividendenbezug grundsätzlich kumulativ.</li><li>Dividendenausfall ist nachzuzahlen.</li><li>Sonderstimmrecht für Vorzugsaktionäre nach zwei Jahren Dividendenausfall.</li><li>Notieren meist mit Abschlag zur Stammaktie.</li></ul><h4>Inhaberaktien</h4><div class=\"note-callout\"><b>Definition:</b> Bei Inhaberaktien sind Rechte und Pflichten des Aktionärs eng mit der Aktienurkunde verbunden. Die Übertragung der Urkunde bedeutet die Übertragung aller Rechte und Pflichten.</div><h4>Merkmale von Inhaberaktien</h4><ul><li>Hohe Fungibilität.</li><li>Formlose Übertragung durch Einigung und Übergabe.</li><li>Aktionäre sind dem Unternehmen nicht namentlich bekannt.</li></ul><h4>Namensaktien</h4><div class=\"note-callout\"><b>Definition:</b> Namensaktien sind Aktien, deren Inhaber im Aktienregister der Aktiengesellschaft eingetragen sein muss, um seine Rechte geltend machen zu können.</div><h4>Vinkulierte Namensaktien</h4><div class=\"note-callout\"><b>Definition:</b> Bei vinkulierten Namensaktien erfordert die Übertragung die Zustimmung der Emittentin.</div><h4>Vinkulierte Namensaktien: Wirkung</h4><ul><li>Weitere Einschränkung der Fungibilität.</li><li>Relevanz in Rüstungs- und Luftfahrtindustrie.</li><li>Landerechte können mit Sitz in Deutschland verbunden sein.</li><li>Namens- und vinkulierte Namensaktien bieten besonderen Übernahmeschutz.</li><li>Das Heranpirschen bleibt nicht geheim.</li></ul><h4>Nennwertaktien / Nennbetragsaktien</h4><div class=\"note-callout\"><b>Definition:</b> Nennwertaktien stellen über einen festen Nennwert einen Anteil am Grundkapital einer Aktiengesellschaft dar.</div><h4>Merkmale von Nennwertaktien</h4><ul><li>Mindestens 1,00 EUR oder ein Vielfaches davon.</li><li>Gegenbeispiel im Skript: Schweiz.</li><li>Verbot der Unterpari-Emission bei Kapitalerhöhungen.</li></ul><h4>Stückaktien</h4><div class=\"note-callout\"><b>Definition:</b> Stückaktien sind nennwertlose Aktien, die am Grundkapital einer Gesellschaft mit dem gleichen Anteil beteiligt sind.</div><h4>Merkmale von Stückaktien</h4><ul><li>Der auf einzelne Aktien entfallende anteilige Betrag des Grundkapitals darf 1 EUR nicht unterschreiten.</li><li>Aktien über einen geringeren Nennbetrag sind nichtig.</li><li>In Deutschland erst seit 1998 zugelassen.</li><li>Häufig erkennbar durch Namenszusatz „o. N.“ für „ohne Nennwert“.</li></ul><div class=\"note-callout note-warning\"><b>Falle: Nennwertaktien vs. Stückaktien:</b> Ein Unternehmen kann nicht beide Aktiengattungen ausgeben: entweder Nennwertaktien oder Stückaktien.</div><div class=\"note-callout\"><b>Abbildung / Chart: Wichtige Aktienmärkte und Indizes weltweit:</b> Jeder Index setzt sich aus einem repräsentativ gewählten Korb von Unternehmen aus dem jeweiligen Land zusammen. Das Skript nennt unter anderem DAX, S&amp;P 500, Dow Jones, Nasdaq, FTSE 100, CAC 40, IBEX 35, Euro STOXX, SMI, Sensex, RTS, Nikkei, SEC, Hang Seng, Straits Times und ASX.</div><div class=\"note-callout\"><b>Abbildung / Chart: Aktionäre und Aktienfondsbesitzer in Deutschland 1997-2025:</b> Die Abbildung unterscheidet „nur Aktien“, „Aktien und Aktienfonds“ sowie „nur Aktienfonds“. Für 2025 sind sichtbar: nur Aktien 2,0 Mio., Aktien und Aktienfonds 2,9 Mio., nur Aktienfonds 9,2 Mio.</div><div class=\"note-callout\"><b>Prüfungsrelevanz:</b> Sehr gut prüfbar sind Stammaktie vs. Vorzugsaktie, Inhaberaktie vs. Namensaktie vs. vinkulierte Namensaktie und Nennwertaktie vs. Stückaktie.</div><div class=\"note-callout\"><b>Merkliste zum Unterthema</b></div><h4>Kernbegriffe</h4><ul><li>Aktie</li><li>Anteilsrecht</li><li>Aktionär</li><li>Emittent</li><li>Private Equity</li><li>Stammaktie</li><li>Vorzugsaktie</li><li>Inhaberaktie</li><li>Namensaktie</li><li>vinkulierte Namensaktie</li><li>Nennwertaktie</li><li>Stückaktie</li><li>Aktienindex</li></ul><h4>Beispiele aus dem Material</h4><ul><li>Voting Shares / Common Shares.</li><li>Namenszusatz „o. N.“ für Stückaktien.</li><li>DAX, S&amp;P 500, FTSE 100, CAC 40, Nikkei.</li></ul><h4>Tabellen / Übersichten</h4><ul><li>Grundunterscheidungen von Aktien</li></ul><h4>Prüfungshinweise</h4><ul><li>Aktienarten nach Stimmrecht, Übertragbarkeit und Kapitalanteil sortieren.</li></ul><h4>Typische Fallen</h4><ul><li>Vorzugsaktien haben grundsätzlich kein Stimmrecht.</li><li>Ein Unternehmen kann nicht gleichzeitig Nennwert- und Stückaktien ausgeben.</li></ul></div>",
  "am:traditionelle-assetklassen:anleihen-grundlagen-und-typen": "<div class=\"note-page\"><h3>Anleihen: Grundlagen und Typen</h3><p>Definition von Anleihen und zentrale Typen: Festzinsanleihe, Floater und Zero Bond.</p><h4>Anleihe</h4><div class=\"note-callout\"><b>Definition:</b> Eine Anleihe ist ein als Wertpapier verbrieftes Forderungsrecht.</div><h4>Synonyme</h4><ul><li>Rentenpapiere</li><li>Renten</li><li>Schuldverschreibungen</li><li>Obligationen</li><li>Bonds</li></ul><h4>Grundmerkmale von Anleihen</h4><ul><li>Emittent unabhängig von der Rechtsform.</li><li>Käufer wird Gläubiger, Emittent wird Schuldner.</li><li>Unbedingte Zinszahlungs- und Tilgungspflichten des Schuldners zu fest definierten Zeitpunkten.</li><li>Verkauf der Anleihe ohne Zustimmung des Gläubigers möglich.</li><li>Umfangreiche Dokumentation: Anleihebedingungen, eventuell Wertpapierprospekt.</li></ul><h4>Grundunterscheidung</h4><div class=\"note-table\"><table><thead><tr><th>Form</th><th>Beschreibung</th></tr></thead><tbody><tr><td>Börsennotierte Inhaberschuldverschreibungen</td><td>Normalfall.</td></tr><tr><td>Nicht-börsennotierte Namensschuldverschreibungen</td><td>Registered Bond, Namenspfandbriefe, Kommunalobligationen und Landesbodenbriefe.</td></tr></tbody></table></div><h4>Festverzinsliche Anleihe</h4><div class=\"note-callout\"><b>Definition:</b> Schuldverschreibung mit fixem Nominalzins während der gesamten Laufzeit. Synonyme: Straight Bonds, Plain Vanilla Bonds.</div><h4>Merkmale festverzinslicher Anleihen</h4><ul><li>Meist konstante, jährlich nachschüssig zu zahlende Zinsverpflichtungen.</li><li>Zinsverpflichtungen sind in Prozent des Nominalwerts festgelegt.</li><li>Zinszahlungstermine: jährlich, halbjährlich oder vierteljährlich.</li><li>Tilgung durch Rückzahlung des Anleihebetrags am Ende der Laufzeit.</li><li>Laufzeitenspektrum: 1-30 Jahre.</li><li>Veränderung der laufenden Verzinsung bei Stufenzinsanleihen möglich: Zins Step-Up-Covenant oder Zins Step-Down-Covenant.</li></ul><h4>Variabel verzinsliche Anleihen</h4><div class=\"note-callout\"><b>Definition:</b> Floater oder Floating Rate Notes haben eine Verzinsung, die von einer externen Referenzgröße abhängt.</div><h4>Merkmale von Floatern</h4><ul><li>Verzinsung meist abhängig vom EURIBOR zuzüglich Kreditrisikoprämie.</li><li>Kreditrisikoprämie = Credit Spread.</li><li>Credit Spread abhängig von Erwartung über Ausfallwahrscheinlichkeit und erwarteter Recovery Rate bei Kreditausfall.</li><li>Adjustierung des Zinssatzes regelmäßig alle 3 oder 6 Monate.</li><li>Limitiertes Kursrisiko des Anlegers.</li><li>Laufzeitenspektrum: 5-7 Jahre.</li><li>Beschränkung des Zinsänderungsrisikos für Emittenten durch Cap Floater.</li></ul><h4>Varianten von Floatern</h4><ul><li>Floor Floater</li><li>Collared Floater / Mini-Max-Floater</li><li>Reverse Floater</li><li>Indexanleihen / Inflation-Linked-Bonds</li></ul><h4>Nullkuponanleihen</h4><div class=\"note-callout\"><b>Definition:</b> Nullkuponanleihen sind Schuldverschreibungen ohne laufenden Zinskupon. Synonym: Zero Bonds.</div><h4>Merkmale von Zero Bonds</h4><ul><li>Thesaurierung der Zinsen und Ausschüttung zum Fälligkeitstag gemeinsam mit Nominal.</li><li>Zinseffekt durch Differenz zwischen Ausgabe- und Rückzahlungsbetrag.</li><li>Normalfall: Ausgabe mit Disagio zum Nennwert.</li><li>Alternative: Emission zu pari und Tilgung über pari, sogenannte Zuwachsanleihe.</li><li>Laufzeitenspektrum: 10-30 Jahre.</li><li>Vorteil Emittent: Investitionsprojekte müssen nicht zwingend laufende Cashflows zur Finanzierung der Zinszahlungen erwirtschaften.</li><li>Vorteil Gläubiger: Verlagerung von Zinseinnahmen und Steuern, kein Wiederanlagerisiko.</li><li>Hohes Kurspotenzial im Umfeld rückläufiger Zinsen.</li></ul><div class=\"note-callout\"><b>Abbildung / Chart: Kurs vs. Verzinsung:</b> Die Abbildung zur BMW Finance N.V. EO-Medium-Term Notes 2023(33) zeigt unter anderem Kurs 101,861 %, Rendite p. a. 3,826 %, Fälligkeit 04.10.2033, Nominalzinssatz 4,125 %, Kupon-Art fest, Zinszahlung jährlich, Emittent BMW Finance N.V., Währung EUR, Stückelung 1.000,00, Duration 6,51 und Modified Duration 6,273. Die Werte sollten im finalen App-Einbau gegen das PDF geprüft werden.</div><div class=\"note-callout\"><b>Prüfungsrelevanz:</b> Festzinsanleihe, Floater und Zero Bond unterscheiden sich vor allem nach Zinslogik, Zahlungsstruktur, Laufzeitenspektrum und Risikocharakter.</div><div class=\"note-callout\"><b>Merkliste zum Unterthema</b></div><h4>Kernbegriffe</h4><ul><li>Anleihe</li><li>Forderungsrecht</li><li>Rentenpapier</li><li>Schuldverschreibung</li><li>Obligation</li><li>Bond</li><li>Gläubiger</li><li>Schuldner</li><li>Festzinsanleihe</li><li>Straight Bond</li><li>Plain Vanilla Bond</li><li>Floater</li><li>FRN</li><li>EURIBOR</li><li>Credit Spread</li><li>Recovery Rate</li><li>Zero Bond</li><li>Disagio</li><li>Zuwachsanleihe</li></ul><h4>Beispiele aus dem Material</h4><ul><li>BMW Finance N.V. EO-Medium-Term Notes 2023(33).</li><li>Indexanleihen / Inflation-Linked-Bonds.</li></ul><h4>Prüfungshinweise</h4><ul><li>Floater: Referenzgröße + Credit Spread.</li><li>Zero Bond: keine laufenden Zinszahlungen.</li></ul><h4>Typische Fallen</h4><ul><li>Zero Bonds haben keinen laufenden Kupon, aber trotzdem einen Zinseffekt.</li></ul></div>",
  "am:traditionelle-assetklassen:anleihen-rendite-risiko-rating": "<div class=\"note-page\"><h3>Anleihen: Rendite, Risiko und Rating</h3><p>Nominalverzinsung, Effektivverzinsung, YTM, Ausfallrisiko, Schuldschein, Anleiherisiken und Ratingklassen.</p><h4>Nominalverzinsung</h4><div class=\"note-callout\"><b>Definition:</b> Die Nominalverzinsung ist die Zinszahlung bezogen auf den Nominalbetrag.</div><h4>Effektivverzinsung / Yield-to-Maturity</h4><div class=\"note-callout\"><b>Definition:</b> Die Effektivverzinsung oder Yield-to-Maturity ist der Zins, bei dem der Barwert der Zahlungsströme eines Bonds gleich dem aktuellen Kurs plus Stückzinsen ist.</div><h4>Einflussfaktoren auf YTM</h4><ul><li>Laufzeit und gegebenenfalls vorzeitige Tilgung.</li><li>Stückzinsen.</li><li>Währungsgewinne und Währungsverluste.</li></ul><h4>Praktikerformel zur Effektivverzinsung</h4><div class=\"note-formula\">Die Formeldarstellung im PDF ist durch die Textextraktion beschädigt. Sie wurde deshalb nicht rekonstruiert.</div><div class=\"note-callout note-warning\"><b>Hinweis:</b> Unklar im Skript / PDF-Extraktion beschädigt.</div><h4>Kurs-YTM-Zusammenhang</h4><div class=\"note-card\"><b>Modell / Zusammenhang</b><p>Kurs = pari → YTM = Nominalzins. Kurs &lt; pari → YTM &gt; Nominalzins. Kurs &gt; pari → YTM &lt; Nominalzins.</p></div><h4>Erwartete vs. versprochene Verzinsung</h4><p>Bei der Berechnung der Rendite bis zur Fälligkeit wird angenommen, dass die Anleihe gemäß Anleihevertrag zurückgezahlt wird. Weil Kredite einem Ausfallrisiko unterliegen, kann die versprochene Rendite von der erwarteten Rendite abweichen. Das Ausfallrisiko muss daher in der YTM-Berechnung berücksichtigt werden.</p><div class=\"note-callout\"><b>Beispiel: Beispiel erwartete YTM:</b> Einjährige Anleihe mit Kupon 7 %, Kurs 90 %, Ausfallwahrscheinlichkeit 20 %. Im Ausfall erhält der Kreditgeber 60 % des versprochenen Betrags. Versprochene YTM: 18,9 %. YTM im Default: -28,7 %. Erwartete YTM: 18,9 % × 0,8 + (-28,7 %) × 0,2 = 9,4 %.</div><h4>Schuldschein(darlehen)</h4><div class=\"note-callout\"><b>Definition:</b> Ein Schuldscheindarlehen ist ein verzinsliches Wertpapier, das nicht an der Börse gehandelt wird.</div><h4>Schuldscheindarlehen: Merkmale</h4><ul><li>Kapitalgeber sind vor allem Versicherungsunternehmen, Bundesländer, Kommunen, Träger der Sozialversicherung und die Bundesanstalt für Arbeit.</li><li>Banken agieren als Arrangeur.</li><li>Investoren können dem Unternehmen unbekannt bleiben.</li><li>Ausreichung nur an bonitätsstarke Unternehmen.</li></ul><h4>Schuldschein: Vor- und Nachteile</h4><div class=\"note-table\"><table><thead><tr><th>Perspektive</th><th>Vorteile</th><th>Nachteile</th></tr></thead><tbody><tr><td>Unternehmen</td><td>Keine Besicherung; keine Dokumentationspflichten; keine Verpflichtung zu externem Rating, wohl aber bankinternes Rating.</td><td>Ca. 0,5 % höhere Nominalverzinsung im Vergleich zur Anleihe.</td></tr><tr><td>Investor</td><td>Keine tägliche Börsenkursfeststellung → kein Abschreibungsrisiko.</td><td>Erschwerte Möglichkeiten des vorzeitigen Verkaufs.</td></tr></tbody></table></div><h4>Sonstige Schuldverschreibungen</h4><ul><li>Tilgungsanleihen: Tilgung nicht in einem Betrag, sondern stetig über die Laufzeit oder über einen vereinbarten Zeitraum.</li><li>Annuitätenanleihen: Tilgung über die gesamte Laufzeit mit steigendem Anteil am konstanten Jahresbetrag.</li><li>Verlosungsanleihen: Auslosung von Tranchen zu regelmäßigen Terminen, die dann zurückgezahlt werden.</li></ul><h4>Risiken von Anleihen</h4><ul><li>Bonitäts- oder Ausfallrisiken: Kursverluste nach Ratingänderung des Emittenten oder aus Insolvenz.</li><li>Zinsänderungsrisiken: Kursverluste nach Veränderungen des allgemeinen Zinsniveaus.</li><li>Liquiditätsrisiken: Kursverluste durch Kauf- oder Verkaufsorders.</li><li>Sicherungsrisiken: Wertverluste der Sicherheiten.</li><li>Wiederanlagerisiken: vereinnahmte Kupons können nur zu niedrigeren Zinsen wiederangelegt werden.</li><li>Währungsrisiken: Risiko einer Euro-Aufwertung bei Fremdwährungsanleihen.</li><li>Kündigungsrisiken: Emittent übt sein vereinbartes Kündigungsrecht aus.</li><li>Auslosungsrisiken: Anleihe des Gläubigers wird ausgelost und früher zurückgezahlt; führt letztlich zu Wiederanlagerisiken.</li></ul><h4>Ratingklassen nach Moody's und S&amp;P</h4><div class=\"note-table\"><table><thead><tr><th>Einschätzung</th><th>Moody's</th><th>S&amp;P</th><th>Kategorie</th></tr></thead><tbody><tr><td>Beste Qualität, geringes Ausfallrisiko</td><td>Aaa</td><td>AAA</td><td>Investmentqualität</td></tr><tr><td>Hohe Qualität</td><td>Aa1, Aa2, Aa3</td><td>AA+, AA, AA-</td><td>Investmentqualität</td></tr><tr><td>Gute Qualität</td><td>A1, A2, A3</td><td>A+, A, A-</td><td>Investmentqualität</td></tr><tr><td>Mittlere Qualität</td><td>Baa1, Baa2, Baa3</td><td>BBB+, BBB, BBB-</td><td>Investmentqualität</td></tr><tr><td>Spekulative Anlage</td><td>Ba1, Ba2, Ba3</td><td>BB+, BB, BB-</td><td>Spekulative Anlage</td></tr><tr><td>Sehr spekulativ</td><td>B1, B2, B3</td><td>B+, B, B-</td><td>Spekulative Anlage</td></tr><tr><td>Niedrigste Qualität</td><td>Caa, Ca, C</td><td>CCC, CC, C</td><td>Spekulative Anlage</td></tr><tr><td>Ausfall / Default</td><td>D</td><td>D</td><td>Default</td></tr></tbody></table></div><div class=\"note-callout\"><b>Prüfungsrelevanz:</b> Kurs-YTM-Zusammenhang, erwartete vs. versprochene YTM, Risiken von Anleihen und die Grenze zwischen Investmentqualität und spekulativer Anlage sind besonders prüfungsnah.</div><div class=\"note-callout\"><b>Merkliste zum Unterthema</b></div><h4>Kernbegriffe</h4><ul><li>Nominalverzinsung</li><li>Effektivverzinsung</li><li>Yield-to-Maturity</li><li>YTM</li><li>Stückzinsen</li><li>pari</li><li>Ausfallrisiko</li><li>Recovery Rate</li><li>Schuldscheindarlehen</li><li>Tilgungsanleihe</li><li>Annuitätenanleihe</li><li>Verlosungsanleihe</li><li>Ratingklasse</li><li>Investmentqualität</li><li>spekulative Anlage</li><li>Default</li></ul><h4>Formeln</h4><ul><li>Kurs = pari → YTM = Nominalzins</li><li>Kurs &lt; pari → YTM &gt; Nominalzins</li><li>Kurs &gt; pari → YTM &lt; Nominalzins</li><li>Erwartete YTM im Beispiel: 18,9 % × 0,8 + (-28,7 %) × 0,2 = 9,4 %</li><li>Praktikerformel zur Effektivverzinsung: unklar im Skript / PDF-Extraktion beschädigt</li></ul><h4>Beispiele aus dem Material</h4><ul><li>Einjährige Anleihe mit 7 % Kupon, Kurs 90 %, Ausfallwahrscheinlichkeit 20 %, Recovery 60 %.</li></ul><h4>Tabellen / Übersichten</h4><ul><li>Ratingklassen nach Moody's und S&amp;P</li></ul><h4>Prüfungshinweise</h4><ul><li>Kurs-YTM-Zusammenhang auswendig können.</li><li>Investmentqualität endet bei Baa3 / BBB-.</li></ul><h4>Typische Fallen</h4><ul><li>Versprochene YTM ist bei Ausfallrisiko nicht automatisch erwartete YTM.</li></ul></div>",
  "am:traditionelle-assetklassen:weitere-finanzierungsformen": "<div class=\"note-page\"><h3>Weitere Finanzierungsformen</h3><p>Wandelanleihen, Optionsanleihen und Hybridanleihen als besondere Finanzierungsinstrumente.</p><h4>Wandelanleihe</h4><div class=\"note-callout\"><b>Definition:</b> Eine Wandelanleihe ist eine Schuldverschreibung mit Sonderrechten, konkret mit einem Umtauschrecht der Anleihe in Aktien des Emittenten. Sie ist nur für börsennotierte Aktiengesellschaften möglich.</div><h4>Merkmale von Wandelanleihen</h4><ul><li>Nach Wandlung geht die Obligation unter.</li><li>Für Emittenten entfällt nach Wandlung die Pflicht zur Zahlung von Zinsen und zur Tilgung.</li><li>Nach Wandlung wird der Anleihegläubiger Aktionär und partizipiert an der Kursentwicklung.</li><li>Hybrides Finanzierungsinstrument aus Naked Bond und Call.</li><li>Synonyme: Convertible Bonds, Convertibles.</li><li>Umfangreiche Dokumentation.</li><li>Laufzeitenspektrum: 3-7 Jahre.</li></ul><h4>Optionsanleihe</h4><div class=\"note-callout\"><b>Definition:</b> Eine Optionsanleihe ist eine Anleihe mit Zusatzrechten. Das Zusatzrecht ist ein Bezugsrecht auf Aktien zusätzlich zum Rückzahlungsanspruch der Anleihe.</div><h4>Merkmale von Optionsanleihen</h4><ul><li>Anleger erhält Verzinsung.</li><li>Anleger erhält Rückzahlung des Nominalbetrags.</li><li>Anleger erhält Aktien des Emittenten zu vorab festgelegtem Preis.</li><li>Nach Ausübung der Option ist der Gläubiger auch Aktionär.</li><li>Umfangreiche Dokumentation.</li><li>Voraussetzung: HV-Beschluss über bedingte Kapitalerhöhung.</li></ul><h4>Hybridanleihe</h4><div class=\"note-callout\"><b>Definition:</b> Eine Hybridanleihe ist eine Mischfinanzierungsform zwischen Eigen- und Fremdkapital.</div><h4>Merkmale von Hybridanleihen</h4><ul><li>Synonyme: Consol Bonds, Perpetual Bonds, Perpetuals.</li><li>Handelsbilanzielle Einstufung als Kern- bzw. Eigenkapital ohne gesellschaftsrechtliche Mitspracherechte.</li><li>Steuerrechtliche Einstufung als Fremdkapital.</li><li>Laufzeitenspektrum über 99 Jahre.</li><li>Grundsätzlich unbesichert mit schuldrechtlichem Nachrang.</li><li>Hoher Zinssatz.</li><li>Kein ordentliches Kündigungsrecht für Gläubiger, wohl aber für Emittenten.</li><li>Verschiebung oder Aussetzung von Zinszahlungen möglich.</li></ul><h4>Zinszahlungsaussetzungen bei Hybridanleihen</h4><ul><li>Verpflichtende Zinszahlungsaussetzungen, z. B. bei Rating-Downgrade.</li><li>Optionale Zinszahlungsaussetzungen im Ermessen des Managements.</li></ul><h4>Wandelanleihe vs. Optionsanleihe vs. Hybridanleihe</h4><div class=\"note-table\"><table><thead><tr><th>Instrument</th><th>Kernlogik</th><th>Besonderheit</th></tr></thead><tbody><tr><td>Wandelanleihe</td><td>Anleihe mit Umtauschrecht in Aktien.</td><td>Nach Wandlung geht die Obligation unter.</td></tr><tr><td>Optionsanleihe</td><td>Anleihe mit zusätzlichem Bezugsrecht auf Aktien.</td><td>Bezugsrecht zusätzlich zum Rückzahlungsanspruch.</td></tr><tr><td>Hybridanleihe</td><td>Mischfinanzierungsform zwischen Eigen- und Fremdkapital.</td><td>Sehr lange Laufzeit, Nachrang, mögliche Zinsaussetzung.</td></tr></tbody></table></div><div class=\"note-callout\"><b>Prüfungsrelevanz:</b> Wandelanleihe = Umtauschrecht; Optionsanleihe = Zusatz-/Bezugsrecht; Hybridanleihe = Mischform zwischen Eigen- und Fremdkapital.</div><div class=\"note-callout note-warning\"><b>Falle:</b> Wandelanleihe und Optionsanleihe nicht gleichsetzen: Bei der Wandelanleihe wird die Anleihe in Aktien getauscht; bei der Optionsanleihe besteht ein Bezugsrecht zusätzlich zur Anleihe.</div><div class=\"note-callout\"><b>Merkliste zum Unterthema</b></div><h4>Kernbegriffe</h4><ul><li>Wandelanleihe</li><li>Convertible Bond</li><li>Umtauschrecht</li><li>Naked Bond</li><li>Call</li><li>Optionsanleihe</li><li>Bezugsrecht</li><li>bedingte Kapitalerhöhung</li><li>Hybridanleihe</li><li>Consol Bond</li><li>Perpetual Bond</li><li>Nachrang</li><li>Zinszahlungsaussetzung</li></ul><h4>Beispiele aus dem Material</h4><ul><li>Wandelanleihe als hybrides Finanzierungsinstrument aus Naked Bond und Call.</li><li>Hybridanleihe mit Laufzeitenspektrum &gt; 99 Jahre.</li></ul><h4>Tabellen / Übersichten</h4><ul><li>Vergleich Wandelanleihe, Optionsanleihe und Hybridanleihe</li></ul><h4>Prüfungshinweise</h4><ul><li>Instrumente nach Kernrecht unterscheiden.</li></ul><h4>Typische Fallen</h4><ul><li>Bei Hybridanleihen hat der Gläubiger kein ordentliches Kündigungsrecht.</li></ul></div>"
};

const _amDuplicateLegacyKeys = Object.keys(FULL_CONTENT).filter(k => Object.prototype.hasOwnProperty.call(window.FULL_CONTENT, k));
if (_amDuplicateLegacyKeys.length) {
  console.warn('[StudyOS] Duplicate FULL_CONTENT keys in data/asset-management.js:', _amDuplicateLegacyKeys);
}
Object.assign(window.FULL_CONTENT, FULL_CONTENT);

const MODULES = [
  {
    "id": "asset-management",
    "title": "Asset Management",
    "subtitle": "Lernmodul zu Assetklassen, Portfoliotheorie, Portfoliomanagement, Performanceanalyse, Indizes, aktivem/passivem Management und FinTechs im Asset Management.",
    "icon": "chart",
    "topics": [
      {
        "id": "traditionelle-assetklassen",
        "title": "Kapitel 2 – Traditionelle Assetklassen",
        "intro": "Definition, Systematisierung und zentrale Eigenschaften traditioneller Assetklassen mit Fokus auf Aktien und Anleihen. Quelle: AM - trad. Assetklassen.pdf, Kapitel 2, Folien 18-50. Status: in-progress.",
        "subtopics": [
          {
            "id": "ueberblick-lernziele",
            "title": "Überblick & Lernziele",
            "legacyKey": "am:traditionelle-assetklassen:ueberblick-lernziele"
          },
          {
            "id": "systematisierung-assetklassen",
            "title": "Systematisierung von Assetklassen",
            "legacyKey": "am:traditionelle-assetklassen:systematisierung-assetklassen"
          },
          {
            "id": "aktien-kapitalgesellschaften",
            "title": "Aktien und Kapitalgesellschaften",
            "legacyKey": "am:traditionelle-assetklassen:aktien-kapitalgesellschaften"
          },
          {
            "id": "aktien-arten-und-maerkte",
            "title": "Aktienarten und Aktienmärkte",
            "legacyKey": "am:traditionelle-assetklassen:aktien-arten-und-maerkte"
          },
          {
            "id": "anleihen-grundlagen-und-typen",
            "title": "Anleihen: Grundlagen und Typen",
            "legacyKey": "am:traditionelle-assetklassen:anleihen-grundlagen-und-typen"
          },
          {
            "id": "anleihen-rendite-risiko-rating",
            "title": "Anleihen: Rendite, Risiko und Rating",
            "legacyKey": "am:traditionelle-assetklassen:anleihen-rendite-risiko-rating"
          },
          {
            "id": "weitere-finanzierungsformen",
            "title": "Weitere Finanzierungsformen",
            "legacyKey": "am:traditionelle-assetklassen:weitere-finanzierungsformen"
          }
        ]
      }
    ]
  }
];

window.MODULES.push(...MODULES);

const QUESTIONS = [
  {
    "topic": "traditionelle-assetklassen",
    "q": "Was versteht das Skript unter Assetklassen?",
    "e": "Die Definition stellt auf vergleichbare Eigenschaften und ähnliche Reaktionen auf Fundamentalfaktoren ab. (Folie 20)",
    "type": "quiz",
    "a": [
      "Nur börsennotierte Wertpapiere mit täglicher Kursfeststellung.",
      "Anlagen und Anlageinstrumente mit vergleichbaren Eigenschaften, die auf Fundamentalfaktoren ähnlich reagieren.",
      "Ausschließlich Aktien, Anleihen und Fonds.",
      "Nicht standardisierte Einzelstücke ohne laufende Erträge."
    ],
    "c": 1
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Welche Fundamentalfaktoren nennt das Skript?",
    "e": "Die persönliche Risikoneigung wird hier nicht genannt. (Folie 20)",
    "type": "flash",
    "ans": "Wirtschaftswachstum; Inflation; Technischer Fortschritt; Infrastruktur; Arbeit; Ressourcen"
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Nicht standardisierte Assetklassen weisen laut Skript typischerweise höhere Liquidität und geringere Transaktionskosten auf.",
    "e": "Diese Eigenschaften werden standardisierten Assetklassen zugeordnet. (Folie 20)",
    "type": "quiz",
    "a": [
      "wahr",
      "falsch"
    ],
    "c": 1
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Was ist das Mindestgrundkapital einer Aktiengesellschaft laut Skript?",
    "e": "Für die AG nennt das Skript 50.000 EUR. (Folie 23)",
    "type": "quiz",
    "a": [
      "25.000 EUR",
      "50.000 EUR",
      "100.000 EUR",
      "120.000 EUR"
    ],
    "c": 1
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Welche Vorteile der AG nennt das Skript?",
    "e": "Organe sind bei der AG ausdrücklich relevant. (Folie 23)",
    "type": "flash",
    "ans": "Organisierter Markt für Beteiligungsfinanzierungen über die Börse; Hohe Fungibilität der Anteile; Klare Trennung von Management und Eigentum möglich"
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Worin unterscheidet sich die KGaA strukturell von der AG?",
    "e": "Das ist die zentrale definitorische Abgrenzung. (Folie 24)",
    "type": "flash",
    "ans": "Die KGaA verfügt an Stelle eines Vorstandes über persönlich haftende Gesellschafter, also Komplementäre. Diese sind geschäftsführungs- und vertretungsbefugt."
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Welches Mindestkapital nennt das Skript für die SE?",
    "e": "Für die SE nennt das Skript 120.000 EUR. (Folie 28)",
    "type": "quiz",
    "a": [
      "50.000 EUR",
      "75.000 EUR",
      "100.000 EUR",
      "120.000 EUR"
    ],
    "c": 3
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Was ist eine Aktie laut Skript?",
    "e": "Der Aktionär wird Teilhaber an einem beschränkt haftenden Unternehmen. (Folie 29)",
    "type": "quiz",
    "a": [
      "Ein verbrieftes Forderungsrecht.",
      "Ein Anteilsrecht an Aktiengesellschaften.",
      "Ein nicht börsengehandeltes verzinsliches Wertpapier.",
      "Eine Mischform zwischen Eigen- und Fremdkapital."
    ],
    "c": 1
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Welche Aktienart hat laut Skript grundsätzlich kein Stimmrecht?",
    "e": "Vorzugsaktien sind Aktien ohne Stimmrecht. (Folie 30)",
    "type": "quiz",
    "a": [
      "Stammaktie",
      "Vorzugsaktie",
      "Inhaberaktie",
      "Nennwertaktie"
    ],
    "c": 1
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Vorzugsaktien dürfen laut Skript maximal 50 % des Grundkapitals ausmachen.",
    "e": "Das Skript nennt maximal 50 % des Grundkapitals. (Folie 30)",
    "type": "quiz",
    "a": [
      "wahr",
      "falsch"
    ],
    "c": 0
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Was ist das besondere Merkmal vinkulierter Namensaktien?",
    "e": "Dadurch wird die Fungibilität weiter eingeschränkt. (Folie 31)",
    "type": "quiz",
    "a": [
      "Sie haben immer ein zusätzliches Stimmrecht.",
      "Ihre Übertragung erfordert die Zustimmung der Emittentin.",
      "Sie werden immer unter pari ausgegeben.",
      "Sie sind nennwertlos."
    ],
    "c": 1
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Ein Unternehmen kann laut Skript gleichzeitig Nennwertaktien und Stückaktien ausgeben.",
    "e": "Das Skript stellt klar: Entweder Nennwertaktien oder Stückaktien. (Folie 32)",
    "type": "quiz",
    "a": [
      "wahr",
      "falsch"
    ],
    "c": 1
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Was ist eine Anleihe laut Skript?",
    "e": "Der Käufer wird Gläubiger, der Emittent Schuldner. (Folie 36)",
    "type": "quiz",
    "a": [
      "Ein Anteilsrecht an einer AG.",
      "Ein als Wertpapier verbrieftes Forderungsrecht.",
      "Ein nennwertloser Anteil am Grundkapital.",
      "Ein nicht austauschbares Einzelstück."
    ],
    "c": 1
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Welche Synonyme für Anleihen nennt das Skript?",
    "e": "Common Shares bezeichnet Stammaktien. (Folie 36)",
    "type": "flash",
    "ans": "Rentenpapiere; Schuldverschreibungen; Obligationen; Bonds"
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Welche Aussage beschreibt eine festverzinsliche Anleihe korrekt?",
    "e": "Synonyme sind Straight Bonds oder Plain Vanilla Bonds. (Folie 37)",
    "type": "quiz",
    "a": [
      "Schuldverschreibung ohne laufenden Zinskupon.",
      "Schuldverschreibung mit fixem Nominalzins während der gesamten Laufzeit.",
      "Anleihe mit ausschließlich indexierter Verzinsung.",
      "Anleihe mit Bezugsrecht auf Aktien zusätzlich zum Rückzahlungsanspruch."
    ],
    "c": 1
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Welche Merkmale gehören laut Skript zu Nullkuponanleihen?",
    "e": "Halbjährliche Zinszahlung passt nicht zur Nullkuponlogik. (Folie 40)",
    "type": "flash",
    "ans": "Keine laufenden Zinskupons; Synonym: Zero Bonds; Thesaurierung der Zinsen bis zum Fälligkeitstag; Laufzeitenspektrum 10-30 Jahre"
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Was gilt laut Skript, wenn der Kurs einer Anleihe unter pari liegt?",
    "e": "Kurs < pari → YTM > Nominalzins. (Folie 41)",
    "type": "quiz",
    "a": [
      "YTM = Nominalzins",
      "YTM > Nominalzins",
      "YTM < Nominalzins",
      "YTM ist immer negativ"
    ],
    "c": 1
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Warum kann die versprochene YTM von der erwarteten YTM abweichen?",
    "e": "Das Ausfallrisiko muss in der YTM-Berechnung berücksichtigt werden. (Folie 42)",
    "type": "flash",
    "ans": "Weil Kredite einem Ausfallrisiko unterliegen. Die versprochene YTM setzt Rückzahlung gemäß Anleihebedingungen voraus; die erwartete YTM berücksichtigt das Ausfallrisiko."
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Versprochene YTM 18,9 %, Default-YTM -28,7 %, Nicht-Ausfallwahrscheinlichkeit 80 %, Ausfallwahrscheinlichkeit 20 %. Wie hoch ist die erwartete YTM?",
    "e": "18,9 % × 0,8 + (-28,7 %) × 0,2 = 9,4 %. (Folie 43)",
    "type": "quiz",
    "a": [
      "9,4 %",
      "18,9 %",
      "-28,7 %",
      "20,0 %"
    ],
    "c": 0
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Welche Risiken von Anleihen nennt das Skript?",
    "e": "Markenrisiken werden nicht genannt. (Folie 46)",
    "type": "flash",
    "ans": "Bonitäts- oder Ausfallrisiken; Zinsänderungsrisiken; Liquiditätsrisiken; Wiederanlagerisiken; Währungsrisiken; Kündigungsrisiken; Auslosungsrisiken"
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Welche S&P-Ratingklasse ist laut Tabelle noch Investmentqualität?",
    "e": "BB+ gehört bereits zur spekulativen Anlage. (Folie 47)",
    "type": "quiz",
    "a": [
      "BB+",
      "BBB-",
      "B+",
      "CCC"
    ],
    "c": 1
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Was ist ein Schuldscheindarlehen laut Skript?",
    "e": "Das ist die Definition im Skript. (Folie 44)",
    "type": "quiz",
    "a": [
      "Ein verzinsliches Wertpapier, das nicht an der Börse gehandelt wird.",
      "Eine Aktie ohne Stimmrecht.",
      "Eine Anleihe mit Bezugsrecht auf Aktien.",
      "Eine Anleihe ohne Rückzahlungsanspruch."
    ],
    "c": 0
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Was ist eine Wandelanleihe laut Skript?",
    "e": "Sie ist nur für börsennotierte Aktiengesellschaften möglich. (Folie 48)",
    "type": "quiz",
    "a": [
      "Eine Anleihe mit fixem Nominalzins.",
      "Eine Schuldverschreibung mit Umtauschrecht der Anleihe in Aktien des Emittenten.",
      "Eine Anleihe ohne laufenden Zinskupon.",
      "Ein nicht börsengehandeltes Schuldscheindarlehen."
    ],
    "c": 1
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Was passiert nach der Wandlung einer Wandelanleihe?",
    "e": "Das beschreibt die hybride Logik aus Naked Bond und Call. (Folie 48)",
    "type": "flash",
    "ans": "Die Obligation geht unter. Für den Emittenten entfällt die Pflicht zur Zahlung von Zinsen und Tilgung. Der Anleihegläubiger wird Aktionär."
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Welche Voraussetzung nennt das Skript für Optionsanleihen?",
    "e": "Diese Voraussetzung wird ausdrücklich genannt. (Folie 49)",
    "type": "quiz",
    "a": [
      "Ein externer Rating-Downgrade.",
      "Ein HV-Beschluss über bedingte Kapitalerhöhung.",
      "Eine Mindestlaufzeit über 99 Jahre.",
      "Eine Eintragung im Aktienregister."
    ],
    "c": 1
  },
  {
    "topic": "traditionelle-assetklassen",
    "q": "Welche Aussagen zu Hybridanleihen stimmen laut Skript?",
    "e": "Der Gläubiger hat kein ordentliches Kündigungsrecht, der Emittent aber schon. (Folie 50)",
    "type": "flash",
    "ans": "Mischfinanzierungsform zwischen Eigen- und Fremdkapital.; Laufzeitenspektrum von mehr als 99 Jahren.; Grundsätzlich unbesichert mit schuldrechtlichem Nachrang.; Zinszahlungen können verschoben oder ausgesetzt werden."
  }
];

window.QUESTIONS.push(...QUESTIONS);

})();

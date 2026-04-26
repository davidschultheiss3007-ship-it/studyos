/* ══════════════════════════════════════════════════════════════════════
   StudyOS · data/risk.js
   ──────────────────────────────────────────────────────────────────────
   Modul "Finanzinstrumente & Risikomanagement"
   Inhalt 1:1 aus script.js (PASS 3) übernommen — keine inhaltlichen
   Änderungen. Schiebt:
     - 1 Modul-Objekt           → window.MODULES
     - 11 Lernfragen            → window.QUESTIONS
     - 25 Legacy-HTML-Strings   → window.FULL_CONTENT
   ══════════════════════════════════════════════════════════════════════ */
'use strict';

(function () {

/* ── FULL_CONTENT (Legacy HTML, verbatim) ────────────────────────────── */
const FULL_CONTENT = {
"anlagen:Systematisierung": `
<div class="note-page"><h3>Systematisierung der Assetklassen</h3>
<p>Assetklassen sind Gruppen von Vermögenswerten, die sich hinsichtlich Renditequelle, Risiko, Liquidität und Handelbarkeit ähneln. Im Skript wird zwischen standardisierten Assetklassen und alternativen beziehungsweise nicht standardisierten Assetklassen unterschieden.</p>
<div class="note-table"><table><tr><th>Standardisierte Assetklassen</th><th>Alternative Assetklassen</th><th>Didaktische Einordnung</th></tr>
<tr><td>Aktien, Anleihen, Geldmarktinstrumente, Währungen, Rohstoffe, entsprechende Derivate und Fonds.</td><td>Immobilien, Hedgefonds, Private Equity/Venture Capital, Volatilität, Sammlerstücke wie Oldtimer, Kunst, Briefmarken, Uhren sowie entsprechende Fonds.</td><td>Standardisierte Klassen sind meist liquider und transparenter. Alternative Klassen sind oft weniger liquide, komplexer zu bewerten und stärker vom konkreten Marktsegment abhängig.</td></tr></table></div>
<div class="note-callout"><b>Prüfungslogik:</b> Die Einteilung dient nicht nur der Beschreibung, sondern ist Grundlage für Risikomanagement: Jede Assetklasse hat eigene Risikoarten, Renditetreiber und passende Absicherungsinstrumente.</div></div>`,

"anlagen:Aktien": `
<div class="note-page"><h3>Aktien als Eigenkapitalinstrument</h3>
<p>Eine Aktie ist ein Wertpapier, durch das sich ein Anleger am Eigenkapital eines Unternehmens beteiligt. Der Anleger wird Aktionär und damit Miteigentümer. Er trägt unternehmerisches Risiko, kann aber auch an der positiven Wertentwicklung teilnehmen.</p>
<h4>Ziele des Aktionärs</h4><ul><li>Partizipation am Unternehmenserfolg, vor allem über Dividenden und Kursgewinne.</li><li>Teilnahme an der Wertentwicklung des Unternehmens.</li><li>Beteiligung an Kapitalmaßnahmen und gegebenenfalls am Liquidationserlös.</li></ul>
<h4>Ziele des Emittenten</h4><ul><li>Unternehmensfinanzierung mit grundsätzlich unbegrenzter Laufzeit.</li><li>Eigenkapitalaufnahme ohne feste Zins- und Tilgungspflichten.</li><li>Hohe Fungibilität im Vergleich zu anderen Eigenkapitalformen, wenn die Aktie börsennotiert ist.</li></ul>
<div class="note-table"><table><tr><th>Unterscheidung</th><th>Varianten</th><th>Bedeutung</th></tr><tr><td>Kapitaldarstellung</td><td>Nennbetragsaktien vs. Stückaktien</td><td>Fester rechnerischer Anteil oder stückbezogene Beteiligung am Grundkapital.</td></tr><tr><td>Übertragung</td><td>Inhaberaktien vs. Namensaktien</td><td>Unterschiede bei Registerführung und Transparenz der Aktionäre.</td></tr><tr><td>Rechte</td><td>Stammaktien vs. Vorzugsaktien</td><td>Stammaktien typischerweise mit Stimmrecht; Vorzugsaktien oft mit Dividendenvorteil, aber eingeschränktem Stimmrecht.</td></tr></table></div>
<div class="note-callout">Private Equity bezeichnet Beteiligungen an nicht börsennotierten Unternehmen. Es ist also ebenfalls Eigenkapital, aber nicht börslich liquide handelbar.</div></div>`,

"anlagen:Anleihen": `
<div class="note-page"><h3>Anleihen als Fremdkapitalinstrument</h3>
<p>Anleihen sind an Börsen handelbare Fremdfinanzierungsinstrumente. Käufer einer Anleihe werden Gläubiger, Emittenten werden Schuldner. Der Emittent verpflichtet sich zu Zinszahlungen und Rückzahlung nach festgelegten Regeln.</p>
<h4>Grundmerkmale</h4><ul><li>Als Wertpapier verbrieftes Forderungsrecht.</li><li>Synonyme: Rentenpapiere, Schuldverschreibungen, Obligationen, Bonds.</li><li>Emittent unabhängig von der Rechtsform möglich.</li><li>Unbedingte Zinszahlungs- und Tilgungspflichten zu definierten Zeitpunkten.</li><li>Verkauf der Anleihe ohne Zustimmung des Schuldners möglich.</li></ul>
<div class="note-table"><table><tr><th>Anleihetyp</th><th>Merkmal</th><th>Risiko-/Renditelogik</th></tr>
<tr><td>Festverzinsliche Anleihe</td><td>Fixer Kupon über gesamte Laufzeit.</td><td>Kurs reagiert stark auf Marktzinsänderungen.</td></tr>
<tr><td>Floater / FRN</td><td>Zins an Referenzzins wie EURIBOR plus Spread gekoppelt.</td><td>Geringeres Kursrisiko, da Kupon regelmäßig angepasst wird.</td></tr>
<tr><td>Zero Bond</td><td>Keine laufenden Kupons, Rendite über Differenz zwischen Ausgabe- und Rückzahlungspreis.</td><td>Kein Wiederanlagerisiko, aber hohe Zinssensitivität.</td></tr></table></div>
<h4>Clean Price und Dirty Price</h4><p>Beim Kauf zwischen Kuponterminen zahlt der Käufer dem Verkäufer Stückzinsen. Daher gilt:</p><div class="note-formula">Dirty Price = Clean Price + Stückzinsen</div>
<div class="note-callout note-warning"><b>Prüfungsfalle:</b> Kursnotierung und tatsächlich zu zahlender Betrag sind bei Anleihen nicht identisch, wenn Stückzinsen anfallen.</div></div>`,

"kennzahlen:Zinsrechnung": `
<div class="note-page"><h3>Zinsrechnung: Barwert, Endwert und Zinseszins</h3>
<p>Zinsrechnung erklärt, wie sich Kapital über Zeit entwickelt. Sie ist Grundlage für Anleihen, Derivatebewertung, Barwerte und Diskontierung.</p>
<div class="note-grid"><div class="note-card"><b>Einfache Verzinsung</b><p>Zinsen werden nur auf das Anfangskapital berechnet. Das Wachstum ist linear.</p><div class="note-formula">K_T = K_0 · (1 + iT)</div></div><div class="note-card"><b>Zinseszins</b><p>Zinsen werden wieder angelegt und selbst verzinst. Das Wachstum ist exponentiell.</p><div class="note-formula">K_T = K_0 · (1+i)^T</div></div></div>
<h4>Unterjährige und stetige Verzinsung</h4><p>Bei unterjähriger Verzinsung wird der Zinssatz auf mehrere Perioden pro Jahr verteilt. Stetige Verzinsung ist der Grenzfall unendlich häufiger Verzinsung.</p><div class="note-formula">K_T = K_0 · (1 + i/m)^(mT) &nbsp;&nbsp; | &nbsp;&nbsp; K_T = K_0 · e^(iT)</div>
<div class="note-callout">Der Josephspfennig illustriert die extreme Macht des Zinseszinses über lange Zeiträume: Kleine Beträge können bei sehr langer Laufzeit theoretisch riesige Endwerte erreichen.</div></div>`,

"kennzahlen:Renditen": `
<div class="note-page"><h3>Renditen und Durchschnittsbildung</h3>
<p>Renditen messen die Veränderung des Vermögenswertes relativ zum eingesetzten Kapital. Bei Wertpapieren müssen neben Kursänderungen auch Dividenden oder Kupons berücksichtigt werden.</p>
<div class="note-formula">r_t = (P_t + D_t) / P_(t-1) - 1</div>
<div class="note-table"><table><tr><th>Mittelwert</th><th>Einsatz</th><th>Problem / Vorteil</th></tr><tr><td>Arithmetisches Mittel</td><td>Einperiodige Durchschnittsrenditen.</td><td>Kann bei mehrperiodigen Anlagezeiträumen irreführend sein.</td></tr><tr><td>Geometrisches Mittel</td><td>Mehrperiodige Renditen mit Wiederanlage.</td><td>Zeigt die tatsächliche durchschnittliche Wachstumsrate.</td></tr><tr><td>Stetige Rendite</td><td>Log-Renditen, mathematisch gut addierbar.</td><td>Für viele Modelle praktisch, z. B. bei Normalverteilungsannahmen.</td></tr></table></div>
<h4>Beispiel 100 → 200 → 100</h4><p>Jahr 1: +100 %, Jahr 2: -50 %. Arithmetisch ergibt sich +25 %, obwohl der Anleger am Ende wieder bei 100 steht. Das geometrische Mittel ist daher 0 %.</p>
<div class="note-formula">√(2 · 0,5) - 1 = 0 %</div></div>`,

"kennzahlen:Risiko": `
<div class="note-page"><h3>Risiko als Streuung</h3>
<p>Im finanzwirtschaftlichen Sinn bedeutet Risiko nicht nur Verlustgefahr, sondern allgemein Abweichung vom erwarteten Ergebnis. Positive und negative Abweichungen werden zunächst symmetrisch betrachtet.</p>
<h4>Erwartungswert</h4><p>Die erwartete Rendite ist die wahrscheinlichkeitsgewichtete Rendite über alle Szenarien.</p><div class="note-formula">μ = Σ p_i · r_i</div>
<h4>Volatilität / Standardabweichung</h4><p>Die Standardabweichung misst, wie stark einzelne Renditen um den Mittelwert schwanken. Je höher die Volatilität, desto unsicherer ist das Ergebnis.</p><div class="note-formula">s = √[1/(n-1) · Σ(r_t - r̄)²]</div>
<div class="note-callout">Börsensprachlich wird Standardabweichung häufig einfach „Vola“ genannt. Sie ist eine zentrale Risikokennzahl, aber sie bestraft positive und negative Abweichungen gleich.</div></div>`,

"kennzahlen:Höhere Momente": `
<div class="note-page"><h3>Schiefe und Wölbung</h3>
<p>Volatilität allein reicht nicht aus, weil zwei Anlagen dieselbe Schwankung haben können, aber völlig unterschiedliche Verlustprofile. Deshalb betrachtet man höhere Momente.</p>
<div class="note-table"><table><tr><th>Kennzahl</th><th>Bedeutung</th><th>Interpretation</th></tr><tr><td>Skewness / Schiefe</td><td>Asymmetrie der Verteilung.</td><td>Rechtsschief: kleine Verluste, selten große Gewinne. Linksschief: kleine Gewinne, selten große Verluste.</td></tr><tr><td>Kurtosis / Wölbung</td><td>Stärke der Extremwerte in den Verteilungsenden.</td><td>Hohe Kurtosis bedeutet Fat Tails, also mehr Extremereignisse als in der Normalverteilung.</td></tr></table></div>
<div class="note-callout note-warning"><b>Kapitalmarkt-Befund:</b> Renditen sind häufig linksschief und haben fette Enden. Eine reine Normalverteilungsannahme unterschätzt deshalb Extremrisiken.</div></div>`,

"kennzahlen:Duration": `
<div class="note-page"><h3>Duration, Modified Duration und Konvexität</h3>
<p>Bei Anleihen ist Zinsänderungsrisiko zentral. Wenn Marktzinsen steigen, fallen Anleihekurse; wenn Marktzinsen fallen, steigen Anleihekurse.</p>
<h4>Macaulay-Duration</h4><p>Die Macaulay-Duration ist die gewichtete durchschnittliche Kapitalbindungsdauer der Zahlungsströme. Sie zeigt, wann sich Marktwerteffekt und Wiederanlageeffekt ungefähr ausgleichen.</p>
<h4>Modified Duration</h4><p>Die Modified Duration zeigt näherungsweise die prozentuale Kursänderung einer Anleihe bei einer kleinen Zinsänderung.</p><div class="note-formula">ΔP/P ≈ -MD · Δr</div>
<h4>Konvexität</h4><p>Die Preis-Zins-Beziehung ist nicht linear, sondern gekrümmt. Die Duration ist daher nur eine Näherung; Konvexität verbessert die Schätzung.</p>
<div class="note-formula">ΔP/P ≈ -MD · Δr + 1/2 · C · (Δr)²</div></div>`,

"derivate:Kassa- vs. Terminmarkt": `
<div class="note-page"><h3>Kassamarkt vs. Terminmarkt</h3>
<p>Am Kassamarkt wird ein Geschäft sofort erfüllt. Am Terminmarkt wird der Vertrag heute geschlossen, die Erfüllung erfolgt aber zu einem späteren Zeitpunkt.</p>
<div class="note-table"><table><tr><th>Markt</th><th>Erfüllung</th><th>Beispiel</th></tr><tr><td>Kassamarkt</td><td>Sofortige Lieferung und Zahlung.</td><td>Aktienkauf heute zum aktuellen Kurs.</td></tr><tr><td>Terminmarkt</td><td>Vertrag heute, Erfüllung später.</td><td>Future auf DAX mit Fälligkeit in drei Monaten.</td></tr></table></div>
<h4>Bedingt vs. unbedingt</h4><ul><li>Unbedingte Termingeschäfte: Beide Parteien haben eine Erfüllungspflicht, z. B. Futures und Forwards.</li><li>Bedingte Termingeschäfte: Nur eine Partei hat eine Pflicht; der Käufer hat ein Recht, z. B. Optionen.</li></ul></div>`,

"derivate:Forwards & Futures": `
<div class="note-page"><h3>Forwards und Futures</h3>
<p>Forwards und Futures verpflichten Käufer und Verkäufer, ein bestimmtes Underlying zu einem bestimmten zukünftigen Zeitpunkt zu einem heute vereinbarten Preis zu kaufen beziehungsweise zu verkaufen.</p>
<div class="note-formula">Long Future: Gewinn = S_T - F &nbsp;&nbsp; | &nbsp;&nbsp; Short Future: Gewinn = F - S_T</div>
<div class="note-table"><table><tr><th>Kriterium</th><th>Forward</th><th>Future</th></tr><tr><td>Handel</td><td>OTC, bilateral</td><td>Börsengehandelt</td></tr><tr><td>Standardisierung</td><td>Individuell</td><td>Standardisiert</td></tr><tr><td>Ausfallrisiko</td><td>Höher, da Counterparty-Risiko</td><td>Geringer durch Clearingstelle</td></tr><tr><td>Liquidität</td><td>Oft geringer</td><td>Meist hoch</td></tr><tr><td>Margins</td><td>Typischerweise keine tägliche Börsenmargin</td><td>Initial, Variation und Maintenance Margin</td></tr></table></div>
<h4>Margins</h4><p>Margins sind Sicherheitsleistungen. Initial Margin wird bei Eröffnung gestellt, Variation Margin verrechnet tägliche Gewinne und Verluste, Maintenance Margin ist die Untergrenze, bei deren Unterschreiten Nachschusspflicht entsteht.</p></div>`,

"derivate:Optionen": `
<div class="note-page"><h3>Optionen: Recht statt Pflicht</h3>
<p>Eine Option gibt dem Käufer das Recht, ein bestimmtes Gut in bestimmter Menge zu einem vorher festgelegten Preis bis zu oder an einem bestimmten Zeitpunkt zu kaufen oder zu verkaufen.</p>
<div class="note-grid"><div class="note-card"><b>Call</b><p>Kaufoption. Der Käufer darf den Basiswert zum Strike kaufen.</p></div><div class="note-card"><b>Put</b><p>Verkaufsoption. Der Käufer darf den Basiswert zum Strike verkaufen.</p></div></div>
<h4>Vier Grundpositionen</h4><div class="note-table"><table><tr><th>Position</th><th>Erwartung</th><th>Risiko</th><th>Gewinnpotenzial</th></tr><tr><td>Long Call</td><td>Steigende Kurse</td><td>Prämie</td><td>Unbegrenzt</td></tr><tr><td>Short Call</td><td>Seitwärts/fallend</td><td>Unbegrenzt</td><td>Prämie</td></tr><tr><td>Long Put</td><td>Fallende Kurse</td><td>Prämie</td><td>Bis Strike abzüglich Prämie</td></tr><tr><td>Short Put</td><td>Seitwärts/steigend</td><td>Bis Underlying theoretisch null</td><td>Prämie</td></tr></table></div>
<div class="note-formula">Call Payoff = max(S_T - X, 0) &nbsp;&nbsp; | &nbsp;&nbsp; Put Payoff = max(X - S_T, 0)</div></div>`,

"optionstrat:Long / Short Straddle": `
<div class="note-page"><h3>Long und Short Straddle</h3>
<p>Ein Straddle kombiniert einen Call und einen Put mit identischem Strike und gleicher Laufzeit. Er ist eine Strategie auf Volatilität, nicht primär auf Richtung.</p>
<div class="note-grid"><div class="note-card"><b>Long Straddle</b><p>Kauf Call + Kauf Put. Erwartung: starke Bewegung nach oben oder unten. Verlust begrenzt auf beide Prämien.</p></div><div class="note-card"><b>Short Straddle</b><p>Verkauf Call + Verkauf Put. Erwartung: geringe Kursbewegung. Gewinn begrenzt auf Prämien, Verlust sehr hoch.</p></div></div>
<div class="note-callout">Merksatz: Long Straddle kauft Volatilität; Short Straddle verkauft Volatilität.</div></div>`,

"optionstrat:Strangle": `
<div class="note-page"><h3>Long und Short Strangle</h3>
<p>Beim Strangle liegen die Strikes auseinander: Put mit niedrigerem Strike, Call mit höherem Strike. Dadurch ist die Strategie günstiger als ein Straddle, benötigt aber stärkere Kursbewegungen.</p>
<div class="note-table"><table><tr><th>Strategie</th><th>Aufbau</th><th>Erwartung</th></tr><tr><td>Long Strangle</td><td>Long Put mit niedrigerem Strike + Long Call mit höherem Strike.</td><td>Stark steigende oder fallende Kurse.</td></tr><tr><td>Short Strangle</td><td>Short Put mit niedrigerem Strike + Short Call mit höherem Strike.</td><td>Schwache Kursbewegung, größerer Gewinnbereich als Short Straddle.</td></tr></table></div></div>`,

"optionstrat:Synthetische Positionen": `
<div class="note-page"><h3>Synthetischer Aktienkauf und Aktienverkauf</h3>
<p>Optionen können Aktienpositionen nachbilden. Das ist eine direkte Anwendung der Put-Call-Parität.</p>
<div class="note-table"><table><tr><th>Synthetische Position</th><th>Aufbau</th><th>Entspricht</th></tr><tr><td>Synthetischer Aktienkauf</td><td>Long Call + Short Put mit identischem Strike</td><td>Long Aktie</td></tr><tr><td>Synthetischer Aktienverkauf</td><td>Short Call + Long Put mit identischem Strike</td><td>Short Aktie / Leerverkauf</td></tr></table></div>
<div class="note-formula">S = C - P + X·e^{-rT}</div></div>`,

"optionstrat:Spreads": `
<div class="note-page"><h3>Bull Spread, Bear Spread und Butterfly</h3>
<p>Spreads kombinieren Optionen desselben Typs mit unterschiedlichen Basispreisen. Dadurch werden Gewinn und Verlust gezielt begrenzt.</p>
<div class="note-table"><table><tr><th>Strategie</th><th>Aufbau</th><th>Markterwartung</th></tr><tr><td>Bull Spread</td><td>Kauf Call mit niedrigem Strike, Verkauf Call mit höherem Strike; alternativ über Puts konstruierbar.</td><td>Moderat steigende Märkte.</td></tr><tr><td>Bear Spread</td><td>Kauf Call mit höherem Strike, Verkauf Call mit niedrigerem Strike; alternativ über Puts konstruierbar.</td><td>Moderat fallende Märkte.</td></tr><tr><td>Long Butterfly</td><td>Long Call X1, 2× Short Call X2, Long Call X3 bei gleichen Strike-Abständen.</td><td>Geringe Kursbewegung bis Laufzeitende.</td></tr></table></div>
<div class="note-callout">Der Butterfly ähnelt gedanklich einem Short Straddle, aber mit begrenztem Verlustrisiko.</div></div>`,

"optionstrat:Exotische Optionen": `
<div class="note-page"><h3>Exotische Optionen</h3><p>Exotische Optionen weichen von klassischen Plain-Vanilla-Optionen ab. Die Abweichung kann Auszahlung, Basispreislogik, Ausübungsrecht oder Underlying betreffen.</p>
<div class="note-table"><table><tr><th>Variation</th><th>Beispiel</th><th>Erklärung</th></tr><tr><td>Auszahlungsfunktion</td><td>Binary Option</td><td>Fixe Auszahlung, wenn Bedingung erfüllt ist. Reine Wetten.</td></tr><tr><td>Basispreis/Zeitbezug</td><td>Asiatische Option</td><td>Auszahlung basiert auf Durchschnittskurs statt Endkurs. Pfadabhängig und meist günstiger.</td></tr><tr><td>Ausübungsrecht</td><td>Barrier Option</td><td>Option hängt zusätzlich von einer Barriere ab, z. B. Down-and-Out-Put.</td></tr><tr><td>Basisinstrument</td><td>Basket / Compound Option</td><td>Underlying ist ein Korb oder eine andere Option.</td></tr></table></div></div>`,

"struktur:Definition": `
<div class="note-page"><h3>Strukturierte Produkte: Definition und Grundidee</h3>
<p>Ein strukturiertes Finanzprodukt ist eine Anlageform, die aus der Kombination von zwei oder mehreren Finanzinstrumenten besteht, davon mindestens ein Derivat. Durch die Kombination entstehen neue Auszahlungsströme und Risikoszenarien.</p>
<p>Die Besonderheit gegenüber einer bloßen Optionsstrategie besteht darin, dass die Einzelbestandteile zu einer rechtlichen und wirtschaftlichen Einheit zusammengefasst werden. Formal kann eine Bank beispielsweise eine Inhaberschuldverschreibung emittieren, deren Rückzahlungsversprechen dem Auszahlungsprofil des Kombinationsprodukts entspricht.</p>
<div class="note-callout">Synonyme: Zertifikat, Finanzinnovation, strukturiertes Anlageprodukt.</div></div>`,

"struktur:Risiken": `
<div class="note-page"><h3>Vorteile, Nachteile und Kritik an Zertifikaten</h3>
<div class="note-table"><table><tr><th>Vorteile</th><th>Nachteile</th></tr><tr><td>Auszahlungsprofile, die mit Standardanlageformen nicht erreichbar sind.</td><td>Begrenzte Laufzeit, außer Open-End-Zertifikate.</td></tr><tr><td>Erweiterung der Handlungsspielräume für Privatanleger, z. B. Short-Exposure.</td><td>Häufig Verzicht auf Dividenden oder laufende Erträge.</td></tr><tr><td>Ermöglichen Teilabsicherung, Discount, Bonus oder Garantieprofile.</td><td>Pricing während der Laufzeit oft schwer nachvollziehbar.</td></tr><tr><td></td><td>Emittentenrisiko, Bonitätsrisiko und Liquiditätsrisiko.</td></tr></table></div>
<div class="note-callout note-warning">Wirecard-/Lehman-Lehre: Zertifikate sind keine Fondsanteile und kein Sondervermögen. Anleger tragen zusätzlich das Risiko des Emittenten und müssen Prospektbedingungen wie Kündigungsrechte beachten.</div></div>`,

"struktur:Garantiezertifikat": `
<div class="note-page"><h3>Garantiezertifikat</h3><p>Garantiezertifikate begrenzen das Verlustpotenzial durch eine garantierte Mindestrückzahlung zum Laufzeitende. Diese Garantie wirkt nicht zwingend während der Laufzeit, sondern grundsätzlich am Ende.</p>
<h4>Finanztechnische Kombination</h4><div class="note-formula">Garantiezertifikat = Zero Bond + Long Call</div>
<ul><li>Zero Bond: wächst bis Laufzeitende auf den garantierten Betrag an.</li><li>Long Call: ermöglicht Partizipation an steigenden Kursen des Underlyings.</li></ul>
<h4>Partizipationsquote</h4><p>Die Garantie wird dadurch erkauft, dass die Teilnahme an Kurssteigerungen oft unter 100 % liegt. Einflussfaktoren sind Volatilität, risikoloser Zins, Laufzeit und Absicherungsniveau.</p>
<div class="note-table"><table><tr><th>Faktor</th><th>Wirkung auf Partizipation</th><th>Grund</th></tr><tr><td>Volatilität steigt</td><td>sinkt</td><td>Call wird teurer.</td></tr><tr><td>Risikoloser Zins steigt</td><td>tendenziell steigt</td><td>Zero Bond günstiger, mehr Budget für Option.</td></tr><tr><td>Laufzeit steigt</td><td>tendenziell steigt im Skript durch Diskontierungseffekt</td><td>Mehr Risikokapital für Optionskauf.</td></tr><tr><td>Absicherungsniveau sinkt</td><td>steigt</td><td>Weniger Kapital wird für Garantie benötigt.</td></tr></table></div></div>`,

"struktur:Discountzertifikat": `
<div class="note-page"><h3>Discountzertifikat</h3><p>Beim Discountzertifikat erhält der Anleger einen Rabatt auf das Underlying. Dafür gibt er die Chance auf unbegrenzte Kursgewinne oberhalb eines Caps ab.</p>
<div class="note-formula">Discountzertifikat = Long Underlying / Zero-Strike-Call + Short Call</div>
<h4>Wirkung</h4><ul><li>Bei stagnierenden oder leicht fallenden Kursen kann eine positive Rendite entstehen.</li><li>Bei stark steigenden Kursen ist die Rendite durch den Cap begrenzt.</li><li>Bei starken Kursverlusten trägt der Anleger weiterhin Verlustrisiko, aber abgemildert durch den Discount.</li></ul>
<div class="note-callout">Der Käufer eines Discountzertifikats ist ökonomisch Verkäufer von Volatilität, weil im Produkt ein Call verkauft wird. Sinkende Volatilität und Zeitablauf helfen dem Anleger.</div></div>`,

"struktur:Bonuszertifikat": `
<div class="note-page"><h3>Bonuszertifikat</h3><p>Bonuszertifikate bieten eine Teilabsicherung gegen Kursverluste bis zu einer Kursschwelle. Solange diese Barriere während der Laufzeit nicht berührt oder unterschritten wird, erhält der Anleger bei Fälligkeit mindestens den Bonusbetrag.</p>
<div class="note-formula">Bonuszertifikat = Zero-Strike-Call + Down-and-Out-Put</div>
<ul><li>Kursschwelle typischerweise 20–40 % unter Startkurs.</li><li>Bonus-Level typischerweise 10–30 % über Startkurs.</li><li>Über dem Bonus-Level unbegrenzte Partizipation an Kursgewinnen.</li><li>Wird die Barriere verletzt, entfällt die Schutz-/Bonuskomponente.</li></ul>
<h4>Rolle von Dividenden</h4><p>Dividenden des Underlyings erhält der Zertifikateanleger nicht direkt. Höhere Dividendenrenditen können aber die Strukturierung verbessern, weil der Zero-Strike-Call günstiger wird und mehr Kapital für den Down-and-Out-Put verfügbar ist.</p></div>`,

"bewertung:Cost of Carry": `
<div class="note-page"><h3>Cost of Carry und Futurebewertung</h3>
<p>Die Bewertung von Futures und Forwards erfolgt über den Cost-of-Carry-Ansatz. Ausgangspunkt ist das No-Arbitrage-Prinzip: Zwei Wege, die zum selben Endergebnis führen, müssen denselben heutigen Wert haben.</p>
<h4>Zwei Wege zum Besitz bei Fälligkeit</h4><ol><li>Basisgut heute kaufen und bis Fälligkeit halten.</li><li>Future/Forward heute abschließen und Basisgut bei Fälligkeit beziehen.</li></ol>
<p>Die Haltekosten des ersten Wegs heißen Cost of Carry. Dazu zählen Finanzierungskosten und Lagerkosten; Erträge wie Dividenden oder Convenience Yield werden abgezogen.</p>
<div class="note-formula">F₀ = S₀ · e^(rT) &nbsp; ohne Erträge</div><div class="note-formula">F₀ = S₀ · e^((r-q)T) &nbsp; bei Dividendenrendite q</div>
<div class="note-formula">F₀ = S₀ · e^((r+u-y)T) &nbsp; bei Rohstoffen mit Lagerkosten u und Convenience Yield y</div></div>`,

"bewertung:Arbitrage": `
<div class="note-page"><h3>Cash & Carry und Reverse Cash & Carry</h3>
<p>Arbitrage entsteht, wenn Terminpreis und Kassapreis plus Carry-Kosten nicht zusammenpassen.</p>
<div class="note-table"><table><tr><th>Situation</th><th>Strategie</th><th>Logik</th></tr><tr><td>S₀ + CoC &lt; F₀</td><td>Cash & Carry</td><td>Spot kaufen, Future verkaufen. Der Future ist zu teuer.</td></tr><tr><td>S₀ + CoC &gt; F₀</td><td>Reverse Cash & Carry</td><td>Spot verkaufen/leerverkaufen, Future kaufen. Der Future ist zu billig.</td></tr></table></div>
<h4>Skriptbeispiel</h4><p>Spot 100 €, Laufzeit 3 Monate, risikoloser Zins 3,25 %. Fairer Terminkurs ca. 100,82 €. Wenn der Future bei 102 € liegt, kann durch Cash & Carry ein risikoloser Gewinn von 1,18 € erzielt werden.</p></div>`,

"bewertung:Contango & Backwardation": `
<div class="note-page"><h3>Contango, Backwardation und Rollrenditen</h3>
<div class="note-table"><table><tr><th>Begriff</th><th>Bedeutung</th><th>Typische Erklärung</th></tr><tr><td>Contango</td><td>Futurekurse sind höher, je länger die Laufzeit.</td><td>Lagerkosten, Finanzierungskosten, geringere Liquidität am langen Ende.</td></tr><tr><td>Backwardation</td><td>Futurekurse sind niedriger, je länger die Laufzeit; nahe Kontrakte sind teurer.</td><td>Knappheit, hoher Nutzen sofortiger Verfügbarkeit, hohe Convenience Yield.</td></tr></table></div>
<h4>Rollrendite</h4><p>Wer in Rohstoff-Futures investiert, will meist keine physische Lieferung. Deshalb wird der auslaufende Kontrakt verkauft und ein neuer längerer gekauft. In Backwardation kann der Anleger günstiger nachkaufen und profitiert. In Contango muss teurer nachgekauft werden, was Rendite kostet.</p>
<div class="note-callout note-warning">Fall Metallgesellschaft: Langfristige Lieferverpflichtungen wurden mit kurzlaufenden Futures gehedgt. In Contango wurden rollierende Hedges systematisch belastet, Margin Calls entstanden.</div></div>`,

"bewertung:Optionswert": `
<div class="note-page"><h3>Innerer Wert und Zeitwert einer Option</h3>
<p>Die Optionsprämie besteht aus innerem Wert und Zeitwert. Der innere Wert ist der Vorteil, der bei sofortiger Ausübung realisiert werden könnte. Der Zeitwert ist der Wert der Chance, dass sich der Basiswert bis zur Fälligkeit noch vorteilhaft entwickelt.</p>
<div class="note-grid"><div class="note-card"><b>Call</b><div class="note-formula">max(S - X, 0)</div></div><div class="note-card"><b>Put</b><div class="note-formula">max(X - S, 0)</div></div></div>
<h4>Moneyness</h4><ul><li>In the money: positive Ausübung wäre vorteilhaft.</li><li>At the money: Kurs ungefähr gleich Strike.</li><li>Out of the money: Ausübung wäre nicht vorteilhaft.</li></ul>
<div class="note-callout">Der Zeitwert ist typischerweise bei At-the-Money-Optionen am höchsten, weil dort die Unsicherheit über die spätere Vorteilhaftigkeit besonders groß ist.</div></div>`,

"bewertung:Greeks": `
<div class="note-page"><h3>Greeks: Sensitivitäten des Optionswerts</h3>
<p>Die Greeks zeigen, wie der Optionspreis auf Veränderungen einzelner Einflussfaktoren reagiert. Sie sind zentral für Risikomanagement, Hedging und Emittentensteuerung.</p>
<div class="note-table"><table><tr><th>Greek</th><th>Variable</th><th>Interpretation</th><th>Typischer Effekt</th></tr><tr><td>Delta</td><td>Kurs des Underlyings</td><td>Änderung des Optionspreises bei Kursänderung.</td><td>Call positiv, Put negativ.</td></tr><tr><td>Gamma</td><td>Kurs des Underlyings</td><td>Änderung des Deltas bei Kursänderung.</td><td>Maximal bei ATM.</td></tr><tr><td>Vega</td><td>Volatilität</td><td>Änderung des Optionspreises bei Volatilitätsänderung.</td><td>Für Standardoptionen positiv.</td></tr><tr><td>Theta</td><td>Restlaufzeit</td><td>Zeitwertverfall pro Zeitablauf.</td><td>Für Käufer negativ.</td></tr><tr><td>Rho</td><td>Zins</td><td>Änderung des Optionspreises bei Zinsänderung.</td><td>Call positiv, Put negativ.</td></tr></table></div>
<div class="note-callout">Delta-Hedging ist dynamisch, weil sich Delta durch Kursbewegungen und Zeitablauf verändert. Gamma erklärt den Fehler einer rein linearen Delta-Absicherung.</div></div>`,

"bewertung:Binomialmodell": `
<div class="note-page"><h3>Binomialmodell</h3><p>Das Binomialmodell bewertet Optionen, indem der Kurs des Basiswerts in diskreten Schritten nur steigen oder fallen kann. Der heutige Optionswert ist der risikoneutral erwartete und diskontierte Endwert.</p>
<h4>Prämissen</h4><ul><li>Freier Marktzugang.</li><li>Keine Friktionen wie Transaktions- oder Informationskosten.</li><li>Leerverkäufe möglich.</li><li>Risikofreie Geldanlage und Kreditaufnahme zu konstantem Zinssatz.</li><li>Kurse folgen einem Binomialpfad.</li></ul>
<div class="note-formula">p = (e^(rT) - d) / (u - d)</div><div class="note-formula">C₀ = [p · C_u + (1-p) · C_d] / e^(rT)</div>
<p>Im Skriptbeispiel ergibt sich für den Call ein heutiger Wert von ca. 7,35 €.</p></div>`,

"bewertung:Put-Call-Parität": `
<div class="note-page"><h3>Put-Call-Parität</h3><p>Die Put-Call-Parität zeigt, dass bestimmte Portfolios aus Aktie, Call, Put und risikoloser Anlage bei Fälligkeit identische Auszahlungen erzeugen müssen. Nach dem Law of One Price müssen sie daher heute denselben Wert haben.</p>
<div class="note-formula">C + X·e^(-rT) = P + S</div>
<p>Links steht ein Call plus abgezinster Strike. Rechts steht ein Put plus Aktie. Beide Portfolios liefern bei Fälligkeit dasselbe Ergebnis, egal ob der Aktienkurs über oder unter dem Strike liegt.</p>
<div class="note-callout">Anwendung: synthetischer Aktienkauf, synthetischer Leerverkauf, Arbitrageprüfung und Verständnis vieler Optionsstrategien.</div></div>`,

"bewertung:Black-Scholes-Merton": `
<div class="note-page"><h3>Black-Scholes-Merton-Modell</h3><p>Das BSM-Modell ist das Standardmodell zur Bewertung europäischer Optionen. Es entsteht als Grenzfall des Binomialmodells, wenn die Perioden sehr klein werden.</p>
<h4>Zentrale Annahmen</h4><ul><li>Kontinuierlicher Handel.</li><li>Kurse folgen einem Random Walk; stetige Renditen sind normalverteilt.</li><li>Vollkommener Kapitalmarkt mit beliebiger Teilbarkeit und Leerverkäufen.</li><li>Europäische Optionen.</li><li>Keine Auszahlungen des Basisinstruments während der Laufzeit, z. B. keine Dividenden.</li></ul>
<div class="note-formula">C = S₀ · N(d₁) - X · e^(-rT) · N(d₂)</div>
<div class="note-formula">d₁ = [ln(S₀/X) + (r + σ²/2)T] / [σ√T] &nbsp;&nbsp; | &nbsp;&nbsp; d₂ = d₁ - σ√T</div>
<div class="note-callout">Die implizite Volatilität ist die Volatilität, die aus Marktpreisen von Optionen abgeleitet wird. Sie kann deutlich von historischer Volatilität abweichen.</div></div>`
};

const _riskDuplicateLegacyKeys = Object.keys(FULL_CONTENT).filter(k => Object.prototype.hasOwnProperty.call(window.FULL_CONTENT, k));
if (_riskDuplicateLegacyKeys.length) {
  console.warn('[StudyOS] Duplicate FULL_CONTENT keys in data/risk.js:', _riskDuplicateLegacyKeys);
}
Object.assign(window.FULL_CONTENT, FULL_CONTENT);

/* ── MODULES (Data Layer · 3 Ebenen, verbatim) ───────────────────────── */
const MODULES = [
  {
    id: 'risk',
    title: 'Finanzinstrumente & Risikomanagement',
    subtitle: 'Derivate, Optionen, Kennzahlen, Bewertung',
    icon: 'chart',
    color: 'cyan',
    topics: [
      { id: 'anlagen', title: '1. Anlageklassen',
        intro: 'Grundlage: Finanzmärkte lassen sich in standardisierte und alternative Assetklassen gliedern. Ziel ist, Renditequellen und Risiken einzuordnen.',
        subtopics: [
          { id: 'systematisierung', title: 'Systematisierung', legacyKey: 'anlagen:Systematisierung' },
          { id: 'aktien',           title: 'Aktien',           legacyKey: 'anlagen:Aktien' },
          { id: 'anleihen',         title: 'Anleihen',         legacyKey: 'anlagen:Anleihen' }
        ]
      },
      { id: 'kennzahlen', title: '2. Risiko- & Ertragskennziffern',
        intro: 'Mathematische Grundlage: Zinsen, Renditen, Durchschnittsbildung, Risiko, Volatilität, Normalverteilung und Duration.',
        subtopics: [
          { id: 'zinsrechnung',    title: 'Zinsrechnung',     legacyKey: 'kennzahlen:Zinsrechnung' },
          { id: 'renditen',        title: 'Renditen',         legacyKey: 'kennzahlen:Renditen' },
          { id: 'risiko',          title: 'Risiko',           legacyKey: 'kennzahlen:Risiko' },
          { id: 'hoehere-momente', title: 'Höhere Momente',   legacyKey: 'kennzahlen:Höhere Momente' },
          { id: 'duration',        title: 'Duration',         legacyKey: 'kennzahlen:Duration' }
        ]
      },
      { id: 'derivate', title: '3. Derivate',
        intro: 'Derivate sind Finanzkontrakte, deren Wert von einem Basisinstrument abgeleitet wird. Sie dienen Hedging, Spekulation und Arbitrage.',
        subtopics: [
          { id: 'kassa-termin',     title: 'Kassa- vs. Terminmarkt', legacyKey: 'derivate:Kassa- vs. Terminmarkt' },
          { id: 'forwards-futures', title: 'Forwards & Futures',     legacyKey: 'derivate:Forwards & Futures' },
          { id: 'optionen',         title: 'Optionen',               legacyKey: 'derivate:Optionen' },
          { id: 'settlement',       title: 'Settlement',
            blocks: [
              { type: 'text', content: 'Die Erfüllung von Derivatkontrakten erfolgt typischerweise auf einem von drei Wegen.' },
              { type: 'list', items: [
                'Cash Settlement: Barausgleich der Differenz zwischen vereinbartem und tatsächlichem Kurs.',
                'Physische Lieferung: Der Basiswert wird tatsächlich übertragen.',
                'Glattstellung: Eröffnung einer Gegenposition vor Fälligkeit, sodass sich Pflichten gegenseitig aufheben.'
              ]},
              { type: 'callout', variant: 'info', content: 'Börsengehandelte Index-Futures werden meist in bar abgewickelt; Rohstoff-Futures häufig physisch geliefert.' }
            ]
          }
        ]
      },
      { id: 'optionstrat', title: '4. Optionsstrategien',
        intro: 'Durch Kombination von Optionen lassen sich gezielte Auszahlungsprofile bauen: Volatilitätswetten, Trendstrategien, synthetische Aktienpositionen und Exotics.',
        subtopics: [
          { id: 'straddle',     title: 'Long / Short Straddle',   legacyKey: 'optionstrat:Long / Short Straddle' },
          { id: 'strangle',     title: 'Strangle',                legacyKey: 'optionstrat:Strangle' },
          { id: 'synthetische', title: 'Synthetische Positionen', legacyKey: 'optionstrat:Synthetische Positionen' },
          { id: 'spreads',      title: 'Spreads',                 legacyKey: 'optionstrat:Spreads' },
          { id: 'exotics',      title: 'Exotische Optionen',      legacyKey: 'optionstrat:Exotische Optionen' }
        ]
      },
      { id: 'struktur', title: '5. Strukturierte Produkte',
        intro: 'Strukturierte Produkte kombinieren mehrere Finanzinstrumente, davon mindestens ein Derivat, zu einer rechtlichen und wirtschaftlichen Einheit.',
        subtopics: [
          { id: 'definition',  title: 'Definition',         legacyKey: 'struktur:Definition' },
          { id: 'risiken',     title: 'Risiken',            legacyKey: 'struktur:Risiken' },
          { id: 'garantie',    title: 'Garantiezertifikat', legacyKey: 'struktur:Garantiezertifikat' },
          { id: 'discount',    title: 'Discountzertifikat', legacyKey: 'struktur:Discountzertifikat' },
          { id: 'bonus',       title: 'Bonuszertifikat',    legacyKey: 'struktur:Bonuszertifikat' }
        ]
      },
      { id: 'bewertung', title: '6. Bewertung von Derivaten',
        intro: 'Bewertung basiert auf No-Arbitrage, Replikation und Wahrscheinlichkeitsmodellen: Cost of Carry, innerer Wert, Zeitwert, Greeks, Binomialmodell, Black-Scholes.',
        subtopics: [
          { id: 'cost-of-carry', title: 'Cost of Carry',          legacyKey: 'bewertung:Cost of Carry' },
          { id: 'arbitrage',     title: 'Arbitrage',              legacyKey: 'bewertung:Arbitrage' },
          { id: 'contango',      title: 'Contango & Backwardation', legacyKey: 'bewertung:Contango & Backwardation' },
          { id: 'optionswert',   title: 'Optionswert',            legacyKey: 'bewertung:Optionswert' },
          { id: 'greeks',        title: 'Greeks',                 legacyKey: 'bewertung:Greeks' },
          { id: 'binomial',      title: 'Binomialmodell',         legacyKey: 'bewertung:Binomialmodell' },
          { id: 'put-call',      title: 'Put-Call-Parität',       legacyKey: 'bewertung:Put-Call-Parität' },
          { id: 'black-scholes', title: 'Black-Scholes-Merton',   legacyKey: 'bewertung:Black-Scholes-Merton' }
        ]
      }
    ]
  }
];

window.MODULES.push(...MODULES);

/* ── QUESTIONS (Quiz-Pool, verbatim) ─────────────────────────────────── */
const QUESTIONS = [
  { topic:'derivate',    type:'quiz',  q:'Was unterscheidet eine Option grundlegend von einem Future?', a:['Option = Recht, Future = beidseitige Pflicht','Option = immer börsengehandelt, Future = immer OTC','Option hat keinen Basiswert','Future hat asymmetrisches Payoff'], c:0, e:'Optionen sind bedingte Termingeschäfte: Der Käufer hat ein Recht, aber keine Pflicht.' },
  { topic:'bewertung',   type:'quiz',  q:'Wofür steht CoC bei der Futurebewertung?', a:['Cost of Carry','Cash on Contract','Credit of Counterparty','Call over Commodity'], c:0, e:'Cost of Carry sind die Haltekosten bzw. -erträge des Basiswerts bis zur Fälligkeit.' },
  { topic:'kennzahlen',  type:'quiz',  q:'Welche Durchschnittsrendite ist für mehrperiodige Anlagezeiträume meist korrekt?', a:['Geometrisches Mittel','Arithmetisches Mittel','Median','Modus'], c:0, e:'Das geometrische Mittel berücksichtigt Wiederanlage und Zinseszinseffekt.' },
  { topic:'optionstrat', type:'quiz',  q:'Welche Markterwartung passt zum Long Straddle?', a:['Starke Bewegung, Richtung egal','Seitwärtsmarkt','Moderat steigende Kurse','Sicher fallende Volatilität'], c:0, e:'Long Straddle profitiert von hoher Volatilität, egal ob nach oben oder unten.' },
  { topic:'struktur',    type:'quiz',  q:'Welche Kombination steckt typischerweise hinter einem Garantiezertifikat?', a:['Zero Bond + Long Call','Long Aktie + Short Call','Short Put + Short Call','Future + Swap'], c:0, e:'Der Zero Bond sichert die Rückzahlung, der Call ermöglicht Partizipation.' },
  { topic:'bewertung',   type:'task',  q:'Eine Aktie steht bei 100€, risikoloser Zins 3%, Laufzeit 1 Jahr, keine Dividenden. Was ist näherungsweise der faire Forwardpreis?', ans:'Etwa 103,05€ bei stetiger Verzinsung: F₀ = 100 · e^0,03.', e:'Bei einfachen Prüfungsaufgaben reicht oft näherungsweise 103€.' },
  { topic:'kennzahlen',  type:'task',  q:'Ein Investment steigt von 100 auf 200 und fällt danach zurück auf 100. Wie hoch ist die geometrische Durchschnittsrendite über zwei Perioden?', ans:'0%. Produkt: 2 · 0,5 = 1; Wurzel aus 1 minus 1 = 0.', e:'Das arithmetische Mittel wäre +25%, aber ökonomisch falsch für den Anlagezeitraum.' },
  { topic:'bewertung',   type:'cloze', q:'Der Optionspreis setzt sich aus ________ Wert und ________ zusammen.', ans:'innerem; Zeitwert', e:'Innerer Wert ist der sofort realisierbare Vorteil, Zeitwert die Chance bis zur Fälligkeit.' },
  { topic:'derivate',    type:'cloze', q:'Forwards werden typischerweise ________ gehandelt, Futures dagegen ________.', ans:'OTC; börsengehandelt', e:'Futures sind standardisiert und über Clearing abgesichert.' },
  { topic:'struktur',    type:'flash', q:'Was ist der zentrale Nachteil von Zertifikaten gegenüber Fonds?', ans:'Emittentenrisiko: Zertifikate sind Schuldverschreibungen und kein Sondervermögen.', e:'Bei Zahlungsunfähigkeit des Emittenten droht Verlust unabhängig vom Underlying.' },
  { topic:'bewertung',   type:'flash', q:'Warum steigt der Wert von Calls und Puts bei höherer Volatilität?', ans:'Mehr Volatilität erhöht die Chance auf profitable Extrembewegungen; der Verlust des Käufers bleibt auf die Prämie begrenzt.', e:'Deshalb ist Vega bei Standardoptionen positiv.' }
];

window.QUESTIONS.push(...QUESTIONS);

})();

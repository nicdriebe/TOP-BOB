# TOP-BOB
### Die besten barrierefreien Orte Berlins!

TOP-BOB ist eine Webanwendung, die es Usern ermöglichen soll, sehr unkompliziert barrierefreie Orte, wie Restaurants, Bars, Parks, Museen etc., in Berlin zu finden oder weiterzuempfehlen.
User können eigene Empfehlungen eintragen oder vorhandene Einträge kommentieren. Das Besondere an TOP-BOB ist das tatsächliche Experten in Sachen Barrierefreiheit ihre Erfahrungen mit anderen teilen können und so eine Übersicht der besten barrierefreien Orte in Berlin entstehen kann.

## Projektbeschreibung
**TOP-BOB** ist im Rahmen des Moduls **Barierefreie Webentwicklung** im Studiengang Informatik und Wirtschaft an der HTW Berlin entstanden.   
Aufgabe war es ein beliebiges Web-Projekt zu erstellen mit 6 Erfolgskriterien aus den Web Content Accessibility Guidelines (WCAG) 2.2.
Zusätzlich zu den Erfolgskriterien sollte die Applikation folgendes beinhalten:
1. Verwenden von Semantischem  Markup
2. Projekt über Tastatur bedienbar
3. Sprache im Dokument angegeben
4. Fokus-ring bei jedem Element sichtbar
5. Skip-link vorhanden, um Bereiche zu überspringen   

selbstgewählte Kriterien:
- 1.1.1 Non-text Content
- 1.4.4 Resize Text
- 1.4.6 Contrast (Enhanced)
- 2.4.2 Page Titled
- 2.5.5 Target Size
- 3.3.3 Error Suggestion  

**Derzeit befindet sich das Projekt in der Entwicklungsphase und ist nocht nicht abgeschlossen.**   
Das Frontend ist bereits zu großen Teilen implementiert ist. Zukünftig sollen ein Backend und eine Datenbank integriert werden, um die Anwendung vollständig zu machen.

## Umsetzung der Kriterien zur Barrierefreiheit

**1. Verwenden von Semantischem  Markup**   

Um Zugänglichkeit für Screenreader und andere assistive Technologien auf die Anwendung zu gewährleisten, ist Verwendung semantischen HTMLs wichtig.
- semantische HTML-Elemente wie `<header>`,  `<nav>`, `<main>`, `<section>`, `<form>` und `<footer>` wurden verwendet, um die Struktur der Seite klar zu definieren und den Inhalt sinnvoll zu gliedern.
- Überschriften  (`<h1>` - `<h6>`) wurden in der richtigen Hierarchie eingesetzt, um die Struktur der Inhalte deutlich zu machen.
- Formular-Elemente sind korrekt mit `<label>`-Tags verknüpft, um sicherzustellen, dass Screenreader die Formulareingabefelder korrekt vorlesen können.
  Es wurden aria-label- und aria-describedby-Attribute verwendet, um zusätzlichen Kontext bereitzustellen, falls nötig

**2. Projekt über Tastatur bedienbar**    

Logische Tab-Reihenfolge:

- Alle interaktiven Elemente (Formulare, Links, Buttons) sind in einer logischen Reihenfolge über die Tabulatortaste erreichbar. Dies ermöglicht eine intuitive Navigation durch die Benutzeroberfläche.

**---> Die Navigation mit der Tastatur, insbesondere bei den Formularen, funktioniert bisher noch nicht einwandfrei und muss noch verbessert werden**

**3. Sprache im Dokument angegeben**  

Screenreader nutzen die Spracheinstellungen, um den Text korrekt auszusprechen. Wenn die Sprache nicht angegeben ist, kann der Screenreader Schwierigkeiten haben, die Inhalte richtig zu interpretieren, was zu Missverständnissen führt.

- die Spracheinstellung wurde in der index.html vorgenommen : `<html lang="de">`

**4. Fokus-ring bei jedem Element sichtbar**  

Ein Fokus-Ring hilft Menschen mit Sehbehinderungen oder solchen, die auf die Tastatur angewiesen sind, sich auf der Seite zurechtzufinden.

- Fokus-Ring wurde gesetzt und in einem einheitlichen (Design)Stil angelegt, um Verwirrung zu vermeiden.
  
  main.css: 
`:focus {
  outline: 3px solid #295338; 
  outline-offset: 2px; 
}`

**5. Skip-link vorhanden, um Bereiche zu überspringen**  

Skip-Links ermöglichen es Nutzern von Screenreadern und Tastaturbenutzern, direkt zum Hauptinhalt der Seite zu springen, ohne durch alle Navigationslinks oder andere wiederholte Inhalte scrollen zu müssen.

 - Skip-Link wurde in App.vue gesetzt:   
  `<a href="#main-content" class="skip-link">Zum Hauptinhalt springen</a>`


**1.1.1 Non-text Content**

**1.4.4 Resize Text**  

**1.4.6 Contrast (Enhanced)**  

**2.4.2 Page Titled**  

**2.5.5 Target Size**  

**3.3.3 Error Suggestion**  


## verwendete Technolgien

- Vue.js (v3.4.29) – Frontend-Framework für die Erstellung der Benutzeroberfläche.
- Vite (v5.3.1) – Entwicklungsserver und Build-Tool.

- Font Awesome (v6.6.0) – Icon-Bibliothek zur Visualisierung von Symbolen.

## Vorraussetzungen
folgenden Software-Komponenten müssen vorab installiert werden:

- Node.js (Version 14 oder höher)
- npm (Node Package Manager)

## Installation

1. Repository clonen
```sh
git clone https://gitlab.rz.htw-berlin.de/Nicole.Driebe/barriere-check-berlin.git
```
2. zum Projektverzeichnis wechseln:
```sh
cd barriere-check-berlin
```
3. Abhängigkeiten installieren:
```sh
npm install
```
  
  
zum Starten der Anwendung folgenden Befehl ausführen:
```sh
npm run dev
```

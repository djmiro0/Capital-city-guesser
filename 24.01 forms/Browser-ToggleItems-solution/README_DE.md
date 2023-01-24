# Toggle Favourite Destinations
[![Statusübersicht-Badge](../../blob/badges/.github/badges/autograding/badge.svg)](#Ergebnisse)


Erstelle eine Liste deiner Lieblingsreiseziele mit einem Button, um die Liste umzuschalten

**Voraussetzungen:**
- Bootstrap CDN verwenden
- benutze `Element.classList` Methoden

**Beispiel:**

![Bildschirmfoto](toggle.gif)

**Bonus:**

- Lass den Nutzer das bevorzugte Ziel auswählen
- Im Ereignisobjekt anzeigen
- Gestalte die Liste nach deinem Geschmack.

![Bildschirmfoto](select.gif)

[//]: # (autograding info start)
## Ergebnisse


### Browser - Elemente umschalten

| Status | Prüfen |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | Html 'head' Tag sollte entsprechende Meta-Tags enthalten |
| ![Status](../../blob/badges/.github/badges/autograding/status1.svg) | Seite sollte einen nicht leeren 'title' Tag enthalten |
| ![Status](../../blob/badges/.github/badges/autograding/status2.svg) | Seitenüberschrift 'Meine Lieblingsziele' sollte auf der Seite sichtbar sein |
| ![Status](../../blob/badges/.github/badges/autograding/status3.svg) | Bootstrap CDN Sollte auf der Seite geladen werden |
| ![Status](../../blob/badges/.github/badges/autograding/status4.svg) | Sollte dem Benutzer die Möglichkeit geben, das Ziel auszuwählen |
| ![Status](../../blob/badges/.github/badges/autograding/status5.svg) | Soll dem Benutzer eine Erfolgsmeldung anzeigen, wenn das Ziel ausgewählt wurde |
| ![Status](../../blob/badges/.github/badges/autograding/status6.svg) | Toggle-Schaltfläche soll Zielliste ausblenden |
| ![Status](../../blob/badges/.github/badges/autograding/status7.svg) | Der innere Text der Umschalttaste soll sich je nach Sichtbarkeit der Liste ändern |



[🔬 Ergebnisdetails](https://github.com/DigitalCareerInstitute/Browser-ToggleItems/actions)

[📢 Feedback geben oder Problem melden](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=Browser-ToggleItems&entry.2115011968=https%3A%2F%2Fgithub.com%2FDigitalCareerInstitute%2FBrowser-ToggleItems)

### Debugging deines Codes
> [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht erledigt werden können:
#### 1. Tests lokal ausführen
- Führe `npm install` aus
- Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.

#### 2. Überprüfen der Testausgabe auf GitHub
- Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/Browser-ToggleItems/actions)
- Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
- Klicke auf "Autograding".
- Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
- Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
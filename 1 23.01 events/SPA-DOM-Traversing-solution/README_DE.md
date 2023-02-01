# Extreme Travel Website!
[![Statusübersicht-Badge](../../blob/badges/.github/badges/autograding/badge.svg)](#Ergebnisse)


**Anweisungen**:
* Wähle die Überschrift aus, die der ersten Überschrift `h1` am nächsten ist. Gib der Überschrift einen festen Rahmen von 5px. ![alt text](images/header.png "Überschrift")

* Wenn der Abschnitt `.info` ein `.info-package` enthält, wähle alle `package-title` aus und gib dem vorherigen Element des Titels einen Rahmen. ![alt text](images/packages.png "Pakete")

* Prüfe, ob die Klasse des Labels "mild" ist. Wenn ja, erhält das Etikett einen gelben, durchgehenden Rahmen. Wenn die Klasse des Etiketts mit "intense" übereinstimmt, erhält das Etikett einen orangefarbenen, durchgehenden Rahmen. Stimmt die Klasse mit keiner der beiden Klassen überein, erhält das Etikett einen roten, durchgehenden Rahmen. ![alt text](images/packages.png "Pakete")

* Füge alle untergeordneten Elemente der `.nav-list` zur ungeordneten Liste `.site-map` in der Fußzeile hinzu. Hinweis: Die `.nav-list` sollte noch ihre Kinder enthalten. ![alt text](images/footer.png "Fußzeile")

**Bonus**
Nachdem du die Aufgabe erledigt und den Lösungszweig veröffentlicht hast, kannst du einen neuen Zweig `feature/restyle` erstellen und das Design der Landing-Page ändern. Du kannst sie auf GitHub Pages veröffentlichen, wenn du mit dem Ergebnis zufrieden bist.


**Hinweise**:
* Deadline: ~2h.
* Siehe Bilder als Referenz.

[//]: # (autograding info start)
## Ergebnisse


### DOM Traversing

| Status | Prüfen |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | Gib dem 'Header'-Element, das dem 'H1' am nächsten ist, einen Stil von `Solid border of 5px` |
| ![Status](../../blob/badges/.github/badges/autograding/status1.svg) | previous Sibling of `.package-title` Should contain a style of `2px solid #072F5F` |
| ![Status](../../blob/badges/.github/badges/autograding/status2.svg) | Gib 'Label'-Elementen, die der Klasse `.Mild` `.intense` entsprechen, einen Stil von `Solid border of 2px` |
| ![Status](../../blob/badges/.github/badges/autograding/status3.svg) | Footer's unordered list of `.site-map` should contain all the children of the `.nav-list`. |



[🔬 Ergebnisdetails](https://github.com/DigitalCareerInstitute/SPA-DOM-Traversing/actions)

[📢 Feedback geben oder Problem melden](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=SPA-DOM-Traversing&entry.2115011968=https%3A%2F%2Fgithub.com%2FDigitalCareerInstitute%2FSPA-DOM-Traversing)

### Debugging deines Codes
> [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht erledigt werden können:
#### 1. Tests lokal ausführen
- Führe `npm install` aus
- Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.

#### 2. Überprüfen der Testausgabe auf GitHub
- Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/SPA-DOM-Traversing/actions)
- Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
- Klicke auf "Autograding".
- Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
- Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)

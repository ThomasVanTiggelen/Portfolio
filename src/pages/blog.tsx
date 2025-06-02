import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image"

const blogPosts = [
  {
  id: 0,
  title: "Mijn Eerste Week op Stage",
  date: "2025-02-03",
  categories: ["code", "lessons learned"],
  content: `
    <div class="space-y-6">
      <p class="text-lg leading-relaxed">Deze week stond in het teken van <strong class="font-semibold text-accent">kennismaken, wennen aan de omgeving en de eerste opdrachten oppakken</strong>. Het was een mix van <strong class="font-semibold text-accent">uitdagingen, nieuwe technologieën leren en de eerste successen</strong>.</p>
      
      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Maandag: Introductie en Setup</h3>
        <p class="leading-relaxed">De eerste dag begon met een <strong class="font-semibold">rondleiding en uitleg</strong> over de applicaties waarmee we gaan werken. Daarna was het tijd om onze <strong class="font-semibold">laptops in te stellen</strong>, IntelliJ te installeren en de omgeving klaar te maken. Aan het einde van de dag hebben we een eerste <strong class="font-semibold">kijkje genomen in de Java-code</strong>, wat voor mij nog redelijk nieuw is.</p>
      </div>
      
      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Dinsdag: Eerste Frontend Tickets</h3>
        <p class="leading-relaxed">Vandaag mocht ik <strong class="font-semibold">mijn eerste tickets</strong> oppakken! Ik werkte aan:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Een <strong class="font-semibold">waarschuwingsmelding</strong> wanneer een gebruiker een folder probeert te verwijderen bij <strong class="font-semibold">Documents</strong>.</li>
          <li>Een <strong class="font-semibold">nieuwe kolom</strong> om bij te houden of kinderen gereageerd hebben als een overleden persoon zijn pensioen niet had opgehaald.</li>
        </ul>
        <p class="leading-relaxed">Beide functies moesten worden geïmplementeerd in <strong class="font-semibold">Nederlands, Frans en Engels</strong>.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Woensdag: Uitdaging met Quill</h3>
        <p class="leading-relaxed">Ik kreeg een ticket waarbij ik een <strong class="font-semibold">variabel veld in Quill (een texteditor)</strong> bewerkbaar moest maken. Dit leek een simpele taak, maar bleek een <strong class="font-semibold">stuk complexer</strong> dan verwacht. De hele dag heb ik geprobeerd om dit op te lossen, maar zonder succes. Dit was mijn eerste echte <strong class="font-semibold">technische uitdaging</strong> tijdens de stage.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Donderdag: Alternatieve Oplossing</h3>
        <p class="leading-relaxed">Omdat de oorspronkelijke aanpak te moeilijk bleek, mocht ik <strong class="font-semibold">een alternatieve oplossing</strong> proberen. De nieuwe oplossing zorgde ervoor dat <strong class="font-semibold">sysadmins een custom veld kunnen toevoegen</strong> voordat een veld wordt aangemaakt. Dit gaf mij een beter inzicht in hoe dynamische formulieren werken.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Vrijdag: Ticket Afgerond en Start Groot Project</h3>
        <p class="leading-relaxed">In de ochtend heb ik mijn <strong class="font-semibold">oplossing voltooid</strong> en ervoor gezorgd dat de melding in drie talen verschijnt. Daarna heb ik het ticket op <strong class="font-semibold">"to review"</strong> gezet. In de namiddag ben ik begonnen aan een <strong class="font-semibold">groter ticket</strong>, waarbij een deel van een pagina <strong class="font-semibold">herwerkt moet worden</strong>. Dit is een grotere uitdaging die ik volgende week verder ga oppakken.</p>
      </div>

      <div class="space-y-4 mt-8 pt-6 border-t border-white/20">
        <h3 class="text-xl font-semibold mb-3 text-accent">Reflectie op de Week</h3>
        <p class="leading-relaxed italic">Deze week was een <strong class="font-semibold">goede mix van leren en doen</strong>. Ik heb kennisgemaakt met het team en de codebase, gewerkt aan mijn eerste tickets en een paar <strong class="font-semibold">technische uitdagingen</strong> ervaren. Volgende week kijk ik ernaar uit om <strong class="font-semibold">meer backend-werk</strong> te verkennen en mijn grotere ticket af te ronden!</p>
      </div>
    </div>
  `,
},
  {
  id: 1,
  title: "Week 2: Dieper de Code in",
  date: "2025-02-10",
  categories: ["code", "debugging", "testing", "lessons learned"],
  content: `
    <div class="space-y-6">
      <p class="text-lg leading-relaxed">Deze week draaide om het werken aan een <strong class="font-semibold text-accent">groter ticket</strong>, het oplossen van bugs en het leren van <strong class="font-semibold text-accent">best practices</strong> binnen het team. Ik heb veel geleerd over <strong class="font-semibold text-accent">code styling, testing en configuratie</strong>.</p>
      
      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Maandag: Start van een Groot Ticket</h3>
        <p class="leading-relaxed">De week begon met een <strong class="font-semibold">groter ticket</strong>. Het doel was om twee nieuwe velden toe te voegen en de pagina een <strong class="font-semibold">nieuwe look</strong> te geven. Ik heb de velden overal geïntegreerd en ben begonnen met de herwerking van de pagina.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Dinsdag: Debugging en UI-aanpassingen</h3>
        <p class="leading-relaxed">Vandaag heb ik fouten in de code opgelost zodat de applicatie correct opstartte. Daarna heb ik verder gewerkt aan de <strong class="font-semibold">styling en layout</strong> van de pagina om de nieuwe look af te maken.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Woensdag: Connecties en Feedback</h3>
        <p class="leading-relaxed">Ik heb gezorgd dat de nieuwe velden correct werden doorgegeven en automatisch ingevuld bij het toevoegen van een invaliditeit. Aan het einde van de dag heb ik mijn werk gedemonstreerd aan mijn begeleider. Na feedback bleek dat we een <strong class="font-semibold">andere methode</strong> moesten gebruiken voor deze velden, wat ik de volgende dag zou aanpassen.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Donderdag: Code Aanpassen en Testing</h3>
        <p class="leading-relaxed">Vandaag heb ik de implementatie aangepast aan de nieuwe methode en ben ik begonnen met het schrijven van <strong class="font-semibold">tests</strong> om de code coverage hoog te houden. Toen ik alles opnieuw toonde, kreeg ik feedback op de <strong class="font-semibold">codestyle</strong>, die ik moest verbeteren.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Vrijdag: Afronding en Nieuw Ticket</h3>
        <p class="leading-relaxed">Het grote ticket werd afgerond en gepusht voor review. Daarna kreeg ik een nieuw ticket waarbij ik configuratie moest toevoegen aan een <strong class="font-semibold">testproject</strong> dat automatisch de site test. Als een test faalt, wordt er een screenshot opgeslagen. Mijn taak was om <strong class="font-semibold">annotaties</strong> toe te voegen die bepalen op welke client de tests draaien. Dit heb ik op tijd afgerond en daarmee zat week 2 erop!</p>
      </div>

      <div class="space-y-4 mt-8 pt-6 border-t border-white/20">
        <h3 class="text-xl font-semibold mb-3 text-accent">Reflectie op de Week</h3>
        <p class="leading-relaxed italic">Deze week was een stuk <strong class="font-semibold">technischer en uitdagender</strong>. Ik heb geleerd om <strong class="font-semibold">met grotere tickets te werken</strong>, betere tests te schrijven en hoe belangrijk een consistente <strong class="font-semibold">codestyle</strong> is. Volgende week kijk ik ernaar uit om nog dieper in de backend te duiken!</p>
      </div>
    </div>
  `,
},
  {
  id: 2,
  title: "Week 3: Tickets, Testing en Feedback",
  date: "2025-02-17",
  categories: ["code", "testing", "lessons learned"],
  content: `
    <div class="space-y-6">
      <p class="text-lg leading-relaxed">Deze week stond in het teken van <strong class="font-semibold text-accent">het afronden van tickets, het oplossen van uitdagingen bij testing en het verwerken van feedback</strong>. Ik heb gewerkt aan nieuwe functionaliteiten en geleerd hoe belangrijk heldere communicatie is binnen een team.</p>
      
      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Maandag: Sprint Review en Nieuw Ticket</h3>
        <p class="leading-relaxed">De dag begon met het bekijken van een <strong class="font-semibold">nieuw ticket</strong> en het analyseren waar de wijzigingen moesten komen. Om 11 uur had ik een <strong class="font-semibold">sprint review meeting</strong>, waarbij ik een demo gaf van het grote ticket dat ik vorige week had afgerond. Na de meeting begon ik aan een nieuwe taak: uittredingsbrieven moesten naar de inbox worden gestuurd, tenzij de eBox niet geactiveerd was, dan moesten ze naar een SFTP-server van Inprintia. Dit probleem was vrij snel opgelost.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Dinsdag: Testing en Feedback Verwerken</h3>
        <p class="leading-relaxed">Vandaag begon ik met het <strong class="font-semibold">schrijven van tests</strong> om de code coverage op peil te houden. Dit bleek lastiger dan verwacht, en omdat niet alle programmeurs vertrouwd waren met dit onderdeel, moest ik dit even on hold zetten tot een collega terug was van vakantie. Daarna werkte ik verder aan de <strong class="font-semibold">feedback</strong> op een groot ticket van week 2 en voerde verbeteringen door.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Woensdag: Verbeteringen Afronden en Nieuw Ticket</h3>
        <p class="leading-relaxed">In de ochtend heb ik de <strong class="font-semibold">verbeteringen afgerond</strong> en de finale versie gepusht voor review. Vervolgens kreeg ik een nieuw ticket waarbij ik een methode moest toevoegen zodat op een pagina voor settlements het <strong class="font-semibold">bruto proposal bedrag correct werd weergegeven</strong>. Hier ben ik de rest van de dag mee bezig geweest en ik heb het ticket volledig afgerond.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Donderdag: Extra Info Toevoegen</h3>
        <p class="leading-relaxed">Mijn baas gaf feedback op het vorige ticket en vroeg om een <strong class="font-semibold">aanpassing</strong>. Ik heb een tekst toegevoegd die aangeeft dat het bedrag kan afwijken, en dit moest ook op een andere pagina worden weergegeven. Dit heb ik opgelost door een <strong class="font-semibold">extra info-icoon</strong> toe te voegen dat enkel zichtbaar is wanneer de settlement <strong class="font-semibold">proposed</strong> is. Ik implementeerde dit in vier talen en rondde het ticket af.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Vrijdag: Historiek en Testing Ticket</h3>
        <p class="leading-relaxed">Vandaag begon ik met een nieuw ticket waarin ik een <strong class="font-semibold">historiek</strong> moest implementeren voor enkele velden, zodat je kunt zien wat er in het verleden gestaan heeft. Hier ben ik mee gestart. Aan het einde van de dag kreeg ik eindelijk <strong class="font-semibold">uitleg over het testing-ticket</strong> waar ik in het begin van de week op vastzat. Dit zal ik in week 4 verder moeten afwerken.</p>
      </div>

      <div class="space-y-4 mt-8 pt-6 border-t border-white/20">
        <h3 class="text-xl font-semibold mb-3 text-accent">Reflectie op de Week</h3>
        <p class="leading-relaxed italic">Deze week was een mix van <strong class="font-semibold">functionaliteit ontwikkelen, testing en het verwerken van feedback</strong>. Ik heb geleerd hoe belangrijk heldere communicatie is binnen een team, vooral bij complexere taken. Volgende week ga ik verder met het testing-ticket en ben ik benieuwd naar nieuwe uitdagingen!</p>
      </div>
    </div>
  `,
},
{
  id: 3,
  title: "Week 4: Historiek, Testen en Configuratie",
  date: "2025-02-24",
  categories: ["code", "testing", "feedback", "lessons learned"],
  content: `
    <div class="space-y-6">
      <p class="text-lg leading-relaxed">Deze week draaide rond <strong class="font-semibold text-accent">het uitwerken van historische dataweergave, het schrijven van testen en het verwerken van feedback</strong>. Ik kreeg ook positieve feedback over mijn integratietesten, wat een mooie erkenning was!</p>
      
      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Maandag: Intervisie en Feedback Verwerken</h3>
        <p class="leading-relaxed">De dag begon met een <strong class="font-semibold">intervisiemoment op school</strong>. In de namiddag werkte ik aan de <strong class="font-semibold">feedback voor mijn integratietesten</strong>, die ik maandag had afgerond.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Dinsdag: Historiek via Popup</h3>
        <p class="leading-relaxed">Ik werkte aan een <strong class="font-semibold">ticket waarbij de historiek van velden werd getoond via een popup</strong>. Hiervoor schreef ik de logica om de oude waardes op te halen en de nodige velden toe te voegen.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Woensdag: Dynamische Titels en Tests</h3>
        <p class="leading-relaxed">Vandaag zorgde ik ervoor dat de <strong class="font-semibold">titel van de popup dynamisch werd aangepast</strong> per veld. Daarna schreef ik <strong class="font-semibold">unit tests</strong> om de coverage te behouden. Ik kreeg ook complimenten over mijn integratietesten, wat motiverend was!</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Donderdag: Validatie en Testuitbreiding</h3>
        <p class="leading-relaxed">Ik schreef extra tests voor het historiek-ticket en <strong class="font-semibold">controleerde of elk veld correct werkte</strong>. Daarna begon ik met het analyseren van het volgende ticket.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Vrijdag: Navigatie via Zoekfunctie</h3>
        <p class="leading-relaxed">Ik werkte aan een <strong class="font-semibold">configuratieticket</strong> waarbij je via de zoekfunctie op de homepage of zijbalk <strong class="font-semibold">automatisch naar de juiste tab</strong> wordt geleid. De basiscode bestond al, dus dit was vooral een kwestie van correcte configuratie.</p>
      </div>

      <div class="space-y-4 mt-8 pt-6 border-t border-white/20">
        <h3 class="text-xl font-semibold mb-3 text-accent">Reflectie op de Week</h3>
        <p class="leading-relaxed italic">Het was een leerrijke week waarin ik mijn codevaardigheden verder kon aanscherpen. De positieve feedback over mijn integratietesten gaf me een boost en het uitwerken van historische datalogica was uitdagend maar boeiend.</p>
      </div>
    </div>
  `,
},
{
  id: 4,
  title: "Week 5: Klantspecifieke Testing met Selenium",
  date: "2025-03-03",
  categories: ["testing", "automation", "lessons learned"],
  content: `
    <div class="space-y-6">
      <p class="text-lg leading-relaxed">Deze week stond in het teken van <strong class="font-semibold text-accent">het verbeteren van Selenium-testen per klant</strong>. Ik leerde hoe belangrijk het is om testomgevingen flexibel en klantgericht op te zetten, en kwam verschillende uitdagingen tegen bij het oplossen van foutmeldingen.</p>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Maandag: Annotaties toevoegen</h3>
        <p class="leading-relaxed">Ik begon met het <strong class="font-semibold">toevoegen van annotaties</strong> aan Selenium-testen, zodat deze enkel draaien voor specifieke klanten. Dit vergde nauwkeurigheid om ervoor te zorgen dat alles correct gefilterd werd.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Dinsdag: Testuitvoering onderzoeken</h3>
        <p class="leading-relaxed">Vandaag onderzocht ik hoe en wanneer de testen precies worden <strong class="font-semibold">getriggerd</strong>. Ook werkte ik verder aan de annotaties en startte ik met het verbeteren van enkele falende tests.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Woensdag: Klant 1 testen gepusht</h3>
        <p class="leading-relaxed">Voor klant <strong class="font-semibold">1</strong> maakte ik alle testen in orde en pushtte deze naar de repository. Zo konden we nagaan of de resultaten correct doorkwamen en of alles functioneerde zoals bedoeld.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Donderdag: Foutoplossing testen</h3>
        <p class="leading-relaxed">De hele dag was ik bezig met <strong class="font-semibold">het oplossen van foutmeldingen</strong> in verschillende testen. Dit nam veel tijd in beslag, maar was noodzakelijk om alles robuust te maken.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Vrijdag: Verder debuggen</h3>
        <p class="leading-relaxed">Ook vandaag werkte ik verder aan <strong class="font-semibold">het debuggen van fouten</strong> in de Selenium-testen. Sommige bugs waren hardnekkig, maar stap voor stap raakte alles opgelost.</p>
      </div>

      <div class="space-y-4 mt-8 pt-6 border-t border-white/20">
        <h3 class="text-xl font-semibold mb-3 text-accent">Reflectie op de Week</h3>
        <p class="leading-relaxed italic">Deze week was intensief maar leerrijk. Ik kreeg meer inzicht in klantspecifieke testing met Selenium en merkte hoe belangrijk geduld en nauwkeurigheid zijn bij het debuggen van geautomatiseerde testen.</p>
      </div>
    </div>
  `,
},
{
  id: 5,
  title: "Week 6: Testen, Foutoplossing en Nieuwe Tickets",
  date: "2025-03-10",
  categories: ["testing", "code", "debugging", "planning"],
  content: `
    <div class="space-y-6">
      <p class="text-lg leading-relaxed">Deze week draaide vooral rond <strong class="font-semibold text-accent">testen optimaliseren, foutjes opsporen en nieuwe taken voorbereiden</strong>. Ik werkte verder aan grote klanttesten en maakte vertalingen in een nieuwe taak.</p>
      
      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Maandag: Grote Klanttesten</h3>
        <p class="leading-relaxed">Ik startte de week met het werkend krijgen van de testen voor een grote klant. Dit lukte vrij vlot op de eerste dag.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Dinsdag: Testen Verbeteren</h3>
        <p class="leading-relaxed">Vandaag verbeterde ik de testen voor twee andere klanten. Dit ging goed vooruit en bracht meer stabiliteit in het testproces.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Woensdag: Kleine Foutjes en Nieuwe Push</h3>
        <p class="leading-relaxed">Ik werkte foutjes weg en zette de puntjes op de i. Daarna pushte ik de nieuwste versie. De resultaten verwacht ik op donderdag.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Donderdag: Testresultaten en Vertalingen</h3>
        <p class="leading-relaxed">De testen draaiden goed, al bleven er enkele issues waarvoor dev-tickets nodig zijn. Daarna begon ik aan een nieuw ticket rond vertalingen, wat ik ook meteen afrondde.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Vrijdag: Selenium en Voorbereiding Week 7</h3>
        <p class="leading-relaxed">Het eindpunt van de Selenium-testen werkte ik volledig af. Ik bekeek ook een nieuw ticket dat ik in week 7 zal opnemen.</p>
      </div>

      <div class="space-y-4 mt-8 pt-6 border-t border-white/20">
        <h3 class="text-xl font-semibold mb-3 text-accent">Reflectie op de Week</h3>
        <p class="leading-relaxed italic">Een technisch gefocuste week waarin ik veel vooruitgang boekte met testen. De balans tussen debugging, vertalingen en voorbereiding voor volgende week zorgde voor een gestructureerd gevoel.</p>
      </div>
    </div>
  `,
},
{
  id: 6,
  title: "Week 7: Checkstyle, Configs en Regex",
  date: "2025-03-17",
  categories: ["code", "configuratie", "lessons learned"],
  content: `
    <div class="space-y-6">
      <p class="text-lg leading-relaxed">
        Deze week draaide om het aanpassen en uitbreiden van <strong class="font-semibold text-accent">checkstyle- en PMD-configuraties</strong>. Daarnaast kreeg ik te maken met een uitdaging rond <strong class="font-semibold">regex</strong> en begon ik aan een nieuw ticket voor validatie bij import.
      </p>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Maandag: ASCII Regex in Checkstyle</h3>
        <p class="leading-relaxed">
          Ik begon met een wijziging in de checkstyle-config om ASCII-tekens tussen aanhalingstekens toe te staan. Daarna werkte ik verder aan het opzetten van configs per categorie.
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Dinsdag: Regex Moeilijkheden</h3>
        <p class="leading-relaxed">
          De eerste versie van mijn oplossing was niet correct, dus ik dook opnieuw in het ticket. Regex schrijven was uitdagend, maar uiteindelijk lukte het om een betere versie te maken. Ik werkte verder aan de configs per categorie.
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Woensdag: Overerving in Configs?</h3>
        <p class="leading-relaxed">
          Vandaag onderzocht ik of je checkstyle-configs kon laten overerven van een basisbestand. Dat bleek niet mogelijk, dus na overleg besloten we hier voorlopig mee te stoppen.
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Donderdag: PMD en Nieuwe Validatie</h3>
        <p class="leading-relaxed">
          Ik paste dezelfde categoriebenadering toe op PMD-configs. In de namiddag startte ik met de opzet voor een ticket waarbij een warning moet verschijnen als een begunstigde zonder adres geïmporteerd wordt.
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Vrijdag: Warning bij Adresimport</h3>
        <p class="leading-relaxed">
          Ik werkte het ticket verder uit en implementeerde de warning succesvol voor gevallen waarin het adres niet wordt overgenomen bij import van een screenshot.
        </p>
      </div>

      <div class="space-y-4 mt-8 pt-6 border-t border-white/20">
        <h3 class="text-xl font-semibold mb-3 text-accent">Reflectie op de Week</h3>
        <p class="leading-relaxed italic">
          Deze week was een goede oefening in <strong class="font-semibold">probleemoplossend denken</strong>, vooral bij regex en configuratiebeheer. Ik heb veel bijgeleerd over <strong class="font-semibold">linting tools</strong> en het belang van duidelijke validaties bij data-import.
        </p>
      </div>
    </div>
  `,
},
{
  id: 7,
  title: "Week 8: Query's, Testing en Project Merge",
  date: "2025-03-24",
  categories: ["code", "testing", "lessons learned", "challenges"],
  content: `
    <div class="space-y-6">
      <p class="text-lg leading-relaxed">Deze week stond in het teken van <strong class="font-semibold text-accent">database queries aanpassen, testen schrijven en het mergen van projecten</strong>. Ik heb nieuwe regels en filters geïmplementeerd, uitdagingen overwonnen met tools en processen onderzocht voor het samenvoegen van projecten.</p>
      
      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Maandag: Query Filteren voor Flexi-jobbers</h3>
        <p class="leading-relaxed">Ik begon met het aanpassen van een query zodat flexi-jobbers niet worden meegerekend in het laatste kwartaal. Na uitleg over de database kon ik de filter succesvol implementeren.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Dinsdag: Tabelveld Vergroten en Testen Schrijven</h3>
        <p class="leading-relaxed">Ik vergrootte een te klein veld in een tabel via een changelog en schreef twee testen om toekomstige fouten hiervan makkelijker te detecteren.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Woensdag: Nieuwe Rule Ontwikkelen</h3>
        <p class="leading-relaxed">Ik begon met het schrijven van een rule die controleert of een kolom verandert naar NULL of NOT NULL. Dit liep vast door onduidelijkheid over PMD, en ik kon het deze dag nog niet oplossen.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Donderdag: Probleem Oplossen met PMD Analyse</h3>
        <p class="leading-relaxed">Na verder zoeken lukte het me om PMD zo te configureren dat het de juiste XML-bestanden in de directory src/main/resources kon analyseren.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Vrijdag: Projecten Mergen</h3>
        <p class="leading-relaxed">Ik deed research naar het mergen van twee projecten en ontdekte een bestaande query om dit te doen. Na uitvoeren van de query ben ik begonnen met het handmatig aanpassen van de resterende bestanden.</p>
      </div>

      <div class="space-y-4 mt-8 pt-6 border-t border-white/20">
        <h3 class="text-xl font-semibold mb-3 text-accent">Reflectie op de Week</h3>
        <p class="leading-relaxed italic">Deze week heb ik veel geleerd over database queries, het schrijven van testen en het omgaan met uitdagingen in tools als PMD. Ook de eerste stappen met project merges geven me een beter beeld van complexere workflows. Volgende week ga ik verder bouwen op deze kennis!</p>
      </div>
    </div>
  `
},
{
  id: 8,
  title: "Week 9: Code Verbeteringen en Teambuilding",
  date: "2025-03-31",
  categories: ["code", "frontend", "patching", "statistics", "teambuilding", "lessons learned"],
  content: 
    `<div class="space-y-6">
      <p class="text-lg leading-relaxed">
        Deze week lag de focus op het verbeteren van bestaande code, het oppakken van frontend-tickets en het leren werken met patches in IntelliJ. Daarnaast heb ik branches opgeschoond en nieuwe statistieken toegevoegd voor planowners. De week werd afgesloten met een gezellige teambijeenkomst ter ere van het 16-jarig bestaan van het bedrijf.
      </p>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Maandag: Mergen en Sprint Meeting</h3>
        <p class="leading-relaxed">
          Ik ben verder gegaan met het handmatig mergen van twee projecten. Daarna had ik een langere sprintmeeting dan normaal. Later heb ik een ticket afgerond en zag dat een ander ticket nog verbeterd moest worden.
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Dinsdag: Tickets Verbeteren en Branch Cleanup</h3>
        <p class="leading-relaxed">
          De hele dag heb ik gewerkt aan het verbeteren van gereviewde tickets. Ook heb ik alle branches verwijderd die ik onbedoeld had bewaard, om de repository schoon te houden.
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Woensdag: Frontend Widget voor Invalid Settlements</h3>
        <p class="leading-relaxed">
          Ik kreeg een frontend-ticket waarbij ik een widget heb toegevoegd die toont dat een settlement beoordeeld wordt, zodat gebruikers zien dat er aan gewerkt wordt.
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Donderdag: Patch Invoegen en Code Begrijpen</h3>
        <p class="leading-relaxed">
          Ik maakte kennis met het invoegen van patches in IntelliJ. De code was lastig te begrijpen, dus ik heb het ticket niet af kunnen maken. Om 16u was er een bijeenkomst ter viering van het 16-jarig bestaan van het bedrijf.
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Vrijdag: Statistieken Aanpassen en Testen</h3>
        <p class="leading-relaxed">
          Ik heb de code aangepast om statistieken van planowners te tonen en de rest van de dag besteed aan het testen en zorgen dat de code zonder fouten draaide.
        </p>
      </div>

      <div class="space-y-4 mt-8 pt-6 border-t border-white/20">
        <h3 class="text-xl font-semibold mb-3 text-accent">Reflectie op de Week</h3>
        <p class="leading-relaxed italic">
          Deze week heb ik veel geleerd over het verbeteren van bestaande code en het toepassen van patches. Het opruimen van branches hielp de workflow overzichtelijk te houden. De teambijeenkomst was een leuke afsluiter.
        </p>
      </div>
    </div>`
},
{
  "id": 9,
  "title": "Week 10: Tickets, Testing en Job-Scheduler",
  "date": "2025-04-07",
  "categories": ["code", "testing", "lessons learned", "wins"],
  "content": 
    `<div class="space-y-6">
      <p class="text-lg leading-relaxed">Deze week stond vooral in het teken van <strong class="font-semibold text-accent">werken aan verschillende tickets met focus op testen, code verbeteren en job-scheduler functionaliteit</strong>. Ik heb veel geleerd over het schrijven van tests, het verbeteren van code en het toevoegen van extra checks om dubbele jobs te voorkomen.</p>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Maandag: Testen en Code Opruimen</h3>
        <p class="leading-relaxed">Ik begon de week met het schrijven van testen voor een ticket van vorige week om de coverage op peil te houden en bugs sneller te signaleren. Daarna heb ik de code opgeschoond en klaargezet voor review.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Dinsdag en Woensdag: Nieuwe Tickets en Vlottere Code</h3>
        <p class="leading-relaxed">Ik werkte aan vergelijkbare tickets waarbij ik een selectie implementeerde op basis van <code>planOwner</code>. Doordat ik al ervaring had, verliepen deze taken steeds soepeler en was ik aan het einde van woensdag bijna klaar met het derde ticket.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Donderdag: Verbeteringen en Job-Scheduler</h3>
        <p class="leading-relaxed">De tickets die in review stonden waren nog niet compleet, dus ben ik begonnen met verbeteringen, waaronder het toevoegen van functionaliteit aan de job-scheduler. Dit ging wat moeizamer, maar is uiteindelijk gelukt.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Vrijdag: Check voor Dubbele Jobs</h3>
        <p class="leading-relaxed">Ik implementeerde een check die voorkomt dat een job met hetzelfde <code>companyNumber</code> meer dan eens wordt uitgevoerd. Deze wijziging heb ik geïntegreerd in de job-scheduler en succesvol ingecheckt. Zo sloot ik de week af met een goede verbetering van de stabiliteit.</p>
      </div>

      <div class="space-y-4 mt-8 pt-6 border-t border-white/20">
        <h3 class="text-xl font-semibold mb-3 text-accent">Reflectie op de Week</h3>
        <p class="leading-relaxed italic">Deze week voelde ik mijn kennis groeien doordat vergelijkbare taken steeds sneller gingen. Het werken met job-schedulers was nieuw en uitdagend, maar dankzij doorzettingsvermogen kon ik een belangrijke functionaliteit toevoegen. Ik kijk uit naar de volgende week om verder te bouwen op deze ervaringen.</p>
      </div>
    </div>`
},
{
  id: 10,
  title: "Week 11: Sprint Meetings en Ticketwerk",
  date: "2025-04-14",
  categories: ["code", "sprintmeeting", "planning"],
  content: 
    `<div class="space-y-6">
      <p class="text-lg leading-relaxed">
        Deze week lag de focus op het bijwonen van sprintmeetings en het verder uitwerken van tickets. Ik heb gewerkt aan specifieke selecties binnen de applicatie en mijn planning afgestemd voor komende taken.
      </p>
      
      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Maandag: Sprintmeeting en Ticket Voorbereiding</h3>
        <p class="leading-relaxed">
          De week begon met een sprintmeeting waar we de planning voor de komende periode bespraken. Daarna werkte ik aan een ticket rondom het verbeteren van de selectie van planowners binnen het systeem.
        </p>
      </div>

      <div class="space-y-4 mt-8 pt-6 border-t border-white/20">
        <h3 class="text-xl font-semibold mb-3 text-accent">Reflectie op de Week</h3>
        <p class="leading-relaxed italic">
          Deze week heb ik vooral mijn focus gelegd op goede communicatie tijdens sprintmeetings en het oplossen van technische tickets. Het is belangrijk om mijn werk goed te plannen en overzicht te houden.
        </p>
      </div>
    </div>`
},
{
  id: 11,
  title: "Week 12: Verbeteren van Code en Complexe Selecties",
  date: "2025-04-21",
  categories: ["code", "lessons learned", "fails", "wins", "teamwork", "debugging"],
  content: 
    `<div class="space-y-6">
      <p class="text-lg leading-relaxed">Deze week stond in het teken van het verbeteren van een PMD-regel en het aanpakken van een complex ticket rondom de selectie van een planOwner. Ik heb geleerd hoe belangrijk het is om flexibel te blijven bij het zoeken naar oplossingen en om hulp te vragen wanneer nodig.</p>
      
      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Maandag: Verbeteren van PMD-regel en Nieuw Ticket</h3>
        <p class="leading-relaxed">Ik heb een te strenge PMD-regel aangepast die onterecht veel errors veroorzaakte. Daarna kreeg ik een nieuw ticket om de planOwner selectie te implementeren.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Dinsdag: Eerste Poging Selectie PlanOwner</h3>
        <p class="leading-relaxed">Ik ontdekte dat er nog geen selectie op plan was, waardoor ik die eerst moest toevoegen. Na het toevoegen van bestanden bleek mijn aanpak niet ideaal, wat een nieuwe strategie vereiste.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Woensdag: Alternatieve Aanpak en Hulp Vragen</h3>
        <p class="leading-relaxed">De nieuwe aanpak was lastiger en complexer. Ik heb hulp gevraagd aan collega’s, wat leidde tot veel correcte aanpassingen aan het einde van de dag.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Donderdag: Build Testen en Debuggen</h3>
        <p class="leading-relaxed">Ik testte het buildproces en loste diverse fouten op om alles stabiel en werkend te krijgen.</p>
      </div>

      <div class="space-y-4 mt-8 pt-6 border-t border-white/20">
        <h3 class="text-xl font-semibold mb-3 text-accent">Reflectie op de Week</h3>
        <p class="leading-relaxed italic">Deze week heb ik veel geleerd over het flexibel omgaan met problemen, het belang van hulp vragen en het grondig testen van mijn code. Het was een goede mix van uitdagingen en successen.</p>
      </div>
    </div>`
},
{
  "id": 12,
  "title": "Week 13: Tickets, Testing en Voorbereidingen",
  "date": "2025-04-28",
  "categories": ["code", "testing", "tickets", "reflectie"],
  "content": 
    `<div class="space-y-6">
      <p class="text-lg leading-relaxed">
        Deze week heb ik voornamelijk gewerkt aan het afronden en testen van een ticket waar ik vorige week aan was begonnen. Door gebruik te maken van localrunner kon ik de werking lokaal simuleren. Na overleg met collega's heb ik onnodige scheduler-code verwijderd. Verder heb ik de code nagekeken en gepusht.
      </p>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Maandag & Dinsdag: Ticket afronden en testen</h3>
        <p class="leading-relaxed">
          Het afronden van de code en het testen ervan verliep grotendeels volgens plan, met kleine aanpassingen na overleg. De scheduler-aanpassing werd uiteindelijk niet doorgevoerd en verwijderd. De code is gecontroleerd en klaargemaakt voor push.
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Woensdag: Nieuw ticket onderzoeken</h3>
        <p class="leading-relaxed">
          Het nieuwe ticket dat ik kreeg bleek al afgerond te zijn, waarna ik een ander ticket kreeg toegewezen. Dit nieuwe ticket betreft het toevoegen van een filter voor begunstigden die primair aangeduid kunnen worden. Dit heb ik voorbereid, maar de uitvoering staat gepland voor volgende week.
        </p>
      </div>

      <div class="space-y-4 mt-8 pt-6 border-t border-white/20">
        <h3 class="text-xl font-semibold mb-3 text-accent">Reflectie op de week</h3>
        <p class="leading-relaxed italic">
          Deze week draaide om afronden, testen en voorbereiding op nieuwe taken. Het contact met collega's en het overleg zorgden voor duidelijke richting en het wegnemen van onnodige complexiteit. Volgende week ga ik verder met het implementeren van de nieuwe filterfunctionaliteit.
        </p>
      </div>
    </div>`
},
{
  id: 13,
  title: "Week 14: Filtering, Vertalingen en Codeverbeteringen",
  date: "2025-05-05",
  categories: ["code", "cleanup", "debugging", "lessons learned"],
  content: `
    <div class="space-y-6">
      <p class="text-lg leading-relaxed">In week 14 heb ik gewerkt aan verschillende tickets, waarbij ik begon met het opzetten van testgevallen en het toepassen van filtering op data. Daarna heb ik de frontend verbeterd door gebruiksvriendelijke meldingen toe te voegen wanneer er geen data beschikbaar was. Een belangrijk deel van de week besteedde ik aan het opschonen van dubbele vertalingen in properties-bestanden, waarbij ik ook bugs heb opgelost door ontbrekende vertalingen toe te voegen.</p>
      
      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Maandag & Dinsdag: Filtering en Frontend Verbeteringen</h3>
        <p class="leading-relaxed">Ik heb eerst een testcase nagebootst om filtering toe te passen op drie verschillende punten. Daarna heb ik de frontend aangepast zodat er een melding verschijnt wanneer er geen gevallen gevonden worden, en enkele kleine extra verbeteringen doorgevoerd.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Woensdag & Donderdag: Vertalingen Opschonen en Debugging</h3>
        <p class="leading-relaxed">Ik begon met het onderzoeken welke dubbele vertalingen verwijderd konden worden en voegde waar nodig ontbrekende vertalingen toe om tests te laten slagen. Dit proces was soms lastig vanwege onduidelijke fouten, maar uiteindelijk lukte het me om de vertalingen volledig op orde te krijgen.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Vrijdag: Code Simplificatie en Nieuw Ticket</h3>
        <p class="leading-relaxed">In Jenkins zag ik nog fouten bij twee tickets. Eén ticket heb ik vereenvoudigd zoals gevraagd, en de andere bleek een foutieve PMD-waarschuwing te geven, die ik heb gereset. Daarna startte ik met een nieuw ticket waarbij ik een probleem met het exporteren van grids aanpakte, waarbij tags niet correct werden geëxporteerd.</p>
      </div>

      <div class="space-y-4 mt-8 pt-6 border-t border-white/20">
        <h3 class="text-xl font-semibold mb-3 text-accent">Reflectie op de Week</h3>
        <p class="leading-relaxed italic">Deze week was gevuld met het oplossen van technische uitdagingen, zoals filtering en vertalingen opschonen, maar ook met het verbeteren van de gebruikerservaring en codekwaliteit. Het was soms puzzelen, vooral bij debugging, maar het zorgde voor waardevolle inzichten en vooruitgang.</p>
      </div>
    </div>
  `
},
{
  id: 14,
  title: "Week 15: Grid Export en Nieuwe Aanpak",
  date: "2025-05-12",
  categories: ["code", "lessons learned", "progress"],
  content: 
    `<div class="space-y-6">
      <p class="text-lg leading-relaxed">Deze week lag de focus op het verbeteren van de grid export functionaliteit. Ik begon met het correct tonen van vertalingen, maar kreeg later te horen dat de aanpak moest veranderen door een grotere herstructurering.</p>
      
      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Maandag: Vertalingen Grid Export</h3>
        <p class="leading-relaxed">Ik werkte aan een ticket om de juiste vertalingen bij de grid export werkend te krijgen. Na wat proberen en zoeken lukte dit tegen het einde van de dag.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Dinsdag en Woensdag: Nieuwe Structuur Uitzoeken</h3>
        <p class="leading-relaxed">Er werd besloten om het grid op te splitsen in twee aparte grids: <strong>InsurancePremium</strong> en <strong>Buffer</strong>. Dit was complexer dan verwacht en het kostte moeite om alles uit te zoeken. Op woensdag maakte ik goede vooruitgang en kon ik voorbereiden op het testen.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Donderdag: Testen en Aanpassen</h3>
        <p class="leading-relaxed">Ik schreef tests voor mijn code, maar kreeg feedback dat ik nog een oude methode gebruikte. Met hulp heb ik dit aangepast naar de nieuwe exportwijze voor beide grids, zodat het klaar was tegen het einde van de dag.</p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Vrijdag: Uitbreiden naar Andere Grids</h3>
        <p class="leading-relaxed">Omdat ik al met grid exports bezig was, begon ik met het aanpassen van de overige grids op dezelfde pagina naar de nieuwe methode. Dit werk zal ik komende week voortzetten.</p>
      </div>

      <div class="space-y-4 mt-8 pt-6 border-t border-white/20">
        <h3 class="text-xl font-semibold mb-3 text-accent">Reflectie op de Week</h3>
        <p class="leading-relaxed italic">Deze week was leerzaam door het aanpassen van een bestaande feature met een nieuwe aanpak. Ik ontdekte dat grondig uitzoeken en samenwerken essentieel zijn om grotere veranderingen succesvol door te voeren. Volgende week ga ik verder met het uitbreiden van de nieuwe exportmethodes.</p>
      </div>
    </div>`
},
{
  id: 15,
  title: "Week 16: Grids en Export Tickets",
  date: "2025-05-19",
  categories: ["code", "wins", "fails", "lessons learned", "collaboration"],
  content: `
    <div class="space-y-6">
      <p class="text-lg leading-relaxed">
        Deze week draaide om het afronden en aanpassen van verschillende grids binnen het nieuwe systeem, met een uitdagend export-ticket als kers op de taart. Het was een mix van succesmomenten en tegenslagen, waarbij samenwerken en goed voorbereiden essentieel waren.
      </p>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Maandag: Grids Overzetten</h3>
        <p class="leading-relaxed">
          Ik heb deze maandag besteed aan het afronden van het overzetten van grids naar het nieuwe systeem voor de betreffende pagina. Dit is succesvol afgerond, een sterke start van de week!
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Dinsdag: Moeizame Start met Nieuw Ticket</h3>
        <p class="leading-relaxed">
          Vandaag begon ik aan een nieuw ticket voor andere grids, maar liep vast door gebrek aan kennis binnen het team. Na lang zoeken werd besloten het ticket voorlopig te laten liggen tot een expert terug is. Een frustrerende dag, maar ook een les in geduld.
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Woensdag: Voorbereiding op Export-Ticket</h3>
        <p class="leading-relaxed">
          Ondanks dat het export-ticket complex leek, ben ik alvast begonnen met de basisaanpassingen die ik kon doen. Zo kon ik morgen, als de expert terug is, gerichte vragen stellen en sneller verder werken.
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-semibold mt-6 mb-3 pb-2 border-b border-white/20">Donderdag: Samenwerking en Afronding Export</h3>
        <p class="leading-relaxed">
          De collega met de benodigde kennis was aanwezig en kon mij direct helpen. Met zijn aanwijzingen heb ik het export-ticket zo ver mogelijk afgerond. Hoewel er misschien nog wat kleine foutjes inzitten, is het resultaat positief en klaar om eventueel door iemand anders opgepakt te worden.
        </p>
      </div>

      <div class="space-y-4 mt-8 pt-6 border-t border-white/20">
        <h3 class="text-xl font-semibold mb-3 text-accent">Reflectie op de Week</h3>
        <p class="leading-relaxed italic">
          Deze week was een mooie mix van uitdagingen en successen. Ik heb geleerd dat voorbereiding en samenwerking cruciaal zijn, zeker bij complexe taken waar niet altijd meteen expertise beschikbaar is. Ik ben trots dat ik het export-ticket toch heb kunnen afronden en kijk uit naar nieuwe kansen om mijn skills te verbeteren.
        </p>
      </div>
    </div>
  `
}];

const allCategories = [
  "code", 
  "lessons learned",
  "testing",
  "debugging",
  "frontend",
  "planning",
  "feedback",
  "teamwork",
  "automation",
  "challenges",
  "wins",
  "fails",
  "progress",
];

const Blog = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const toggleWeek = (weekId: number) => {
    setExpandedWeek(expandedWeek === weekId ? null : weekId);
  };

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.categories.includes(selectedCategory));

  return (
    <>
      <Head>
        <title>WPL Blog | Mijn Leerervaringen</title>
        <meta name="description" content="Mijn stage-ervaringen en leerproces wekelijks bijgehouden" />
      </Head>

      <div className="fixed top-6 right-6 z-50">
        <div className="flex items-center">
          <div className="mr-3 animate-pulse hidden sm:flex items-center bg-accent/20 px-4 py-2 rounded-full border border-accent/50">
            <span className="text-accent text-sm font-medium mr-2">Naar Home</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="text-accent"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <Link 
            href="/" 
            className="relative block w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-3 border-accent hover:border-secondary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
          >
            <Image
              src="/images/wiebenikfoto.jpeg"
              alt="Mijn profielfoto"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
              priority
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-sm font-medium">Home</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-primary-dark to-primary text-secondary px-4 sm:px-6 font-sans pt-24 sm:pt-28 md:pt-32">
        <div className="container mx-auto max-w-5xl py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-mono bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">
              Blogpagina
            </h1>
            <p className="text-xl text-secondary/80 max-w-2xl mx-auto">
              Mijn wekelijkse ervaringen en groei tijdens de stage
            </p>
          </div>
          
          <div className="bg-white/5 rounded-xl p-6 mb-12 border border-white/10">
            <h2 className="text-2xl font-semibold mb-4 text-accent">Onze Agile Werkwijze</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Dagelijkse Stand-ups
                </h3>
                <p className="leading-relaxed">
                  Elke werkdag om <strong className="font-semibold text-accent">11:00 uur</strong> hadden we een stand-up meeting waar we:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>De Jenkins builds en testresultaten bekeken</li>
                  <li>De voortgang van de sprint bespraken</li>
                  <li>Problemen met tickets identificeerden</li>
                  <li>Korte updates gaven over onze werkzaamheden</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Sprint Planning
                </h3>
                <p className="leading-relaxed">
                  Om de <strong className="font-semibold text-accent">twee weken op maandag</strong> hadden we een sprintmeeting waarin we:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>De vorige sprint evalueerden (wat ging goed, wat kon beter)</li>
                  <li>De nieuwe sprint planten</li>
                  <li>Tickets verdeelden onder teamleden</li>
                  <li>De werkverdeling voor de komende twee weken bepaalden</li>
                  <li>Eventuele blokkades of speciale aandachtspunten bespraken</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`px-5 py-2 rounded-full transition-all ${selectedCategory === "all" ? 'bg-accent text-primary-dark font-medium shadow-md' : 'bg-white/5 text-secondary hover:bg-white/10'}`}
            >
              Alle Weken
            </button>
            {allCategories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2 rounded-full capitalize transition-all ${selectedCategory === category ? 'bg-accent text-primary-dark font-medium shadow-md' : 'bg-white/5 text-secondary hover:bg-white/10'}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <div key={post.id} className="group transition-all">
                <div 
                  onClick={() => toggleWeek(post.id)}
                  className={`bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-5 border ${expandedWeek === post.id ? 'border-accent shadow-lg' : 'border-white/10 hover:border-accent/30'} transition-all cursor-pointer flex justify-between items-center`}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-lg mr-4 ${expandedWeek === post.id ? 'bg-accent/20' : 'bg-white/5'}`}>
                      <span className="text-xl font-bold">{post.id + 1}</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{post.title}</h2>
                      <p className="text-sm text-secondary/80 mt-1">{post.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex flex-wrap gap-2 mr-4">
                      {post.categories.map(category => (
                        <span 
                          key={category} 
                          className={`px-3 py-1 rounded-full text-xs font-medium ${expandedWeek === post.id ? 'bg-accent/20 text-accent' : 'bg-white/10 text-secondary'}`}
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className={`transform transition-transform ${expandedWeek === post.id ? 'rotate-180 text-accent' : 'text-secondary/80'}`}
                    >
                      <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedWeek === post.id ? 'max-h-[5000px]' : 'max-h-0'}`}
                >
                  <div 
                    className="prose prose-invert max-w-none p-6 bg-white/5 rounded-b-xl border border-t-0 border-white/10"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
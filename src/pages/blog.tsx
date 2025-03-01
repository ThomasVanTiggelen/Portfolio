import React, { useState } from "react";
import BlogsSection from "@/components/BlogsSection";
import FilterSection from "@/components/FilterSection";
import styles from "@/styles/Blog.module.css";

const blogPosts = [
  {
    id: 0,
    title: "Mijn Eerste Week op Stage",
    date: "2025-02-03",
    categories: ["code", "lessons learned"],
    content: `
      <p>Deze week stond in het teken van <strong>kennismaken, wennen aan de omgeving en de eerste opdrachten oppakken</strong>. Het was een mix van <strong>uitdagingen, nieuwe technologieën leren en de eerste successen</strong>.</p>
      
      <h3>Maandag: Introductie en Setup</h3>
      <p>De eerste dag begon met een <strong>rondleiding en uitleg</strong> over de applicaties waarmee we gaan werken. Daarna was het tijd om onze <strong>laptops in te stellen</strong>, IntelliJ te installeren en de omgeving klaar te maken. Aan het einde van de dag hebben we een eerste <strong>kijkje genomen in de Java-code</strong>, wat voor mij nog redelijk nieuw is.</p>
      
      <h3>Dinsdag: Eerste Frontend Tickets</h3>
      <p>Vandaag mocht ik <strong>mijn eerste tickets</strong> oppakken! Ik werkte aan:</p>
      <ul>
        <li>Een <strong>waarschuwingsmelding</strong> wanneer een gebruiker een folder probeert te verwijderen bij <strong>Documents</strong>.</li>
        <li>Een <strong>nieuwe kolom</strong> om bij te houden of kinderen gereageerd hebben als een overleden persoon zijn pensioen niet had opgehaald.</li>
      </ul>
      <p>Beide functies moesten worden geïmplementeerd in <strong>Nederlands, Frans en Engels</strong>.</p>

      <h3>Woensdag: Uitdaging met Quill</h3>
      <p>Ik kreeg een ticket waarbij ik een <strong>variabel veld in Quill (een texteditor)</strong> bewerkbaar moest maken. Dit leek een simpele taak, maar bleek een <strong>stuk complexer</strong> dan verwacht. De hele dag heb ik geprobeerd om dit op te lossen, maar zonder succes. Dit was mijn eerste echte <strong>technische uitdaging</strong> tijdens de stage.</p>

      <h3>Donderdag: Alternatieve Oplossing</h3>
      <p>Omdat de oorspronkelijke aanpak te moeilijk bleek, mocht ik <strong>een alternatieve oplossing</strong> proberen. De nieuwe oplossing zorgde ervoor dat <strong>sysadmins een custom veld kunnen toevoegen</strong> voordat een veld wordt aangemaakt. Dit gaf mij een beter inzicht in hoe dynamische formulieren werken.</p>

      <h3>Vrijdag: Ticket Afgerond en Start Groot Project</h3>
      <p>In de ochtend heb ik mijn <strong>oplossing voltooid</strong> en ervoor gezorgd dat de melding in drie talen verschijnt. Daarna heb ik het ticket op <strong>"to review"</strong> gezet. In de namiddag ben ik begonnen aan een <strong>groter ticket</strong>, waarbij een deel van een pagina <strong>herwerkt moet worden</strong>. Dit is een grotere uitdaging die ik volgende week verder ga oppakken.</p>

      <h3>Reflectie op de Week</h3>
      <p>Deze week was een <strong>goede mix van leren en doen</strong>. Ik heb kennisgemaakt met het team en de codebase, gewerkt aan mijn eerste tickets en een paar <strong>technische uitdagingen</strong> ervaren. Volgende week kijk ik ernaar uit om <strong>meer backend-werk</strong> te verkennen en mijn grotere ticket af te ronden!</p>
    `,
  },
  {
    id: 1,
    title: "Week 2: Dieper de Code in",
    date: "2025-02-10",
    categories: ["code", "debugging", "testing", "lessons learned"],
    content: `
      <p>Deze week draaide om het werken aan een <strong>groter ticket</strong>, het oplossen van bugs en het leren van <strong>best practices</strong> binnen het team. Ik heb veel geleerd over <strong>code styling, testing en configuratie</strong>.</p>
      
      <h3>Maandag: Start van een Groot Ticket</h3>
      <p>De week begon met een <strong>groter ticket</strong>. Het doel was om twee nieuwe velden toe te voegen en de pagina een <strong>nieuwe look</strong> te geven. Ik heb de velden overal geïntegreerd en ben begonnen met de herwerking van de pagina.</p>

      <h3>Dinsdag: Debugging en UI-aanpassingen</h3>
      <p>Vandaag heb ik fouten in de code opgelost zodat de applicatie correct opstartte. Daarna heb ik verder gewerkt aan de <strong>styling en layout</strong> van de pagina om de nieuwe look af te maken.</p>

      <h3>Woensdag: Connecties en Feedback</h3>
      <p>Ik heb gezorgd dat de nieuwe velden correct werden doorgegeven en automatisch ingevuld bij het toevoegen van een invaliditeit. Aan het einde van de dag heb ik mijn werk gedemonstreerd aan mijn begeleider. Na feedback bleek dat we een <strong>andere methode</strong> moesten gebruiken voor deze velden, wat ik de volgende dag zou aanpassen.</p>

      <h3>Donderdag: Code Aanpassen en Testing</h3>
      <p>Vandaag heb ik de implementatie aangepast aan de nieuwe methode en ben ik begonnen met het schrijven van <strong>tests</strong> om de code coverage hoog te houden. Toen ik alles opnieuw toonde, kreeg ik feedback op de <strong>codestyle</strong>, die ik moest verbeteren.</p>

      <h3>Vrijdag: Afronding en Nieuw Ticket</h3>
      <p>Het grote ticket werd afgerond en gepusht voor review. Daarna kreeg ik een nieuw ticket waarbij ik configuratie moest toevoegen aan een <strong>testproject</strong> dat automatisch de site test. Als een test faalt, wordt er een screenshot opgeslagen. Mijn taak was om <strong>annotaties</strong> toe te voegen die bepalen op welke client de tests draaien. Dit heb ik op tijd afgerond en daarmee zat week 2 erop!</p>

      <h3>Reflectie op de Week</h3>
      <p>Deze week was een stuk <strong>technischer en uitdagender</strong>. Ik heb geleerd om <strong>met grotere tickets te werken</strong>, betere tests te schrijven en hoe belangrijk een consistente <strong>codestyle</strong> is. Volgende week kijk ik ernaar uit om nog dieper in de backend te duiken!</p>
    `,
  },
  {
    id: 2,
    title: "Week 3: Tickets, Testing en Feedback",
    date: "2025-02-17",
    categories: ["code", "testing", "lessons learned"],
    content: `
      <p>Deze week stond in het teken van <strong>het afronden van tickets, het oplossen van uitdagingen bij testing en het verwerken van feedback</strong>. Ik heb gewerkt aan nieuwe functionaliteiten en geleerd hoe belangrijk heldere communicatie is binnen een team.</p>
      
      <h3>Maandag: Sprint Review en Nieuw Ticket</h3>
      <p>De dag begon met het bekijken van een <strong>nieuw ticket</strong> en het analyseren waar de wijzigingen moesten komen. Om 11 uur had ik een <strong>sprint review meeting</strong>, waarbij ik een demo gaf van het grote ticket dat ik vorige week had afgerond. Na de meeting begon ik aan een nieuwe taak: uittredingsbrieven moesten naar de inbox worden gestuurd, tenzij de eBox niet geactiveerd was, dan moesten ze naar een SFTP-server van Inprintia. Dit probleem was vrij snel opgelost.</p>
  
      <h3>Dinsdag: Testing en Feedback Verwerken</h3>
      <p>Vandaag begon ik met het <strong>schrijven van tests</strong> om de code coverage op peil te houden. Dit bleek lastiger dan verwacht, en omdat niet alle programmeurs vertrouwd waren met dit onderdeel, moest ik dit even on hold zetten tot een collega terug was van vakantie. Daarna werkte ik verder aan de <strong>feedback</strong> op een groot ticket van week 2 en voerde verbeteringen door.</p>
  
      <h3>Woensdag: Verbeteringen Afronden en Nieuw Ticket</h3>
      <p>In de ochtend heb ik de <strong>verbeteringen afgerond</strong> en de finale versie gepusht voor review. Vervolgens kreeg ik een nieuw ticket waarbij ik een methode moest toevoegen zodat op een pagina voor settlements het <strong>bruto proposal bedrag correct werd weergegeven</strong>. Hier ben ik de rest van de dag mee bezig geweest en ik heb het ticket volledig afgerond.</p>
  
      <h3>Donderdag: Extra Info Toevoegen</h3>
      <p>Mijn baas gaf feedback op het vorige ticket en vroeg om een <strong>aanpassing</strong>. Ik heb een tekst toegevoegd die aangeeft dat het bedrag kan afwijken, en dit moest ook op een andere pagina worden weergegeven. Dit heb ik opgelost door een <strong>extra info-icoon</strong> toe te voegen dat enkel zichtbaar is wanneer de settlement <strong>proposed</strong> is. Ik implementeerde dit in vier talen en rondde het ticket af.</p>
  
      <h3>Vrijdag: Historiek en Testing Ticket</h3>
      <p>Vandaag begon ik met een nieuw ticket waarin ik een <strong>historiek</strong> moest implementeren voor enkele velden, zodat je kunt zien wat er in het verleden gestaan heeft. Hier ben ik mee gestart. Aan het einde van de dag kreeg ik eindelijk <strong>uitleg over het testing-ticket</strong> waar ik in het begin van de week op vastzat. Dit zal ik in week 4 verder moeten afwerken.</p>
  
      <h3>Reflectie op de Week</h3>
      <p>Deze week was een mix van <strong>functionaliteit ontwikkelen, testing en het verwerken van feedback</strong>. Ik heb geleerd hoe belangrijk heldere communicatie is binnen een team, vooral bij complexere taken. Volgende week ga ik verder met het testing-ticket en ben ik benieuwd naar nieuwe uitdagingen!</p>
    `,
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.categories.includes(selectedCategory));

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Mijn Stageblog</h1>
      <FilterSection onCategoryChange={handleCategoryChange} />
      <div className={styles.postsContainer}>
        {filteredPosts.map((post) => (
          <BlogsSection
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            categories={post.categories}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;

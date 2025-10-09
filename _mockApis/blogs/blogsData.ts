import { Chance } from "chance";
import mock from "../mockAdapter";

// Images from Unsplash and Pexels (verified, free-to-use for illustrative purposes as of October 2025)
const blogImages = {
  // Blog 1: From Nairobi to Notre Dame
  kenyattaUni: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=60",
  ndCampus: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  nairobiSkyline1: "https://images.unsplash.com/photo-1575444691327-7e5c9e8e0b68?auto=format&fit=crop&w=800&q=60",
  nairobiUniCampus1: "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=800&fit=crop",
  nairobiSustainableDesign1: "https://images.unsplash.com/photo-1580430300574-1a5b6a0e6b5e?auto=format&fit=crop&w=800&q=60",
  nairobiStreetLife1: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=60",
  notreDameRomeProgram1: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  notreDameStudio1: "https://images.unsplash.com/photo-1516321318423-4b3b8c7b0f1e?auto=format&fit=crop&w=800&q=60",
  notreDameGroupProject1: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=60",
  colosseumTeaser1: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=60",
  stPetersTeaser1: "https://images.unsplash.com/photo-1513652859026-aae5be4d7443?auto=format&fit=crop&w=800&q=60",
  nairobiModel1: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60",
  nairobiAirlineview: "https://www.flightsfrom.com/routes/NBO-JFK.png",
  // Blog 2: American Icons
  usaTrip: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
  fieldVisits: "https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=800&q=60",
  empireStateExterior1: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=800&q=60",
  empireStateObservationDeck1: "https://images.unsplash.com/photo-1416095874397-5d2ce6a4b0c4?auto=format&fit=crop&w=800&q=60",
  empireStateConstruction1: "https://images.unsplash.com/photo-1555109307-f7d9da25c244?auto=format&fit=crop&w=800&q=60",
  empireStateArtDeco1: "https://images.unsplash.com/photo-1528291151377-165f5107c82a?auto=format&fit=crop&w=800&q=60",
  usCapitolDome1: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60",
  usCapitolRotunda1: "https://images.unsplash.com/photo-1502772066655-938948377873?auto=format&fit=crop&w=800&q=60",
  usCapitolColumns1: "https://images.pexels.com/photos/2254122/pexels-photo-2254122.jpeg?auto=compress&cs=tinysrgb&w=800&fit=crop",
  usCapitolFieldTrip1: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=60",
  nycSkyline1: "https://images.unsplash.com/photo-1504215680853-6c7a66f896e4?auto=format&fit=crop&w=800&q=60",
  dcMonuments1: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60",
  usamap: "https://www.cia.gov/the-world-factbook/static/maps/US-map.jpg",
  // Blog 3: Italy’s Timeless Lessons
  italyTrip: "https://images.unsplash.com/photo-1504394423664-3d6cd0a6e8db?auto=format&fit=crop&w=800&q=60",
  colosseumExterior1: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=60",
  colosseumArches1: "https://images.unsplash.com/photo-1552831388-6a0b3575b2a7?auto=format&fit=crop&w=800&q=60",
  colosseumHypogeum1: "https://images.unsplash.com/photo-1580130775562-0b8b2a0993f1?auto=format&fit=crop&w=800&q=60",
  stPetersDome1: "https://images.unsplash.com/photo-1513652859026-aae5be4d7443?auto=format&fit=crop&w=800&q=60",
  stPetersPiazza1: "https://images.unsplash.com/photo-1503275076964-9d2f8de13dfe?auto=format&fit=crop&w=800&q=60",
  milanCathedralRooftop1: "https://images.unsplash.com/photo-1503424886303-368589fcc9a7?auto=format&fit=crop&w=800&q=60",
  milanMadonnina1: "https://images.unsplash.com/photo-1591018653367-1d73b24e2e81?auto=format&fit=crop&w=800&q=60",
  milanGothicFacade1: "https://images.pexels.com/photos/258160/pexels-photo-258160.jpeg?auto=compress&cs=tinysrgb&w=800&fit=crop",
  romeTour1: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60",
  milanSkyline1: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=60",
  italyAirlineview: "https://www.flightsfrom.com/routes/FCO-JFK.png",
  // Blog 4: Germany’s Architectural Gems
  germanyTrip: "https://images.unsplash.com/photo-1468071174046-657d9d351a40?auto=format&fit=crop&w=800&q=60",
  neuschwansteinExterior1: "https://images.unsplash.com/photo-1504609813448-d1d9f71766e4?auto=format&fit=crop&w=800&q=60",
  neuschwansteinAlps1: "https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=800&q=60",
  neuschwansteinInteriors1: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=60",
  neuschwansteinTowers1: "https://images.unsplash.com/photo-1501547936600-4bb3e632b1a2?auto=format&fit=crop&w=800&q=60",
  brandenburgGateColumns1: "https://images.unsplash.com/photo-1527632927984-5b52ff7a3978?auto=format&fit=crop&w=800&q=60",
  brandenburgGateQuadriga1: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
  brandenburgGateNight1: "https://images.unsplash.com/photo-1564419320461-6870880221ad?auto=format&fit=crop&w=800&q=60",
  brandenburgRestoration1: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=60",
  berlinTour1: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=60",
  bavarianLandscape1: "https://images.pexels.com/photos/3601453/pexels-photo-3601453.jpeg?auto=compress&cs=tinysrgb&w=800&fit=crop",
};

import type { BlogTypes } from "@/types/blog/BlogTypes";

const chance = new Chance();

const BlogGridData: BlogTypes[] = [
  {
    id: chance.integer({ min: 1, max: 2000 }),
    blog_image: blogImages.nairobiAirlineview,
    blog_title: "From Nairobi to Notre Dame: Launching My Architectural Odyssey",
    blog_date: "September 5, 2024",
    blog_inner_image: blogImages.ndCampus,
    blog_description: `
      <p>Growing up in Nairobi, Kenya, I was immersed in a city where modern skyscrapers rise beside traditional mud-and-thatch structures, sparking my fascination with architecture. The vibrant chaos of Nairobi’s streets—hawkers calling, matatus honking, and markets buzzing—taught me that buildings are more than structures; they’re vessels of culture, community, and resilience. At Kenyatta University, I pursued a bachelor’s degree in architecture, diving into sustainable design tailored to Kenya’s equatorial climate. Crafting models from wood and concrete, I learned to balance aesthetics with practicality, designing structures that could withstand intense sun and seasonal rains while serving communal needs. Projects like my Nairobi skyline model, which won a student award, ignited my ambition to explore global architecture.</p>
      <p>The leap to Notre Dame University for post-doctoral studies was a transformative milestone. Leaving behind Nairobi’s familiar vibrancy for South Bend, Indiana, felt like stepping into a new world. Notre Dame’s architecture program, renowned for its classical roots and innovative edge, challenged me to think beyond Kenya’s borders. The curriculum blended rigorous history—studying Vitruvian principles and Gothic proportions—with modern tools like CAD and parametric design. The Rome Studies Program was the pinnacle, immersing me in Italy’s architectural heritage. Walking through the Colosseum’s travertine arches, I marveled at Roman engineering that endured 2,000 years of earthquakes and wars. St. Peter’s Basilica, with Michelangelo’s soaring dome, revealed the power of architecture to fuse faith, art, and human aspiration. These experiences reshaped my philosophy: architecture must honor historical wisdom while addressing contemporary community needs.</p>
      <p>In Nairobi, I saw how informal settlements used recycled materials for resilient homes, a lesson in resourcefulness that echoed in Italy’s adaptive reuse of ancient structures. At Notre Dame, I learned to merge these local insights with global perspectives. The campus itself, with its Gothic-inspired Basilica of the Sacred Heart, felt like a living textbook, its golden dome a beacon of academic rigor. Group projects with classmates from Asia, Europe, and the Americas broadened my worldview, teaching me to design for diverse cultural contexts. Yet, the transition wasn’t seamless. The academic intensity—long nights in the studio, mastering new software, and decoding Western architectural theory—tested my resilience. Language barriers and cultural differences, from casual Midwestern slang to unfamiliar social norms, added layers of complexity. Support from Notre Dame’s international student programs and my Kenyan tenacity kept me grounded, reminding me of Nairobi’s bustling markets where adaptability is a way of life.</p>
      <p>My time at Kenyatta University instilled a passion for community-driven design, rooted in Kenya’s ethos of *harambee* (pulling together). Notre Dame amplified this, showing me how architecture can bridge cultures and eras. The Colosseum’s communal spectacle spaces inspired ideas for modern Kenyan public squares, while St. Peter’s taught me about scale and spirituality in civic design. These lessons inform my thesis on sustainable urban centers for Nairobi, blending local materials with global techniques. As I sketch designs under Notre Dame’s oaks, I carry Nairobi’s vibrancy and Italy’s timelessness, weaving them into a vision for architecture that serves both heritage and future.</p>
      <p><strong>Design Insight:</strong> Sustainable design, rooted in local contexts, can bridge cultural divides, as seen in Kenya’s eco-friendly mud homes and Italy’s enduring stone structures. Architects must listen to a place’s history and people to create spaces that resonate across generations.</p>
      <p><strong>Challenges:</strong> Adapting to Notre Dame’s academic rigor and U.S. cultural nuances was daunting. Mastering complex theory and software while navigating homesickness required resilience, but mentorship and my Kenyan roots—forged in Nairobi’s adaptive spirit—kept me grounded.</p>
      <p><strong>Did You Know?</strong> My Nairobi skyline model at Kenyatta University, inspired by the city’s Kenyatta International Convention Centre, won a student award in 2020, sparking my dream to study abroad and explore global architecture.</p>
      <div class="gallery-grid">
        <img src="${blogImages.nairobiSkyline1}" alt="Nairobi skyline with modern skyscrapers" class="gallery-img">
        <img src="${blogImages.nairobiUniCampus1}" alt="Kenyatta University campus pathways" class="gallery-img">
        <img src="${blogImages.nairobiSustainableDesign1}" alt="Eco-friendly homes in Kenyan settlements" class="gallery-img">
        <img src="${blogImages.nairobiStreetLife1}" alt="Bustling Nairobi markets and matatus" class="gallery-img">
        <img src="${blogImages.notreDameRomeProgram1}" alt="Notre Dame Rome Studies Program villa" class="gallery-img">
        <img src="${blogImages.notreDameStudio1}" alt="Students crafting models in architecture studio" class="gallery-img">
        <img src="${blogImages.notreDameGroupProject1}" alt="Diverse group discussing designs at Notre Dame" class="gallery-img">
        <img src="${blogImages.colosseumTeaser1}" alt="Colosseum’s enduring travertine arches" class="gallery-img">
        <img src="${blogImages.stPetersTeaser1}" alt="St. Peter’s Basilica Renaissance dome" class="gallery-img">
        <img src="${blogImages.nairobiModel1}" alt="Award-winning Nairobi skyline model" class="gallery-img">
      </div>
    `,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    blog_image: blogImages.usamap,
    blog_title: "American Icons: Empire State Building and U.S. Capitol",
    blog_date: "April 10, 2025",
    blog_inner_image: blogImages.usamap,
    blog_description: `
      <p>As a Notre Dame architecture student, my field trips across the United States unveiled the audacity of American design, epitomized by the Empire State Building and the U.S. Capitol. Arriving in New York City, I stood beneath the Empire State Building, its 1,454-foot Art Deco silhouette piercing the Manhattan sky. Completed in 1931 during the Great Depression, this 102-story skyscraper was erected in a staggering 410 days—a testament to American ambition and engineering prowess. Designed by Shreve, Lamb & Harmon, its steel frame and limestone facade introduced me to the efficiency of modern construction techniques. The spire, originally a mooring mast for airships, symbolizes a bold, if impractical, vision of progress. Walking its 86th-floor observation deck, I sketched its iconic form, inspired by its cinematic legacy in films like *King Kong*.</p>
      <p>In Washington, DC, the U.S. Capitol offered a contrasting lesson in neoclassical elegance. Spanning 1793 to 1866, its construction under architects like William Thornton and Thomas U. Walter weathered political turmoil, including the 1814 British attack that burned its early structure. The cast-iron dome, completed during the Civil War, stands at 288 feet, a symbol of democratic resilience. Its 16.5-acre complex, with 540 rooms, balances grandeur (Corinthian columns, frescoed rotunda) with functionality (legislative chambers). Exploring the Capitol’s crypt and statuary hall, I saw how architecture narrates national identity, much like Kenya’s parliament building reflects post-independence aspirations. The dome’s engineering, using 8.9 million pounds of iron, fascinated me, paralleling my studies on structural innovation at Notre Dame.</p>
      <p>These landmarks reshaped my understanding of architecture’s role in storytelling. The Empire State’s rapid construction—1,872 steps built at 4.5 stories per week—taught me about balancing speed with precision, a lesson applicable to Kenya’s fast-growing urban centers like Nairobi. The Capitol’s enduring design, rebuilt after destruction, echoed the resilience I saw in Kenyan communities rebuilding after floods. As a Kenyan student, navigating these urban giants was daunting; New York’s frenetic pace and DC’s sprawling sites overwhelmed my senses, accustomed to Nairobi’s more organic chaos. Yet, these challenges honed my observational skills, teaching me to decode urban layouts and crowd dynamics, skills I now apply to designing public spaces.</p>
      <p>At Notre Dame, I’ve studied how skyscrapers like the Empire State revolutionized vertical cities, much like Nairobi’s emerging high-rises. The Capitol’s civic symbolism inspired my thesis on community centers that foster unity. Both landmarks showed me that architecture can embody a nation’s values—ambition, resilience, democracy—while addressing practical needs. My Kenyan perspective, rooted in communal design, found resonance in America’s bold structural feats, urging me to blend global innovation with local sensitivity in my future projects.</p>
      <p><strong>Design Insight:</strong> Bold engineering, like the Empire State’s rapid steel-frame construction, teaches architects to balance speed, scale, and aesthetics, a principle vital for Kenya’s urbanizing landscapes where efficiency meets cultural expression.</p>
      <p><strong>Challenges:</strong> Navigating vast urban sites as an international student, from New York’s skyscraper canyons to DC’s monumental layouts, was overwhelming but sharpened my ability to analyze complex built environments.</p>
      <p><strong>Did You Know?</strong> Sketching the Empire State’s spire from its 102nd-floor deck, I was inspired by its *King Kong* fame, a reminder of architecture’s cultural impact beyond physical form.</p>
      <div class="gallery-grid">
        <img src="${blogImages.empireStateExterior1}" alt="Empire State Building Art Deco exterior" class="gallery-img">
        <img src="${blogImages.empireStateObservationDeck1}" alt="86th-floor observation deck view" class="gallery-img">
        <img src="${blogImages.empireStateConstruction1}" alt="Historical construction of Empire State" class="gallery-img">
        <img src="${blogImages.empireStateArtDeco1}" alt="Limestone facade close-up" class="gallery-img">
        <img src="${blogImages.usCapitolDome1}" alt="U.S. Capitol cast-iron dome at sunset" class="gallery-img">
        <img src="${blogImages.usCapitolRotunda1}" alt="Frescoed rotunda interior" class="gallery-img">
        <img src="${blogImages.usCapitolColumns1}" alt="Corinthian columns of U.S. Capitol" class="gallery-img">
        <img src="${blogImages.usCapitolFieldTrip1}" alt="Group tour at U.S. Capitol" class="gallery-img">
        <img src="${blogImages.nycSkyline1}" alt="Manhattan skyline with Empire State" class="gallery-img">
        <img src="${blogImages.dcMonuments1}" alt="U.S. Capitol in Washington DC context" class="gallery-img">
      </div>
    `,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    blog_image: blogImages.italyAirlineview,
    blog_title: "Italy’s Timeless Lessons: Colosseum, St. Peter’s, and Milan Cathedral",
    blog_date: "July 20, 2025",
    blog_inner_image: blogImages.italyTrip,
    blog_description: `
      <p>Italy, through Notre Dame’s Rome Studies Program, was a revelation for me as a Kenyan architecture student. The Colosseum, St. Peter’s Basilica, and Milan Cathedral offered profound lessons in durability, artistry, and legacy. Stepping into the Colosseum (70-80 CE), I was awestruck by its scale: a 615-foot-long amphitheater seating 50,000, built with travertine, tuff, and concrete. Its engineering ingenuity—80 arched entrances, a hypogeum for gladiators and animals—survived earthquakes and centuries of stone looting. As a Kenyan, I saw parallels with communal gathering spaces like Nairobi’s open-air markets, where functionality meets cultural vibrancy. The Colosseum’s robust arches inspired my sketches for resilient public plazas in Kenya.</p>
      <p>St. Peter’s Basilica (1506-1626) in Vatican City elevated my understanding of architecture’s spiritual power. Michelangelo’s dome, spanning 138 feet, soars above Bernini’s colonnaded piazza, blending Renaissance artistry with engineering precision. The basilica’s 284 columns and 45 altars create a sacred choreography, guiding pilgrims through light and shadow. Its scale reminded me of Kenya’s Jamia Mosque, where communal prayer spaces foster unity. Studying the dome’s double-shell construction, I learned how Renaissance architects balanced aesthetics with structural stability, a principle I apply to designing sustainable Kenyan civic buildings.</p>
      <p>Milan Cathedral (1386-1965), with its 135 marble spires and 3,400 statues, taught me about architectural patience. Spanning six centuries, its Gothic facade and flying buttresses reflect relentless dedication. Climbing to the rooftop, I sketched the golden Madonnina statue gleaming against the Alps, struck by the cathedral’s blend of art and endurance. In Kenya, where rapid urbanization often outpaces planning, this slow craftsmanship inspired me to advocate for long-term design thinking. The cathedral’s intricate tracery and stained glass echoed the detailed beadwork of Kenyan Maasai architecture, linking my heritage to Italy’s legacy.</p>
      <p>Italy’s sites taught me that architecture is a dialogue between past and present. The Colosseum’s communal design, St. Peter’s spiritual grandeur, and Milan’s enduring craft inform my vision for Kenyan urban centers that blend tradition with modernity. Yet, deciphering Italy’s preservation techniques—maintaining ancient stone amid modern urban pressures—was complex. As a foreign student, navigating Rome’s labyrinthine streets and Milan’s bustling piazzas challenged my spatial instincts, but it deepened my appreciation for adaptive reuse, a skill I’ll apply to Nairobi’s historic districts.</p>
      <p><strong>Design Insight:</strong> Italy’s blend of durability and beauty inspires architects to create spaces that endure culturally and physically, a model for Kenya’s urban future where heritage must coexist with growth.</p>
      <p><strong>Challenges:</strong> Decoding preservation techniques in Italy’s historic cities was complex, requiring me to learn conservation methods alien to Kenya’s newer urban fabric, but it enriched my approach to adaptive reuse.</p>
      <p><strong>Did You Know?</strong> Climbing Milan Cathedral’s roof, I sketched the Madonnina statue, glowing against the skyline, a moment that felt like capturing centuries of architectural devotion.</p>
      <div class="gallery-grid">
        <img src="${blogImages.colosseumExterior1}" alt="Colosseum full exterior view" class="gallery-img">
        <img src="${blogImages.colosseumArches1}" alt="Travertine arches of Colosseum" class="gallery-img">
        <img src="${blogImages.colosseumHypogeum1}" alt="Colosseum underground hypogeum" class="gallery-img">
        <img src="${blogImages.stPetersDome1}" alt="Michelangelo’s dome in St. Peter’s Basilica" class="gallery-img">
        <img src="${blogImages.stPetersPiazza1}" alt="Bernini’s colonnaded piazza at St. Peter’s" class="gallery-img">
        <img src="${blogImages.milanCathedralRooftop1}" alt="Milan Cathedral rooftop spires" class="gallery-img">
        <img src="${blogImages.milanMadonnina1}" alt="Golden Madonnina statue on Milan Cathedral" class="gallery-img">
        <img src="${blogImages.milanGothicFacade1}" alt="Gothic facade with flying buttresses" class="gallery-img">
        <img src="${blogImages.romeTour1}" alt="Guided architecture tour in Rome" class="gallery-img">
        <img src="${blogImages.milanSkyline1}" alt="Milan skyline featuring Duomo" class="gallery-img">
      </div>
    `,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    blog_image: blogImages.germanyTrip,
    blog_title: "Germany’s Architectural Gems: Neuschwanstein and Brandenburg Gate",
    blog_date: "October 15, 2025",
    blog_inner_image: blogImages.germanyTrip,
    blog_description: `
      <p>My architectural journey took me to Germany, where Neuschwanstein Castle and the Brandenburg Gate unveiled the power of narrative-driven design. As a Kenyan student at Notre Dame, I found Neuschwanstein (1869-1886) in the Bavarian Alps mesmerizing. King Ludwig II’s fairy-tale vision, designed by Christian Jank, blends Romanesque towers with 19th-century innovations like central heating and plumbing. Spanning 65,000 square feet across four floors, its 200 rooms—only 14 fully completed—feature murals of Wagnerian operas, evoking a mythic past. Set against rugged cliffs, it reminded me of Kenya’s Ngong Hills, where landscapes shape cultural identity. Neuschwanstein’s theatricality inspired my designs for community centers that tell local stories, like Nairobi’s vibrant oral traditions.</p>
      <p>The Brandenburg Gate (1788-1791) in Berlin, designed by Carl Gotthard Langhans, offered a stark contrast. Its neoclassical sandstone facade, with 12 Doric columns forming five passages, stands 85 feet tall and 213 feet wide. A symbol of peace, it endured Napoleon’s occupation, WWII destruction, and German reunification in 1989. The quadriga atop, sculpted by Johann Gottfried Schadow, adds dynamic energy. Its political narrative resonated with me, recalling Kenya’s independence monuments like the Nyayo Fountain. Studying its restoration post-WWII, I learned how architecture can heal divided societies, a lesson for Kenya’s ethnically diverse urban centers.</p>
      <p>Germany’s sites taught me that architecture is storytelling through form. Neuschwanstein’s romanticism, with its Ludwig-financed $31 million (adjusted) cost, showed me how personal vision drives design, while the Brandenburg Gate’s resilience highlighted public symbolism. As a Kenyan, I connected their narrative depth to African griot traditions, where buildings preserve history. Yet, understanding Germany’s WWII-damaged preservation efforts was humbling; the technical complexity of restoring sandstone or retrofitting castles challenged my training. Navigating rural Bavaria and urban Berlin as an international student tested my logistical skills, but it deepened my respect for context-driven design.</p>
      <p>At Notre Dame, I’m applying these lessons to my thesis on cultural hubs for Nairobi, blending Germany’s narrative approach with Kenyan communal values. Neuschwanstein’s whimsical interiors inspire playful public spaces, while the Brandenburg Gate’s civic role informs my designs for inclusive urban plazas. Germany showed me that architecture can transcend time, uniting past dreams with future aspirations.</p>
      <p><strong>Design Insight:</strong> Combining historical reverence with modern innovation creates spaces that resonate across time, a principle for Kenyan cities where tradition and progress collide.</p>
      <p><strong>Challenges:</strong> Understanding WWII-damaged preservation efforts was humbling, requiring me to learn restoration techniques far removed from Kenya’s newer architectural context.</p>
      <p><strong>Did You Know?</strong> Neuschwanstein’s Disney connection— inspiring Sleeping Beauty’s castle—sparked my interest in architecture’s pop culture impact, a lens I apply to Kenya’s emerging design scene.</p>
      <div class="gallery-grid">
        <img src="${blogImages.neuschwansteinExterior1}" alt="Neuschwanstein Castle fairy-tale exterior" class="gallery-img">
        <img src="${blogImages.neuschwansteinAlps1}" alt="Bavarian Alps backdrop for Neuschwanstein" class="gallery-img">
        <img src="${blogImages.neuschwansteinInteriors1}" alt="Wagnerian murals in Neuschwanstein interiors" class="gallery-img">
        <img src="${blogImages.neuschwansteinTowers1}" alt="Romanesque towers of Neuschwanstein" class="gallery-img">
        <img src="${blogImages.brandenburgGateColumns1}" alt="Doric columns of Brandenburg Gate" class="gallery-img">
        <img src="${blogImages.brandenburgGateQuadriga1}" alt="Quadriga sculpture atop Brandenburg Gate" class="gallery-img">
        <img src="${blogImages.brandenburgGateNight1}" alt="Brandenburg Gate illuminated at dusk" class="gallery-img">
        <img src="${blogImages.brandenburgRestoration1}" alt="Post-WWII restoration of Brandenburg Gate" class="gallery-img">
        <img src="${blogImages.berlinTour1}" alt="Architecture tour in Berlin" class="gallery-img">
        <img src="${blogImages.bavarianLandscape1}" alt="Bavarian Alps landscape" class="gallery-img">
      </div>
    `,
  },
];

mock.onGet("/api/data/blog/grid").reply(() => {
  return [200, BlogGridData];
});

mock.onPost("/api/data/blog/post").reply((config: string | any) => {
  try {
    const { title } = JSON.parse(config.data);

    const paramCase = (t: string) =>
      t.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");

    const post = BlogGridData.find(
      (_post: BlogTypes | string | any) => paramCase(_post.blog_title) === title
    );

    if (!post) {
      return [404, { message: "Post not found" }];
    }

    return [200, { post }];
  } catch (error) {
    console.error(error);
    return [500, { message: "Internal server error" }];
  }
});

export default BlogGridData;
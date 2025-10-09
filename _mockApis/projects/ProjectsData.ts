import { Chance } from "chance";
import mock from "../mockAdapter";

import type { ProjectsTypes } from "@/types/projects/ProjectsType";

const chance = new Chance();

const ProjectGridData: ProjectsTypes[] = [
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Empire State Building",
    project_image: "https://img.andrewprokos.com/EMPIRE-STATE-BUILDING-PANORAMIC-VIEW-VERTICAL-2025-3392-1200PX-206x500.jpg",
    tag1: "Skyscraper",
    tag2: "Art Deco",
    industry: "Architecture",
    raised: "40.9M",
    description: `
      <p>The Empire State Building in New York City is an iconic Art Deco skyscraper, standing at 1,454 feet (including its antenna). It symbolizes American ambition and resilience during the Great Depression.</p>
      <ul>
        <li><strong>Year Built:</strong> Construction started on March 17, 1930; completed on April 11, 1931; opened on May 1, 1931.</li>
        <li><strong>Architects/Designers:</strong> Shreve, Lamb & Harmon; William F. Lamb (chief designer); structural engineer Homer Gage Balcom.</li>
        <li><strong>Nationality of Builders:</strong> American; main contractor Starrett Brothers and Eken; developer Empire State Inc., including John J. Raskob and Al Smith.</li>
        <li><strong>Construction Technology and Materials:</strong> Riveted steel frame; facade clad in Indiana limestone, granite, aluminum, and stainless steel; 6,514 windows; 57,480 short tons of steel.</li>
        <li><strong>Reasons for Construction:</strong> To create the world's tallest office building as a symbol of ambition; part of a skyscraper race with the Chrysler Building.</li>
        <li><strong>Challenges Faced:</strong> Built during the Great Depression with low initial occupancy; financial losses until 1950s; worker deaths during construction.</li>
        <li><strong>Dimensions:</strong> Height to tip 1,454 ft; 102 stories; floor area 2,248,355 sq ft.</li>
        <li><strong>Historical Significance:</strong> World's tallest from 1931-1970; National Historic Landmark; featured in films like King Kong.</li>
        <li><strong>Current Status:</strong> Owned by Empire State Realty Trust; office building with observation decks attracting millions of visitors.</li>
        <li><strong>Any Other Interesting Facts:</strong> Cost $40,948,900; originally planned as a dirigible mooring mast; LED lighting for events.</li>
      </ul>
    `,
    detail_img_1: "https://images.unsplash.com/photo-1555109307-f7d9da25c244?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1waXJlJTIwc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    detail_img_2: "https://images.unsplash.com/photo-1528291151377-165f5107c82a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZW1waXJlJTIwc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    detail_img_3: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Empire_State_Building_%28HDR%29.jpg",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Colosseum",
    project_image: "https://media.gettyimages.com/id/1194899511/photo/colosseum-in-rome-without-people-in-the-morning-italy.jpg?s=612x612&w=gi&k=20&c=M1D854Nc5aYz-lBBjCz4uc-YKnbNXb2v2C9xu62CmXs=",
    tag1: "Ancient",
    tag2: "Amphitheatre",
    industry: "Architecture",
    raised: "4.2M",
    description: `
      <p>The Colosseum in Rome, Italy, is a monumental amphitheatre showcasing Roman engineering prowess.</p>
      <ul>
        <li><strong>Year Built:</strong> AD 70–80 under Vespasian and Titus; modifications under Domitian (AD 81–96).</li>
        <li><strong>Architects/Designers:</strong> Not named; commissioned by Flavian emperors.</li>
        <li><strong>Nationality of Builders:</strong> Roman; including slaves and prisoners from the First Jewish–Roman War.</li>
        <li><strong>Construction Technology and Materials:</strong> Travertine limestone, tuff, brick-faced concrete; hypogeum with elevators and pulleys; retractable velarium awning.</li>
        <li><strong>Reasons for Construction:</strong> Populist gesture by Vespasian; funded by spoils from Jewish Temple sack; for gladiatorial contests and spectacles.</li>
        <li><strong>Challenges Faced:</strong> Site on former lake; fires, earthquakes, stone robbery; modern restorations due to pollution.</li>
        <li><strong>Dimensions:</strong> 189 m long, 156 m wide; outer wall 48 m high; arena 87 m by 55 m.</li>
        <li><strong>Historical Significance:</strong> Largest ancient amphitheatre; symbol of Imperial Rome; one of New 7 Wonders; on Italian 5 euro cent coin.</li>
        <li><strong>Current Status:</strong> Major tourist attraction with millions of visitors; ongoing restorations; site of Good Friday processions.</li>
        <li><strong>Any Other Interesting Facts:</strong> Capacity 50,000–80,000; used for naumachiae; Christian martyrdom site; diverse flora documented.</li>
      </ul>
    `,
    detail_img_1: "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?cs=srgb&dl=pexels-chaitaastic-1797161.jpg&fm=jpg",
    detail_img_2: "https://plus.unsplash.com/premium_photo-1661963952208-2db3512ef3de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3NzZXVtfGVufDB8fDB8fHww",
    detail_img_3: "https://images.squarespace-cdn.com/content/v1/5438e2c6e4b0b18459a8ca06/1523632643356-JE32IT755EJJ9YB7L7XR/GTJ-2018-0413-61.jpg",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Brandenburg Gate",
    project_image: "https://media.gettyimages.com/id/183020970/photo/brandenburg-gate-in-berlin-germany.jpg?s=612x612&w=gi&k=20&c=W6lRSrZSP85_9SYWe92eVm0u0SEBBNEvVbSAEcPgOVM=",
    tag1: "Historical",
    tag2: "Monument",
    industry: "Architecture",
    raised: "3.7M",
    description: `
      <p>The Brandenburg Gate in Berlin, Germany, is an 18th-century neoclassical monument symbolizing peace and unity.</p>
      <ul>
        <li><strong>Year Built:</strong> 1788–1791.</li>
        <li><strong>Architects/Designers:</strong> Carl Gotthard Langhans; Johann Gottfried Schadow for quadriga.</li>
        <li><strong>Nationality of Builders:</strong> Prussian/German.</li>
        <li><strong>Construction Technology and Materials:</strong> Neoclassical with Doric columns; sandstone reliefs.</li>
        <li><strong>Reasons for Construction:</strong> Ordered by Frederick William II to represent peace; entrance to boulevard.</li>
        <li><strong>Challenges Faced:</strong> Renovations interrupted by wars; WWII damage; vandalism in 2023.</li>
        <li><strong>Dimensions:</strong> Twelve columns forming five passageways.</li>
        <li><strong>Historical Significance:</strong> Site of major events like Napoleon's procession, Berlin Wall, reunification.</li>
        <li><strong>Current Status:</strong> Pedestrian zone in Mitte district; historic monument.</li>
        <li><strong>Any Other Interesting Facts:</strong> Quadriga represented peace, later victory; Soviet flag flew post-WWII.</li>
      </ul>
    `,
    detail_img_1: "https://media.istockphoto.com/id/471790107/photo/brandenburg-gate-at-sunset.jpg?s=612x612&w=0&k=20&c=VxMiK2gjQA0cnrcf0dlvKRSIiS9qqjgKEy7cv5kduHw=",
    detail_img_2: "https://media.gettyimages.com/id/902488448/photo/berlin-brandenburg-gate-iconic-landmark-panorama-illuminated-at-dusk-germany.jpg?s=1024x1024&w=gi&k=20&c=QooTgsd1E38ao0dn8i0LLze83nYBmauvnayPHM4fLQw=",
    detail_img_3: "https://media.gettyimages.com/id/549093677/photo/brandenburg-gate-at-sunset.jpg?s=612x612&w=gi&k=20&c=IhIzGJpD9TIQN6TX9yaS5BAHP4X2Qas4D0bAW_2pNi8=",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "St. Peter’s Basilica",
    project_image: "https://media.gettyimages.com/id/520678824/photo/vatican-with-st-peters-basilica-rome-italy.jpg?s=612x612&w=gi&k=20&c=aJIWNDdjwJzlEI6xMkfqDxbks6dmaFNSV1TKLgQOkbg=",
    tag1: "Religious",
    tag2: "Renaissance",
    industry: "Architecture",
    raised: "4.5M",
    description: `
      <p>St. Peter’s Basilica in Vatican City is a pinnacle of Renaissance architecture and a central site for Catholicism.</p>
      <ul>
        <li><strong>Year Built:</strong> 1506–1626; replaced Old St. Peter's from 326 AD.</li>
        <li><strong>Architects/Designers:</strong> Donato Bramante, Michelangelo, Carlo Maderno, Gian Lorenzo Bernini.</li>
        <li><strong>Nationality of Builders:</strong> Italian.</li>
        <li><strong>Construction Technology and Materials:</strong> Brick, marble, concrete; double-shell dome with ribs.</li>
        <li><strong>Reasons for Construction:</strong> To replace dilapidated Old St. Peter's; glorify the Church.</li>
        <li><strong>Challenges Faced:</strong> 120 years with design changes; funding via indulgences sparked Reformation.</li>
        <li><strong>Dimensions:</strong> Length 220 m; height 136.6 m; capacity 60,000.</li>
        <li><strong>Historical Significance:</strong> Over Saint Peter's tomb; UNESCO site; largest church by interior.</li>
        <li><strong>Current Status:</strong> Active basilica; digital 3D models and Minecraft version.</li>
        <li><strong>Any Other Interesting Facts:</strong> Cost over 46 million ducats; houses Michelangelo's Pietà.</li>
      </ul>
    `,
    detail_img_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg/1200px-Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg",
    detail_img_2: "https://www.rwongphoto.com/images/xl/RW8428.jpg",
    detail_img_3: "https://assets.voxcity.com/uploads/blog_images/The-Top-10-Must-See-Highlights-of-St-Peter-Basilica-image-main_original.jpg",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Neuschwanstein Castle",
    project_image: "https://media.istockphoto.com/id/520564911/photo/neuschwanstein-castle-germany.jpg?s=612x612&w=0&k=20&c=0U8kpt-c1rynlqonwJSYkdUxO5mRNh_7OnkIMYnya5Q=",
    tag1: "Castle",
    tag2: "Romanticism",
    industry: "Architecture",
    raised: "6.2M",
    description: `
      <p>Neuschwanstein Castle in Bavaria, Germany, is a 19th-century fairy-tale palace inspiring Disney’s Sleeping Beauty Castle.</p>
      <ul>
        <li><strong>Year Built:</strong> 1869–1886; opened 1886.</li>
        <li><strong>Architects/Designers:</strong> Eduard Riedel, Georg von Dollmann, Julius Hofmann; Christian Jank.</li>
        <li><strong>Nationality of Builders:</strong> Bavarian (German).</li>
        <li><strong>Construction Technology and Materials:</strong> Brick encased in limestone, sandstone, marble; steel framework; modern amenities like heating, telephone.</li>
        <li><strong>Reasons for Construction:</strong> Ludwig II's retreat honoring Wagner's operas; Romantic interpretation of medieval castles.</li>
        <li><strong>Challenges Faced:</strong> Cost overruns to 6.2M marks; Ludwig's debt and deposition; remote location.</li>
        <li><strong>Dimensions:</strong> Length 150 m; floor space 6,000 m²; tower 45 m.</li>
        <li><strong>Historical Significance:</strong> Nazi plunder depot in WWII; UNESCO site in 2025.</li>
        <li><strong>Current Status:</strong> Managed by Bavarian Palace Department; 1.5M visitors annually.</li>
        <li><strong>Any Other Interesting Facts:</strong> Ludwig lived 172 days; inspired Disneyland; featured in films.</li>
      </ul>
    `,
    detail_img_1: "https://images.pexels.com/photos/46970/neuschwanstein-castle-castle-kristin-allgau-46970.jpeg?cs=srgb&dl=pexels-pixabay-46970.jpg&fm=jpg",
    detail_img_2: "https://images.pexels.com/photos/1119972/pexels-photo-1119972.jpeg?cs=srgb&dl=pexels-jplenio-1119972.jpg&fm=jpg",
    detail_img_3: "https://www.seeingsam.com/wp-content/uploads/2024/05/Neuschwanstein-Castle-20-683x1024.jpg",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Milan Cathedral",
    project_image: "http://pisa1940.com/cdn/shop/articles/duomo_milano_pisa.png?v=1709552807",
    tag1: "Gothic",
    tag2: "Cathedral",
    industry: "Architecture",
    raised: "4.1M",
    description: `
      <p>Milan Cathedral (Duomo di Milano) is a Gothic masterpiece, one of the largest cathedrals in the world.</p>
      <ul>
        <li><strong>Year Built:</strong> 1386–1965.</li>
        <li><strong>Architects/Designers:</strong> Simone da Orsenigo, Nicolas de Bonaventure, Jean Mignot, Leonardo da Vinci, others.</li>
        <li><strong>Nationality of Builders:</strong> Primarily Italian; French, German influences.</li>
        <li><strong>Construction Technology and Materials:</strong> Brick core with Candoglia marble; flying buttresses, spires; LED lighting.</li>
        <li><strong>Reasons for Construction:</strong> Reward to classes under Visconti; emphasize Milan's prominence.</li>
        <li><strong>Challenges Faced:</strong> Six centuries due to funds, wars; WWII damage; pollution maintenance.</li>
        <li><strong>Dimensions:</strong> Length 158.6 m; height 108 m; 135 spires.</li>
        <li><strong>Historical Significance:</strong> Seat of Archdiocese; Napoleon's coronation; largest in Italian Republic.</li>
        <li><strong>Current Status:</strong> Active cathedral; tourist site with roof access.</li>
        <li><strong>Any Other Interesting Facts:</strong> Madonnina statue; meridian line; largest pipe organ in Italy.</li>
      </ul>
    `,
    detail_img_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Milan_Cathedral_from_Piazza_del_Duomo.jpg/960px-Milan_Cathedral_from_Piazza_del_Duomo.jpg",
    detail_img_2: "https://plus.unsplash.com/premium_photo-1661962887170-e7db3f307c7a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlsYW4lMjBjYXRoZWRyYWx8ZW58MHx8MHx8fDA%3D",
    detail_img_3: "https://media.gettyimages.com/id/583572566/photo/piazza-del-duomo-and-cathedral-of-milan.jpg?s=612x612&w=gi&k=20&c=MI7WgecCUujY-KHhO7LGf-Ua1Xq-S1Nhsbz9AT6SdQo=",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "United States Capitol",
    project_image: "https://vastphotos.com/files/uploads/photos/10505/high-resolution-photo-of-us-capitol-l.jpg?v=20220712043521",
    tag1: "Government",
    tag2: "Neoclassical",
    industry: "Architecture",
    raised: "3.8M",
    description: `
      <p>The United States Capitol in Washington, DC, is the seat of Congress, symbolizing American democracy.</p>
      <ul>
        <li><strong>Year Built:</strong> 1793–1800 initial; dome 1866; extensions to 1962.</li>
        <li><strong>Architects/Designers:</strong> William Thornton, Benjamin Henry Latrobe, Charles Bulfinch, Thomas U. Walter.</li>
        <li><strong>Nationality of Builders:</strong> American with European influences.</li>
        <li><strong>Construction Technology and Materials:</strong> Sandstone, brick, marble, cast iron dome.</li>
        <li><strong>Reasons for Construction:</strong> Seat of Congress per Residence Act; part of L'Enfant's plan.</li>
        <li><strong>Challenges Faced:</strong> 1814 burning by British; expansions; enslaved labor; recent security incidents.</li>
        <li><strong>Dimensions:</strong> Height 288 ft; floor area 16.5 acres.</li>
        <li><strong>Historical Significance:</strong> Inaugurations, State of the Union; National Historic Landmark.</li>
        <li><strong>Current Status:</strong> Active; Visitor Center opened 2008; enhanced security.</li>
        <li><strong>Any Other Interesting Facts:</strong> Origin of D.C.'s quadrants; extensive art collection.</li>
      </ul>
    `,
    detail_img_1: "https://vastphotos.com/files/uploads/photos/10507/us-capitol-photo-l.jpg?v=20240516163054",
    detail_img_2: "https://media.gettyimages.com/id/182666077/photo/united-states-capitol.jpg?s=612x612&w=gi&k=20&c=G-yVJk1huEXayMFW8ziIg2c8a7bEoaoBt6eb7RAHT8s=",
    detail_img_3: "https://vastphotos.com/files/uploads/photos/10749/us-capitol-building-photo-print-l.jpg?v=20220712043521",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Taj Mahal",
    project_image: "https://media.gettyimages.com/id/155096944/photo/taj-mahal-sunrise.jpg?s=612x612&w=gi&k=20&c=g2V02VWmnOYsny7kVCvFDeNG33T3WRsyC_hRFH1j_RQ=",
    tag1: "Mausoleum",
    tag2: "Mughal",
    industry: "Architecture",
    raised: "32M",
    description: `
      <p>The Taj Mahal in Agra, India, is a stunning Mughal mausoleum symbolizing eternal love.</p>
      <ul>
        <li><strong>Year Built:</strong> 1632–1653.</li>
        <li><strong>Architects/Designers:</strong> Ustad Ahmad Lahori.</li>
        <li><strong>Nationality of Builders:</strong> Mughal; artisans from diverse regions.</li>
        <li><strong>Construction Technology and Materials:</strong> White marble, red sandstone, semi-precious stones; pietra dura inlays; ramps for transport.</li>
        <li><strong>Reasons for Construction:</strong> Shah Jahan's tomb for Mumtaz Mahal; showcase Mughal opulence.</li>
        <li><strong>Challenges Faced:</strong> Leaks, pollution, tilting minarets; historical despoliation.</li>
        <li><strong>Dimensions:</strong> Height 73 m; complex 17 hectares.</li>
        <li><strong>Historical Significance:</strong> UNESCO site; New 7 Wonders; jewel of Islamic art.</li>
        <li><strong>Current Status:</strong> Tourist site with 4.84M visitors; ongoing restoration.</li>
        <li><strong>Any Other Interesting Facts:</strong> Cost ₹32M; color changes with light; myths debunked.</li>
      </ul>
    `,
    detail_img_1: "https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=612x612&w=0&k=20&c=Uma6Q7KduznA6jUKcSquFP1iHHiw8UXcZEYVLONrmaQ=",
    detail_img_2: "https://images.unsplash.com/photo-1564507592333-c60657eea523?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D",
    detail_img_3: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?cs=srgb&dl=pexels-sudipta-1603650.jpg&fm=jpg",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Sydney Opera House",
    project_image: "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3lkbmV5JTIwb3BlcmElMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    tag1: "Performing Arts",
    tag2: "Modernist",
    industry: "Architecture",
    raised: "102M",
    description: `
      <p>The Sydney Opera House in Australia is a modernist icon with sail-like roof.</p>
      <ul>
        <li><strong>Year Built:</strong> 1959–1973; opened 1973.</li>
        <li><strong>Architects/Designers:</strong> Jørn Utzon (Danish); completed by Peter Hall.</li>
        <li><strong>Nationality of Builders:</strong> Australian; structural engineers Ove Arup & Partners (British).</li>
        <li><strong>Construction Technology and Materials:</strong> Precast concrete shells; ceramic tiles; pink granite.</li>
        <li><strong>Reasons for Construction:</strong> Venue for operas and concerts; elevate Sydney's cultural status.</li>
        <li><strong>Challenges Faced:</strong> Cost overruns to A$102M; delays; Utzon's resignation.</li>
        <li><strong>Dimensions:</strong> Height 65 m; length 183 m.</li>
        <li><strong>Historical Significance:</strong> UNESCO site; Pritzker Prize for Utzon; 50th anniversary 2023.</li>
        <li><strong>Current Status:</strong> Multi-venue center; 1.4M attendees annually; ongoing refurbishments.</li>
        <li><strong>Any Other Interesting Facts:</strong> Largest mechanical organ; inspired by nature; Guinness record.</li>
      </ul>
    `,
    detail_img_1: "https://media.cnn.com/api/v1/images/stellar/prod/01-gettyimages-645653238v2.jpg?c=original",
    detail_img_2: "https://media.architecturaldigest.com/photos/63d82d299dd44a3242d15ade/1:1/w_2002,h_2002,c_limit/GettyImages-982774858.jpg",
    detail_img_3: "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?cs=srgb&dl=pexels-pixelcop-1878293.jpg&fm=jpg",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Sagrada Familia",
    project_image: "https://t4.ftcdn.net/jpg/01/41/32/23/360_F_141322312_k0KBHFfcs34JepipgmqmUPZjesGtIqvt.jpg",
    tag1: "Basilica",
    tag2: "Modernist",
    industry: "Architecture",
    raised: "4.6M",
    description: `
      <p>The Sagrada Familia in Barcelona, Spain, is an unfinished basilica by Antoni Gaudí.</p>
      <ul>
        <li><strong>Year Built:</strong> 1882–present; expected completion 2026–2034.</li>
        <li><strong>Architects/Designers:</strong> Francisco de Paula del Villar, Antoni Gaudí, Jordi Faulí i Oller.</li>
        <li><strong>Nationality of Builders:</strong> Spanish (Catalan); international contributors.</li>
        <li><strong>Construction Technology and Materials:</strong> Stone; CAD, CNC milling; hyperboloid structures.</li>
        <li><strong>Reasons for Construction:</strong> Expiatory temple honoring St. Joseph; Gaudí's Modernista vision.</li>
        <li><strong>Challenges Faced:</strong> Civil War interruption; funding by donations; AVE tunnel concerns.</li>
        <li><strong>Dimensions:</strong> Length 90 m; planned height 172.5 m; 18 spires.</li>
        <li><strong>Historical Significance:</strong> UNESCO site; largest unfinished Catholic church.</li>
        <li><strong>Current Status:</strong> Under construction; minor basilica; 3M visitors annually.</li>
        <li><strong>Any Other Interesting Facts:</strong> Gaudí buried in crypt; symbolic façades; no right angles.</li>
      </ul>
    `,
    detail_img_1: "https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    detail_img_2: "https://www.shutterstock.com/image-photo/barcelona-spain-may-9-2024-260nw-2519032987.jpg",
    detail_img_3: "https://www.througheternity.com/upload/CONF83/20240119/Sagrada_familia_promo-tSa-730X490.jpg",
  },
];

mock.onGet("/api/data/projects/grid").reply(() => {
  return [200, ProjectGridData];
});

mock.onPost("/api/data/projects/post").reply((config: string | any) => {
  try {
    const { title } = JSON.parse(config.data);

    const paramCase = (t: string) =>
      t
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

    const post = ProjectGridData.find(
      (_post: ProjectsTypes | string | any) =>
        paramCase(_post.project_title) === title
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

export default ProjectGridData;
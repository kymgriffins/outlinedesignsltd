import { Chance } from "chance";
import mock from "../mockAdapter";

import type { ProjectsTypes } from "@/types/projects/ProjectsType";

const chance = new Chance();

const ProjectGridData: ProjectsTypes[] = [
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Architectural Visualization: Design vs Marketing",
    project_image: "https://cdn.prod.website-files.com/5894a32730554b620f7bf36d/5e8496cce2c9cc522ee81ba3_5a1ec1dc6df9f2000114a4ca_Architectural-Visualization---Design-vs-Marketing-EASY-RENDER-p-1080.jpeg",
    tag1: "Visualization",
    tag2: "Digital Architecture",
    industry: "Architecture",
    raised: "1.2M",
    description: `
    <p>This visualization project explores the tension between architectural design intent and marketing representation. The study captures how narrative, lighting, and form perception evolve when design is visualized through commercial lenses.</p>
    <ul>
      <li><strong>Concept:</strong> Examines authenticity vs. aspirational imagery in architectural renders.</li>
      <li><strong>Focus:</strong> Translating spatial emotion, not just visual fidelity.</li>
      <li><strong>Tools Used:</strong> Blender, Unreal Engine, Corona Renderer.</li>
      <li><strong>Outcome:</strong> A visual discourse on truth in representation.</li>
    </ul>
  `,
    detail_img_1: "https://cdn.prod.website-files.com/5894a32730554b620f7bf36d/5e8496cce2c9cc522ee81ba3_5a1ec1dc6df9f2000114a4ca_Architectural-Visualization---Design-vs-Marketing-EASY-RENDER-p-1080.jpeg",
    detail_img_2: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7",
    detail_img_3: "https://images.unsplash.com/photo-1598300052123-0e44d1b4b0f6",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Kitchen Interior — Modern Functionality",
    project_image: "https://cdn.prod.website-files.com/5894a32730554b620f7bf36d/6564c68eb74ee39962cd77ad_Best%20apple%20computer%20for%20architectural%20visualization%20EASY%20RENDER.webp",
    tag1: "Interior Design",
    tag2: "Residential",
    industry: "Architecture",
    raised: "2.3M",
    description: `
    <p>A contemporary kitchen design emphasizing ergonomics, light balance, and functional minimalism. The palette combines natural textures with precise joinery to achieve both warmth and clarity.</p>
    <ul>
      <li><strong>Style:</strong> Scandinavian-inspired with industrial accents.</li>
      <li><strong>Materials:</strong> Oak veneer, matte black steel, and quartz composites.</li>
      <li><strong>Lighting:</strong> Ambient cove lighting with under-cabinet task zones.</li>
      <li><strong>Key Idea:</strong> Seamless flow between preparation, dining, and digital workspaces.</li>
    </ul>
  `,
    detail_img_1: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    detail_img_2: "https://images.unsplash.com/photo-1578916171728-46686eac8d58",
    detail_img_3: "https://images.unsplash.com/photo-1598300052123-0e44d1b4b0f6",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Modern Home Estate",
    project_image: "https://cdn.prod.website-files.com/5894a32730554b620f7bf36d/6360fd1e264067ee6033e3a2_Architecture%20EASY%20RENDER-p-800.webp",
    tag1: "Residential",
    tag2: "Modern Architecture",
    industry: "Architecture",
    raised: "5.6M",
    description: `
    <p>The Modern Home Estate integrates geometry and landscape through layered planes, fluid circulation, and natural light. Designed for sustainability and openness, it celebrates the harmony of living space and environment.</p>
    <ul>
      <li><strong>Design Concept:</strong> Horizontal volumes intersecting with transparent façades.</li>
      <li><strong>Materials:</strong> Concrete, glass, timber, and native stone.</li>
      <li><strong>Technology:</strong> Passive cooling systems and integrated solar panels.</li>
      <li><strong>Philosophy:</strong> Architecture as living terrain—boundless yet grounded.</li>
    </ul>
  `,
    detail_img_1: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    detail_img_2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    detail_img_3: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "National Gallery — Facade Innovation",
    project_image: "https://cdn.prod.website-files.com/5894a32730554b620f7bf36d/65a1406c86d2d808329c8c15_Revolutionizing%20Architectural%20Detailing%20Exploring%20Part%20Line%20Injection%20in%20Facade%20Design.webp",
    tag1: "Institutional",
    tag2: "Facade Design",
    industry: "Architecture",
    raised: "8.1M",
    description: `
    <p>The National Gallery project experiments with parametric facade detailing using part-line injection techniques. The facade system blurs boundaries between structure, ornament, and environmental performance.</p>
    <ul>
      <li><strong>Objective:</strong> Merge technical precision with sculptural expression.</li>
      <li><strong>Technique:</strong> CNC-milled aluminum composites; adaptive daylight panels.</li>
      <li><strong>Design Intent:</strong> Elevate detail as a narrative device.</li>
      <li><strong>Software:</strong> Rhino + Grasshopper + Revit interoperability.</li>
    </ul>
  `,
    detail_img_1: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
    detail_img_2: "https://images.unsplash.com/photo-1526481280691-906943e9ea29",
    detail_img_3: "https://images.unsplash.com/photo-1505840723475-84ef3f36d2e9",
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
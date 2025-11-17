import { Chance } from "chance";
import mock from "../mockAdapter";

import type { ProjectsTypes } from "@/types/projects/ProjectsType";

interface ProjectsTypesExtended extends ProjectsTypes {
  project_images?: string[];
  additional_details?: {
    client?: string;
    duration?: string;
    team_size?: string;
    technologies?: string[];
    challenge?: string;
    solution?: string;
    results?: string[];
  };
}

const chance = new Chance();

const ProjectGridData: ProjectsTypesExtended[] = [
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Architectural Visualization: Design Excellence Showcase",
    project_image: "/images/projects/real/001.png",
    tag1: "Architectural Visualization",
    tag2: "3D Rendering",
    industry: "Architecture & Design",
    raised: "2.8M",
    project_images: ["/images/projects/real/001.png", "/images/projects/real/001 (1).png", "/images/projects/real/005.png"],
    description: `
    <p>Transforming architectural concepts into stunning visual masterpieces through cutting-edge 3D visualization techniques. This project showcases our ability to bring complex design ideas to life with photorealistic detail and artistic precision.</p>
    <ul>
      <li><strong>Advanced Rendering:</strong> Utilizing state-of-the-art rendering engines for lifelike lighting, materials, and textures</li>
      <li><strong>Design Accuracy:</strong> Meticulously translating architectural plans into immersive visual experiences</li>
      <li><strong>Client Presentation:</strong> Creating compelling visuals that effectively communicate design vision to stakeholders</li>
      <li><strong>Technical Excellence:</strong> Combining artistic vision with technical precision for unparalleled results</li>
      <li><strong>Innovation Focus:</strong> Exploring new techniques in architectural visualization and presentation</li>
    </ul>
    <p>Each frame tells a story of architectural brilliance, transforming cold blueprints into warm, inviting spaces that inspire and captivate.</p>
  `,
    detail_img_1: "/images/projects/real/001.png",
    detail_img_2: "/images/projects/real/001 (1).png",
    detail_img_3: "/images/projects/real/005.png",
    additional_details: {
      client: "Premium Realty Group",
      duration: "8 months",
      team_size: "5 members",
      technologies: ["3ds Max", "V-Ray", "Photoshop", "After Effects"],
      challenge: "Create photorealistic visualizations that capture the essence of contemporary design while maintaining technical accuracy",
      solution: "Implemented advanced rendering techniques with custom material shaders and dynamic lighting studies",
      results: ["94% client satisfaction", "Used in 12 marketing campaigns", "Won Best Visualization Award 2024"]
    }
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Luxury Kitchen Design & Interior Excellence",
    project_image: "/images/projects/real/002.png",
    tag1: "Interior Design",
    tag2: "Luxury Kitchens",
    industry: "Residential Architecture",
    raised: "3.2M",
    project_images: ["/images/projects/real/002.png", "/images/projects/real/002 (1).png"],
    description: `
    <p>Creating extraordinary culinary spaces that seamlessly blend functionality, aesthetics, and luxury. Our kitchen designs go beyond mere cooking spaces—they become the heart of the modern home experience.</p>
    <ul>
      <li><strong>Premium Materials:</strong> Selection of finest quality cabinetry, countertops, and finishes</li>
      <li><strong>Ergonomic Design:</strong> Expert layout planning for optimal workflow and user comfort</li>
      <li><strong>Lighting Innovation:</strong> Strategic lighting design that enhances both function and ambiance</li>
      <li><strong>Storage Solutions:</strong> Intelligent organization systems for maximum efficiency and style</li>
      <li><strong>Custom Integration:</strong> Seamless incorporation of high-end appliances and smart technology</li>
    </ul>
    <p>Where culinary art meets architectural elegance, creating spaces that inspire cooking creativity and social gatherings.</p>
  `,
    detail_img_1: "/images/projects/real/002.png",
    detail_img_2: "/images/projects/real/002 (1).png",
    detail_img_3: "",
    additional_details: {
      client: "Elite Homes Collection",
      duration: "6 months",
      team_size: "4 members",
      technologies: ["AutoCAD", "SketchUp", "V-Ray", "Kitchen Design Software"],
      challenge: "Design a kitchen that maximizes functionality while maintaining elegant aesthetics for a high-profile client",
      solution: "Created intelligent zoning with separate prep, cooking, and dining areas, integrated smart appliances",
      results: ["Featured in Interior Design Magazine", "100% functionality score", "Client ROI within first year"]
    }
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Contemporary Modern Estate Architecture",
    project_image: "/images/projects/real/003.png",
    tag1: "Modern Architecture",
    tag2: "Residential Estates",
    industry: "Luxury Real Estate",
    raised: "7.4M",
    project_images: ["/images/projects/real/003.png", "/images/projects/real/003 (1).png"],
    description: `
    <p>Crafting exceptional modern residences that harmonize with their natural surroundings while embodying architectural innovation and sophistication. Each estate represents the pinnacle of contemporary design philosophy.</p>
    <ul>
      <li><strong>Contextual Integration:</strong> Designs that respect and enhance the natural landscape</li>
      <li><strong>Sustainable Innovation:</strong> Incorporating green building principles and energy-efficient technologies</li>
      <li><strong>Volumetric Mastery:</strong> Strategic use of massing, voids, and light to create dynamic spaces</li>
      <li><strong>Material Excellence:</strong> Premium selection of sustainable, durable, and beautiful materials</li>
      <li><strong>Lifestyle Oriented:</strong> Spaces designed around how people actually live and interact</li>
    </ul>
    <p>Where architecture becomes more than shelter—it becomes an extension of the soul, harmonizing modern living with timeless elegance.</p>
  `,
    detail_img_1: "/images/projects/real/003.png",
    detail_img_2: "/images/projects/real/003 (1).png",
    detail_img_3: "",
    additional_details: {
      client: "Private Estate Developer",
      duration: "18 months",
      team_size: "12 members",
      technologies: ["Revit", "Rhino", "Grasshopper", "Energy Modeling Software"],
      challenge: "Create a modern estate that achieves LEED Platinum certification while satisfying luxury lifestyle requirements",
      solution: "Integrated passive solar design, rain water harvesting, and high-performance glazing systems",
      results: ["LEED Platinum certified", "35% energy savings", "Architectural Digest featured", "$2M above appraisal value"]
    }
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Institutional Facade Design Innovation",
    project_image: "/images/projects/real/004.png",
    tag1: "Facade Design",
    tag2: "Institutional Architecture",
    industry: "Public Architecture",
    raised: "9.6M",
    project_images: ["/images/projects/real/004.png", "/images/projects/real/004 (1).png"],
    description: `
    <p>Revolutionizing building envelopes through parametric design and advanced material technology. Our facade innovations balance structural integrity, aesthetic appeal, and environmental performance in groundbreaking ways.</p>
    <ul>
      <li><strong>Parametric Design:</strong> Algorithm-driven design processes for complex geometric solutions</li>
      <li><strong>Material Innovation:</strong> Advanced composites and sustainable cladding systems</li>
      <li><strong>Performance Optimization:</strong> Balancing thermal, acoustic, and aesthetic requirements</li>
      <li><strong>Manufacturing Excellence:</strong> Leveraging CNC precision and digital fabrication techniques</li>
      <li><strong>Longevity Focus:</strong> Systems designed for durability, maintainability, and future adaptability</li>
    </ul>
    <p>Pushing the boundaries of what's possible in building skin design, creating facades that are as functional as they are beautiful.</p>
  `,
    detail_img_1: "/images/projects/real/004.png",
    detail_img_2: "/images/projects/real/004 (1).png",
    detail_img_3: "",
    additional_details: {
      client: "National Cultural Institute",
      duration: "24 months",
      team_size: "15 members",
      technologies: ["Rhino + Grasshopper", "Revit", "Tekla Structures", "CNC Programming"],
      challenge: "Redesign aging facade to meet modern performance standards while preserving architectural heritage",
      solution: "Developed parametric facade system that adapts to thermal loads and reduces solar gain by 60%",
      results: ["60% energy reduction", "Winner of Façade Innovation Prize", "Extended building lifespan by 50 years"]
    }
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

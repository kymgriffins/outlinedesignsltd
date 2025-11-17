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
    project_title: "Prime Waterfront Villa - Westlands",
    project_image: "/images/projects/real/001.png",
    tag1: "Luxury Residential",
    tag2: "Modern Architecture",
    industry: "High-End Real Estate",
    raised: "5.8M",
    project_images: ["/images/projects/real/001.png", "/images/projects/real/001 (1).png", "/images/projects/real/005.png"],
    description: `
    <p>Exclusive waterfront villa development featuring panoramic views and uncompromising luxury finishes. This premium property showcases architectural excellence with bespoke interiors and cutting-edge smart home integration.</p>
    <ul>
      <li><strong>Prime Location:</strong> 0.8-acre waterfront plot with 180-degree lake views</li>
      <li><strong>Build Quality:</strong> Premium imported marble, custom millwork, and state-of-the-art systems</li>
      <li><strong>Luxury Amenities:</strong> Infinity pool, wine cellar, home theater, and sports pavilion</li>
      <li><strong>Smart Integration:</strong> Full automation with climate control, security, and entertainment systems</li>
      <li><strong>Green Features:</strong> Solar panels, rainwater harvesting, and native landscaping</li>
    </ul>
    <p>This villa represents the pinnacle of luxury living, combining architectural sophistication with unparalleled lifestyle amenities.</p>
  `,
    detail_img_1: "/images/projects/real/001.png",
    detail_img_2: "/images/projects/real/001 (1).png",
    detail_img_3: "/images/projects/real/005.png",
    additional_details: {
      client: "Exclusive Properties Ltd",
      duration: "15 months",
      team_size: "18 members",
      technologies: ["Revit Architecture", "Autodesk BIM", "Sustainable Design Software", "Smart Home Integration"],
      challenge: "Design and construct a waterfront villa that maximizes lake views while incorporating sustainable features and luxury amenities within budget constraints",
      solution: "Implemented floor-to-ceiling glazing with automated shading systems, integrated passive solar design, and utilized local materials for cost efficiency",
      results: ["Sold for 45% above appraisal", "LEED Gold certified", "Featured in Architectural Digest", "Won Luxury Design Award 2024"]
    }
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Mixed-Use Development - Riverside Complex",
    project_image: "/images/projects/real/002.png",
    tag1: "Commercial Residential",
    tag2: "Urban Development",
    industry: "Mixed-Use Real Estate",
    raised: "12.5M",
    project_images: ["/images/projects/real/002.png", "/images/projects/real/002 (1).png"],
    description: `
    <p>Comprehensive mixed-use development combining premium retail spaces, luxury condominiums, and commercial offices in the heart of the city. This project revitalizes urban spaces while creating vibrant community hubs.</p>
    <ul>
      <li><strong>Premium Retail:</strong> Ground-floor boutique shops and flagship stores with modern facades</li>
      <li><strong>Luxury Condos:</strong> 120 high-end residential units with panoramic city views</li>
      <li><strong>Office Spaces:</strong> Grade-A commercial offices with flexible floor plans</li>
      <li><strong>Public Spaces:</strong> Rooftop gardens, plazas, and pedestrian-friendly walkways</li>
      <li><strong>Access & Transit:</strong> Direct access to metro, ample parking, and EV charging stations</li>
    </ul>
    <p>A catalyst for urban regeneration, combining commercial viability with residential luxury and community enhancement.</p>
  `,
    detail_img_1: "/images/projects/real/002.png",
    detail_img_2: "/images/projects/real/002 (1).png",
    detail_img_3: "",
    additional_details: {
      client: "Urban Development Corporation",
      duration: "28 months",
      team_size: "35 members",
      technologies: ["Urban Planning Software", "Traffic Modeling", "BIM Coordination", "Environmental Impact Analysis"],
      challenge: "Transform underutilized industrial site into vibrant mixed-use development while maximizing floor area ratios and ensuring pedestrian connectivity",
      solution: "Strategic massing studies optimized solar access, phased construction minimized disruption, and integrated public transit enhanced accessibility",
      results: ["100% occupancy within 6 months", "$2.1M above pro forma NOI", "Urban Design Excellence Award", "98% tenant satisfaction"]
    }
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Executive Townhouses - Karen Ridge",
    project_image: "/images/projects/real/003.png",
    tag1: "Premium Townhouses",
    tag2: "Gated Community",
    industry: "Residential Real Estate",
    raised: "8.9M",
    project_images: ["/images/projects/real/003.png", "/images/projects/real/003 (1).png"],
    description: `
    <p>Sophisticated townhouse development in prime suburban location featuring timeless architectural design and exclusive amenities. This community offers the perfect blend of privacy, convenience, and luxury living.</p>
    <ul>
      <li><strong>Architectural Design:</strong> Classic yet contemporary facades with premium materials and finishes</li>
      <li><strong>Unit Mix:</strong> 3-4 bedroom townhouses ranging from 3,200-4,800 sq ft</li>
      <li><strong>Community Amenities:</strong> Clubhouse, fitness center, swimming pool, and landscaped gardens</li>
      <li><strong>Location Benefits:</strong> Proximity to schools, shopping, and major highways</li>
      <li><strong>Security Features:</strong> 24/7 manned security, perimeter fencing, and smart access systems</li>
    </ul>
    <p>Crafted for discerning homeowners who demand excellence in design, location, and lifestyle amenities.</p>
  `,
    detail_img_1: "/images/projects/real/003.png",
    detail_img_2: "/images/projects/real/003 (1).png",
    detail_img_3: "",
    additional_details: {
      client: "Premium Homes Developer",
      duration: "20 months",
      team_size: "22 members",
      technologies: ["Residential BIM", "Energy Modeling", "Landscape Architecture Software", "Cost Estimation Tools"],
      challenge: "Develop high-quality townhouse community in competitive suburban market while achieving profitable margins and maintaining design excellence",
      solution: "Optimized unit layouts for privacy and views, selected quality materials within budget, and implemented efficient construction sequencing",
      results: ["Sold out in 3 months", "15% above market pricing", "Community of the Year Award", "93% buyer satisfaction"]
    }
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    project_title: "Corporate Headquarters - Business Park",
    project_image: "/images/projects/real/004.png",
    tag1: "Commercial Architecture",
    tag2: "Corporate Campus",
    industry: "Commercial Real Estate",
    raised: "18.2M",
    project_images: ["/images/projects/real/004.png", "/images/projects/real/004 (1).png"],
    description: `
    <p>State-of-the-art corporate headquarters designed to foster innovation, collaboration, and employee well-being. This workspace redefines modern office environments with sustainable design and technological integration.</p>
    <ul>
      <li><strong>Modern Workspaces:</strong> Flexible floor plans with open collaboration areas and quiet focus zones</li>
      <li><strong>Employee Amenities:</strong> On-site fitness center, café, and wellness spaces</li>
      <li><strong>Technology Integration:</strong> High-speed connectivity, smart building systems, and AV integration</li>
      <li><strong>Sustainability:</strong> Green building certification, energy-efficient systems, and natural lighting</li>
      <li><strong>Scalability:</strong> Designed for growth with modular construction and expansion capabilities</li>
    </ul>
    <p>An architectural statement that reflects corporate values while providing an inspiring environment for innovation and growth.</p>
  `,
    detail_img_1: "/images/projects/real/004.png",
    detail_img_2: "/images/projects/real/004 (1).png",
    detail_img_3: "",
    additional_details: {
      client: "TechVision Solutions Ltd",
      duration: "22 months",
      team_size: "28 members",
      technologies: ["Commercial BIM", "HVAC Modeling", "Lighting Design Software", "Acoustic Analysis Tools"],
      challenge: "Create workplace that boosts productivity and employee retention while achieving cost-effective construction in competitive commercial market",
      solution: "Implemented biophilic design principles, optimized spatial efficiency, and integrated smart building systems for operational efficiency",
      results: ["25% increase in employee satisfaction", "BREEAM Excellent certified", "Corporate Design Innovation Award", "$500K annual energy savings"]
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

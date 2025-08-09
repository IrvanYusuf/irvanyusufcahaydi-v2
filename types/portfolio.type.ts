import { ApiResponse } from "./api.type";

interface Skill {
  skills: {
    id: string;
    logo: string;
    name: string;
    is_api: boolean;
    publicId: string;
    created_at: string;
  };
}

export interface Portfolio {
  id: string;
  name: string;
  thumbnail: string;
  github_link: string;
  website_link: string;
  desc?: string;
  created_at: string;
  is_best: boolean;
  is_web: boolean;
  is_mobile: boolean;
  is_api: boolean;
  portfolio_skills: Skill[];
  portfolio_galleries?: string[];
}

export type getPortfoliosParams = {
  filter: "all" | "api" | "mobile" | "web";
};

export type GetPortfolios = ApiResponse<Portfolio>;

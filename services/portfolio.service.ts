import supabase from "@/lib/supabaseClient";
import { GetPortfolios, getPortfoliosParams } from "@/types/portfolio.type";

async function getPortfoliosBest(): Promise<GetPortfolios> {
  const response = await supabase
    .from("portfolios")
    .select(`*, portfolio_skills(skills(*)), portfolio_galleries(*)`)
    .eq("is_best", true)
    .limit(4);
  return response;
}
async function getPortfolios({ filter = "all" }: getPortfoliosParams) {
  let query = supabase
    .from("portfolios")
    .select(`*, portfolio_skills(skills(*)), portfolio_galleries(*)`);

  if (filter === "web") {
    query = query.eq("is_web", true);
  } else if (filter === "mobile") {
    query = query.eq("is_mobile", true);
  } else if (filter === "api") {
    query = query.eq("is_api", true);
  }

  const response = await query;
  return response;
}

const PortfolioServices = {
  getPortfoliosBest,
  getPortfolios,
};

export default PortfolioServices;

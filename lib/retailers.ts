export type Retailer = {
  id: string;
  name: string;
  baseUrl: string;
};

export const RETAILERS = [
  { id: "wb", name: "Wildberries", baseUrl: "https://www.wildberries.ru" },
  { id: "ozon", name: "Ozon", baseUrl: "https://www.ozon.ru" },
  { id: "ym", name: "Я.Маркет", baseUrl: "https://market.yandex.ru" },
  { id: "zy", name: "Золотое яблоко", baseUrl: "https://goldapple.ru" },
] as const satisfies readonly Retailer[];

export type RetailerId = (typeof RETAILERS)[number]["id"];

export type BuildRetailerUrlOptions = {
  source?: string;
  medium: string;
  campaign: string;
  content?: string;
};

export function buildRetailerUrl(
  retailerId: RetailerId,
  options: BuildRetailerUrlOptions,
): string {
  const retailer = RETAILERS.find((r) => r.id === retailerId);
  if (!retailer) {
    throw new Error(`Unknown retailer id: ${retailerId}`);
  }

  const url = new URL(retailer.baseUrl);
  const params = new URLSearchParams();
  params.set("utm_source", options.source ?? "site");
  params.set("utm_medium", options.medium);
  params.set("utm_campaign", options.campaign);
  if (options.content) {
    params.set("utm_content", options.content);
  }
  url.search = params.toString();

  return url.toString();
}

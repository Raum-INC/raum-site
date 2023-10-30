import { createClient } from "@sanity/client";

const projectId = "onb7zrn9";
const dataset = "production";
const apiVersion = "2023-10-28";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

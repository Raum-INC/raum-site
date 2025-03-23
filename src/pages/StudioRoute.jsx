import { defineConfig, Studio } from "sanity";

const config = defineConfig({
  projectId: "onb7zrn9",
  dataset: "production",
  basePath: "/raum-cms",
});

export default function StudioRoute() {
  return <Studio config={config} />;
}

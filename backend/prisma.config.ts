import { definePrismaConfig } from "prisma/config";

export default definePrismaConfig({
  schema: './database/schema.prisma',
  skills: {
    agents: ["claude", "cursor", "agents", "devin"],
  },
});

#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "hashtagweb3",
  boardId: "hashtagweb3-official",
  domain: "hashtagweb3.com",
  npmName: "zc-hashtagweb3-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});

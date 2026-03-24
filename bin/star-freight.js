#!/usr/bin/env node
"use strict";

// version/tag refer to the source repo binary release, not the npm wrapper version.
// Update these when a new GitHub Release is published for star-freight.
process.env.MCPTOOLSHOP_LAUNCH_CONFIG = JSON.stringify({
  toolName: "star-freight",
  owner: "mcp-tool-shop-org",
  repo: "star-freight",
  version: "1.0.2",
  tag: "v1.0.2",
});

require("@mcptoolshop/npm-launcher/bin/mcptoolshop-launch.js");

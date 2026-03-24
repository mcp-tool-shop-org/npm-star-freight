# @mcptoolshop/star-freight

> Space merchant RPG CLI -- zero-prerequisite npx install

[![npm](https://img.shields.io/npm/v/@mcptoolshop/star-freight)](https://www.npmjs.com/package/@mcptoolshop/star-freight)
[![CI](https://github.com/mcp-tool-shop-org/npm-star-freight/actions/workflows/ci.yml/badge.svg)](https://github.com/mcp-tool-shop-org/npm-star-freight/actions/workflows/ci.yml)

## Quick Start

```bash
npx @mcptoolshop/star-freight
```

Or install globally:

```bash
npm i -g @mcptoolshop/star-freight
star-freight
```

## What is Star Freight?

Star Freight is a space merchant RPG set in the Threshold -- a dense star system at the junction of five civilizations' territories. Trade freight through governed lanes where inspections, shortages, and house politics reshape every run.

- **Five civilizations**: Terran Compact, Keth Communion, Veshan Principalities, Orryn Drift, Sable Reach
- **Crew-shaped access**: your crew determines where you can dock, trade, and survive
- **Political pressure**: inspections, seizures, convoys, scarcity, debt ledgers
- **Three captain lives**: Relief (legitimacy), Gray (evasion), Honor (confrontation)
- **Print-and-play board game**: generate a complete tabletop kit from world data

## How It Works

This package uses [@mcptoolshop/npm-launcher](https://github.com/mcp-tool-shop-org/npm-launcher) to:

1. Download the pre-built Star Freight binary from [GitHub Releases](https://github.com/mcp-tool-shop-org/star-freight/releases)
2. Verify SHA256 checksums
3. Cache locally (`~/.cache/mcptoolshop/star-freight/`)
4. Run with your arguments

No Python, pip, or build tools required.

## Cache Management

```bash
# Show cache location
star-freight --print-cache-path

# Clear cached binaries
star-freight --clear-cache
```

## Source Repository

The game source lives at [mcp-tool-shop-org/star-freight](https://github.com/mcp-tool-shop-org/star-freight).

## License

MIT

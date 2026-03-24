---
title: Reference
description: Technical reference for the npm launcher and the Star Freight game world.
sidebar:
  order: 2
---

## Launcher commands

The npm wrapper adds two helper commands:

| Command | Description |
|---------|-------------|
| `star-freight --print-cache-path` | Print the local cache directory for this version |
| `star-freight --clear-cache` | Delete all cached binaries |

All other arguments are passed through to the Star Freight binary.

## How the launcher works

The launcher uses `@mcptoolshop/npm-launcher` which implements:

1. **Platform detection** -- identifies OS and architecture
2. **Asset naming** -- looks for `star-freight-<version>-<os>-<arch>` on GitHub Releases
3. **Download** -- HTTPS from github.com with atomic writes
4. **Checksum verification** -- SHA256 against `checksums-<version>.txt`
5. **Caching** -- stores binary in user cache, skips download on subsequent runs
6. **Execution** -- `spawnSync` with full argv passthrough

## The world

### Five civilizations

| Civilization | Identity | Trade specialty |
|-------------|----------|----------------|
| **Terran Compact** | Bureaucratic human government | Manufactured goods, alloys, medical supplies |
| **Keth Communion** | Arthropod collective, seasonal biology | Bio-crystal, organic compounds, living materials |
| **Veshan Principalities** | Reptilian feudal houses | Weapons, armor, rare minerals |
| **Orryn Drift** | Mobile cephalopod brokers | Information, brokered cross-civ goods |
| **Sable Reach** | Outlaw power vacuum | Salvage, Ancestor tech, contraband |

### Lane identities

Routes in Star Freight are governed corridors, not open space:

| Identity | Meaning |
|----------|---------|
| **Inspected** | Compact-monitored, high contraband risk |
| **Convoy** | Protected relief route, schedule-bound |
| **Contested** | Disputed territory, ambush risk |
| **Hazard** | Debris, asteroid, nebula terrain |
| **Gray** | Unpoliced, highest danger, lowest scrutiny |

### Captain postures

| Posture | Core mechanic | Pressure |
|---------|--------------|----------|
| **Relief** | Convoy access, provision bonuses | Inspection scrutiny, schedule delays |
| **Gray** | Falsified manifests, timing arbitrage | Seizure exposure, heat accumulation |
| **Honor** | Challenge rights, escort premiums | Standing volatility, escalation risk |

## Security

This package downloads pre-built binaries from GitHub Releases and verifies SHA256 checksums. It does not collect telemetry, store credentials, or make requests beyond github.com. See [SECURITY.md](https://github.com/mcp-tool-shop-org/npm-star-freight/blob/main/SECURITY.md) for the full threat model.

## Source

The game source lives at [mcp-tool-shop-org/star-freight](https://github.com/mcp-tool-shop-org/star-freight). The Python package is also available via `pip install star-freight`.

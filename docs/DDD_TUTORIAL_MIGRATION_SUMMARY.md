# Domain-Driven Design Tutorial Migration Summary

**Date:** January 27, 2026  
**Version Update:** v2.1.0 → v2.1.1

## Changes Made

### 1. Tutorial Migration
- **Moved:** Domain-Driven Design tutorial from "Coming Soon" to "Available Now" section
- **Location:** `communication-protocols/domain-driven-design-tutorial-claude/index.html`
- **Category:** Communication Protocols

### 2. Card Updates
- Removed "Coming Soon" badge and disabled button styling
- Changed border from `border-warning` to `border-success`
- Updated button from disabled gray to active `btn-primary`
- Proper href link: `communication-protocols/domain-driven-design-tutorial-claude/`

### 3. Statistics Updated

#### Hero Section
- Available Count: 7 → 8
- Coming Soon Count: 63 → 62

#### Section Headers
- Available Now badge: 7 → 8 Tutorials
- Coming Soon badge: 63 → 62 Tutorials

#### Category Badges
- Communication Protocols (Available): 1 → 2
- Communication Protocols (Coming Soon): 3 → 2

#### Footer
- Total Tutorials: 70 (8 Available, 62 Coming Soon)
- Current Version: v2.1.1

### 4. Navigation Menu Updated
Enhanced "Available Now" dropdown to show all 5 available categories:
- Build Tools
- Communication Protocols
- Command-Line Tools
- Templates & Resources
- Finance & Money

### 5. Version History
Added Version 2.1.1 entry with:
- Tutorial publication announcement
- Statistics update details
- Migration information

## File Structure
```
docs/
├── communication-protocols/
│   └── domain-driven-design-tutorial-claude/
│       └── index.html (ACTIVE TUTORIAL)
├── coming-soon/
│   └── communication-protocols/
│       └── domain-driven-design-tutorial.md (BACKUP COPY)
└── index.html (UPDATED)
```

## Total Tutorials Breakdown
- **Available Now: 8**
  - Build Tools: 1 (Maven)
  - Communication Protocols: 2 (WebSockets, Domain-Driven Design)
  - Command-Line Tools: 1 (jq)
  - Templates & Resources: 1 (Template)
  - Finance & Money: 3 (Income Tax, Personal Finance, Investments)

- **Coming Soon: 62**
  - Java & JVM: 3
  - Java Versions: 16
  - Communication Protocols: 2 (REST API, GraphQL)
  - Testing & Quality: 3
  - Spring Framework: 6
  - Web Development: 5
  - Backend Frameworks: 4
  - Databases: 7
  - Messaging & Event Streaming: 1
  - Build Tools & DevOps: 5
  - Other Languages & Tools: 10

## All Updates Complete ✓
- [x] Moved DDD card to Available section
- [x] Updated card styling (border, badge, button)
- [x] Updated hero section counts
- [x] Updated section header badges
- [x] Updated category badges
- [x] Updated footer statistics
- [x] Updated navigation menu
- [x] Added version 2.1.1 to version history
- [x] Updated current version badge

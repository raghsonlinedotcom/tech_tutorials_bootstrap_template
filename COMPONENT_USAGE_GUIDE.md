# Bootstrap Technical Tutorial Template - Component Usage Guide

## Table of Contents
1. [Overview](#overview)
2. [Theme System](#theme-system)
3. [Navigation Components](#navigation-components)
4. [Content Organization](#content-organization)
5. [Visual Components](#visual-components)
6. [Code and Technical Content](#code-and-technical-content)
7. [Interactive Elements](#interactive-elements)
8. [Best Practices](#best-practices)

---

## Overview

This template is designed specifically for creating professional technical tutorials with Bootstrap 5.3. It includes all major Bootstrap components with real-world usage examples for technical content delivery.

### Key Features
- **Dark/Light Theme Toggle**: Seamlessly switch between themes
- **Color Flavors**: Blue, Green, and Purple color schemes
- **Responsive Design**: Mobile-first approach
- **Code Syntax Highlighting**: Using Prism.js
- **Interactive Components**: Forms, buttons, and dynamic elements
- **Version Tracking**: Built-in version badge system

---

## Theme System

### Dark/Light Theme Toggle
The template includes a fixed theme control panel on the right side of the screen.

**Usage:**
- Click the moon/sun icon to toggle between dark and light themes
- The theme preference persists during the session

**Implementation:**
```javascript
// JavaScript handles theme switching automatically
// Themes are applied via data-bs-theme attribute on <html>
```

### Color Flavors (Light Mode Only)
Choose from three color schemes to match your brand or topic:
- **Blue** (Default): Professional, tech-focused
- **Green**: Development, success-oriented topics
- **Purple**: Creative, design-oriented content

**Best Use Cases:**
- **Blue**: General programming, databases, DevOps
- **Green**: Success stories, completed projects, environmental topics
- **Purple**: UI/UX, design systems, creative coding

---

## Navigation Components

### 1. Sticky Navigation Bar
**Location:** Top of page (fixed position)

**Components:**
- Brand/Logo with icon
- Navigation links
- Dropdown menu for sections
- Search functionality

**Best for:**
- Primary navigation between major sections
- Quick search access
- Branding and identity

**Customization Tips:**
```html
<!-- Update navbar links to match your sections -->
<li class="nav-item">
    <a class="nav-link" href="#your-section">Your Section</a>
</li>
```

### 2. Off-Canvas Table of Contents
**Trigger:** TOC button (fixed, top-left)

**Best for:**
- Detailed table of contents
- Long tutorials with many sections
- Quick navigation without scrolling

**How to Use:**
1. Click the "TOC" button
2. Sidebar slides in from the left
3. Click any section to jump directly
4. Sidebar auto-closes on selection

**Update TOC Links:**
```html
<a href="#your-topic" class="list-group-item list-group-item-action">
    <i class="bi bi-1-circle"></i> Your Topic
</a>
```

### 3. Dropdown Menu
**Location:** In navigation bar

**Best for:**
- Grouping related sections
- Multi-level navigation hierarchy
- Subsection organization

---

## Content Organization

### 1. Jumbotron/Hero Section
**Purpose:** Eye-catching introduction to your tutorial

**Best for:**
- Tutorial title and tagline
- Key value proposition
- Call-to-action button

**Usage Tips:**
- Keep title concise (1-8 words)
- Lead text should be compelling (1-2 sentences)
- Use gradient backgrounds for visual appeal
- Include a clear CTA button

### 2. Tab Groups
**Purpose:** Organize different content types in the same section

**Ideal Tab Categories:**
- **Overview Tab**: Text explanations, concept introduction
- **Diagrams Tab**: ASCII art, PlantUML, architectural diagrams
- **Code Tab**: Source code examples, snippets
- **Output Tab**: Console output, execution results

**When to Use Tabs:**
- Multiple content types for one topic
- Comparing different approaches
- Before/after scenarios
- Different programming languages

### 3. Accordion Components
**Purpose:** Collapsible sections for detailed topics

**Best for:**
- FAQ sections
- Step-by-step tutorials (each step = accordion item)
- Topic deep-dives
- Optional/advanced content

**Advantages:**
- Saves vertical space
- Reduces overwhelming content
- Allows selective reading
- Great for mobile devices

**Structure:**
```
Topic 1: Introduction (expanded by default)
  └─ Content, explanations, examples
Topic 2: Core Concepts (collapsed)
  └─ Detailed information
Topic 3: Advanced Topics (collapsed)
  └─ In-depth content
```

### 4. Card Layouts
**Purpose:** Modular, self-contained content blocks

**Best Use Cases:**

**3-Column Layout:**
- Feature comparison
- Different modules/components
- Tool recommendations
- Resource categories

**Card Elements:**
- **Header**: Category/type with icon and color
- **Body**: Main content, description
- **Footer**: Metadata (dates, tags, status)

**Example Applications:**
- Documentation sections
- Code examples by language
- Tools and utilities
- Related resources

---

## Visual Components

### 1. Carousel
**Purpose:** Rotating visual content showcase

**Best for:**
- Key features highlight
- Step-by-step process visualization
- Before/after comparisons
- Multiple screenshots/diagrams

**Customization:**
- Replace placeholder divs with actual images
- Adjust slide timing in Bootstrap options
- Use for concept progression (Basic → Intermediate → Advanced)

### 2. ASCII Diagrams
**Location:** Diagrams tab in main content

**Advantages:**
- Universal compatibility
- No external image dependencies
- Version control friendly (text-based)
- Quick to create and modify

**Best for:**
- System architecture
- Data flow diagrams
- Hierarchical structures
- Simple box-and-arrow diagrams
- Tree structures

**Example Use Cases:**
```
Application Architecture
Directory Structure
Call Flow
Component Hierarchy
Network Topology
```

**Tips:**
- Use box-drawing characters (┌─┐│└┘├┤┬┴┼)
- Keep diagrams under 80 characters wide for readability
- Use arrows (→ ← ↑ ↓) for direction
- Add clear labels

### 3. PlantUML Diagrams
**Location:** Diagrams tab in main content

**Advantages:**
- Rich diagram capabilities
- Professional appearance
- Standardized notation

**Best for:**
- Sequence diagrams
- Class diagrams
- Component diagrams
- State diagrams
- Use case diagrams

**Rendering Options:**
1. **Online Service**: http://www.plantuml.com/plantuml/
2. **Local Tools**: PlantUML JAR, VS Code extensions
3. **CI/CD Integration**: Generate images during build

**Workflow:**
1. Write PlantUML syntax in template
2. Copy syntax to rendering tool
3. Generate diagram image
4. Include image in carousel or as screenshot

---

## Code and Technical Content

### 1. Syntax-Highlighted Code Blocks
**Technology:** Prism.js (auto-loader enabled)

**Supported Languages:**
- Java, JavaScript, TypeScript, Python, Go, C/C++, C#
- HTML, CSS, SQL, Bash, PowerShell
- JSON, YAML, XML, Properties files
- And 200+ more via auto-loader

**Features:**
- **Copy Button**: One-click copy to clipboard
- **Line Numbers**: Optional (can be added via Prism plugins)
- **Language Detection**: Automatic via class names

**Best Practices:**
```html
<pre><code class="language-java">
// Your code here
// Use proper indentation
// Add meaningful comments
</code></pre>
```

**When to Use:**
- Full function/class implementations
- Configuration examples
- Command-line instructions
- API responses

### 2. Console Output Display
**Styling:** Dark terminal theme (VS Code inspired)

**Best for:**
- Command execution results
- Build/compile output
- Test results
- Error messages
- Log files

**Format:**
```
$ command here
[OUTPUT] First line of output
[INFO] Additional information
[SUCCESS] Operation completed
```

**Tips:**
- Include command prompt ($, >, #)
- Preserve spacing and alignment
- Use color context (though displayed as monochrome)
- Show complete output for debugging scenarios

### 3. Configuration Files
**Purpose:** Show setup and configuration

**Common Files:**
- `application.properties` / `application.yml`
- `pom.xml` / `build.gradle`
- `.env` files
- Docker configurations
- CI/CD pipeline files

**Best Practices:**
- Include comments explaining each property
- Show complete, working configurations
- Highlight required vs. optional settings
- Provide defaults and examples

---

## Interactive Elements

### 1. Forms
**Purpose:** Interactive configuration builders, live examples

**Components Included:**
- Text inputs
- Select dropdowns
- Textareas
- Checkboxes
- Radio buttons
- Range sliders

**Use Cases:**

**Configuration Builder:**
```
User inputs → Generate code/config → Display result
```

**Interactive Example:**
```
Adjust parameters → See effect → Understand concept
```

**Quiz/Assessment:**
```
Questions → User answers → Immediate feedback
```

**Code Generator:**
```
Select options → Generate boilerplate → Copy code
```

### 2. Buttons
**Types Available:**
- Standard (filled): Primary actions
- Outline: Secondary actions
- Sizes: Small, default, large
- Button groups: Related actions

**Semantic Colors:**
- **Primary**: Main actions (Submit, Continue, Start)
- **Success**: Positive actions (Save, Confirm, Apply)
- **Danger**: Destructive actions (Delete, Remove, Reset)
- **Warning**: Caution actions (Modify, Override)
- **Info**: Informational actions (Learn More, Details)
- **Secondary**: Alternative actions (Cancel, Back)

**Best Practices:**
- Use icons with text for clarity
- Group related buttons
- Make CTAs prominent (larger, primary color)
- Consistent placement (right-aligned for forms)

### 3. Alerts
**Purpose:** Important messages and notifications

**Types:**
- **Info (Blue)**: General information, tips
- **Success (Green)**: Successful operations, confirmations
- **Warning (Yellow)**: Cautions, important notes
- **Danger (Red)**: Errors, critical issues

**When to Use:**
- Before code blocks: Prerequisites, warnings
- After code blocks: Expected results, notes
- Section intros: Context, scope
- Throughout content: Tips, gotchas, reminders

**Tips:**
- Use icons for quick recognition
- Keep messages concise
- Make dismissible for non-critical alerts
- Use semantic colors appropriately

### 4. Toast Notifications
**Purpose:** Temporary, non-intrusive feedback

**Best for:**
- Action confirmations (Code copied!)
- Status updates (Saving...)
- Success messages (Profile updated!)
- Non-critical errors (Connection lost)

**Behavior:**
- Appears bottom-right
- Auto-dismisses after 5 seconds
- Stackable for multiple notifications

### 5. Tooltips
**Purpose:** Contextual help on hover

**Best for:**
- Icon explanations
- Term definitions
- Additional context
- Button descriptions

**Implementation:**
```html
<button data-bs-toggle="tooltip" title="Explanation here">
    <i class="bi bi-question-circle"></i>
</button>
```

### 6. Popovers
**Purpose:** Detailed information on click

**Best for:**
- Longer explanations than tooltips
- Multi-line help text
- Rich content (links, formatting)
- Step-by-step instructions

**Difference from Tooltips:**
- Tooltips: Hover, brief (1 sentence)
- Popovers: Click, detailed (paragraph)

---

## Best Practices

### Content Organization Strategy

#### 1. Tutorial Structure
```
1. Hero/Jumbotron → Introduce topic, grab attention
2. Alert → Set context, prerequisites
3. Carousel → Show key concepts visually
4. Tabs → Organize content by type
   ├─ Overview → Text explanation
   ├─ Diagrams → Visual representation
   ├─ Code → Implementation
   └─ Output → Results
5. Accordion → Deep dive topics
6. Cards → Related resources
7. Footer → Links, references
```

#### 2. Visual Hierarchy
- **H1**: Page title (in Jumbotron)
- **H2**: Major sections
- **H3**: Subsections
- **H4**: Card headers, minor sections
- **H5-H6**: Nested content

#### 3. Color Psychology
- **Blue**: Trust, professionalism, technology
- **Green**: Growth, success, completion
- **Red**: Urgency, errors, warnings
- **Yellow**: Attention, caution
- **Purple**: Creativity, uniqueness

### Responsive Design

**Mobile Considerations:**
- Off-canvas menu for navigation (saves space)
- Accordion over tabs (better mobile UX)
- Vertical button groups over horizontal
- Cards stack on small screens
- Fixed controls don't obstruct content

### Accessibility

**Implemented Features:**
- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Color contrast compliance
- Alt text for images (add your own)
- Focus indicators

**Your Responsibilities:**
- Add alt text to carousel images
- Ensure heading hierarchy
- Test with screen readers
- Provide text alternatives for diagrams

### Performance Optimization

**CDN Usage:**
- Bootstrap 5.3.2 from CDN
- Bootstrap Icons from CDN
- Prism.js from CDN
- Fast loading times
- Reliable availability

**Best Practices:**
- Lazy load images in carousel
- Optimize any custom images
- Minimize custom CSS
- Use compressed code blocks

### Version Control

**Template Versioning:**
- Version badge (bottom-right): Shows template version
- Update manually when making changes
- Track major/minor/patch updates

**Recommended Versioning Strategy:**
```
v1.0.0 - Initial template
v1.1.0 - Added new section/component
v1.0.1 - Fixed typo/minor update
v2.0.0 - Major restructure
```

### Content Writing Tips

#### Code Examples
- Include complete, runnable code
- Add meaningful comments
- Show imports and dependencies
- Provide context (what problem it solves)

#### Explanations
- Start with "why" before "how"
- Use analogies for complex concepts
- Build progressively (simple → complex)
- Include prerequisites upfront

#### Diagrams
- Label all components
- Show direction of flow
- Include legend if needed
- Keep it simple (one concept per diagram)

### Common Patterns

#### Tutorial Introduction Pattern
```html
1. Jumbotron (What & Why)
2. Info Alert (Prerequisites, Audience)
3. Carousel (Key Concepts Preview)
4. Overview Card (Detailed Introduction)
```

#### Concept Explanation Pattern
```html
1. Accordion Item (Concept Name)
2. Text Explanation (Theory)
3. ASCII Diagram (Visual)
4. Code Example (Implementation)
5. Console Output (Results)
6. Alert (Key Takeaway)
```

#### Step-by-Step Pattern
```html
1. List Group (Steps Overview)
2. Accordion (Each Step)
   ├─ Explanation
   ├─ Code
   ├─ Output
   └─ Success Alert
```

### Customization Guide

#### Quick Start Customization
1. Update page title in `<title>` and Jumbotron
2. Modify navigation links to match your sections
3. Replace placeholder content in tabs
4. Update accordion items with your topics
5. Customize card content for your modules
6. Add your code examples
7. Update footer links

#### Adding New Sections
1. Create section with ID: `<div id="new-section">`
2. Add to navigation menu
3. Add to off-canvas TOC
4. Add to dropdown if appropriate

#### Styling Customization
All styles are in `<style>` block in `<head>`:
- Modify CSS variables for colors
- Adjust spacing/sizing as needed
- Add custom classes
- Override Bootstrap defaults carefully

---

## Component Quick Reference

| Component | Best For | Location in Template |
|-----------|----------|---------------------|
| Navbar | Primary navigation | Top (sticky) |
| Off-canvas | Detailed TOC | Left sidebar |
| Jumbotron | Hero/Intro | Top of content |
| Carousel | Visual highlights | After hero |
| Tabs | Content type organization | Main content |
| Accordion | Deep-dive topics | Main content |
| Cards | Modular sections | Throughout |
| List Group | Steps, resources | Varied |
| Forms | Interactive examples | Specific sections |
| Alerts | Important messages | Throughout |
| Toast | Temporary feedback | Bottom-right |
| Tooltip | Brief help | On icons/buttons |
| Popover | Detailed help | On help buttons |

---

## Troubleshooting

### Issue: Tooltips not working
**Solution:** JavaScript initialization at bottom of file handles this. Ensure scripts load.

### Issue: Theme toggle not working
**Solution:** Check browser console for JavaScript errors. Ensure Bootstrap JS is loaded.

### Issue: Code highlighting not working
**Solution:** Verify Prism.js is loaded and language class is correct (e.g., `language-java`).

### Issue: Responsive layout broken
**Solution:** Check Bootstrap grid classes (col-md-*, col-lg-*) are properly closed.

---

## Next Steps

1. **Open the template** in a web browser
2. **Explore each component** interactively
3. **Test theme switching** and color flavors
4. **Start replacing** placeholder content with your material
5. **Test responsiveness** on different screen sizes
6. **Share and iterate** based on feedback

## Additional Resources

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Prism.js Documentation](https://prismjs.com/)
- [PlantUML Guide](https://plantuml.com/guide)

---

**Template Version:** v1.0.0  
**Last Updated:** January 2026  
**Bootstrap Version:** 5.3.2  
**License:** Free to use and modify
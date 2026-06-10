/**
 * Unit Tests for Apache Maven Tutorial
 *
 * Covers:
 * 1. Page structure and meta information
 * 2. Introduction section content
 * 3. Architecture section with tabs
 * 4. Ecosystem section with plugins and tools
 * 5. Build Lifecycle section with phases table
 * 6. POM Structure section
 * 7. Real-Time Example section
 * 8. FAQs section
 * 9. Version History section
 * 10. Resources section
 * 11. Navigation and TOC links
 */

const fs = require('fs');
const path = require('path');
const { getByText, queryByText } = require('@testing-library/dom');

describe('Apache Maven Tutorial', () => {
  let container;

  beforeEach(() => {
    const htmlContent = fs.readFileSync(
      path.resolve(__dirname, '../actual-tutorials-using-the-template/maven-tutorial.html'),
      'utf8'
    );
    document.body.innerHTML = htmlContent;
    container = document.body;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('1. Page Structure and Meta Information', () => {
    test('should have correct page title', () => {
      const title = container.querySelector('title');
      expect(title).toBeInTheDocument();
      expect(title.textContent).toBe('Apache Maven Tutorial - Complete Guide');
    });

    test('should have Bootstrap CSS loaded', () => {
      const bootstrapLink = container.querySelector('link[href*="bootstrap"]');
      expect(bootstrapLink).toBeInTheDocument();
    });

    test('should have Bootstrap Icons loaded', () => {
      const iconsLink = container.querySelector('link[href*="bootstrap-icons"]');
      expect(iconsLink).toBeInTheDocument();
    });

    test('should have Prism.js for syntax highlighting', () => {
      const prismLink = container.querySelector('link[href*="prism"]');
      expect(prismLink).toBeInTheDocument();
    });

    test('should have navigation bar with brand', () => {
      const navbar = container.querySelector('.navbar');
      expect(navbar).toBeInTheDocument();

      const brand = navbar.querySelector('.navbar-brand');
      expect(brand).toBeInTheDocument();
      expect(brand.textContent).toContain('Maven');
    });

    test('should have theme controls', () => {
      const themeControls = container.querySelector('.theme-controls');
      expect(themeControls).toBeInTheDocument();

      const themeToggle = container.querySelector('#themeToggle');
      expect(themeToggle).toBeInTheDocument();
    });

    test('should have version badge', () => {
      const versionBadge = container.querySelector('.version-badge');
      expect(versionBadge).toBeInTheDocument();
      expect(versionBadge.textContent).toBe('v1.0.0');
    });
  });

  describe('2. Introduction Section', () => {
    test('should render introduction section', () => {
      const introSection = container.querySelector('#introduction');
      expect(introSection).toBeInTheDocument();
      expect(introSection).toHaveClass('card', 'mb-4');
    });

    test('should have introduction header with icon', () => {
      const header = container.querySelector('#introduction .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-primary', 'text-white');
      expect(header.textContent).toContain('Introduction to Apache Maven');
    });

    test('should describe what Maven is', () => {
      const introSection = container.querySelector('#introduction');
      expect(introSection.textContent).toContain('build automation');
      expect(introSection.textContent).toContain('project management tool');
      expect(introSection.textContent).toContain('Project Object Model');
    });

    test('should list Maven key features', () => {
      const introSection = container.querySelector('#introduction');
      expect(introSection.textContent).toContain('Dependency Management');
      expect(introSection.textContent).toContain('Standardized Build');
      expect(introSection.textContent).toContain('Plugin Architecture');
      expect(introSection.textContent).toContain('Project Lifecycle');
    });

    test('should have info alert about latest version', () => {
      const introSection = container.querySelector('#introduction');
      const alert = introSection.querySelector('.alert.alert-info');
      expect(alert).toBeInTheDocument();
      expect(alert.textContent).toContain('Maven 3.9');
    });

    test('should explain why to use Maven', () => {
      const introSection = container.querySelector('#introduction');
      expect(introSection.textContent).toContain('Simplified Build Process');
      expect(introSection.textContent).toContain('Dependency Management');
    });
  });

  describe('3. Architecture Section', () => {
    test('should render architecture section', () => {
      const archSection = container.querySelector('#architecture');
      expect(archSection).toBeInTheDocument();
    });

    test('should have architecture header with correct styling', () => {
      const header = container.querySelector('#architecture .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-success', 'text-white');
      expect(header.textContent).toContain('Maven Architecture');
    });

    test('should describe POM-based architecture', () => {
      const archSection = container.querySelector('#architecture');
      expect(archSection.textContent).toContain('Project Object Model');
      expect(archSection.textContent).toContain('plugins');
      expect(archSection.textContent).toContain('repositories');
    });

    test('should have tab group for architecture diagrams', () => {
      const tabList = container.querySelector('#architectureTabs');
      expect(tabList).toBeInTheDocument();

      const tabs = tabList.querySelectorAll('.nav-link');
      expect(tabs.length).toBe(3);
    });

    test('should have ASCII diagram tab active by default', () => {
      const asciiTab = container.querySelector('#ascii-arch-tab');
      expect(asciiTab).toBeInTheDocument();
      expect(asciiTab).toHaveClass('active');
    });

    test('should have ASCII diagram content about Maven architecture', () => {
      const asciiPane = container.querySelector('#ascii-arch');
      expect(asciiPane).toBeInTheDocument();
      expect(asciiPane.textContent).toContain('Maven Architecture');
    });

    test('should have PlantUML tab', () => {
      const plantumlTab = container.querySelector('#plantuml-arch-tab');
      expect(plantumlTab).toBeInTheDocument();
    });
  });

  describe('4. Ecosystem Section', () => {
    test('should render ecosystem section', () => {
      const ecoSection = container.querySelector('#ecosystem');
      expect(ecoSection).toBeInTheDocument();
    });

    test('should have ecosystem header', () => {
      const header = container.querySelector('#ecosystem .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-warning');
      expect(header.textContent).toContain('Maven Ecosystem');
    });

    test('should list core build plugins', () => {
      const ecoSection = container.querySelector('#ecosystem');
      expect(ecoSection.textContent).toContain('maven-compiler-plugin');
      expect(ecoSection.textContent).toContain('maven-jar-plugin');
      expect(ecoSection.textContent).toContain('maven-war-plugin');
    });

    test('should list testing plugins', () => {
      const ecoSection = container.querySelector('#ecosystem');
      expect(ecoSection.textContent).toContain('maven-surefire-plugin');
      expect(ecoSection.textContent).toContain('maven-failsafe-plugin');
      expect(ecoSection.textContent).toContain('jacoco-maven-plugin');
    });

    test('should have build tools and IDEs table', () => {
      const ecoSection = container.querySelector('#ecosystem');
      const table = ecoSection.querySelector('table');
      expect(table).toBeInTheDocument();
      expect(ecoSection.textContent).toContain('IntelliJ IDEA');
    });
  });

  describe('5. Build Lifecycle Section', () => {
    test('should render lifecycle section', () => {
      const lifecycleSection = container.querySelector('#lifecycle');
      expect(lifecycleSection).toBeInTheDocument();
    });

    test('should have lifecycle header', () => {
      const header = container.querySelector('#lifecycle .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-info', 'text-white');
      expect(header.textContent).toContain('Maven Build Lifecycle');
    });

    test('should describe the three built-in lifecycles', () => {
      const lifecycleSection = container.querySelector('#lifecycle');
      expect(lifecycleSection.textContent).toContain('default');
      expect(lifecycleSection.textContent).toContain('clean');
      expect(lifecycleSection.textContent).toContain('site');
    });

    test('should have lifecycle phases table', () => {
      const lifecycleSection = container.querySelector('#lifecycle');
      const table = lifecycleSection.querySelector('table');
      expect(table).toBeInTheDocument();

      const rows = table.querySelectorAll('tbody tr');
      expect(rows.length).toBeGreaterThanOrEqual(5);
    });

    test('should list key lifecycle phases', () => {
      const lifecycleSection = container.querySelector('#lifecycle');
      expect(lifecycleSection.textContent).toContain('validate');
      expect(lifecycleSection.textContent).toContain('compile');
      expect(lifecycleSection.textContent).toContain('test');
      expect(lifecycleSection.textContent).toContain('package');
      expect(lifecycleSection.textContent).toContain('install');
      expect(lifecycleSection.textContent).toContain('deploy');
    });
  });

  describe('6. POM Structure Section', () => {
    test('should render POM section', () => {
      const pomSection = container.querySelector('#pom');
      expect(pomSection).toBeInTheDocument();
    });

    test('should have POM header', () => {
      const header = container.querySelector('#pom .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-danger', 'text-white');
      expect(header.textContent).toContain('POM');
      expect(header.textContent).toContain('Project Object Model');
    });

    test('should describe POM as the fundamental unit', () => {
      const pomSection = container.querySelector('#pom');
      expect(pomSection.textContent).toContain('pom.xml');
      expect(pomSection.textContent).toContain('fundamental unit');
    });

    test('should have code example with POM structure', () => {
      const pomSection = container.querySelector('#pom');
      const codeBlocks = pomSection.querySelectorAll('pre code');
      expect(codeBlocks.length).toBeGreaterThanOrEqual(1);

      expect(pomSection.textContent).toContain('groupId');
      expect(pomSection.textContent).toContain('artifactId');
      expect(pomSection.textContent).toContain('version');
    });
  });

  describe('7. Real-Time Example Section', () => {
    test('should render real-time example section', () => {
      const exampleSection = container.querySelector('#real-time-example');
      expect(exampleSection).toBeInTheDocument();
    });

    test('should have real-time example header', () => {
      const header = container.querySelector('#real-time-example .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-primary', 'text-white');
    });

    test('should have code explanations accordion', () => {
      const accordion = container.querySelector('#codeExplanationsAccordion');
      expect(accordion).toBeInTheDocument();

      const items = accordion.querySelectorAll('.accordion-item');
      expect(items.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('8. FAQs Section', () => {
    test('should render FAQs section', () => {
      const faqsSection = container.querySelector('#faqs');
      expect(faqsSection).toBeInTheDocument();
    });

    test('should have FAQs header', () => {
      const header = container.querySelector('#faqs .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-warning');
      expect(header.textContent).toContain('Frequently Asked Questions');
    });
  });

  describe('9. Version History Section', () => {
    test('should render version history section', () => {
      const versionSection = container.querySelector('#version-history');
      expect(versionSection).toBeInTheDocument();
    });

    test('should have version history header', () => {
      const header = container.querySelector('#version-history .card-header');
      expect(header).toBeInTheDocument();
      expect(header.textContent).toContain('Version History');
    });
  });

  describe('10. Resources Section', () => {
    test('should render resources section', () => {
      const resourcesSection = container.querySelector('#resources');
      expect(resourcesSection).toBeInTheDocument();
    });

    test('should have resources header', () => {
      const header = container.querySelector('#resources .card-header');
      expect(header).toBeInTheDocument();
      expect(header.textContent).toContain('Resources');
    });
  });

  describe('11. Navigation and TOC', () => {
    test('should have off-canvas TOC', () => {
      const toc = container.querySelector('#tocOffcanvas');
      expect(toc).toBeInTheDocument();
    });

    test('should have TOC links to all major sections', () => {
      const toc = container.querySelector('#tocOffcanvas');
      const links = toc.querySelectorAll('a');
      const hrefs = Array.from(links).map(a => a.getAttribute('href'));

      expect(hrefs).toContain('#introduction');
      expect(hrefs).toContain('#architecture');
      expect(hrefs).toContain('#ecosystem');
      expect(hrefs).toContain('#lifecycle');
      expect(hrefs).toContain('#pom');
      expect(hrefs).toContain('#real-time-example');
    });

    test('should have jumbotron hero section', () => {
      const jumbotron = container.querySelector('#home');
      expect(jumbotron).toBeInTheDocument();
      expect(jumbotron).toHaveClass('jumbotron-custom');
      expect(jumbotron.textContent).toContain('Apache Maven Mastery');
    });

    test('should have dismissible success alert', () => {
      const alert = container.querySelector('.alert.alert-success.alert-dismissible');
      expect(alert).toBeInTheDocument();
      expect(alert.textContent).toContain('Complete Tutorial');
    });

    test('should have search results panel', () => {
      const searchPanel = container.querySelector('#searchResultsPanel');
      expect(searchPanel).toBeInTheDocument();
    });

    test('should have navbar dropdown with section links', () => {
      const dropdownMenu = container.querySelector('.dropdown-menu');
      expect(dropdownMenu).toBeInTheDocument();

      const items = dropdownMenu.querySelectorAll('.dropdown-item');
      expect(items.length).toBeGreaterThanOrEqual(5);
    });

    test('should have Get Started button in hero', () => {
      const jumbotron = container.querySelector('#home');
      const ctaButton = jumbotron.querySelector('a[href="#introduction"]');
      expect(ctaButton).toBeInTheDocument();
      expect(ctaButton.textContent).toContain('Get Started');
    });
  });
});

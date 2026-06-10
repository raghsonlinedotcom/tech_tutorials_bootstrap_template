/**
 * Unit Tests for REST Assured Tutorial
 *
 * Covers:
 * 1. Page structure and meta information
 * 2. Introduction section content
 * 3. Architecture section with tabs
 * 4. Ecosystem section with core modules and companion libraries
 * 5. Advantages & Disadvantages section
 * 6. Use Cases section
 * 7. Comparisons section
 * 8. DSL & Features section
 * 9. Real-Time Example section
 * 10. FAQs section with accordion
 * 11. Version History section
 * 12. Resources section
 * 13. Navigation and TOC links
 */

const fs = require('fs');
const path = require('path');
const { getByText, queryByText } = require('@testing-library/dom');

describe('REST Assured Tutorial', () => {
  let container;

  beforeEach(() => {
    const htmlContent = fs.readFileSync(
      path.resolve(__dirname, '../actual-tutorials-using-the-template/restassured-tutorial.html'),
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
      expect(title.textContent).toBe('REST Assured Tutorial - Complete API Testing Mastery');
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
      expect(brand.textContent).toContain('REST Assured');
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
      expect(header).toHaveClass('bg-success', 'text-white');
      expect(header.textContent).toContain('Introduction to REST Assured');
    });

    test('should describe REST Assured as a Java-based DSL', () => {
      const introSection = container.querySelector('#introduction');
      expect(introSection.textContent).toContain('Java-based DSL');
      expect(introSection.textContent).toContain('RESTful web services');
    });

    test('should list REST Assured key features', () => {
      const introSection = container.querySelector('#introduction');
      expect(introSection.textContent).toContain('BDD-Style Syntax');
      expect(introSection.textContent).toContain('Fluent API');
      expect(introSection.textContent).toContain('JSON/XML Support');
      expect(introSection.textContent).toContain('Authentication');
      expect(introSection.textContent).toContain('Schema Validation');
    });

    test('should have info alert about BDD pattern', () => {
      const introSection = container.querySelector('#introduction');
      const alert = introSection.querySelector('.alert.alert-info');
      expect(alert).toBeInTheDocument();
      expect(alert.textContent).toContain('BDD');
      expect(alert.textContent).toContain('given()');
      expect(alert.textContent).toContain('when()');
      expect(alert.textContent).toContain('then()');
    });

    test('should mention Johan Haleby as creator', () => {
      const introSection = container.querySelector('#introduction');
      expect(introSection.textContent).toContain('Johan Haleby');
    });

    test('should have first glimpse code example', () => {
      const introSection = container.querySelector('#introduction');
      const codeBlocks = introSection.querySelectorAll('pre code');
      expect(codeBlocks.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('3. Architecture Section', () => {
    test('should render architecture section', () => {
      const archSection = container.querySelector('#architecture');
      expect(archSection).toBeInTheDocument();
    });

    test('should have architecture header', () => {
      const header = container.querySelector('#architecture .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-primary', 'text-white');
      expect(header.textContent).toContain('REST Assured Architecture');
    });

    test('should have tab group for architecture diagrams', () => {
      const tabList = container.querySelector('#architectureTab');
      expect(tabList).toBeInTheDocument();

      const tabs = tabList.querySelectorAll('.nav-link');
      expect(tabs.length).toBe(3);
    });

    test('should have ASCII diagram tab active by default', () => {
      const asciiTab = container.querySelector('#ascii-architecture-tab');
      expect(asciiTab).toBeInTheDocument();
      expect(asciiTab).toHaveClass('active');
    });

    test('should have PlantUML and Mermaid tabs', () => {
      const plantumlTab = container.querySelector('#plantuml-architecture-tab');
      expect(plantumlTab).toBeInTheDocument();

      const mermaidTab = container.querySelector('#mermaid-architecture-tab');
      expect(mermaidTab).toBeInTheDocument();
    });

    test('should have ASCII diagram content about request lifecycle', () => {
      const asciiPane = container.querySelector('#ascii-architecture');
      expect(asciiPane).toBeInTheDocument();
      expect(asciiPane.textContent).toContain('Request Lifecycle');
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
      expect(header).toHaveClass('bg-info', 'text-white');
      expect(header.textContent).toContain('REST Assured Ecosystem');
    });

    test('should list core modules', () => {
      const ecoSection = container.querySelector('#ecosystem');
      expect(ecoSection.textContent).toContain('rest-assured');
      expect(ecoSection.textContent).toContain('json-schema-validator');
      expect(ecoSection.textContent).toContain('spring-mock-mvc');
      expect(ecoSection.textContent).toContain('kotlin-extensions');
    });

    test('should list companion libraries', () => {
      const ecoSection = container.querySelector('#ecosystem');
      expect(ecoSection.textContent).toContain('JUnit 5');
      expect(ecoSection.textContent).toContain('Hamcrest');
    });

    test('should have list-group items for modules', () => {
      const ecoSection = container.querySelector('#ecosystem');
      const listItems = ecoSection.querySelectorAll('.list-group-item');
      expect(listItems.length).toBeGreaterThanOrEqual(4);
    });
  });

  describe('5. Advantages & Disadvantages Section', () => {
    test('should render advantages-disadvantages section', () => {
      const section = container.querySelector('#advantages-disadvantages');
      expect(section).toBeInTheDocument();
    });

    test('should have header with correct styling', () => {
      const header = container.querySelector('#advantages-disadvantages .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-warning');
    });
  });

  describe('6. Use Cases Section', () => {
    test('should render use-cases section', () => {
      const useCases = container.querySelector('#use-cases');
      expect(useCases).toBeInTheDocument();
    });

    test('should have use cases header', () => {
      const header = container.querySelector('#use-cases .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-danger', 'text-white');
      expect(header.textContent).toContain('Practical Use Cases');
    });

    test('should list various use case categories', () => {
      const useCases = container.querySelector('#use-cases');
      expect(useCases.textContent).toContain('Functional API Testing');
      expect(useCases.textContent).toContain('Contract Testing');
      expect(useCases.textContent).toContain('Security Testing');
      expect(useCases.textContent).toContain('Integration Testing');
      expect(useCases.textContent).toContain('Regression Testing');
      expect(useCases.textContent).toContain('Data-Driven Testing');
    });

    test('should have use case cards with distinct border colors', () => {
      const useCases = container.querySelector('#use-cases');
      expect(useCases.querySelector('.border-success')).toBeInTheDocument();
      expect(useCases.querySelector('.border-primary')).toBeInTheDocument();
      expect(useCases.querySelector('.border-warning')).toBeInTheDocument();
      expect(useCases.querySelector('.border-info')).toBeInTheDocument();
    });
  });

  describe('7. Comparisons Section', () => {
    test('should render comparisons section', () => {
      const compSection = container.querySelector('#comparisons');
      expect(compSection).toBeInTheDocument();
    });

    test('should have comparisons header', () => {
      const header = container.querySelector('#comparisons .card-header');
      expect(header).toBeInTheDocument();
      expect(header.textContent).toContain('Competing Technologies');
    });
  });

  describe('8. DSL & Features Section', () => {
    test('should render DSL features section', () => {
      const dslSection = container.querySelector('#dsl-features');
      expect(dslSection).toBeInTheDocument();
    });

    test('should have DSL features header', () => {
      const header = container.querySelector('#dsl-features .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-secondary', 'text-white');
      expect(header.textContent).toContain('REST Assured DSL');
    });

    test('should document given() request configuration', () => {
      const dslSection = container.querySelector('#dsl-features');
      expect(dslSection.textContent).toContain('given()');
      expect(dslSection.textContent).toContain('Request Configuration');
    });

    test('should document when() HTTP methods', () => {
      const dslSection = container.querySelector('#dsl-features');
      expect(dslSection.textContent).toContain('when()');
      expect(dslSection.textContent).toContain('HTTP Methods');
    });

    test('should have code examples', () => {
      const dslSection = container.querySelector('#dsl-features');
      const codeBlocks = dslSection.querySelectorAll('pre code');
      expect(codeBlocks.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('9. Real-Time Example Section', () => {
    test('should render real-time example section', () => {
      const exampleSection = container.querySelector('#real-time-example');
      expect(exampleSection).toBeInTheDocument();
    });

    test('should have real-time example header', () => {
      const header = container.querySelector('#real-time-example .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-success', 'text-white');
    });

    test('should have source code accordion', () => {
      const accordion = container.querySelector('#sourceCodeAccordion');
      expect(accordion).toBeInTheDocument();

      const items = accordion.querySelectorAll('.accordion-item');
      expect(items.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('10. FAQs Section', () => {
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

    test('should have FAQ accordion', () => {
      const accordion = container.querySelector('#faqAccordion');
      expect(accordion).toBeInTheDocument();

      const items = accordion.querySelectorAll('.accordion-item');
      expect(items.length).toBeGreaterThanOrEqual(3);
    });

    test('should have first FAQ expanded by default', () => {
      const faq1 = container.querySelector('#faq1');
      expect(faq1).toBeInTheDocument();
      expect(faq1).toHaveClass('show');
    });

    test('should cover key FAQ topics', () => {
      const faqsSection = container.querySelector('#faqs');
      expect(faqsSection.textContent).toContain('REST Assured and Spring MockMvc');
      expect(faqsSection.textContent).toContain('Java 17');
      expect(faqsSection.textContent).toContain('TestContainers');
    });
  });

  describe('11. Version History Section', () => {
    test('should render version history section', () => {
      const versionSection = container.querySelector('#version-history');
      expect(versionSection).toBeInTheDocument();
    });

    test('should have version history header', () => {
      const header = container.querySelector('#version-history .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-info', 'text-white');
      expect(header.textContent).toContain('Version History');
    });

    test('should have version accordion', () => {
      const accordion = container.querySelector('#versionHistoryAccordion');
      expect(accordion).toBeInTheDocument();
    });

    test('should display current version 1.0.0', () => {
      const versionSection = container.querySelector('#version-history');
      expect(versionSection.textContent).toContain('Version 1.0.0');
      const currentBadge = versionSection.querySelector('.badge.bg-success');
      expect(currentBadge).toBeInTheDocument();
      expect(currentBadge.textContent).toBe('Current');
    });

    test('should have version 1.0.0 expanded by default', () => {
      const version100 = container.querySelector('#version100');
      expect(version100).toBeInTheDocument();
      expect(version100).toHaveClass('show');
    });
  });

  describe('12. Resources Section', () => {
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

  describe('13. Navigation and TOC', () => {
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
      expect(hrefs).toContain('#use-cases');
      expect(hrefs).toContain('#dsl-features');
      expect(hrefs).toContain('#real-time-example');
      expect(hrefs).toContain('#faqs');
      expect(hrefs).toContain('#version-history');
      expect(hrefs).toContain('#resources');
    });

    test('should have jumbotron hero section', () => {
      const jumbotron = container.querySelector('#home');
      expect(jumbotron).toBeInTheDocument();
      expect(jumbotron).toHaveClass('jumbotron-custom');
      expect(jumbotron.textContent).toContain('REST Assured Mastery');
    });

    test('should have dismissible success alert', () => {
      const alert = container.querySelector('.alert.alert-success.alert-dismissible');
      expect(alert).toBeInTheDocument();
      expect(alert.textContent).toContain('Complete Tutorial');
    });

    test('should have Get Started button in hero', () => {
      const jumbotron = container.querySelector('#home');
      const ctaButton = jumbotron.querySelector('a[href="#introduction"]');
      expect(ctaButton).toBeInTheDocument();
      expect(ctaButton.textContent).toContain('Get Started');
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
  });
});

/**
 * Unit Tests for jq Tutorial
 *
 * Covers:
 * 1. Page structure and meta information
 * 2. Introduction section content
 * 3. Installation section with accordion
 * 4. Architecture section with tabs
 * 5. Basic Usage section with options table
 * 6. Filters & Operations section
 * 7. Pros & Cons section
 * 8. Version History section
 * 9. Navigation and TOC links
 */

const fs = require('fs');
const path = require('path');
const { getByText, queryByText } = require('@testing-library/dom');

describe('jq Tutorial', () => {
  let container;

  beforeEach(() => {
    const htmlContent = fs.readFileSync(
      path.resolve(__dirname, '../actual-tutorials-using-the-template/jq-tutorial.html'),
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
      expect(title.textContent).toBe('jq Tutorial - Complete Guide to JSON Processing');
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
      expect(brand.textContent).toContain('jq - JSON Processor');
    });

    test('should have theme controls with toggle and color buttons', () => {
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
      const introHeader = container.querySelector('#introduction .card-header');
      expect(introHeader).toBeInTheDocument();
      expect(introHeader).toHaveClass('bg-primary', 'text-white');
      expect(introHeader.textContent).toContain('Introduction');
      expect(introHeader.textContent).toContain('Why jq Was Invented');
    });

    test('should describe the problem jq solves', () => {
      const introSection = container.querySelector('#introduction');
      expect(introSection.textContent).toContain('The Problem jq Solves');
      expect(introSection.textContent).toContain('Before jq');
    });

    test('should list challenges before jq and solutions with jq', () => {
      const introSection = container.querySelector('#introduction');
      expect(introSection.textContent).toContain('Challenges Before jq');
      expect(introSection.textContent).toContain('Solutions with jq');
      expect(introSection.textContent).toContain('No native JSON parsing');
      expect(introSection.textContent).toContain('Native JSON understanding');
    });

    test('should have historical context', () => {
      const introSection = container.querySelector('#introduction');
      expect(introSection.textContent).toContain('Stephen Dolan');
      expect(introSection.textContent).toContain('2012');
    });

    test('should have info alert about design philosophy', () => {
      const introSection = container.querySelector('#introduction');
      const alert = introSection.querySelector('.alert.alert-info');
      expect(alert).toBeInTheDocument();
      expect(alert.textContent).toContain('Design Philosophy');
      expect(alert.textContent).toContain('sed');
    });

    test('should list core objectives', () => {
      const introSection = container.querySelector('#introduction');
      expect(introSection.textContent).toContain('Simplicity');
    });
  });

  describe('3. Installation Section', () => {
    test('should render installation section', () => {
      const installSection = container.querySelector('#installation');
      expect(installSection).toBeInTheDocument();
    });

    test('should have installation header with download icon', () => {
      const header = container.querySelector('#installation .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-success', 'text-white');
      expect(header.textContent).toContain('Installation');
    });

    test('should have installation accordion with platform options', () => {
      const accordion = container.querySelector('#installAccordion');
      expect(accordion).toBeInTheDocument();

      const items = accordion.querySelectorAll('.accordion-item');
      expect(items.length).toBeGreaterThanOrEqual(3);
    });

    test('should have macOS installation expanded by default', () => {
      const macosInstall = container.querySelector('#macos-install');
      expect(macosInstall).toBeInTheDocument();
      expect(macosInstall).toHaveClass('show');
    });

    test('should have Linux and Windows installations collapsed', () => {
      const linuxInstall = container.querySelector('#linux-install');
      expect(linuxInstall).toBeInTheDocument();
      expect(linuxInstall).not.toHaveClass('show');

      const windowsInstall = container.querySelector('#windows-install');
      expect(windowsInstall).toBeInTheDocument();
      expect(windowsInstall).not.toHaveClass('show');
    });

    test('should contain brew install command for macOS', () => {
      const macosInstall = container.querySelector('#macos-install');
      expect(macosInstall.textContent).toContain('brew install jq');
    });
  });

  describe('4. Architecture Section with Tabs', () => {
    test('should render architecture section', () => {
      const archSection = container.querySelector('#architecture');
      expect(archSection).toBeInTheDocument();
    });

    test('should have architecture header', () => {
      const header = container.querySelector('#architecture .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-info', 'text-white');
      expect(header.textContent).toContain('Architecture');
    });

    test('should have tab group with multiple tabs', () => {
      const tabList = container.querySelector('#archTabs');
      expect(tabList).toBeInTheDocument();

      const tabs = tabList.querySelectorAll('.nav-link');
      expect(tabs.length).toBeGreaterThanOrEqual(3);
    });

    test('should have Architecture overview tab active by default', () => {
      const overviewTab = container.querySelector('#arch-overview-tab');
      expect(overviewTab).toBeInTheDocument();
      expect(overviewTab).toHaveClass('active');
    });

    test('should have architecture overview content with core components', () => {
      const overviewPane = container.querySelector('#arch-overview');
      expect(overviewPane).toBeInTheDocument();
      expect(overviewPane.textContent).toContain('Lexer');
      expect(overviewPane.textContent).toContain('Parser');
      expect(overviewPane.textContent).toContain('Compiler');
      expect(overviewPane.textContent).toContain('Runtime');
    });

    test('should have ASCII diagram tab', () => {
      const asciiTab = container.querySelector('#arch-ascii-tab');
      expect(asciiTab).toBeInTheDocument();
    });

    test('should have PlantUML tab', () => {
      const plantumlTab = container.querySelector('#arch-plantuml-tab');
      expect(plantumlTab).toBeInTheDocument();
    });

    test('should have ecosystem tab', () => {
      const ecosystemTab = container.querySelector('#ecosystem-tab');
      expect(ecosystemTab).toBeInTheDocument();
    });
  });

  describe('5. Basic Usage Section', () => {
    test('should render basic usage section', () => {
      const basicSection = container.querySelector('#basic-usage');
      expect(basicSection).toBeInTheDocument();
    });

    test('should have basic usage header', () => {
      const header = container.querySelector('#basic-usage .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-warning');
      expect(header.textContent).toContain('Basic Usage');
    });

    test('should have command structure documentation', () => {
      const basicSection = container.querySelector('#basic-usage');
      expect(basicSection.textContent).toContain('Command Structure');
    });

    test('should have options table with common flags', () => {
      const basicSection = container.querySelector('#basic-usage');
      const table = basicSection.querySelector('table');
      expect(table).toBeInTheDocument();

      const rows = table.querySelectorAll('tbody tr');
      expect(rows.length).toBeGreaterThanOrEqual(5);

      expect(basicSection.textContent).toContain('--raw-output');
      expect(basicSection.textContent).toContain('--compact-output');
      expect(basicSection.textContent).toContain('--slurp');
    });

    test('should have code examples', () => {
      const basicSection = container.querySelector('#basic-usage');
      const codeBlocks = basicSection.querySelectorAll('pre code');
      expect(codeBlocks.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('6. Filters & Operations Section', () => {
    test('should render filters section', () => {
      const filtersSection = container.querySelector('#filters');
      expect(filtersSection).toBeInTheDocument();
    });

    test('should have filters header', () => {
      const header = container.querySelector('#filters .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-danger', 'text-white');
      expect(header.textContent).toContain('Filters');
    });

    test('should have filters accordion', () => {
      const accordion = container.querySelector('#filtersAccordion');
      expect(accordion).toBeInTheDocument();

      const items = accordion.querySelectorAll('.accordion-item');
      expect(items.length).toBeGreaterThanOrEqual(1);
    });

    test('should describe filter concepts', () => {
      const filtersSection = container.querySelector('#filters');
      expect(filtersSection.textContent).toContain('filters');
    });
  });

  describe('7. Pros & Cons Section', () => {
    test('should render pros-cons section', () => {
      const prosConsSection = container.querySelector('#pros-cons');
      expect(prosConsSection).toBeInTheDocument();
    });

    test('should have pros and cons header', () => {
      const header = container.querySelector('#pros-cons .card-header');
      expect(header).toBeInTheDocument();
      expect(header.textContent).toContain('Pros');
      expect(header.textContent).toContain('Cons');
    });

    test('should list advantages', () => {
      const prosConsSection = container.querySelector('#pros-cons');
      expect(prosConsSection.textContent).toContain('Powerful');
      expect(prosConsSection.textContent).toContain('Fast Performance');
      expect(prosConsSection.textContent).toContain('Cross-Platform');
      expect(prosConsSection.textContent).toContain('Zero Dependencies');
    });

    test('should have both advantages and disadvantages cards', () => {
      const prosConsSection = container.querySelector('#pros-cons');
      const successCard = prosConsSection.querySelector('.border-success');
      const dangerCard = prosConsSection.querySelector('.border-danger');
      expect(successCard).toBeInTheDocument();
      expect(dangerCard).toBeInTheDocument();
    });
  });

  describe('8. Version History Section', () => {
    test('should render version history section', () => {
      const versionSection = container.querySelector('#version-history');
      expect(versionSection).toBeInTheDocument();
    });

    test('should have version history header', () => {
      const header = container.querySelector('#version-history .card-header');
      expect(header).toBeInTheDocument();
      expect(header.textContent).toContain('Version History');
    });

    test('should have version accordion', () => {
      const accordion = container.querySelector('#versionAccordion');
      expect(accordion).toBeInTheDocument();
    });

    test('should display current version 1.7.1', () => {
      const versionSection = container.querySelector('#version-history');
      expect(versionSection.textContent).toContain('Version 1.7.1');
      const currentBadge = versionSection.querySelector('.badge.bg-success');
      expect(currentBadge).toBeInTheDocument();
      expect(currentBadge.textContent).toBe('Current');
    });

    test('should have version 1.7.1 expanded by default', () => {
      const v171 = container.querySelector('#v171');
      expect(v171).toBeInTheDocument();
      expect(v171).toHaveClass('show');
    });

    test('should list version 1.6 and 1.5', () => {
      const versionSection = container.querySelector('#version-history');
      expect(versionSection.textContent).toContain('Version 1.6');
      expect(versionSection.textContent).toContain('Version 1.5');
    });
  });

  describe('9. Navigation and TOC', () => {
    test('should have off-canvas TOC button', () => {
      const tocButton = container.querySelector('[data-bs-target="#tocOffcanvas"]');
      expect(tocButton).toBeInTheDocument();
    });

    test('should have off-canvas TOC with section links', () => {
      const toc = container.querySelector('#tocOffcanvas');
      expect(toc).toBeInTheDocument();

      const links = toc.querySelectorAll('.list-group-item');
      expect(links.length).toBeGreaterThanOrEqual(5);
    });

    test('should have navbar dropdown with section links', () => {
      const dropdownMenu = container.querySelector('.dropdown-menu');
      expect(dropdownMenu).toBeInTheDocument();

      const items = dropdownMenu.querySelectorAll('.dropdown-item');
      expect(items.length).toBeGreaterThanOrEqual(5);
    });

    test('should have links to all major sections in TOC', () => {
      const toc = container.querySelector('#tocOffcanvas');
      const links = toc.querySelectorAll('a');
      const hrefs = Array.from(links).map(a => a.getAttribute('href'));

      expect(hrefs).toContain('#introduction');
      expect(hrefs).toContain('#installation');
      expect(hrefs).toContain('#architecture');
      expect(hrefs).toContain('#basic-usage');
      expect(hrefs).toContain('#filters');
    });

    test('should have search form in navbar', () => {
      const searchForm = container.querySelector('.navbar form[role="search"]');
      expect(searchForm).toBeInTheDocument();

      const searchInput = searchForm.querySelector('input[type="search"]');
      expect(searchInput).toBeInTheDocument();
    });

    test('should have jumbotron hero section', () => {
      const jumbotron = container.querySelector('#home');
      expect(jumbotron).toBeInTheDocument();
      expect(jumbotron).toHaveClass('jumbotron-custom');
      expect(jumbotron.textContent).toContain('jq');
    });

    test('should have carousel', () => {
      const carousel = container.querySelector('#tutorialCarousel');
      expect(carousel).toBeInTheDocument();

      const items = carousel.querySelectorAll('.carousel-item');
      expect(items.length).toBeGreaterThanOrEqual(2);
    });
  });
});

/**
 * Unit Tests for Version History Section
 * 
 * Test Coverage:
 * 1. Version history section renders correctly with initial release details
 * 2. Version history accordion expands and collapses as expected
 * 3. Future versions section displays semantic versioning and roadmap information
 * 4. Badges in the version history section show correct status and version info
 */

const fs = require('fs');
const path = require('path');
const { getByText, getByRole, queryByText, getAllByRole } = require('@testing-library/dom');

describe('Version History Section', () => {
  let container;
  let htmlContent;

  beforeEach(() => {
    // Load the HTML file
    htmlContent = fs.readFileSync(
      path.resolve(__dirname, '../tutorial-template.html'),
      'utf8'
    );
    
    // Create a container and set the HTML
    document.body.innerHTML = htmlContent;
    container = document.body;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('1. Version History Section Rendering with Initial Release Details', () => {
    test('should render version history section with correct ID', () => {
      const versionHistorySection = container.querySelector('#version-history');
      expect(versionHistorySection).toBeInTheDocument();
      expect(versionHistorySection).toHaveClass('card', 'mb-4');
    });

    test('should display version history header with icon', () => {
      const header = container.querySelector('#version-history .card-header');
      expect(header).toBeInTheDocument();
      expect(header).toHaveClass('bg-info', 'text-white');
      expect(header.textContent).toContain('Version History & Changelog');
      
      const icon = header.querySelector('i.bi-clock-history');
      expect(icon).toBeInTheDocument();
    });

    test('should display lead paragraph explaining version history', () => {
      const versionHistorySection = container.querySelector('#version-history');
      const leadText = versionHistorySection.querySelector('.lead');
      expect(leadText).toBeInTheDocument();
      expect(leadText.textContent).toContain('Track the historical journey and progress');
    });

    test('should render initial release version 1.0.0 details', () => {
      const version100Button = container.querySelector('[data-bs-target="#version100"]');
      expect(version100Button).toBeInTheDocument();
      expect(version100Button.textContent).toContain('Version 1.0.0 - Initial Release');
      expect(version100Button.textContent).toContain('January 16, 2026');
    });

    test('should display "Current" badge for version 1.0.0', () => {
      const version100Button = container.querySelector('[data-bs-target="#version100"]');
      const currentBadge = version100Button.querySelector('.badge.bg-success');
      expect(currentBadge).toBeInTheDocument();
      expect(currentBadge.textContent).toBe('Current');
    });

    test('should render version 1.0.0 overview section', () => {
      const version100Content = container.querySelector('#version100');
      expect(version100Content).toBeInTheDocument();
      
      const overview = getByText(version100Content, 'Overview');
      expect(overview).toBeInTheDocument();
      
      const overviewText = version100Content.textContent;
      expect(overviewText).toContain('First complete release');
      expect(overviewText).toContain('comprehensive Bootstrap technical tutorial template');
    });

    test('should list all major feature categories', () => {
      const version100Content = container.querySelector('#version100');
      
      // Check for all feature category headings
      expect(getByText(version100Content, /Navigation & Layout/i)).toBeInTheDocument();
      expect(getByText(version100Content, /Theme System/i)).toBeInTheDocument();
      expect(getByText(version100Content, /Content Components/i)).toBeInTheDocument();
      expect(getByText(version100Content, /Code & Technical Features/i)).toBeInTheDocument();
      expect(getByText(version100Content, /Interactive Elements/i)).toBeInTheDocument();
    });

    test('should display technical stack information', () => {
      const version100Content = container.querySelector('#version100');
      
      expect(getByText(version100Content, 'Technical Stack')).toBeInTheDocument();
      expect(version100Content.textContent).toContain('Bootstrap:');
      expect(version100Content.textContent).toContain('5.3.2');
      expect(version100Content.textContent).toContain('Bootstrap Icons:');
      expect(version100Content.textContent).toContain('1.11.3');
      expect(version100Content.textContent).toContain('Prism.js:');
      expect(version100Content.textContent).toContain('1.29.0');
    });

    test('should display known limitations section', () => {
      const version100Content = container.querySelector('#version100');
      
      expect(getByText(version100Content, 'Known Limitations')).toBeInTheDocument();
      
      const limitationsAlert = version100Content.querySelector('.alert.alert-warning');
      expect(limitationsAlert).toBeInTheDocument();
      expect(limitationsAlert.textContent).toContain('Color Flavors:');
      expect(limitationsAlert.textContent).toContain('PlantUML:');
      expect(limitationsAlert.textContent).toContain('Code Copy:');
    });

    test('should display future enhancement ideas', () => {
      const version100Content = container.querySelector('#version100');
      
      expect(getByText(version100Content, 'Future Enhancement Ideas')).toBeInTheDocument();
      expect(version100Content.textContent).toContain('LocalStorage theme preference persistence');
      expect(version100Content.textContent).toContain('Multi-language code tabs');
      expect(version100Content.textContent).toContain('Export to PDF functionality');
    });

    test('should have feature items with success check icons', () => {
      const version100Content = container.querySelector('#version100');
      const checkIcons = version100Content.querySelectorAll('i.bi-check-circle-fill.text-success');
      
      // Should have multiple check icons (there are many features listed)
      expect(checkIcons.length).toBeGreaterThan(10);
    });
  });

  describe('2. Version History Accordion Expand/Collapse Behavior', () => {
    test('should have accordion with correct ID', () => {
      const accordion = container.querySelector('#versionHistoryAccordion');
      expect(accordion).toBeInTheDocument();
      expect(accordion).toHaveClass('accordion');
    });

    test('should have version 1.0.0 accordion item expanded by default', () => {
      const version100Content = container.querySelector('#version100');
      expect(version100Content).toHaveClass('accordion-collapse', 'collapse', 'show');
    });

    test('should have future versions accordion item collapsed by default', () => {
      const futureVersionsContent = container.querySelector('#futureVersions');
      expect(futureVersionsContent).toHaveClass('accordion-collapse', 'collapse');
      expect(futureVersionsContent).not.toHaveClass('show');
    });

    test('should have correct data-bs-toggle and data-bs-target attributes', () => {
      const version100Button = container.querySelector('[data-bs-target="#version100"]');
      expect(version100Button).toHaveAttribute('data-bs-toggle', 'collapse');
      expect(version100Button).toHaveAttribute('data-bs-target', '#version100');
      
      const futureVersionsButton = container.querySelector('[data-bs-target="#futureVersions"]');
      expect(futureVersionsButton).toHaveAttribute('data-bs-toggle', 'collapse');
      expect(futureVersionsButton).toHaveAttribute('data-bs-target', '#futureVersions');
    });

    test('should have correct data-bs-parent attribute for accordion behavior', () => {
      const version100Content = container.querySelector('#version100');
      expect(version100Content).toHaveAttribute('data-bs-parent', '#versionHistoryAccordion');
      
      const futureVersionsContent = container.querySelector('#futureVersions');
      expect(futureVersionsContent).toHaveAttribute('data-bs-parent', '#versionHistoryAccordion');
    });

    test('should have accordion buttons with correct type', () => {
      const version100Button = container.querySelector('[data-bs-target="#version100"]');
      expect(version100Button).toHaveAttribute('type', 'button');
      expect(version100Button).toHaveClass('accordion-button');
      
      const futureVersionsButton = container.querySelector('[data-bs-target="#futureVersions"]');
      expect(futureVersionsButton).toHaveAttribute('type', 'button');
      expect(futureVersionsButton).toHaveClass('accordion-button', 'collapsed');
    });

    test('should toggle accordion content visibility when clicking button', () => {
      const futureVersionsButton = container.querySelector('[data-bs-target="#futureVersions"]');
      const futureVersionsContent = container.querySelector('#futureVersions');
      
      // Initially collapsed
      expect(futureVersionsContent).not.toHaveClass('show');
      
      // Simulate Bootstrap collapse show
      const collapse = new bootstrap.Collapse(futureVersionsContent, { toggle: false });
      collapse.show();
      
      expect(futureVersionsContent).toHaveClass('show');
      
      // Hide again
      collapse.hide();
      expect(futureVersionsContent).not.toHaveClass('show');
    });

    test('should have proper accordion item structure', () => {
      const accordionItems = container.querySelectorAll('#versionHistoryAccordion .accordion-item');
      expect(accordionItems.length).toBe(2);
      
      accordionItems.forEach(item => {
        expect(item).toHaveClass('accordion-item');
        const header = item.querySelector('.accordion-header');
        expect(header).toBeInTheDocument();
        
        const collapseContent = item.querySelector('.accordion-collapse');
        expect(collapseContent).toBeInTheDocument();
        
        const body = item.querySelector('.accordion-body');
        expect(body).toBeInTheDocument();
      });
    });
  });

  describe('3. Future Versions Section - Semantic Versioning and Roadmap', () => {
    test('should render future versions accordion item', () => {
      const futureVersionsButton = container.querySelector('[data-bs-target="#futureVersions"]');
      expect(futureVersionsButton).toBeInTheDocument();
      expect(futureVersionsButton.textContent).toContain('Future Versions');
    });

    test('should have plus-circle icon for future versions', () => {
      const futureVersionsButton = container.querySelector('[data-bs-target="#futureVersions"]');
      const icon = futureVersionsButton.querySelector('i.bi-plus-circle');
      expect(icon).toBeInTheDocument();
    });

    test('should display semantic versioning explanation', () => {
      const futureVersionsContent = container.querySelector('#futureVersions');
      
      expect(getByText(futureVersionsContent, 'Semantic Versioning')).toBeInTheDocument();
      expect(futureVersionsContent.textContent).toContain('MAJOR.MINOR.PATCH');
    });

    test('should display MAJOR version information card', () => {
      const futureVersionsContent = container.querySelector('#futureVersions');
      
      expect(futureVersionsContent.textContent).toContain('MAJOR (X.0.0)');
      expect(futureVersionsContent.textContent).toContain('Breaking changes, major redesign');
      
      const majorIcon = futureVersionsContent.querySelector('i.bi-exclamation-octagon');
      expect(majorIcon).toBeInTheDocument();
    });

    test('should display MINOR version information card', () => {
      const futureVersionsContent = container.querySelector('#futureVersions');
      
      expect(futureVersionsContent.textContent).toContain('MINOR (0.X.0)');
      expect(futureVersionsContent.textContent).toContain('New features, backward compatible');
      
      const minorIcon = futureVersionsContent.querySelector('i.bi-plus-square');
      expect(minorIcon).toBeInTheDocument();
    });

    test('should display PATCH version information card', () => {
      const futureVersionsContent = container.querySelector('#futureVersions');
      
      expect(futureVersionsContent.textContent).toContain('PATCH (0.0.X)');
      expect(futureVersionsContent.textContent).toContain('Bug fixes, minor improvements');
      
      const patchIcon = futureVersionsContent.querySelector('i.bi-wrench');
      expect(patchIcon).toBeInTheDocument();
    });

    test('should have three semantic versioning cards', () => {
      const futureVersionsContent = container.querySelector('#futureVersions');
      const semverCards = futureVersionsContent.querySelectorAll('.card.bg-light');
      expect(semverCards.length).toBeGreaterThanOrEqual(3);
    });

    test('should display roadmap section', () => {
      const futureVersionsContent = container.querySelector('#futureVersions');
      
      expect(getByText(futureVersionsContent, 'Roadmap')).toBeInTheDocument();
    });

    test('should display short term roadmap (v1.x)', () => {
      const futureVersionsContent = container.querySelector('#futureVersions');
      
      expect(futureVersionsContent.textContent).toContain('Short Term (v1.x)');
      expect(futureVersionsContent.textContent).toContain('Gather user feedback');
      
      const shortTermIcon = futureVersionsContent.querySelector('i.bi-speedometer2');
      expect(shortTermIcon).toBeInTheDocument();
    });

    test('should display medium term roadmap (v2.x)', () => {
      const futureVersionsContent = container.querySelector('#futureVersions');
      
      expect(futureVersionsContent.textContent).toContain('Medium Term (v2.x)');
      expect(futureVersionsContent.textContent).toContain('Bootstrap 6 migration');
      
      const mediumTermIcon = futureVersionsContent.querySelector('i.bi-graph-up-arrow');
      expect(mediumTermIcon).toBeInTheDocument();
    });

    test('should display long term roadmap (v3.x)', () => {
      const futureVersionsContent = container.querySelector('#futureVersions');
      
      expect(futureVersionsContent.textContent).toContain('Long Term (v3.x)');
      expect(futureVersionsContent.textContent).toContain('Framework-agnostic version');
      
      const longTermIcon = futureVersionsContent.querySelector('i.bi-rocket-takeoff');
      expect(longTermIcon).toBeInTheDocument();
    });

    test('should have roadmap items in a list group', () => {
      const futureVersionsContent = container.querySelector('#futureVersions');
      const listGroup = futureVersionsContent.querySelector('.list-group');
      expect(listGroup).toBeInTheDocument();
      
      const listItems = listGroup.querySelectorAll('.list-group-item');
      expect(listItems.length).toBe(3); // Short, Medium, Long term
    });

    test('should display informational note about new versions', () => {
      const futureVersionsContent = container.querySelector('#futureVersions');
      const infoAlert = futureVersionsContent.querySelector('.alert.alert-info');
      
      expect(infoAlert).toBeInTheDocument();
      expect(infoAlert.textContent).toContain('New versions will be added to this section');
    });
  });

  describe('4. Badges Display - Status and Version Information', () => {
    test('should display status badges at bottom of version history', () => {
      const versionHistorySection = container.querySelector('#version-history');
      const cardBody = versionHistorySection.querySelector('.card-body');
      // Get the div with mt-4 that contains the badges (it's after the accordion)
      const accordion = cardBody.querySelector('#versionHistoryAccordion');
      const badgeContainer = accordion.nextElementSibling;
      
      expect(badgeContainer).toBeInTheDocument();
      expect(badgeContainer).toHaveClass('mt-4');
      
      const badges = badgeContainer.querySelectorAll('.badge');
      expect(badges.length).toBe(3);
    });

    test('should display "Status: Active Development" badge', () => {
      const versionHistorySection = container.querySelector('#version-history');
      const statusBadge = getByText(versionHistorySection, 'Status: Active Development');
      
      expect(statusBadge).toBeInTheDocument();
      expect(statusBadge).toHaveClass('badge', 'bg-secondary');
    });

    test('should display "Current: v1.0.0" badge', () => {
      const versionHistorySection = container.querySelector('#version-history');
      const currentVersionBadge = getByText(versionHistorySection, 'Current: v1.0.0');
      
      expect(currentVersionBadge).toBeInTheDocument();
      expect(currentVersionBadge).toHaveClass('badge', 'bg-info');
    });

    test('should display "Last Updated" badge with date', () => {
      const versionHistorySection = container.querySelector('#version-history');
      const lastUpdatedBadge = getByText(versionHistorySection, /Last Updated: January 16, 2026/i);
      
      expect(lastUpdatedBadge).toBeInTheDocument();
      expect(lastUpdatedBadge).toHaveClass('badge', 'bg-success');
    });

    test('should have "Current" badge in version 1.0.0 header', () => {
      const version100Button = container.querySelector('[data-bs-target="#version100"]');
      const currentBadge = version100Button.querySelector('.badge.bg-success');
      
      expect(currentBadge).toBeInTheDocument();
      expect(currentBadge.textContent).toBe('Current');
      expect(currentBadge).toHaveClass('me-2'); // margin-end for spacing
    });

    test('should display version badge in correct colors', () => {
      const versionHistorySection = container.querySelector('#version-history');
      const cardBody = versionHistorySection.querySelector('.card-body');
      const accordion = cardBody.querySelector('#versionHistoryAccordion');
      const badgeContainer = accordion.nextElementSibling;
      
      const statusBadge = badgeContainer.querySelector('.badge.bg-secondary');
      expect(statusBadge).toBeInTheDocument();
      
      const infoBadge = badgeContainer.querySelector('.badge.bg-info');
      expect(infoBadge).toBeInTheDocument();
      
      const successBadge = badgeContainer.querySelector('.badge.bg-success');
      expect(successBadge).toBeInTheDocument();
    });

    test('should have fixed version badge at bottom-right of page', () => {
      const versionBadge = container.querySelector('.version-badge');
      
      expect(versionBadge).toBeInTheDocument();
      expect(versionBadge).toHaveClass('badge', 'bg-secondary', 'version-badge');
      expect(versionBadge.textContent).toBe('v1.0.0');
      expect(versionBadge).toHaveAttribute('data-bs-toggle', 'tooltip');
      expect(versionBadge).toHaveAttribute('title', 'Template Version');
    });

    test('should have proper badge styling classes', () => {
      const versionHistorySection = container.querySelector('#version-history');
      const badges = versionHistorySection.querySelectorAll('.badge');
      
      badges.forEach(badge => {
        expect(badge).toHaveClass('badge');
        // Each badge should have a background color class
        const hasColorClass = badge.classList.contains('bg-secondary') ||
                             badge.classList.contains('bg-info') ||
                             badge.classList.contains('bg-success');
        expect(hasColorClass).toBe(true);
      });
    });
  });

  describe('Integration Tests', () => {
    test('should have version history link in navbar', () => {
      const navLink = container.querySelector('a[href="#version-history"]');
      expect(navLink).toBeInTheDocument();
      expect(navLink.textContent).toContain('Version History');
      
      const icon = navLink.querySelector('i.bi-clock-history');
      expect(icon).toBeInTheDocument();
    });

    test('should have version history link in off-canvas TOC', () => {
      const offCanvas = container.querySelector('#tocOffcanvas');
      const tocLink = offCanvas.querySelector('a[href="#version-history"]');
      
      expect(tocLink).toBeInTheDocument();
      expect(tocLink).toHaveClass('list-group-item', 'list-group-item-action', 'list-group-item-info');
      expect(tocLink.textContent).toContain('Version History');
    });

    test('should have complete accordion structure with proper nesting', () => {
      const accordion = container.querySelector('#versionHistoryAccordion');
      const items = accordion.querySelectorAll('.accordion-item');
      
      items.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const button = header.querySelector('.accordion-button');
        const collapse = item.querySelector('.accordion-collapse');
        const body = collapse.querySelector('.accordion-body');
        
        expect(header).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(collapse).toBeInTheDocument();
        expect(body).toBeInTheDocument();
      });
    });

    test('should have all version history content accessible', () => {
      const versionHistorySection = container.querySelector('#version-history');
      
      // Main section exists
      expect(versionHistorySection).toBeInTheDocument();
      
      // Header exists
      const header = versionHistorySection.querySelector('.card-header');
      expect(header).toBeInTheDocument();
      
      // Body exists
      const body = versionHistorySection.querySelector('.card-body');
      expect(body).toBeInTheDocument();
      
      // Accordion exists
      const accordion = body.querySelector('#versionHistoryAccordion');
      expect(accordion).toBeInTheDocument();
      
      // Badges exist
      const badges = body.querySelectorAll('.badge');
      expect(badges.length).toBeGreaterThan(0);
    });
  });
});

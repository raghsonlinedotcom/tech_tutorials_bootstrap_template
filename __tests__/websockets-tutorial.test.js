/**
 * Unit Tests for WebSockets Tutorial
 * 
 * Test Coverage:
 * 1. Introduction section structure and content
 * 2. Architecture section with ASCII and PlantUML diagrams
 * 3. Ecosystem section with libraries and frameworks
 * 4. Advantages and Disadvantages section
 * 5. Use Cases section
 * 6. Technology Comparisons section
 * 7. API Methods and Events section
 * 8. Real-Time Example (MEBN Stack) section
 * 9. FAQs section with accordion functionality
 * 10. Resources section
 * 11. Navigation and accessibility
 */

const fs = require('fs');
const path = require('path');
const { getByText, getAllByText, queryByText } = require('@testing-library/dom');

describe('WebSockets Tutorial', () => {
  let container;
  let htmlContent;

  beforeEach(() => {
    // Load the HTML file
    htmlContent = fs.readFileSync(
      path.resolve(__dirname, '../actual-tutorials-using-the-template/websockets-tutorial.html'),
      'utf8'
    );
    
    // Create a container and set the HTML
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
      expect(title.textContent).toBe('WebSockets Tutorial - Real-Time Communication Mastery');
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
      expect(brand.textContent).toContain('WebSockets Tutorial');
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
      expect(introHeader.textContent).toContain('Introduction to WebSockets');
      
      const icon = introHeader.querySelector('i.bi-book');
      expect(icon).toBeInTheDocument();
    });

    test('should explain WebSocket protocol', () => {
      const introSection = container.querySelector('#introduction');
      expect(introSection.textContent).toContain('full-duplex communication');
      expect(introSection.textContent).toContain('TCP connection');
      expect(introSection.textContent).toContain('bidirectional');
    });

    test('should list WebSocket features', () => {
      const introSection = container.querySelector('#introduction');
      expect(introSection.textContent).toContain('Full-Duplex Communication');
      expect(introSection.textContent).toContain('Low Latency');
      expect(introSection.textContent).toContain('Real-Time Data');
      expect(introSection.textContent).toContain('Persistent Connection');
    });

    test('should have info alert about HTTP Upgrade', () => {
      const introSection = container.querySelector('#introduction');
      const alert = introSection.querySelector('.alert.alert-info');
      expect(alert).toBeInTheDocument();
      expect(alert.textContent).toContain('HTTP Upgrade header');
    });
  });

  describe('3. Architecture Section with Diagrams', () => {
    test('should render architecture section', () => {
      const archSection = container.querySelector('#architecture');
      expect(archSection).toBeInTheDocument();
      expect(archSection.querySelector('.card-header')).toHaveClass('bg-success');
    });

    test('should have tab group for ASCII and PlantUML diagrams', () => {
      const tabList = container.querySelector('#architectureTab');
      expect(tabList).toBeInTheDocument();
      
      const tabs = tabList.querySelectorAll('.nav-link');
      expect(tabs.length).toBe(2);
      
      const asciiTab = container.querySelector('#ascii-architecture-tab');
      const plantumlTab = container.querySelector('#plantuml-architecture-tab');
      expect(asciiTab).toBeInTheDocument();
      expect(plantumlTab).toBeInTheDocument();
    });

    test('should have ASCII diagram displayed by default', () => {
      const asciiContent = container.querySelector('#ascii-architecture');
      expect(asciiContent).toHaveClass('tab-pane', 'fade', 'show', 'active');
      
      const asciiArt = asciiContent.querySelector('.ascii-art');
      expect(asciiArt).toBeInTheDocument();
      expect(asciiArt.textContent).toContain('WebSocket Connection Lifecycle');
      expect(asciiArt.textContent).toContain('Client');
      expect(asciiArt.textContent).toContain('Server');
      expect(asciiArt.textContent).toContain('HTTP GET /chat');
    });

    test('should have PlantUML diagram content', () => {
      const plantumlContent = container.querySelector('#plantuml-architecture');
      expect(plantumlContent).toHaveClass('tab-pane', 'fade');
      expect(plantumlContent).not.toHaveClass('show');
      
      const plantumlCode = plantumlContent.querySelector('code.language-plantuml');
      expect(plantumlCode).toBeInTheDocument();
      expect(plantumlCode.textContent).toContain('@startuml');
      expect(plantumlCode.textContent).toContain('participant Client');
      expect(plantumlCode.textContent).toContain('participant Server');
    });

    test('should list architecture components', () => {
      const archSection = container.querySelector('#architecture');
      const componentCards = archSection.querySelectorAll('.card.h-100');
      expect(componentCards.length).toBeGreaterThanOrEqual(3);
      
      expect(archSection.textContent).toContain('Client Side');
      expect(archSection.textContent).toContain('Server Side');
      expect(archSection.textContent).toContain('Infrastructure');
    });

    test('should describe frame types', () => {
      const asciiContent = container.querySelector('#ascii-architecture .ascii-art');
      expect(asciiContent.textContent).toContain('Text Frame');
      expect(asciiContent.textContent).toContain('Binary Frame');
      expect(asciiContent.textContent).toContain('Close Frame');
      expect(asciiContent.textContent).toContain('Ping Frame');
      expect(asciiContent.textContent).toContain('Pong Frame');
    });
  });

  describe('4. Ecosystem Section', () => {
    test('should render ecosystem section', () => {
      const ecosystemSection = container.querySelector('#ecosystem');
      expect(ecosystemSection).toBeInTheDocument();
      expect(ecosystemSection.querySelector('.card-header')).toHaveClass('bg-info');
    });

    test('should list server-side libraries', () => {
      const ecosystemSection = container.querySelector('#ecosystem');
      expect(ecosystemSection.textContent).toContain('Socket.IO');
      expect(ecosystemSection.textContent).toContain('ws');
      expect(ecosystemSection.textContent).toContain('µWebSockets');
      expect(ecosystemSection.textContent).toContain('Websocket (Python)');
    });

    test('should list client-side libraries', () => {
      const ecosystemSection = container.querySelector('#ecosystem');
      expect(ecosystemSection.textContent).toContain('Native WebSocket API');
      expect(ecosystemSection.textContent).toContain('Socket.IO Client');
      expect(ecosystemSection.textContent).toContain('Reconnecting-WebSocket');
    });

    test('should list frameworks and platforms', () => {
      const ecosystemSection = container.querySelector('#ecosystem');
      expect(ecosystemSection.textContent).toContain('Pusher');
      expect(ecosystemSection.textContent).toContain('Ably');
      expect(ecosystemSection.textContent).toContain('Firebase');
      expect(ecosystemSection.textContent).toContain('SignalR');
    });

    test('should have badges for library categories', () => {
      const ecosystemSection = container.querySelector('#ecosystem');
      const badges = ecosystemSection.querySelectorAll('.badge');
      expect(badges.length).toBeGreaterThan(0);
    });
  });

  describe('5. Advantages and Disadvantages Section', () => {
    test('should render advantages and disadvantages section', () => {
      const prosConsSection = container.querySelector('#advantages-disadvantages');
      expect(prosConsSection).toBeInTheDocument();
      expect(prosConsSection.querySelector('.card-header')).toHaveClass('bg-warning');
    });

    test('should list advantages', () => {
      const prosConsSection = container.querySelector('#advantages-disadvantages');
      expect(prosConsSection.textContent).toContain('Real-Time Communication');
      expect(prosConsSection.textContent).toContain('Low Latency');
      expect(prosConsSection.textContent).toContain('Reduced Bandwidth');
      expect(prosConsSection.textContent).toContain('Server Push');
      expect(prosConsSection.textContent).toContain('Wide Browser Support');
    });

    test('should list disadvantages', () => {
      const prosConsSection = container.querySelector('#advantages-disadvantages');
      expect(prosConsSection.textContent).toContain('Server Resource Usage');
      expect(prosConsSection.textContent).toContain('Scalability Complexity');
      expect(prosConsSection.textContent).toContain('Security Concerns');
      expect(prosConsSection.textContent).toContain('Proxy/Firewall Issues');
      expect(prosConsSection.textContent).toContain('Connection Management');
    });

    test('should have visual distinction between pros and cons', () => {
      const prosConsSection = container.querySelector('#advantages-disadvantages');
      const advantagesHeading = prosConsSection.querySelector('h4.text-success');
      const disadvantagesHeading = prosConsSection.querySelector('h4.text-danger');
      
      expect(advantagesHeading).toBeInTheDocument();
      expect(advantagesHeading.textContent).toMatch(/Advantages/i);
      expect(disadvantagesHeading).toBeInTheDocument();
      expect(disadvantagesHeading.textContent).toMatch(/Disadvantages/i);
    });
  });

  describe('6. Use Cases Section', () => {
    test('should render use cases section', () => {
      const useCasesSection = container.querySelector('#use-cases');
      expect(useCasesSection).toBeInTheDocument();
      expect(useCasesSection.querySelector('.card-header')).toHaveClass('bg-danger');
    });

    test('should list practical use cases', () => {
      const useCasesSection = container.querySelector('#use-cases');
      expect(useCasesSection.textContent).toContain('Chat Applications');
      expect(useCasesSection.textContent).toContain('Live Trading Platforms');
      expect(useCasesSection.textContent).toContain('Multiplayer Games');
      expect(useCasesSection.textContent).toContain('Collaborative Editing');
      expect(useCasesSection.textContent).toContain('Live Notifications');
      expect(useCasesSection.textContent).toContain('Live Streaming Data');
    });

    test('should provide real-world examples', () => {
      const useCasesSection = container.querySelector('#use-cases');
      expect(useCasesSection.textContent).toContain('Slack');
      expect(useCasesSection.textContent).toContain('Discord');
      expect(useCasesSection.textContent).toContain('Google Docs');
      expect(useCasesSection.textContent).toContain('Binance');
    });

    test('should have use case cards with proper styling', () => {
      const useCasesSection = container.querySelector('#use-cases');
      const cards = useCasesSection.querySelectorAll('.card.h-100');
      expect(cards.length).toBe(6);
    });

    test('should have best fit scenarios alert', () => {
      const useCasesSection = container.querySelector('#use-cases');
      const alert = useCasesSection.querySelector('.alert.alert-success');
      expect(alert).toBeInTheDocument();
      expect(alert.textContent).toContain('Best Fit Scenarios');
      expect(alert.textContent).toContain('High-frequency updates');
      expect(alert.textContent).toContain('Low-latency requirements');
    });
  });

  describe('7. Technology Comparisons Section', () => {
    test('should render comparisons section', () => {
      const comparisonsSection = container.querySelector('#comparisons');
      expect(comparisonsSection).toBeInTheDocument();
      expect(comparisonsSection.querySelector('.card-header')).toHaveClass('bg-dark');
    });

    test('should have WebSockets vs HTTP Polling comparison', () => {
      const comparisonsSection = container.querySelector('#comparisons');
      expect(comparisonsSection.textContent).toContain('WebSockets vs. HTTP Polling');
      
      const tables = comparisonsSection.querySelectorAll('table');
      expect(tables.length).toBeGreaterThanOrEqual(1);
    });

    test('should have WebSockets vs Long Polling comparison', () => {
      const comparisonsSection = container.querySelector('#comparisons');
      expect(comparisonsSection.textContent).toContain('WebSockets vs. Long Polling');
    });

    test('should have WebSockets vs SSE comparison', () => {
      const comparisonsSection = container.querySelector('#comparisons');
      expect(comparisonsSection.textContent).toContain('Server-Sent Events');
      expect(comparisonsSection.textContent).toContain('SSE');
    });

    test('should have WebSockets vs WebRTC comparison', () => {
      const comparisonsSection = container.querySelector('#comparisons');
      expect(comparisonsSection.textContent).toContain('WebRTC');
      expect(comparisonsSection.textContent).toContain('Peer-to-Peer');
    });

    test('should have comparison tables with proper structure', () => {
      const comparisonsSection = container.querySelector('#comparisons');
      const tables = comparisonsSection.querySelectorAll('table.comparison-table');
      expect(tables.length).toBe(4);
      
      tables.forEach(table => {
        expect(table).toHaveClass('table', 'table-bordered', 'table-striped');
      });
    });

    test('should have decision guide', () => {
      const comparisonsSection = container.querySelector('#comparisons');
      const alert = comparisonsSection.querySelector('.alert.alert-info');
      expect(alert).toBeInTheDocument();
      expect(alert.textContent).toContain('Decision Guide');
      expect(alert.textContent).toContain('Choose WebSockets');
      expect(alert.textContent).toContain('Choose SSE');
    });
  });

  describe('8. API Methods and Events Section', () => {
    test('should render API methods section', () => {
      const apiSection = container.querySelector('#api-methods');
      expect(apiSection).toBeInTheDocument();
      expect(apiSection.querySelector('.card-header')).toHaveClass('bg-secondary');
    });

    test('should show WebSocket constructor examples', () => {
      const apiSection = container.querySelector('#api-methods');
      expect(apiSection.textContent).toContain('new WebSocket');
      expect(apiSection.textContent).toContain('ws://localhost:8080');
      expect(apiSection.textContent).toContain('wss://example.com');
    });

    test('should list WebSocket properties', () => {
      const apiSection = container.querySelector('#api-methods');
      const propsTable = apiSection.querySelector('table');
      expect(propsTable).toBeInTheDocument();
      
      expect(apiSection.textContent).toContain('readyState');
      expect(apiSection.textContent).toContain('url');
      expect(apiSection.textContent).toContain('protocol');
      expect(apiSection.textContent).toContain('bufferedAmount');
      expect(apiSection.textContent).toContain('binaryType');
    });

    test('should describe send() method', () => {
      const apiSection = container.querySelector('#api-methods');
      expect(apiSection.textContent).toContain('socket.send');
      expect(apiSection.textContent).toContain('Send data through the WebSocket connection');
    });

    test('should describe close() method', () => {
      const apiSection = container.querySelector('#api-methods');
      expect(apiSection.textContent).toContain('socket.close');
      expect(apiSection.textContent).toContain('Close the WebSocket connection');
    });

    test('should have event handlers accordion', () => {
      const apiSection = container.querySelector('#api-methods');
      const accordion = apiSection.querySelector('#eventHandlersAccordion');
      expect(accordion).toBeInTheDocument();
      
      const accordionItems = accordion.querySelectorAll('.accordion-item');
      expect(accordionItems.length).toBe(4); // onopen, onmessage, onerror, onclose
    });

    test('should describe onopen event', () => {
      const apiSection = container.querySelector('#api-methods');
      expect(apiSection.textContent).toContain('onopen');
      expect(apiSection.textContent).toContain('connection is successfully established');
    });

    test('should describe onmessage event', () => {
      const apiSection = container.querySelector('#api-methods');
      expect(apiSection.textContent).toContain('onmessage');
      expect(apiSection.textContent).toContain('message is received');
    });

    test('should describe onerror event', () => {
      const apiSection = container.querySelector('#api-methods');
      expect(apiSection.textContent).toContain('onerror');
      expect(apiSection.textContent).toContain('error occurs');
    });

    test('should describe onclose event', () => {
      const apiSection = container.querySelector('#api-methods');
      expect(apiSection.textContent).toContain('onclose');
      expect(apiSection.textContent).toContain('connection is closed');
    });

    test('should have complete WebSocket client example', () => {
      const apiSection = container.querySelector('#api-methods');
      expect(apiSection.textContent).toContain('WebSocketClient');
      expect(apiSection.textContent).toContain('class WebSocketClient');
      expect(apiSection.textContent).toContain('reconnectAttempts');
    });
  });

  describe('9. Real-Time Example (MEBN Stack) Section', () => {
    test('should render real-time example section', () => {
      const exampleSection = container.querySelector('#real-time-example');
      expect(exampleSection).toBeInTheDocument();
      expect(exampleSection.querySelector('.card-header')).toHaveClass('bg-primary');
    });

    test('should explain MEBN stack', () => {
      const exampleSection = container.querySelector('#real-time-example');
      const alert = exampleSection.querySelector('.alert.alert-info');
      expect(alert).toBeInTheDocument();
      expect(alert.textContent).toContain('MEBN Stack Overview');
      expect(alert.textContent).toContain('MongoDB');
      expect(alert.textContent).toContain('Express');
      expect(alert.textContent).toContain('Bootstrap');
      expect(alert.textContent).toContain('Node.js');
      expect(alert.textContent).toContain('Socket.IO');
    });

    test('should have tab group for example architecture diagrams', () => {
      const exampleSection = container.querySelector('#real-time-example');
      const tabList = exampleSection.querySelector('#exampleArchTab');
      expect(tabList).toBeInTheDocument();
      
      const tabs = tabList.querySelectorAll('.nav-link');
      expect(tabs.length).toBe(2);
    });

    test('should have ASCII diagram for MEBN architecture', () => {
      const asciiExample = container.querySelector('#ascii-example');
      expect(asciiExample).toHaveClass('tab-pane', 'fade', 'show', 'active');
      
      const asciiArt = asciiExample.querySelector('.ascii-art');
      expect(asciiArt).toBeInTheDocument();
      expect(asciiArt.textContent).toContain('Real-Time Chat Application Architecture');
      expect(asciiArt.textContent).toContain('MEBN Stack');
      expect(asciiArt.textContent).toContain('MongoDB Database');
    });

    test('should have PlantUML diagram for MEBN architecture', () => {
      const plantumlExample = container.querySelector('#plantuml-example');
      expect(plantumlExample).toHaveClass('tab-pane', 'fade');
      
      const plantumlCode = plantumlExample.querySelector('code.language-plantuml');
      expect(plantumlCode).toBeInTheDocument();
      expect(plantumlCode.textContent).toContain('@startuml');
      expect(plantumlCode.textContent).toContain('Socket.IO Server');
    });

    test('should have server-side implementation code', () => {
      const exampleSection = container.querySelector('#real-time-example');
      expect(exampleSection.textContent).toContain('Server-Side Implementation');
      expect(exampleSection.textContent).toContain('server.js');
      expect(exampleSection.textContent).toContain('const express = require');
      expect(exampleSection.textContent).toContain('socket.io');
    });

    test('should have database models', () => {
      const exampleSection = container.querySelector('#real-time-example');
      const modelsAccordion = exampleSection.querySelector('#modelsAccordion');
      expect(modelsAccordion).toBeInTheDocument();
      
      expect(exampleSection.textContent).toContain('models/Message.js');
      expect(exampleSection.textContent).toContain('models/User.js');
      expect(exampleSection.textContent).toContain('models/Room.js');
    });

    test('should have client-side implementation code', () => {
      const exampleSection = container.querySelector('#real-time-example');
      expect(exampleSection.textContent).toContain('Client-Side Implementation');
      expect(exampleSection.textContent).toContain('public/index.html');
      expect(exampleSection.textContent).toContain('public/app.js');
    });

    test('should have project setup instructions', () => {
      const exampleSection = container.querySelector('#real-time-example');
      expect(exampleSection.textContent).toContain('npm install');
      expect(exampleSection.textContent).toContain('express socket.io mongoose');
    });

    test('should have running instructions', () => {
      const exampleSection = container.querySelector('#real-time-example');
      expect(exampleSection.textContent).toContain('Running the Application');
      expect(exampleSection.textContent).toContain('npm run dev');
      expect(exampleSection.textContent).toContain('http://localhost:3000');
    });

    test('should have console output example', () => {
      const exampleSection = container.querySelector('#real-time-example');
      const consoleOutput = exampleSection.querySelector('.console-output');
      expect(consoleOutput).toBeInTheDocument();
      expect(consoleOutput.textContent).toContain('MongoDB connected');
      expect(consoleOutput.textContent).toContain('Server running on port 3000');
    });
  });

  describe('10. FAQs Section', () => {
    test('should render FAQs section', () => {
      const faqSection = container.querySelector('#faqs');
      expect(faqSection).toBeInTheDocument();
      expect(faqSection.querySelector('.card-header')).toHaveClass('bg-warning');
    });

    test('should have FAQ accordion', () => {
      const faqSection = container.querySelector('#faqs');
      const accordion = faqSection.querySelector('#faqAccordion');
      expect(accordion).toBeInTheDocument();
      
      const items = accordion.querySelectorAll('.accordion-item');
      expect(items.length).toBeGreaterThanOrEqual(8);
    });

    test('should have WebSocket vs Socket.IO FAQ', () => {
      const faqSection = container.querySelector('#faqs');
      expect(faqSection.textContent).toContain("What's the difference between WebSocket and Socket.IO?");
      expect(faqSection.textContent).toContain('RFC 6455');
      expect(faqSection.textContent).toContain('fallbacks');
    });

    test('should have proxy/firewall FAQ', () => {
      const faqSection = container.querySelector('#faqs');
      expect(faqSection.textContent).toContain('proxies and firewalls');
      expect(faqSection.textContent).toContain('wss://');
    });

    test('should have scaling FAQ', () => {
      const faqSection = container.querySelector('#faqs');
      expect(faqSection.textContent).toContain('scale WebSocket applications horizontally');
      expect(faqSection.textContent).toContain('Sticky Sessions');
      expect(faqSection.textContent).toContain('Redis');
    });

    test('should have security FAQ', () => {
      const faqSection = container.querySelector('#faqs');
      expect(faqSection.textContent).toContain('secure WebSocket connections');
      expect(faqSection.textContent).toContain('WSS');
      expect(faqSection.textContent).toContain('Authentication');
    });

    test('should have connection drop FAQ', () => {
      const faqSection = container.querySelector('#faqs');
      expect(faqSection.textContent).toContain('connection drops');
      expect(faqSection.textContent).toContain('reconnect');
    });

    test('should have binary data FAQ', () => {
      const faqSection = container.querySelector('#faqs');
      expect(faqSection.textContent).toContain('binary data');
      expect(faqSection.textContent).toContain('ArrayBuffer');
      expect(faqSection.textContent).toContain('blob');
    });

    test('should have subprotocols FAQ', () => {
      const faqSection = container.querySelector('#faqs');
      expect(faqSection.textContent).toContain('subprotocols');
      expect(faqSection.textContent).toContain('STOMP');
    });

    test('should have connection limits FAQ', () => {
      const faqSection = container.querySelector('#faqs');
      expect(faqSection.textContent).toContain('How many WebSocket connections');
      expect(faqSection.textContent).toContain('10,000-60,000');
    });

    test('should have first FAQ expanded by default', () => {
      const firstFaq = container.querySelector('#faq1');
      expect(firstFaq).toHaveClass('accordion-collapse', 'collapse', 'show');
    });
  });

  describe('11. Resources Section', () => {
    test('should render resources section', () => {
      const resourcesSection = container.querySelector('#resources');
      expect(resourcesSection).toBeInTheDocument();
      expect(resourcesSection.querySelector('.card-header')).toHaveClass('bg-info');
    });

    test('should list official documentation links', () => {
      const resourcesSection = container.querySelector('#resources');
      expect(resourcesSection.textContent).toContain('MDN WebSocket API Reference');
      expect(resourcesSection.textContent).toContain('Socket.IO Documentation');
      expect(resourcesSection.textContent).toContain('RFC 6455');
    });

    test('should list tutorials and guides', () => {
      const resourcesSection = container.querySelector('#resources');
      expect(resourcesSection.textContent).toContain('Tutorials & Guides');
      expect(resourcesSection.textContent).toContain('JavaScript.info');
    });

    test('should list tools and libraries', () => {
      const resourcesSection = container.querySelector('#resources');
      expect(resourcesSection.textContent).toContain('Tools & Libraries');
      expect(resourcesSection.textContent).toContain('wscat');
      expect(resourcesSection.textContent).toContain('k6');
    });

    test('should have example projects', () => {
      const resourcesSection = container.querySelector('#resources');
      expect(resourcesSection.textContent).toContain('Example Projects');
      expect(resourcesSection.textContent).toContain('Socket.IO Official Examples');
    });

    test('should have recommended learning path', () => {
      const resourcesSection = container.querySelector('#resources');
      const learningPath = resourcesSection.querySelector('.alert.alert-success');
      expect(learningPath).toBeInTheDocument();
      expect(learningPath.textContent).toContain('Recommended Learning Path');
      expect(learningPath.textContent).toContain('WebSocket protocol basics');
      expect(learningPath.textContent).toContain('authentication');
    });
  });

  describe('12. Navigation and Accessibility', () => {
    test('should have table of contents in offcanvas', () => {
      const offcanvas = container.querySelector('#tocOffcanvas');
      expect(offcanvas).toBeInTheDocument();
      expect(offcanvas).toHaveClass('offcanvas', 'offcanvas-start');
    });

    test('should have all major sections in TOC', () => {
      const offcanvas = container.querySelector('#tocOffcanvas');
      const tocLinks = offcanvas.querySelectorAll('.list-group-item');
      
      expect(tocLinks.length).toBeGreaterThanOrEqual(9);
      
      const tocText = offcanvas.textContent;
      expect(tocText).toContain('Introduction');
      expect(tocText).toContain('Architecture');
      expect(tocText).toContain('Ecosystem');
      expect(tocText).toContain('Advantages & Disadvantages');
      expect(tocText).toContain('Use Cases');
      expect(tocText).toContain('Technology Comparisons');
      expect(tocText).toContain('API Methods');
      expect(tocText).toContain('Real-Time Example');
      expect(tocText).toContain('FAQs');
    });

    test('should have TOC toggle button', () => {
      const tocButton = container.querySelector('button[data-bs-target="#tocOffcanvas"]');
      expect(tocButton).toBeInTheDocument();
      expect(tocButton.textContent).toContain('TOC');
    });

    test('should have dropdown menu in navbar', () => {
      const dropdown = container.querySelector('.navbar .dropdown');
      expect(dropdown).toBeInTheDocument();
      
      const dropdownMenu = dropdown.querySelector('.dropdown-menu');
      expect(dropdownMenu).toBeInTheDocument();
      
      const items = dropdownMenu.querySelectorAll('.dropdown-item');
      expect(items.length).toBeGreaterThanOrEqual(8);
    });

    test('should have theme controls', () => {
      const themeControls = container.querySelector('.theme-controls');
      expect(themeControls).toBeInTheDocument();
      
      const themeToggle = container.querySelector('#themeToggle');
      expect(themeToggle).toBeInTheDocument();
    });

    test('should have color flavor buttons', () => {
      const themeControls = container.querySelector('.theme-controls');
      const colorButtons = themeControls.querySelectorAll('button[onclick*="setColorFlavor"]');
      expect(colorButtons.length).toBe(3); // blue, green, purple
    });

    test('should have search form in navbar', () => {
      const searchForm = container.querySelector('.navbar form[role="search"]');
      expect(searchForm).toBeInTheDocument();
      
      const searchInput = searchForm.querySelector('input[type="search"]');
      expect(searchInput).toBeInTheDocument();
    });
  });

  describe('13. Hero Section and Alerts', () => {
    test('should have jumbotron hero section', () => {
      const jumbotron = container.querySelector('.jumbotron-custom');
      expect(jumbotron).toBeInTheDocument();
      expect(jumbotron.textContent).toContain('WebSockets Mastery');
      expect(jumbotron.textContent).toContain('Real-Time Applications');
    });

    test('should have call-to-action button', () => {
      const jumbotron = container.querySelector('.jumbotron-custom');
      const ctaButton = jumbotron.querySelector('a.btn');
      expect(ctaButton).toBeInTheDocument();
      expect(ctaButton.textContent).toContain('Get Started');
      expect(ctaButton).toHaveAttribute('href', '#introduction');
    });

    test('should have alert message', () => {
      const alert = container.querySelector('.alert.alert-success');
      expect(alert).toBeInTheDocument();
      expect(alert.textContent).toContain('Complete Tutorial');
    });
  });

  describe('14. Code Syntax Highlighting', () => {
    test('should have Prism.js code blocks', () => {
      const codeBlocks = container.querySelectorAll('pre code[class*="language-"]');
      expect(codeBlocks.length).toBeGreaterThan(20);
    });

    test('should have JavaScript code examples', () => {
      const jsCode = container.querySelectorAll('code.language-javascript');
      expect(jsCode.length).toBeGreaterThan(10);
    });

    test('should have bash code examples', () => {
      const bashCode = container.querySelectorAll('code.language-bash');
      expect(bashCode.length).toBeGreaterThan(0);
    });

    test('should have HTML code examples', () => {
      const htmlCode = container.querySelectorAll('code.language-html');
      expect(htmlCode.length).toBeGreaterThan(0);
    });

    test('should have PlantUML code examples', () => {
      const plantumlCode = container.querySelectorAll('code.language-plantuml');
      expect(plantumlCode.length).toBe(2); // Architecture and Example
    });
  });

  describe('15. Interactive Elements', () => {
    test('should have accordion components', () => {
      const accordions = container.querySelectorAll('.accordion');
      expect(accordions.length).toBeGreaterThanOrEqual(2); // API events and FAQs
    });

    test('should have tab components', () => {
      const tabLists = container.querySelectorAll('[role="tablist"]');
      expect(tabLists.length).toBe(2); // Architecture and Example diagrams
    });

    test('should have tooltips configured', () => {
      const tooltipElements = container.querySelectorAll('[data-bs-toggle="tooltip"]');
      expect(tooltipElements.length).toBeGreaterThan(0);
    });

    test('should have collapsible elements', () => {
      const collapseElements = container.querySelectorAll('.collapse');
      expect(collapseElements.length).toBeGreaterThan(0);
    });
  });

  describe('16. Icons and Visual Elements', () => {
    test('should have Bootstrap icons throughout', () => {
      const icons = container.querySelectorAll('i[class*="bi-"]');
      expect(icons.length).toBeGreaterThan(50);
    });

    test('should have section-specific icons', () => {
      const broadcastIcon = container.querySelector('i.bi-broadcast');
      expect(broadcastIcon).toBeInTheDocument();
      
      const diagramIcon = container.querySelector('i.bi-diagram-3');
      expect(diagramIcon).toBeInTheDocument();
      
      const codeIcon = container.querySelector('i.bi-code-slash');
      expect(codeIcon).toBeInTheDocument();
    });

    test('should have badges for versions and status', () => {
      const badges = container.querySelectorAll('.badge');
      expect(badges.length).toBeGreaterThanOrEqual(7);
    });
  });

  describe('17. Responsive Design Elements', () => {
    test('should have responsive column classes', () => {
      const responsiveCols = container.querySelectorAll('[class*="col-md"]');
      expect(responsiveCols.length).toBeGreaterThan(0);
    });

    test('should have responsive utilities', () => {
      const responsiveContainer = container.querySelector('.container-fluid');
      expect(responsiveContainer).toBeInTheDocument();
    });

    test('should have navbar toggler for mobile', () => {
      const toggler = container.querySelector('.navbar-toggler');
      expect(toggler).toBeInTheDocument();
    });
  });

  describe('18. Content Completeness', () => {
    test('should have all required sections present', () => {
      const sections = [
        '#introduction',
        '#architecture',
        '#ecosystem',
        '#advantages-disadvantages',
        '#use-cases',
        '#comparisons',
        '#api-methods',
        '#real-time-example',
        '#faqs',
        '#resources'
      ];

      sections.forEach(sectionId => {
        const section = container.querySelector(sectionId);
        expect(section).toBeInTheDocument();
      });
    });

    test('should have comparison tables for all technologies', () => {
      const comparisonsSection = container.querySelector('#comparisons');
      const tables = comparisonsSection.querySelectorAll('table');
      expect(tables.length).toBe(4); // HTTP Polling, Long Polling, SSE, WebRTC
    });

    test('should have complete MEBN example with all files', () => {
      const exampleSection = container.querySelector('#real-time-example');
      expect(exampleSection.textContent).toContain('server.js');
      expect(exampleSection.textContent).toContain('Message.js');
      expect(exampleSection.textContent).toContain('User.js');
      expect(exampleSection.textContent).toContain('Room.js');
      expect(exampleSection.textContent).toContain('index.html');
      expect(exampleSection.textContent).toContain('app.js');
      expect(exampleSection.textContent).toContain('.env');
    });
  });
});

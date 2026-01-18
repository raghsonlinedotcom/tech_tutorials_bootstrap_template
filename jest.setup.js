// Jest setup file
require('@testing-library/jest-dom');

// Mock Bootstrap's Collapse component
global.bootstrap = {
  Collapse: class MockCollapse {
    constructor(element, options) {
      this.element = element;
      this.options = options;
      this._isShown = element.classList.contains('show');
    }

    show() {
      this._isShown = true;
      this.element.classList.add('show');
      this.element.classList.remove('collapse');
      const event = new Event('shown.bs.collapse');
      this.element.dispatchEvent(event);
    }

    hide() {
      this._isShown = false;
      this.element.classList.remove('show');
      this.element.classList.add('collapse');
      const event = new Event('hidden.bs.collapse');
      this.element.dispatchEvent(event);
    }

    toggle() {
      if (this._isShown) {
        this.hide();
      } else {
        this.show();
      }
    }
  }
};

// Mock window.getComputedStyle for display checks
const originalGetComputedStyle = window.getComputedStyle;
window.getComputedStyle = function(element) {
  const styles = originalGetComputedStyle(element);
  if (element.classList.contains('show')) {
    return {
      ...styles,
      display: 'block'
    };
  }
  if (element.classList.contains('collapse') && !element.classList.contains('show')) {
    return {
      ...styles,
      display: 'none'
    };
  }
  return styles;
};

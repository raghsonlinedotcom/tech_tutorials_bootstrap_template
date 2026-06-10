/**
 * Common JavaScript utilities shared across all tutorial pages.
 * Provides theme toggling, color flavor switching, tooltip/popover
 * initialization, code copy buttons, smooth scrolling, and search.
 */

(function () {
    'use strict';

    var TutorialUtils = {};

    /* ======================================================================
       Theme Toggle (Dark / Light)
       ====================================================================== */

    TutorialUtils.initThemeToggle = function (toggleId) {
        var toggle = document.getElementById(toggleId || 'themeToggle');
        if (!toggle) return;

        var html = document.documentElement;

        toggle.addEventListener('click', function () {
            var current = html.getAttribute('data-bs-theme');
            var next = current === 'light' ? 'dark' : 'light';
            html.setAttribute('data-bs-theme', next);

            var icon = toggle.querySelector('i');
            if (!icon) return;
            if (next === 'dark') {
                icon.classList.remove('bi-moon-stars');
                icon.classList.add('bi-sun');
            } else {
                icon.classList.remove('bi-sun');
                icon.classList.add('bi-moon-stars');
            }
        });
    };

    /* ======================================================================
       Color Flavor
       ====================================================================== */

    TutorialUtils.setColorFlavor = function (flavor) {
        document.documentElement.setAttribute('data-color-flavor', flavor);
    };

    /* ======================================================================
       Bootstrap Tooltips & Popovers
       ====================================================================== */

    TutorialUtils.initTooltips = function () {
        var els = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        Array.prototype.slice.call(els).map(function (el) {
            return new bootstrap.Tooltip(el);
        });
    };

    TutorialUtils.initPopovers = function () {
        var els = document.querySelectorAll('[data-bs-toggle="popover"]');
        Array.prototype.slice.call(els).map(function (el) {
            return new bootstrap.Popover(el);
        });
    };

    /* ======================================================================
       Copy Code Buttons
       ====================================================================== */

    TutorialUtils.initCodeCopyButtons = function () {
        document.querySelectorAll('pre:has(code)').forEach(function (pre) {
            if (pre.parentElement.classList.contains('code-wrapper')) return;

            var wrapper = document.createElement('div');
            wrapper.className = 'code-wrapper';
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);

            var button = document.createElement('button');
            button.className = 'btn btn-sm btn-secondary code-copy-btn';
            button.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
            button.onclick = function () {
                var code = pre.querySelector('code').textContent;
                navigator.clipboard.writeText(code).then(function () {
                    button.innerHTML = '<i class="bi bi-check"></i> Copied!';
                    setTimeout(function () {
                        button.innerHTML = '<i class="bi bi-clipboard"></i> Copy';
                    }, 2000);
                });
            };
            wrapper.insertBefore(button, pre);
        });
    };

    /* ======================================================================
       Legacy copyCode (for manual copy buttons in older templates)
       ====================================================================== */

    TutorialUtils.copyCode = function (elementId) {
        var codeElement = document.getElementById(elementId);
        if (!codeElement) return;
        var code = codeElement.textContent;
        navigator.clipboard.writeText(code).then(function () {
            var toastEl = document.getElementById('successToast');
            if (toastEl) {
                var body = toastEl.querySelector('.toast-body');
                if (body) body.textContent = 'Code copied to clipboard!';
                var toast = new bootstrap.Toast(toastEl);
                toast.show();
            }
        });
    };

    /* ======================================================================
       Smooth Scroll for Anchor Links
       ====================================================================== */

    TutorialUtils.initSmoothScroll = function () {
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                var href = this.getAttribute('href');
                if (href !== '#' && document.querySelector(href)) {
                    e.preventDefault();
                    document.querySelector(href).scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    /* ======================================================================
       Search Functionality with Results Panel
       ====================================================================== */

    TutorialUtils.initSearch = function () {
        var form = document.querySelector('form[role="search"]');
        if (!form) return;

        var currentSearchTerm = '';

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var input = e.target.querySelector('input[type="search"]');
            var searchTerm = input ? input.value : '';
            if (!searchTerm) return;

            currentSearchTerm = searchTerm;

            // Remove previous highlights
            document.querySelectorAll('.search-highlight').forEach(function (el) {
                el.outerHTML = el.innerHTML;
            });

            // Find and highlight matches in card bodies
            var cards = document.querySelectorAll('.card-body');
            var firstMatch = null;
            var totalMatches = 0;

            cards.forEach(function (card) {
                var walker = document.createTreeWalker(
                    card,
                    NodeFilter.SHOW_TEXT,
                    null
                );

                var textNodes = [];
                while (walker.nextNode()) {
                    var parent = walker.currentNode.parentElement;
                    if (parent.tagName !== 'SCRIPT' &&
                        parent.tagName !== 'STYLE' &&
                        !parent.closest('code') &&
                        !parent.closest('pre')) {
                        textNodes.push(walker.currentNode);
                    }
                }

                textNodes.forEach(function (node) {
                    var text = node.textContent;
                    if (text.toLowerCase().includes(searchTerm.toLowerCase())) {
                        var regex = new RegExp(
                            '(' + searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')',
                            'gi'
                        );
                        var matches = text.match(regex);
                        if (matches) totalMatches += matches.length;
                        var span = document.createElement('span');
                        span.innerHTML = text.replace(regex, '<mark class="search-highlight">$1</mark>');
                        node.replaceWith(span);
                        if (!firstMatch) firstMatch = span.querySelector('.search-highlight');
                    }
                });
            });

            // Update results panel
            var panel = document.getElementById('searchResultsPanel');
            if (!panel) return;

            if (totalMatches > 0) {
                panel.style.display = 'block';
                _setText('searchResultCount', totalMatches + ' ' + (totalMatches === 1 ? 'match' : 'matches'));
                _setText('searchTerm', 'for "' + searchTerm + '"');
                _setText('totalMatches', totalMatches);
                _setText('currentMatchNum', '1');
                if (firstMatch) firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                panel.style.display = 'block';
                _setText('searchResultCount', 'No matches');
                _setText('searchTerm', 'for "' + searchTerm + '"');
                _setText('totalMatches', '0');
                _setText('currentMatchNum', '0');
            }
        });

        // Close panel
        var closeBtn = document.getElementById('closeSearchPanel');
        if (closeBtn) {
            closeBtn.addEventListener('click', function () {
                var panel = document.getElementById('searchResultsPanel');
                if (panel) panel.style.display = 'none';
                document.querySelectorAll('.search-highlight').forEach(function (el) {
                    el.outerHTML = el.innerHTML;
                });
            });
        }

        // Prev/Next navigation
        var prevBtn = document.getElementById('prevMatch');
        if (prevBtn) {
            prevBtn.addEventListener('click', function () {
                if (currentSearchTerm) {
                    window.find(currentSearchTerm, false, true, false, false, true, false);
                }
            });
        }

        var nextBtn = document.getElementById('nextMatch');
        if (nextBtn) {
            nextBtn.addEventListener('click', function () {
                if (currentSearchTerm) {
                    window.find(currentSearchTerm, false, false, false, false, true, false);
                }
            });
        }
    };

    /* ======================================================================
       Toast Trigger
       ====================================================================== */

    TutorialUtils.initToastTrigger = function () {
        var trigger = document.getElementById('toastTrigger');
        if (trigger) {
            trigger.addEventListener('click', function () {
                var toastEl = document.getElementById('successToast');
                if (toastEl) {
                    var toast = new bootstrap.Toast(toastEl);
                    toast.show();
                }
            });
        }
    };

    /* ======================================================================
       Initialize All (convenience one-liner)
       ====================================================================== */

    TutorialUtils.initAll = function () {
        TutorialUtils.initThemeToggle();
        TutorialUtils.initTooltips();
        TutorialUtils.initPopovers();
        TutorialUtils.initCodeCopyButtons();
        TutorialUtils.initSmoothScroll();
        TutorialUtils.initSearch();
        TutorialUtils.initToastTrigger();
    };

    /* ======================================================================
       Helper
       ====================================================================== */

    function _setText(id, value) {
        var el = document.getElementById(id);
        if (el) el.textContent = value;
    }

    /* ======================================================================
       Expose globally
       ====================================================================== */

    window.TutorialUtils = TutorialUtils;

    // Also expose setColorFlavor at window level for inline onclick handlers
    window.setColorFlavor = TutorialUtils.setColorFlavor;

    // Also expose copyCode at window level for legacy inline onclick handlers
    window.copyCode = TutorialUtils.copyCode;

    // Auto-initialize on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function () {
        TutorialUtils.initAll();
    });
})();

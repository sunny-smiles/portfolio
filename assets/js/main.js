// assets/js/main.js
// ============================================================
//  Site-wide JavaScript
// ============================================================

(function () {
  "use strict";

  // ── 1. Nav scroll shadow ────────────────────────────────────
  var nav = document.querySelector(".site-nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ── 2. Active nav link highlight ───────────────────────────
  var navLinks = document.querySelectorAll(".site-nav__link");
  var currentPath = window.location.pathname;
  navLinks.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href && currentPath.indexOf(href) === 0 && href !== "/") {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
    if (href === "/" && currentPath === "/") {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // ── 3. Projects Page: Search + Tag Filter ──────────────────
  var projectsGrid = document.getElementById("projects-grid");
  if (projectsGrid) {
    var searchInput = document.getElementById("project-search");
    var tagButtons = document.querySelectorAll(".tag-btn");
    var emptyState = document.getElementById("projects-empty");
    var cards = Array.from(projectsGrid.querySelectorAll(".project-card"));
    var activeTag = "all";
    var searchQuery = "";

    function filterCards() {
      var visibleCount = 0;
      cards.forEach(function (card) {
        var cardTags = (card.dataset.tags || "")
          .toLowerCase()
          .split(",")
          .map(function (t) {
            return t.trim();
          });
        var cardText = (card.dataset.search || "").toLowerCase();
        var query = searchQuery.toLowerCase().trim();
        var tagMatch =
          activeTag === "all" || cardTags.indexOf(activeTag.toLowerCase()) > -1;
        var textMatch = !query || cardText.indexOf(query) > -1;
        if (tagMatch && textMatch) {
          card.classList.remove("hidden");
          card.removeAttribute("aria-hidden");
          visibleCount++;
        } else {
          card.classList.add("hidden");
          card.setAttribute("aria-hidden", "true");
        }
      });
      if (emptyState) emptyState.hidden = visibleCount > 0;
      announceResults(visibleCount);
    }

    function announceResults(count) {
      var liveRegion = document.getElementById("filter-announce");
      if (!liveRegion) {
        liveRegion = document.createElement("div");
        liveRegion.id = "filter-announce";
        liveRegion.setAttribute("aria-live", "polite");
        liveRegion.setAttribute("aria-atomic", "true");
        liveRegion.className = "sr-only";
        document.body.appendChild(liveRegion);
      }
      liveRegion.textContent =
        count + " project" + (count !== 1 ? "s" : "") + " found";
    }

    if (searchInput) {
      var debounceTimer;
      searchInput.addEventListener("input", function (e) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function () {
          searchQuery = e.target.value;
          filterCards();
        }, 180);
      });
    }

    tagButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeTag = btn.dataset.tag;
        tagButtons.forEach(function (b) {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("active");
        btn.setAttribute("aria-pressed", "true");
        filterCards();
      });
    });

    filterCards();
  }

  // ── 4. Fade-in on scroll (IntersectionObserver) ───────────
  if ("IntersectionObserver" in window) {
    var fadeEls = document.querySelectorAll(".fade-in");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  }
})();

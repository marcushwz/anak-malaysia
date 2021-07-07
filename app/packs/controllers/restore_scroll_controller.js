class ScrollPosition {
  save() {
    document.body.dataset.scrollPosition = JSON.stringify([window.scrollX, window.scrollY]);
  }

  restore() {
    const scrollPosition = JSON.parse(document.body.dataset.scrollPosition || "[]");
    if (scrollPosition.length > 0) {
      window.scrollTo(...scrollPosition);
    }
    delete document.body.dataset.scrollPosition;
  }
}

const scrollPosition = new ScrollPosition();

document.addEventListener("turbo:before-cache", function (_event) {
  scrollPosition.save();
});

document.addEventListener("turbo:load", function (_event) {
  scrollPosition.restore();
});

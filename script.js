document.querySelectorAll(".fav").forEach(section => {
  section.addEventListener("click", event => {
    if (event.target.closest(".item, .item-for-songs")) return;

    const details = section.querySelector(".details");
    if (!details) return;

    document.querySelectorAll(".details.active").forEach(openPanel => {
      if (openPanel !== details) {
        openPanel.classList.remove("active");
      }
    });

    details.classList.toggle("active");
  });
});

function smoothScrollTo(target) {
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 90;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
}

document.querySelectorAll("li[data-target]").forEach(item => {
  item.addEventListener("click", () => {
    const targetId = item.getAttribute("data-target");
    const target = document.getElementById(targetId);

    if (target) {
      document.querySelectorAll(".details.active").forEach(openPanel => {
        openPanel.classList.remove("active");
      });

      smoothScrollTo(target);

      setTimeout(() => {
        const details = target.querySelector(".details");
        if (details) {
          details.classList.add("active");
        }
      }, 400);
    }
  });
});

document.querySelectorAll(".item, .item-for-songs").forEach(card => {
  card.addEventListener("click", event => {
    event.stopPropagation();

    const wasActive = card.classList.contains("active");
    document.querySelectorAll(".item.active, .item-for-songs.active").forEach(activeCard => {
      activeCard.classList.remove("active");
    });

    if (!wasActive) {
      card.classList.add("active");
    }
  });
});
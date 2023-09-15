const copyToClipboard = () => {
    const contractText = document.getElementById('contract-text');
    const textToCopy = contractText.innerText;
  
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy to clipboard:', error);
      });
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("[data-roadmap-btn]");
    const slides = document.querySelector("[data-cards]");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    // Initially hide the prev-btn
    prevBtn.style.display = "none";
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const offset = button.dataset.roadmapBtn === "next" ? 1 : -1;
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  
        // Show/hide prev-btn and next-btn based on the current slide index
        if (newIndex === 0) {
          prevBtn.style.display = "none";
          nextBtn.style.display = "block";
        } else if (newIndex === slides.children.length - 1) {
          prevBtn.style.display = "block";
          nextBtn.style.display = "none";
        } else {
          prevBtn.style.display = "block";
          nextBtn.style.display = "block";
        }
  
        activeSlide.removeAttribute("data-active");
        newIndex = (newIndex + slides.children.length) % slides.children.length;
        slides.children[newIndex].setAttribute("data-active", "");
      });
    });
  });

  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  
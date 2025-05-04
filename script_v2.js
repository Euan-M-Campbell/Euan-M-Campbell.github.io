let globalTabName = 'bio';

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('page-head');
    const content = document.getElementById('page-content');
    const tabHead= document.getElementById('tab-head');
    
    let headerDelta = 0;
    
    function getHeaderSizes() {
      const windowHeight = window.innerHeight;
      return {
        maxHeight: 0.2 * windowHeight, // 20vh in pixels
        minHeight: 0.1 * windowHeight  // 10vh in pixels
      };
    }
    
    function updateHeader() {
      const { maxHeight, minHeight } = getHeaderSizes();
      const headerDiff = maxHeight - minHeight;
      headerDelta = Math.min(Math.max(headerDelta, 0), headerDiff);
      const newHeight = maxHeight - headerDelta;
      header.style.height = newHeight + 'px';
      content.style.marginTop = newHeight + 'px';
    }
    
    updateHeader();
    
    document.addEventListener('wheel', function(event) {
      const { maxHeight, minHeight } = getHeaderSizes();
      const headerDiff = maxHeight - minHeight;
      const deltaY = event.deltaY;
      
      if (deltaY > 0) {
        if (headerDelta < headerDiff) {
          headerDelta = Math.min(headerDelta + deltaY, headerDiff);
          updateHeader();
          event.preventDefault();
          window.scrollTo(0, 0);
        }
      } else if (deltaY < 0) {
        if (window.pageYOffset === 0 && headerDelta > 0) {
          headerDelta = Math.max(headerDelta + deltaY, 0);
          updateHeader();
          event.preventDefault();
          window.scrollTo(0, 0);
        }
      }
    }, { passive: false });
    
    window.addEventListener('resize', updateHeader);
});

function adjustFontSize() {
    const pageHead = document.getElementById("page-head");
    if (!pageHead) return;
  
    const oneVh = window.innerHeight / 100;
    const heightVh = pageHead.getBoundingClientRect().height / oneVh;
  
    let ratio = (heightVh - 10) / 10;
    ratio = Math.max(0, Math.min(ratio, 1));
  
    const newH1Size = 4 + 2 * ratio;
    const newH2Size = 2 + 1 * ratio;
  
    const h1 = pageHead.querySelector("h1");
    const h2 = pageHead.querySelector("h2");
    if (h1) h1.style.fontSize = newH1Size + "vh";
    if (h2) h2.style.fontSize = newH2Size + "vh";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    adjustFontSize();
  
    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(adjustFontSize);
      observer.observe(document.getElementById("page-head"));
    } else {
      window.addEventListener("resize", adjustFontSize);
    }
});

function showTab(tabName) {
    globalTabName = tabName;

    if (window.scrollY > window.innerHeight * 0) {
      window.scrollTo(0, window.innerHeight * 0);
    }

    var tabs = document.getElementsByClassName('tab');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none';
    }

    const tabTitle = document.querySelector("#tab-title");
    const tabTitles = {'bio': 'Bio', 'resume': 'Resume', 'portfolio': 'Portfolio', 'contact': 'Contact'}
    tabTitle.textContent = tabTitles[tabName]

    var selectedTab = document.getElementById(tabName + '-tab');
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }

    var buttons = document.getElementById('nav-bar').getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.borderBottom = '5px solid white';
    }

    var activeButton = document.getElementById('btn-' + tabName);
    if (activeButton) {
        activeButton.style.borderBottom = '5px solid darkgrey';
    }
}

document.addEventListener('DOMContentLoaded', function () {
  const h1 = document.querySelector("#page-head h1");
  const h2 = document.querySelector("#page-head h2");

  const finalTextH1 = "Euan McLean Campbell";
  const finalTextH2 = "Data Engineer - Software Developer";
  const typingDelay = 30; // Adjust to control speed
  const chars = "!<>-_\\/[]{}—=+*^?#________$€£@%ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function decryptText(element, finalText, callback) {
      let output = Array(finalText.length).fill("");
      let currentCharIndex = 0;
      let stage = 0; // 0, 1: random; 2: actual char

      const interval = setInterval(() => {
          if (currentCharIndex < finalText.length) {
              if (stage < 2) {
                  output[currentCharIndex] = chars[Math.floor(Math.random() * chars.length)];
                  stage++;
              } else {
                  output[currentCharIndex] = finalText[currentCharIndex];
                  currentCharIndex++;
                  stage = 0;
              }
              element.textContent = output.join("");
          } else {
              clearInterval(interval);
              element.textContent = finalText;
              if (callback) callback();
          }
      }, typingDelay);
  }

  // h2 decrypts only after h1 finishes
  decryptText(h1, finalTextH1, () => {
      decryptText(h2, finalTextH2);
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const offsetVH = 10;
    const offsetPX = window.innerHeight * (offsetVH / 100);

    const items = document.querySelectorAll(".tab-subsection-item");

    window.addEventListener("scroll", () => {
        items.forEach(item => {
            const head = item.querySelector(".tab-subsection-item-head");
            const rect = item.getBoundingClientRect();

            const headHeight = head.offsetHeight;
            const itemBottom = rect.bottom;

            if (rect.top <= offsetPX && itemBottom >= offsetPX + headHeight) {
                head.classList.add("sticky-subsection-head");
                head.style.top = offsetPX + "px";
            } else {
                head.classList.remove("sticky-subsection-head");
                head.style.top = "auto";
            }
        });
    });
});

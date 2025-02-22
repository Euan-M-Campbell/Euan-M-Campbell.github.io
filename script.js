// Function to handle tab switching and active tab styling
function showTab(tabId) {
    // Remove 'active' class from all tabs
    const tabs = document.querySelectorAll('.tab-bar a');
    tabs.forEach(tab => tab.classList.remove('active'));
  
    // Add 'active' class to the clicked tab
    const activeTab = document.querySelector(`.tab-bar a[data-tab="${tabId}"]`);
    if (activeTab) {
      activeTab.classList.add('active');
    }
  
    // Hide all content sections
    const sections = document.querySelectorAll('.tab-content');
    sections.forEach(section => section.style.display = 'none');
  
    // Show the selected tab's content
    const selectedSection = document.getElementById(tabId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }
  
  // Set 'Summary' as the default active tab on page load
  document.addEventListener('DOMContentLoaded', function() {
    showTab('summary');
  });
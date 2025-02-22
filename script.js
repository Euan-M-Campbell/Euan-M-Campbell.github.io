// Function to show the tab content
function showTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
  
    // Remove 'active' class from all tab links
    const tabLinks = document.querySelectorAll('.tab-bar li a');
    tabLinks.forEach(link => link.classList.remove('active'));
  
    // Show the selected tab
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');
  
    // Add 'active' class to the clicked tab link using data-tab attribute
    const activeLink = document.querySelector(`.tab-bar li a[data-tab="${tabId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
}
  
// Set default tab to 'Summary'
document.addEventListener('DOMContentLoaded', () => {
    showTab('summary');
});

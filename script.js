// Function to show the tab content
function showTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
  
    // Show the selected tab
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');
}
  
// Set default tab to 'Overview'
document.addEventListener('DOMContentLoaded', () => {
    showTab('overview');
});
  
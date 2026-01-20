console.log("Focus Blocker running on this page...");

// Check if blocking
const isFocusMode = true; // Hardcoded
const blockedSites = ["youtube.com", "facebook.com", "reddit.com"];

// 2. Check if current URL is in the blocked list
const currentUrl = window.location.hostname;
const shouldBlock = blockedSites.some(site => currentUrl.includes(site));

if (isFocusMode && shouldBlock) {
  // 3. NUKE THE PAGE
  document.body.innerHTML = `
    <div style="display:flex; justify-content:center; align-items:center; height:100vh; background: #ff4b4b; color: white; font-family: sans-serif;">
      <h1 style="font-size: 4rem;"> FOCUS!!! </h1>
    </div>
  `;
}
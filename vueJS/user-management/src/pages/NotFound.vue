<template>
  <div class="not-found-container">
    <div class="not-found-card">
      <div class="error-header">
        <h1 class="error-code">404</h1>
        <span class="error-tag">Route Not Found</span>
      </div>
      
      <p class="error-message">
        The path <code class="path-code">/{{ $route.params.notFound }}</code> does not correspond to an active resource in the directory.
      </p>

      <router-link to="/" class="home-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="arrow-icon"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Return to Dashboard</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(80vh - 100px);
  padding: 20px 0;
  text-align: center;
}

.not-found-card {
  border: 1px solid currentColor;
  padding: 50px 40px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-header {
  margin-bottom: 25px;
}

.error-code {
  font-size: 72px;
  font-weight: bold;
  line-height: 1;
  margin: 0 0 10px 0;
  letter-spacing: -1px;
}

.error-tag {
  display: inline-block;
  border: 1px solid currentColor;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: var(--text-color);
  color: var(--background-color);
}

.error-message {
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.8;
  margin: 0 0 30px 0;
}

.path-code {
  font-family: monospace;
  font-weight: bold;
  padding: 2px 6px;
  opacity: 0.9;
}

.home-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: transparent;
  color: var(--text-color);
  border: 1px solid currentColor;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.2s, color 0.2s;
}

.home-link:hover {
  background-color: var(--text-color);
  color: var(--background-color);
}

.arrow-icon {
  transition: transform 0.2s ease;
}

.home-link:hover .arrow-icon {
  transform: translateX(-4px);
}
</style>

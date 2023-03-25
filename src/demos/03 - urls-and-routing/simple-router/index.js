const content = document.querySelector('#router-content');
const app = document.querySelector('#app');

function createRouter() {
  const router = {

    // Associates known URL patterns with templates.
    routes: [
      { template: document.querySelector('#template-home'), path: '/urls-and-routing/simple-router/' },
      { template: document.querySelector('#template-about'), path: '/urls-and-routing/simple-router/about/' },
    ],

    /**
     * Renders the content associated with a URL by looking up the associated route.
     *
     * @param the desired URL path
     * @param pushState whether or not to fire a pushState call
     */
    navigate(path, pushState = true) {
      const route = this.routes.find((route) => route.path === path);
      if (route) {
        content.replaceChildren(route.template.content.cloneNode(true));
      }

      // Toggle some CSS classes to indicate the active route
      app.querySelector('.active')?.classList.remove('active');
      app.querySelector(`[href="${path}"`)?.classList.add('active');

      if (pushState) {
        history.pushState({}, '', path);
      }
    },
  };

  function renderCurrentUrlContent() {
    const url = window.location.pathname;
    router.navigate(url, false);
  }

  // The `popstate` event fires when the Back or Forward buttons are clicked.
  // We check the new current URL and render the appropriate template.
  window.addEventListener('popstate', () => {
    renderCurrentUrlContent();
  });

  // On initial load, look at the URL and figure out what template we should display.
  renderCurrentUrlContent();

  return router;
}

const router = createRouter();

const links = app.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the browser from actually navigating.
    event.preventDefault();

    // Perform a client-side only routing action.
    router.navigate(event.target.getAttribute('href'));
  });
});

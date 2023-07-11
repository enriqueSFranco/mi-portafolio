export function togglePanel (panel: HTMLElement, btn: string) {
  const $app = document.getElementById("app")

  document.addEventListener('click', (evt) => {
    if (
      (evt.target && (evt.target as Element).matches(btn)) ||
      (evt.target as Element).matches(`${btn} *`)
    ) {
      evt.preventDefault();
      if (panel !== null) {
        panel.classList.toggle("top-0");
        panel.classList.toggle("-top-full");
        if ($app != null) {
          $app.classList.toggle("blur-sm");
        }
      }
    }
  })
}
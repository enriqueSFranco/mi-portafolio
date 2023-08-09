export function togglePanel (panel: HTMLElement, btn: string, link?: string) {
  const $app = document.getElementById("app")

  document.addEventListener('click', (evt) => {
    if (
      (evt.target && (evt.target as HTMLButtonElement).matches(btn)) ||
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
    // if (link != undefined) {
    //   if (evt.target && (evt.target as HTMLLinkElement).matches(link)) { // se hacemos click en un link del menu
    //     console.log(evt.target)
    //     panel.classList.remove("top-0")
    //     panel.classList.add("-top-full")
    //     if ($app != null) {
    //       $app.classList.toggle("blur-sm");
    //     }
    //   }
    // }
  })

}
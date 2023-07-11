export function menuActive (links: NodeListOf<Element>, indicator: HTMLDivElement) {
  links.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const { left, top, width, height } = item.getBoundingClientRect();

      Object.entries({ left, top, width, height }).forEach(([key, value]) => {
        indicator.style.setProperty(key, `${value}px`);
      });

      indicator.style.opacity = '1';
      indicator.style.visibility = 'visible';
    });

    item.addEventListener('mouseleave', () => {
      indicator.style.opacity = '0';
      indicator.style.visibility = 'hidden';
    });
  })
}
const $listItems = document.querySelectorAll(
  '#navLink'
) as NodeListOf<Element>;
const $indicator = document.getElementById('indicator') as HTMLElement;

$listItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    const { left, top, width, height } = item.getBoundingClientRect();

    Object.entries({ left, top, width, height }).forEach(([key, value]) => {
      $indicator.style.setProperty(key, `${value}px`);
    });

    $indicator.style.opacity = '1';
    $indicator.style.visibility = 'visible';
  });

  item.addEventListener('mouseleave', () => {
    $indicator.style.opacity = '0';
    $indicator.style.visibility = 'hidden';
  });
});
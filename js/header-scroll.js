document.addEventListener('scroll', function() {
    const header = document.getElementsByTagName('header')[0];
    const scrollPos = window.scrollY;
    const trigger = 70;
    const fadeDistance = 150;
  
    if (scrollPos > trigger) {
      const blurFactor = Math.min(1, (scrollPos - trigger) / fadeDistance);
      const blurRadius = Math.round(blurFactor * 10);
      const opacity = Math.min(0.6, blurFactor * 0.6);
      
      header.style.backgroundColor = `rgba(51, 51, 51, ${opacity})`;
      header.style.backdropFilter = `blur(${blurRadius}px)`;
      header.style.webkitBackdropFilter = `blur(${blurRadius}px)`;
    } else {
      header.style.backgroundColor = 'transparent';
      header.style.backdropFilter = 'none';
      header.style.webkitBackdropFilter = 'none';
    }
});
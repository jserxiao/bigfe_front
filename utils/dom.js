import html2canvas from 'html2canvas';

export const screenshot = (id) => {
    html2canvas(document.querySelector(`#${id}`), {useCORS: true}).then(canvas => {
      const base64 = canvas.toDataURL('image/png');
      screenshotAnimation(base64);
      const a = document.createElement('a');
      a.href = base64;
      a.download = 'screenshot';
      a.click();
    });
  }

export const screenshotAnimation = (url) => {
    const img = new Image();
    img.src = url;
    img.style.position = 'absolute';
    img.style.width = '100vw';
    img.style.zIndex = '99999';
    img.style.right = '20px';
    img.style.top = '0px';
    img.style.bottom = '0px';
    img.style.margin = 'auto 0';
    img.style.border = '2px solid rgba(255,255,255, 0.5)';
    img.style.borderRadius = '4px';
    img.style.transition = 'all 0.5s ease-in-out';
    document.querySelector('#content').appendChild(img);
    setTimeout(() => {
      img.style.width = '100px';
      img.style.top = '80px';
      img.style.bottom = 'unset';
    },100);
    
    setTimeout(() => {
      img.style.opacity = 0;
    }, 2000)
}
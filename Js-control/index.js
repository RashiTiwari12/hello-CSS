const blurColor = document.getElementById('blur')
const base = document.getElementById('base')
const spacing = document.getElementById('spacing')
const image = document.getElementById('image')

image.style.backgroundColor = '#e2be1c'
image.style.padding = '5px'

spacing.addEventListener('input', () => {
    const spacingValue = spacing.value;
    image.style.padding = spacingValue + 'px';
});
blurColor.addEventListener('input', () => {
    const blurValue = blurColor.value;
    image.style.opacity = blurValue / 10;
});
base.addEventListener('input', () => {
    const baseValue = base.value;
    image.style.backgroundColor = baseValue;
});

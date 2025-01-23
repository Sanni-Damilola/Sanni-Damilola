const fs = require('fs');

const gifUrls = [
  "https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif",
  "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
  "https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif",
  "https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif",
  "https://media.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif",
  "https://media.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif",
  "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
  "https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif",
  "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif",
  "https://media.giphy.com/media/JtBZmwe8C1b7KuabMk/giphy.gif"
];

const randomGif = gifUrls[Math.floor(Math.random() * gifUrls.length)];

let readme = fs.readFileSync('README.md', 'utf8');

const gifSectionRegex = /<!-- GIF section start -->.*<!-- GIF section end -->/s;

const updatedGifSection = `
<!-- GIF section start -->
<div align="center">
    <img src="${randomGif}" alt="Coding GIF" width="150" height="150" />
</div>
<!-- GIF section end -->
`;

readme = readme.replace(gifSectionRegex, updatedGifSection);

fs.writeFileSync('README.md', readme);

console.log('Updated the GIF section in the README with a new random GIF!');

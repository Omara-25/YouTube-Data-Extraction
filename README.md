# 📊 YouTube Metadata Extractor Pro

<div align="center">
  
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
  ![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
  [![YouTube API](https://img.shields.io/badge/YouTube_API-v3-red.svg)](https://developers.google.com/youtube/v3)
  [![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple.svg)](https://getbootstrap.com/)
  
  <p>A powerful and user-friendly tool to extract metadata from YouTube videos.</p>
  <p>Get video titles, descriptions, tags, thumbnails, and other essential metadata with just a URL!</p>
  
</div>

<br>

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔍 **Instant Extraction** | Extract video metadata with just a URL |
| 📝 **Comprehensive Data** | Get titles, descriptions, tags, view counts, likes, and more |
| 🖼️ **High-Quality Thumbnails** | View and download video thumbnails in the highest available quality |
| 📊 **SEO Analysis** | Basic SEO score calculation for videos to improve your content |
| 💾 **Export Options** | Export metadata as JSON or CSV for further analysis |
| 📋 **Copy Functionality** | Easily copy any piece of metadata to clipboard |
| 📱 **Responsive Design** | Works perfectly on desktop and mobile devices |

<br>

## 🚀 Getting Started

### Prerequisites

- YouTube Data API key - [Get one here](https://console.developers.google.com/)
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software required!

### Installation

<details>
<summary><b>1. Clone the repository</b> (click to expand)</summary>
<br>

```bash
git clone https://github.com/Omara-25/YouTube-Data-Extraction.git
cd YouTube-Data-Extraction
```
</details>

<details>
<summary><b>2. Set up your API key</b> (click to expand)</summary>
<br>

Copy the `config.example.js` file to `config.js`:

```bash
cp config.example.js config.js
```

Then edit the `config.js` file and add your YouTube Data API key:

```javascript
const config = {
  YOUTUBE_API_KEY: 'your_api_key_here'
};
```
</details>

<details>
<summary><b>3. Open in browser</b> (click to expand)</summary>
<br>

Simply open the `index.html` file in your web browser to start using the tool.
</details>

<br>

## 🔧 Usage

<div align="center">
  <table>
    <tr>
      <td align="center"><b>Step 1</b></td>
      <td align="center"><b>Step 2</b></td>
      <td align="center"><b>Step 3</b></td>
    </tr>
    <tr>
      <td>Enter a YouTube video URL in the input field</td>
      <td>Click "Extract Metadata" button</td>
      <td>View the extracted metadata</td>
    </tr>
    <tr>
      <td align="center"><b>Step 4</b></td>
      <td align="center"><b>Step 5</b></td>
      <td align="center"></td>
    </tr>
    <tr>
      <td>Use the export buttons to save data in your preferred format</td>
      <td>Copy specific metadata using the copy buttons</td>
      <td></td>
    </tr>
  </table>
</div>

<br>

## 🛠️ Technologies Used

<div align="center">
  <table>
    <tr>
      <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40"/></td>
      <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" height="40"/></td>
      <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40"/></td>
      <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="40" height="40"/></td>
    </tr>
    <tr>
      <td align="center">HTML5</td>
      <td align="center">CSS3</td>
      <td align="center">JavaScript</td>
      <td align="center">Bootstrap 5</td>
    </tr>
  </table>
</div>

- **API**: YouTube Data API v3

<br>

## 📁 Project Structure

```
youtube-metadata-extractor/
│
├── 📄 index.html            # Main HTML file
├── 🎨 styles.css            # CSS styles
├── ⚙️ config.js             # Configuration file with API key (not in version control)
├── 📝 config.example.js     # Example configuration file
├── 🖼️ placeholder.svg       # Placeholder image for thumbnails
├── 📋 README.md             # Project documentation
│
├── 🔒 .env                  # Environment variables (API keys)
├── 📄 .env.example          # Example environment file
└── 📝 .gitignore            # Git ignore file
```

<br>

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<br>

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

<details>
<summary><b>How to contribute</b> (click to expand)</summary>
<br>

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request
</details>

<br>

## 🙏 Acknowledgements

- [YouTube Data API](https://developers.google.com/youtube/v3) - For providing access to YouTube data
- [Bootstrap](https://getbootstrap.com/) - For responsive design components
- [Font Awesome](https://fontawesome.com/) - For beautiful icons
- [Animate.css](https://animate.style/) - For smooth animations

<br>

<div align="center">
  
  <hr>
  
  <p>Made with ❤️ by <b>Critical Future team</b></p>
  
  <p>
    <a href="https://github.com/Omara-25/YouTube-Data-Extraction/issues">Report Bug</a> •
    <a href="https://github.com/Omara-25/YouTube-Data-Extraction/issues">Request Feature</a>
  </p>
  
</div>
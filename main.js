// YouTube API Key is loaded from config.js

    // Extract Video ID
    function extractVideoId(url) {
        const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
      }
  
      // Copy to Clipboard
      function copyToClipboard(elementId) {
        const text = document.getElementById(elementId).textContent;
        navigator.clipboard.writeText(text).then(() => alert('Copied to clipboard!'));
      }
  
      // Export Metadata
      function exportMetadata(format) {
        const metadata = {
          title: document.getElementById('videoTitle').textContent,
          description: document.getElementById('videoDescription').textContent,
          tags: document.getElementById('videoTags').textContent,
          views: document.getElementById('videoViews').textContent,
          likes: document.getElementById('videoLikes').textContent,
          uploadDate: document.getElementById('videoUploadDate').textContent,
          channel: document.getElementById('videoChannel').textContent,
          duration: document.getElementById('videoDuration').textContent,
          category: document.getElementById('videoCategory').textContent,
          seoScore: document.getElementById('seoScore').textContent,
        };
        if (format === 'json') {
          const blob = new Blob([JSON.stringify(metadata, null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'metadata.json';
          a.click();
        } else if (format === 'csv') {
          const csv = Object.keys(metadata).map(key => `${key},${metadata[key]}`).join('\n');
          const blob = new Blob([csv], { type: 'text/csv' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'metadata.csv';
          a.click();
        }
      }
  
      // Copy All Metadata
      function copyAllMetadata() {
        const metadata = {
          title: document.getElementById('videoTitle').textContent,
          description: document.getElementById('videoDescription').textContent,
          tags: document.getElementById('videoTags').textContent,
          views: document.getElementById('videoViews').textContent,
          likes: document.getElementById('videoLikes').textContent,
          uploadDate: document.getElementById('videoUploadDate').textContent,
          channel: document.getElementById('videoChannel').textContent,
          duration: document.getElementById('videoDuration').textContent,
          category: document.getElementById('videoCategory').textContent,
          seoScore: document.getElementById('seoScore').textContent,
        };
        navigator.clipboard.writeText(JSON.stringify(metadata, null, 2)).then(() => alert('All metadata copied to clipboard!'));
      }
  
      // Fetch Metadata
      document.getElementById('metadataForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const videoUrls = document.getElementById('videoUrls').value.split('\n');
        const videoIds = videoUrls.map(url => extractVideoId(url)).filter(id => id);
        if (videoIds.length === 0) {
          alert('Invalid YouTube URLs');
          return;
        }
        document.getElementById('loadingSpinner').classList.remove('initially-hidden');
        fetchMetadata(videoIds[0]); // Fetch metadata for the first video (extend for multiple videos)
      });
  
      function fetchMetadata(videoId) {
        // Get API key from config.js
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoId}&key=${config.YOUTUBE_API_KEY}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            if (data.items && data.items.length > 0) {
              const video = data.items[0];
              const snippet = video.snippet;
              const stats = video.statistics;
              const details = video.contentDetails;
  
              // Set metadata fields
              document.getElementById('videoTitle').textContent = snippet.title;
              document.getElementById('videoDescription').textContent = snippet.description;
              document.getElementById('videoTags').textContent = snippet.tags ? snippet.tags.join(', ') : 'No tags available';
  
              // Use the highest quality thumbnail available
              const thumbnailUrl = snippet.thumbnails.maxres ? snippet.thumbnails.maxres.url :
                                snippet.thumbnails.high ? snippet.thumbnails.high.url :
                                snippet.thumbnails.standard ? snippet.thumbnails.standard.url :
                                snippet.thumbnails.medium ? snippet.thumbnails.medium.url :
                                snippet.thumbnails.default.url;
  
              document.getElementById('videoThumbnail').src = thumbnailUrl;
  
              document.getElementById('videoViews').textContent = stats.viewCount;
              document.getElementById('videoLikes').textContent = stats.likeCount;
              document.getElementById('videoUploadDate').textContent = new Date(snippet.publishedAt).toLocaleDateString();
              document.getElementById('videoChannel').textContent = snippet.channelTitle;
              document.getElementById('videoDuration').textContent = formatDuration(details.duration);
              document.getElementById('videoCategory').textContent = getCategoryName(snippet.categoryId);
              document.getElementById('seoScore').textContent = calculateSeoScore(snippet);
  
              // Show the metadata result section
              document.getElementById('metadataResult').classList.remove('initially-hidden');
            } else {
              alert('No metadata found for this video');
            }
            document.getElementById('loadingSpinner').classList.add('initially-hidden');
          })
          .catch(error => {
            console.error('Error details:', error);
            alert('Error fetching metadata: ' + error.message);
            document.getElementById('loadingSpinner').classList.add('initially-hidden');
          });
      }
  
      // Format Duration (PT16M15S to 16:15)
      function formatDuration(duration) {
        const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        const hours = (match[1] ? match[1].replace('H', '') : '0').padStart(2, '0');
        const minutes = (match[2] ? match[2].replace('M', '') : '0').padStart(2, '0');
        const seconds = (match[3] ? match[3].replace('S', '') : '0').padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
      }
  
      // Get Category Name
      function getCategoryName(categoryId) {
        const categories = {
          1: 'Film & Animation',
          2: 'Autos & Vehicles',
          10: 'Music',
          15: 'Pets & Animals',
          17: 'Sports',
          18: 'Short Movies',
          19: 'Travel & Events',
          20: 'Gaming',
          21: 'Videoblogging',
          22: 'People & Blogs',
          23: 'Comedy',
          24: 'Entertainment',
          25: 'News & Politics',
          26: 'Howto & Style',
          27: 'Education',
          28: 'Science & Technology',
          29: 'Nonprofits & Activism',
        };
        return categories[categoryId] || 'Unknown';
      }
  
      // Calculate SEO Score
      function calculateSeoScore(snippet) {
        // Placeholder logic for SEO score calculation
        return Math.floor(Math.random() * 100);
      }
  
      // Animation for sections
      document.addEventListener('DOMContentLoaded', function() {
        // Function to check if element is in viewport
        function isInViewport(element) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
          );
        }
  
        // Function to handle scroll animation
        function handleScrollAnimation() {
          // Animate sections
          document.querySelectorAll('.fade-in').forEach(section => {
            if (isInViewport(section)) {
              section.classList.add('active');
            }
          });
  
          // Animate staggered items
          document.querySelectorAll('.staggered-item').forEach(item => {
            if (isInViewport(item)) {
              const delay = item.getAttribute('data-delay') || 0;
              setTimeout(() => {
                item.classList.add('active');
              }, delay);
            }
          });
        }
  
        // Initial check
        handleScrollAnimation();
  
        // Add scroll event listener
        window.addEventListener('scroll', handleScrollAnimation);
  
        // Add hover effect for cards
        document.querySelectorAll('.card').forEach(card => {
          card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
          });
  
          card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
          });
        });
  
        // Add event listeners for copy buttons
        document.getElementById('copyTitleBtn').addEventListener('click', function() {
          copyToClipboard('videoTitle');
        });
  
        document.getElementById('copyDescriptionBtn').addEventListener('click', function() {
          copyToClipboard('videoDescription');
        });
  
        document.getElementById('copyTagsBtn').addEventListener('click', function() {
          copyToClipboard('videoTags');
        });
  
        // Add event listeners for export buttons
        document.getElementById('exportJsonBtn').addEventListener('click', function() {
          exportMetadata('json');
        });
  
        document.getElementById('exportCsvBtn').addEventListener('click', function() {
          exportMetadata('csv');
        });
  
        document.getElementById('copyAllBtn').addEventListener('click', function() {
          copyAllMetadata();
        });
  
        // Toggle sections visibility
        const showMoreBtn = document.getElementById('showMoreBtn');
        const aboutSection = document.getElementById('aboutSection');
        const whyUseSection = document.getElementById('whyUseSection');
        let sectionsVisible = false;
  
        showMoreBtn.addEventListener('click', function() {
          if (!sectionsVisible) {
            // Show sections
            aboutSection.classList.remove('hidden-section');
            whyUseSection.classList.remove('hidden-section');
            showMoreBtn.innerHTML = '<i class="fas fa-chevron-up"></i> Show Less Information';
            sectionsVisible = true;
          } else {
            // Hide sections
            aboutSection.classList.add('hidden-section');
            whyUseSection.classList.add('hidden-section');
            showMoreBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Show More Information';
            sectionsVisible = false;
          }
        });
      });
      // Add this to your GitHub Pages site
      window.addEventListener('message', function(event) {
      // Check if the message is asking for height
      if (event.data === 'getHeight') {
      // Calculate the full height of the document
      const height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
      ) + 50; // Add padding
      
      // Send height back to parent
      window.parent.postMessage({height: height}, '*');
    }
  });
  
  // Also send height whenever content changes
  const observer = new MutationObserver(function() {
    const height = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    ) + 50;
    
    window.parent.postMessage({height: height}, '*');
  });
  
  // Start observing the document for content changes
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
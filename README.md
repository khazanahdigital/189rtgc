# M&B Auto Group Dealership Website

A modern, responsive website for M&B Auto Group's car dealership business. This website showcases the dealership's inventory, services, and company information with a professional and user-friendly interface.

## Features

- Modern, responsive design optimized for all devices
- Interactive vehicle inventory with search functionality
- Featured vehicles showcase
- Comprehensive services section
- About section with company information
- Customer testimonials with slider
- Contact form for inquiries
- Google Maps integration
- Mobile-friendly navigation

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Font Awesome for icons
- Google Fonts

## Project Structure

```
mnb-auto-dealership/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Directory for website images
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- A modern web browser
- Basic HTTP server (optional for local development)

### Running the Website Locally

1. Clone or download this repository to your local machine
2. Navigate to the project directory
3. You can open the `index.html` file directly in your browser, or
4. Use a local development server for better experience:

```bash
# Using Python's built-in HTTP server
# Navigate to the project directory and run:
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

## Customization

- Replace placeholder images in the `images/` directory with actual dealership photos
- Update contact information, business hours, and address in the HTML
- Modify the vehicle inventory to reflect actual available vehicles
- Customize colors by modifying CSS variables in the `:root` selector in `styles.css`

## Deployment

### GitHub Pages Deployment

This website is configured for easy deployment to GitHub Pages. Follow these steps:

1. Create a GitHub repository for this project
2. Push your code to the repository:

```bash
# After initializing the repository
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/mnb-auto-dealership.git
git push -u origin main
```

3. Go to your GitHub repository settings
4. Scroll down to the "GitHub Pages" section
5. Select the branch you want to deploy (usually `main`)
6. Select the folder (usually `/root`)
7. Click "Save"
8. Your site will be published at `https://yourusername.github.io/mnb-auto-dealership/`

The website can also be deployed to other static hosting services including:

- Netlify
- Vercel
- Amazon S3
- Traditional web hosting

## License

This project is licensed under the MIT License.

## Contact

For any questions or support regarding this website, please contact M&B Auto Group at info@mbautogroup.com.

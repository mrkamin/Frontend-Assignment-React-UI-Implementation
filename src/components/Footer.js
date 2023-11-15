// Import the necessary components
import ConversionRate from './ConversionRate';
import Location from './Location';
import WebsiteAnalytics from './WebsiteAnalytics';

// Define the Footer component
const Footer = () => (
  // Render a div with the "footer" class and a "grid1" class
  <div className=" footer grid1">
    <Location />
    <ConversionRate />
    <WebsiteAnalytics />
  </div>
);

// Export the Footer component
export default Footer;

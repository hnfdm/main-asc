import React from 'react';
import Accordion from '@components/website/Accordion'; // Importing from the same directory
import '@styles/components/website/Accordion.css'; // Import the CSS file

const FAQ = () => {
  return (
    <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', color: 'black' }}>
      <h3 className="faq-header" style={{ color: 'white' }}>Frequently Asked Questions</h3>
      <Accordion title="1. What is Winsnip?">
        <p>Winsnip is a platform that provides airdrop bot scripts and other automation tools for cryptocurrency enthusiasts. Whether you're looking for automated ways to participate in airdrops or manage tasks, Winsnip has you covered.</p>
      </Accordion>
      <Accordion title="2. What kind of bot scripts are available?">
        <p>We offer various bot scripts tailored for airdrop participation, including scripts for automating tasks like wallet submissions, social media interactions, and more. We also provide scripts for other blockchain-related automation.</p>
      </Accordion>


      <Accordion title="3. Are the bot scripts free?">
        <p>Yes, we offer free bot scripts as well as premium options with additional features and functionality. Check the listings to find out more about each script.</p>
      </Accordion>


      <Accordion title="4. How do I use the airdrop bot scripts?">
        <p>Each script comes with a detailed guide on how to set it up and use it. Our tutorials will walk you through the process of configuring the bot, including system requirements and any necessary software dependencies.</p>
      </Accordion>


      <Accordion title="5. Can I customize the bot scripts?">
        <p>Yes, our scripts are designed to be customizable. You can modify them according to your specific needs. We also offer support in case you need assistance with customization.</p>
      </Accordion>


      <Accordion title="6. Is it safe to use these bots?">
        <p>We prioritize security and ensure that our bots operate safely. However, we recommend users to follow best practices when using automation tools, such as testing in sandbox environments and staying updated with the latest security patches.</p>
      </Accordion>


      <Accordion title="7. Do you offer support for setting up the bots?">
        <p>Yes! We provide detailed tutorials and offer customer support to help with setup and troubleshooting. You can contact our team via email or join our community forums for further assistance.</p>
      </Accordion>

      <Accordion title="8. What other services do you offer besides airdrop bots?">
        <p>In addition to airdrop bots, we provide tools for blockchain node management, trading bots, and more. You can explore our full range of scripts and automation services in the "Services" section of our website.</p>
      </Accordion>

      <Accordion title="9. How do I order a custom bot script?">
        <p>If you need a custom bot script for a specific use case, you can place an order through our "Bot Script Orders" section. Just provide the details of what you need, and we'll get in touch with you.</p>
      </Accordion>

      <Accordion title="10. Can I request a tutorial on a specific bot or blockchain tool?">
        <p>Absolutely! We encourage our users to suggest topics they’d like to see tutorials on. Feel free to contact us with your suggestions, and we’ll do our best to create a guide for you.</p>
      </Accordion>

    </div>
  );
};

export default FAQ;


function printContent() {
    window.print();
  }

 
  function shareContent() {
    // Check if the Web Share API is supported by the browser
    if (navigator.share) {
        // Use the Web Share API to trigger the share functionality
        navigator.share({
            title:"https://play.google.com/store/apps/details?id=com.androidapps.unitconverter", //'Website Title',
            text:"check out this awsome app", //'Check out this awesome website!',
            url: window.location.href
        })
        .then(() => {
            console.log('Successfully shared');
        })
        .catch((error) => {
            console.log('Error sharing:', error);
        });
    } else {
        // Fallback for browsers that do not support the Web Share API
        console.log('Web Share API not supported');

        // Provide a fallback for WhatsApp and Facebook
        const shareUrl = encodeURIComponent(window.location.href);
        
        // WhatsApp
        const whatsappUrl =` https://wa.me/?text=${encodeURIComponent('Check out this awesome website! ' + window.location.href)}`;
        console.log('Share on WhatsApp:', whatsappUrl);

        // Facebook
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${encodeURIComponent('Check out this awesome website!')}`;
        console.log('Share on Facebook:', facebookUrl);

        // You can open these URLs in a new window or redirect the user
        // Example: window.open(whatsappUrl, '_blank');
        // Example: window.open(facebookUrl, '_blank');
    }
}

// Add an event listener to the button
document.getElementById('shareButton').addEventListener('click', shareContent);
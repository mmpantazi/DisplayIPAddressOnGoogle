// Retrieve the IP address using an API
fetch('https://api64.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;

    // Create a new HTML element to display the IP address
    const ipElement = document.createElement('div');
    ipElement.textContent = `Your IP Address: ${ipAddress}`;
    ipElement.style.position = 'fixed';
    ipElement.style.top = '10px';
    ipElement.style.left = '10px';
    ipElement.style.padding = '10px';
    ipElement.style.background = 'rgba(255, 255, 255, 0.8)';
    ipElement.style.border = '1px solid #ccc';
    ipElement.style.borderRadius = '5px';
    ipElement.style.zIndex = '9999';
    ipElement.style.fontFamily = 'Arial, sans-serif';
    ipElement.style.fontSize = '14px';
    ipElement.style.color = '#333';

    // Append the element to the body of the page
    document.body.appendChild(ipElement);
  })
  .catch(error => {
    console.error('Error fetching IP address:', error);
  });

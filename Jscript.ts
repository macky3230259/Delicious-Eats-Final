// This file can be used for any JavaScript functionality across pages.
console.log("Welcome to Delicious Eats Website!");

// Chatbot functionality
document.querySelectorAll('#send-btn').forEach(button => { // Attach event listener to all send buttons
     button.addEventListener('click', function() { // Add click event listener
         const chatInput = this.previousElementSibling; // Get input field before button
         const userMessage = chatInput.value.trim(); // Get user input value

         if (userMessage) { // Check if input is not empty
             const chatBody = this.parentNode.previousElementSibling; // Get chat body before input field

             // Append user message to chat body
             chatBody.innerHTML += `<div class='user-message'>${userMessage}</div>`;
             chatInput.value = ''; // Clear input field

             // Simulate bot response after a delay
             setTimeout(() => {
                 chatBody.innerHTML += `<div class='bot-message'>Thank you for your message! How can I assist you?</div>`;
                 chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom of the chat body
             }, 1000); // Delay of one second before bot responds
         }
     });
});

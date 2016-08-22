# cautious-parakeet chat



Introduction
****

Cautious Parakeet is a very lonely chatroom app and our first iteration of building this chatroom.  The user is able to send messages and will recieve a tweet back from the parakeet.  We are currently using an array in localStorage to hold the messages so that they persist when the page is reloaded.  The user is able to edit their own message or delete their own message.  They are nont able to delete anyone elses message.  We've written the application so that it will be mostly unchanged in future iterations where we are receiving real messages from other users.  The app was written with a mobile layout in mind and uses buttons instead of click or tap events so that things aren't accidentally edited or deleted while scrolling.  

How it works
****
When a user begins to modify the message input field there are event listeners that will enable the send button when text is added and will update the character count with how many characters (and spaces) have been entered in the field.  When the send button is clicked the message is written to the DOM, is added to the messagesArray and the array is stored in local storage.  If the user wants to edit a message they can click the edit button (pencil icon) and the message body will become editable and focused on.  As soon as they click out, or the field loses focus, the message is updated and stored back in the array and local storage.  When a user clicks or taps the delete button the message is removed from the DOM, located and removed from the array, and the array is stored back in local storage.  We took advantage of our build tools to split out our functionality into multiple script files.  We have a file for global variables, a file for our message constructor, a file for our event listeners and a file for our chat room object.  The chatroom object has all the methods needed for adding and removing chat messages as well as enabling/disabling fields/buttons and clearing inputs.  We also used some basic level Sass to divide our styles and make use of variables for color names and text properties.  

Testing
****
We used webdriverIO to do our DOM and Integration testing.  We used Mocha/Chai for our unit level tests.  We started with basic integration tests to get core functionality in place and then added some unit tests for the critical .js functions.  In future iterations we will continue to build out testing functionality as we add JSON calls and AJAX.  This was a great intro to DOM testing and good practice on writing unit tests. 

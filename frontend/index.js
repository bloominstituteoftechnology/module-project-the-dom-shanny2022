function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  // Select all widgets, replace 'widgetElement' with the actual selector
  let widgets = document.querySelectorAll('.widgetElement');
  // Add 'widget' class to all widgets
widgets.forEach(widget => widget.classList.add('widget'));


  //👉 TASK 2 - Build a "Quote of the Day" widget
  // Create a new div element
let quoteWidget = document.createElement('div');

// Set the text content to be a quote
quoteWidget.textContent = "Quote of the day: 'The only way to do great work is to love what you do.' - Steve Jobs";

// Add a class to style the widget
quoteWidget.classList.add('quote-widget');

// Append the div to the body of the document

let corporateWidget = document.createElement('div');
corporateWidget.textContent = "Corporate Speak: 'Let's touch base offline about our value-add strategies.'";
corporateWidget.classList.add('corporate-widget');
document.body.appendChild(corporateWidget);

// 👉 TASK 4 - Build a "Countdown" widget
let countdownWidget = document.createElement('div');
let countdown = 10;
countdownWidget.textContent = `Countdown: ${countdown}`;
countdownWidget.classList.add('countdown-widget');
document.body.appendChild(countdownWidget);
setInterval(() => {
  countdown--;
  countdownWidget.textContent = `Countdown: ${countdown}`;
}, 1000);
  // 👉 TASK 5 - Build a "Friends" widget

let friendsWidget = document.createElement('ul');
let friends = ['Alice', 'Bob', 'Charlie'];
friends.forEach(friend => {
  let li = document.createElement('li');
  li.textContent = friend;
  friendsWidget.appendChild(li);
});
friendsWidget.classList.add('friends-widget');
document.body.appendChild(friendsWidget);

  // 👉 TASK 6 - Make it so user can tab through the widgets
  let allWidgets = document.querySelectorAll('.widget');
allWidgets.forEach(widget => widget.setAttribute('tabindex', '0'));

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()

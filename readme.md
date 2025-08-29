## ASSIGNMENT-005


### 6. Answer of the given questions:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: 
getElementById: Select single element by its unique id attribute and if the specified ID exist then returns a single element, otherwise it will return null. This use for specific uniquely identified elements.

getElementsByClassName: Selects all elements that have a specific class name and returns collection of elements. This is ideal for selecting multiple element with similar style and functionality.

querySelector: The querySelector() method returns the first element that matches a CSS selector. That means if you need to select a Single specific element use querySelector.

querySelectorAll: To return not only the first but all matches then we have to use querySelectorAll.


2. How do you **create and insert a new element into the DOM**?

Answer: 
document.createElement(): To create and insert a element into the DOM first we need to use document.createElement() method to create a new HTML element node. This method takes the tag name of the element to create as a string argument.

appendChild(): This method adds the new element as the last child of a specified parent element.

insertBefore(): This method inserts the new element before a specified reference element within a parent.

append() or prepend(): These methods provide more modern ways to add elements as the last or first child, respectively, and can accept multiple nodes or strings.


3. What is **Event Bubbling** and how does it work?

Answer: 
When an event occurs on an element it follows a three-phase process:

Capturing Phase - The event travels down from the document root to the target element
Target Phase - The event fires on the actual target element
Bubbling Phase - The event "bubbles up" from the target element back to the document root

During this phase, the event fires on each ancestor element in the DOM hierarchy, moving upward until it reaches the document root.


4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer: 
 Event delegation allows a parent element to listen for events that happen on its child elements, even if those child elements are added dynamically after the initial event listener is attached.

 Why is it useful:
 Performance Improvement: Instead of attaching multiple event listeners, which can consume memory and processing time, you attach a single listener to the parent.
Simplified Code: Managing event listeners becomes much easier as you only need to handle events at the parent level, thats make code more maintainable and less error-prone.
Dynamic Elements: Event delegation is particularly useful when dealing with dynamically added elements, as the parent's event listener will automatically handle events from any new child elements without needing additional code.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:
preventDefault(): It is a method present in the event interface. This method prevents the browser from executing the default behavior of the selected element. This method can cancel the event only if the event is cancelable. For example, there are some events that can not be prevented, such as the scroll and wheel event.

stopPropagation(): This method is used to prevent the parent element from accessing the event. Basically, this method is used to prevent the propagation of the same event from being called. For eg,  we have a button element inside a div tag and there is an onclick event on both of them, then whenever we try to activate the event attached to the button element, then the event attached to the div element also gets executed because div is the parent of the button element.
---


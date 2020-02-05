//Functional Programming: The Hazards of using imperative code

/* 
   Functional programming keeps your code easy to manage, and saves you from sneaky bugs. But before we get there lets look at an imperative approach to programming to highlight where you may have issues.

   An imperative style in programming  is one that gives the computer a set of statements to perform a task.

   Often the statements change the state of the program, like updating global variables. A classic example is writing a 'for' loop that gives exact directions to iterate over the indices of an array.

   In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.

   Javascript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using the 'for' loop mentioned above, you could call the 'map' method which handles the details of iterating over an array. This helps to avoid semantic errors, like the "Off by one errors" (OBOE), that were covered in the Debugging section. 

   Consider the scenario: You are browsing the web, and want to track the tabs you have opened. Let's try to model this using some simple object-oriented code.

   A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open. 
   Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it. 

   The code editor shows an implementation of this functionality with functions for 'tabOpen()', 'tabClose()', and 'join()'. 
   The array 'tabs' is part of the Window object that stores the name of the open pages.

    Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour. The final list of open tabs, stored in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the list produced by the code is slightly different.

    Change Window.prototype.tabClose so that it removes the correct tab.

*/ 

// code 

// tabs is an array of titles of each site open with the window
var Window = function(tabs){
   this.tabs = tabs;
   // we keep a record of the array inside the object
}

// when you join two windows into one window
Window.prototype.join = function(otherWindow){
   this.tabs = this.tabs.concat(otherWindow.tabs);
   return this;
}

// when you open a new tab at the end
Window.prototype.tabOpen = function(tab){
   this.tabs.push('new tab'); // let's open a new tab for now
   return this;
}

// when you close a tab
Window.prototype.tabClose = function(index){
   // change code below this line
      var tabsBeforeIndex = this.tabs.slice(0, index); // get the tabs before the tab
      var tabsAfterIndex = this.tabs.slice(index + 1); // get the tabs after the tab
   // change code above this line
      this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together

      return this;
}

// create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

   // perform window operations

   var finalTabs = socialWindow.tabOpen().join(videoWindow.tabClose(2)).join(workWindow.tabClose(1).tabOpen());

   console.log(finalTabs.tabs);  


# Fresh Sticky Notes built with React 
 This app is a fun way to learn React hooks, stateful componenets and props, etc.


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Resources](#resouces)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge
The challenge is to build this app as a greenfield project, use React Hooks, and take the css styling a little further. This app is an update from an app I first built as a lesson from Skillcrush.


### Resouces
- React Images 
    - [Levelup Blog Post](https://levelup.gitconnected.com/display-images-in-react-8ff1f5b1cf9a)
    - [Stack Overflow Post](https://stackoverflow.com/questions/37644265/correct-path-for-img-on-react-js)
- [Styling the placeholder](https://medium.com/@samanthaming/styling-placeholder-text-with-css-9a2a608b68bc)
- [Fontawesome with React](https://dev.to/davidemaye/how-to-set-up-font-awesome-in-react-5a8d)

## My process
- started with mapping out which components would be container components and presentational components based on what the app should do and where the user data would flow.
- designed the app in Figma [Fresh Sticky Notes](https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FrOMYTzRhT9IsdPX5sqAYqf%2FFresh-Sticky-Notes-React-Project%3Fnode-id%3D0%253A1%26t%3DCbzTznrTPD52l6Ca-1)



- built out all the JSX in the App.js file first
- considered using Bootstrap for React since I just did a tutorial but after an initial start decided this was more trouble than it was worth for this project
- Had issues with getting the image file's path correct. Initiall I had an images directory inside the src directory but I could not get the normal path of ```./images/file.png ``` to work. I tried importing and naming the image and then using ``` src={image} ``` but this didn't work either. Ended up putting the images in the Public folder instead of the src folder. Still not sure how happy I am with my choice but it worked 😊
- When state components were added I had to remind myself that event handlers must be in the component that owns the state. You can not use setState outside of the state component. Event listeners can be in other components and can be passed as props or rather the reference of the event handler can be passed as props to the stateful component.
- Remember to always copy state before updating it. This is important to not cause disruptions if something else is using that state. Also you never, never want to directly touch the DOM so copy, add, and then setState anew.
- Dealing with specific value updates
Shown below is the onType method that live in the App state component. This method takes three parameters, editMeID == id of note object changed & updatedKey == title or description that was updated in the note object & updatedValue == value of updated
  - The 1st parameter that onType takes is the editMeID == id of note object changed. The event listener in the Note component will grab what id was changed. When on Type is passed to the Note component thru props this id will be available to change state in the App component.
  - updatedNotes is where state is being copied but with some conditions to catch the changes. With ```map()``` each note object in the notes array is checked
  - ```if``` note.id does not equal ``editMeId`` it means that editMeId does not exist. The only way editMeId exist is if the event listener created it. So if no editMeId then no user input and the note object is returned unchanged
  - ```else``` there must have been an event listener triggered and an ```editMeId``` created and available. Then there needs to be a differentiation of what was updated in that note object
  - ```if``` the ``updatedKey`` is "title" then the ``updatedValue`` needs to be udated in the note object
  - ```else``` the ``updatedKey`` must be "description" and then that ``updatedValue`` should be updated in the note object
  - then state can be updated with ```this.setstate()``` and the user will see the values they are typing in the UI

``` 
  onType = (editMeID, updatedKey, updatedValue) => {
    const updatedNotes = this.state.notes.map( note => {
      if (note.id !== editMeID) {
          return note;
        } else {
          if (updatedKey === "title" ) {
            note.title = updatedValue;
            return note;
          } else {
            note.description = updatedValue;
            return note;
          }
        }
    })
    this.setState({notes: updatedNotes});
  }
```
- add event listeners to Note component
  - for user changes to the title ``` onChange={updateTitle} value={props.note.title} ``` are used as attributes in the ``<input>`` for the title
  - write event listener (below) for title changes in the Notes component. The parameters used in the ```onType``` event handler are assigned values here. So ```editMeId``` is created which begins the first of the if/else statements in the ```onType``` method.
  ``` 
    const Note = (props) => {

    const updateTitle = (e) => {
        const updatedValue = e.target.value;
        const editMeId = props.note.id;
        props.onType(editMeID, "title", updatedValue);
    }
    ``` 

- add event handler for Search functionality
  - in App create a ``onSearch`` method that will be passed thru props to the Header component
  - first need to ``map()`` over the ``state.notes`` array
  - need to turn all text strings (search string, the note's title and description) into the same case. Use a new consts to do this so nothing is permanently changed in the UI or in state.
    -  `const newSearchText = text.lowerCase();`
    -  ``const title = note.title.toLowerCase();`` and ``const description = note.description.toLowerCase();``
  - check each scenario that a user could make. I intially had this too simplified not taking into account if a user started to type in the search and then deleted the search. The first ``if`` statement covers this and would reset the doesMatchSearch to true so they wouldn't lose a note unintentionally. 
  - in the ``else`` statement the search text is compared to the title and the description text using an ``includes()`` method.
  - two new constants, ``titleMatch`` and ``descriptionMatch`` are created that return true for a match and false for no match
  - intitially I coded another set of if/else statements to cover the possible boolean outcomes for the new constants
    ``` 
        if (titleMatch) {
          note.doesMatchSearch = true;
        } else if (descriptionMatch) {
          note.doesMatchSearch = true;
        } else {
          note.doesMatchSearch = false;
        }
        return note;
    ```
  - However there is a more consise way to do this by makeing another constant ``hasMatch`` and set it equal to a boolean statement. `` const hasMatch = titleMatch || descriptionMatch``. If ``titleMatch`` or (``||``)`` descriptionMatch`` is false then hasMatch will be false but if one or both are true the it will be true. Now the doesMatchSearch can just be set to the value of ``hasMatch``.

```
onSearch = (text) => {
    const newSearchText = text.toLowerCase();
    const updatedNotes = this.state.notes.map( note => {
      if (!newSearchText) {
        note.doesMatchSearch = true;
        return note;
      } else {
        const title = note.title.toLowerCase();
        const description = note.description.toLowerCase();
        const titleMatch = title.includes(newSearchText);
        const descriptionMatch = description.includes(newSearchText);
        const hasMatch = titleMatch || descriptionMatch;
        note.doesMatchSearch = hasMatch;
        return note;
      }
    })
  }
```
- make event listenser for Search function in the Header component
  - use an ``onChange`` listener as an attribute in the search ``<input>`` element
  - add a constant called ``updateSearch``  that the ``onChange`` will trigger
  - updateSearch will grab the target value from onChange and send it to the App component
  ```
  const updateSearch = (e) => {
    const text = e.target.value;
    props.onSearch(text);
  }
  ```
- make an event listener and handler for Deleting a note. 
  - add ``onClick`` to the ``<span>`` element in the note
  - write a very simple event listener. do not even need to catch a target.value or use e as a parameter
  - in the App component create a ``onDelete`` method to pass thru props to NoteList
  - use ``filter()`` to keep only notes whose ``note.id !== deleteMeId`` from event listener

### FontAwsome for React
installed font awesome's SVG core package
``` npm i --save @fortawesome/fontawesome-svg-core ```
installed the free versions of icons
``` npm i --save @fortawesome/free-solid-svg-icons 
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons 
```
installed font awesome React component
``` npm i --save @fortawesome/react-fontawesome@latest ```

checked the package.json file and saw five new dependencies
![screenshot of package.json file](./fontawesome-package-json-screenshot.png)

imported individual icons as opposed to dynamic or global imports
``` import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons' 
```
and the used this format for JSX 
``` <div className="footer-icons">
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
        </div>
```
** Warning! The fontawesome website gives all individual icon components with camelCase but it doesn't work in React when importing or calling icons. So faGitHub is what is in documentation for v6.4.0 but faGithub is what actually works. Not sure if this is an issue of different versions of fontawesome but seeing as I followed their directions and installed the lastest version of fontawesome ```@fortawesome/react-fontawesome@latest ``` I am not sure.


### What I learned


## Author

- Website - [Amy Spencer](https://spencerproject.com/)
- Frontend Mentor - [@amyspencerproject](https://www.frontendmentor.io/profile/amyspencerproject)
- Linkedin - [amyspencercodes](https://www.linkedin.com/in/amyspencercodes/)

```
const updateSearch = (e) => {
    props.onSearch(text);
    const text = e.target.value;
    
  }
```
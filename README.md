# Here Is The Three Project Features
<br/>

 - ### Map() : Dynamically render elements by iterating over an array and transforming each element to create a new array.

 - ### Find() : Search for the first element in an array that satisfies a given condition and return it.

- ### Data Fetching : Retrieve data from an external source, such as an API, and use it to populate the content of your website dynamically.

<br/>


# Discuss how you managed the state in your assignment project.

### In this project, i use React's useState hook to manage the state. By using useState, I was able to create and update state variables within functional components.I used total three useState hook 

  - ## First useState() <br/>

    ### it is to store the fetched data in cards variale and additionally i use map for iterating over this cards variable for  dynamically render the cards based on the state data.
 - ## Second useState() <br/>

    ### It is to store the selected course in selectedCourse variable .I have used find function over selectedCourse to create an array which are selected one times, and i store the unique selected course in a array called newSelectedCourse and i set this new array to the main useState Function to set whenever the handleClickButton will be clicked these code will be executed .

 - ## Third useState() <br>
    
   ### This useState i used for to store in total credit hour of selectedCourse in creditHour variable , i used forEach() over selecteCourse variable to calculate the total selected course credit hour and i set the total to creditHour variable and send it through cart props and managed other functionality to show it properly.
   

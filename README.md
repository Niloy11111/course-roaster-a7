# Here Are The Three Project Features
<br/>

 - ### Map() : Dynamically render elements by iterating over an array and transforming each element to create a new array.

 - ### Find() : Search for the first element in an array that satisfies a given condition and return it.

- ### Data Fetching : Retrieve data from an external source, such as an API, and use it to populate the content of your website dynamically.

<br/>


# Discuss how you managed the state in your assignment project.

### I utilise React's useState hook in this project to manage the state. By using useState, I was able to create and update state variables within functional components. I used a total of three useState hook


  - ## First useState() <br/>

    ### I used this useState to store the fetched data in cards variable and additionally, I used the map for iterating over this cards variable to dynamically render the cards based on the state data.


 - ## Second useState() <br/>

    ### It is to store the selected course in a selectedCourse variable. I have used the find function over selectedCourse to create an array which is selected just one time, and I store that unique selected course in an array called newSelectedCourse and I set this new array to the main useState Function to set whenever the handleClickButton will be clicked these code will be executed.


 - ## Third useState() <br>
    
   ### This useState I used to store the total credit hour of selectedCourse in the creditHour variable, I used forEach() over selecteCourse variable to calculate the total selected course credit hour and I set the total hour number to the creditHour variable and sent it through the cart props and managed other functionality to show it properly.


   

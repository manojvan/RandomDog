Usage
For iOS:
1)In the terminal navigate to project folder and run npm install command
2)Once npm install is completed, cd ios and run pod install command
3) open xcworkspace and run the project

For Android:
1)In the terminal navigate to project folder and run npm install command
2)Run the command npx react-native run android to run the project 


Approach:

1) In the dashboard when user clicks on generate dogs button, navigate to generate random dogs screen where user clicks generate button.
2) On clicking generate button hitting the provided service using fetch method to get random generated dog image url.
3) By checking the status code with the help of fastimage npm(caches the image) showing the generated image to the user and storing the image url in sqlite database.
4)While saving the record to database, checking for the number of records and if count is greater than 20 remove the older record and add the latest one to the table.
5) In the dasboard when user clicks on recently generated dogs button, navigate to new screen and display stored dog images as horizontal scroll with component Flatlist.
6)When user clicks on cleardogs button, stored records are deleted from sqlite database.  

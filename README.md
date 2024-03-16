# Sprint 7 project


===================================================================================================
                                                Intro
I had done positive testing for Project 7 using Javascript programming inside of Visual Studios, using git commands, Postman, let, const, test, and catch commands.

===================================================================================================
                                                Preparations   

                                                Getting The Hm07-qa-us folder and Installation
1. Run the Gitbash program
2. Create a directive using these steps 
        A. cd ∼
        B. mkdir projects
        C. cd projects
3. Clone the folder hm07-qa-us with these steps
        A. Get the HTTPS code from Github that was shared in the Repositories
        B. in Gitbash type down "git clone <insert the URL code that you copied>
4. Open the hm07-qa-us and on the main bar in the middle. Double click and type down CMDand press enter
5. A cmd will open up with the pathway where the hm07-qa-us is located
6. Type down "npm install" 
7. next is type down "npm install jest" for the dependencies
===================================================================================================
                                                 Setting up the Server to test
1. Log into the trippleten homepage and navigate to sprint 7 project
2. Deploy the server and save the URL that was given
===================================================================================================
                                                Setting Up the Swagger
1. Take the url and add "/api/swagger" in the webrowser 
===================================================================================================
                                              Setting up Postman
1. Log into postman and enter new environment
2. On the upper right hand corner click the icon that looks like a papericon with an eye on it. If hovered it would say "Envrionmental Quick Look" and then click "add" on the envionmental section
3. Add a name in the "variable" and in the "initial value" and "current value" insert the URL that was deployed by tripleten
4. After that postman should be ready. The only thing that is needed is to change the methods.
===================================================================================================
                                              Creating ID for Delete Requests
1. In postman start a DELETE requests. In the bar near the Delete request add the variable that was created in the new environment earlier and add in "api/v1/kits"
        A. Go to the body tab and click the "raw" radio button and make sure that "JSON" format is on.
        B. Include this in the body
        {
            "cardId:2, 
            "name": "Project7"
        }
2. Click send and you will have a response code saying "201 created" and in the body remember the "id". In this case my id is "7"
===================================================================================================
                                             Connecting Server to Config.
1. Open up the downloaded hm07-qa-us folder from earlier
2. Open up config.js
3. In the "API_URL:" include your generated URL from the tripleten deployment
4. Save
===================================================================================================
                                             Testing Delete Request
1. In the same folder of the hm07-qa-us open the "tests" folder
2. Open the deleteHandlers.test.js with Visual Studio
3. There are 2 test that will be tested. The first is to see if the status code returns "200 ok" and the 2nd test will be he body response returning as a boolean "true"
4. Include this Code:

5. Before initializing the test make sure to add ththe endpoint "/api/v1/kits/7`" on the const. response line at the end for line "6" and "20"
6. Save
7. Go to the cmd line where you first ran the "npm install" start the test by typing "npx jest deleteHandlers.test.js" and clicking enter
8. After a few second the "Test Suites" Should say 1 pass and the "tests:" says 2 
                                             Doing Your own Tests
1. In order to do your own for the Status Code go to line 13 and change the toBe(XXX) 
2. The same for the Response body. Go to line 27 and change the toBe(Boolean("XXX"))
===================================================================================================
                                             Testing Get Request
1. In the same "tests" folder do the same thing but for the getHandlers.test.js
2. 2 Tests will also be tested. First one is to see if the Status Code comes out "200" and the 2nd is the Body Response will come out  as "For Picnic".
3. Include this code:
4. Be sure to add the endpoint is included "/api/v1/kits/1"
5. Save
6. Go back to the cmd line and start the tests with "npx jest getHandlers.test.js"
7. The end results should have 2 tests Passed
                                             Doing your own Tests
1. Change the Status Code on line 11 and the body response on line 23

===================================================================================================
                                             Testing Post Request
1. In the same folder of the as the previous
2. Open the postHandlers.test.js with Visual Studio
3. There are 2 test that will be tested. The first is to see if the status code returns "200 ok" and the 2nd test will be he body response to check the warehouse of the store.
4. Include this Code:
5. Be sure to add "/api/v1/orders`" at the end point 
6. Save 
7. On the cmd line start the tests with "npx jest postHandlers.test.js"
6. When the test run there should be 2 passes.
                                             Doing your own Tests
1. Adjust the "ID" and "Quantity" to any numerical value.
2. Adjust the statuscode 
3. In the body adjust the actualResponseBody["xyz"] and the toBe("XYZ")

===================================================================================================
                                             Testing Put Request
1. Do the same thing as a previous but select "putHandlers.test.js" with Visual Studio
2. The test will be checking the Statuscode is "200" and the Bodyresponse for a "deliveryprice" and the outcome is "0"
3. Include this code:
4. Be sure to change the endpoint to "/api/v1/orders/1"
5. Save
6. Start the tests with "npx jest putHandlers.test.js" with visual studio
7. The end result should have 2 test passed
                                             Doing your own Tests
1. Adjust the statuscode 
2. In the body adjust the actualResponseBody["xyz"] and the toBe("XYZ")
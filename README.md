# helloworldnodejs
Simple Node JS Hello World application for use in demos. This NodeJS app will look for the following environment variables:
- REGION_ID
- REGION_NAME
- PORT

As part of starting it will look for the *PORT* environment variable to identify the port to bind to, it will then print out a message along the lines of:

*Hello World from {REGION_ID}  hosted in {REGION_NAME}*

The PORT and REGION_NAME environment variables are standard Azure App Service variables.

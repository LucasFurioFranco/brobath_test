# brobath_test
First of all, change the permissions of run.sh so you can execute it:
>chmod +x run.sh

<br>

For running, while on the directory where the Dockerfile is present, execute on terminal:
>./run.sh

<br>

This will run the application on port 3000 (if available, otherwise it will break). Then, it should be already running (needs to be serving though, Nginx or something like it).

<br>

Taking localhost for an example, to test it, access:
>localhost:3000/getter

<br>

If working fine, it will return a JSON. Note that one of the values of it is the XHR code to run on the browser console for testing the POST method. Just remember to change the domain of it to localhost (it is pointing to my domain, sorry, won't change it :( )

#ABOUT this bash script
#CHModed it like this: 	chmod +x run.sh
#execute it doing this: ./run.sh
#have phun!


#Stops the currently runing container, if there is one
echo "Running: docker stop brobath-test"
docker stop brobath-test

#Deletes the current "brobath-test" docker container
echo "Running: docker container rm brobath-test"
docker container rm brobath-test

#To build the docker image:
#NOTE: you must be in the Dockerfile directory with tour terminal
echo "Running: docker build -t brobath_test ."
docker build -t brobath_test .

#To run the docker image:
#docker run --publish 3000:3000 brobath_test

#To run naming it and on background:
echo "Running: docker run --name brobath-test -d --publish 3000:3000 brobath_test"
docker run --name brobath-test -d --publish 3000:3000 brobath_test

#Prints the status of the running containers after deploying this one!
echo "Running: docker ps"
docker ps

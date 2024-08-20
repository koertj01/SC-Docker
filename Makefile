# Here is an example bash script
# we want to just automate flows we 
# normally do during the build process


hello_world: 
	echo -e "\033[31m Hello hello_world\033[0m"
	echo -e "\033[32m Hello hello_world\033[0m"
	echo -e "\033[33m Hello hello_world\033[0m"

build: 
	echo -e "\033[33m Building Project..\033[0m"
	go build .

run: 
	echo -e "\033[32m Starting project..\033[0m"
	go run .
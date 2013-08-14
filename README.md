socketTest
==========

An http service test using sockets to demonstrate an issue with Ploy and sockets when the service is an http service.

== Steps to reproduce
* Clone this project
* Add an alias to your /etc/hosts like sioTest.anydomain.com
* Add a remote ploy server (git remote add development http://beep:boop@localhost/_ploy/socketTest.git)
* deploy the project (git push development master)
* Open your browser and go to your server (sioTest.anydomain.com)
* Now you'll see there is no responses from the server.

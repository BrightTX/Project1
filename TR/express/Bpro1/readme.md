building garfield basic server 
we create folder sibling to module
create index.html that have the code fot the web site 

The app.use() function is used to mount the specified middleware function(s) at the path that is being specified. It is mostly used to set up middleware for your application.


PATH PARAMETERS 

[Path parameters are used to specify a variable part of the URL path. They are defined in the URL path with a colon (:) character followed by the parameter name. Path parameters are often used to identify a specific resource.]

(PARAMETERS) ARA A PLACE HOLDER in the route pattern of URL for ex loaclhost:3000/dogs/:breed
here breed is a route parameter 
the are defined in the routs pattern and are specified by placing a colon (:) followed by the parameter name 


QUERY PARAMETER 
[Query parameters are used to provide additional data to the server as part of the URL. They are appended to the URL with a ? character and separated by & characters. Query parameters are often used for filtering, sorting, and pagination.]

a query parameter is a key -value pair included in th URL and follow by by (?). they consist of key-value pairs separated by (&)
 Http request https://costco.com/search?dept=All&keyword=ballons 
 the end route is costco.com/search
 how many query params // 2 dept and keyword 
 the keys dept and keywords
 what are the value // All and balloons 

(HTTP client)
 TOOL for TEsting (HTTP REQ) 
 while brow effort (Get) request POST or PUT and DELETE requests  require special tools 
 there is a few option 
 1- curl (command line ) : a versatile command line tool for making HTTP req its scriptable and widely Used due to its flexibility
2- postman app 
3-thunderClint (vsc) extension that provides a lightwaight and intuitive environment making HTTP req directly

in ThunderClint we use Get, Put , Delete 
 1-USE GET TO (request )
 2-USE PUT to (update)
 3- USE delete to ( delete )
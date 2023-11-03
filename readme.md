Technologies used to create this application:
    ◊   next.js
    ◊   bootstrap
    ◊   react-bootstrap
    ◊   styled-components
    ◊   react-icons
    ◊   react-intersection-observer
    ◊   react-paginate

Problems during application development:
    ◊ When attempting to authenticate using strategies other than "local", a new window is opened where it is possible to log into the service using a google, facebook, or github account. This window, however, opens an address with a different address and communicates with the parent window using postMessage this window itself, on the other hand, must receive data from the backend in a different way than the session due to the use of vercel as hosting, so jwt token data is passed as a url param.
    ◊ The mysql server is slow as a result of which sending a valid request to change the data in the database, and then immediately querying the data in response will receive a record without changes, since this operation is asynchronous. Therefore, the front end has functions that mimic the execution of operations such as delete, insert, update, so that immediately after the execution of a valid request to display the changed data even before these changes in the official database.

Paths:
    ◊ / - containing CRUD (page available without login, but will not allow database manipulation)
    ◊ /login - a subpage containing a form to serve login (page available only if you are not already logged in)
    ◊ /signin - a subpage containing a form for creating a new account (a page available only if you are not already logged in)
    ◊ /resource_code - the page you are currently on
    ◊ /login/login_success - path to which you are directed after an attempt to log in via: google, facebook, or github completed successfully
    ◊ /login/login_failure - path to which user is directed after an attempt to log in via: google, facebook, or github ended unsuccessfully
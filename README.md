API's 101

What is an API, what does it stand for?

    Application Programming Interface
    
    1969 = Arpanet (DOD - Advanced Projects Research Agency), Closed Network
    1971 = Internet - primarily universities and research institutions
        - smtp (email)
        - ftp (file transfer protocol)
        - telnet (virtualize a remote server session) entering shell commands
        - ssh (allowed you to do the same thing as telnet, but securely)
    
    1991 - HTTP/HTML created by TBL (Tim Berners Lee)
            the inventor of the World Wide Web
                first demonstrated on a NEXT computer at MIT
            - Websites (BUT, Static information)

            Pre-API

            use case: Travelers
                travel phone books
                travel diskettes (databases program)
                travel CD's (databases program)

                the problem with serving this data via websites was that the data was static.

    API = Practical Definition
        an application interface that allows an external device to access internal server DATABASES/DATA via well defined CRUD (Creat, Read, Update, Delete) methods.  
        
        The most of these methods is (R) Read.  Which is called a GET request.

        XHR 

        REST API's utilize XHR

        Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. XMLHttpRequest is used heavily in AJAX programming.  NOTE: XML is no longer actually used.  XML has been replaced by JSON objects.

        Constructor
        XMLHttpRequest()
        The constructor initializes an XMLHttpRequest. It must be called before any other method calls.

        XHR Properties (informational)
            https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Properties

        XHR Methods (executable commands)
            https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#Methods

        Exercise:  Accessing Github API Data

            https://api.github.com/users  // an api endpoint

    # demo

# Express-JS
1:Node vs Express - node is the main thing express ko code bata hamile server ko code lekhna sakxa and server kasari react garxa tyo pani express ko help bata lekhna sakinxa 

2:what is express.js - package, routing

3:why express.js - bcoz http is difficult to use , express makes this easier to code or use

4:routing - routes banaune  process lai nai routing vaninxa.
/profile
/home
/contact
/profile/binod/home/setting   {uslai nai routing vaninxa}

5:Middleware  - yo yesto funtion ho  jun har route chalnu aaghi chaldaxa,usko matlab sabai routes(like get,post,delete,put.etc) jun chale pani tesko aaghi jailey middleware chalne garxa and yesma lekheko code firt execute hunxa
    1.request and response  ,next
       a:-req ma sabai data hunxa related aaune wala user ko request ko tarfa bata, like usko location, device info and other things,
       b:-res mah controls hunxa jasko basis mah hamile server bata response pathauna sakeko hunxa 
       c:-next is just a push so that our request moves to the next thing which should be executed

6:route parameters
    to make any route dynamic you can use :(colon) at the place where you want to make it dynamic,and to access there value use req.paramas
    (see sher.js ko code).

7:templete engines => ejs is very similar to html but not exactly html

    1.ejs install(npm i(install) ejs)
    2.configure ejs
        app.set("view engine", "ejs");
    3.ek views name ko folder create garni 
    4.tesma ejs files banauni 
    5.send ko satta render garni => render garni bela make sure view folder ko vitra wala kunai file ko name lekhne , raw render funtion mah .ejs funtion nagrni.

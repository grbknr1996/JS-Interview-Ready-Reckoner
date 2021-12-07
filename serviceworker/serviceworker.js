//service worker is a proxy between server and the
//the client

/*
   client ------------>server
       \\                //
        \\     \/       //
         \\            //
          \\          //
          Serviceworker
              ||
          Cache Memory
1.The worker is a separate thread from the main thread
2.It reduces the call to the server using its storage
3.Ccching can be done

OTHER DEFINITIONS AND ATTRIBURTES OF SW:

1.Service worker is a JS Script file the gets registered 
with the browser

2. Can load content even with no connection 

3.They can not directly access the DOM.
  It uses PostMessage interface to do any DOM action

4.Programmable network proxy

5.Make use of promises and requires https unless on localhost

6.Caching assets and API calls

7.Push Notifications (Push and Notification API)

8.Background data sync

Service Worker Lifecycle and events:-

Register --->Install ----->Activate
                |             |
             Triggers      Triggers 
             install        activate
              event         event

Message events and functional Events such as 
"fetch" and "sync"

             */

const cacheName = "v1";
const cacheAssets = ["index.html", "about.html", "main.js"];

//call install event
self.addEventListener("install", (e) => {
  console.log("Service worker :installed");

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("service worker:caching files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

//call activate event
self.addEventListener("activate", (e) => {
  console.log("Service worker :activated");
  //remove unwanted caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service worker clearing old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

//call fetch event

self.addEventListener("fetch", (e) => {
  console.log("service worker fetching");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

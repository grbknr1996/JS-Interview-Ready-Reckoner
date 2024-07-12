// Write an analytics SDK that exposes logEvent, it takes in analytics events and queues them
// - pass a function sendAnalyticsEvent as a parameter(implement a stub function that resolves in 1 second and fails every n%10 times)
// - send the next event to sendAnalyticsEvent when only after it resolves
// - when the failure occurs attempt a retry

const SDK = function () {
  this.logs = [];
  this.count = 1;
  this.log = function (event) {
    this.logs.push(event);
  };

  this.wait = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.count % 5 === 0) {
          reject();
        } else {
          resolve();
        }
      }, 1000);
    });

  this.sendAnalyticsEvent = async function () {
    //base condition
    if (this.logs.length === 0) {
      return;
    }
    const current = this.logs.shift(); //Shift (remove) the first element of the array

    try {
      await this.wait();
      console.log("Logged:", current);
      this.count++;
    } catch (error) {
      console.log("----------------");
      console.log("Event failed:", current);

      console.log("Retrying :", current);
      console.log("----------------");
      this.count = 1;
      this.logs.unshift(current); //The unshift() method adds new elements to the beginning of an array.
    } finally {
      this.sendAnalyticsEvent();
    }
  };
};

const sdk = new SDK();
sdk.log("event 1");
sdk.log("event 2");
sdk.log("event 3");
sdk.log("event 4");
sdk.log("event 5");
sdk.log("event 6");
sdk.log("event 7");
sdk.log("event 8");
sdk.log("event 9");
sdk.log("event 10");
sdk.log("event 12");
sdk.log("event 13");
sdk.log("event 14");
sdk.log("event 15");
sdk.sendAnalyticsEvent();

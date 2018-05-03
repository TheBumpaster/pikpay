# pikpay

To use the package first grab your credentials from your PikPay account. You will need your Authenticity Token (API_KEY) and Key (SECRET_KEY). Before any request, an instance of Gateway has to be constructed.

``` javascript
var connection = new Gateway('yourendpoint', 'yourapikey', 'yoursecretkey');

var data = {
    'amount':   50,
    'expiration-date':    2102,
    'cvv':    553,
    'pan':    546400000587798528,
    'ip':   '128.93.108.112',
    'order-info':   'The Best Order',
    'ch-address':   'Mejdan bb',
    'ch-city':    'Bosanski Petrovac',
    'ch-country':   'Bosnia and Herzegovina',
    'ch-email':   'hadzicismar67@gmail.com',
    'ch-full-name':   'Ismar Hadzic',
    'ch-phone':   '38762591077',
    'ch-zip':   '77250',
    'currency':   'BAM', //EUR, BAM, HRK
    'order-number':   'order-123a',
    'language':   'en',
};

if ( connection.authorize(data) ) {
   // Do something on success
} else {
  // Return some error
}

connection.authorize(data);
connection.capture(data);
connection.purchase(data);
connection.refund(data);
connection.void(data);
```

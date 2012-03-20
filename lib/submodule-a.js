!(function (exports) {
   var sbmodule-a = exports.submodule-a = {};

   submodule-a.submodule = function () {
     console.log('it works!');
   };

   submodule-a.update = function () {
     console.log('here is the update!');
   };
}(this));

!(function (exports) {
   var sbmodule_a = exports.submodule_a = {};

   submodule_a.submodule = function () {
     console.log('it works!');
   };

   submodule_a.update = function () {
     console.log('here is the update!');
   };
}(this));

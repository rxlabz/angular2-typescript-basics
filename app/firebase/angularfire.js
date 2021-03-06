System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AngularFire, FirebaseArray;
    return {
        setters:[],
        execute: function() {
            AngularFire = (function () {
                function AngularFire(ref) {
                    this.ref = ref;
                }
                AngularFire.prototype.asArray = function () {
                    return new FirebaseArray(this.ref);
                };
                return AngularFire;
            }());
            exports_1("AngularFire", AngularFire);
            /*
             FirebaseArray
            
             */
            FirebaseArray = (function () {
                function FirebaseArray(ref) {
                    this.ref = ref;
                    this.list = [];
                    // listen for changes at the Firebase instance
                    this.ref.on('child_added', this.created.bind(this), this.error);
                    this.ref.on('child_moved', this.moved.bind(this), this.error);
                    this.ref.on('child_changed', this.updated.bind(this), this.error);
                    this.ref.on('child_removed', this.removed.bind(this), this.error);
                    // determine when initial load is completed
                    // ref.once('value', function() { resolve(null); }, resolve);
                }
                FirebaseArray.prototype.getItem = function (recOrIndex) {
                    var item = recOrIndex;
                    if (typeof (recOrIndex) === "number") {
                        item = this.getRecord(recOrIndex);
                    }
                    return item;
                };
                FirebaseArray.prototype.getChild = function (recOrIndex) {
                    var item = this.getItem(recOrIndex);
                    return this.ref.child(item._key);
                };
                FirebaseArray.prototype.add = function (rec) {
                    this.ref.push(rec);
                };
                FirebaseArray.prototype.remove = function (recOrIndex) {
                    this.getChild(recOrIndex).remove();
                };
                FirebaseArray.prototype.save = function (recOrIndex) {
                    var item = this.getItem(recOrIndex);
                    this.getChild(recOrIndex).update(item);
                };
                FirebaseArray.prototype.keyify = function (snap) {
                    var item = snap.val();
                    item._key = snap.key();
                    return item;
                };
                FirebaseArray.prototype.created = function (snap) {
                    var addedValue = this.keyify(snap);
                    this.list.push(addedValue);
                };
                FirebaseArray.prototype.moved = function (snap) {
                    var key = snap.key();
                    this.spliceOut(key);
                };
                FirebaseArray.prototype.updated = function (snap) {
                    var key = snap.key();
                    var indexToUpdate = this.indexFor(key);
                    this.list[indexToUpdate] = this.keyify(snap);
                };
                FirebaseArray.prototype.removed = function (snap) {
                    var key = snap.key();
                    this.spliceOut(key);
                };
                FirebaseArray.prototype.bulkUpdate = function (items) {
                    this.ref.update(items);
                };
                FirebaseArray.prototype.spliceOut = function (key) {
                    var i = this.indexFor(key);
                    if (i > -1) {
                        return this.list.splice(i, 1)[0];
                    }
                    return null;
                };
                FirebaseArray.prototype.indexFor = function (key) {
                    var record = this.getRecord(key);
                    return this.list.indexOf(record);
                };
                FirebaseArray.prototype.getRecord = function (key) {
                    return this.list.find(function (item) { return key === item._key; });
                };
                return FirebaseArray;
            }());
            exports_1("FirebaseArray", FirebaseArray);
        }
    }
});
//# sourceMappingURL=angularfire.js.map
sap.ui.define([
    "./BaseController",
    "sap/ui/core/routing/History"
], function(BaseController, History) {
    "use strict";
    return BaseController.extend("ns.M.controller.Add", {
        onInit: function() {
            // Register to the add route matched
            this.getRouter().getRoute("add").attachPatternMatched(this._onRouteMatched, this);
        },
        _onRouteMatched: function() {
        //here goes your logic which will be executed when the "add" route is hit
        },
        onNavBack : function() {
            var oHistory = History.getInstance(),
            sPreviousHash = oHistory.getPreviousHash();
            if (sPreviousHash !== undefined) {
                // The history contains a previous entry
                history.go(-1);
            } else {
                // Otherwise we go backwards with a forward history
                var bReplace = true;
                this.getRouter().navTo("worklist", {}, bReplace);
            }
        }
    });
});
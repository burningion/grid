/*!
 * /public
 * From the desk of Andrew McWatters
 * http://www.andrewmcwatters.com/
 * @author Andrew McWatters
 * Copyright 2014.
 */
'use strict';

var google = window.google;

function DOMOverlay() {
    this.elements_ = null;
}

DOMOverlay.prototype = new google.maps.OverlayView();

DOMOverlay.prototype.add = function(item) {
    if (this.elements_ === null) {
        this.elements_ = [];
    }

    item.parentNode.removeChild(item);
    this.elements_.push(item);
};

DOMOverlay.prototype.onAdd = function() {
    if (this.elements_ === null) {
        return;
    }

    var panes = this.getPanes();
    for (var i = 0; i < this.elements_.length; i++) {
        panes.overlayLayer.appendChild(this.elements_[i]);
    }
};

DOMOverlay.prototype.draw = function() {
    if (!this.elements_) {
        return;
    }

    var overlayProjection = this.getProjection();

    for (var i = 0; i < this.elements_.length; i++) {
        var element = this.elements_[i];
        var latlng  = element.dataset.latlng.split(',');
            latlng  = new google.maps.LatLng(+latlng[0], +latlng[1]);
            latlng  = overlayProjection.fromLatLngToDivPixel(latlng);
        element.style.left = latlng.x + 'px';
        element.style.top  = latlng.y + 'px';
    }
};

DOMOverlay.prototype.onRemove = function() {
    for (var i = 0; i < this.elements_.length; i++) {
        this.elements_[i].parentNode.removeChild(this.elements_[i]);
    }
    this.elements_ = null;
};

window.DOMOverlay = DOMOverlay;

var map = L.map('map', {
    zoomControl:false, maxZoom:28, minZoom:1
}).fitBounds([[51.693649884500694,4.39111818279198],[51.92640991252637,4.997405543000526]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
// remove popup's row if "visible-with-data"
function removeEmptyRowsFromPopupContent(content, feature) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    var rows = tempDiv.querySelectorAll('tr');
    for (var i = 0; i < rows.length; i++) {
        var td = rows[i].querySelector('td.visible-with-data');
        var key = td ? td.id : '';
        if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
            rows[i].parentNode.removeChild(rows[i]);
        }
    }
    return tempDiv.innerHTML;
}
// add class to format popup if it contains media
function addClassToPopupIfMedia(content, popup) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    if (tempDiv.querySelector('td img')) {
        popup._contentNode.classList.add('media');
            // Delay to force the redraw
            setTimeout(function() {
                popup.update();
            }, 10);
    } else {
        popup._contentNode.classList.remove('media');
    }
}
var zoomControl = L.control.zoom({
    position: 'topleft'
}).addTo(map);
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
function pop_Buurten_0(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['buurtcode'] !== null ? autolinker.link(feature.properties['buurtcode'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['buurtnaam'] !== null ? autolinker.link(feature.properties['buurtnaam'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['wijkcode'] !== null ? autolinker.link(feature.properties['wijkcode'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['gemeentecode'] !== null ? autolinker.link(feature.properties['gemeentecode'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['gemeentenaam'] !== null ? autolinker.link(feature.properties['gemeentenaam'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['indelingswijzigingWijkenEnBuurten'] !== null ? autolinker.link(feature.properties['indelingswijzigingWijkenEnBuurten'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['water'] !== null ? autolinker.link(feature.properties['water'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['meestVoorkomendePostcode'] !== null ? autolinker.link(feature.properties['meestVoorkomendePostcode'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['dekkingspercentage'] !== null ? autolinker.link(feature.properties['dekkingspercentage'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['omgevingsadressendichtheid'] !== null ? autolinker.link(feature.properties['omgevingsadressendichtheid'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['stedelijkheidAdressenPerKm2'] !== null ? autolinker.link(feature.properties['stedelijkheidAdressenPerKm2'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['bevolkingsdichtheidInwonersPerKm2'] !== null ? autolinker.link(feature.properties['bevolkingsdichtheidInwonersPerKm2'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['aantalInwoners'] !== null ? autolinker.link(feature.properties['aantalInwoners'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['mannen'] !== null ? autolinker.link(feature.properties['mannen'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['vrouwen'] !== null ? autolinker.link(feature.properties['vrouwen'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percentagePersonen0Tot15Jaar'] !== null ? autolinker.link(feature.properties['percentagePersonen0Tot15Jaar'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percentagePersonen15Tot25Jaar'] !== null ? autolinker.link(feature.properties['percentagePersonen15Tot25Jaar'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percentagePersonen25Tot45Jaar'] !== null ? autolinker.link(feature.properties['percentagePersonen25Tot45Jaar'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percentagePersonen45Tot65Jaar'] !== null ? autolinker.link(feature.properties['percentagePersonen45Tot65Jaar'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percentagePersonen65JaarEnOuder'] !== null ? autolinker.link(feature.properties['percentagePersonen65JaarEnOuder'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percentageOngehuwd'] !== null ? autolinker.link(feature.properties['percentageOngehuwd'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percentageGehuwd'] !== null ? autolinker.link(feature.properties['percentageGehuwd'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percentageGescheid'] !== null ? autolinker.link(feature.properties['percentageGescheid'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percentageVerweduwd'] !== null ? autolinker.link(feature.properties['percentageVerweduwd'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['aantalHuishoudens'] !== null ? autolinker.link(feature.properties['aantalHuishoudens'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percentageEenpersoonshuishoudens'] !== null ? autolinker.link(feature.properties['percentageEenpersoonshuishoudens'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percentageHuishoudensZonderKinderen'] !== null ? autolinker.link(feature.properties['percentageHuishoudensZonderKinderen'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percentageHuishoudensMetKinderen'] !== null ? autolinker.link(feature.properties['percentageHuishoudensMetKinderen'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['gemiddeldeHuishoudsgrootte'] !== null ? autolinker.link(feature.properties['gemiddeldeHuishoudsgrootte'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percentageMetHerkomstlandNederland'] !== null ? autolinker.link(feature.properties['percentageMetHerkomstlandNederland'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percentageMetHerkomstlandUitEuropaExclNl'] !== null ? autolinker.link(feature.properties['percentageMetHerkomstlandUitEuropaExclNl'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percentageMetHerkomstlandBuitenEuropa'] !== null ? autolinker.link(feature.properties['percentageMetHerkomstlandBuitenEuropa'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percentageGebInNlMetHerkomstlandNederland'] !== null ? autolinker.link(feature.properties['percentageGebInNlMetHerkomstlandNederland'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percGebInNlMetHerkomstlandInEuropaExNl'] !== null ? autolinker.link(feature.properties['percGebInNlMetHerkomstlandInEuropaExNl'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percGebInNlMetHerkomstlandBuitenEuropa'] !== null ? autolinker.link(feature.properties['percGebInNlMetHerkomstlandBuitenEuropa'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percGebBuitenNlMetHerkomstlndInEuropaExNl'] !== null ? autolinker.link(feature.properties['percGebBuitenNlMetHerkomstlndInEuropaExNl'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['percGebBuitenNlMetHerkomstlndBuitenEuropa'] !== null ? autolinker.link(feature.properties['percGebBuitenNlMetHerkomstlndBuitenEuropa'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['oppervlakteTotaalInHa'] !== null ? autolinker.link(feature.properties['oppervlakteTotaalInHa'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['oppervlakteLandInHa'] !== null ? autolinker.link(feature.properties['oppervlakteLandInHa'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['oppervlakteWaterInHa'] !== null ? autolinker.link(feature.properties['oppervlakteWaterInHa'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['jrstatcode'] !== null ? autolinker.link(feature.properties['jrstatcode'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['jaar'] !== null ? autolinker.link(feature.properties['jaar'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['fuuid'] !== null ? autolinker.link(feature.properties['fuuid'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_Buurten_0_0() {
    return {
        pane: 'pane_Buurten_0',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0,
        fillColor: 'rgba(255,158,23,0.0)',
        interactive: true,
    }
}
map.createPane('pane_Buurten_0');
map.getPane('pane_Buurten_0').style.zIndex = 401;
map.getPane('pane_Buurten_0').style['mix-blend-mode'] = 'normal';
var layer_Buurten_0 = new L.geoJson(json_Buurten_0, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Buurten_0',
    layerName: 'layer_Buurten_0',
    pane: 'pane_Buurten_0',
    onEachFeature: pop_Buurten_0,
    style: style_Buurten_0_0,
});
bounds_group.addLayer(layer_Buurten_0);

map.createPane('pane_OpenStreetMap_1');
map.getPane('pane_OpenStreetMap_1').style.zIndex = 300;
var layer_OpenStreetMap_1 = L.tileLayer('http://tile.osm.org/{z}/{x}/{y}.png', {
    pane: 'pane_OpenStreetMap_1',
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19
});
layer_OpenStreetMap_1;

function style_Drechtsteden_2_0() {
    return {
        pane: 'pane_Drechtsteden_2',
        opacity: 0.4,
        color: 'rgba(16,38,55,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 4.0,
        fillOpacity: 0,
    }
}
map.createPane('pane_Drechtsteden_2');
map.getPane('pane_Drechtsteden_2').style.zIndex = 402;
map.getPane('pane_Drechtsteden_2').style['mix-blend-mode'] = 'normal';
var layer_Drechtsteden_2 = new L.geoJson(json_Drechtsteden_2, {
    attribution: '',
    interactive: false,
    dataVar: 'json_Drechtsteden_2',
    layerName: 'layer_Drechtsteden_2',
    pane: 'pane_Drechtsteden_2',
    style: style_Drechtsteden_2_0,
});
bounds_group.addLayer(layer_Drechtsteden_2);

function style_15min_3_0() {
    return {
        pane: 'pane_15min_3',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.3,
        fillColor: 'rgba(255,255,1,1.0)',
    }
}
map.createPane('pane_15min_3');
map.getPane('pane_15min_3').style.zIndex = 403;
map.getPane('pane_15min_3').style['mix-blend-mode'] = 'normal';
var layer_15min_3 = new L.geoJson(json_15min_3, {
    interactive: false,
    attribution: '',
    dataVar: 'json_15min_3',
    layerName: 'layer_15min_3',
    pane: 'pane_15min_3',
    style: style_15min_3_0,
});
bounds_group.addLayer(layer_15min_3);


function style_10min_4_0() {
    return {
        pane: 'pane_10min_4',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.3,
        fillColor: 'rgba(255,163,43,1.0)',
    }
}
map.createPane('pane_10min_4');
map.getPane('pane_10min_4').style.zIndex = 404;
map.getPane('pane_10min_4').style['mix-blend-mode'] = 'normal';
var layer_10min_4 = new L.geoJson(json_10min_4, {
    attribution: '',
    dataVar: 'json_10min_4',
    layerName: 'layer_10min_4',
    pane: 'pane_10min_4',
    style: style_10min_4_0,
});
bounds_group.addLayer(layer_10min_4);
function style_5min_5_0() {
    return {
        pane: 'pane_5min_5',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.3,
        fillColor: 'rgba(208,0,0,1.0)',
    }
}
map.createPane('pane_5min_5');
map.getPane('pane_5min_5').style.zIndex = 405;
map.getPane('pane_5min_5').style['mix-blend-mode'] = 'normal';
var layer_5min_5 = new L.geoJson(json_5min_5, {
    attribution: '',
    dataVar: 'json_5min_5',
    layerName: 'layer_5min_5',
    pane: 'pane_5min_5',
    style: style_5min_5_0,
});
bounds_group.addLayer(layer_5min_5);
function style_15min_6_0() {
    return {
        pane: 'pane_15min_6',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.3,
        fillColor: 'rgba(255,255,1,1.0)',
    }
}
map.createPane('pane_15min_6');
map.getPane('pane_15min_6').style.zIndex = 406;
map.getPane('pane_15min_6').style['mix-blend-mode'] = 'normal';
var layer_15min_6 = new L.geoJson(json_15min_6, {
    attribution: '',
    dataVar: 'json_15min_6',
    layerName: 'layer_15min_6',
    pane: 'pane_15min_6',
    style: style_15min_6_0,
});
bounds_group.addLayer(layer_15min_6);
function style_10min_7_0() {
    return {
        pane: 'pane_10min_7',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.3,
        fillColor: 'rgba(255,163,43,1.0)',
    }
}
map.createPane('pane_10min_7');
map.getPane('pane_10min_7').style.zIndex = 407;
map.getPane('pane_10min_7').style['mix-blend-mode'] = 'normal';
var layer_10min_7 = new L.geoJson(json_10min_7, {
    attribution: '',
    dataVar: 'json_10min_7',
    layerName: 'layer_10min_7',
    pane: 'pane_10min_7',
    style: style_10min_7_0,
});
bounds_group.addLayer(layer_10min_7);
function style_5min_8_0() {
    return {
        pane: 'pane_5min_8',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.3,
        fillColor: 'rgba(208,0,0,1.0)',
    }
}
map.createPane('pane_5min_8');
map.getPane('pane_5min_8').style.zIndex = 408;
map.getPane('pane_5min_8').style['mix-blend-mode'] = 'normal';
var layer_5min_8 = new L.geoJson(json_5min_8, {
    attribution: '',
    dataVar: 'json_5min_8',
    layerName: 'layer_5min_8',
    pane: 'pane_5min_8',
    style: style_5min_8_0,
});
bounds_group.addLayer(layer_5min_8);
function pop_Waterverbindingen_9(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['OPERATOR'] !== null ? autolinker.link(feature.properties['OPERATOR'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PUBLICCODE'] !== null ? autolinker.link(feature.properties['PUBLICCODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NAME'] !== null ? autolinker.link(feature.properties['NAME'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_Waterverbindingen_9_0() {
    return {
        pane: 'pane_Waterverbindingen_9',
        opacity: 1,
        color: 'rgba(49,70,187,1.0)',
        dashArray: '8',
        lineCap: 'round',
        lineJoin: 'round',
        weight: 3.0,
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_Waterverbindingen_9');
map.getPane('pane_Waterverbindingen_9').style.zIndex = 409;
map.getPane('pane_Waterverbindingen_9').style['mix-blend-mode'] = 'normal';
var layer_Waterverbindingen_9 = new L.geoJson(json_Waterverbindingen_9, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Waterverbindingen_9',
    layerName: 'layer_Waterverbindingen_9',
    pane: 'pane_Waterverbindingen_9',
    onEachFeature: pop_Waterverbindingen_9,
    style: style_Waterverbindingen_9_0,
});
bounds_group.addLayer(layer_Waterverbindingen_9);
function pop_Waterbushaltesenoversteken_10(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['operator'] !== null ? autolinker.link(feature.properties['operator'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['network'] !== null ? autolinker.link(feature.properties['network'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_Waterbushaltesenoversteken_10_0() {
    return {
        pane: 'pane_Waterbushaltesenoversteken_10',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/Waterbushaltesenoversteken_10.svg',
    iconSize: [40, 40]
}),
        interactive: true,
    }
}
map.createPane('pane_Waterbushaltesenoversteken_10');
map.getPane('pane_Waterbushaltesenoversteken_10').style.zIndex = 410;
map.getPane('pane_Waterbushaltesenoversteken_10').style['mix-blend-mode'] = 'normal';
var layer_Waterbushaltesenoversteken_10 = new L.geoJson(json_Waterbushaltesenoversteken_10, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Waterbushaltesenoversteken_10',
    layerName: 'layer_Waterbushaltesenoversteken_10',
    pane: 'pane_Waterbushaltesenoversteken_10',
    onEachFeature: pop_Waterbushaltesenoversteken_10,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Waterbushaltesenoversteken_10_0(feature));
    },
});
bounds_group.addLayer(layer_Waterbushaltesenoversteken_10);
function style_15min_11_0() {
    return {
        pane: 'pane_15min_11',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.3,
        fillColor: 'rgba(255,255,1,1.0)',
    }
}
map.createPane('pane_15min_11');
map.getPane('pane_15min_11').style.zIndex = 411;
map.getPane('pane_15min_11').style['mix-blend-mode'] = 'normal';
var layer_15min_11 = new L.geoJson(json_15min_11, {
    attribution: '',
    dataVar: 'json_15min_11',
    layerName: 'layer_15min_11',
    pane: 'pane_15min_11',
    style: style_15min_11_0,
});
bounds_group.addLayer(layer_15min_11);
function style_10min_12_0() {
    return {
        pane: 'pane_10min_12',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.3,
        fillColor: 'rgba(255,163,43,1.0)',
    }
}
map.createPane('pane_10min_12');
map.getPane('pane_10min_12').style.zIndex = 412;
map.getPane('pane_10min_12').style['mix-blend-mode'] = 'normal';
var layer_10min_12 = new L.geoJson(json_10min_12, {
    attribution: '',
    dataVar: 'json_10min_12',
    layerName: 'layer_10min_12',
    pane: 'pane_10min_12',
    style: style_10min_12_0,
});
bounds_group.addLayer(layer_10min_12);
function style_5min_13_0() {
    return {
        pane: 'pane_5min_13',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.3,
        fillColor: 'rgba(208,0,0,1.0)',
    }
}
map.createPane('pane_5min_13');
map.getPane('pane_5min_13').style.zIndex = 413;
map.getPane('pane_5min_13').style['mix-blend-mode'] = 'normal';
var layer_5min_13 = new L.geoJson(json_5min_13, {
    attribution: '',
    dataVar: 'json_5min_13',
    layerName: 'layer_5min_13',
    pane: 'pane_5min_13',
    style: style_5min_13_0,
});
bounds_group.addLayer(layer_5min_13);
function style_15min_14_0() {
    return {
        pane: 'pane_15min_14',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.3,
        fillColor: 'rgba(255,255,1,1.0)',
    }
}
map.createPane('pane_15min_14');
map.getPane('pane_15min_14').style.zIndex = 414;
map.getPane('pane_15min_14').style['mix-blend-mode'] = 'normal';
var layer_15min_14 = new L.geoJson(json_15min_14, {
    attribution: '',
    dataVar: 'json_15min_14',
    layerName: 'layer_15min_14',
    pane: 'pane_15min_14',
    style: style_15min_14_0,
});
bounds_group.addLayer(layer_15min_14);

function style_10min_15_0() {
    return {
        pane: 'pane_10min_15',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.3,
        fillColor: 'rgba(255,163,43,1.0)',
    }
}
map.createPane('pane_10min_15');
map.getPane('pane_10min_15').style.zIndex = 415;
map.getPane('pane_10min_15').style['mix-blend-mode'] = 'normal';
var layer_10min_15 = new L.geoJson(json_10min_15, {
    attribution: '',
    dataVar: 'json_10min_15',
    layerName: 'layer_10min_15',
    pane: 'pane_10min_15',
    style: style_10min_15_0,
});
bounds_group.addLayer(layer_10min_15);

function style_5min_16_0() {
    return {
        pane: 'pane_5min_16',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.3,
        fillColor: 'rgba(208,0,0,1.0)',
    }
}
map.createPane('pane_5min_16');
map.getPane('pane_5min_16').style.zIndex = 416;
map.getPane('pane_5min_16').style['mix-blend-mode'] = 'normal';
var layer_5min_16 = new L.geoJson(json_5min_16, {
    attribution: '',
    dataVar: 'json_5min_16',
    layerName: 'layer_5min_16',
    pane: 'pane_5min_16',
    style: style_5min_16_0,
});
bounds_group.addLayer(layer_5min_16);
function pop_NSstations_17(feature, layer) {
    var popupContent = '<table>\
                <td colspan="2">' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_NSstations_17_0() {
    return {
        pane: 'pane_NSstations_17',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/NSstations_17.svg',
    iconSize: [40, 40]
}),
        interactive: true,
    }
}
map.createPane('pane_NSstations_17');
map.getPane('pane_NSstations_17').style.zIndex = 417;
map.getPane('pane_NSstations_17').style['mix-blend-mode'] = 'normal';
var layer_NSstations_17 = new L.geoJson(json_NSstations_17, {
    attribution: '',
    interactive: true,
    dataVar: 'json_NSstations_17',
    layerName: 'layer_NSstations_17',
    pane: 'pane_NSstations_17',
    onEachFeature: pop_NSstations_17,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_NSstations_17_0(feature));
    },
});
bounds_group.addLayer(layer_NSstations_17);
function pop_MerwedeLingeLijn_18(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_MerwedeLingeLijn_18_0() {
    return {
        pane: 'pane_MerwedeLingeLijn_18',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/MerwedeLingeLijn_18.svg',
    iconSize: [40, 40]
}),
        interactive: true,
    }
}
map.createPane('pane_MerwedeLingeLijn_18');
map.getPane('pane_MerwedeLingeLijn_18').style.zIndex = 418;
map.getPane('pane_MerwedeLingeLijn_18').style['mix-blend-mode'] = 'normal';
var layer_MerwedeLingeLijn_18 = new L.geoJson(json_MerwedeLingeLijn_18, {
    attribution: '',
    interactive: true,
    dataVar: 'json_MerwedeLingeLijn_18',
    layerName: 'layer_MerwedeLingeLijn_18',
    pane: 'pane_MerwedeLingeLijn_18',
    onEachFeature: pop_MerwedeLingeLijn_18,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_MerwedeLingeLijn_18_0(feature));
    },
});
bounds_group.addLayer(layer_MerwedeLingeLijn_18);
function pop_Buslijnen_19(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['OPERATOR'] !== null ? autolinker.link(feature.properties['OPERATOR'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PUBLICCODE'] !== null ? autolinker.link(feature.properties['PUBLICCODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NAME'] !== null ? autolinker.link(feature.properties['NAME'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
        layer.setStyle({ color: 'red', weight: 3, opacity: 1 });
    });
    layer.on('popupclose', function(e) {
        layer.setStyle({ color: 'rgba(36, 170, 45, 1)', weight: 2, opacity: 0.4});
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_Buslijnen_19_0() {
    return {
        pane: 'pane_Buslijnen_19',
        opacity: 0.4,
        color: 'rgba(36, 170, 45, 1)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 2.0,
        fillOpacity: 0.3,
        interactive: true,
    }
}
map.createPane('pane_Buslijnen_19');
map.getPane('pane_Buslijnen_19').style.zIndex = 399;
map.getPane('pane_Buslijnen_19').style['mix-blend-mode'] = 'normal';
var layer_Buslijnen_19 = new L.geoJson(json_Buslijnen_19, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Buslijnen_19',
    layerName: 'layer_Buslijnen_19',
    pane: 'pane_Buslijnen_19',
    onEachFeature: pop_Buslijnen_19,
    style: style_Buslijnen_19_0,
});
bounds_group.addLayer(layer_Buslijnen_19);
function pop_Bibliotheken_20(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['addr:street'] !== null ? autolinker.link(feature.properties['addr:street'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_Bibliotheken_20_0() {
    return {
        pane: 'pane_Bibliotheken_20',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/Bibliotheken_20.svg',
    iconSize: [40, 40]
}),
        interactive: true,
    }
}
map.createPane('pane_Bibliotheken_20');
map.getPane('pane_Bibliotheken_20').style.zIndex = 420;
map.getPane('pane_Bibliotheken_20').style['mix-blend-mode'] = 'normal';
var layer_Bibliotheken_20 = new L.geoJson(json_Bibliotheken_20, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Bibliotheken_20',
    layerName: 'layer_Bibliotheken_20',
    pane: 'pane_Bibliotheken_20',
    onEachFeature: pop_Bibliotheken_20,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Bibliotheken_20_0(feature));
    },
});
bounds_group.addLayer(layer_Bibliotheken_20);
function pop_Bioscopen_21(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['addr:street'] !== null ? autolinker.link(feature.properties['addr:street'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_Bioscopen_21_0() {
    return {
        pane: 'pane_Bioscopen_21',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/Bioscopen_21.svg',
    iconSize: [40, 40]
}),
        interactive: true,
    }
}
map.createPane('pane_Bioscopen_21');
map.getPane('pane_Bioscopen_21').style.zIndex = 421;
map.getPane('pane_Bioscopen_21').style['mix-blend-mode'] = 'normal';
var layer_Bioscopen_21 = new L.geoJson(json_Bioscopen_21, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Bioscopen_21',
    layerName: 'layer_Bioscopen_21',
    pane: 'pane_Bioscopen_21',
    onEachFeature: pop_Bioscopen_21,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Bioscopen_21_0(feature));
    },
});
bounds_group.addLayer(layer_Bioscopen_21);
function pop_Theaters_22(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Naam'] !== null ? autolinker.link(feature.properties['Naam'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Adres'] !== null ? autolinker.link(feature.properties['Adres'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_Theaters_22_0() {
    return {
        pane: 'pane_Theaters_22',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/Theaters_22.svg',
    iconSize: [40, 40]
}),
        interactive: true,
    }
}
map.createPane('pane_Theaters_22');
map.getPane('pane_Theaters_22').style.zIndex = 422;
map.getPane('pane_Theaters_22').style['mix-blend-mode'] = 'normal';
var layer_Theaters_22 = new L.geoJson(json_Theaters_22, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Theaters_22',
    layerName: 'layer_Theaters_22',
    pane: 'pane_Theaters_22',
    onEachFeature: pop_Theaters_22,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Theaters_22_0(feature));
    },
});
bounds_group.addLayer(layer_Theaters_22);
function pop_Ziekenhuizenenpoliklinieken_23(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Naam'] !== null ? autolinker.link(feature.properties['Naam'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Adres'] !== null ? autolinker.link(feature.properties['Adres'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_Ziekenhuizenenpoliklinieken_23_0() {
    return {
        pane: 'pane_Ziekenhuizenenpoliklinieken_23',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/Ziekenhuizenenpoliklinieken_23.svg',
    iconSize: [40, 40]
}),
        interactive: true,
    }
}
map.createPane('pane_Ziekenhuizenenpoliklinieken_23');
map.getPane('pane_Ziekenhuizenenpoliklinieken_23').style.zIndex = 423;
map.getPane('pane_Ziekenhuizenenpoliklinieken_23').style['mix-blend-mode'] = 'normal';
var layer_Ziekenhuizenenpoliklinieken_23 = new L.geoJson(json_Ziekenhuizenenpoliklinieken_23, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Ziekenhuizenenpoliklinieken_23',
    layerName: 'layer_Ziekenhuizenenpoliklinieken_23',
    pane: 'pane_Ziekenhuizenenpoliklinieken_23',
    onEachFeature: pop_Ziekenhuizenenpoliklinieken_23,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Ziekenhuizenenpoliklinieken_23_0(feature));
    },
});
bounds_group.addLayer(layer_Ziekenhuizenenpoliklinieken_23);
function pop_Grotesportaccomodaties_24(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Naam'] !== null ? autolinker.link(feature.properties['Naam'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Sport'] !== null ? autolinker.link(feature.properties['Sport'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Adres'] !== null ? autolinker.link(feature.properties['Adres'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_Grotesportaccomodaties_24_0() {
    return {
        pane: 'pane_Grotesportaccomodaties_24',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/Grotesportaccomodaties_24.svg',
    iconSize: [40, 40]
}),
        interactive: true,
    }
}
map.createPane('pane_Grotesportaccomodaties_24');
map.getPane('pane_Grotesportaccomodaties_24').style.zIndex = 424;
map.getPane('pane_Grotesportaccomodaties_24').style['mix-blend-mode'] = 'normal';
var layer_Grotesportaccomodaties_24 = new L.geoJson(json_Grotesportaccomodaties_24, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Grotesportaccomodaties_24',
    layerName: 'layer_Grotesportaccomodaties_24',
    pane: 'pane_Grotesportaccomodaties_24',
    onEachFeature: pop_Grotesportaccomodaties_24,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Grotesportaccomodaties_24_0(feature));
    },
});
bounds_group.addLayer(layer_Grotesportaccomodaties_24);
function pop_Ijsbanenindooroutdoor_25(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Naam'] !== null ? autolinker.link(feature.properties['Naam'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Adres'] !== null ? autolinker.link(feature.properties['Adres'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_Ijsbanenindooroutdoor_25_0() {
    return {
        pane: 'pane_Ijsbanenindooroutdoor_25',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/Ijsbanenindooroutdoor_25.svg',
    iconSize: [40, 40]
}),
        interactive: true,
    }
}
map.createPane('pane_Ijsbanenindooroutdoor_25');
map.getPane('pane_Ijsbanenindooroutdoor_25').style.zIndex = 425;
map.getPane('pane_Ijsbanenindooroutdoor_25').style['mix-blend-mode'] = 'normal';
var layer_Ijsbanenindooroutdoor_25 = new L.geoJson(json_Ijsbanenindooroutdoor_25, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Ijsbanenindooroutdoor_25',
    layerName: 'layer_Ijsbanenindooroutdoor_25',
    pane: 'pane_Ijsbanenindooroutdoor_25',
    onEachFeature: pop_Ijsbanenindooroutdoor_25,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Ijsbanenindooroutdoor_25_0(feature));
    },
});
bounds_group.addLayer(layer_Ijsbanenindooroutdoor_25);
function pop_Zwemlocaties_26(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['Naam'] !== null ? autolinker.link(feature.properties['Naam'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Adres'] !== null ? autolinker.link(feature.properties['Adres'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_Zwemlocaties_26_0() {
    return {
        pane: 'pane_Zwemlocaties_26',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/Zwemlocaties_26.svg',
    iconSize: [40, 40]
}),
        interactive: true,
    }
}
map.createPane('pane_Zwemlocaties_26');
map.getPane('pane_Zwemlocaties_26').style.zIndex = 426;
map.getPane('pane_Zwemlocaties_26').style['mix-blend-mode'] = 'normal';
var layer_Zwemlocaties_26 = new L.geoJson(json_Zwemlocaties_26, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Zwemlocaties_26',
    layerName: 'layer_Zwemlocaties_26',
    pane: 'pane_Zwemlocaties_26',
    onEachFeature: pop_Zwemlocaties_26,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_Zwemlocaties_26_0(feature));
    },
});
bounds_group.addLayer(layer_Zwemlocaties_26);
function pop_MBO_27(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['INSTELLINGSNAAM'] !== null ? autolinker.link(feature.properties['INSTELLINGSNAAM'].toLocaleString()) : '') + '</td>\
            <tr>\
                <td colspan="2">' + (feature.properties['ADRES'] !== null ? autolinker.link(feature.properties['ADRES'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_MBO_27_0() {
    return {
        pane: 'pane_MBO_27',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/MBO_27.svg',
    iconSize: [40, 40]
}),
        interactive: true,
    }
}
map.createPane('pane_MBO_27');
map.getPane('pane_MBO_27').style.zIndex = 427;
map.getPane('pane_MBO_27').style['mix-blend-mode'] = 'normal';
var layer_MBO_27 = new L.geoJson(json_MBO_27, {
    attribution: '',
    interactive: true,
    dataVar: 'json_MBO_27',
    layerName: 'layer_MBO_27',
    pane: 'pane_MBO_27',
    onEachFeature: pop_MBO_27,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_MBO_27_0(feature));
    },
});
bounds_group.addLayer(layer_MBO_27);
function pop_HBOWO_28(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['INSTELLINGSNAAM'] !== null ? autolinker.link(feature.properties['INSTELLINGSNAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ADRES'] !== null ? autolinker.link(feature.properties['ADRES'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_HBOWO_28_0() {
    return {
        pane: 'pane_HBOWO_28',
rotationAngle: 0.0,
rotationOrigin: 'center center',
icon: L.icon({
    iconUrl: 'markers/HBOWO_28.svg',
    iconSize: [40, 40]
}),
        interactive: true,
    }
}
map.createPane('pane_HBOWO_28');
map.getPane('pane_HBOWO_28').style.zIndex = 428;
map.getPane('pane_HBOWO_28').style['mix-blend-mode'] = 'normal';
var layer_HBOWO_28 = new L.geoJson(json_HBOWO_28, {
    attribution: '',
    interactive: true,
    dataVar: 'json_HBOWO_28',
    layerName: 'layer_HBOWO_28',
    pane: 'pane_HBOWO_28',
    onEachFeature: pop_HBOWO_28,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.marker(latlng, style_HBOWO_28_0(feature));
    },
});
bounds_group.addLayer(layer_HBOWO_28);
setBounds();


var layer_labels_29 = L.tileLayer('https://{s}.basemaps.cartocdn.com/{style}/{z}/{x}/{y}{scale}.png', {
    pane: 'pane_labels_29',
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19,
    style: 'rastertiles/voyager',
    scale: '@2x'
});
map.createPane('pane_labels_29');
map.getPane('pane_labels_29').style.zIndex = 301;
map.addLayer(layer_labels_29);
var layer_nolabels_30= L.tileLayer('https://{s}.basemaps.cartocdn.com/{style}/{z}/{x}/{y}{scale}.png', {
    pane: 'pane_nolabels_30',
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19,
    style: 'rastertiles/voyager_nolabels',
    scale: '@2x'
});
map.createPane('pane_nolabels_30');
map.getPane('pane_nolabels_30').style.zIndex = 302;
function createLegendItem(url, name) {
    return `<img src='${url}'/> <span class='my-layer-item'>${name}</span>`;
}
var layerLegendlabels = {
    "Buurten": createLegendItem('legend/Buurten_0.png', 'Buurten'),
    "Drechtsteden": createLegendItem('legend/Drechtsteden_2.png', 'Drechtsteden'),
    "Waterbus fietsen 15min": createLegendItem('legend/15min_3.png', '15 min'),
    "Waterbus fietsen 10min": createLegendItem('legend/10min_4.png', '10 min'),
    "Waterbus fietsen 5min": createLegendItem('legend/5min_5.png', '5 min'),
    "Waterbus lopen 15min": createLegendItem('legend/15min_6.png', '15 min'),
    "Waterbus lopen 10min": createLegendItem('legend/10min_7.png', '10 min'),
    "Waterbus lopen 5min": createLegendItem('legend/5min_8.png', '5 min'),
    "Waterverbindingen": createLegendItem('legend/Waterverbindingen_9.png', 'Waterverbindingen'),
    "Waterbushaltes en oversteken": createLegendItem('legend/Waterbushaltesenoversteken_10.png', 'Waterbushaltes en oversteken'),
    "Trein fietsen 15min": createLegendItem('legend/15min_11.png', '15 min'),
    "Trein fietsen 10min": createLegendItem('legend/10min_12.png', '10 min'),
    "Trein fietsen 5min": createLegendItem('legend/5min_13.png', '5 min'),
    "Trein lopen 15min": createLegendItem('legend/15min_14.png', '15 min'),
    "Trein lopen 10min": createLegendItem('legend/10min_15.png', '10 min'),
    "Trein lopen 5min": createLegendItem('legend/5min_16.png', '5 min'),
    "NS stations": createLegendItem('legend/NSstations_17.png', 'NS stations'),
    "MerwedeLingeLijn": createLegendItem('legend/MerwedeLingeLijn_18.png', 'MerwedeLingeLijn'),
    "Buslijnen": createLegendItem('legend/Buslijnen_19.png', 'Buslijnen'),
    "Bibliotheken": createLegendItem('legend/Bibliotheken_20.png', 'Bibliotheken'),
    "Bioscopen": createLegendItem('legend/Bioscopen_21.png', 'Bioscopen'),
    "Theaters": createLegendItem('legend/Theaters_22.png', 'Theaters'),
    "Ziekenhuizen en poliklinieken": createLegendItem('legend/Ziekenhuizenenpoliklinieken_23.png', 'Ziekenhuizen en poliklinieken'),
    "Grote sportaccomodaties": createLegendItem('legend/Grotesportaccomodaties_24.png', 'Grote sportaccomodaties'),
    "Ijsbanen indoor outdoor": createLegendItem('legend/Ijsbanenindooroutdoor_25.png', 'IJsbanen'),
    "Zwemlocaties": createLegendItem('legend/Zwemlocaties_26.png', 'Zwemlocaties'),
    "MBO": createLegendItem('legend/MBO_27.png', 'MBO'),
    "HBO/WO": createLegendItem('legend/HBOWO_28.png', 'HBO/WO')
};
var baseMaps =  {
    label: "KAARTEN",
    children: [{
    label: "Labels",
    layer: layer_labels_29
},
{
    label: "Geen labels",
    layer: layer_nolabels_30
}]
};
var overlaysTree = [
    {
        label: 'VOORZIENINGEN',
        selectAllCheckbox: true,
        children: [
            {
                label: 'Onderwijs',
                selectAllCheckbox: true,
                children: [
                    { label: layerLegendlabels['HBO/WO'], layer: layer_HBOWO_28 },
                    { label: layerLegendlabels['MBO'], layer: layer_MBO_27 }
                ]
            },
            {
                label: 'Gezondheid',
                selectAllCheckbox: true,
                children: [
                    { label: layerLegendlabels['Zwemlocaties'], layer: layer_Zwemlocaties_26 },
                    { label: layerLegendlabels['Ijsbanen indoor outdoor'], layer: layer_Ijsbanenindooroutdoor_25 },
                    { label: layerLegendlabels['Grote sportaccomodaties'], layer: layer_Grotesportaccomodaties_24 },
                    { label: layerLegendlabels['Ziekenhuizen en poliklinieken'], layer: layer_Ziekenhuizenenpoliklinieken_23 }
                ]
            },
            {
                label: 'Cultureel',
                selectAllCheckbox: true,
                children: [
                    { label: layerLegendlabels['Theaters'], layer: layer_Theaters_22 },
                    { label: layerLegendlabels['Bioscopen'], layer: layer_Bioscopen_21 },
                    { label: layerLegendlabels['Bibliotheken'], layer: layer_Bibliotheken_20 }
                ]
            }]
    },
    {
        label: 'OPENBAAR VERVOER',
        selectAllCheckbox: true,
        children: [
            { label: layerLegendlabels['Buslijnen'], layer: layer_Buslijnen_19 },
            { label: layerLegendlabels['MerwedeLingeLijn'], layer: layer_MerwedeLingeLijn_18 },
            { label: layerLegendlabels['NS stations'], layer: layer_NSstations_17 },
            {
                label: 'Reistijd vanaf treinstations',
                selectAllCheckbox: true,
                children: [
                    {
                        label: 'Lopen',
                        selectAllCheckbox: true,
                        children: [
                            { label: layerLegendlabels['Trein lopen 5min'], layer: layer_5min_16 },
                            { label: layerLegendlabels['Trein lopen 10min'], layer: layer_10min_15 },
                            { label: layerLegendlabels['Trein lopen 15min'], layer: layer_15min_14 }
                        ]
                    },
                    {
                        label: 'Fietsen',
                        selectAllCheckbox: true,
                        children: [
                            { label: layerLegendlabels['Trein fietsen 5min'], layer: layer_5min_13 },
                            { label: layerLegendlabels['Trein fietsen 10min'], layer: layer_10min_12 },
                            { label: layerLegendlabels['Trein fietsen 15min'], layer: layer_15min_11 }
                        ]
                    }
                ]
            },
            { label: layerLegendlabels['Waterbushaltes en oversteken'], layer: layer_Waterbushaltesenoversteken_10 },
            { label: layerLegendlabels['Waterverbindingen'], layer: layer_Waterverbindingen_9 },
            {
                label: 'Reistijd vanaf waterbus/taxi',
                selectAllCheckbox: true,
                children: [
                    {
                        label: 'Lopen',
                        selectAllCheckbox: true,
                        children: [
                            { label: layerLegendlabels['Waterbus lopen 5min'], layer: layer_5min_8 },
                            { label: layerLegendlabels['Waterbus lopen 10min'], layer: layer_10min_7 },
                            { label: layerLegendlabels['Waterbus lopen 15min'], layer: layer_15min_6 }
                        ]
                    },
                    {
                        label: 'Fietsen',
                        selectAllCheckbox: true,
                        children: [
                            { label: layerLegendlabels['Waterbus fietsen 5min'], layer: layer_5min_5 },
                            { label: layerLegendlabels['Waterbus fietsen 10min'], layer: layer_10min_4 },
                            { label: layerLegendlabels['Waterbus fietsen 15min'], layer: layer_15min_3 }
                        ]
                    }
                ]
            }
        ]
    },
    // Verwijderd vanwege wensen Bram
    // {
    //     label: 'GEBIEDSINDELINGEN',
    //     selectAllCheckbox: true,
    //     children: [
    //         { label: layerLegendlabels['Buurten'], layer: layer_Buurten_0 },
    //         { label: layerLegendlabels['Drechtsteden'], layer: layer_Drechtsteden_2 }
    //     ]
    // }
];

// Add title and logo
var titleContainer = L.DomUtil.create('div', 'title-container');
titleContainer.style.display = 'flex';
titleContainer.style.justifyContent = 'center';
titleContainer.style.alignItems = 'center';
titleContainer.style.padding = '10px';
titleContainer.style.backgroundColor = '';
titleContainer.style.opacity = '1';
titleContainer.style.position = 'relative';

var logo = L.DomUtil.create('img', '', titleContainer);
logo.src = 'images/logo.png';
logo.style.height = '40px';
logo.style.position = 'absolute';
logo.style.left = '10px';
logo.style.top = '10px';

var title = L.DomUtil.create('h1', '', titleContainer);
title.innerHTML = 'VOORZIENINGENMONITOR DRECHTSTEDEN';
title.style.color = '#144673';
title.style.fontFamily = '"Roboto Condensed", sans-serif';
title.style.fontSize = '32px';
title.style.fontWeight = '700';
title.style.margin = '0';

var mapContainer = document.getElementById('map');
mapContainer.parentNode.insertBefore(titleContainer, mapContainer);

// Adjust the map container height
mapContainer.style.height = `calc(100% - ${titleContainer.offsetHeight}px)`;

// Adjust the max height for the control layers tree
var layerControl = L.control.layers.tree(baseMaps, overlaysTree, {
    collapsed: false
}).addTo(map);
// Remove the a.leaflet-control-layers-toggle flex item
var layersControlContainer = document.querySelector('.leaflet-control-layers');
if (layersControlContainer) {
    var toggleButton = layersControlContainer.querySelector('.leaflet-control-layers-toggle');
    if (toggleButton) {
        layersControlContainer.removeChild(toggleButton);
    }
}
L.control.scale({imperial: false}).addTo(map);
map.invalidateSize();

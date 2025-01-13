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
map.addLayer(layer_Buurten_0);

map.createPane('pane_OpenStreetMap_1');
map.getPane('pane_OpenStreetMap_1').style.zIndex = 400;
var layer_OpenStreetMap_1 = L.tileLayer('http://tile.osm.org/{z}/{x}/{y}.png', {
    pane: 'pane_OpenStreetMap_1',
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 19
});
layer_OpenStreetMap_1;
// map.addLayer(layer_OpenStreetMap_1);

function pop_Drechtsteden_2(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['identificatie'] !== null ? autolinker.link(feature.properties['identificatie'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['naam'] !== null ? autolinker.link(feature.properties['naam'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['code'] !== null ? autolinker.link(feature.properties['code'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ligtInProvincieCode'] !== null ? autolinker.link(feature.properties['ligtInProvincieCode'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ligtInProvincieNaam'] !== null ? autolinker.link(feature.properties['ligtInProvincieNaam'].toLocaleString()) : '') + '</td>\
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
        interactive: true,
    }
}
map.createPane('pane_Drechtsteden_2');
map.getPane('pane_Drechtsteden_2').style.zIndex = 402;
map.getPane('pane_Drechtsteden_2').style['mix-blend-mode'] = 'normal';
var layer_Drechtsteden_2 = new L.geoJson(json_Drechtsteden_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Drechtsteden_2',
    layerName: 'layer_Drechtsteden_2',
    pane: 'pane_Drechtsteden_2',
    onEachFeature: pop_Drechtsteden_2,
    style: style_Drechtsteden_2_0,
});
bounds_group.addLayer(layer_Drechtsteden_2);
map.addLayer(layer_Drechtsteden_2);
function pop_15min_3(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LON'] !== null ? autolinker.link(feature.properties['CENTER_LON'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LAT'] !== null ? autolinker.link(feature.properties['CENTER_LAT'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MINS'] !== null ? autolinker.link(feature.properties['AA_MINS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MODE'] !== null ? autolinker.link(feature.properties['AA_MODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TOTAL_POP'] !== null ? autolinker.link(feature.properties['TOTAL_POP'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

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
        interactive: true,
    }
}
map.createPane('pane_15min_3');
map.getPane('pane_15min_3').style.zIndex = 403;
map.getPane('pane_15min_3').style['mix-blend-mode'] = 'normal';
var layer_15min_3 = new L.geoJson(json_15min_3, {
    attribution: '',
    interactive: true,
    dataVar: 'json_15min_3',
    layerName: 'layer_15min_3',
    pane: 'pane_15min_3',
    onEachFeature: pop_15min_3,
    style: style_15min_3_0,
});
bounds_group.addLayer(layer_15min_3);
// map.addLayer(layer_15min_3);
function pop_10min_4(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LON'] !== null ? autolinker.link(feature.properties['CENTER_LON'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LAT'] !== null ? autolinker.link(feature.properties['CENTER_LAT'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MINS'] !== null ? autolinker.link(feature.properties['AA_MINS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MODE'] !== null ? autolinker.link(feature.properties['AA_MODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TOTAL_POP'] !== null ? autolinker.link(feature.properties['TOTAL_POP'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

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
        interactive: true,
    }
}
map.createPane('pane_10min_4');
map.getPane('pane_10min_4').style.zIndex = 404;
map.getPane('pane_10min_4').style['mix-blend-mode'] = 'normal';
var layer_10min_4 = new L.geoJson(json_10min_4, {
    attribution: '',
    interactive: true,
    dataVar: 'json_10min_4',
    layerName: 'layer_10min_4',
    pane: 'pane_10min_4',
    onEachFeature: pop_10min_4,
    style: style_10min_4_0,
});
bounds_group.addLayer(layer_10min_4);
// map.addLayer(layer_10min_4);
function pop_5min_5(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LON'] !== null ? autolinker.link(feature.properties['CENTER_LON'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LAT'] !== null ? autolinker.link(feature.properties['CENTER_LAT'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MINS'] !== null ? autolinker.link(feature.properties['AA_MINS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MODE'] !== null ? autolinker.link(feature.properties['AA_MODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TOTAL_POP'] !== null ? autolinker.link(feature.properties['TOTAL_POP'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

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
        interactive: true,
    }
}
map.createPane('pane_5min_5');
map.getPane('pane_5min_5').style.zIndex = 405;
map.getPane('pane_5min_5').style['mix-blend-mode'] = 'normal';
var layer_5min_5 = new L.geoJson(json_5min_5, {
    attribution: '',
    interactive: true,
    dataVar: 'json_5min_5',
    layerName: 'layer_5min_5',
    pane: 'pane_5min_5',
    onEachFeature: pop_5min_5,
    style: style_5min_5_0,
});
bounds_group.addLayer(layer_5min_5);
// map.addLayer(layer_5min_5);
function pop_15min_6(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LON'] !== null ? autolinker.link(feature.properties['CENTER_LON'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LAT'] !== null ? autolinker.link(feature.properties['CENTER_LAT'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MINS'] !== null ? autolinker.link(feature.properties['AA_MINS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MODE'] !== null ? autolinker.link(feature.properties['AA_MODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TOTAL_POP'] !== null ? autolinker.link(feature.properties['TOTAL_POP'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

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
        interactive: true,
    }
}
map.createPane('pane_15min_6');
map.getPane('pane_15min_6').style.zIndex = 406;
map.getPane('pane_15min_6').style['mix-blend-mode'] = 'normal';
var layer_15min_6 = new L.geoJson(json_15min_6, {
    attribution: '',
    interactive: true,
    dataVar: 'json_15min_6',
    layerName: 'layer_15min_6',
    pane: 'pane_15min_6',
    onEachFeature: pop_15min_6,
    style: style_15min_6_0,
});
bounds_group.addLayer(layer_15min_6);
// map.addLayer(layer_15min_6);
function pop_10min_7(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LON'] !== null ? autolinker.link(feature.properties['CENTER_LON'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LAT'] !== null ? autolinker.link(feature.properties['CENTER_LAT'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MINS'] !== null ? autolinker.link(feature.properties['AA_MINS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MODE'] !== null ? autolinker.link(feature.properties['AA_MODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TOTAL_POP'] !== null ? autolinker.link(feature.properties['TOTAL_POP'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

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
        interactive: true,
    }
}
map.createPane('pane_10min_7');
map.getPane('pane_10min_7').style.zIndex = 407;
map.getPane('pane_10min_7').style['mix-blend-mode'] = 'normal';
var layer_10min_7 = new L.geoJson(json_10min_7, {
    attribution: '',
    interactive: true,
    dataVar: 'json_10min_7',
    layerName: 'layer_10min_7',
    pane: 'pane_10min_7',
    onEachFeature: pop_10min_7,
    style: style_10min_7_0,
});
bounds_group.addLayer(layer_10min_7);
// map.addLayer(layer_10min_7);
function pop_5min_8(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LON'] !== null ? autolinker.link(feature.properties['CENTER_LON'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LAT'] !== null ? autolinker.link(feature.properties['CENTER_LAT'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MINS'] !== null ? autolinker.link(feature.properties['AA_MINS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MODE'] !== null ? autolinker.link(feature.properties['AA_MODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TOTAL_POP'] !== null ? autolinker.link(feature.properties['TOTAL_POP'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

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
        interactive: true,
    }
}
map.createPane('pane_5min_8');
map.getPane('pane_5min_8').style.zIndex = 408;
map.getPane('pane_5min_8').style['mix-blend-mode'] = 'normal';
var layer_5min_8 = new L.geoJson(json_5min_8, {
    attribution: '',
    interactive: true,
    dataVar: 'json_5min_8',
    layerName: 'layer_5min_8',
    pane: 'pane_5min_8',
    onEachFeature: pop_5min_8,
    style: style_5min_8_0,
});
bounds_group.addLayer(layer_5min_8);
// map.addLayer(layer_5min_8);
function pop_Waterverbindingen_9(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['ROUTEREF'] !== null ? autolinker.link(feature.properties['ROUTEREF'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['LINE_OPERA'] !== null ? autolinker.link(feature.properties['LINE_OPERA'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TRANSPORTM'] !== null ? autolinker.link(feature.properties['TRANSPORTM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['OPERATOR'] !== null ? autolinker.link(feature.properties['OPERATOR'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PUBLICCODE'] !== null ? autolinker.link(feature.properties['PUBLICCODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NAME'] !== null ? autolinker.link(feature.properties['NAME'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['MONDAY'] !== null ? autolinker.link(feature.properties['MONDAY'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TUESDAY'] !== null ? autolinker.link(feature.properties['TUESDAY'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['WEDNESDAY'] !== null ? autolinker.link(feature.properties['WEDNESDAY'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['THURSDAY'] !== null ? autolinker.link(feature.properties['THURSDAY'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['FRIDAY'] !== null ? autolinker.link(feature.properties['FRIDAY'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['SATURDAY'] !== null ? autolinker.link(feature.properties['SATURDAY'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['SUNDAY'] !== null ? autolinker.link(feature.properties['SUNDAY'].toLocaleString()) : '') + '</td>\
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
// map.addLayer(layer_Waterverbindingen_9);
function pop_Waterbushaltesenoversteken_10(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['full_id'] !== null ? autolinker.link(feature.properties['full_id'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['osm_id'] !== null ? autolinker.link(feature.properties['osm_id'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['osm_type'] !== null ? autolinker.link(feature.properties['osm_type'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['motor_vehicle'] !== null ? autolinker.link(feature.properties['motor_vehicle'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['horse'] !== null ? autolinker.link(feature.properties['horse'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['foot'] !== null ? autolinker.link(feature.properties['foot'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['contact:website'] !== null ? autolinker.link(feature.properties['contact:website'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['contact:facebook'] !== null ? autolinker.link(feature.properties['contact:facebook'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['canoe'] !== null ? autolinker.link(feature.properties['canoe'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ref'] !== null ? autolinker.link(feature.properties['ref'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['contact:phone'] !== null ? autolinker.link(feature.properties['contact:phone'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['bicycle'] !== null ? autolinker.link(feature.properties['bicycle'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['internet_access'] !== null ? autolinker.link(feature.properties['internet_access'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['description'] !== null ? autolinker.link(feature.properties['description'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['toilets:wheelchair'] !== null ? autolinker.link(feature.properties['toilets:wheelchair'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['url'] !== null ? autolinker.link(feature.properties['url'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['public_transport:version'] !== null ? autolinker.link(feature.properties['public_transport:version'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['rcn_ref'] !== null ? autolinker.link(feature.properties['rcn_ref'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['layer'] !== null ? autolinker.link(feature.properties['layer'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['expected_rcn_route_relations'] !== null ? autolinker.link(feature.properties['expected_rcn_route_relations'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['rwn_ref'] !== null ? autolinker.link(feature.properties['rwn_ref'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['operator:rwn'] !== null ? autolinker.link(feature.properties['operator:rwn'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['network:type'] !== null ? autolinker.link(feature.properties['network:type'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['expected_rwn_route_relations'] !== null ? autolinker.link(feature.properties['expected_rwn_route_relations'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ref:IFOPT'] !== null ? autolinker.link(feature.properties['ref:IFOPT'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['owner'] !== null ? autolinker.link(feature.properties['owner'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['route_ref'] !== null ? autolinker.link(feature.properties['route_ref'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['cargo'] !== null ? autolinker.link(feature.properties['cargo'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['opening_hours'] !== null ? autolinker.link(feature.properties['opening_hours'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['operator:wikidata'] !== null ? autolinker.link(feature.properties['operator:wikidata'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['wheelchair'] !== null ? autolinker.link(feature.properties['wheelchair'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['website'] !== null ? autolinker.link(feature.properties['website'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['operator'] !== null ? autolinker.link(feature.properties['operator'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['network:wikidata'] !== null ? autolinker.link(feature.properties['network:wikidata'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['network'] !== null ? autolinker.link(feature.properties['network'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['public_transport'] !== null ? autolinker.link(feature.properties['public_transport'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ferry'] !== null ? autolinker.link(feature.properties['ferry'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['amenity'] !== null ? autolinker.link(feature.properties['amenity'].toLocaleString()) : '') + '</td>\
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
// map.addLayer(layer_Waterbushaltesenoversteken_10);
function pop_15min_11(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LON'] !== null ? autolinker.link(feature.properties['CENTER_LON'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LAT'] !== null ? autolinker.link(feature.properties['CENTER_LAT'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MINS'] !== null ? autolinker.link(feature.properties['AA_MINS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MODE'] !== null ? autolinker.link(feature.properties['AA_MODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TOTAL_POP'] !== null ? autolinker.link(feature.properties['TOTAL_POP'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['layer'] !== null ? autolinker.link(feature.properties['layer'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['path'] !== null ? autolinker.link(feature.properties['path'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Minuten'] !== null ? autolinker.link(feature.properties['Minuten'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

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
        interactive: true,
    }
}
map.createPane('pane_15min_11');
map.getPane('pane_15min_11').style.zIndex = 411;
map.getPane('pane_15min_11').style['mix-blend-mode'] = 'normal';
var layer_15min_11 = new L.geoJson(json_15min_11, {
    attribution: '',
    interactive: true,
    dataVar: 'json_15min_11',
    layerName: 'layer_15min_11',
    pane: 'pane_15min_11',
    onEachFeature: pop_15min_11,
    style: style_15min_11_0,
});
bounds_group.addLayer(layer_15min_11);
// map.addLayer(layer_15min_11);
function pop_10min_12(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LON'] !== null ? autolinker.link(feature.properties['CENTER_LON'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LAT'] !== null ? autolinker.link(feature.properties['CENTER_LAT'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MINS'] !== null ? autolinker.link(feature.properties['AA_MINS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MODE'] !== null ? autolinker.link(feature.properties['AA_MODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TOTAL_POP'] !== null ? autolinker.link(feature.properties['TOTAL_POP'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['layer'] !== null ? autolinker.link(feature.properties['layer'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['path'] !== null ? autolinker.link(feature.properties['path'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Minuten'] !== null ? autolinker.link(feature.properties['Minuten'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

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
        interactive: true,
    }
}
map.createPane('pane_10min_12');
map.getPane('pane_10min_12').style.zIndex = 412;
map.getPane('pane_10min_12').style['mix-blend-mode'] = 'normal';
var layer_10min_12 = new L.geoJson(json_10min_12, {
    attribution: '',
    interactive: true,
    dataVar: 'json_10min_12',
    layerName: 'layer_10min_12',
    pane: 'pane_10min_12',
    onEachFeature: pop_10min_12,
    style: style_10min_12_0,
});
bounds_group.addLayer(layer_10min_12);
// map.addLayer(layer_10min_12);
function pop_5min_13(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LON'] !== null ? autolinker.link(feature.properties['CENTER_LON'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LAT'] !== null ? autolinker.link(feature.properties['CENTER_LAT'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MINS'] !== null ? autolinker.link(feature.properties['AA_MINS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MODE'] !== null ? autolinker.link(feature.properties['AA_MODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TOTAL_POP'] !== null ? autolinker.link(feature.properties['TOTAL_POP'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['layer'] !== null ? autolinker.link(feature.properties['layer'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['path'] !== null ? autolinker.link(feature.properties['path'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Minuten '] !== null ? autolinker.link(feature.properties['Minuten '].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

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
        interactive: true,
    }
}
map.createPane('pane_5min_13');
map.getPane('pane_5min_13').style.zIndex = 413;
map.getPane('pane_5min_13').style['mix-blend-mode'] = 'normal';
var layer_5min_13 = new L.geoJson(json_5min_13, {
    attribution: '',
    interactive: true,
    dataVar: 'json_5min_13',
    layerName: 'layer_5min_13',
    pane: 'pane_5min_13',
    onEachFeature: pop_5min_13,
    style: style_5min_13_0,
});
bounds_group.addLayer(layer_5min_13);
// map.addLayer(layer_5min_13);
function pop_15min_14(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LON'] !== null ? autolinker.link(feature.properties['CENTER_LON'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LAT'] !== null ? autolinker.link(feature.properties['CENTER_LAT'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MINS'] !== null ? autolinker.link(feature.properties['AA_MINS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MODE'] !== null ? autolinker.link(feature.properties['AA_MODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TOTAL_POP'] !== null ? autolinker.link(feature.properties['TOTAL_POP'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['layer'] !== null ? autolinker.link(feature.properties['layer'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['path'] !== null ? autolinker.link(feature.properties['path'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Minuten'] !== null ? autolinker.link(feature.properties['Minuten'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

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
        interactive: true,
    }
}
map.createPane('pane_15min_14');
map.getPane('pane_15min_14').style.zIndex = 414;
map.getPane('pane_15min_14').style['mix-blend-mode'] = 'normal';
var layer_15min_14 = new L.geoJson(json_15min_14, {
    attribution: '',
    interactive: true,
    dataVar: 'json_15min_14',
    layerName: 'layer_15min_14',
    pane: 'pane_15min_14',
    onEachFeature: pop_15min_14,
    style: style_15min_14_0,
});
bounds_group.addLayer(layer_15min_14);
// map.addLayer(layer_15min_14);
function pop_10min_15(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LON'] !== null ? autolinker.link(feature.properties['CENTER_LON'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LAT'] !== null ? autolinker.link(feature.properties['CENTER_LAT'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MINS'] !== null ? autolinker.link(feature.properties['AA_MINS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MODE'] !== null ? autolinker.link(feature.properties['AA_MODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TOTAL_POP'] !== null ? autolinker.link(feature.properties['TOTAL_POP'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['layer'] !== null ? autolinker.link(feature.properties['layer'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['path'] !== null ? autolinker.link(feature.properties['path'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Minuten'] !== null ? autolinker.link(feature.properties['Minuten'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

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
        interactive: true,
    }
}
map.createPane('pane_10min_15');
map.getPane('pane_10min_15').style.zIndex = 415;
map.getPane('pane_10min_15').style['mix-blend-mode'] = 'normal';
var layer_10min_15 = new L.geoJson(json_10min_15, {
    attribution: '',
    interactive: true,
    dataVar: 'json_10min_15',
    layerName: 'layer_10min_15',
    pane: 'pane_10min_15',
    onEachFeature: pop_10min_15,
    style: style_10min_15_0,
});
bounds_group.addLayer(layer_10min_15);
// map.addLayer(layer_10min_15);
function pop_5min_16(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['ID'] !== null ? autolinker.link(feature.properties['ID'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LON'] !== null ? autolinker.link(feature.properties['CENTER_LON'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['CENTER_LAT'] !== null ? autolinker.link(feature.properties['CENTER_LAT'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MINS'] !== null ? autolinker.link(feature.properties['AA_MINS'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AA_MODE'] !== null ? autolinker.link(feature.properties['AA_MODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TOTAL_POP'] !== null ? autolinker.link(feature.properties['TOTAL_POP'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['layer'] !== null ? autolinker.link(feature.properties['layer'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['path'] !== null ? autolinker.link(feature.properties['path'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Minuten'] !== null ? autolinker.link(feature.properties['Minuten'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

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
        interactive: true,
    }
}
map.createPane('pane_5min_16');
map.getPane('pane_5min_16').style.zIndex = 416;
map.getPane('pane_5min_16').style['mix-blend-mode'] = 'normal';
var layer_5min_16 = new L.geoJson(json_5min_16, {
    attribution: '',
    interactive: true,
    dataVar: 'json_5min_16',
    layerName: 'layer_5min_16',
    pane: 'pane_5min_16',
    onEachFeature: pop_5min_16,
    style: style_5min_16_0,
});
bounds_group.addLayer(layer_5min_16);
// map.addLayer(layer_5min_16);
function pop_NSstations_17(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['full_id'] !== null ? autolinker.link(feature.properties['full_id'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['osm_id'] !== null ? autolinker.link(feature.properties['osm_id'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['osm_type'] !== null ? autolinker.link(feature.properties['osm_type'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['internet_access'] !== null ? autolinker.link(feature.properties['internet_access'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['website:nl'] !== null ? autolinker.link(feature.properties['website:nl'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['website:fr'] !== null ? autolinker.link(feature.properties['website:fr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['website:en'] !== null ? autolinker.link(feature.properties['website:en'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['website:de'] !== null ? autolinker.link(feature.properties['website:de'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['website'] !== null ? autolinker.link(feature.properties['website'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['operator:wikidata'] !== null ? autolinker.link(feature.properties['operator:wikidata'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['operator'] !== null ? autolinker.link(feature.properties['operator'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['network:wikidata'] !== null ? autolinker.link(feature.properties['network:wikidata'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['network'] !== null ? autolinker.link(feature.properties['network'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['wheelchair'] !== null ? autolinker.link(feature.properties['wheelchair'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['zone'] !== null ? autolinker.link(feature.properties['zone'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['wikipedia'] !== null ? autolinker.link(feature.properties['wikipedia'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['wikidata'] !== null ? autolinker.link(feature.properties['wikidata'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['uic_ref'] !== null ? autolinker.link(feature.properties['uic_ref'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['uic_name'] !== null ? autolinker.link(feature.properties['uic_name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['train'] !== null ? autolinker.link(feature.properties['train'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['railway:ref'] !== null ? autolinker.link(feature.properties['railway:ref'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['railway'] !== null ? autolinker.link(feature.properties['railway'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['public_transport'] !== null ? autolinker.link(feature.properties['public_transport'].toLocaleString()) : '') + '</td>\
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
// map.addLayer(layer_NSstations_17);
function pop_MerwedeLingeLijn_18(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['full_id'] !== null ? autolinker.link(feature.properties['full_id'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['osm_id'] !== null ? autolinker.link(feature.properties['osm_id'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['osm_type'] !== null ? autolinker.link(feature.properties['osm_type'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['internet_access'] !== null ? autolinker.link(feature.properties['internet_access'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['website:nl'] !== null ? autolinker.link(feature.properties['website:nl'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['website:fr'] !== null ? autolinker.link(feature.properties['website:fr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['website:en'] !== null ? autolinker.link(feature.properties['website:en'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['website:de'] !== null ? autolinker.link(feature.properties['website:de'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['website'] !== null ? autolinker.link(feature.properties['website'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['operator:wikidata'] !== null ? autolinker.link(feature.properties['operator:wikidata'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['operator'] !== null ? autolinker.link(feature.properties['operator'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['network:wikidata'] !== null ? autolinker.link(feature.properties['network:wikidata'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['network'] !== null ? autolinker.link(feature.properties['network'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['wheelchair'] !== null ? autolinker.link(feature.properties['wheelchair'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['zone'] !== null ? autolinker.link(feature.properties['zone'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['wikipedia'] !== null ? autolinker.link(feature.properties['wikipedia'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['wikidata'] !== null ? autolinker.link(feature.properties['wikidata'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['uic_ref'] !== null ? autolinker.link(feature.properties['uic_ref'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['uic_name'] !== null ? autolinker.link(feature.properties['uic_name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['train'] !== null ? autolinker.link(feature.properties['train'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['railway:ref'] !== null ? autolinker.link(feature.properties['railway:ref'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['railway'] !== null ? autolinker.link(feature.properties['railway'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['public_transport'] !== null ? autolinker.link(feature.properties['public_transport'].toLocaleString()) : '') + '</td>\
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
// map.addLayer(layer_MerwedeLingeLijn_18);
function pop_Buslijnen_19(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['ROUTEREF'] !== null ? autolinker.link(feature.properties['ROUTEREF'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['LINE_OPERA'] !== null ? autolinker.link(feature.properties['LINE_OPERA'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TRANSPORTM'] !== null ? autolinker.link(feature.properties['TRANSPORTM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['OPERATOR'] !== null ? autolinker.link(feature.properties['OPERATOR'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PUBLICCODE'] !== null ? autolinker.link(feature.properties['PUBLICCODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NAME'] !== null ? autolinker.link(feature.properties['NAME'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['MONDAY'] !== null ? autolinker.link(feature.properties['MONDAY'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TUESDAY'] !== null ? autolinker.link(feature.properties['TUESDAY'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['WEDNESDAY'] !== null ? autolinker.link(feature.properties['WEDNESDAY'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['THURSDAY'] !== null ? autolinker.link(feature.properties['THURSDAY'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['FRIDAY'] !== null ? autolinker.link(feature.properties['FRIDAY'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['SATURDAY'] !== null ? autolinker.link(feature.properties['SATURDAY'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['SUNDAY'] !== null ? autolinker.link(feature.properties['SUNDAY'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    var content = removeEmptyRowsFromPopupContent(popupContent, feature);
    layer.on('popupopen', function(e) {
        addClassToPopupIfMedia(content, e.popup);
    });
    layer.bindPopup(content, { maxHeight: 400 });
}

function style_Buslijnen_19_0() {
    return {
        pane: 'pane_Buslijnen_19',
        opacity: 1,
        color: 'rgba(36,170,45,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 2.0,
        fillOpacity: 0.3,
        interactive: true,
    }
}
map.createPane('pane_Buslijnen_19');
map.getPane('pane_Buslijnen_19').style.zIndex = 419;
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
// map.addLayer(layer_Buslijnen_19);
function pop_Bibliotheken_20(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['full_id'] !== null ? autolinker.link(feature.properties['full_id'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['osm_id'] !== null ? autolinker.link(feature.properties['osm_id'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['osm_type'] !== null ? autolinker.link(feature.properties['osm_type'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['wheelchair'] !== null ? autolinker.link(feature.properties['wheelchair'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['toilets:wheelchair'] !== null ? autolinker.link(feature.properties['toilets:wheelchair'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['toilets:access'] !== null ? autolinker.link(feature.properties['toilets:access'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['toilets'] !== null ? autolinker.link(feature.properties['toilets'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['payment:maestro'] !== null ? autolinker.link(feature.properties['payment:maestro'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['alt_name'] !== null ? autolinker.link(feature.properties['alt_name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['description'] !== null ? autolinker.link(feature.properties['description'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['wikidata'] !== null ? autolinker.link(feature.properties['wikidata'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['website'] !== null ? autolinker.link(feature.properties['website'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['source:date'] !== null ? autolinker.link(feature.properties['source:date'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['phone'] !== null ? autolinker.link(feature.properties['phone'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['operator:wikidata'] !== null ? autolinker.link(feature.properties['operator:wikidata'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['operator'] !== null ? autolinker.link(feature.properties['operator'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['opening_hours'] !== null ? autolinker.link(feature.properties['opening_hours'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['email'] !== null ? autolinker.link(feature.properties['email'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['brand:wikidata'] !== null ? autolinker.link(feature.properties['brand:wikidata'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['brand'] !== null ? autolinker.link(feature.properties['brand'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['amenity'] !== null ? autolinker.link(feature.properties['amenity'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['addr:street'] !== null ? autolinker.link(feature.properties['addr:street'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['addr:postcode'] !== null ? autolinker.link(feature.properties['addr:postcode'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['addr:housenumber'] !== null ? autolinker.link(feature.properties['addr:housenumber'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['addr:country'] !== null ? autolinker.link(feature.properties['addr:country'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['addr:city'] !== null ? autolinker.link(feature.properties['addr:city'].toLocaleString()) : '') + '</td>\
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
// map.addLayer(layer_Bibliotheken_20);
function pop_Bioscopen_21(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['full_id'] !== null ? autolinker.link(feature.properties['full_id'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['osm_id'] !== null ? autolinker.link(feature.properties['osm_id'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['osm_type'] !== null ? autolinker.link(feature.properties['osm_type'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['start_date'] !== null ? autolinker.link(feature.properties['start_date'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['image'] !== null ? autolinker.link(feature.properties['image'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['air_conditioning'] !== null ? autolinker.link(feature.properties['air_conditioning'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['level'] !== null ? autolinker.link(feature.properties['level'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['operator:wikidata'] !== null ? autolinker.link(feature.properties['operator:wikidata'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['cinema:dolbycinima'] !== null ? autolinker.link(feature.properties['cinema:dolbycinima'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['cinema:4DX'] !== null ? autolinker.link(feature.properties['cinema:4DX'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['cinema:3D'] !== null ? autolinker.link(feature.properties['cinema:3D'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['screen'] !== null ? autolinker.link(feature.properties['screen'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['toilets:wheelchair'] !== null ? autolinker.link(feature.properties['toilets:wheelchair'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['contact:website'] !== null ? autolinker.link(feature.properties['contact:website'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['contact:phone'] !== null ? autolinker.link(feature.properties['contact:phone'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['contact:email'] !== null ? autolinker.link(feature.properties['contact:email'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['wikipedia'] !== null ? autolinker.link(feature.properties['wikipedia'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['wheelchair:description'] !== null ? autolinker.link(feature.properties['wheelchair:description'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['source:date'] !== null ? autolinker.link(feature.properties['source:date'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['phone'] !== null ? autolinker.link(feature.properties['phone'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['email'] !== null ? autolinker.link(feature.properties['email'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['addr:postcode'] !== null ? autolinker.link(feature.properties['addr:postcode'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['wikimedia_commons'] !== null ? autolinker.link(feature.properties['wikimedia_commons'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['wikidata'] !== null ? autolinker.link(feature.properties['wikidata'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['wheelchair'] !== null ? autolinker.link(feature.properties['wheelchair'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['website'] !== null ? autolinker.link(feature.properties['website'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['operator'] !== null ? autolinker.link(feature.properties['operator'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['opening_hours'] !== null ? autolinker.link(feature.properties['opening_hours'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['name'] !== null ? autolinker.link(feature.properties['name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['brand:wikipedia'] !== null ? autolinker.link(feature.properties['brand:wikipedia'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['brand:wikidata'] !== null ? autolinker.link(feature.properties['brand:wikidata'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['brand'] !== null ? autolinker.link(feature.properties['brand'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['amenity'] !== null ? autolinker.link(feature.properties['amenity'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['addr:street'] !== null ? autolinker.link(feature.properties['addr:street'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['addr:housenumber'] !== null ? autolinker.link(feature.properties['addr:housenumber'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['addr:country'] !== null ? autolinker.link(feature.properties['addr:country'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['addr:city'] !== null ? autolinker.link(feature.properties['addr:city'].toLocaleString()) : '') + '</td>\
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
// map.addLayer(layer_Bioscopen_21);
function pop_Theaters_22(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '') + '</td>\
            </tr>\
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
// map.addLayer(layer_Theaters_22);
function pop_Ziekenhuizenenpoliklinieken_23(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '') + '</td>\
            </tr>\
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
// map.addLayer(layer_Ziekenhuizenenpoliklinieken_23);
function pop_Grotesportaccomodaties_24(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Naam'] !== null ? autolinker.link(feature.properties['Naam'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Sport'] !== null ? autolinker.link(feature.properties['Sport'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Adres'] !== null ? autolinker.link(feature.properties['Adres'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Bouwjaar'] !== null ? autolinker.link(feature.properties['Bouwjaar'].toLocaleString()) : '') + '</td>\
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
// map.addLayer(layer_Grotesportaccomodaties_24);
function pop_Ijsbanenindooroutdoor_25(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '') + '</td>\
            </tr>\
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
// map.addLayer(layer_Ijsbanenindooroutdoor_25);
function pop_Zwemlocaties_26(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Naam'] !== null ? autolinker.link(feature.properties['Naam'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Adres'] !== null ? autolinker.link(feature.properties['Adres'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Binnenbad'] !== null ? autolinker.link(feature.properties['Binnenbad'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Buitenbad'] !== null ? autolinker.link(feature.properties['Buitenbad'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Plas'] !== null ? autolinker.link(feature.properties['Plas'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['Tropisch'] !== null ? autolinker.link(feature.properties['Tropisch'].toLocaleString()) : '') + '</td>\
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
// map.addLayer(layer_Zwemlocaties_26);
function pop_MBO_27(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['_id'] !== null ? autolinker.link(feature.properties['_id'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['MBO INSTELLINGSSOORT - CODE'] !== null ? autolinker.link(feature.properties['MBO INSTELLINGSSOORT - CODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['MBO INSTELLINGSSOORT - NAAM'] !== null ? autolinker.link(feature.properties['MBO INSTELLINGSSOORT - NAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PROVINCIE'] !== null ? autolinker.link(feature.properties['PROVINCIE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['BEVOEGD GEZAG NUMMER'] !== null ? autolinker.link(feature.properties['BEVOEGD GEZAG NUMMER'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['INSTELLINGSCODE'] !== null ? autolinker.link(feature.properties['INSTELLINGSCODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['INSTELLINGSNAAM'] !== null ? autolinker.link(feature.properties['INSTELLINGSNAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STRAATNAAM'] !== null ? autolinker.link(feature.properties['STRAATNAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['HUISNUMMER-TOEVOEGING'] !== null ? autolinker.link(feature.properties['HUISNUMMER-TOEVOEGING'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['POSTCODE'] !== null ? autolinker.link(feature.properties['POSTCODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PLAATSNAAM'] !== null ? autolinker.link(feature.properties['PLAATSNAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ADRES'] !== null ? autolinker.link(feature.properties['ADRES'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['GEMEENTENUMMER'] !== null ? autolinker.link(feature.properties['GEMEENTENUMMER'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['GEMEENTENAAM'] !== null ? autolinker.link(feature.properties['GEMEENTENAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DENOMINATIE'] !== null ? autolinker.link(feature.properties['DENOMINATIE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TELEFOONNUMMER'] !== null ? autolinker.link(feature.properties['TELEFOONNUMMER'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['INTERNETADRES'] !== null ? autolinker.link(feature.properties['INTERNETADRES'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STRAATNAAM CORRESPONDENTIEADRES'] !== null ? autolinker.link(feature.properties['STRAATNAAM CORRESPONDENTIEADRES'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['HUISNUMMER-TOEVOEGING CORRESPONDENTIEADRES'] !== null ? autolinker.link(feature.properties['HUISNUMMER-TOEVOEGING CORRESPONDENTIEADRES'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['POSTCODE CORRESPONDENTIEADRES'] !== null ? autolinker.link(feature.properties['POSTCODE CORRESPONDENTIEADRES'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PLAATSNAAM CORRESPONDENTIEADRES'] !== null ? autolinker.link(feature.properties['PLAATSNAAM CORRESPONDENTIEADRES'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NODAAL GEBIED CODE'] !== null ? autolinker.link(feature.properties['NODAAL GEBIED CODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NODAAL GEBIED NAAM'] !== null ? autolinker.link(feature.properties['NODAAL GEBIED NAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['RPA-GEBIED CODE'] !== null ? autolinker.link(feature.properties['RPA-GEBIED CODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['RPA-GEBIED NAAM'] !== null ? autolinker.link(feature.properties['RPA-GEBIED NAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['WGR-GEBIED CODE'] !== null ? autolinker.link(feature.properties['WGR-GEBIED CODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['WGR-GEBIED NAAM'] !== null ? autolinker.link(feature.properties['WGR-GEBIED NAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['COROPGEBIED CODE'] !== null ? autolinker.link(feature.properties['COROPGEBIED CODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['COROPGEBIED NAAM'] !== null ? autolinker.link(feature.properties['COROPGEBIED NAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ONDERWIJSGEBIED CODE'] !== null ? autolinker.link(feature.properties['ONDERWIJSGEBIED CODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ONDERWIJSGEBIED NAAM'] !== null ? autolinker.link(feature.properties['ONDERWIJSGEBIED NAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['RMC-REGIO CODE'] !== null ? autolinker.link(feature.properties['RMC-REGIO CODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['RMC-REGIO NAAM'] !== null ? autolinker.link(feature.properties['RMC-REGIO NAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_name'] !== null ? autolinker.link(feature.properties['geocoded_name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_label'] !== null ? autolinker.link(feature.properties['geocoded_label'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_score'] !== null ? autolinker.link(feature.properties['geocoded_score'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_house_number'] !== null ? autolinker.link(feature.properties['geocoded_house_number'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_street'] !== null ? autolinker.link(feature.properties['geocoded_street'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_region'] !== null ? autolinker.link(feature.properties['geocoded_region'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_region_code'] !== null ? autolinker.link(feature.properties['geocoded_region_code'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_neighbourhood'] !== null ? autolinker.link(feature.properties['geocoded_neighbourhood'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_county'] !== null ? autolinker.link(feature.properties['geocoded_county'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_macroregion'] !== null ? autolinker.link(feature.properties['geocoded_macroregion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_city'] !== null ? autolinker.link(feature.properties['geocoded_city'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_country'] !== null ? autolinker.link(feature.properties['geocoded_country'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_country_code'] !== null ? autolinker.link(feature.properties['geocoded_country_code'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_continent'] !== null ? autolinker.link(feature.properties['geocoded_continent'].toLocaleString()) : '') + '</td>\
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
// map.addLayer(layer_MBO_27);
function pop_HBOWO_28(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['_id'] !== null ? autolinker.link(feature.properties['_id'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['SOORT HO'] !== null ? autolinker.link(feature.properties['SOORT HO'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PROVINCIE'] !== null ? autolinker.link(feature.properties['PROVINCIE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['BEVOEGD GEZAG NUMMER'] !== null ? autolinker.link(feature.properties['BEVOEGD GEZAG NUMMER'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['INSTELLINGSCODE'] !== null ? autolinker.link(feature.properties['INSTELLINGSCODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['INSTELLINGSNAAM'] !== null ? autolinker.link(feature.properties['INSTELLINGSNAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STRAATNAAM'] !== null ? autolinker.link(feature.properties['STRAATNAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['HUISNUMMER-TOEVOEGING'] !== null ? autolinker.link(feature.properties['HUISNUMMER-TOEVOEGING'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ADRES'] !== null ? autolinker.link(feature.properties['ADRES'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['POSTCODE'] !== null ? autolinker.link(feature.properties['POSTCODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PLAATSNAAM'] !== null ? autolinker.link(feature.properties['PLAATSNAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['GEMEENTENUMMER'] !== null ? autolinker.link(feature.properties['GEMEENTENUMMER'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['GEMEENTENAAM'] !== null ? autolinker.link(feature.properties['GEMEENTENAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['DENOMINATIE'] !== null ? autolinker.link(feature.properties['DENOMINATIE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['TELEFOONNUMMER'] !== null ? autolinker.link(feature.properties['TELEFOONNUMMER'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['INTERNETADRES'] !== null ? autolinker.link(feature.properties['INTERNETADRES'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['STRAATNAAM CORRESPONDENTIEADRES'] !== null ? autolinker.link(feature.properties['STRAATNAAM CORRESPONDENTIEADRES'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['HUISNUMMER-TOEVOEGING CORRESPONDENTIEADRES'] !== null ? autolinker.link(feature.properties['HUISNUMMER-TOEVOEGING CORRESPONDENTIEADRES'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['POSTCODE CORRESPONDENTIEADRES'] !== null ? autolinker.link(feature.properties['POSTCODE CORRESPONDENTIEADRES'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['PLAATSNAAM CORRESPONDENTIEADRES'] !== null ? autolinker.link(feature.properties['PLAATSNAAM CORRESPONDENTIEADRES'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NODAAL GEBIED CODE'] !== null ? autolinker.link(feature.properties['NODAAL GEBIED CODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['NODAAL GEBIED NAAM'] !== null ? autolinker.link(feature.properties['NODAAL GEBIED NAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['RPA-GEBIED CODE'] !== null ? autolinker.link(feature.properties['RPA-GEBIED CODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['RPA-GEBIED NAAM'] !== null ? autolinker.link(feature.properties['RPA-GEBIED NAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['WGR-GEBIED CODE'] !== null ? autolinker.link(feature.properties['WGR-GEBIED CODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['WGR-GEBIED NAAM'] !== null ? autolinker.link(feature.properties['WGR-GEBIED NAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['COROPGEBIED CODE'] !== null ? autolinker.link(feature.properties['COROPGEBIED CODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['COROPGEBIED NAAM'] !== null ? autolinker.link(feature.properties['COROPGEBIED NAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ONDERWIJSGEBIED CODE'] !== null ? autolinker.link(feature.properties['ONDERWIJSGEBIED CODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ONDERWIJSGEBIED NAAM'] !== null ? autolinker.link(feature.properties['ONDERWIJSGEBIED NAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['RMC-REGIO CODE'] !== null ? autolinker.link(feature.properties['RMC-REGIO CODE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['RMC-REGIO NAAM'] !== null ? autolinker.link(feature.properties['RMC-REGIO NAAM'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_name'] !== null ? autolinker.link(feature.properties['geocoded_name'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_label'] !== null ? autolinker.link(feature.properties['geocoded_label'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_score'] !== null ? autolinker.link(feature.properties['geocoded_score'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_house_number'] !== null ? autolinker.link(feature.properties['geocoded_house_number'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_street'] !== null ? autolinker.link(feature.properties['geocoded_street'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_region'] !== null ? autolinker.link(feature.properties['geocoded_region'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_region_code'] !== null ? autolinker.link(feature.properties['geocoded_region_code'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_neighbourhood'] !== null ? autolinker.link(feature.properties['geocoded_neighbourhood'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_county'] !== null ? autolinker.link(feature.properties['geocoded_county'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_macroregion'] !== null ? autolinker.link(feature.properties['geocoded_macroregion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_city'] !== null ? autolinker.link(feature.properties['geocoded_city'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_country'] !== null ? autolinker.link(feature.properties['geocoded_country'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_country_code'] !== null ? autolinker.link(feature.properties['geocoded_country_code'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['geocoded_continent'] !== null ? autolinker.link(feature.properties['geocoded_continent'].toLocaleString()) : '') + '</td>\
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
// map.addLayer(layer_HBOWO_28);
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
map.getPane('pane_labels_29').style.zIndex = 399;
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
map.getPane('pane_nolabels_30').style.zIndex = 398;

var baseMaps =  {
        label: "<b>KAARTEN</b>",
        children: [{
        label: "Labels",
        layer: layer_labels_29
    },
    {
        label: "Geen labels",
        layer: layer_nolabels_30
    }]
};




var layerLegendlabels = {
    "Buurten": "<img src='legend/Buurten_0.png'/> <span class='my-layer-item'>Buurten</span>",
    "Drechtsteden": "<img src='legend/Drechtsteden_2.png'/> <span class='my-layer-item'>Drechtsteden</span>",
    "Waterbus fietsen 15min": "<img src='legend/15min_3.png'/> <span class='my-layer-item'>Waterbus fietsen 15min</span>",
    "Waterbus fietsen 10min": "<img src='legend/10min_4.png'/> <span class='my-layer-item'>Waterbus fietsen 10min</span>",
    "Waterbus fietsen 5min": "<img src='legend/5min_5.png'/> <span class='my-layer-item'>Waterbus fietsen 5min</span>",
    "Waterbus lopen 15min": "<img src='legend/15min_6.png'/> <span class='my-layer-item'>Waterbus lopen 15min</span>",
    "Waterbus lopen 10min": "<img src='legend/10min_7.png'/> <span class='my-layer-item'>Waterbus lopen 10min</span>",
    "Waterbus lopen 5min": "<img src='legend/5min_8.png'/> <span class='my-layer-item'>Waterbus lopen 5min</span>",
    "Waterverbindingen": "<img src='legend/Waterverbindingen_9.png'/> <span class='my-layer-item'>Waterverbindingen</span>",
    "Waterbushaltes en oversteken": "<img src='legend/Waterbushaltesenoversteken_10.png'/> <span class='my-layer-item'>Waterbushaltes en oversteken</span>",
    "Trein fietsen 15min": "<img src='legend/15min_11.png'/> <span class='my-layer-item'>Trein fietsen 15min</span>",
    "Trein fietsen 10min": "<img src='legend/10min_12.png'/> <span class='my-layer-item'>Trein fietsen 10min</span>",
    "Trein fietsen 5min": "<img src='legend/5min_13.png'/> <span class='my-layer-item'>Trein fietsen 5min</span>",
    "Trein lopen 15min": "<img src='legend/15min_14.png'/> <span class='my-layer-item'>Trein lopen 15min</span>",
    "Trein lopen 10min": "<img src='legend/10min_15.png'/> <span class='my-layer-item'>Trein lopen 10min</span>",
    "Trein lopen 5min": "<img src='legend/5min_16.png'/> <span class='my-layer-item'>Trein lopen 5min</span>",
    "NS stations": "<img src='legend/NSstations_17.png'/> <span class='my-layer-item'>NS stations</span>",
    "MerwedeLingeLijn": "<img src='legend/MerwedeLingeLijn_18.png'/> <span class='my-layer-item'>MerwedeLingeLijn</span>",
    "Buslijnen": "<img src='legend/Buslijnen_19.png'/> <span class='my-layer-item'>Buslijnen</span>",
    "Bibliotheken": "<img src='legend/Bibliotheken_20.png'/> <span class='my-layer-item'>Bibliotheken</span>",
    "Bioscopen": "<img src='legend/Bioscopen_21.png'/> <span class='my-layer-item'>Bioscopen</span>",
    "Theaters": "<img src='legend/Theaters_22.png'/> <span class='my-layer-item'>Theaters</span>",
    "Ziekenhuizen en poliklinieken": "<img src='legend/Ziekenhuizenenpoliklinieken_23.png'/> <span class='my-layer-item'>Ziekenhuizen en poliklinieken</span>",
    "Grote sportaccomodaties": "<img src='legend/Grotesportaccomodaties_24.png'/> <span class='my-layer-item'>Grote sportaccomodaties</span>",
    "Ijsbanen indoor outdoor": "<img src='legend/Ijsbanenindooroutdoor_25.png'/> <span class='my-layer-item'>IJsbanen</span>",
    "Zwemlocaties": "<img src='legend/Zwemlocaties_26.png'/> <span class='my-layer-item'>Zwemlocaties</span>",
    "MBO": "<img src='legend/MBO_27.png'/> <span class='my-layer-item'>MBO</span>",
    "HBO/WO": "<img src='legend/HBOWO_28.png'/> <span class='my-layer-item'>HBO/WO</span>"
};

// var overlays = {
//     "<img src='legend/Buurten_0.png'/> <span class='my-layer-item'>Buurten</span>": layer_Buurten_0,
//     "<img src='legend/Drechtsteden_2.png'/> <span class='my-layer-item'>Drechtsteden</span>": layer_Drechtsteden_2,
//     "<img src='legend/15min_3.png'/> <span class='my-layer-item'>Waterbus fietsen 15min</span>": layer_15min_3,
//     "<img src='legend/10min_4.png'/> <span class='my-layer-item'>Waterbus fietsen 10min</span>": layer_10min_4,
//     "<img src='legend/5min_5.png'/> <span class='my-layer-item'>Waterbus fietsen 5min</span>": layer_5min_5,
//     "<img src='legend/15min_6.png'/> <span class='my-layer-item'>Waterbus lopen 15min</span>": layer_15min_6,
//     "<img src='legend/10min_7.png'/> <span class='my-layer-item'>Waterbus lopen 10min</span>": layer_10min_7,
//     "<img src='legend/5min_8.png'/> <span class='my-layer-item'>Waterbus lopen 5min</span>": layer_5min_8,
//     "<img src='legend/Waterverbindingen_9.png'/> <span class='my-layer-item'>Waterverbindingen</span>": layer_Waterverbindingen_9,
//     "<img src='legend/Waterbushaltesenoversteken_10.png'/> <span class='my-layer-item'>Waterbushaltes en oversteken</span>": layer_Waterbushaltesenoversteken_10,
//     "<img src='legend/15min_11.png'/> <span class='my-layer-item'>Trein fietsen 15min</span>": layer_15min_11,
//     "<img src='legend/10min_12.png'/> <span class='my-layer-item'>Trein fietsen 10min</span>": layer_10min_12,
//     "<img src='legend/5min_13.png'/> <span class='my-layer-item'>Trein fietsen 5min</span>": layer_5min_13,
//     "<img src='legend/15min_14.png'/> <span class='my-layer-item'>Trein lopen 15min</span>": layer_15min_14,
//     "<img src='legend/10min_15.png'/> <span class='my-layer-item'>Trein lopen 10min</span>": layer_10min_15,
//     "<img src='legend/5min_16.png'/> <span class='my-layer-item'>Trein lopen 5min</span>": layer_5min_16,
//     "<img src='legend/NSstations_17.png'/> <span class='my-layer-item'>NS stations</span>": layer_NSstations_17,
//     "<img src='legend/MerwedeLingeLijn_18.png'/> <span class='my-layer-item'>Merwede Linge Lijn</span>": layer_MerwedeLingeLijn_18,
//     "<img src='legend/Buslijnen_19.png'/> <span class='my-layer-item'>Buslijnen</span>": layer_Buslijnen_19,
//     "<img src='legend/Bibliotheken_20.png'/> <span class='my-layer-item'>Bibliotheken</span>": layer_Bibliotheken_20,
//     "<img src='legend/Bioscopen_21.png'/> <span class='my-layer-item'>Bioscopen</span>": layer_Bioscopen_21,
//     "<img src='legend/Theaters_22.png'/> <span class='my-layer-item'>Theaters</span>": layer_Theaters_22,
//     "<img src='legend/Ziekenhuizenenpoliklinieken_23.png'/> <span class='my-layer-item'>Ziekenhuizen en poliklinieken</span>": layer_Ziekenhuizenenpoliklinieken_23,
//     "<img src='legend/Grotesportaccomodaties_24.png'/> <span class='my-layer-item'>Grote sportaccomodaties</span>": layer_Grotesportaccomodaties_24,
//     "<img src='legend/Ijsbanenindooroutdoor_25.png'/> <span class='my-layer-item'>Ijsbanen indoor outdoor</span>": layer_Ijsbanenindooroutdoor_25,
//     "<img src='legend/Zwemlocaties_26.png'/> <span class='my-layer-item'>Zwemlocaties</span>": layer_Zwemlocaties_26,
//     "<img src='legend/MBO_27.png'/> <span class='my-layer-item'>MBO</span>": layer_MBO_27,
//     "<img src='legend/HBOWO_28.png'/> <span class='my-layer-item'>HBO/WO</span>": layer_HBOWO_28
// };
// L.control.layers(baseMaps, overlays).addTo(map);

var overlaysTree = [
    {
        label: '<b>VOORZIENINGEN</b>',
        selectAllCheckbox: true,
        children: [
            {
                label: '<b>Onderwijs</b>',
                selectAllCheckbox: true,
                children: [
                    { label: layerLegendlabels['HBO/WO'], layer: layer_HBOWO_28 },
                    { label: layerLegendlabels['MBO'], layer: layer_MBO_27 }
                ]
            },
            {
                label: '<b>Gezondheid</b>',
                selectAllCheckbox: true,
                children: [
                    { label: layerLegendlabels['Zwemlocaties'], layer: layer_Zwemlocaties_26 },
                    { label: layerLegendlabels['Ijsbanen indoor outdoor'], layer: layer_Ijsbanenindooroutdoor_25 },
                    { label: layerLegendlabels['Grote sportaccomodaties'], layer: layer_Grotesportaccomodaties_24 },
                    { label: layerLegendlabels['Ziekenhuizen en poliklinieken'], layer: layer_Ziekenhuizenenpoliklinieken_23 }
                ]
            },
            {
                label: '<b>Cultureel</b>',
                selectAllCheckbox: true,
                children: [
                    { label: layerLegendlabels['Theaters'], layer: layer_Theaters_22 },
                    { label: layerLegendlabels['Bioscopen'], layer: layer_Bioscopen_21 },
                    { label: layerLegendlabels['Bibliotheken'], layer: layer_Bibliotheken_20 }
                ]
            }]
    },
    {
        label: '<b>OPENBAAR VERVOER</b>',
        selectAllCheckbox: true,
        children: [
            { label: layerLegendlabels['Buslijnen'], layer: layer_Buslijnen_19 },
            { label: layerLegendlabels['MerwedeLingeLijn'], layer: layer_MerwedeLingeLijn_18 },
            { label: layerLegendlabels['NS stations'], layer: layer_NSstations_17 },
            {
                label: '<b>Reistijd vanaf treinstations</b>',
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
                label: '<b>Reistijd vanaf waterbus/taxi</b>',
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
    {
        label: '<b>GEBIEDSINDELINGEN</b>',
        selectAllCheckbox: true,
        children: [
            { label: layerLegendlabels['Buurten'], layer: layer_Buurten_0 },
            { label: layerLegendlabels['Drechtsteden'], layer: layer_Drechtsteden_2 }
        ]
    }
];
L.control.layers.tree(baseMaps, overlaysTree ).addTo(map);
L.control.scale({imperial: false}).addTo(map);



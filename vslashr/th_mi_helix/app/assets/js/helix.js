// 20190626v1
"use strict";

var app = app || {};

if (! app.main) {
    app.main = {
        l: function(key){
            if (app.lang[app.config.lang] && app.lang[app.config.lang][key]) {
                var lookup = app.lang[app.config.lang][key];
                if ($.isFunction(lookup)) {
                    return lookup.apply(this, Array.prototype.slice.call(arguments, 1));
                } else {
                    return lookup;
                }
            } else {
                return key;
            } // if (app.lang[app.config.lang] && app.lang[app.config.lang][key])
        },
    }
}

var camera, scene, renderer, materials;
var logos = new THREE.Group();
var sectors = new THREE.Group();

var frameWidth = ($(".flex-container").innerWidth() >= 990) ? 740 : $(".flex-container").innerWidth();
var frameHeight = frameWidth;

var clock = new THREE.Clock();
var animMode = "helix";
var data = {};
var mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3(), 100, 10000);
var menuIndex = 0, selectedIconIndex = 0;

var timerObject = {
    timerSlide: null,
    timerClick: null, 
    stop: function() {
        if (this.timerSlide != null) {
            clearInterval(this.timerSlide);
            this.timerSlide = null;
        } 
        if (this.timerClick != null) {
            clearTimeout(this.timerClick);
            this.timerClick = null;
        }
    },
    startSlide: function(seconds) {
        this.stop();
        this.timerSlide = setInterval(function() {
            menuIndex += 1;
            if (menuIndex > menuData.length - 1) {
                menuIndex = 0;
            }
            updateState(menuIndex, "left");
        }, 1000 * seconds);
    },
    startClick: function(seconds, url) {
        this.stop();
        this.timerClick = setTimeout(function(){ window.top.location.assign(url); }, 1000 * seconds);
    },
    reset: function(seconds) {
        this.stop();
        this.startSlide(seconds);
    }
}

/* Animation loop variables*/

   var origin = new THREE.Vector3(0, 0, 0);
   var backOrigin = new THREE.Vector3(0, 0, -5000);
   var camSpeed = 0.5, tweenSpeed = 1.5;


$( document ).ready(function() {
    var lang = $("html").attr("lang") || "en";
    app.config.lang = lang;

    init();
    animate();
    timerObject.startSlide(7);
        
    $("#introtext").text(app.main.l(menuData[0].text));
    TweenLite.from("#introtext", 1, {x: 20, autoAlpha:0},1);
    TweenLite.set("#introdots", {autoAlpha:1});
    
});

function init() {

    camera = new THREE.PerspectiveCamera( 75, frameWidth / frameHeight, 1, 5000 );
    camera.position.z = 3000;

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );
    scene.fog = new THREE.Fog( 0xffffff, 1, 4000 );

    // var pointLight = new THREE.PointLight( 0xffffff, 1.0 );
    // pointLight.position.set( 0, 0, 1000 );
    // scene.add( pointLight );
            
    data.logos = [];
    
    //randomized order
    logoData = _.shuffle(logoData);

    for ( var i = 0; i < logoData.length; i++ ) {
        
        if (app.config.lang == "zh" && logoData[i].image_zh != undefined) {
            var image = new THREE.TextureLoader().load("assets/logos/" + logoData[i].image_zh);
        } else {
            var image = new THREE.TextureLoader().load("assets/logos/" + logoData[i].image);
        }
        image.minFilter = THREE.LinearFilter;
        
        var geometry = new THREE.PlaneGeometry( 300, 100, 16 );
        var material = new THREE.MeshBasicMaterial( { map: image, side: THREE.DoubleSide, depthTest: false, transparent: true } );
        var plane = new THREE.Mesh( geometry, material );
        
        var obj = {};

        // Set helix position coordinates
        /*
        if (i < numberIcons / 2) {
            var theta = i * 0.4 + Math.PI;
            var y = - ( i * 100 ) + 1100;
        } else {
            var theta = (i - numberIcons / 2) * 0.4 + 2 * Math.PI;
            var y = - ( (i - numberIcons / 2) * 100 ) + 1100;
        }
        */
        
        if (i % 2 == 0) {
            var theta = Math.floor(i / 2) * 0.35 + Math.PI;
            var y = - (Math.floor(i / 2) * 80) + 960;
        } else {
            var theta = Math.floor(i / 2) * 0.35 + 2 * Math.PI;
            var y = - (Math.floor(i / 2) * 80) + 960;
        }
        
        plane.position.setFromCylindricalCoords( 500, theta, y );
        
        var helix = new THREE.Vector3();
        helix.copy( plane.position );

        // Set spherical position coordinates
        var phi = Math.acos( -1 + ( 2 * i ) / logoData.length );
        var theta2 = Math.sqrt( logoData.length * Math.PI ) * phi;

        plane.position.setFromSphericalCoords( 700, phi, theta2 )

        var globe = new THREE.Vector3();
        globe.copy( plane.position );


        // Set sector position coordinates
        var sector = new THREE.Vector3();
                
        sector.x = _.findWhere(allSectors, {sector: logoData[i].sector}).x;
        sector.y = logoData[i].categoryCount * -120 + 500;
        sector.z = 0;

        obj.helix = helix;
        obj.globe = globe;
        obj.sector = sector;

        data.logos.push(obj);
        plane.position.set(0, 0, 0);
        plane.dataID = i;
        
        logos.add(plane);
    }    
    
    scene.add(logos);
    data.sectors = [];

    for ( var i = 0; i < allSectors.length; i++ ) {
        
        if (app.config.lang == "zh" && allSectors[i].image_zh != undefined) {
            var image = new THREE.TextureLoader().load("assets/sectors/" + allSectors[i].image_zh);
        } else {
            var image = new THREE.TextureLoader().load("assets/sectors/" + allSectors[i].image);
        }
        
        image.minFilter = THREE.LinearFilter;
        
        var geometry = new THREE.PlaneGeometry( 300 * 1.77, 220 * 1.77, 16 );
        var material = new THREE.MeshBasicMaterial( { map: image, side: THREE.DoubleSide, depthTest: false, transparent: true } );
        var plane = new THREE.Mesh( geometry, material );

        var obj = {};

        // Set sector1 position coordinates - in the background
        var sector1 = new THREE.Vector3();
        sector1.x = allSectors[i].x * 5;
        sector1.y = 700;
        sector1.z = -5000;

        // Set sector2 position coordinates - in the foreground
        var sector2 = new THREE.Vector3();
        sector2.x = allSectors[i].x;
        sector2.y = 700;
        sector2.z = 0;

        obj.sector1 = sector1;
        obj.sector2 = sector2;

        data.sectors.push(obj);
        plane.position.set(0, 0, 0);

        sectors.add(plane);
    }
    
    scene.add(sectors);
    //console.log(data);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( frameWidth, frameHeight );

    $("#helixchart").append(renderer.domElement);
    
    var hammertime = new Hammer(renderer.domElement);
    hammertime.on("pan", function(event) {
        
        if (animMode == "singleicon") {
            return;
        } else if (animMode == "sector") {
            logos.position.x += 0.05 * event.deltaX;
            logos.position.y += 0.05 * -event.deltaY;

            sectors.position.x += 0.05 * event.deltaX;
            sectors.position.y += 0.05 * -event.deltaY;
        } else {
            logos.rotation.y += 0.0002 * event.deltaX;

            for(var i=0; i < logos.children.length; i++) {
                logos.children[i].rotation.y -= 0.0002 * event.deltaX;
            }
        }

        timerObject.reset(12);
       
    });
    
    hammertime.get("pinch").set({enable:true});
    hammertime.on("pinch", function(event){
        if (animMode == "singleicon") {
            return;
        }
        
        var fov;
        if (event.additionalEvent === "pinchout") {
            fov = camera.fov - event.distance * 0.02;
        } else if (event.additionalEvent === "pinchin") {
            fov = camera.fov + event.distance * 0.02;
        }
        camera.fov = THREE.Math.clamp( fov, 30, 150 );
        camera.updateProjectionMatrix();
        timerObject.reset(12);
    });

    hammertime.on("tap", function(event){
        if (animMode == "singleicon") {
            return;
        }
        
        onRendererClick(event);
    });

    //For detecting swipe swipe on text
    var hammertime2 = new Hammer($("#intropane").get(0));

    hammertime2.on("swipeleft", function(event) {
        
        menuIndex += 1;
        if (menuIndex > menuData.length - 1) {
            menuIndex = 0;
        }

        updateState(menuIndex, "left");
        timerObject.reset(12);

    });

    hammertime2.on("swiperight", function(event) {
        
        menuIndex -= 1;
        if (menuIndex < 0) {
            menuIndex = menuData.length - 1;
        }
        
        updateState(menuIndex, "right");
        timerObject.reset(12);

    });

    $("#helixchart").on("mousewheel DOMMouseScroll", function(event){
        
        if (animMode == "singleicon") {
            return;
        }
        
        var delta = event.originalEvent.deltaY;

        //Firefox uses different mousescroll event 
        if (delta == undefined) { delta = event.originalEvent.detail * 30; }
                
        var fov = camera.fov + delta * 0.02;
        camera.fov = THREE.Math.clamp( fov, 30, 150 );
        camera.updateProjectionMatrix();
        
        //prevent scrolling of page
        event.preventDefault();

        timerObject.reset(12);
        
    });

    $(window).on('resize', onWindowResize);
    $(window).on("visibilitychange", handleVisibilityChange);
    
    $("#introdots span").each(function( index, item ) {
        
        $(item).click(function() {
            
            if (menuIndex >= index) {
              var direction = "left";
            } else {
              var direction = "right";
            }
            
            menuIndex = index;
            updateState(menuIndex, direction);
            
            timerObject.reset(12);
        });
    });
    
}


function updateState(index, direction) {

    camera.fov = 75;
    camera.updateProjectionMatrix();

    animMode = menuData[index].state;
    $("#introtext").text(app.main.l(menuData[index].text));
    if (direction == "left") {
        TweenLite.set("#introtext", {x: 20, autoAlpha:0}, 1);
    } else if (direction == "right") {
        TweenLite.set("#introtext", {x: -20, autoAlpha:0}, 1);
    }
    TweenLite.set("div.button", {autoAlpha:0}, 0);
    TweenLite.to("#introtext", 1, {x: 0, autoAlpha:1},2);
    
    $("#introdots span").removeClass("selected");
    $("#introdots span").eq(menuIndex).addClass("selected");

}

function onWindowResize() {

    frameWidth = ($(".flex-container").innerWidth() >= 990) ? 740 : $(".flex-container").innerWidth();
    frameHeight = frameWidth;

    camera.aspect = frameWidth / frameHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( frameWidth, frameHeight );

}

function onRendererClick(event) {

    //console.log(event.center.x, event.center.y);

    mouse.x = ((event.center.x - ($(".flex-container").innerWidth() - frameWidth)) / frameWidth) * 2 - 1;
    
    if ($(".flex-container").innerWidth() >= 990) {
        mouse.y = - (event.center.y / frameHeight ) * 2 + 1;
    } else {
        mouse.y = - ((event.center.y - $("#intropane").innerHeight()) / frameHeight ) * 2 + 1;
    }
    
    raycaster.setFromCamera( mouse, camera );
    var intersected = raycaster.intersectObjects(logos.children);
    if ( intersected.length > 0 ) {
        var iconPicked = logoData[intersected[0].object.dataID];
        
        selectedIconIndex = intersected[0].object.dataID;
        
        animMode = "singleicon";

        if (app.config.lang == "zh") {
            var url = iconPicked.zh + "#" + iconPicked.id;
        } else {
            var url = iconPicked.en + "#" + iconPicked.id; 
        }

        timerObject.startClick(3, url);
        
    };

}

//Handler of document when tabbed
function handleVisibilityChange() {
  if (document.hidden) {
      clock.stop();
  } else  {
      clock.start();
  }
}

function move(objectCurrent, objectNewPosition, deltaTime) {
    objectCurrent.position.x += (objectNewPosition.x - objectCurrent.position.x) * deltaTime;
    objectCurrent.position.y += (objectNewPosition.y - objectCurrent.position.y) * deltaTime;
    objectCurrent.position.z += (objectNewPosition.z - objectCurrent.position.z) * deltaTime;
}

function resetToOrigin(deltaTime) {
    
    //reset logos and sectors group coordinates back to origin
    move(logos, origin, deltaTime);
    move(sectors, origin, deltaTime);

    //Move sectors back to sector1 position - background
    for(var i=0; i < sectors.children.length; i++) {
        move(sectors.children[i], data.sectors[i].sector1, deltaTime);
    }

}

function animate() {

    requestAnimationFrame( animate );
    render();

}

function render() {

    var delta = clock.getDelta();

    move(camera,_.findWhere(animData, {state: animMode}).camera, camSpeed * delta);
    camera.lookAt( scene.position );

    if (animMode === "helix") {
        logos.rotation.y -= 0.5 * delta;
        for(var i=0; i < logos.children.length; i++) {

            move(logos.children[i], data.logos[i].helix, tweenSpeed * delta);
            logos.children[i].rotation.y += 0.5 * delta;
        }

        resetToOrigin(1.5 * delta);
        
    } else if (animMode === "globe") {
        logos.rotation.y += 0.2 * delta;
        for(var i=0; i < logos.children.length; i++) {

            move(logos.children[i], data.logos[i].globe, tweenSpeed * delta);
            logos.children[i].rotation.y -= 0.2 * delta;
        }
        
        resetToOrigin(1.5 * delta);

    } else if (animMode === "sector") {
        for(var i=0; i < logos.children.length; i++) {

            move(logos.children[i], data.logos[i].sector, tweenSpeed * delta);
            logos.children[i].rotation.y += (0 - logos.children[i].rotation.y) * tweenSpeed * delta;
            
            if (logos.children[i].rotation.y > Math.PI * 2) { 
                logos.children[i].rotation.y -= 2 * Math.PI; 
            } else if (logos.children[i].rotation.y < -Math.PI * 2) { 
                logos.children[i].rotation.y += 2 * Math.PI; 
            }
            
        }
        
        logos.rotation.y += (0 - logos.rotation.y) * tweenSpeed * delta;

        //move sectors children to sector2 position - foreground
        for(var i=0; i < sectors.children.length; i++) {
            move(sectors.children[i], data.sectors[i].sector2, tweenSpeed * delta);
        }

    } else if (animMode === "singleicon") {
        
        camera.lookAt(origin);
        
        for(var i=0; i < logos.children.length; i++) {
            if (i != selectedIconIndex) {
                move(logos.children[i], backOrigin, tweenSpeed / 10 * delta);
            } else {
                move(logos.children[i], origin, tweenSpeed * delta);
            }
            logos.children[i].rotation.y += (0 - logos.children[i].rotation.y) * tweenSpeed  * delta;
        }
                
        logos.rotation.y += (0 - logos.rotation.y) * tweenSpeed * delta;
        
        move(logos, origin, tweenSpeed * delta);
        move(sectors, origin, tweenSpeed * delta);

        
        for(var i=0; i < sectors.children.length; i++) {
            move(sectors.children[i], backOrigin, tweenSpeed / 10 * delta);
        }
    }
    
    if (logos.rotation.y > Math.PI * 2) { 
        logos.rotation.y -= 2 * Math.PI; 
    } else if (logos.rotation.y < -Math.PI * 2) { 
        logos.rotation.y += 2 * Math.PI; 
    }

    for(var i=0; i < logos.children.length; i++) {
        if (logos.children[i].rotation.y > Math.PI * 2) { 
            logos.children[i].rotation.y -= 2 * Math.PI; 
        } else if (logos.children[i].rotation.y < -Math.PI * 2) { 
            logos.children[i].rotation.y += 2 * Math.PI; 
        }
    }

    
    renderer.render( scene, camera );

}
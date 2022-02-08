'use strict';

function wrap(text, width) {
    text.each(function() {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", 1.0 + dy + "em").text(word);
            }
        }
    });
}

var animations = {
    run:function(tl, slices, animation, in_out) {
        // console.log(tl, slices, animation, in_out);
        if (animation === 'spin1') {

            if (in_out == "anim_in") {
                tl.staggerFrom(slices, animationDuration, {scale: 0, rotation:360, opacity:0, ease:Power2.easeInOut}, 0.1);
            } else {
                tl.staggerTo(slices, animationDuration, {scale: 0, rotation:-360, opacity:0, ease:Power2.easeInOut}, 0.1);
            }
            

        } else if (animation === 'spin2') {
            if (in_out == "anim_in") {
                $.each(slices, function(index, item) {
                    if (index % 2 == 0) {
                        tl.from(item, animationDuration, {scale: 0, rotation:360, opacity:0, ease:Power2.easeOut}, index * 0.1);
                    } else {
                        tl.from(item, animationDuration, {scale: 0, rotation:-360, opacity:0, ease:Power2.easeOut}, index * 0.1);
                    }
                });
            } else {
                $.each(slices, function(index, item) {
                    if (index % 2 == 0) {
                        tl.to(item, animationDuration, {scale: 0, rotation:-360, opacity:0, ease:Power2.easeIn}, index *0.1);
                    } else {
                        tl.to(item, animationDuration, {scale: 0, rotation:360, opacity:0, ease:Power2.easeIn}, index *0.1);
                    }
                });
            }

        } else if (animation === 'spin3') {

            if (in_out == "anim_in") {
                $.each(slices, function(index, item) {
                    var rX = 60, 
                        rY = -60,
                        r = -360;
                        
                    //Webkit has bugs when both 3D transforms AND scale / opacity
                    tl.from(item, animationDuration, {rotationX:rX, rotationY:rY, rotation: r, scale:0, opacity:0, ease:Power2.easeOut}, index * 0.1);
                });
            } else {
                $.each(slices, function(index, item) {
                    var rX = -60, 
                        rY = 60,
                        r = 360;
                        
                    //Webkit has bugs when both 3D transforms AND scale / opacity
                    tl.to(item, animationDuration, { rotationX:rX, rotationY:rY, rotation: r, scale:0, opacity:0, ease:Power2.easeIn}, index * 0.1);
                });
            }

        } else if (animation === 'centerEase') {

            if (in_out == "anim_in") {
                tl.staggerFrom(slices, animationDuration, {scale:0, opacity:0, ease:Power2.easeInOut}, 0.1);
            } else {
                tl.staggerTo(slices, animationDuration, {scale:0, opacity:0, ease:Power2.easeInOut}, 0.1);
            }

        } else if (animation === 'explode') {
        
            if (in_out == "anim_in") {
                $.each(slices, function(index, item) {
                    var rX = Math.random() * 540 - 270, 
                        rY = Math.random() * 540 - 270,
                        r = Math.random() * 540 - 270;
                                                
                    //Webkit has bugs when both 3D transforms AND scale / opacity
                    tl.from(item, animationDuration * 1.2, {rotationX:rX, rotationY:rY, rotation: r, scale:0, opacity:0, ease:Power2.easeOut}, 0.1);
                });
            } else {
                $.each(slices, function(index, item) {
                    var rX = Math.random() * 540 - 270, 
                        rY = Math.random() *540 - 270,
                        r = Math.random() * 540 - 270;
                        
                    //Webkit has bugs when both 3D transforms AND scale / opacity
                    tl.to(item, animationDuration * 1.2, { rotationX:rX, rotationY:rY, rotation: r, scale:0, opacity:0, ease:Power2.easeIn}, 0.1);
                });
            }
            
        } else if (animation === 'skewRightToLeft') {

            if (in_out == "anim_in") {
                tl.staggerFrom(slices, animationDuration, {skewY: 90, ease:Back.easeOut}, 0.1);
            } else {
                tl.staggerTo(slices, animationDuration, {skewY: -90, ease:Back.easeIn}, 0.1);
            }

        } else if (animation === 'skewLeftToRight') {

            if (in_out == "anim_in") {
                tl.staggerFrom(slices, animationDuration, {skewY: -90, ease:Back.easeOut}, 0.1);
            } else {
                tl.staggerTo(slices, animationDuration, {skewY: 90, ease:Back.easeIn}, 0.1);
            }

        } // if (animation === 'spin1')
    },
};

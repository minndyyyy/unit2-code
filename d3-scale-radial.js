(function(global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("d3-scale")) :
    typeof define === "function" && define.amd ? define(["exports", "d3-scale"], factory) :
    (factory(global.d3 = global.d3 || {}, global.d3));
  }(this, function(exports, d3Scale) {
    'use strict';
  
    function square(x) {
      return x * x;
    }
  
    function radial() {
      var linear = d3Scale.scaleLinear();
  
      function scale(x) {
        return Math.sqrt(linear(x));
      }
  
      scale.domain = function(_) {
        return arguments.length ? (linear.domain(_), scale) : linear.domain();
      };
  
      scale.nice = function(count) {
        return (linear.nice(count), scale);
      };
  
      scale.range = function(_) {
        return arguments.length ? (linear.range(_.map(square)), scale) : linear.range().map(Math.sqrt);
      };
  
      scale.ticks = linear.ticks;
      scale.tickFormat = linear.tickFormat;
  
      return scale;
    }
    

    function tooltipStyleShow(el) {
      d3.select(el)
          .style("stroke", "black")
          .style("opacity", 1)
    }

    function tooltipStyleHide(el) {

        d3.select(el)
            .style("stroke", "none")
            .style("opacity", 0.7)
    }


    // Function to extract the data we want to show in the tooltip
    function getTooltipData(d) {
    // Formatting: http://koaning.s3-website-us-west-2.amazonaws.com/html/d3format.html
        let formatPercent = d3.format(".0%");
        let formatComma = d3.format(",.0f");
        return {
            tt1 : d["Hour"],
            tt2: "Wind Speed: " + d3.format(",.2f")(d["Value"]),
              //  tt3 : "Life Exp: " + d3.format(".2f")(d["Life expectancy at birth"]),
              //  tt4 : "Population: " + formatComma(d["Population"])
              // tt4 : "something else here"
            }
          }

    exports.scaleRadial = radial;
  
    Object.defineProperty(exports, '__esModule', {value: true});
  }));
  

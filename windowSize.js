var gauge1 = loadLiquidFillGauge("fillgauge1", resize());
var config1 = liquidFillGaugeDefaultSettings();
// config1.circleThickness = 0.2;
// config1.circleColor = "#6DA398";
// config1.textColor = "#0E5144";
// config1.waveTextColor = "#6DA398";
// config1.waveColor = "#246D5F";
// config1.textVertPosition = 0.52;
// config1.waveAnimateTime = 5000;
// config1.waveHeight = 0.05;
// config1.waveAnimate = true;
// config1.waveCount = 2;
// config1.waveOffset = 0.25;
// config1.textSize = 1.2;
// config1.minValue = 400;
// config1.maxValue = 1440
// config1.displayPercent = false;

// var gauge2 = loadLiquidFillGauge("fillgauge2", resize(), config1);
// var config2 = liquidFillGaugeDefaultSettings();
// config2.circleThickness = 0.2;
// config2.circleColor = "#6DA398";
// config2.textColor = "#0E5144";
// config2.waveTextColor = "#6DA398";
// config2.waveColor = "#246D5F";
// config2.textVertPosition = 0.52;
// config2.waveAnimateTime = 5000;
// config2.waveHeight = 0.05;
// config2.waveAnimate = true;
// config2.waveCount = 2;
// config2.waveOffset = 0.25;
// config2.textSize = 1.2;
// config2.minValue = 400;
// config2.maxValue = 1440
// config2.displayPercent = false;

function resize() {
  //note i need to pass the event as an argument to the function
  width = window.outerWidth;
  // height = e.target.outerHeight;
  return width;

  console.log(width);
}
window.addEventListener("resize", resize);

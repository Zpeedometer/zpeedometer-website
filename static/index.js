// Story Text
const storyTextSetActive = () => {
  document.querySelectorAll("#storyText > div").forEach(div => {
    if (div.getBoundingClientRect().top <= window.innerHeight / 2) div.classList.add("active");
    else div.classList.remove("active");
  });
}

window.addEventListener("scroll", storyTextSetActive);
window.addEventListener("resize", storyTextSetActive);
storyTextSetActive();

// Sliders
const sliders = document.querySelectorAll(".slider")

sliders.forEach(slider => {
  const updateSlider = () => {
    const sliderPercent = (slider.value - slider.min) / (slider.max - slider.min);
    slider.style.background = `linear-gradient(to right, var(--accent-blue) ${sliderPercent * 100}%, #666 ${sliderPercent * 100}%)`;
  }

  updateSlider();
  slider.addEventListener("input", updateSlider);
});

// Speedometer Showcase
const speedometer = document.getElementById("speedometer"),
  speedSlider = document.getElementById("speedSlider"),
  maxValueSlider = document.getElementById("maxValueSlider"),
  labelTextInput = document.getElementById("labelTextInput");
let maxValue = 240;
const startAngle = 220;

function generateTicks(maxValue = 240) {
  let majorStep = 10;
  if (maxValue > 120) majorStep = 20;
  else if (maxValue > 70) majorStep = 10;
  else majorStep = 5;

  const ticks = speedometer.querySelectorAll(":scope > .tick");
  ticks.forEach(tick => tick.remove());

  for (let i = 0; i < maxValue / majorStep * 2 + 1; i++) {
    const value = i * majorStep / 2;
    const angle = startAngle + i * (500 - startAngle) / maxValue * majorStep / 2;
    const isMajor = value % majorStep === 0;
    const tick = document.createElement("div");
    tick.classList.add("tick", isMajor ? "major" : "minor");
    tick.style.setProperty("--angle", `${angle}deg`);
    if (isMajor) tick.style.setProperty("--label", `"${value}"`);
    speedometer.appendChild(tick);
  }
}

function setPointerToSpeed(speed = 0, maxValue = 240) {
  speed = Math.min(Math.max(speed, 0), maxValue);
  const pointerAngle = startAngle - 1 + (speed / (maxValue + 2)) * (500 - startAngle + 3.5);
  pointer.style.transform = `rotate(${pointerAngle}deg) translateY(-52px)`;
};

generateTicks();
setPointerToSpeed();
speedometer.style.setProperty("--speedometer-label", "'Zpeedometer'");
speedSlider.addEventListener("input", () => setPointerToSpeed(speedSlider.value));
maxValueSlider.addEventListener("input", () => generateTicks(maxValueSlider.value));
labelTextInput.addEventListener("input", () => speedometer.style.setProperty("--speedometer-label", `"${labelTextInput.value}"`));
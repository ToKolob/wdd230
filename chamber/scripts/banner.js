document.addEventListener("DOMContentLoaded", function() {
  const banner = document.getElementById("banner");
  const closeBanner = document.getElementById("closeBanner");
  const currentDate = new Date();
  const currentDay = currentDate.getDay(); // Sunday is 0, Monday is 1, ..., Saturday is 6

  // Show the banner only on Mondays, Tuesdays, and Wednesdays
  if (currentDay >= 1 && currentDay <= 3) {
    banner.style.display = "block";
  }

  // Close banner when close button is clicked
  closeBanner.addEventListener("click", function() {
    banner.style.display = "none";
  });
});
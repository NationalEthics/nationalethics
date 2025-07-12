// 간단한 인터랙션 예시 (향후 필요시 확장 가능)
document.addEventListener("DOMContentLoaded", function () {
  const lessonSections = document.querySelectorAll("section");
  lessonSections.forEach(section => {
    section.addEventListener("click", () => {
      alert(section.querySelector("h2").textContent + " 차시가 선택되었습니다.");
    });
  });
});
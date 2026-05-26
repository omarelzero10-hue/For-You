document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const envelopeWrapper = document.getElementById("envelopeWrapper");
  const cardWrapper = document.getElementById("cardWrapper");
  const heartsBg = document.getElementById("heartsBg");

  // 1. توليد قلوب عشوائية بتتحرك في الخلفية بشكل جمالي
  function createBackgroundHearts() {
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const heart = document.createElement("div");
        heart.classList.add("bg-heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 4 + "s"; // بين 4 لـ 7 ثواني
        heart.style.fontSize = Math.random() * 1 + 1 + "rem";
        heartsBg.appendChild(heart);

        // مسح القلب بعد ما يخلص الأنميشن
        setTimeout(() => {
          heart.remove();
        }, 7000);
      }, i * 300);
    }
  }

  createBackgroundHearts();
  // تكرار توليد القلوب كل 7 ثواني عشان الخلفية تفضل حية
  setInterval(createBackgroundHearts, 7000);

  // 2. حدث الضغط لفتح الجواب وظهور كارت الكلام
  envelope.addEventListener("click", () => {
    // إضافة كلاس الفتح لتشغيل أنيميشن الـ Flap
    envelope.classList.add("open");

    // الانتظار ثانية لحد ما الجواب يتفتح، بعدين نخفيه ونظهر الكارت
    setTimeout(() => {
      envelopeWrapper.classList.add("fade-out");

      setTimeout(() => {
        envelopeWrapper.style.display = "none";
        cardWrapper.classList.remove("hidden");

        // أنيميشن ناعم لظهور الكارت بالكامل
        setTimeout(() => {
          cardWrapper.style.opacity = "1";
          cardWrapper.style.transform = "translateY(0)";
        }, 50);
      }, 600); // وقت اختفاء الجواب الأول
    }, 1000); // وقت حركة فتح الجواب
  });
});

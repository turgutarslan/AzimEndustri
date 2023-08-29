script = new Array();

script[0] =
  "<em> “Aksiyon olmadan vizyon sadece bir hayal, vizyon olmadan aksiyon ise sadece bir aktivitedir. Vizyon ve aksiyon dünyayı birlikte değiştirebilir.” </em>";

script[1] =
  "<em> “Başarı bir yolculuktur, bir varış noktası değil.” </em>";

script[2] =
  "<em> “Üstelemek başarının temel unsurudur. Kapıyı yeterince uzun süre ve yüksek sesle çalarsanız, birilerini uyandıracağınızdan emin olabilirsiniz.” </em>";

script[3] =
  "<em> “Plansız çalışan kimse, ülke ülke dolaşıp hazine arayan bir insana benzer.” </em>";

script[4] =
  "<em> “Ya başlamamalı, ya da bitirmeli.” </em>";

script[5] =
  "<em> “Demir mıknatısa aşıktır, hep ona doğru koşar, zafer de sabra aşıktır ve devamlı ona koşar.” </em>";

script[6] =
  "<em> “Dikkate değer bir başarı ancak ekip işinden doğar.” </em>";

RandomNumber = Math.floor(
  Math.random() * script.length
);

document.write(script[RandomNumber]);

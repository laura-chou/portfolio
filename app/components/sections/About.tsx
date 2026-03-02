"use client";

export const About = () => {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
          <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
          關於我
          <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          因為想學一技之長而跑去學電腦程式語言，學著學著發現原來程式語言能應用在許多方面，覺得相當有趣，目前正在程式語言方面持續學習。
        </p>
      </div>
    </section>
  );
};

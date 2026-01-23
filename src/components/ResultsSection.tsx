type VideoItem = {
  id: string;
  title: string;
  srcMp4: string;
};

const VIDEO: VideoItem = {
  id: "1",
  title: "Metodologia 44",
  srcMp4: "/videos/vd.mp4",
};

function VideoGrid() {
  return (
    <section className="px-6 py-28 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ================= TEXTO - ESQUERDA ================= */}
          <div className="space-y-6">
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400">
              Performance
            </p>

            <h2 className="font-display text-4xl md:text-5xl text-white">
              Metodologia 44
            </h2>

            <p className="text-neutral-300 text-lg leading-relaxed">
              A Metodologia 44 é um sistema de desenvolvimento de atletas de
              alta performance, focado em acelerar a evolução técnica,
              física e mental dentro de contextos reais de jogo.
            </p>

            <p className="text-neutral-400 leading-relaxed">
              Cada sessão é desenhada para exigir tomada de decisão rápida,
              leitura tática e intensidade máxima, formando atletas mais
              preparados, confiantes e consistentes para o alto rendimento.
            </p>
          </div>

          {/* ================= VÍDEO - DIREITA (VERTICAL GRANDE) ================= */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] xl:w-[420px] aspect-[9/16] rounded-3xl overflow-hidden border border-neutral-700 bg-black shadow-2xl">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src={VIDEO.srcMp4} type="video/mp4" />
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default VideoGrid;

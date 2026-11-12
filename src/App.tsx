import React from "react"
import { motion } from "framer-motion"
import {
  Sparkles,
  Milestone,
  CheckCircle2,
  Compass,
  ArrowDown,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export default function App() {
  // 다) 걸어온 길 — 시기 순서대로 네다섯 줄 (지어낸 연도/회사명 배제, 원문의 배움과 탐색 여정 반영)
  const journeySteps = [
    {
      step: "01",
      label: "호기심과 배움의 출발",
      description:
        "새로운 것을 배우고 다양한 관점에서 생각하며, 직접 작은 실험을 시작하는 과정에서 성장의 원동력을 마련했습니다.",
    },
    {
      step: "02",
      label: "디지털 기술과 다방면의 탐색",
      description:
        "인공지능, 웹 개발, 자동화 도구와 더불어 독서, 언어 학습, 경제와 사회 변화를 관찰하며 지식의 폭을 넓혔습니다.",
    },
    {
      step: "03",
      label: "서로 다른 지식의 연결과 프로젝트 구상",
      description:
        "개인 웹사이트, 생산성 도구, 독서 기록, 데이터 분석 등 가상의 과제를 설정하고 직접 구현하며 아이디어를 구체화했습니다.",
    },
    {
      step: "04",
      label: "지속 가능한 성장과 실용적 실행",
      description:
        "단기적인 성과에 머무르지 않고, 배움을 멈추지 않으며 작은 시도를 꾸준히 실제 결과물로 발전시켜 나가고 있습니다.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#e2e4ea] relative overflow-x-hidden selection:bg-[#a3e635]/20 selection:text-[#a3e635]">
      {/* 맨 위 화면 배경 은은한 무늬 (그림 파일 없이 CSS/도형만 활용) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* 미세한 그리드 패턴 */}
        <div className="absolute inset-0 bg-subtle-grid opacity-70" />
        
        {/* 상단 은은한 연두색 원형 빛무리 */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[340px] bg-[#a3e635]/[0.04] rounded-full blur-[120px] animate-subtle-float" />
        
        {/* 은은한 기하학 선 */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-[#a3e635]/15 to-transparent" />
      </div>

      {/* 상단 네비게이션 바 */}
      <header className="relative z-10 border-b border-white/5 backdrop-blur-md bg-[#0c0d10]/70 sticky top-0">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#a3e635] shadow-[0_0_8px_#a3e635]" />
            <span className="font-bold tracking-tight text-sm sm:text-base text-[#f1f3f8]">
              My Personal Space
            </span>
          </div>
          <nav className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#9ca3af]">
            <a href="#about" className="hover:text-[#a3e635] transition-colors">
              소개
            </a>
            <a href="#journey" className="hover:text-[#a3e635] transition-colors">
              걸어온 길
            </a>
            <a href="#philosophy" className="hover:text-[#a3e635] transition-colors">
              가치관
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
        {/* ========================================================= */}
        {/* 가) 맨 위 한 줄 소개 및 메인 헤더 영역 */}
        {/* ========================================================= */}
        <section id="about" className="pt-20 pb-24 sm:pt-28 sm:pb-32 flex flex-col items-start justify-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full"
          >
            {/* 상단 레이블 태그 */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#a3e635]/30 bg-[#a3e635]/10 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-[#a3e635]" />
              <span className="text-xs font-semibold tracking-wide text-[#a3e635] uppercase">
                Explore · Create · Grow
              </span>
            </div>

            {/* 메인 타이틀: 화면이 작아져도 너무 작아지지 않게, 아주 굵고 자간 살짝 좁힘 */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#f3f4f8] leading-[1.12] mb-8 break-keep">
              배우고, 생각하고,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f3f4f8] via-[#e2e4ea] to-[#a3e635]">
                새로운 가능성을
              </span>{" "}
              발견하는 공간
            </h1>

            {/* 가) 맨 위 한 줄 소개: 제가 어떤 사람인지 한 문장으로 */}
            <div className="p-5 sm:p-6 rounded-xl border border-white/10 bg-[#14161d] mb-8 w-full max-w-3xl">
              <div className="text-xs font-semibold text-[#a3e635] mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#a3e635]" />
                소개
              </div>
              <p className="text-lg sm:text-xl font-bold text-[#f1f3f8] leading-relaxed break-keep">
                호기심으로 시작해 배움으로 성장하며, 새로운 아이디어를 탐색하고 작은 생각을 실제 결과물로 발전시키는 사람입니다.
              </p>
            </div>

            {/* 보조 설명 문장 */}
            <p className="text-sm sm:text-base text-[#9ca3af] max-w-2xl leading-relaxed mb-10 break-keep">
              기술의 발전이 일상을 어떻게 바꾸는지 탐구하고, 서로 다른 분야의 지식과 경험을 연결하여 더 나은 내일을 만드는 과정을 기록합니다.
            </p>

            {/* 액션 버튼 */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="bg-[#a3e635] text-[#0c0d10] hover:bg-[#bef264] font-bold text-sm px-6 h-11"
              >
                <a href="#journey" className="flex items-center gap-2">
                  걸어온 길 보기
                  <ArrowDown className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-white/10 text-[#e2e4ea] hover:bg-white/5 hover:border-[#a3e635]/40 text-sm px-6 h-11"
              >
                <a href="#philosophy" className="flex items-center gap-2">
                  가치관 살펴보기
                </a>
              </Button>
            </div>
          </motion.div>
        </section>

        <Separator className="bg-white/10" />

        {/* ========================================================= */}
        {/* 다) 걸어온 길 — 시기 순서대로 네다섯 줄 */}
        {/* ========================================================= */}
        <section id="journey" className="py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-[#a3e635] uppercase tracking-wider mb-3">
              <Milestone className="w-4 h-4 text-[#a3e635]" />
              Roadmap & Experience
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#f3f4f8] mb-4">
              걸어온 길
            </h2>
            <p className="text-sm sm:text-base text-[#9ca3af] max-w-2xl leading-relaxed break-keep">
              배움과 호기심에서 출발해 다양한 분야의 지식을 연결하고 실행으로 옮겨 온 탐색의 흐름입니다.
            </p>
          </motion.div>

          <div className="relative border-l border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-10">
            {journeySteps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* 타임라인 원형 마커 */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#14161d] border-2 border-white/20 group-hover:border-[#a3e635] group-hover:bg-[#a3e635]/20 transition-all duration-300" />

                <div className="p-6 rounded-xl border border-white/10 bg-[#14161d] group-hover:border-[#a3e635]/30 group-hover:bg-[#171a23] transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-mono font-bold text-[#a3e635] px-2 py-0.5 rounded bg-[#a3e635]/10 border border-[#a3e635]/20">
                      STEP {item.step}
                    </span>
                    <h3 className="text-lg font-bold text-[#f1f3f8] group-hover:text-[#a3e635] transition-colors break-keep">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed break-keep">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="bg-white/10" />

        {/* ========================================================= */}
        {/* 가치관 및 목표 (원문의 핵심 철학) */}
        {/* ========================================================= */}
        <section id="philosophy" className="py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 rounded-2xl border border-white/10 bg-[#14161d] relative overflow-hidden"
          >
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#a3e635] uppercase tracking-wider mb-4">
                <Compass className="w-4 h-4 text-[#a3e635]" />
                My Philosophy
              </div>
              <blockquote className="text-xl sm:text-2xl font-black text-[#f1f3f8] leading-snug tracking-tight mb-4 break-keep">
                “The best way to grow is to never stop learning.”
              </blockquote>
              <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed break-keep mb-6">
                배우는 즐거움, 생각하는 습관, 실행하는 용기. 이 세 가지가 더 나은 내일을 만드는 원동력이며, 성장하는 가장 좋은 방법은 배움을 멈추지 않는 것입니다.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-medium text-[#d1d5db]">
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/5">
                  끊임없이 배우기
                </span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/5">
                  스스로 생각하기
                </span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/5">
                  아이디어를 실행하기
                </span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/5">
                  지식 연결하기
                </span>
                <span className="px-3 py-1 rounded-md bg-white/5 border border-white/5">
                  매일 조금씩 성장하기
                </span>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* 하단 푸터 (로그인/회원가입/댓글/방문자 수 일절 없음) */}
      <footer className="border-t border-white/10 bg-[#090a0d] py-12 text-[#9ca3af] text-xs">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold text-[#e2e4ea]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
            My Personal Space
          </div>
          <div className="text-center sm:text-right text-[#6b7280]">
            Explore. Create. Grow.
          </div>
        </div>
      </footer>
    </div>
  )
}

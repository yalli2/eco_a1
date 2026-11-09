# ECO A1 · Español — 인터랙티브 학습 사이트 (Unidad 1–8)

교재 **ECO A1 – Libro del Alumno (Edelsa)** 8개 단원 전체를 국제학교 스페인어 수업에서 쓰기 위한 인터랙티브 학습 사이트입니다.
디자인·채점 방식은 [Español básico v2](https://yalli2.github.io/major_spanish_v2/)와 통일했습니다.

- 사이트: https://yalli2.github.io/eco_a1/
- 단원별 주소: `/U1/` … `/U8/` · 어휘 사전: `/glosario/`

## 각 단원 구성 (교재 순서)
Portada(학습 목표·도입 듣기) → A Comprensión y práctica → B Pronunciación y ortografía → C Léxico → D Gramática (2쪽)
→ E Expresión oral → Mundo hispano → Síntesis → Ya conoces → ¡Compruébalo!(100점 단원 평가, 매번 새 문제) → Resultados(성적표·레이더 차트·인쇄)

- 교재의 모든 번호 활동을 문항으로 재현 (빈칸·선택·V/F·연결·분류·문장 배열·받아쓰기·자유 답변·말하기 모델)
- 채점 표식: ○ 정답 / △ 악센트·¿¡ 부호만 틀림 / ✕ 오답 + 정답 표시, 활동별 점수와 % 표시
- 🔊 원어민 음성: 기기의 가장 자연스러운 스페인어 신경망 음성을 자동 선택 (Edge “Microsoft … Online (Natural)”, Chrome “Google español”), 등장인물 성별에 맞춰 남/여 음성 구분, 속도 조절
- 🌐 오른쪽 위 언어 변경: 한국어 · English · Español · 日本語 · 中文 · Français · Deutsch · Português · Italiano · Русский
  (설명·번역 내용은 한국어/영어/스페인어, 나머지 언어는 화면 UI + 영어 번역)
- 특수문자(á é í ó ú ñ ü ¿ ¡) 입력 버튼, 모바일 지원, 기록은 학생 브라우저(localStorage `ecoa1_*`)에만 저장

## 파일 구조
```
index.html            메인(단원 목록 · 진도)
glosario/index.html   전 단원 어휘 검색 · 발음
U1 … U8/index.html    단원 페이지 (build.js가 생성)
units/u1.js … u8.js   단원 데이터 (교재 내용 · 정답)
units/meta.js         메인·어휘 사전용 요약 (생성)
common/engine.js      공통 엔진 (렌더링 · 채점 · 평가 · 성적표)
common/i18n.js        다국어 UI · 언어 변경 · 원어민 음성
common/style.css, eco.css
```
다인원격평생교육직업학원 · 후안샘 스페인어

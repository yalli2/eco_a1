/* ECO A1 — UI translations, language switch, natural Spanish voice (Web Speech) */
(function () {
  'use strict';
  const LANGS = [
    ['ko', '한국어', '🇰🇷'], ['en', 'English', '🇬🇧'], ['es', 'Español', '🇪🇸'], ['ja', '日本語', '🇯🇵'], ['zh', '中文', '🇨🇳'],
    ['fr', 'Français', '🇫🇷'], ['de', 'Deutsch', '🇩🇪'], ['pt', 'Português', '🇧🇷'], ['it', 'Italiano', '🇮🇹'], ['ru', 'Русский', '🇷🇺']
  ];
  const K = ['heroSub', 'nameLbl', 'namePh', 'progress', 'home', 'voice', 'howTo', 'lgOk', 'lgHalf', 'lgNo', 'check', 'retry', 'showAns', 'score',
    'cont', 'start', 'goals', 'student', 'myProg', 'nameNote', 'listen', 'playAll', 'stop', 'trans', 'bank', 'hint', 'tru', 'fal', 'choose', 'type',
    'tap', 'clear', 'model', 'correct', 'accent', 'punct', 'exam', 'examSub', 'examNew', 'examSubmit', 'examHist', 'results', 'resultsSub', 'overall',
    'bySec', 'print', 'reset', 'resetQ', 'gStart', 'gUnit', 'gCult', 'gEval', 'vTitle', 'vFem', 'vMale', 'speed', 'test', 'noVoice', 'vTip',
    'unans', 'perfect', 'good', 'keep', 'solved', 'qs', 'footer', 'keys', 'speak', 'empty', 'almost', 'units', 'totalDone', 'tipStudy', 'notYet',
    'cover', 'sections', 'pts', 'date', 'done', 'search', 'gloss', 'glossSub', 'all', 'match', 'nameShow', 'mic', 'micNo', 'heard', 'trShow', 'trHide'];
  const T = {
    ko: ['ECO A1 교재 8개 단원을 듣고, 읽고, 바로 풀어 보는 인터랙티브 학습 사이트 — 단원을 골라 시작하세요.', '이름 · Nombre', '이름을 쓰세요', '진도', '전체 단원', '음성 설정', '이렇게 공부해요', '정답', '거의 정답 (악센트·부호)', '오답 — 정답이 표시돼요', '채점하기', '다시 풀기', '정답 보기', '점수',
      '이어서 학습하기', '학습 시작', '학습 목표', '학생 정보', '나의 진도', '이름은 성적표에 표시됩니다(모든 단원 공통). 기록은 이 기기의 브라우저에만 저장돼요.', '듣기', '전체 듣기', '정지', '번역', '단어 상자', '힌트', '참 (V)', '거짓 (F)', '— 선택 —', '답을 쓰세요',
      '단어를 눌러 문장을 만드세요', '지우기', '예시 답안', '정답', '악센트 확인', '¿ ¡ 부호 확인', '¡Compruébalo!', '단원 평가 (100점) — 문제는 매번 새로 섞여요', '새 시험지', '제출하고 채점', '시험 기록', 'Resultados', '나의 성적표', '종합 점수',
      '섹션별 점수', '인쇄 / PDF', '기록 초기화', '이 단원의 모든 기록을 지울까요?', '시작', '단원 학습', '문화 · 정리', '평가', '음성 설정', '여성 음성', '남성 음성', '속도', '테스트', '이 기기에 스페인어 음성이 없어요. Microsoft Edge(자연스러운 원어민 음성)나 Chrome에서 열어 보세요.', '가장 자연스러운 음성: Edge의 “Microsoft … Online (Natural)” 또는 Chrome의 “Google español”.',
      '아직 답하지 않은 문항이 있어요. 그래도 채점할까요?', '완벽해요! 🎉', '잘했어요! 👏', '조금만 더! 💪', '푼 문항', '문항', '다인원격평생교육직업학원 · 후안샘 스페인어 · ECO A1 (Edelsa) 학습용 — 기록은 이 브라우저에만 저장됩니다.', '특수문자', '말하기 활동', '답을 입력하세요', '거의 맞았어요', '단원', '지금까지 푼 문항', '📘 단원마다: 학습 목표 → A 이해·연습 → B 발음·철자 → C 어휘 → D 문법 → E 말하기 → 문화 → 정리', '아직 시작 안 함',
      '표지', '섹션', '점', '날짜', '완료', '단어 검색…', '어휘 사전', '8개 단원의 모든 어휘 — 눌러서 발음 듣기', '전체', '연결하기', '이름 표시', '말해 보기', '이 브라우저는 음성 인식을 지원하지 않아요 (Chrome 권장).', '들린 말', '번역 보기', '번역 숨기기'],
    en: ['Listen, read and practise all 8 units of ECO A1 — an interactive study site. Choose a unit to begin.', 'Name · Nombre', 'Type your name', 'Progress', 'All units', 'Voice settings', 'How to study', 'Correct', 'Almost (accent / ¿ ¡)', 'Wrong — the answer is shown', 'Check', 'Try again', 'Show answers', 'Score',
      'Continue', 'Start', 'Learning goals', 'Student', 'My progress', 'Your name appears on your report (shared by all units). Records are saved only in this browser.', 'Listen', 'Play all', 'Stop', 'Translation', 'Word bank', 'Hint', 'True (V)', 'False (F)', '— choose —', 'Type your answer',
      'Tap the words to build the sentence', 'Clear', 'Model answer', 'Answer', 'Check the accent', 'Check ¿ ¡', '¡Compruébalo!', 'Unit test (100 points) — new questions every time', 'New test', 'Submit & grade', 'Test history', 'Resultados', 'My report card', 'Overall score',
      'Score by section', 'Print / PDF', 'Reset progress', 'Delete all records for this unit?', 'Start', 'Unit sections', 'Culture & review', 'Assessment', 'Voice settings', 'Female voice', 'Male voice', 'Speed', 'Test', 'No Spanish voice on this device. Try Microsoft Edge (natural native voices) or Chrome.', 'Most natural voices: “Microsoft … Online (Natural)” in Edge or “Google español” in Chrome.',
      'Some questions are unanswered. Grade anyway?', 'Perfect! 🎉', 'Well done! 👏', 'Keep practising! 💪', 'Solved', 'questions', 'Dain Edu · Juan-saem Spanish · ECO A1 (Edelsa) study site — records are saved only in this browser.', 'Accents', 'Speaking task', 'Please answer', 'Almost right', 'Unit', 'questions solved so far', '📘 Each unit: goals → A comprehension → B pronunciation → C vocabulary → D grammar → E speaking → culture → review', 'Not started',
      'Cover', 'Sections', 'pts', 'Date', 'Done', 'Search words…', 'Glossary', 'All the vocabulary of the 8 units — tap to hear it', 'All', 'Match', 'Name', 'Say it', 'Speech recognition is not supported in this browser (use Chrome).', 'Heard', 'Show translation', 'Hide translation'],
    es: ['Escucha, lee y practica las 8 unidades de ECO A1 — sitio de estudio interactivo. Elige una unidad.', 'Nombre', 'Escribe tu nombre', 'Progreso', 'Todas las unidades', 'Voz', 'Cómo estudiar', 'Correcto', 'Casi (tilde / ¿ ¡)', 'Incorrecto — se muestra la respuesta', 'Comprobar', 'Otra vez', 'Ver respuestas', 'Puntuación',
      'Continuar', 'Empezar', 'Objetivos', 'Alumno/a', 'Mi progreso', 'Tu nombre aparece en el informe (común a todas las unidades). Los datos se guardan solo en este navegador.', 'Escuchar', 'Escuchar todo', 'Parar', 'Traducción', 'Banco de palabras', 'Pista', 'Verdadero (V)', 'Falso (F)', '— elige —', 'Escribe tu respuesta',
      'Toca las palabras para formar la frase', 'Borrar', 'Respuesta modelo', 'Respuesta', 'Revisa la tilde', 'Revisa ¿ ¡', '¡Compruébalo!', 'Examen de la unidad (100 puntos) — preguntas nuevas cada vez', 'Nuevo examen', 'Entregar y corregir', 'Historial', 'Resultados', 'Mi boletín', 'Nota global',
      'Nota por sección', 'Imprimir / PDF', 'Borrar progreso', '¿Borrar todos los datos de esta unidad?', 'Inicio', 'Secciones', 'Cultura y repaso', 'Evaluación', 'Voz', 'Voz femenina', 'Voz masculina', 'Velocidad', 'Probar', 'No hay voz en español en este dispositivo. Prueba Microsoft Edge (voces naturales) o Chrome.', 'Voces más naturales: «Microsoft … Online (Natural)» en Edge o «Google español» en Chrome.',
      'Hay preguntas sin responder. ¿Corregir igualmente?', '¡Perfecto! 🎉', '¡Muy bien! 👏', '¡Sigue practicando! 💪', 'Resueltas', 'preguntas', 'Dain Edu · Español con Juan-saem · ECO A1 (Edelsa) — los datos se guardan solo en este navegador.', 'Tildes', 'Expresión oral', 'Responde, por favor', 'Casi', 'Unidad', 'preguntas resueltas', '📘 Cada unidad: objetivos → A comprensión → B pronunciación → C léxico → D gramática → E expresión oral → cultura → repaso', 'Sin empezar',
      'Portada', 'Secciones', 'ptos.', 'Fecha', 'Hecho', 'Buscar palabras…', 'Glosario', 'Todo el vocabulario de las 8 unidades — toca para escuchar', 'Todo', 'Relacionar', 'Nombre', 'Dilo', 'Este navegador no reconoce la voz (usa Chrome).', 'Oído', 'Ver traducción', 'Ocultar traducción'],
    ja: ['ECO A1 の全8課を聞いて・読んで・すぐ解けるインタラクティブ学習サイト。課を選んで始めましょう。', '名前 · Nombre', '名前を入力', '進度', '全ての課', '音声設定', '学習の進め方', '正解', 'おしい（アクセント・記号）', '不正解 — 正解が表示されます', '採点する', 'もう一度', '答えを見る', '得点',
      '続きから学習', '開始', '学習目標', '学生情報', '私の進度', '名前は成績表に表示されます（全課共通）。記録はこのブラウザにのみ保存されます。', '聞く', '全部聞く', '停止', '訳', '単語ボックス', 'ヒント', '正 (V)', '誤 (F)', '— 選択 —', '答えを入力',
      '単語をタップして文を作りましょう', 'クリア', '模範解答', '正解', 'アクセントを確認', '¿ ¡ を確認', '¡Compruébalo!', '単元テスト（100点）— 毎回問題が変わります', '新しいテスト', '提出して採点', 'テスト履歴', 'Resultados', '私の成績表', '総合得点',
      'セクション別得点', '印刷 / PDF', '記録をリセット', 'この課の記録をすべて削除しますか？', 'スタート', '課の学習', '文化・まとめ', '評価', '音声設定', '女性の声', '男性の声', '速度', 'テスト', 'この端末にスペイン語の音声がありません。Microsoft Edge か Chrome で開いてください。', '最も自然な音声：Edge の「Microsoft … Online (Natural)」または Chrome の「Google español」。',
      '未回答の問題があります。採点しますか？', '完璧！🎉', 'よくできました！👏', 'もう少し！💪', '解いた問題', '問', 'Dain Edu · フアン先生のスペイン語 · ECO A1 (Edelsa) 学習用 — 記録はこのブラウザにのみ保存されます。', '特殊文字', 'スピーキング', '答えを入力してください', 'おしい', '課', '問を解きました', '📘 各課：目標 → A 理解 → B 発音 → C 語彙 → D 文法 → E 会話 → 文化 → まとめ', '未開始',
      '表紙', 'セクション', '点', '日付', '完了', '単語を検索…', '語彙集', '全8課の語彙 — タップで発音', 'すべて', '結びつけ', '名前', '言ってみよう', 'このブラウザは音声認識に対応していません（Chrome推奨）。', '認識結果', '訳を表示', '訳を隠す'],
    zh: ['聆听、阅读并练习 ECO A1 全部 8 个单元的互动学习网站。请选择单元开始。', '姓名 · Nombre', '输入你的名字', '进度', '全部单元', '语音设置', '学习方法', '正确', '差一点（重音 / ¿ ¡）', '错误 — 将显示答案', '批改', '再做一次', '查看答案', '得分',
      '继续学习', '开始', '学习目标', '学生信息', '我的进度', '名字会显示在成绩单上（所有单元通用）。记录只保存在此浏览器中。', '听', '全部播放', '停止', '翻译', '词库', '提示', '对 (V)', '错 (F)', '— 选择 —', '输入答案',
      '点击单词组成句子', '清除', '参考答案', '答案', '检查重音符号', '检查 ¿ ¡', '¡Compruébalo!', '单元测验（100 分）— 每次题目都不同', '新试卷', '提交并批改', '测验记录', 'Resultados', '我的成绩单', '总分',
      '各部分得分', '打印 / PDF', '重置进度', '删除本单元的所有记录？', '开始', '单元学习', '文化与复习', '评估', '语音设置', '女声', '男声', '语速', '试听', '此设备没有西班牙语语音。请使用 Microsoft Edge 或 Chrome。', '最自然的语音：Edge 的 “Microsoft … Online (Natural)” 或 Chrome 的 “Google español”。',
      '有题目未作答。仍要批改吗？', '完美！🎉', '做得好！👏', '继续加油！💪', '已做', '题', 'Dain Edu · Juan 老师西班牙语 · ECO A1 (Edelsa) 学习网站 — 记录只保存在此浏览器中。', '特殊字符', '口语练习', '请作答', '差一点', '单元', '道题已完成', '📘 每个单元：目标 → A 理解 → B 发音 → C 词汇 → D 语法 → E 口语 → 文化 → 复习', '未开始',
      '封面', '部分', '分', '日期', '完成', '搜索单词…', '词汇表', '8 个单元的全部词汇 — 点击收听', '全部', '连线', '姓名', '说一说', '此浏览器不支持语音识别（请用 Chrome）。', '识别结果', '显示翻译', '隐藏翻译'],
    fr: ['Écoutez, lisez et pratiquez les 8 unités d’ECO A1 — site d’étude interactif. Choisissez une unité.', 'Nom · Nombre', 'Votre nom', 'Progression', 'Toutes les unités', 'Voix', 'Comment étudier', 'Correct', 'Presque (accent / ¿ ¡)', 'Faux — la réponse s’affiche', 'Corriger', 'Recommencer', 'Voir les réponses', 'Score',
      'Continuer', 'Commencer', 'Objectifs', 'Élève', 'Ma progression', 'Votre nom apparaît sur le bulletin (commun à toutes les unités). Données enregistrées seulement dans ce navigateur.', 'Écouter', 'Tout écouter', 'Stop', 'Traduction', 'Banque de mots', 'Indice', 'Vrai (V)', 'Faux (F)', '— choisir —', 'Votre réponse',
      'Touchez les mots pour former la phrase', 'Effacer', 'Réponse modèle', 'Réponse', 'Vérifiez l’accent', 'Vérifiez ¿ ¡', '¡Compruébalo!', 'Test de l’unité (100 points) — nouvelles questions à chaque fois', 'Nouveau test', 'Rendre et corriger', 'Historique', 'Resultados', 'Mon bulletin', 'Note globale',
      'Note par section', 'Imprimer / PDF', 'Réinitialiser', 'Effacer toutes les données de cette unité ?', 'Début', 'Sections', 'Culture et révision', 'Évaluation', 'Voix', 'Voix féminine', 'Voix masculine', 'Vitesse', 'Tester', 'Aucune voix espagnole sur cet appareil. Essayez Microsoft Edge ou Chrome.', 'Voix les plus naturelles : « Microsoft … Online (Natural) » dans Edge ou « Google español » dans Chrome.',
      'Certaines questions sont sans réponse. Corriger quand même ?', 'Parfait ! 🎉', 'Bravo ! 👏', 'Continuez ! 💪', 'Faites', 'questions', 'Dain Edu · Espagnol avec Juan-saem · ECO A1 (Edelsa) — données enregistrées seulement dans ce navigateur.', 'Accents', 'Expression orale', 'Répondez, svp', 'Presque', 'Unité', 'questions faites', '📘 Chaque unité : objectifs → A compréhension → B prononciation → C lexique → D grammaire → E oral → culture → révision', 'Pas commencé',
      'Couverture', 'Sections', 'pts', 'Date', 'Fait', 'Chercher un mot…', 'Glossaire', 'Tout le vocabulaire des 8 unités — touchez pour écouter', 'Tout', 'Relier', 'Nom', 'Dites-le', 'Reconnaissance vocale non disponible (utilisez Chrome).', 'Entendu', 'Voir la traduction', 'Masquer la traduction'],
    de: ['Hören, lesen und üben Sie alle 8 Lektionen von ECO A1 — interaktive Lernseite. Wählen Sie eine Lektion.', 'Name · Nombre', 'Dein Name', 'Fortschritt', 'Alle Lektionen', 'Stimme', 'So lernst du', 'Richtig', 'Fast (Akzent / ¿ ¡)', 'Falsch — die Lösung wird gezeigt', 'Prüfen', 'Nochmal', 'Lösungen zeigen', 'Punkte',
      'Weiterlernen', 'Starten', 'Lernziele', 'Schüler/in', 'Mein Fortschritt', 'Dein Name erscheint im Zeugnis (für alle Lektionen). Daten nur in diesem Browser gespeichert.', 'Hören', 'Alles hören', 'Stopp', 'Übersetzung', 'Wortkasten', 'Hinweis', 'Richtig (V)', 'Falsch (F)', '— wählen —', 'Antwort eingeben',
      'Tippe die Wörter, um den Satz zu bilden', 'Löschen', 'Musterantwort', 'Lösung', 'Akzent prüfen', '¿ ¡ prüfen', '¡Compruébalo!', 'Lektionstest (100 Punkte) — jedes Mal neue Fragen', 'Neuer Test', 'Abgeben & bewerten', 'Testverlauf', 'Resultados', 'Mein Zeugnis', 'Gesamtpunktzahl',
      'Punkte pro Abschnitt', 'Drucken / PDF', 'Zurücksetzen', 'Alle Daten dieser Lektion löschen?', 'Start', 'Abschnitte', 'Kultur & Wiederholung', 'Bewertung', 'Stimme', 'Frauenstimme', 'Männerstimme', 'Tempo', 'Testen', 'Keine spanische Stimme auf diesem Gerät. Versuche Microsoft Edge oder Chrome.', 'Natürlichste Stimmen: „Microsoft … Online (Natural)“ in Edge oder „Google español“ in Chrome.',
      'Einige Fragen sind unbeantwortet. Trotzdem bewerten?', 'Perfekt! 🎉', 'Gut gemacht! 👏', 'Weiter üben! 💪', 'Gelöst', 'Fragen', 'Dain Edu · Spanisch mit Juan-saem · ECO A1 (Edelsa) — Daten nur in diesem Browser gespeichert.', 'Akzente', 'Sprechaufgabe', 'Bitte antworten', 'Fast', 'Lektion', 'Fragen gelöst', '📘 Jede Lektion: Ziele → A Verstehen → B Aussprache → C Wortschatz → D Grammatik → E Sprechen → Kultur → Wiederholung', 'Nicht begonnen',
      'Titelseite', 'Abschnitte', 'Pkt.', 'Datum', 'Fertig', 'Wörter suchen…', 'Glossar', 'Der ganze Wortschatz der 8 Lektionen — tippen zum Anhören', 'Alle', 'Zuordnen', 'Name', 'Sprich', 'Spracherkennung wird nicht unterstützt (Chrome nutzen).', 'Erkannt', 'Übersetzung zeigen', 'Übersetzung ausblenden'],
    pt: ['Ouça, leia e pratique as 8 unidades do ECO A1 — site de estudo interativo. Escolha uma unidade.', 'Nome · Nombre', 'Seu nome', 'Progresso', 'Todas as unidades', 'Voz', 'Como estudar', 'Correto', 'Quase (acento / ¿ ¡)', 'Errado — a resposta aparece', 'Corrigir', 'De novo', 'Ver respostas', 'Pontuação',
      'Continuar', 'Começar', 'Objetivos', 'Aluno/a', 'Meu progresso', 'Seu nome aparece no boletim (comum a todas as unidades). Os dados ficam só neste navegador.', 'Ouvir', 'Ouvir tudo', 'Parar', 'Tradução', 'Banco de palavras', 'Dica', 'Verdadeiro (V)', 'Falso (F)', '— escolha —', 'Escreva a resposta',
      'Toque nas palavras para formar a frase', 'Limpar', 'Resposta modelo', 'Resposta', 'Verifique o acento', 'Verifique ¿ ¡', '¡Compruébalo!', 'Prova da unidade (100 pontos) — perguntas novas a cada vez', 'Nova prova', 'Entregar e corrigir', 'Histórico', 'Resultados', 'Meu boletim', 'Nota geral',
      'Nota por seção', 'Imprimir / PDF', 'Apagar progresso', 'Apagar todos os dados desta unidade?', 'Início', 'Seções', 'Cultura e revisão', 'Avaliação', 'Voz', 'Voz feminina', 'Voz masculina', 'Velocidade', 'Testar', 'Não há voz em espanhol neste aparelho. Use Microsoft Edge ou Chrome.', 'Vozes mais naturais: “Microsoft … Online (Natural)” no Edge ou “Google español” no Chrome.',
      'Há perguntas sem resposta. Corrigir mesmo assim?', 'Perfeito! 🎉', 'Muito bem! 👏', 'Continue praticando! 💪', 'Feitas', 'perguntas', 'Dain Edu · Espanhol com Juan-saem · ECO A1 (Edelsa) — dados salvos só neste navegador.', 'Acentos', 'Expressão oral', 'Responda, por favor', 'Quase', 'Unidade', 'perguntas feitas', '📘 Cada unidade: objetivos → A compreensão → B pronúncia → C léxico → D gramática → E oral → cultura → revisão', 'Não iniciado',
      'Capa', 'Seções', 'pts', 'Data', 'Feito', 'Buscar palavras…', 'Glossário', 'Todo o vocabulário das 8 unidades — toque para ouvir', 'Tudo', 'Relacionar', 'Nome', 'Diga', 'Reconhecimento de voz indisponível (use o Chrome).', 'Ouvido', 'Ver tradução', 'Ocultar tradução'],
    it: ['Ascolta, leggi ed esercitati con le 8 unità di ECO A1 — sito di studio interattivo. Scegli un’unità.', 'Nome · Nombre', 'Il tuo nome', 'Progresso', 'Tutte le unità', 'Voce', 'Come studiare', 'Corretto', 'Quasi (accento / ¿ ¡)', 'Sbagliato — appare la risposta', 'Correggi', 'Riprova', 'Mostra risposte', 'Punteggio',
      'Continua', 'Inizia', 'Obiettivi', 'Studente', 'I miei progressi', 'Il tuo nome appare nella pagella (comune a tutte le unità). I dati restano solo in questo browser.', 'Ascolta', 'Ascolta tutto', 'Stop', 'Traduzione', 'Banca di parole', 'Suggerimento', 'Vero (V)', 'Falso (F)', '— scegli —', 'Scrivi la risposta',
      'Tocca le parole per formare la frase', 'Cancella', 'Risposta modello', 'Risposta', 'Controlla l’accento', 'Controlla ¿ ¡', '¡Compruébalo!', 'Test dell’unità (100 punti) — domande nuove ogni volta', 'Nuovo test', 'Consegna e correggi', 'Cronologia', 'Resultados', 'La mia pagella', 'Voto complessivo',
      'Voto per sezione', 'Stampa / PDF', 'Azzera', 'Cancellare tutti i dati di questa unità?', 'Inizio', 'Sezioni', 'Cultura e ripasso', 'Valutazione', 'Voce', 'Voce femminile', 'Voce maschile', 'Velocità', 'Prova', 'Nessuna voce spagnola su questo dispositivo. Prova Microsoft Edge o Chrome.', 'Voci più naturali: «Microsoft … Online (Natural)» in Edge o «Google español» in Chrome.',
      'Alcune domande sono senza risposta. Correggere comunque?', 'Perfetto! 🎉', 'Bravo! 👏', 'Continua così! 💪', 'Fatte', 'domande', 'Dain Edu · Spagnolo con Juan-saem · ECO A1 (Edelsa) — dati salvati solo in questo browser.', 'Accenti', 'Espressione orale', 'Rispondi, per favore', 'Quasi', 'Unità', 'domande fatte', '📘 Ogni unità: obiettivi → A comprensione → B pronuncia → C lessico → D grammatica → E orale → cultura → ripasso', 'Non iniziata',
      'Copertina', 'Sezioni', 'pt', 'Data', 'Fatto', 'Cerca parole…', 'Glossario', 'Tutto il lessico delle 8 unità — tocca per ascoltare', 'Tutto', 'Abbina', 'Nome', 'Dillo', 'Riconoscimento vocale non supportato (usa Chrome).', 'Sentito', 'Mostra traduzione', 'Nascondi traduzione'],
    ru: ['Слушайте, читайте и решайте все 8 уроков ECO A1 — интерактивный учебный сайт. Выберите урок.', 'Имя · Nombre', 'Ваше имя', 'Прогресс', 'Все уроки', 'Голос', 'Как заниматься', 'Верно', 'Почти (ударение / ¿ ¡)', 'Неверно — показан ответ', 'Проверить', 'Ещё раз', 'Показать ответы', 'Баллы',
      'Продолжить', 'Начать', 'Цели урока', 'Ученик', 'Мой прогресс', 'Имя появится в табеле (общее для всех уроков). Данные хранятся только в этом браузере.', 'Слушать', 'Слушать всё', 'Стоп', 'Перевод', 'Банк слов', 'Подсказка', 'Верно (V)', 'Неверно (F)', '— выбрать —', 'Введите ответ',
      'Нажимайте слова, чтобы составить фразу', 'Очистить', 'Образец ответа', 'Ответ', 'Проверьте ударение', 'Проверьте ¿ ¡', '¡Compruébalo!', 'Тест урока (100 баллов) — каждый раз новые вопросы', 'Новый тест', 'Сдать и проверить', 'История', 'Resultados', 'Мой табель', 'Итоговый балл',
      'Баллы по разделам', 'Печать / PDF', 'Сбросить', 'Удалить все данные этого урока?', 'Начало', 'Разделы', 'Культура и повторение', 'Оценка', 'Голос', 'Женский голос', 'Мужской голос', 'Скорость', 'Проверить', 'На устройстве нет испанского голоса. Откройте в Microsoft Edge или Chrome.', 'Самые естественные голоса: «Microsoft … Online (Natural)» в Edge или «Google español» в Chrome.',
      'Есть вопросы без ответа. Всё равно проверить?', 'Отлично! 🎉', 'Молодец! 👏', 'Продолжайте! 💪', 'Решено', 'вопросов', 'Dain Edu · Испанский с Хуаном · ECO A1 (Edelsa) — данные хранятся только в этом браузере.', 'Акценты', 'Говорение', 'Ответьте, пожалуйста', 'Почти', 'Урок', 'вопросов решено', '📘 Каждый урок: цели → A понимание → B произношение → C лексика → D грамматика → E говорение → культура → повторение', 'Не начат',
      'Обложка', 'Разделы', 'б.', 'Дата', 'Готово', 'Поиск слов…', 'Словарь', 'Вся лексика 8 уроков — нажмите, чтобы услышать', 'Все', 'Соединить', 'Имя', 'Скажите', 'Распознавание речи не поддерживается (используйте Chrome).', 'Распознано', 'Показать перевод', 'Скрыть перевод']
  };
  const UI = {};
  Object.keys(T).forEach(l => { UI[l] = {}; K.forEach((k, i) => { UI[l][k] = T[l][i]; }); });

  const store = {
    get(k, d) { try { const v = localStorage.getItem('ecoa1_' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('ecoa1_' + k, JSON.stringify(v)); } catch (e) { } }
  };
  function detect() {
    const s = store.get('lang', null); if (s && UI[s]) return s;
    const n = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return UI[n] ? n : 'en';
  }
  const I = window.I18N = {
    LANGS, UI, store, lang: detect(),
    t(k) { return (UI[I.lang] && UI[I.lang][k]) || UI.en[k] || k; },
    /* content translations exist in ko + en; other languages fall back to English */
    c(o) { if (!o) return ''; if (typeof o === 'string') return o; if (I.lang === 'ko') return o.ko || o.en || o.es || ''; if (I.lang === 'es') return o.es || o.en || o.ko || ''; return o.en || o.ko || o.es || ''; },
    tr(o) { if (!o || typeof o === 'string') return ''; return I.lang === 'ko' ? (o.ko || o.en || '') : (o.en || o.ko || ''); },
    set(code) { I.lang = code; store.set('lang', code); document.documentElement.lang = code; document.dispatchEvent(new CustomEvent('langchange')); },
    switcher() {
      const cur = LANGS.find(l => l[0] === I.lang) || LANGS[1];
      const w = document.createElement('div'); w.className = 'langsw';
      w.innerHTML = `<button class="lang-btn" aria-haspopup="true" title="Language">🌐 <span>${cur[2]} ${cur[1]}</span> ▾</button><div class="lang-menu" role="menu">${LANGS.map(l => `<button role="menuitem" data-l="${l[0]}" class="${l[0] === I.lang ? 'on' : ''}">${l[2]} ${l[1]}</button>`).join('')}</div>`;
      const b = w.querySelector('.lang-btn');
      b.onclick = e => { e.stopPropagation(); w.classList.toggle('open'); };
      w.querySelectorAll('[data-l]').forEach(x => x.onclick = () => { w.classList.remove('open'); I.set(x.dataset.l); });
      document.addEventListener('click', () => w.classList.remove('open'));
      document.addEventListener('langchange', () => { const c = LANGS.find(l => l[0] === I.lang); b.querySelector('span').textContent = c[2] + ' ' + c[1]; w.querySelectorAll('[data-l]').forEach(x => x.classList.toggle('on', x.dataset.l === I.lang)); });
      return w;
    }
  };
  document.documentElement.lang = I.lang;

  /* ---------- Natural Spanish voice (Web Speech API) ---------- */
  const OK = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  const FEM = /elvira|helena|laura|lucia|lucía|m[oó]nica|paulina|marisol|sabina|dalia|ximena|elena|abril|estrella|irene|esperanza|triana|vera|lia|larissa|camila|catalina|beatriz|carlota|ines|inés|nuria|paloma|salome|valentina|female|mujer|google español(?! de)|google español de estados/i;
  const MALE = /alvaro|álvaro|jorge|pablo|ra[uú]l|diego|juan|carlos|enrique|gonzalo|arnau|dario|darío|tomas|tomás|gerardo|alonso|andr[eé]s|emilio|federico|lorenzo|rodrigo|saul|teo|nil|male|hombre/i;
  const gOf = v => MALE.test(v.name) ? 'm' : FEM.test(v.name) ? 'f' : '';
  const TTS = window.TTS = {
    ok: OK, voices: [], rate: store.get('rate', 0.9), pick: store.get('voices', { f: '', m: '' }),
    rank(v) {
      let s = 0; const n = v.name, l = v.lang.toLowerCase().replace('_', '-');
      if (/natural|neural|online|premium|enhanced|siri/i.test(n)) s += 40;
      if (/google/i.test(n)) s += 25;
      if (l === 'es-es') s += 12; else if (l === 'es-mx' || l === 'es-us') s += 8;
      if (/compact|eloquence|espeak/i.test(n)) s -= 30;
      return s;
    },
    load() {
      if (!OK) return;
      TTS.voices = speechSynthesis.getVoices().filter(v => /^es([-_]|$)/i.test(v.lang)).sort((a, b) => TTS.rank(b) - TTS.rank(a));
    },
    voiceFor(g) {
      if (!TTS.voices.length) TTS.load();
      const want = TTS.pick[g || 'f'];
      if (want) { const v = TTS.voices.find(x => x.name === want); if (v) return v; }
      if (g === 'm') return TTS.voices.find(v => gOf(v) === 'm') || TTS.voices[0] || null;
      return TTS.voices.find(v => gOf(v) === 'f') || TTS.voices.find(v => gOf(v) !== 'm') || TTS.voices[0] || null;
    },
    genderOf: gOf,
    stop() { TTS.token++; if (OK) try { speechSynthesis.cancel(); } catch (e) { } if (TTS.btn) TTS.btn.classList.remove('playing'); TTS.btn = null; },
    token: 0, btn: null,
    /* parts: [{t:text, g:'m'|'f'}] — chunked by sentence to avoid cut-offs */
    play(parts, btn) {
      if (!OK) return;
      if (btn && TTS.btn === btn) { TTS.stop(); return; }
      TTS.stop(); const my = ++TTS.token;
      TTS.btn = btn || null; if (btn) btn.classList.add('playing');
      const q = [];
      parts.forEach(p => String(p.t).replace(/<[^>]+>/g, '').replace(/___+/g, '…').split(/(?<=[.!?…])\s+(?=[¿¡A-ZÁÉÍÓÚÑ])/).forEach(s => { if (s.trim()) q.push({ t: s.trim(), g: p.g }); }));
      const next = () => {
        if (my !== TTS.token) return;
        const p = q.shift();
        if (!p) { if (btn) btn.classList.remove('playing'); TTS.btn = null; return; }
        const u = new SpeechSynthesisUtterance(p.t);
        const v = TTS.voiceFor(p.g);
        if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'es-ES';
        u.rate = TTS.rate;
        if (!v || (p.g === 'm' && gOf(v) !== 'm' && !TTS.voices.some(x => gOf(x) === 'm'))) u.pitch = p.g === 'm' ? 0.8 : 1.08;
        u.onend = () => setTimeout(next, 220); u.onerror = () => setTimeout(next, 50);
        speechSynthesis.speak(u);
      };
      next();
    },
    say(text, btn, g) { TTS.play([{ t: text, g: g || 'f' }], btn); },
    panel() {
      let m = document.getElementById('vpanel');
      if (!m) {
        m = document.createElement('div'); m.id = 'vpanel'; m.className = 'modal';
        document.body.appendChild(m);
        m.addEventListener('click', e => { if (e.target === m) m.classList.remove('on'); });
      }
      TTS.load();
      const opts = g => TTS.voices.map(v => `<option value="${v.name.replace(/"/g, '&quot;')}" ${TTS.voiceFor(g) === v ? 'selected' : ''}>${v.name} (${v.lang})${gOf(v) === g ? ' ✔' : ''}</option>`).join('');
      m.innerHTML = `<div class="mbox vbox"><h3>🔊 ${I.t('vTitle')}</h3>
        ${TTS.voices.length ? `<p class="small">${I.t('vTip')}</p>
        <label class="lbl">👩 ${I.t('vFem')}</label><div class="vrow"><select class="inp vs" data-g="f">${opts('f')}</select><button class="btn sm" data-t="f">▶ ${I.t('test')}</button></div>
        <label class="lbl">👨 ${I.t('vMale')}</label><div class="vrow"><select class="inp vs" data-g="m">${opts('m')}</select><button class="btn sm" data-t="m">▶ ${I.t('test')}</button></div>` : `<p class="warn">${I.t('noVoice')}</p>`}
        <label class="lbl">${I.t('speed')} <b class="rv">×${TTS.rate.toFixed(2)}</b></label><input type="range" min="0.6" max="1.2" step="0.05" value="${TTS.rate}" class="rate">
        <div style="text-align:right;margin-top:14px"><button class="btn ghost vclose">OK</button></div></div>`;
      m.querySelectorAll('.vs').forEach(s => s.onchange = () => { TTS.pick[s.dataset.g] = s.value; store.set('voices', TTS.pick); });
      m.querySelectorAll('[data-t]').forEach(b => b.onclick = () => TTS.say(b.dataset.t === 'm' ? 'Hola, me llamo Alberto. Soy de Madrid.' : 'Hola, me llamo Clara. ¿Cómo te llamas?', b, b.dataset.t));
      const r = m.querySelector('.rate'); r.oninput = () => { TTS.rate = +r.value; store.set('rate', TTS.rate); m.querySelector('.rv').textContent = '×' + TTS.rate.toFixed(2); };
      m.querySelector('.vclose').onclick = () => m.classList.remove('on');
      m.classList.add('on');
    }
  };
  if (OK) { TTS.load(); speechSynthesis.onvoiceschanged = TTS.load; }
})();

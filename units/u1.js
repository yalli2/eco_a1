ECO.unit({
  num: 1,
  title: 'Hola, ¿cómo te llamas?',
  emoji: '👋🙋',
  pages: '6–15',
  topics: { ko: '인사 · 자기소개 · 알파벳 · 국적', en: 'Greetings · introductions · alphabet · nationalities' },
  goals: [
    { es: 'Saludar y despedirse.', ko: '인사하고 작별하기', en: 'Greet and say goodbye' },
    { es: 'Preguntar y decir el nombre, los apellidos y la nacionalidad.', ko: '이름·성·국적 묻고 말하기', en: 'Ask and say your name, surnames and nationality' },
    { es: 'Deletrear.', ko: '철자 말하기', en: 'Spell words' },
    { es: 'Verbos en presente: SER y LLAMARSE.', ko: '현재형 동사 SER와 LLAMARSE', en: 'Present tense verbs SER and LLAMARSE' },
    { es: 'Género de los gentilicios.', ko: '국적 형용사의 성(남성/여성)', en: 'Gender of nationality adjectives' },
    { es: 'Conocer a otras personas y presentarse.', ko: '다른 사람을 만나고 자기소개하기', en: 'Meet other people and introduce yourself' },
    { es: 'Nombres y apellidos de personajes hispanos. Países y capitales.', ko: '스페인어권 유명인의 이름과 성, 나라와 수도', en: 'Names of famous Hispanic people; countries and capitals' }
  ],
  people: {
    'Germán': 'm', 'Alberto': 'm', 'Clara': 'f', 'Miguel': 'm', 'Celia': 'f', 'Recepcionista': 'f',
    'Juan': 'm', 'Sonia': 'f', 'Mónica': 'f', 'Profesor': 'm',
    'Isabel': 'f', 'Luis Alberto': 'm', 'Sandro': 'm', 'John': 'm', 'Eduardo': 'm', 'Luiz': 'm'
  },
  sections: [
    // ───────────────────────── PORTADA ─────────────────────────
    { id: 'portada', tag: '', name: 'Portada',
      sub: { es: 'En el aeropuerto, en la ciudad, en la escuela', ko: '공항에서, 시내에서, 학교에서', en: 'At the airport, in the city, at school' },
      blocks: [
        { type: 'note', ko: '그림 A–G: 🛬 공항(A·B·C), 🌃 시내(D·E), 🏫 학교(F·G). 대화 1–7을 듣고 알맞은 그림과 연결하세요.', en: 'Pictures A–G: 🛬 airport (A, B, C), 🌃 city (D, E), 🏫 school (F, G). Listen to dialogues 1–7 and match them with the pictures.' },
        { type: 'dialog', title: { es: 'Diálogo 1', ko: '대화 1', en: 'Dialogue 1' }, lines: [
          { who: 'Germán', es: '¡Hola, Alberto! ¿Cómo estás?', ko: '안녕, 알베르토! 어떻게 지내?', en: 'Hi, Alberto! How are you?' },
          { who: 'Alberto', es: 'Muy bien, ¿y tú?', ko: '아주 좋아, 너는?', en: 'Very well, and you?' },
          { who: 'Clara', es: 'Hola, ¿qué tal?', ko: '안녕, 잘 지내?', en: 'Hi, how’s it going?' },
          { who: 'Alberto', es: 'Hola, Clara.', ko: '안녕, 클라라.', en: 'Hi, Clara.' } ] },
        { type: 'dialog', title: { es: 'Diálogo 2', ko: '대화 2', en: 'Dialogue 2' }, lines: [
          { who: 'Miguel', es: 'Yo me llamo Miguel Sánchez.', ko: '저는 미겔 산체스라고 합니다.', en: 'My name is Miguel Sánchez.' },
          { who: 'Celia', es: 'Encantada.', ko: '반갑습니다.', en: 'Pleased to meet you.' },
          { who: 'Miguel', es: 'Bienvenida a Madrid.', ko: '마드리드에 오신 것을 환영합니다.', en: 'Welcome to Madrid.' } ] },
        { type: 'dialog', title: { es: 'Diálogo 3', ko: '대화 3', en: 'Dialogue 3' }, lines: [
          { who: 'Celia', es: 'Buenas tardes. Yo soy Celia Vázquez.', ko: '안녕하세요(오후). 저는 셀리아 바스케스입니다.', en: 'Good afternoon. I am Celia Vázquez.' },
          { who: 'Miguel', es: '¿Es usted la señora Vázquez? Encantado.', ko: '바스케스 씨이신가요? 반갑습니다.', en: 'Are you Mrs. Vázquez? Pleased to meet you.' } ] },
        { type: 'dialog', title: { es: 'Diálogo 4', ko: '대화 4', en: 'Dialogue 4' }, lines: [
          { who: 'Miguel', es: 'Buenas noches, hasta mañana.', ko: '안녕히 주무세요, 내일 봬요.', en: 'Good night, see you tomorrow.' },
          { who: 'Celia', es: 'Adiós, y gracias.', ko: '안녕히 가세요, 고맙습니다.', en: 'Goodbye, and thank you.' } ] },
        { type: 'dialog', title: { es: 'Diálogo 5', ko: '대화 5', en: 'Dialogue 5' }, lines: [
          { who: 'Clara', es: 'Adiós, Alberto, hasta mañana.', ko: '잘 가, 알베르토, 내일 봐.', en: 'Bye, Alberto, see you tomorrow.' },
          { who: 'Alberto', es: 'Hasta mañana.', ko: '내일 봐.', en: 'See you tomorrow.' },
          { who: 'Germán', es: 'Hasta luego.', ko: '나중에 봐.', en: 'See you later.' } ] },
        { type: 'dialog', title: { es: 'Diálogo 6', ko: '대화 6', en: 'Dialogue 6' }, lines: [
          { who: 'Celia', es: 'Hola. Yo soy Celia. ¿Y tú cómo te llamas?', ko: '안녕. 나는 셀리아야. 너는 이름이 뭐야?', en: 'Hi. I’m Celia. And what’s your name?' },
          { who: 'Clara', es: 'Hola, yo me llamo Clara.', ko: '안녕, 나는 클라라라고 해.', en: 'Hi, my name is Clara.' },
          { who: 'Celia', es: '¿De dónde eres?', ko: '어디 출신이야?', en: 'Where are you from?' },
          { who: 'Clara', es: 'De aquí, de Madrid. ¿Y tú?', ko: '여기, 마드리드 출신이야. 너는?', en: 'From here, from Madrid. And you?' },
          { who: 'Celia', es: 'Yo soy de Quito, Ecuador.', ko: '나는 에콰도르 키토 출신이야.', en: 'I’m from Quito, Ecuador.' } ] },
        { type: 'dialog', title: { es: 'Diálogo 7', ko: '대화 7', en: 'Dialogue 7' }, lines: [
          { who: 'Recepcionista', es: 'Buenos días, ¿cómo se llama?', ko: '안녕하세요, 성함이 어떻게 되세요?', en: 'Good morning, what is your name?' },
          { who: 'Alberto', es: 'Alberto Benito.', ko: '알베르토 베니토입니다.', en: 'Alberto Benito.' },
          { who: 'Recepcionista', es: '¿“Benito” es nombre o apellido?', ko: '“베니토”는 이름인가요, 성인가요?', en: 'Is “Benito” a first name or a surname?' },
          { who: 'Alberto', es: 'Es el apellido.', ko: '성입니다.', en: 'It’s the surname.' },
          { who: 'Recepcionista', es: '¿De dónde es usted?', ko: '어디 출신이세요?', en: 'Where are you from?' },
          { who: 'Alberto', es: 'Soy argentino.', ko: '아르헨티나 사람입니다.', en: 'I’m Argentinian.' } ] },
        { type: 'match', id: 'p1', n: '1', listen: true,
          title: { es: 'Escucha y relaciona.', ko: '듣고 대화와 그림을 연결하세요.', en: 'Listen and match.' },
          left: ['Diálogo 1', 'Diálogo 2', 'Diálogo 3', 'Diálogo 4', 'Diálogo 5', 'Diálogo 6', 'Diálogo 7'],
          right: [
            'A 🛬 Celia con un cartel “Celia Vázquez”',
            'B 🛬 “LLEGADAS”: Miguel saluda a Celia',
            'C 🛬 Clara, Germán y Alberto se saludan',
            'D 🏨🌙 Miguel y Celia delante del hotel, de noche',
            'E 🚗👋 Alberto dice adiós a Germán y Clara en el coche',
            'F 🏫 Celia y Clara con libros en la escuela',
            'G 🏫💻 Alberto en la recepción de la escuela'
          ],
          a: [2, 1, 0, 3, 4, 5, 6] }
      ] },

    // ───────────────────────── A ─────────────────────────
    { id: 'a', tag: 'A', name: 'Comprensión y práctica',
      sub: { es: 'Saludos y presentaciones', ko: '인사와 소개', en: 'Greetings and introductions' },
      blocks: [
        { type: 'choice', id: 'a1', n: '1', listen: true,
          title: { es: '¿Qué oyes?', ko: '무엇이 들리나요?', en: 'What do you hear?' },
          items: [
            { say: '¿De dónde eres?', opts: ['¿De dónde eres?', '¿De dónde es?'], a: 0 },
            { say: '¿Cómo estás?', opts: ['¿Cómo estás?', '¿Cómo está?'], a: 0 },
            { say: 'Yo soy de aquí.', opts: ['Yo soy de aquí.', 'No soy de aquí.'], a: 0 },
            { say: '¿Cómo te llamas?', opts: ['¿Cómo te llamas?', '¿Cómo se llama?'], a: 0 }
          ] },
        { type: 'tf', id: 'a2', n: '2',
          title: { es: 'Di si es verdadero (V) o falso (F).', ko: '맞으면 V, 틀리면 F를 고르세요.', en: 'Say if it is true (V) or false (F).' },
          items: [
            { q: '“Benito” es el nombre.', a: false },
            { q: 'Clara es de Madrid.', a: true },
            { q: '“Alberto” es apellido.', a: false },
            { q: 'Celia es española.', a: false },
            { q: 'Celia es de Ecuador.', a: true },
            { q: 'Alberto es argentino.', a: true }
          ] },
        { type: 'match', id: 'a3', n: '3',
          title: { es: 'Relaciona las preguntas y las respuestas.', ko: '질문과 대답을 연결하세요.', en: 'Match the questions and the answers.' },
          left: ['a. ¿De dónde eres?', 'b. ¿Cómo te llamas?', 'c. ¿“Alonso” es nombre?', 'd. ¿Cómo estás?', 'e. ¿Es usted la señora Vázquez?'],
          right: ['Muy bien, ¿y tú?', 'De Perú.', 'Me llamo Fátima.', 'No, es el apellido.', 'Sí, soy yo.'],
          a: [1, 2, 3, 0, 4] },
        { type: 'classify', id: 'a4', n: '4',
          title: { es: 'Completa el cuadro con las expresiones de saludo y despedida de los diálogos.', ko: '대화에 나온 인사·작별 표현을 표에 정리하세요(격식/비격식).', en: 'Complete the chart with the greetings and farewells from the dialogues (formal/informal).' },
          cats: ['Formal', 'Informal'],
          items: [
            { w: 'Buenas tardes.', c: 0 },
            { w: 'Buenos días.', c: 0 },
            { w: 'Buenas noches.', c: 0 },
            { w: 'Hola.', c: 1 },
            { w: 'Hola, ¿qué tal?', c: 1 },
            { w: '¡Hola! ¿Cómo estás?', c: 1 },
            { w: 'Hasta luego.', c: 1 },
            { w: '¡Adiós!', c: 1 }
          ] },
        { type: 'classify', id: 'a5', n: '5',
          title: { es: 'Clasifica estas expresiones.', ko: '이 표현들을 분류하세요.', en: 'Classify these expressions.' },
          cats: ['Preguntar por el nombre', 'Decir el nombre', 'Preguntar la nacionalidad', 'Decir la nacionalidad'],
          items: [
            { w: '¿De dónde eres?', c: 2 },
            { w: '¿De dónde es usted?', c: 2 },
            { w: '(Yo) soy de…', c: 3 },
            { w: '(Yo) soy…', c: 1 },
            { w: '¿Cómo se llama?', c: 0 },
            { w: '(Yo) me llamo…', c: 1 },
            { w: '¿“Benito” es nombre o apellido?', c: 0 },
            { w: '¿Cómo te llamas?', c: 0 }
          ] },
        { type: 'open', id: 'a6', n: '6',
          title: { es: 'Y tú, ¿cómo te llamas? ¿De dónde eres?', ko: '여러분은 이름이 뭐예요? 어디 출신이에요?', en: 'And you, what’s your name? Where are you from?' },
          items: [
            { q: '¿Cómo te llamas?', model: 'Me llamo Minjun.' },
            { q: '¿De dónde eres?', model: 'Soy de Seúl, Corea.' }
          ] }
      ] },

    // ───────────────────────── B ─────────────────────────
    { id: 'b', tag: 'B', name: 'Pronunciación y ortografía',
      sub: { es: 'Abecedario', ko: '알파벳', en: 'The alphabet' },
      blocks: [
        { type: 'vocab', title: { es: '1. Escucha y repite el nombre de las letras.', ko: '1. 글자 이름을 듣고 따라 하세요.', en: '1. Listen and repeat the names of the letters.' },
          items: [
            { es: 'A, a — a', ko: '아', en: 'a' }, { es: 'B, b — be', ko: '베', en: 'be' }, { es: 'C, c — ce', ko: '세', en: 'ce' },
            { es: 'Ch, ch — che', ko: '체', en: 'che' }, { es: 'D, d — de', ko: '데', en: 'de' }, { es: 'E, e — e', ko: '에', en: 'e' },
            { es: 'F, f — efe', ko: '에페', en: 'efe' }, { es: 'G, g — ge', ko: '헤', en: 'ge' }, { es: 'H, h — hache', ko: '아체', en: 'hache' },
            { es: 'I, i — i', ko: '이', en: 'i' }, { es: 'J, j — jota', ko: '호타', en: 'jota' }, { es: 'K, k — ka', ko: '카', en: 'ka' },
            { es: 'L, l — ele', ko: '엘레', en: 'ele' }, { es: 'Ll, ll — elle', ko: '에예', en: 'elle' }, { es: 'M, m — eme', ko: '에메', en: 'eme' },
            { es: 'N, n — ene', ko: '에네', en: 'ene' }, { es: 'Ñ, ñ — eñe', ko: '에녜', en: 'eñe' }, { es: 'O, o — o', ko: '오', en: 'o' },
            { es: 'P, p — pe', ko: '페', en: 'pe' }, { es: 'Q, q — cu', ko: '쿠', en: 'cu' }, { es: 'R, r — erre, ere', ko: '에레(떨림), 에레', en: 'erre, ere' },
            { es: 'S, s — ese', ko: '에세', en: 'ese' }, { es: 'T, t — te', ko: '테', en: 'te' }, { es: 'U, u — u', ko: '우', en: 'u' },
            { es: 'V, v — uve', ko: '우베', en: 'uve' }, { es: 'W, w — uve doble', ko: '우베 도블레', en: 'uve doble' }, { es: 'X, x — equis', ko: '에키스', en: 'equis' },
            { es: 'Y, y — i griega', ko: '이 그리에가', en: 'i griega' }, { es: 'Z, z — zeta', ko: '세타', en: 'zeta' }
          ] },
        { type: 'speak', n: '1',
          title: { es: 'Escucha y repite el nombre de las letras.', ko: '글자 이름을 듣고 따라 하세요.', en: 'Listen and repeat the names of the letters.' },
          prompt: { ko: '위 표의 각 글자를 눌러 듣고 소리 내어 따라 하세요.', en: 'Tap each letter in the chart above, listen and repeat aloud.' },
          model: [ { who: 'A', es: 'a, be, ce, che, de, e, efe, ge, hache, i, jota, ka, ele, elle, eme, ene, eñe, o, pe, cu, erre, ese, te, u, uve, uve doble, equis, i griega, zeta' } ] },
        { type: 'open', id: 'b2', n: '2',
          title: { es: '¿Qué sonidos no están en tu abecedario?', ko: '여러분의 언어(한글)에 없는 소리는 무엇인가요?', en: 'Which sounds are not in your alphabet?' },
          items: [ { q: 'Sonidos del español que no están en mi abecedario:', model: 'La jota (j), la erre (rr), la zeta (z), la ce de “cena”, la efe (f), la uve (v)…' } ] },
        { type: 'choice', id: 'b3', n: '3', listen: true,
          title: { es: '¿Qué letras oyes?', ko: '어떤 글자가 들리나요?', en: 'Which letters do you hear?' },
          items: [
            { say: 'jota', opts: ['j', 'g', 'h'], a: 0 },
            { say: 'ge', opts: ['j', 'g', 'ch'], a: 1 },
            { say: 'elle', opts: ['l', 'll', 'ñ'], a: 1 },
            { say: 'ce', opts: ['c', 's', 'ch'], a: 0 },
            { say: 'ese', opts: ['c', 's', 'z'], a: 1 },
            { say: 'ele', opts: ['l', 'll', 'r'], a: 0 },
            { say: 'ene', opts: ['n', 'ñ', 'll'], a: 0 },
            { say: 'eñe', opts: ['n', 'ñ', 'll'], a: 1 },
            { say: 'uve', opts: ['b', 'v', 'w'], a: 1 },
            { say: 'che', opts: ['c', 'ch', 'h'], a: 1 },
            { say: 'erre', opts: ['r', 'l', 'rr'], a: 0 },
            { say: 'hache', opts: ['j', 'ch', 'h'], a: 2 }
          ] },
        { type: 'choice', id: 'b4', n: '4', listen: true,
          title: { es: 'Deletrea el nombre de estas personas.', ko: '이 사람들의 이름 철자를 말해 보세요. (듣고 누구의 이름인지 고르세요)', en: 'Spell the names of these people. (Listen and choose whose name it is.)' },
          items: [
            { say: 'a, ele, be, e, erre, te, o', opts: ['Alberto', 'Clara', 'Celia', 'Germán', 'Miguel'], a: 0 },
            { say: 'ce, ele, a, erre, a', opts: ['Alberto', 'Clara', 'Celia', 'Germán', 'Miguel'], a: 1 },
            { say: 'ce, e, ele, i, a', opts: ['Alberto', 'Clara', 'Celia', 'Germán', 'Miguel'], a: 2 },
            { say: 'ge, e, erre, eme, a con tilde, ene', opts: ['Alberto', 'Clara', 'Celia', 'Germán', 'Miguel'], a: 3 },
            { say: 'eme, i, ge, u, e, ele', opts: ['Alberto', 'Clara', 'Celia', 'Germán', 'Miguel'], a: 4 }
          ] },
        { type: 'speak', n: '4',
          title: { es: 'Deletrea el nombre de estas personas.', ko: '이 사람들의 이름 철자를 말해 보세요.', en: 'Spell the names of these people.' },
          prompt: { ko: '짝에게 Alberto, Clara, Celia, Germán, Miguel의 철자를 불러 주세요.', en: 'Spell Alberto, Clara, Celia, Germán and Miguel for your partner.' },
          model: [ { who: 'A', es: '¿Cómo se escribe “Clara”?' }, { who: 'B', es: 'Ce, ele, a, erre, a.' } ] },
        { type: 'open', id: 'b5', n: '5',
          title: { es: 'Deletrea tu nombre.', ko: '자기 이름의 철자를 말해 보세요.', en: 'Spell your name.' },
          items: [ { q: 'Mi nombre se escribe…', model: 'Me llamo Minjun: eme, i, ene, jota, u, ene.' } ] },
        { type: 'choice', id: 'b6', n: '6',
          title: { es: 'Deletrea estas siglas.', ko: '이 약어들의 철자를 말해 보세요.', en: 'Spell these acronyms.' },
          items: [
            { q: '🚄 AVE', opts: ['a, uve, e', 'a, be, e', 'a, uve doble, e'], a: 0 },
            { q: '🧾 IVA', opts: ['i, be, a', 'i, uve, a', 'i griega, uve, a'], a: 1 },
            { q: '🏷️ P.V.P.', opts: ['pe, be, pe', 'pe, uve doble, pe', 'pe, uve, pe'], a: 2 },
            { q: '🚆 Renfe', opts: ['erre, e, ene, efe, e', 'erre, e, eñe, efe, e', 'ere, e, eme, efe, e'], a: 0 },
            { q: '🪪 DNI', opts: ['de, eñe, i', 'de, ene, i', 'de, eme, i'], a: 1 },
            { q: '🎟️ ONCE', opts: ['o, ene, ese, e', 'o, eñe, ce, e', 'o, ene, ce, e'], a: 2 }
          ] },
        { type: 'note', es: '<b>B</b> y <b>V</b> se pronuncian igual: [b]. (“Benito”, “Valdés”)<br>La <b>H</b> no se pronuncia. (“Hola”, “Honduras”)',
          ko: 'B와 V는 똑같이 [b]로 발음해요. H는 소리가 나지 않아요(묵음).', en: 'B and V are pronounced the same: [b]. H is silent.' },
        { type: 'tf', id: 'b7', n: '7',
          title: { es: 'Observa.', ko: '관찰하세요. 맞으면 V, 틀리면 F.', en: 'Observe. True (V) or false (F)?' },
          items: [
            { q: 'En “Benito” y “Valdés”, la B y la V se pronuncian igual.', a: true },
            { q: 'En “Hola” y “Honduras”, la H se pronuncia.', a: false },
            { q: '“Hola” se pronuncia [ola].', a: true }
          ] }
      ] },

    // ───────────────────────── C ─────────────────────────
    { id: 'c', tag: 'C', name: 'Léxico',
      sub: { es: 'Nombres y nacionalidades', ko: '이름과 국적', en: 'Names and nationalities' },
      blocks: [
        { type: 'reading', title: { es: 'Tarjetas y direcciones', ko: '명함과 주소', en: 'Cards and addresses' },
          paras: [
            { es: 'Don <b>Roberto</b> (nombre) <b>Ruiz Herrera</b> (apellidos) — Constitución, 2378 — 1428 Argentina', ko: '로베르토(이름) 루이스 에레라(성) — 아르헨티나', en: 'Roberto (first name) Ruiz Herrera (surnames) — Argentina' },
            { es: 'Don Juan Codorníu Jiménez — C/ Simón Bolívar, 47 — Caracas', ko: '후안 코도르니우 히메네스 — 카라카스', en: 'Juan Codorníu Jiménez — Caracas' },
            { es: 'Doña Marta Muñoz Romero — Pº de San Antonio', ko: '마르타 무뇨스 로메로', en: 'Marta Muñoz Romero' },
            { es: 'Doña Charo Parra Oviedo — Carrera 45 nº 48-50 — Medellín', ko: '차로 파라 오비에도 — 메데인', en: 'Charo Parra Oviedo — Medellín' },
            { es: 'Doña María Teresa Sánchez García — Calle de García de Paredes, 47 — 28010 Madrid — España', ko: '마리아 테레사 산체스 가르시아 — 스페인 마드리드', en: 'María Teresa Sánchez García — Madrid, Spain' },
            { es: '<b>Don</b> Roberto Ruiz Herrera = <b>Señor (Sr.)</b> Ruiz Herrera<br><b>Doña</b> Marta Muñoz Romero = <b>Señora (Sra.)</b> Muñoz Romero', ko: 'Don/Doña는 이름 앞에, Señor/Señora는 성 앞에 붙이는 존칭이에요.', en: 'Don/Doña go before the first name; Señor/Señora go before the surname.' }
          ] },
        { type: 'note', es: '<b>Nombres y apellidos.</b> En español las personas tienen dos apellidos: el primero es el del padre, y el segundo, el de la madre.',
          ko: '스페인어권 사람들은 성이 두 개예요. 첫째 성은 아버지의 성, 둘째 성은 어머니의 성이에요.', en: 'In Spanish people have two surnames: the first is the father’s, the second is the mother’s.' },
        { type: 'speak', n: '1a',
          title: { es: 'Lee y deletrea los nombres y apellidos.', ko: '이름과 성을 읽고 철자를 말해 보세요.', en: 'Read and spell the names and surnames.' },
          prompt: { ko: '명함의 이름과 성을 읽고 짝에게 철자를 불러 주세요.', en: 'Read the names on the cards and spell them for your partner.' },
          model: [ { who: 'A', es: '¿Cómo se escribe “Ruiz”?' }, { who: 'B', es: 'Erre, u, i, zeta.' } ] },
        { type: 'classify', id: 'c1', n: '1b',
          title: { es: 'Clasifica los nombres y apellidos.', ko: '이름과 성을 분류하세요.', en: 'Classify the first names and surnames.' },
          cats: ['Nombre', 'Primer apellido', 'Segundo apellido'],
          items: [
            { w: 'Roberto', c: 0 }, { w: 'Ruiz', c: 1 }, { w: 'Herrera', c: 2 },
            { w: 'Juan', c: 0 }, { w: 'Codorníu', c: 1 }, { w: 'Jiménez', c: 2 },
            { w: 'Marta', c: 0 }, { w: 'Muñoz', c: 1 }, { w: 'Romero', c: 2 },
            { w: 'Charo', c: 0 }, { w: 'Parra', c: 1 }, { w: 'Oviedo', c: 2 },
            { w: 'María Teresa', c: 0 }, { w: 'Sánchez', c: 1 }, { w: 'García', c: 2 }
          ] },
        { type: 'match', id: 'c2', n: '2a',
          title: { es: 'Relaciona.', ko: '나라와 국적을 연결하세요.', en: 'Match the countries and nationalities.' },
          left: ['Holanda', 'Francia', 'Suecia', 'Japón', 'México', 'Estados Unidos', 'Panamá', 'Colombia', 'Nicaragua', 'Italia', 'Venezuela', 'Brasil'],
          right: ['francés', 'japonés', 'holandés', 'sueco', 'estadounidense', 'mexicano', 'nicaragüense', 'italiano', 'panameño', 'venezolano', 'colombiano', 'brasileño'],
          a: [2, 0, 3, 1, 5, 4, 8, 10, 6, 7, 9, 11] },
        { type: 'speak', n: '2b',
          title: { es: 'Habla con tus compañeros. ¿De dónde son?', ko: '친구들과 이야기하세요. 어디 출신인가요?', en: 'Talk with your classmates. Where are they from?' },
          prompt: { ko: '서로 출신지를 묻고 답하세요.', en: 'Ask and answer where you are from.' },
          model: [ { who: 'A', es: '¿De dónde eres?' }, { who: 'B', es: 'Yo soy de Corea, soy coreano.' }, { who: 'A', es: 'Y yo… soy de Japón, soy japonesa.' } ] }
      ] },

    // ───────────────────────── D1 ─────────────────────────
    { id: 'd1', tag: 'D', name: 'Gramática',
      sub: { es: 'Verbos en Presente: SER y LLAMARSE', ko: '현재형 동사: SER와 LLAMARSE', en: 'Present tense verbs: SER and LLAMARSE' },
      blocks: [
        { type: 'table', title: { es: '1a. Observa: SER y LLAMARSE', ko: '1a. 관찰하기: SER(~이다)와 LLAMARSE(이름이 ~이다)', en: '1a. Observe: SER (to be) and LLAMARSE (to be called)' },
          head: ['', 'Ser', 'Llamarse'],
          rows: [
            ['Yo', 'soy', 'me llamo'],
            ['Tú', 'eres', 'te llamas'],
            ['Él, ella, usted', 'es', 'se llama'],
            ['Nosotros, nosotras', 'somos', 'nos llamamos'],
            ['Vosotros, vosotras', 'sois', 'os llamáis'],
            ['Ellos, ellas, ustedes', 'son', 'se llaman']
          ],
          note: { ko: 'usted(당신, 존칭)은 3인칭 단수형(es, se llama), ustedes는 3인칭 복수형(son, se llaman)을 써요.', en: 'Usted takes the 3rd person singular (es, se llama); ustedes takes the 3rd person plural (son, se llaman).' } },
        { type: 'fill', id: 'd1b', n: '1b',
          title: { es: 'José presenta a sus estudiantes. Completa las frases.', ko: '호세가 학생들을 소개합니다. 문장을 완성하세요.', en: 'José introduces his students. Complete the sentences.' },
          items: [
            { q: '👨 “Buongiorno.” 🇮🇹 → ___ es Paolo y es ___.', a: ['Él', 'italiano'] },
            { q: '👨 “Good morning.” 🇺🇸 → Él ___ Peter y es estadounidense.', a: ['se llama|es'] },
            { q: '👫 “Bonjour.” 🇫🇷 → Ellos ___ Monique y Paul y ___ de ___.', a: ['se llaman|son', 'son', 'Francia'] },
            { q: '👩 “Bom dia.” 🇧🇷 → Ella ___ Regina y ___ brasileña.', a: ['se llama|es', 'es'] },
            { q: '👩 “Konnichiwa.” 🇯🇵 → ___ es Tomoko y es ___.', a: ['Ella', 'japonesa'] },
            { q: '👫 “Guten Tag.” 🇩🇪 → Ellos ___ Kurt y Petra y ___ de Alemania.', a: ['se llaman|son', 'son'] }
          ] },
        { type: 'fill', id: 'd1c', n: '1c',
          title: { es: 'Completa con los verbos SER y LLAMARSE.', ko: 'SER와 LLAMARSE 동사로 완성하세요.', en: 'Complete with the verbs SER and LLAMARSE.' },
          items: [
            { q: '¿De dónde ___? Soy de Barcelona.', a: ['eres'] },
            { q: '¿Cómo ___ usted? Me llamo Juan Gómez.', a: ['se llama'] },
            { q: 'Nosotros ___ de Argentina, ¿y tú?', a: ['somos'] },
            { q: '¿___ usted Carmen Herrero? — No, ___ Laura Herrero.', a: ['Es', 'me llamo|soy'] },
            { q: 'Hola, ¿cómo ___? — Nos llamamos Marta y Cristina.', a: ['os llamáis'] },
            { q: '¿___ italianas? — No, somos griegas.', a: ['Sois|Son'] }
          ] },
        { type: 'fill', id: 'd1d', n: '1d',
          title: { es: 'Pon las frases en plural.', ko: '문장을 복수형으로 바꾸세요.', en: 'Put the sentences into the plural.' },
          items: [
            { q: 'Soy de aquí. → ___', a: ['Somos de aquí.|Somos de aquí'] },
            { q: '¿Cómo te llamas? → ___', a: ['¿Cómo os llamáis?|Cómo os llamáis|¿Cómo os llamáis|Cómo os llamáis?'] },
            { q: '¿De dónde eres? → ___', a: ['¿De dónde sois?|De dónde sois|¿De dónde sois|De dónde sois?'] },
            { q: 'Ella es cubana. → ___', a: ['Ellas son cubanas.|Ellas son cubanas'] },
            { q: '¿Cómo se llama y de dónde es usted? → ___', a: ['¿Cómo se llaman y de dónde son ustedes?|Cómo se llaman y de dónde son ustedes|¿Cómo se llaman y de dónde son ustedes|Cómo se llaman y de dónde son ustedes?'] },
            { q: 'Y tú, ¿de dónde eres? → ___', a: ['Y vosotros, ¿de dónde sois?|Y vosotros, de dónde sois|Y vosotras, ¿de dónde sois?|Y vosotras, de dónde sois|Y vosotros ¿de dónde sois?'] }
          ] },
        { type: 'fill', id: 'd1e', n: '1e',
          title: { es: 'Completa el diálogo con las palabras del recuadro.', ko: '상자 안의 단어로 대화를 완성하세요.', en: 'Complete the dialogue with the words in the box.' },
          bank: ['yo', 'encantada', 'se llama', 'soy', 'os llamáis'],
          items: [
            { q: '— Buenos días. ¿Cómo ___?', a: ['os llamáis'] },
            { q: '• ___ soy Mónica.', a: ['Yo|yo'] },
            { q: '○ Y yo, Alberto.<br>— Yo ___ el profesor de español.', a: ['soy'] },
            { q: '• ¿Y cómo ___?', a: ['se llama'] },
            { q: '— Luis González.<br>• ¡___!', a: ['Encantada|encantada'] }
          ] }
      ] },

    // ───────────────────────── D2 ─────────────────────────
    { id: 'd2', tag: 'D', name: 'Gramática',
      sub: { es: 'Género de los gentilicios', ko: '국적 형용사의 성', en: 'Gender of nationality adjectives' },
      blocks: [
        { type: 'table', title: { es: '2a. Observa', ko: '2a. 관찰하기', en: '2a. Observe' },
          head: ['Masculino', 'Femenino', 'Ejemplo'],
          rows: [
            ['-o', '-a', 'ruso / rusa'],
            ['-consonante', '+ -a', 'español / española'],
            ['-e', '-e', 'nicaragüense'],
            ['-í', '-í', 'marroquí']
          ],
          note: { ko: '-o로 끝나면 -a로, 자음으로 끝나면 -a를 붙여요(francés → francesa: 강세 표시가 사라짐). -e, -í로 끝나면 남녀 형태가 같아요.', en: '-o changes to -a; after a consonant add -a (francés → francesa: the accent disappears). Words in -e and -í are the same for both genders.' } },
        { type: 'fill', id: 'd2b', n: '2b',
          title: { es: 'Escribe el femenino.', ko: '여성형을 쓰세요.', en: 'Write the feminine form.' },
          items: [
            { q: '🇫🇷 a. Francés → ___', a: ['francesa'] },
            { q: '🇯🇵 b. Japonés → ___', a: ['japonesa'] },
            { q: '🇳🇱 c. Holandés → ___', a: ['holandesa'] },
            { q: '🇸🇪 d. Sueco → ___', a: ['sueca'] },
            { q: '🇺🇸 e. Estadounidense → ___', a: ['estadounidense'] },
            { q: '🇲🇽 f. Mexicano → ___', a: ['mexicana'] },
            { q: '🇳🇮 g. Nicaragüense → ___', a: ['nicaragüense'] },
            { q: '🇮🇹 h. Italiano → ___', a: ['italiana'] },
            { q: '🇬🇷 i. Griego → ___', a: ['griega'] },
            { q: '🇻🇪 j. Venezolano → ___', a: ['venezolana'] },
            { q: '🇵🇰 k. Paquistaní → ___', a: ['paquistaní'] },
            { q: '🇧🇷 l. Brasileño → ___', a: ['brasileña'] }
          ] },
        { type: 'fill', id: 'd2c', n: '2c',
          title: { es: 'Escribe el masculino.', ko: '남성형을 쓰세요.', en: 'Write the masculine form.' },
          items: [
            { q: '🇨🇭 a. Suiza → ___', a: ['suizo'] },
            { q: '🇲🇦 b. Marroquí → ___', a: ['marroquí'] },
            { q: '🇹🇷 c. Turca → ___', a: ['turco'] },
            { q: '🇫🇮 d. Finlandesa → ___', a: ['finlandés'] },
            { q: '🇨🇦 e. Canadiense → ___', a: ['canadiense'] },
            { q: '🇧🇪 f. Belga → ___', a: ['belga'] },
            { q: '🇮🇪 g. Irlandesa → ___', a: ['irlandés'] },
            { q: '🇦🇹 h. Austriaca → ___', a: ['austriaco|austríaco'] },
            { q: '🇵🇱 i. Polaca → ___', a: ['polaco'] },
            { q: '🇩🇰 j. Danesa → ___', a: ['danés'] },
            { q: '🇮🇷 k. Iraní → ___', a: ['iraní'] },
            { q: '🇵🇪 l. Peruana → ___', a: ['peruano'] }
          ] },
        { type: 'classify', id: 'd2d', n: '2d',
          title: { es: 'Clasifica las palabras del cuadro.', ko: '상자 안의 단어를 분류하세요.', en: 'Classify the words in the box.' },
          cats: ['Masculinas', 'Femeninas', 'Masculinas y femeninas'],
          items: [
            { w: 'francés', c: 0 }, { w: 'italiana', c: 1 }, { w: 'uruguayo', c: 0 }, { w: 'costarricense', c: 2 },
            { w: 'hondureña', c: 1 }, { w: 'chileno', c: 0 }, { w: 'panameño', c: 0 }, { w: 'alemana', c: 1 },
            { w: 'egipcio', c: 0 }, { w: 'israelí', c: 2 }, { w: 'colombiano', c: 0 }, { w: 'canadiense', c: 2 },
            { w: 'turca', c: 1 }, { w: 'ecuatoriana', c: 1 }
          ] },
        { type: 'classify', id: 'd2e', n: '2e',
          title: { es: 'Completa el cuadro.', ko: '표를 완성하세요: 각 국적 형용사를 알맞은 어미에 분류하세요.', en: 'Complete the chart: put each adjective under its ending.' },
          cats: ['-és / -esa', '-aco / -aca', '-ano / -ana', '-eño / -eña', '-ense', '-í'],
          items: [
            { w: 'francés / francesa', c: 0 }, { w: 'japonés / japonesa', c: 0 },
            { w: 'polaco / polaca', c: 1 }, { w: 'austriaco / austriaca', c: 1 },
            { w: 'italiano / italiana', c: 2 }, { w: 'peruano / peruana', c: 2 },
            { w: 'brasileño / brasileña', c: 3 }, { w: 'panameño / panameña', c: 3 },
            { w: 'nicaragüense', c: 4 }, { w: 'canadiense', c: 4 },
            { w: 'marroquí', c: 5 }, { w: 'iraní', c: 5 }
          ] }
      ] },

    // ───────────────────────── E ─────────────────────────
    { id: 'e', tag: 'E', name: 'Expresión oral',
      sub: { es: 'Conocer a otras personas y presentarse', ko: '다른 사람을 만나고 자기소개하기', en: 'Meeting people and introducing yourself' },
      blocks: [
        { type: 'table', title: { es: 'Saludos según la hora', ko: '시간대별 인사', en: 'Greetings by time of day' },
          head: ['', '', ''],
          rows: [
            ['Buenos días', 'de 7 h a 14 h', '(la mañana)'],
            ['Buenas tardes', 'de 14 h a 21 h', '(la tarde)'],
            ['Buenas noches', 'de 21 h a 7 h', '(la noche)']
          ],
          note: { ko: '스페인에서는 점심(약 14시) 이후부터 Buenas tardes를 써요.', en: 'In Spain, Buenas tardes is used from lunchtime (about 2 p.m.).' } },
        { type: 'speak', n: '1a',
          title: { es: 'Mira los dibujos. Saluda o despídete de manera formal o informal.', ko: '그림을 보고 격식/비격식으로 인사하거나 작별하세요.', en: 'Look at the pictures. Greet or say goodbye formally or informally.' },
          prompt: { ko: 'A 👦👋 아이와 엄마 · B 🕗 가게의 손님 · C 🍽️ 식당 종업원과 노신사 · D 🔧 작업복 입은 사람과 남자 · E 🚆 기차에서 손 흔들기 — 각 장면에 맞게 말해 보세요.', en: 'A 👦👋 a boy and his mother · B 🕗 a customer in a shop · C 🍽️ a waitress and an old gentleman · D 🔧 a worker and a man · E 🚆 waving at a train — say something suitable for each scene.' },
          model: [ { who: 'A', es: 'A: ¡Hola, mamá! / ¡Adiós, hasta luego!' }, { who: 'B', es: 'B: Buenos días, señor.' }, { who: 'A', es: 'C: Buenas tardes, ¿cómo está usted?' }, { who: 'B', es: 'D: Buenos días. Adiós, hasta mañana.' }, { who: 'A', es: 'E: ¡Adiós! ¡Hasta luego!' } ] },
        { type: 'speak', n: '1b',
          title: { es: 'Despídete como un español.', ko: '스페인 사람처럼 작별 인사를 하세요.', en: 'Say goodbye like a Spaniard.' },
          prompt: { ko: '“Adiós…”, “Adiós, buenas tardes…”처럼 작별 인사를 해 보세요.', en: 'Say goodbye: “Adiós…”, “Adiós, buenas tardes…”.' },
          model: [ { who: 'A', es: 'Adiós, buenas tardes.' }, { who: 'B', es: 'Adiós, hasta mañana.' } ] },
        { type: 'note', es: 'En situaciones formales, los españoles se dan la mano.<br>En situaciones informales, a los hombres se les da la mano y a las mujeres, dos besos.',
          ko: '격식 있는 상황에서 스페인 사람들은 악수를 해요. 비격식 상황에서는 남자에게는 악수를, 여자에게는 양 볼에 두 번 볼 인사(beso)를 해요.', en: 'In formal situations Spaniards shake hands. In informal situations men shake hands, and women get two kisses on the cheeks.' },
        { type: 'dialog', title: { es: 'Modelo', ko: '모델 대화', en: 'Model dialogue' }, lines: [
          { who: 'Juan', es: 'Hola, ¿qué tal?', ko: '안녕, 잘 지내?', en: 'Hi, how are you?' },
          { who: 'Sonia', es: 'Muy bien, ¿y tú?', ko: '아주 좋아, 너는?', en: 'Very well, and you?' },
          { who: 'Juan', es: '¿Cómo te llamas?', ko: '이름이 뭐야?', en: 'What’s your name?' },
          { who: 'Sonia', es: 'Yo soy Sonia.', ko: '나는 소니아야.', en: 'I’m Sonia.' },
          { who: 'Juan', es: '¿Y el apellido?', ko: '성은?', en: 'And your surname?' },
          { who: 'Sonia', es: 'Silva. Me llamo Sonia Silva. ¿Y tú?', ko: '실바. 소니아 실바라고 해. 너는?', en: 'Silva. My name is Sonia Silva. And you?' },
          { who: 'Juan', es: 'Yo me llamo Juan. ¿Y de dónde eres?', ko: '나는 후안이야. 어디 출신이야?', en: 'My name is Juan. And where are you from?' },
          { who: 'Sonia', es: 'Soy de Río de Janeiro.', ko: '리우데자네이루 출신이야.', en: 'I’m from Rio de Janeiro.' },
          { who: 'Juan', es: 'Yo también soy brasileño.', ko: '나도 브라질 사람이야.', en: 'I’m Brazilian too.' } ] },
        { type: 'speak', n: '2a',
          title: { es: 'Habla con tu compañero. Pregúntale cómo se llama y de dónde es, como en el modelo.', ko: '짝과 대화하세요. 모델처럼 이름과 출신을 물어보세요.', en: 'Talk with a partner. Ask their name and where they are from, as in the model.' },
          prompt: { ko: '위 모델 대화처럼 짝의 이름, 성, 출신을 물어보세요.', en: 'Like the model, ask your partner’s name, surname and origin.' },
          model: [ { who: 'A', es: 'Hola, ¿qué tal? ¿Cómo te llamas?' }, { who: 'B', es: 'Me llamo Jiwoo. ¿Y tú?' }, { who: 'A', es: 'Yo soy Minjun. ¿De dónde eres?' }, { who: 'B', es: 'Soy de Busan. ¿Y tú?' }, { who: 'A', es: 'Yo soy de Seúl.' } ] },
        { type: 'speak', n: '2b',
          title: { es: 'Ahora pregúntaselo a los demás compañeros de la clase y anota los nombres en la ficha.', ko: '이제 반 친구들에게 물어보고 표(이름·성·나라/도시)에 적으세요.', en: 'Now ask the other classmates and note their names in the chart.' },
          prompt: { ko: '표: Nombre(이름) · Apellido(성) · País / ciudad(나라/도시). 여러 친구에게 질문하세요.', en: 'Chart: Nombre · Apellido · País / ciudad. Ask several classmates.' },
          model: [ { who: 'A', es: '¿Cómo te llamas?' }, { who: 'B', es: 'Me llamo Seoyeon.' }, { who: 'A', es: '¿Y el apellido? ¿Cómo se escribe?' }, { who: 'B', es: 'Kim: ka, i, eme.' }, { who: 'A', es: '¿De dónde eres?' }, { who: 'B', es: 'Soy de Incheon, Corea.' } ] }
      ] },

    // ───────────────────────── MUNDO HISPANO ─────────────────────────
    { id: 'mundo', tag: '', name: 'Mundo hispano',
      sub: { es: 'Personajes famosos, países y capitales', ko: '유명 인물, 나라와 수도', en: 'Famous people, countries and capitals' },
      blocks: [
        { type: 'reading', title: { es: 'Personajes famosos', ko: '유명 인물', en: 'Famous people' },
          paras: [
            { es: 'A 🇪🇸 P… C… (actriz) · B 🇲🇽 C… F… (escritor) · C 🇻🇪 C… H… (diseñadora de moda) · D 🇨🇴 Fernando Botero (pintor)', ko: 'A 스페인 배우 · B 멕시코 작가 · C 베네수엘라 패션 디자이너 · D 콜롬비아 화가 페르난도 보테로', en: 'A Spanish actress · B Mexican writer · C Venezuelan fashion designer · D Colombian painter Fernando Botero' },
            { es: 'E 🇨🇱 I… A… (escritora) · F 🇵🇷 R… M… (cantante) · G 🇦🇷 D… M… (futbolista) · H 🇬🇹 R… M… (Premio Nobel de la Paz)', ko: 'E 칠레 작가 · F 푸에르토리코 가수 · G 아르헨티나 축구 선수 · H 과테말라 노벨 평화상 수상자', en: 'E Chilean writer · F Puerto Rican singer · G Argentinian footballer · H Guatemalan Nobel Peace Prize winner' }
          ] },
        { type: 'match', id: 'm1', n: '1',
          title: { es: 'Relaciona el nombre, apellido y nacionalidad de estos personajes famosos. (Nombre → apellido)', ko: '유명 인물의 이름과 성을 연결하세요.', en: 'Match the first names and surnames of these famous people.' },
          left: ['Fernando', 'Isabel', 'Penélope', 'Carlos', 'Ricky', 'Diego A.', 'Rigoberta', 'Carolina'],
          right: ['Cruz', 'Martin', 'Botero', 'Herrera', 'Menchú', 'Allende', 'Fuentes', 'Maradona'],
          a: [2, 5, 0, 6, 1, 7, 4, 3] },
        { type: 'match', id: 'm1b', n: '1',
          title: { es: 'Relaciona el nombre, apellido y nacionalidad de estos personajes famosos. (Personaje → nacionalidad)', ko: '유명 인물과 국적을 연결하세요.', en: 'Match the famous people with their nationalities.' },
          left: ['A 🇪🇸 Penélope Cruz', 'B 🇲🇽 Carlos Fuentes', 'C 🇻🇪 Carolina Herrera', 'D 🇨🇴 Fernando Botero', 'E 🇨🇱 Isabel Allende', 'F 🇵🇷 Ricky Martin', 'G 🇦🇷 Diego A. Maradona', 'H 🇬🇹 Rigoberta Menchú'],
          right: ['española', 'argentino', 'guatemalteca', 'venezolana', 'colombiano', 'mexicano', 'puertorriqueño', 'chilena'],
          a: [0, 5, 3, 4, 7, 6, 1, 2] },
        { type: 'match', id: 'm2', n: '2',
          title: { es: 'Relaciona las fotos con los países y sus capitales. (Foto → país)', ko: '사진과 나라를 연결하세요.', en: 'Match the photos with the countries.' },
          left: ['A 🪈 Músico andino con flauta y gorro tradicional', 'B 👗 Mujer con vestido blanco bordado de fiesta', 'C 🐎 Gaucho a caballo', 'D 💃 Bailaora de flamenco', 'E 🎺 Mariachis'],
          right: ['Argentina', 'España', 'Venezuela', 'Perú', 'México'],
          a: [3, 2, 0, 1, 4] },
        { type: 'match', id: 'm2b', n: '2',
          title: { es: 'Relaciona las fotos con los países y sus capitales. (País → capital)', ko: '나라와 수도를 연결하세요.', en: 'Match the countries with their capitals.' },
          left: ['Argentina', 'España', 'Venezuela', 'Perú', 'México'],
          right: ['México D.F.', 'Madrid', 'Buenos Aires', 'Lima', 'Caracas'],
          a: [2, 1, 4, 3, 0] },
        { type: 'classify', id: 'm3', n: '3',
          title: { es: 'Sitúa en el mapa todos los países vistos en el apartado “Mundo hispano” en los que se habla español.', ko: '“Mundo hispano”에 나온 스페인어 사용 국가들을 지도(지역)에 배치하세요.', en: 'Place on the map all the Spanish-speaking countries seen in “Mundo hispano”.' },
          cats: ['🌍 Europa', '🌎 América del Norte', '🌎 Centroamérica y Caribe', '🌎 América del Sur'],
          items: [
            { w: 'España', c: 0 }, { w: 'México', c: 1 }, { w: 'Guatemala', c: 2 }, { w: 'Puerto Rico', c: 2 },
            { w: 'Venezuela', c: 3 }, { w: 'Colombia', c: 3 }, { w: 'Perú', c: 3 }, { w: 'Chile', c: 3 }, { w: 'Argentina', c: 3 }
          ] }
      ] },

    // ───────────────────────── SÍNTESIS ─────────────────────────
    { id: 'sintesis', tag: '', name: 'Síntesis',
      sub: { es: 'A B C D E', ko: '단원 종합', en: 'Unit review' },
      blocks: [
        { type: 'reading', title: { es: '1. Mira la ilustración.', ko: '1. 그림을 보세요.', en: '1. Look at the illustration.' },
          paras: [ { es: '🇺🇳 Una reunión internacional: ARGENTINA – Eduardo Montes · BRASIL – Luiz Guterres · ITALIA – Sandro Moretto · GRAN BRETAÑA – John Brown · ESPAÑA – Isabel Castillo Ruiz · PERÚ – Luis Alberto García',
            ko: '국제 회의: 아르헨티나 – 에두아르도 몬테스 · 브라질 – 루이스 구테레스 · 이탈리아 – 산드로 모레토 · 영국 – 존 브라운 · 스페인 – 이사벨 카스티요 루이스 · 페루 – 루이스 알베르토 가르시아',
            en: 'An international meeting: Argentina – Eduardo Montes · Brazil – Luiz Guterres · Italy – Sandro Moretto · Great Britain – John Brown · Spain – Isabel Castillo Ruiz · Peru – Luis Alberto García' } ] },
        { type: 'classify', id: 's1a', n: '1a',
          title: { es: 'Haz una lista de los nombres y otra de los apellidos.', ko: '이름 목록과 성 목록을 만드세요.', en: 'Make a list of the first names and another of the surnames.' },
          cats: ['Nombres', 'Apellidos'],
          items: [
            { w: 'Eduardo', c: 0 }, { w: 'Montes', c: 1 }, { w: 'Luiz', c: 0 }, { w: 'Guterres', c: 1 },
            { w: 'Sandro', c: 0 }, { w: 'Moretto', c: 1 }, { w: 'John', c: 0 }, { w: 'Brown', c: 1 },
            { w: 'Isabel', c: 0 }, { w: 'Castillo', c: 1 }, { w: 'Ruiz', c: 1 }, { w: 'Luis Alberto', c: 0 }, { w: 'García', c: 1 }
          ] },
        { type: 'fill', id: 's1b', n: '1b',
          title: { es: 'Escribe la nacionalidad de cada personaje.', ko: '각 인물의 국적을 쓰세요.', en: 'Write the nationality of each character.' },
          items: [
            { q: '🇦🇷 Eduardo Montes es ___.', a: ['argentino'] },
            { q: '🇧🇷 Luiz Guterres es ___.', a: ['brasileño'] },
            { q: '🇮🇹 Sandro Moretto es ___.', a: ['italiano'] },
            { q: '🇬🇧 John Brown es ___.', a: ['británico|inglés'] },
            { q: '🇪🇸 Isabel Castillo Ruiz es ___.', a: ['española'] },
            { q: '🇵🇪 Luis Alberto García es ___.', a: ['peruano'] }
          ] },
        { type: 'fill', id: 's1c', n: '1c',
          title: { es: 'Completa los diálogos…', ko: '대화를 완성하세요…', en: 'Complete the dialogues…' },
          items: [
            { q: 'Diálogo 1: — Buenos días. — Hola, ___.', a: ['buenos días'] },
            { q: 'Diálogo 1: — ¿De dónde es usted? — ___ de España. ¿___? — Yo soy de Perú.', a: ['Soy', 'Y usted'] },
            { q: 'Diálogo 2: — Buenos días, ___ Sandro Moretto, de Italia.', a: ['soy|me llamo'] },
            { q: 'Diálogo 2: — ¡Ah! ___. Yo soy John Brown, de Gran Bretaña.', a: ['Encantado|Mucho gusto'] },
            { q: 'Diálogo 3: — Hola, buenos días. — ___.', a: ['Buenos días|Hola, buenos días|Hola'] },
            { q: 'Diálogo 3: — ¿Es usted de Portugal? — No, soy de Brasil. — ¿De Brasil? ___ argentino.', a: ['Yo soy|Soy'] }
          ] },
        { type: 'choice', id: 's1c2', n: '1c',
          title: { es: '…y relaciónalos con los personajes de la ilustración.', ko: '…그리고 그림 속 인물과 연결하세요.', en: '…and match them with the characters in the illustration.' },
          items: [
            { q: 'Diálogo 1 (España – Perú)', opts: ['Isabel Castillo Ruiz y Luis Alberto García', 'Sandro Moretto y John Brown', 'Eduardo Montes y Luiz Guterres'], a: 0 },
            { q: 'Diálogo 2 (Italia – Gran Bretaña)', opts: ['Isabel Castillo Ruiz y Luis Alberto García', 'Sandro Moretto y John Brown', 'Eduardo Montes y Luiz Guterres'], a: 1 },
            { q: 'Diálogo 3 (Brasil – Argentina)', opts: ['Isabel Castillo Ruiz y Luis Alberto García', 'Sandro Moretto y John Brown', 'Eduardo Montes y Luiz Guterres'], a: 2 }
          ] },
        { type: 'dialog', title: { es: 'Diálogo 3 (completo)', ko: '대화 3 (완성)', en: 'Dialogue 3 (complete)' }, lines: [
          { who: 'Eduardo', es: 'Hola, buenos días.', ko: '안녕하세요.', en: 'Hello, good morning.' },
          { who: 'Luiz', es: 'Buenos días.', ko: '안녕하세요.', en: 'Good morning.' },
          { who: 'Eduardo', es: '¿Es usted de Portugal?', ko: '포르투갈 분이세요?', en: 'Are you from Portugal?' },
          { who: 'Luiz', es: 'No, soy de Brasil.', ko: '아니요, 브라질 출신이에요.', en: 'No, I’m from Brazil.' },
          { who: 'Eduardo', es: '¿De Brasil? Yo soy argentino.', ko: '브라질이요? 저는 아르헨티나 사람이에요.', en: 'From Brazil? I’m Argentinian.' } ] },
        { type: 'open', id: 's1d', n: '1d',
          title: { es: 'Inventa otros diálogos.', ko: '다른 대화를 만들어 보세요.', en: 'Make up other dialogues.' },
          items: [ { q: 'Escribe un diálogo entre dos personajes de la ilustración.', model: '— Buenos días, me llamo Isabel Castillo. — Encantado. Yo soy John Brown. — ¿De dónde es usted? — Soy de Gran Bretaña, ¿y usted? — Yo soy española, de Madrid.' } ] }
      ] },

    // ───────────────────────── YA CONOCES ─────────────────────────
    { id: 'yaconoces', tag: '', name: 'Ya conoces',
      sub: { es: 'Resumen de la unidad', ko: '단원 요약', en: 'Unit summary' },
      blocks: [
        { type: 'table', title: { es: '1a. Las expresiones para saludar y despedirte', ko: '1a. 인사하고 작별하는 표현', en: '1a. Expressions to greet and say goodbye' },
          head: ['Saludar – Formal', 'Saludar – Informal', 'Despedirse – Formal', 'Despedirse – Informal'],
          rows: [
            ['Buenos días.', '¡Hola!', 'Adiós, hasta mañana.', '¡Adiós!'],
            ['Buenas tardes.', '¡Hola! ¿Cómo estás?', 'Buenas noches.', '¡Hasta luego!'],
            ['Buenas noches.', 'Hola, ¿qué tal?', '', 'Hasta mañana.']
          ] },
        { type: 'table', title: { es: '1b. Y para preguntar e informar sobre el nombre y la nacionalidad', ko: '1b. 이름과 국적 묻고 답하기', en: '1b. Asking and giving name and nationality' },
          head: ['Preguntar', 'Responder'],
          rows: [
            ['¿“Benito” es nombre o apellido?', 'Es…'],
            ['¿Cómo te llamas?', '(Yo) soy + nombre / (Yo) me llamo + nombre'],
            ['¿De dónde eres? / ¿De dónde es usted?', '(Yo) soy + nacionalidad / (Yo) soy de + país']
          ] },
        { type: 'vocab', title: { es: '2. Las palabras', ko: '2. 단어', en: '2. Words' },
          items: [
            { es: 'el nombre', ko: '이름', en: 'first name', e: '🪪' },
            { es: 'el apellido', ko: '성', en: 'surname', e: '👪' },
            { es: 'la nacionalidad', ko: '국적', en: 'nationality', e: '🌍' },
            { es: 'el país', ko: '나라', en: 'country', e: '🗺️' },
            { es: 'la capital', ko: '수도', en: 'capital', e: '🏙️' }
          ] },
        { type: 'table', title: { es: '3a. Los verbos SER y LLAMARSE en Presente', ko: '3a. 현재형 SER와 LLAMARSE', en: '3a. SER and LLAMARSE in the present' },
          head: ['', 'Ser', 'Llamarse'],
          rows: [
            ['Yo', 'soy', 'me llamo'],
            ['Tú', 'eres', 'te llamas'],
            ['Él, ella, usted', 'es', 'se llama'],
            ['Nosotros, nosotras', 'somos', 'nos llamamos'],
            ['Vosotros, vosotras', 'sois', 'os llamáis'],
            ['Ellos, ellas, ustedes', 'son', 'se llaman']
          ] },
        { type: 'table', title: { es: '3b. El género de los gentilicios', ko: '3b. 국적 형용사의 성', en: '3b. Gender of nationality adjectives' },
          head: ['Masculino', 'Femenino', 'Ejemplo'],
          rows: [
            ['-o', '-a', 'ruso / rusa'],
            ['-consonante', '+ -a', 'español / española'],
            ['-e', '-e', 'nicaragüense'],
            ['-í', '-í', 'marroquí']
          ] },
        { type: 'table', title: { es: '3c. Los interrogativos', ko: '3c. 의문사', en: '3c. Question words' },
          head: ['', ''],
          rows: [
            ['Cómo', '¿Cómo está/s? · ¿Cómo se / te llama/s?'],
            ['Qué', '¿Qué tal?'],
            ['Dónde', '¿De dónde es / eres?']
          ],
          note: { ko: '스페인어 의문문은 앞에 ¿, 뒤에 ?를 써요. 의문사에는 강세 부호(cómo, qué, dónde)가 붙어요.', en: 'Spanish questions open with ¿ and close with ?. Question words carry an accent (cómo, qué, dónde).' } }
      ] }
  ]
});

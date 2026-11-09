ECO.unit({
  num: 5,
  title: 'De nueve y media a dos',
  emoji: '🕘🎂',
  pages: '46–55',
  topics: { ko: '나이 · 생일 · 시간과 일과 · 습관 · 소유사', en: 'Age · birthdays · times and schedules · daily habits · possessives' },
  goals: [
    { es: 'Preguntar y decir la edad', ko: '나이 묻고 말하기', en: 'Ask and say your age' },
    { es: 'Hablar del cumpleaños', ko: '생일에 대해 말하기', en: 'Talk about birthdays' },
    { es: 'Hablar de horas y horarios', ko: '시간과 일정(근무·수업 시간)에 대해 말하기', en: 'Talk about times and schedules' },
    { es: 'Hablar de hábitos cotidianos', ko: '일상 습관에 대해 말하기', en: 'Talk about daily habits' },
    { es: 'Expresar la pertenencia', ko: '소유 표현하기', en: 'Express possession' },
    { es: 'Léxico: números, horas y fechas', ko: '어휘: 숫자, 시간, 날짜', en: 'Vocabulary: numbers, times and dates' },
    { es: 'Gramática: presente de verbos irregulares, presente de ESTAR + gerundio, los posesivos', ko: '문법: 불규칙 동사 현재형, ESTAR + 현재분사, 소유사', en: 'Grammar: irregular present verbs, ESTAR + gerund, possessives' },
    { es: 'Pronunciación: la ge (g) y la jota (j)', ko: '발음: g와 j', en: 'Pronunciation: g and j' },
    { es: 'Mundo hispano: fiestas populares de España', ko: '스페인어권 세계: 스페인의 대중 축제', en: 'Hispanic world: popular festivals in Spain' }
  ],
  people: { 'José Manuel': 'm', 'Gema': 'f' },
  sections: [
    /* ---------------- PORTADA ---------------- */
    { id: 'portada', tag: '', name: 'Portada',
      sub: { es: 'De nueve y media a dos', ko: '9시 반부터 2시까지', en: 'From half past nine to two' },
      blocks: [
        { type: 'note', ko: '🖥️ 그림: 세비야의 사무실에 있는 호세 마누엘이 부에노스아이레스에 있는 헤마와 화상 통화를 합니다. 두 번째 그림에서는 사무실 동료들이 풍선을 들고 생일을 축하하고 있어요.', en: '🖥️ Picture: José Manuel, in his office in Seville, is on a video call with Gema in Buenos Aires. In the second picture his colleagues are celebrating his birthday with balloons.' },
        { type: 'fill', id: 'p1', n: '1', listen: true,
          title: { es: 'Escucha esta videoconferencia. Algunas palabras no se oyen bien. ¿Puedes adivinarlas?', ko: '화상 회의를 들어 보세요. 몇몇 단어가 잘 들리지 않아요. 맞혀 볼 수 있나요?', en: 'Listen to this video call. Some words can’t be heard well. Can you guess them?' },
          bank: ['llamas', 'eres', 'tarde', 'estudiante', 'tienes', 'repetir', 'gracias', 'estás'],
          items: [
            { q: 'José Manuel: Hola. ¿Cómo te ___? — Gema: Gema, ¿y tú?', a: ['llamas'] },
            { q: 'José Manuel: José Manuel. ¿De dónde ___?', a: ['eres'] },
            { q: 'José Manuel: Son las siete y veinte de la ___.', a: ['tarde'] },
            { q: 'Gema: No, yo no trabajo, soy ___.', a: ['estudiante'] },
            { q: 'Gema: Diecinueve. Y tú, ¿cuántos años ___?', a: ['tienes'] },
            { q: 'José Manuel: ¿Cómo? ¿Puedes ___?', a: ['repetir'] },
            { q: 'José Manuel: ¡Ah, ___! ¿Cuándo es tu cumpleaños?', a: ['gracias'] },
            { q: 'Gema: ¿Dónde ___? — José Manuel: Estoy en la oficina.', a: ['estás'] }
          ] },
        { type: 'dialog', title: { es: 'En una videoconferencia', ko: '화상 회의에서', en: 'In a video call' },
          lines: [
            { who: 'José Manuel', es: 'Hola. ¿Cómo te llamas?', ko: '안녕. 이름이 뭐야?', en: 'Hi. What’s your name?' },
            { who: 'Gema', es: 'Gema, ¿y tú?', ko: '헤마야, 너는?', en: 'Gema, and you?' },
            { who: 'José Manuel', es: 'José Manuel. ¿De dónde eres?', ko: '호세 마누엘. 어디 출신이야?', en: 'José Manuel. Where are you from?' },
            { who: 'Gema', es: 'Soy española, pero ahora estoy viviendo en Buenos Aires, ¿y tú?', ko: '스페인 사람인데 지금은 부에노스아이레스에 살고 있어. 너는?', en: 'I’m Spanish, but now I’m living in Buenos Aires. And you?' },
            { who: 'José Manuel', es: 'De Sevilla.', ko: '세비야 출신이야.', en: 'From Seville.' },
            { who: 'Gema', es: '¿Y estás en Sevilla?', ko: '그럼 지금 세비야에 있어?', en: 'And are you in Seville?' },
            { who: 'José Manuel', es: 'Sí.', ko: '응.', en: 'Yes.' },
            { who: 'Gema', es: '¿Qué hora es en España?', ko: '스페인은 지금 몇 시야?', en: 'What time is it in Spain?' },
            { who: 'José Manuel', es: 'Son las siete y veinte de la tarde.', ko: '저녁 7시 20분이야.', en: 'It’s twenty past seven in the evening.' },
            { who: 'Gema', es: 'En Buenos Aires son las tres y veinte.', ko: '부에노스아이레스는 3시 20분이야.', en: 'In Buenos Aires it’s twenty past three.' },
            { who: 'José Manuel', es: '¿Y no estás trabajando?', ko: '그럼 일하고 있지 않아?', en: 'And aren’t you working?' },
            { who: 'Gema', es: 'No, yo no trabajo, soy estudiante.', ko: '아니, 난 일 안 해. 학생이야.', en: 'No, I don’t work, I’m a student.' },
            { who: 'José Manuel', es: '¿Qué edad tienes?', ko: '몇 살이야?', en: 'How old are you?' },
            { who: 'Gema', es: 'Diecinueve. Y tú, ¿cuántos años tienes?', ko: '열아홉. 너는 몇 살이야?', en: 'Nineteen. And how old are you?' },
            { who: 'José Manuel', es: 'Hoy cumplo veinticinco.', ko: '오늘 스물다섯 살이 돼.', en: 'I turn twenty-five today.' },
            { who: 'Gema', es: '¿Hoy es tu cumpleaños?', ko: '오늘이 네 생일이야?', en: 'Is today your birthday?' },
            { who: 'José Manuel', es: 'Sí.', ko: '응.', en: 'Yes.' },
            { who: 'Gema', es: '¡Felicidades!', ko: '축하해!', en: 'Congratulations!' },
            { who: 'José Manuel', es: '¿Cómo? ¿Puedes repetir?', ko: '뭐라고? 다시 말해 줄래?', en: 'What? Can you repeat?' },
            { who: 'Gema', es: '¡Feliz cumpleaños!', ko: '생일 축하해!', en: 'Happy birthday!' },
            { who: 'José Manuel', es: '¡Ah, gracias! ¿Cuándo es tu cumpleaños?', ko: '아, 고마워! 네 생일은 언제야?', en: 'Oh, thanks! When is your birthday?' },
            { who: 'Gema', es: 'El treinta de enero. También es lunes. ¿Te estás riendo?', ko: '1월 30일. 그날도 월요일이야. 너 웃고 있어?', en: 'January 30th. It’s also a Monday. Are you laughing?' },
            { who: 'José Manuel', es: 'Sí, estoy hablando con mis compañeros de trabajo.', ko: '응, 직장 동료들과 이야기하고 있어.', en: 'Yes, I’m talking with my workmates.' },
            { who: 'Gema', es: '¿Dónde estás?', ko: '어디에 있어?', en: 'Where are you?' },
            { who: 'José Manuel', es: 'Estoy en la oficina. Estamos celebrando mi cumpleaños.', ko: '사무실에 있어. 내 생일을 축하하고 있어.', en: 'I’m at the office. We’re celebrating my birthday.' },
            { who: 'Gema', es: '¡¿En vuestra oficina?!', ko: '너희 사무실에서?!', en: 'In your office?!' },
            { who: 'José Manuel', es: 'Sí, pero el horario de trabajo es hasta las siete.', ko: '응, 그런데 근무 시간은 7시까지야.', en: 'Yes, but working hours are until seven.' },
            { who: 'Gema', es: 'Ah. ¿Cuántos sois?', ko: '아. 너희 몇 명이야?', en: 'Oh. How many of you are there?' },
            { who: 'José Manuel', es: 'Cincuenta y dos.', ko: '쉰두 명.', en: 'Fifty-two.' },
            { who: 'Gema', es: '¡Cincuenta y dos!', ko: '쉰두 명이라고!', en: 'Fifty-two!' }
          ] }
      ] },

    /* ---------------- A ---------------- */
    { id: 'a', tag: 'A', name: 'Comprensión y práctica',
      sub: { es: 'En una videoconferencia', ko: '화상 회의에서', en: 'In a video call' },
      blocks: [
        { type: 'choice', id: 'a1', n: '1', listen: true,
          title: { es: '¿Qué oyes?', ko: '무엇이 들리나요?', en: 'What do you hear?' },
          items: [
            { say: 'Son las siete y veinte.', opts: ['Son las siete y veinte.', 'Son las seis y veinte.'], a: 0 },
            { say: '¿Cuántos años tienes?', opts: ['¿Cuántos años tiene?', '¿Cuántos años tienes?'], a: 1 },
            { say: 'Hoy cumplo veinticinco.', opts: ['Hoy cumplo veinticinco.', 'Hoy cumplo treinta y cinco.'], a: 0 },
            { say: 'El treinta de enero.', opts: ['El treinta de enero.', 'El treinta de febrero.'], a: 0 },
            { say: '¿Te estás riendo?', opts: ['¿Te estás riendo?', '¿Se está riendo?'], a: 0 },
            { say: '¿Y no estás trabajando?', opts: ['¿Y no están trabajando?', '¿Y no estás trabajando?'], a: 1 }
          ] },
        { type: 'tf', id: 'a2', n: '2',
          title: { es: 'Di si es verdadero (V) o falso (F).', ko: '맞으면 V, 틀리면 F를 고르세요.', en: 'Say if it is true (V) or false (F).' },
          items: [
            { q: 'Gema y José Manuel tienen la misma edad.', a: false },
            { q: 'José Manuel es de Sevilla.', a: true },
            { q: 'El treinta de enero es sábado.', a: false },
            { q: 'Gema tiene veinticinco años.', a: false },
            { q: 'Gema está en paro.', a: false },
            { q: 'José Manuel trabaja hasta las siete de la tarde.', a: true },
            { q: 'José Manuel cumple cincuenta y dos años.', a: false },
            { q: 'Hoy es el cumpleaños de Gema.', a: false },
            { q: 'Entre España y Argentina hay una diferencia de cuatro horas.', a: true }
          ] },
        { type: 'match', id: 'a3', n: '3',
          title: { es: 'Relaciona los dibujos con los diálogos.', ko: '그림과 대화를 연결하세요.', en: 'Match the pictures with the dialogues.' },
          left: [
            '1. — Felicidades. ¿Cuántos años cumples? — Treinta.',
            '2. — ¿Cuántos años tienes? — Dos.',
            '3. — ¿Cómo se llama, por favor? — José Manuel García. — ¿Qué edad tiene? — Veinticinco años.',
            '4. — ¿Puedo entrar? — No, lo siento. Son las dos y veinte. El horario es hasta las dos.'
          ],
          right: [
            'A 🚪 Una oficina con el cartel «Horario de 8 a 14 horas»',
            'B 🧑‍💼 Una entrevista: una señora escribe los datos de un chico',
            'C 🧒✌️ Un niño pequeño enseña dos dedos',
            'D 🎂 Unos amigos con una tarta con el número 30'
          ],
          a: [3, 2, 1, 0] },
        { type: 'classify', id: 'a4', n: '4',
          title: { es: 'Clasifica estas frases del diálogo.', ko: '대화에 나온 문장을 분류하세요.', en: 'Classify these sentences from the dialogue.' },
          cats: ['Normalmente o siempre', 'Ahora'],
          items: [
            { w: 'Soy española.', c: 0 },
            { w: 'Estoy viviendo en Buenos Aires.', c: 1 },
            { w: '¿Y no estás trabajando?', c: 1 },
            { w: 'No, yo no trabajo, soy estudiante.', c: 0 },
            { w: '¿Te estás riendo?', c: 1 },
            { w: 'Estoy hablando con mis compañeros de trabajo.', c: 1 },
            { w: 'Estamos celebrando mi cumpleaños.', c: 1 },
            { w: 'El horario es hasta las siete.', c: 0 }
          ] },
        { type: 'open', id: 'a5', n: '5',
          title: { es: 'Y tú, ¿cuántos años tienes? ¿Cuándo es tu cumpleaños?', ko: '너는 몇 살이니? 생일은 언제니?', en: 'And you, how old are you? When is your birthday?' },
          items: [
            { q: '¿Cuántos años tienes?', model: 'Tengo dieciséis años.' },
            { q: '¿Cuándo es tu cumpleaños?', model: 'Mi cumpleaños es el doce de marzo.' }
          ] }
      ] },

    /* ---------------- B ---------------- */
    { id: 'b', tag: 'B', name: 'Pronunciación y ortografía',
      sub: { es: 'La ge (g) y la jota (j)', ko: 'g와 j', en: 'The letters g and j' },
      blocks: [
        { type: 'note', es: 'La letra G se pronuncia [g] delante de A, O, U.<br>La letra G + la vocal U se pronuncian [g] delante de E, I.<br>La letra G se pronuncia [x] delante de E, I.<br>La letra J siempre se pronuncia [x].',
          ko: 'G는 A, O, U 앞에서 [g](ㄱ)로 발음해요. E, I 앞에서 [g] 소리를 내려면 GU를 써요(gue, gui — u는 소리 나지 않음). G가 E, I 앞에 오면 [x](목구멍에서 나는 강한 ㅎ)로 발음해요. J는 항상 [x]로 발음해요.',
          en: 'G is pronounced [g] before A, O, U. Before E, I you write GU to keep the [g] sound (gue, gui — the u is silent). G before E, I is pronounced [x] (a strong throaty h). J is always pronounced [x].' },
        { type: 'vocab', title: { es: '1. Escucha y repite la pronunciación de las palabras siguientes', ko: '다음 단어의 발음을 듣고 따라 하세요', en: 'Listen and repeat these words' },
          items: [
            { es: 'Jugando', ko: '[g] ga·go·gu', en: '[g] ga·go·gu' }, { es: 'Gonzalo', ko: '[g] ga·go·gu', en: '[g] ga·go·gu' }, { es: 'Gusta', ko: '[g] ga·go·gu', en: '[g] ga·go·gu' },
            { es: 'Miguel', ko: '[g] gue·gui', en: '[g] gue·gui' }, { es: 'Seguir', ko: '[g] gue·gui', en: '[g] gue·gui' }, { es: 'Guitarra', ko: '[g] gue·gui', en: '[g] gue·gui' },
            { es: 'Argentina', ko: '[x] ge·gi', en: '[x] ge·gi' }, { es: 'Gente', ko: '[x] ge·gi', en: '[x] ge·gi' }, { es: 'Corregir', ko: '[x] ge·gi', en: '[x] ge·gi' },
            { es: 'Javier', ko: '[x] j', en: '[x] j' }, { es: 'Ejemplo', ko: '[x] j', en: '[x] j' }, { es: 'Hijo', ko: '[x] j', en: '[x] j' }
          ] },
        { type: 'classify', id: 'b1', n: '1',
          title: { es: 'Escucha y repite la pronunciación de las palabras siguientes: ¿[g] o [x]?', ko: '단어를 듣고 따라 한 뒤, 밑줄 친 g/j 소리가 [g]인지 [x]인지 분류하세요.', en: 'Listen and repeat, then classify the g/j sound: [g] or [x]?' },
          cats: ['[g]', '[x]'],
          items: [
            { w: 'Gonzalo', c: 0 }, { w: 'Gusta', c: 0 }, { w: 'Miguel', c: 0 }, { w: 'Seguir', c: 0 }, { w: 'Guitarra', c: 0 },
            { w: 'Argentina', c: 1 }, { w: 'Gente', c: 1 }, { w: 'Corregir', c: 1 }, { w: 'Javier', c: 1 }, { w: 'Ejemplo', c: 1 }, { w: 'Hijo', c: 1 }
          ] },
        { type: 'dictation', id: 'b2', n: '2', listen: true,
          title: { es: 'Sonido [g]. Escucha y repite.', ko: '[g] 소리. 듣고 따라 한 뒤 써 보세요.', en: 'The [g] sound. Listen, repeat and write.' },
          items: [
            { say: 'Goya' }, { say: 'Belga' }, { say: 'Bogotá' }, { say: 'Diálogo' }, { say: 'Paraguay' }, { say: 'Agua' },
            { say: 'Agosto' }, { say: 'Gustar' }, { say: 'Portugués' }, { say: 'Amigo' }, { say: 'Guitarra' }, { say: 'Segundo' }
          ] },
        { type: 'dictation', id: 'b3', n: '3', listen: true,
          title: { es: 'Sonido [x]. Escucha y repite.', ko: '[x] 소리. 듣고 따라 한 뒤 써 보세요.', en: 'The [x] sound. Listen, repeat and write.' },
          items: [
            { say: 'Baja' }, { say: 'Jueves' }, { say: 'Religión' }, { say: 'General' }, { say: 'Japón' }, { say: 'Junio' },
            { say: 'Joven' }, { say: 'Trabajo' }, { say: 'Gerona' }, { say: 'Gibraltar' }, { say: 'Julio' }, { say: 'Jamón' }
          ] },
        { type: 'choice', id: 'b4', n: '4', listen: true,
          title: { es: 'Contraste [x] y [g]. ¿Qué oyes?', ko: '[x]와 [g]의 대조. 무엇이 들리나요?', en: '[x] vs [g]. What do you hear?' },
          items: [
            { say: 'Ajo', opts: ['Hago', 'Ajo'], a: 1 },
            { say: 'Higo', opts: ['Higo', 'Hijo'], a: 0 },
            { say: 'Justo', opts: ['Gusto', 'Justo'], a: 1 },
            { say: 'Gota', opts: ['Gota', 'Jota'], a: 0 }
          ] },
        { type: 'choice', id: 'b5', n: '5', listen: true,
          title: { es: 'Contraste [x] y [r] / [r̄]. Escribe 1 ó 2 según el orden en que lo escuches.', ko: '[x]와 [r]/[rr]의 대조. 들은 순서대로 1, 2를 매기세요 — 먼저(1번으로) 들린 단어를 고르세요.', en: '[x] vs [r]/[rr]. Number them 1 or 2 in the order you hear them — choose the word you hear first (1).' },
          items: [
            { say: 'Ruedo. Juego.', opts: ['Juego', 'Ruedo'], a: 1 },
            { say: 'Caja. Cara.', opts: ['Caja', 'Cara'], a: 0 },
            { say: 'Hora. Hoja.', opts: ['Hoja', 'Hora'], a: 1 },
            { say: 'Jamón. Ramón.', opts: ['Jamón', 'Ramón'], a: 0 }
          ] },
        { type: 'fill', id: 'b6', n: '6', listen: true,
          title: { es: 'Escucha las frases y completa con las letras “G” o “J”.', ko: '문장을 듣고 G 또는 J를 채우세요.', en: 'Listen to the sentences and fill in G or J.' },
          items: [
            { q: 'Me ___usta ___u___ar con el ___ato.', a: ['g', 'j', 'g', 'g'], say: 'Me gusta jugar con el gato.' },
            { q: 'Los ___ueves mi hi___o traba___a en ___erona.', a: ['j', 'j', 'j', 'G|g'], say: 'Los jueves mi hijo trabaja en Gerona.' },
            { q: 'En el mes de a___osto la ___ente baila tan___os en este lu___ar.', a: ['g', 'g', 'g', 'g'], say: 'En el mes de agosto la gente baila tangos en este lugar.' }
          ] },
        { type: 'open', id: 'b7', n: '7',
          title: { es: 'Piensa en otras palabras que se escriben con “ge” o con “jota”. ¿Cómo se pronuncian?', ko: 'g나 j로 쓰는 다른 단어를 생각해 보세요. 어떻게 발음하나요?', en: 'Think of other words written with g or j. How are they pronounced?' },
          items: [
            { q: 'Palabras con “ge”:', model: 'gato [g], gordo [g], guerra [g], página [x], gimnasio [x]' },
            { q: 'Palabras con “jota”:', model: 'jardín, ojo, mujer, joya, jefe — siempre [x]' }
          ] }
      ] },

    /* ---------------- C ---------------- */
    { id: 'c', tag: 'C', name: 'Léxico',
      sub: { es: 'Números, horas y fechas', ko: '숫자, 시간, 날짜', en: 'Numbers, times and dates' },
      blocks: [
        { type: 'match', id: 'c1', n: '1a',
          title: { es: 'Relaciona.', ko: '연결하세요.', en: 'Match.' },
          left: ['20', '30', '40', '50', '60', '70', '80', '90', '100'],
          right: ['setenta', 'noventa', 'ochenta', 'cien', 'treinta', 'veinte', 'cincuenta', 'cuarenta', 'sesenta'],
          a: [5, 4, 7, 6, 8, 0, 2, 1, 3] },
        { type: 'table', title: { es: '1b. Observa.', ko: '관찰하세요', en: 'Look' },
          head: ['', '1', '2', '3…'],
          rows: [
            ['20', '21 veintiuno', '22 veintidós', '23 veintitrés…'],
            ['30', '31 treinta y uno', '32 treinta y dos', '33 treinta y tres…'],
            ['40', '41 cuarenta y uno', '42 cuarenta y dos', '43 cuarenta y tres…']
          ],
          note: { ko: '21~29는 한 단어(veintiuno, veintidós…)로 쓰지만, 31부터는 “treinta y uno”처럼 y로 연결해 따로 써요.', en: '21–29 are written as one word (veintiuno, veintidós…), but from 31 on you use separate words joined by y: treinta y uno.' } },
        { type: 'choice', id: 'c2', n: '1c', listen: true,
          title: { es: 'Escucha las frases y señala el número correcto.', ko: '문장을 듣고 맞는 숫자를 고르세요.', en: 'Listen to the sentences and mark the correct number.' },
          items: [
            { say: 'Vivo en la calle Castelló número veintiuno.', opts: ['21', '31'], a: 0 },
            { say: 'El prefijo de Barcelona es el noventa y tres.', opts: ['93', '73'], a: 0 },
            { say: 'Tengo treinta y ocho años.', opts: ['78', '38'], a: 1 },
            { say: 'En mi familia somos sesenta.', opts: ['70', '60'], a: 1 },
            { say: 'Tengo doce gatos.', opts: ['11', '12'], a: 1 },
            { say: 'En América Latina el cincuenta y cuatro por ciento de la población trabaja en servicios.', opts: ['44', '54'], a: 1 }
          ] },
        { type: 'note', es: 'en punto · y cinco · y diez · y cuarto · y veinte · y veinticinco · y media · menos veinticinco · menos veinte · menos cuarto · menos diez · menos cinco',
          ko: '🕐 정각은 “en punto”, 30분까지는 시 + y + 분(y cuarto = 15분, y media = 30분), 30분이 넘으면 다음 시 + menos + 남은 분(menos cuarto = 15분 전)으로 말해요. 예) 1:45 → las dos menos cuarto. 1시는 “Es la una”, 나머지는 “Son las…”',
          en: '🕐 On the hour = en punto; up to half past: hour + y + minutes (y cuarto = quarter past, y media = half past); after half past: next hour + menos + minutes left (menos cuarto = quarter to). E.g. 1:45 → las dos menos cuarto. One o’clock: “Es la una”; otherwise “Son las…”.' },
        { type: 'fill', id: 'c3', n: '2',
          title: { es: '¿Qué hora es? Mira el dibujo y luego escribe la hora debajo de cada reloj.', ko: '몇 시인가요? 그림(시계)을 보고 각 시계 아래에 시간을 쓰세요.', en: 'What time is it? Look at the picture and write the time under each clock.' },
          items: [
            { q: 'A 🕑 1:45 → Son ___.', a: ['las dos menos cuarto'] },
            { q: 'B 🕕 6:00 → Son ___.', a: ['las seis en punto|las seis'] },
            { q: 'C 🕤 9:30 → Son ___.', a: ['las nueve y media'] },
            { q: 'D 🕒 2:55 → Son ___.', a: ['las tres menos cinco'] },
            { q: 'E 🕢 7:25 → Son ___.', a: ['las siete y veinticinco'] },
            { q: 'F 🕚 10:50 → Son ___.', a: ['las once menos diez'] },
            { q: 'G 🕔 5:15 → Son ___.', a: ['las cinco y cuarto'] },
            { q: 'H 🕖 6:45 → Son ___.', a: ['las siete menos cuarto'] },
            { q: 'I 🕑 2:20 → Son ___.', a: ['las dos y veinte'] }
          ] },
        { type: 'fill', id: 'c4', n: '3',
          title: { es: 'Escribe los meses en este calendario.', ko: '달력에 달 이름을 쓰세요.', en: 'Write the months on this calendar.' },
          bank: ['septiembre', 'agosto', 'febrero', 'diciembre', 'enero', 'octubre', 'abril', 'junio', 'julio', 'marzo', 'noviembre', 'mayo'],
          items: [
            { q: '📅 1. ENERO → 2. ___ → 3. ___', a: ['febrero', 'marzo'] },
            { q: '📅 4. ABRIL → 5. ___ → 6. JUNIO', a: ['mayo'] },
            { q: '📅 7. ___ → 8. ___ → 9. ___', a: ['julio', 'agosto', 'septiembre'] },
            { q: '📅 10. ___ → 11. ___ → 12. ___', a: ['octubre', 'noviembre', 'diciembre'] }
          ] },
        { type: 'order', id: 'c5', n: '4',
          title: { es: 'Pon en orden los días de la semana.', ko: '요일을 순서대로 놓으세요.', en: 'Put the days of the week in order.' },
          items: [ { a: 'lunes martes miércoles jueves viernes sábado domingo' } ] },
        { type: 'open', id: 'c6', n: '4',
          title: { es: 'Después, haz frases como en el ejemplo: «Hoy es martes 30 de marzo».', ko: '그다음, 예처럼 문장을 만드세요: «Hoy es martes 30 de marzo»(오늘은 3월 30일 화요일이에요).', en: 'Then make sentences like the example: “Hoy es martes 30 de marzo” (Today is Tuesday, March 30th).' },
          items: [
            { q: '¿Qué día es hoy?', model: 'Hoy es lunes 9 de noviembre.' },
            { q: '¿Qué día es mañana?', model: 'Mañana es martes 10 de noviembre.' }
          ] }
      ] },

    /* ---------------- D1 ---------------- */
    { id: 'd1', tag: 'D', name: 'Gramática',
      sub: { es: 'Presente de verbos irregulares y ESTAR + gerundio', ko: '불규칙 동사 현재형과 ESTAR + 현재분사', en: 'Irregular present verbs and ESTAR + gerund' },
      blocks: [
        { type: 'fill', id: 'd1', n: '1a',
          title: { es: 'Completa el cuadro. Algunos verbos irregulares: E>I', ko: '표를 완성하세요. 몇몇 불규칙 동사: E→I', en: 'Complete the table. Some irregular verbs: E>I' },
          items: [
            { q: 'Repetir: repito, repites, repite, repetimos, repetís, repiten<br>Pedir: ___, ___, pide, pedimos, pedís, piden', a: ['pido', 'pides'] },
            { q: 'Reír: río, ríes, ___, ___, ___, ___', a: ['ríe', 'reímos', 'reís', 'ríen'] }
          ] },
        { type: 'note', es: 'Otros verbos: servir, vestir, despedir, etc.', ko: '같은 방식(e→i)으로 바뀌는 다른 동사: servir(봉사하다·차려 내다), vestir(옷 입히다), despedir(배웅하다) 등. nosotros/vosotros에서는 바뀌지 않아요.', en: 'Other verbs like this (e→i): servir, vestir, despedir, etc. The nosotros/vosotros forms don’t change.' },
        { type: 'fill', id: 'd2', n: '1b',
          title: { es: 'Pon los verbos en Presente.', ko: '동사를 현재형으로 쓰세요.', en: 'Put the verbs in the present tense.' },
          items: [
            { q: 'Todos los alumnos ___ el ejercicio.', a: ['repiten'], hint: 'repetir' },
            { q: 'Ustedes ___ mucho.', a: ['piden'], hint: 'pedir' },
            { q: 'Esto no me ___.', a: ['sirve'], hint: 'servir' },
            { q: 'Me ___ y después desayuno.', a: ['visto'], hint: 'vestir' },
            { q: 'Rosa se ___ de todo.', a: ['ríe'], hint: 'reír' },
            { q: 'Me ___ tú el café, ¿vale?', a: ['pides'], hint: 'pedir' },
            { q: 'Mi hijo tiene tres años y ya se ___ solo.', a: ['viste'], hint: 'vestir' },
            { q: 'En las videoconferencias hablamos y ___ mucho.', a: ['reímos'], hint: 'reír' },
            { q: 'Mi profesora ___ siempre lo mismo.', a: ['repite'], hint: 'repetir' },
            { q: 'Los camareros no ___ en las mesas.', a: ['sirven'], hint: 'servir' }
          ] },
        { type: 'classify', id: 'd3', n: '1c',
          title: { es: 'Clasifica los verbos.', ko: '동사를 분류하세요.', en: 'Classify the verbs.' },
          cats: ['E > IE', 'O > UE', 'E > I'],
          items: [
            { w: 'vestir', c: 2 }, { w: 'poder', c: 1 }, { w: 'querer', c: 0 }, { w: 'despedir', c: 2 }, { w: 'servir', c: 2 },
            { w: 'sentir', c: 0 }, { w: 'dormir', c: 1 }, { w: 'cerrar', c: 0 }, { w: 'mentir', c: 0 }, { w: 'divertir', c: 0 }
          ] },
        { type: 'table', title: { es: '2a. Observa la formación del gerundio', ko: '현재분사(gerundio) 만드는 법', en: 'How the gerund is formed' },
          head: ['Verbos -AR', 'Verbos -ER o -IR'],
          rows: [ ['+ ANDO', '+ IENDO'], ['hablar → hablando', 'beber → bebiendo'], ['', 'vivir → viviendo'] ],
          note: { ko: '-ar 동사는 -ando, -er/-ir 동사는 -iendo를 붙여요.', en: '-ar verbs add -ando; -er/-ir verbs add -iendo.' } },
        { type: 'table', title: { es: 'Algunos gerundios irregulares', ko: '불규칙 현재분사', en: 'Some irregular gerunds' },
          head: ['Infinitivo', 'Gerundio'],
          rows: [ ['decir', 'diciendo'], ['dormir', 'durmiendo'], ['pedir', 'pidiendo'], ['poder', 'pudiendo'], ['sentir', 'sintiendo'], ['ser', 'siendo'] ] },
        { type: 'fill', id: 'd4', n: '2b',
          title: { es: 'Escribe el infinitivo.', ko: '동사원형을 쓰세요.', en: 'Write the infinitive.' },
          items: [
            { q: 'Llamando → ___', a: ['llamar'] },
            { q: 'Siendo → ___', a: ['ser'] },
            { q: 'Respondiendo → ___', a: ['responder'] },
            { q: 'Pidiendo → ___', a: ['pedir'] },
            { q: 'Comprendiendo → ___', a: ['comprender'] },
            { q: 'Pudiendo → ___', a: ['poder'] },
            { q: 'Celebrando → ___', a: ['celebrar'] },
            { q: 'Escribiendo → ___', a: ['escribir'] },
            { q: 'Pronunciando → ___', a: ['pronunciar'] },
            { q: 'Sintiendo → ___', a: ['sentir'] },
            { q: 'Deseando → ___', a: ['desear'] },
            { q: 'Diciendo → ___', a: ['decir'] }
          ] },
        { type: 'table', title: { es: '3a. Observa. ESTAR + gerundio', ko: 'ESTAR + 현재분사', en: 'ESTAR + gerund' },
          head: ['', 'Estar', ''],
          rows: [ ['Yo', 'estoy', '+ gerundio'], ['Tú', 'estás', '+ gerundio'], ['Él, ella, usted', 'está', '+ gerundio'], ['Nosotros, as', 'estamos', '+ gerundio'], ['Vosotros, as', 'estáis', '+ gerundio'], ['Ellos, ellas, ustedes', 'están', '+ gerundio'] ] },
        { type: 'note', es: 'ESTAR + GERUNDIO: se utiliza para decir lo que una persona hace en el momento de hablar. Ejemplo: Ahora estoy comiendo.',
          ko: 'ESTAR + 현재분사는 말하는 순간에 하고 있는 일을 나타내요(~하고 있다). 예) Ahora estoy comiendo. 지금 나는 먹고 있어요.',
          en: 'ESTAR + gerund expresses what someone is doing at the moment of speaking. E.g. Ahora estoy comiendo. I’m eating now.' }
      ] },

    /* ---------------- D2 ---------------- */
    { id: 'd2', tag: 'D', name: 'Gramática',
      sub: { es: 'Presente de ESTAR + gerundio y los posesivos', ko: 'ESTAR + 현재분사와 소유사', en: 'ESTAR + gerund and possessives' },
      blocks: [
        { type: 'fill', id: 'd5', n: '3b',
          title: { es: 'Completa las frases con el verbo ESTAR y el gerundio.', ko: 'ESTAR 동사와 현재분사로 문장을 완성하세요.', en: 'Complete the sentences with ESTAR and the gerund.' },
          items: [
            { q: 'Cecilia ___ por Internet.', a: ['está navegando'], hint: 'navegar' },
            { q: 'Yo ___ la comida.', a: ['estoy haciendo'], hint: 'hacer' },
            { q: 'Neus ___ la lección.', a: ['está repitiendo'], hint: 'repetir' },
            { q: 'Marta y Lucía ___.', a: ['están hablando'], hint: 'hablar' },
            { q: '¿Tú ___ la radio?', a: ['estás escuchando'], hint: 'escuchar' },
            { q: 'Nosotras ya ___.', a: ['estamos desayunando'], hint: 'desayunar' },
            { q: '¿Vosotros ___ el documento?', a: ['estáis imprimiendo'], hint: 'imprimir' },
            { q: 'Nosotros ___ este cuadro.', a: ['estamos completando'], hint: 'completar' }
          ] },
        { type: 'fill', id: 'd6', n: '3c',
          title: { es: 'Completa con el Presente o con ESTAR + gerundio.', ko: '현재형 또는 ESTAR + 현재분사로 완성하세요.', en: 'Complete with the present tense or ESTAR + gerund.' },
          items: [
            { q: 'Las tiendas ___ a las 9 y media.', a: ['abren'], hint: 'abrir' },
            { q: 'Mira, ya ___ la panadería. Vamos a comprar pan.', a: ['están abriendo'], hint: 'abrir/ellos' },
            { q: '___ de Quito, pero ahora ___ en Cuzco.', a: ['Es', 'está viviendo'], hint: 'ser/ella · vivir/ella' },
            { q: '— ¿En qué ___? — ___ en un banco.', a: ['trabajas', 'Trabajo'], hint: 'trabajar/tú · trabajar/yo' },
            { q: '— ¿Qué ___ ahora? — Juan y yo ___.', a: ['estáis haciendo', 'estamos estudiando'], hint: 'hacer · estudiar' },
            { q: '— ¿Dónde ___ Juan? — ___.', a: ['está', 'Está trabajando'], hint: 'estar · trabajar' },
            { q: '— ¿Puedes venir un momento? — No puedo, ___ por teléfono.', a: ['estoy hablando'], hint: 'hablar' },
            { q: 'Normalmente ___ en portugués. Pero ahora ___ en español con sus alumnos.', a: ['hablan', 'están hablando'], hint: 'hablar/ellos' }
          ] },
        { type: 'note', ko: '🖼️ 4a 그림: 집 앞의 남자 — “Mi casa”(내 집), 개 두 마리와 여자 — “Mis perros”(내 개들), 아이들과 부부 — “Nuestros hijos”(우리 아이들), 집 앞의 부부 — “Nuestra casa”(우리 집).', en: '🖼️ 4a pictures: a man by his house — “Mi casa”; a woman with two dogs — “Mis perros”; a couple with children — “Nuestros hijos”; a couple by their house — “Nuestra casa”.' },
        { type: 'table', title: { es: '4a. Observa. Los posesivos', ko: '소유사', en: 'Possessives' },
          head: ['Una persona: una cosa', 'Una persona: varias cosas', 'Varias personas: una cosa', 'Varias personas: varias cosas'],
          rows: [ ['mi', 'mis', 'nuestro, a', 'nuestros, as'], ['tu', 'tus', 'vuestro, a', 'vuestros, as'], ['su', 'sus', 'su', 'sus'] ],
          note: { ko: '소유사는 소유물의 수(와 nuestro/vuestro는 성)에 맞춰요. su/sus는 él, ella, usted, ellos, ellas, ustedes 모두에 써요.', en: 'Possessives agree with the thing owned (number, and gender for nuestro/vuestro). Su/sus is used for él, ella, usted, ellos, ellas and ustedes.' } },
        { type: 'fill', id: 'd7', n: '4b',
          title: { es: 'Completa con el posesivo de la persona indicada.', ko: '주어진 사람에 맞는 소유사를 쓰세요. 예) (Nosotros) Es nuestro amigo.', en: 'Complete with the possessive of the person indicated. E.g. (Nosotros) Es nuestro amigo.' },
          items: [
            { q: '(Ellos) Es ___ país.', a: ['su'] },
            { q: '(Nosotras) Es ___ autobús.', a: ['nuestro'] },
            { q: '(Ustedes) Es ___ profesora.', a: ['su'] },
            { q: '(Yo) Son ___ naranjas.', a: ['mis'] },
            { q: '(Tú) ¿Es ___ número de teléfono?', a: ['tu'] },
            { q: '(Vosotros) Es ___ dirección.', a: ['vuestra'] },
            { q: '(Usted) ¿Son ___ compañeros?', a: ['sus'] },
            { q: '(Ella) Es ___ desayuno.', a: ['su'] }
          ] },
        { type: 'fill', id: 'd8', n: '4c',
          title: { es: 'Completa las frases como en el ejemplo: Daniela es mexicana. Su país es México.', ko: '예처럼 문장을 완성하세요: Daniela es mexicana. Su país es México.', en: 'Complete the sentences like the example: Daniela es mexicana. Su país es México.' },
          items: [
            { q: 'Roberto es brasileño. ___ país es ___.', a: ['Su', 'Brasil'] },
            { q: 'Tú y yo somos franceses. ___ país es ___.', a: ['Nuestro', 'Francia'] },
            { q: 'Eres italiano. ___ país es ___.', a: ['Tu', 'Italia'] },
            { q: 'Mis amigas son alemanas. ___ país es ___.', a: ['Su', 'Alemania'] },
            { q: 'Sois japoneses. ___ país es ___.', a: ['Vuestro', 'Japón'] },
            { q: 'Soy español. ___ país es ___.', a: ['Mi', 'España'] },
            { q: 'Somos ingleses. ___ país es ___.', a: ['Nuestro', 'Inglaterra'] },
            { q: 'Eva y Paloma son chilenas. ___ país es ___.', a: ['Su', 'Chile'] }
          ] }
      ] },

    /* ---------------- E ---------------- */
    { id: 'e', tag: 'E', name: 'Expresión oral',
      sub: { es: 'Hablar de horas, horarios y hábitos cotidianos', ko: '시간, 일정, 일상 습관에 대해 말하기', en: 'Talking about times, schedules and daily habits' },
      blocks: [
        { type: 'speak', n: '1',
          title: { es: 'Pregunta a todos tus compañeros cuántos años tienen y cuándo es su cumpleaños. Completa el cuadro.', ko: '반 친구들에게 나이와 생일을 묻고 표를 완성하세요.', en: 'Ask all your classmates how old they are and when their birthday is. Complete the table.' },
          prompt: { ko: '표: 이름(Nombre) · 나이(Edad) · 날(Día) · 달(Mes). 예) Miguel · 21 · 26 · julio', en: 'Table: Nombre · Edad · Día · Mes. E.g. Miguel · 21 · 26 · julio' },
          model: [ { who: 'A', es: '¿Cómo te llamas?' }, { who: 'B', es: 'Miguel.' }, { who: 'A', es: '¿Cuántos años tienes?' }, { who: 'B', es: 'Tengo veintiún años.' }, { who: 'A', es: '¿Cuándo es tu cumpleaños?' }, { who: 'B', es: 'Es el veintiséis de julio.' } ] },
        { type: 'open', id: 'e1', n: '1',
          title: { es: 'Completa el cuadro: Nombre, Edad, Día, Mes.', ko: '표를 완성하세요: 이름, 나이, 날, 달.', en: 'Complete the table: name, age, day, month.' },
          items: [
            { q: 'Compañero 1: nombre, edad, cumpleaños', model: 'Miguel, 21 años, 26 de julio.' },
            { q: 'Compañero 2: nombre, edad, cumpleaños', model: 'Laura, 17 años, 3 de enero.' }
          ] },
        { type: 'note', ko: '🗺️ 2번 그림: 세계 시간대 지도(-10 ~ +12). 예) 스페인 +1, 영국 0, 아르헨티나 -3, 멕시코 -6, 한국 +9.', en: '🗺️ Picture for 2: a world time-zone map (-10 to +12). E.g. Spain +1, UK 0, Argentina -3, Mexico -6, Korea +9.' },
        { type: 'speak', n: '2',
          title: { es: 'Observa el cuadro e indica las horas en los países.', ko: '시간대 지도를 보고 여러 나라의 시간을 말하세요.', en: 'Look at the map and say the time in different countries.' },
          prompt: { ko: '짝에게 “여기가 5시 반이면 …는 몇 시야?”라고 물어보세요.', en: 'Ask your partner: “If it’s 5:30 here, what time is it in…?”' },
          model: [ { who: 'A', es: 'Si aquí son las cinco y media, ¿qué hora es en Buenos Aires?' }, { who: 'B', es: 'En Buenos Aires son la una y media.' }, { who: 'A', es: '¿Y en Seúl?' }, { who: 'B', es: 'En Seúl es la una y media de la madrugada.' } ] },
        { type: 'speak', n: '3',
          title: { es: 'Pregunta a tu compañero su horario de trabajo o de clases.', ko: '짝에게 근무 시간이나 수업 시간을 물어보세요.', en: 'Ask your partner about their work or class schedule.' },
          prompt: { ko: '짝의 일정(시작·끝나는 시간)을 물어보세요.', en: 'Ask your partner when they start and finish.' },
          model: [ { who: 'A', es: 'Tú trabajas, ¿verdad?' }, { who: 'B', es: 'Sí.' }, { who: 'A', es: '¿Cuál es tu horario?' }, { who: 'B', es: 'De ocho y media de la mañana a una y media.' } ] },
        { type: 'choice', id: 'e2', n: '4',
          title: { es: 'Elige un nombre para cada persona y tu compañero lo adivina. ¿Qué está haciendo cada persona?', ko: '각 사람에게 이름을 정하고 짝이 맞히게 하세요(Enrique, Jorge, Samuel, Elena, Natalia, Daniel, Carlos). 각 사람은 무엇을 하고 있나요?', en: 'Choose a name for each person and your partner guesses it (Enrique, Jorge, Samuel, Elena, Natalia, Daniel, Carlos). What is each person doing?' },
          items: [
            { q: 'A 👓 (chico con gafas, delante del tablero de ajedrez) está…', opts: ['jugando al ajedrez', 'leyendo el periódico', 'escuchando música'], a: 0 },
            { q: 'B 👱‍♀️ y C 🧔 (de pie, se miran) están…', opts: ['durmiendo', 'hablando', 'comiendo'], a: 1 },
            { q: 'D 📱 (hombre con barba, con la mano en la oreja) está…', opts: ['hablando por teléfono', 'jugando al ajedrez', 'leyendo'], a: 0 },
            { q: 'E 👩‍🦰 (chica pelirroja que mueve una pieza) está…', opts: ['escuchando música', 'jugando al ajedrez', 'escribiendo'], a: 1 },
            { q: 'F 🎧 (chico con auriculares) está…', opts: ['escuchando música', 'hablando por teléfono', 'comiendo'], a: 0 },
            { q: 'G 📰 (chico rubio con un papel grande) está…', opts: ['bailando', 'jugando al ajedrez', 'leyendo el periódico'], a: 2 }
          ] },
        { type: 'speak', n: '4',
          title: { es: 'Elige un nombre para cada persona y tu compañero lo adivina.', ko: '이름을 정하고 짝이 맞히게 하세요.', en: 'Choose names and your partner guesses.' },
          prompt: { ko: '이름을 하나 골라 그 사람이 무엇을 하는지 말하면, 짝이 어떤 사람(A–G)인지 맞혀요.', en: 'Say what “your” person is doing; your partner guesses which one (A–G).' },
          model: [ { who: 'A', es: 'Daniel está escuchando música.' }, { who: 'B', es: '¿Es F?' }, { who: 'A', es: '¡Sí!' } ] },
        { type: 'speak', n: '5',
          title: { es: '¿Qué estoy haciendo? Juego de mímica: simula una acción y los demás adivinan.', ko: '나는 무엇을 하고 있을까? 몸짓 게임: 동작을 흉내 내면 다른 사람들이 맞혀요.', en: 'What am I doing? Mime game: act out an action and the others guess.' },
          prompt: { ko: '동작을 흉내 내고 “¿Qué estoy haciendo?”라고 물어보세요. 친구들은 “Estás + 현재분사”로 답해요.', en: 'Mime an action and ask “¿Qué estoy haciendo?”. The others answer with “Estás + gerund”.' },
          model: [ { who: 'A', es: '¿Qué estoy haciendo?' }, { who: 'B', es: 'Estás comiendo.' } ] }
      ] },

    /* ---------------- MUNDO HISPANO ---------------- */
    { id: 'mundo', tag: '', name: 'Mundo hispano',
      sub: { es: 'Fiestas populares de España', ko: '스페인의 대중 축제', en: 'Popular festivals in Spain' },
      blocks: [
        { type: 'reading', title: { es: 'Fiestas populares de España', ko: '스페인의 대중 축제', en: 'Popular festivals in Spain' },
          paras: [
            { es: '<b>Los Sanfermines</b>: Es la fiesta más conocida de España. Empieza el 7 de julio. Por la mañana, los jóvenes corren delante de los toros por las calles de Pamplona hasta la plaza.', ko: '산페르민 축제: 스페인에서 가장 유명한 축제예요. 7월 7일에 시작해요. 아침에 젊은이들이 팜플로나의 거리를 따라 투우장까지 소들 앞에서 달려요.', en: 'Sanfermines: the best-known festival in Spain. It starts on July 7th. In the morning, young people run in front of the bulls through the streets of Pamplona to the bullring.' },
            { es: '<b>La Feria de Abril</b>: Es una fiesta de mucha alegría y mucha música flamenca. La ciudad de Sevilla se llena de colores.', ko: '4월 축제: 기쁨과 플라멩코 음악이 가득한 축제예요. 세비야 시가 색으로 가득 차요.', en: 'April Fair: a festival full of joy and flamenco music. The city of Seville fills with colour.' },
            { es: '<b>Las procesiones de Semana Santa</b>: Son una unión de arte y religión. Las imágenes religiosas salen a las calles. Las procesiones de Sevilla y de Valladolid son las más famosas.', ko: '성주간 행렬: 예술과 종교의 결합이에요. 종교 성상들이 거리로 나와요. 세비야와 바야돌리드의 행렬이 가장 유명해요.', en: 'Holy Week processions: a union of art and religion. Religious statues are carried through the streets. The processions in Seville and Valladolid are the most famous.' },
            { es: '<b>Las Fallas</b>: En la noche del 19 de marzo en las calles y plazas de Valencia se queman grandes monumentos de cartón. Así saludan a la primavera, con fuego.', ko: '파야스: 3월 19일 밤, 발렌시아의 거리와 광장에서 판지로 만든 거대한 조형물을 태워요. 이렇게 불로 봄을 맞이해요.', en: 'Las Fallas: on the night of March 19th, huge cardboard monuments are burned in the streets and squares of Valencia. That’s how they welcome spring — with fire.' },
            { es: '<b>El Carnaval</b>: En febrero llega esta fiesta muy popular en varias ciudades del país, como en Santa Cruz de Tenerife y en Cádiz. Es la fiesta de los disfraces.', ko: '카니발: 2월에 열리는 축제로, 산타크루스데테네리페와 카디스 등 여러 도시에서 인기가 많아요. 변장(코스튬)의 축제예요.', en: 'Carnival: in February this very popular festival arrives in several cities, such as Santa Cruz de Tenerife and Cádiz. It’s the festival of costumes.' },
            { es: '<b>Nochevieja</b>: A las doce de la noche del 31 de diciembre los españoles toman doce uvas, una por cada campanada del reloj de la Puerta del Sol de Madrid, como signo de buena suerte para el Año Nuevo.', ko: '섣달그믐: 12월 31일 밤 12시, 스페인 사람들은 마드리드 푸에르타 델 솔 시계의 종이 울릴 때마다 포도 한 알씩, 모두 열두 알을 먹어요. 새해 행운을 비는 의미예요.', en: 'New Year’s Eve: at midnight on December 31st, Spaniards eat twelve grapes, one for each chime of the Puerta del Sol clock in Madrid, for good luck in the New Year.' },
            { es: '<b>El día de Reyes</b>: La noche del 5 de enero los tres Reyes Magos entran en las casas para traer a los niños los regalos de Navidad.', ko: '동방박사의 날: 1월 5일 밤, 동방박사 세 사람이 집에 들어와 아이들에게 크리스마스 선물을 가져다줘요.', en: 'Three Kings’ Day: on the night of January 5th, the Three Wise Men come into homes to bring the children their Christmas presents.' }
          ] },
        { type: 'match', id: 'm1', n: '1',
          title: { es: 'Lee el texto y relaciona con las imágenes.', ko: '글을 읽고 사진과 연결하세요.', en: 'Read the text and match it with the pictures.' },
          left: ['📷 1. Tres hombres vestidos de reyes', '📷 2. Personas con túnicas y velas por la noche', '📷 3. Una mujer con un disfraz verde de fantasía', '📷 4. Mujeres con trajes de flamenca de colores', '📷 5. Un toro corre detrás de unos jóvenes vestidos de blanco', '📷 6. Un edificio con reloj y luces por la noche', '📷 7. Una gran figura de cartón en una plaza'],
          right: ['Los Sanfermines', 'La Feria de Abril', 'Las procesiones de Semana Santa', 'Las Fallas', 'El Carnaval', 'Nochevieja', 'El día de Reyes'],
          a: [6, 2, 4, 1, 0, 5, 3] },
        { type: 'fill', id: 'm2', n: '2',
          title: { es: 'Completa el cuadro: Fiesta, Ciudad, Fecha. (Ejemplo: Los Sanfermines – Pamplona – 7 de julio – toros)', ko: '표를 완성하세요: 축제, 도시, 날짜. (예: 산페르민 – 팜플로나 – 7월 7일 – 소)', en: 'Complete the table: festival, city, date. (Example: Sanfermines – Pamplona – July 7th – bulls)' },
          items: [
            { q: 'La Feria de Abril → ciudad: ___ · mes: ___', a: ['Sevilla', 'abril'] },
            { q: 'Las procesiones de Semana Santa → ciudades: ___ y ___', a: ['Sevilla|Valladolid', 'Valladolid|Sevilla'] },
            { q: 'Las Fallas → ciudad: ___ · fecha: el ___ de marzo', a: ['Valencia', '19|diecinueve'] },
            { q: 'El Carnaval → ciudades: Santa Cruz de Tenerife y ___ · mes: ___', a: ['Cádiz', 'febrero'] },
            { q: 'Nochevieja → ciudad: ___ (Puerta del Sol) · fecha: el ___ de diciembre', a: ['Madrid', '31|treinta y uno'] },
            { q: 'El día de Reyes → fecha: la noche del ___ de enero', a: ['5|cinco'] }
          ] },
        { type: 'match', id: 'm3', n: '2',
          title: { es: 'Una palabra clave: relaciona cada fiesta con su palabra.', ko: '핵심 단어: 각 축제와 핵심 단어를 연결하세요.', en: 'A key word: match each festival with its word.' },
          left: ['Los Sanfermines', 'La Feria de Abril', 'Semana Santa', 'Las Fallas', 'El Carnaval', 'Nochevieja', 'El día de Reyes'],
          right: ['toros', 'flamenco', 'religión', 'fuego', 'disfraces', 'uvas', 'regalos'],
          a: [0, 1, 2, 3, 4, 5, 6] },
        { type: 'open', id: 'm4', n: '3',
          title: { es: '¿Cuáles son las fiestas más importantes de tu país?', ko: '너희 나라에서 가장 중요한 축제는 무엇인가요?', en: 'What are the most important festivals in your country?' },
          items: [
            { q: 'Las fiestas más importantes de mi país son…', model: 'En Corea las fiestas más importantes son Seollal (el Año Nuevo lunar) y Chuseok, en septiembre u octubre. La familia come junta y visita a los abuelos.' }
          ] }
      ] },

    /* ---------------- SÍNTESIS ---------------- */
    { id: 'sintesis', tag: '', name: 'Síntesis',
      sub: { es: 'La fiesta de cumpleaños', ko: '생일 파티', en: 'The birthday party' },
      blocks: [
        { type: 'note', ko: '🎉 그림: 생일 파티. 달력에 “SÁBADO 25 MAYO”, 벽시계는 10시 15분, 케이크에 “31” 초. A 안경 쓴 여자(음료를 들고 있음), B 노란 셔츠 남자, C 감자칩을 먹는 남자, D 소파에 앉아 있는 여자, E 소파에서 선물을 여는 남자, F 음료를 마시는 안경 쓴 남자, G 막 도착한 땋은 머리 여자, H 선물을 들고 온 남자, I 휴대전화로 통화하는 남자.',
          en: '🎉 Picture: a birthday party. Calendar: “SÁBADO 25 MAYO”; wall clock: 10:15; candles “31” on the cake. A woman with glasses holding a drink, B man in a yellow shirt, C man eating crisps, D woman sitting on the sofa, E man on the sofa opening presents, F man with glasses having a drink, G girl with plaits just arriving, H man arriving with a present, I man talking on his mobile.' },
        { type: 'choice', id: 's1', n: '1a',
          title: { es: '¿De quién es el cumpleaños? ¿Cuántos años cumple?', ko: '누구의 생일인가요? 몇 살이 되나요?', en: 'Whose birthday is it? How old is he turning?' },
          items: [
            { q: '¿De quién es el cumpleaños?', opts: ['De E, el chico que abre los regalos', 'De I, el chico que habla por teléfono', 'De G, la chica que llega'], a: 0 },
            { q: '¿Cuántos años cumple?', opts: ['Veinticinco', 'Treinta y uno', 'Trece'], a: 1 },
            { q: '¿Qué día es?', opts: ['Sábado veinticinco de mayo', 'Domingo treinta y uno de mayo', 'Sábado veinticinco de marzo'], a: 0 }
          ] },
        { type: 'fill', id: 's2', n: '1b',
          title: { es: '¿Qué hora es?', ko: '몇 시인가요?', en: 'What time is it?' },
          items: [ { q: '🕙 (10:15) Son las ___.', a: ['diez y cuarto|diez y quince'] } ] },
        { type: 'choice', id: 's3', n: '1c',
          title: { es: 'Di qué está haciendo cada persona.', ko: '각 사람이 무엇을 하고 있는지 말하세요.', en: 'Say what each person is doing.' },
          items: [
            { q: 'C (el chico del jersey verde)', opts: ['Está comiendo patatas fritas.', 'Está hablando por teléfono.', 'Está abriendo un regalo.'], a: 0 },
            { q: 'E (el chico del sofá)', opts: ['Está durmiendo.', 'Está abriendo los regalos.', 'Está bebiendo.'], a: 1 },
            { q: 'F (el chico de las gafas, de pie)', opts: ['Está bebiendo un refresco.', 'Está comiendo tarta.', 'Está bailando.'], a: 0 },
            { q: 'G y H', opts: ['Están llegando a la fiesta con un regalo.', 'Están jugando al ajedrez.', 'Están durmiendo.'], a: 0 },
            { q: 'I', opts: ['Está leyendo.', 'Está hablando por teléfono.', 'Está comiendo.'], a: 1 }
          ] },
        { type: 'choice', id: 's4', n: '1d',
          title: { es: '¿Quién dice estas frases?', ko: '누가 이 말을 할까요?', en: 'Who says these sentences?' },
          items: [
            { q: '¡Feliz cumpleaños!', opts: ['H (llega con un regalo)', 'I (habla por teléfono)', 'C (está comiendo)'], a: 0 },
            { q: 'Hola, bienvenido a la fiesta.', opts: ['E (el chico del cumpleaños)', 'H (el invitado que llega)', 'I (habla por teléfono)'], a: 0 },
            { q: 'Muchas gracias. ¿Qué es esto?', opts: ['A', 'E', 'G'], a: 1 },
            { q: '¿Quieres limonada?', opts: ['A (tiene un vaso, al lado de la jarra)', 'I (habla por teléfono)', 'D (está sentada)'], a: 0 },
            { q: 'Estoy en una fiesta de cumpleaños.', opts: ['I (habla por teléfono)', 'E (abre los regalos)', 'C (come patatas)'], a: 0 }
          ] },
        { type: 'note', ko: '🎫 선물은 기차표예요: 날짜 05JUN03 · 출발 VALENCIA N 14.15 · 도착 MADRID PTA. ATOCHA 17.50 · 열차 ALARIS · 좌석 1호차 03B · 가격 33,90 €.', en: '🎫 The present is a train ticket: date 05JUN03 · departs VALENCIA N 14.15 · arrives MADRID PTA. ATOCHA 17.50 · train ALARIS · coach 1, seat 03B · price €33.90.' },
        { type: 'fill', id: 's5', n: '2',
          title: { es: 'El regalo es un viaje. Indica la fecha, la hora y el lugar.', ko: '선물은 여행이에요. 날짜, 시간, 장소를 말하세요.', en: 'The present is a trip. Give the date, time and place.' },
          items: [
            { q: 'Fecha: el ___ de ___.', a: ['5|cinco', 'junio'] },
            { q: 'El tren sale de ___ a las dos y ___ de la tarde (14:15).', a: ['Valencia', 'cuarto'] },
            { q: 'Llega a ___ (Puerta de Atocha) a las seis menos ___ (17:50).', a: ['Madrid', 'diez'] }
          ] }
      ] },

    /* ---------------- YA CONOCES ---------------- */
    { id: 'yaconoces', tag: '', name: 'Ya conoces',
      sub: { es: 'Resumen de la unidad', ko: '단원 정리', en: 'Unit summary' },
      blocks: [
        { type: 'table', title: { es: '1a. Las expresiones para hablar del tiempo', ko: '시간·날짜에 대해 말하는 표현', en: 'Expressions to talk about time' },
          head: ['Pregunta', 'Respuesta'],
          rows: [ ['¿Qué hora es? / ¿Tienes hora?', 'Son las…'], ['¿A qué hora…?', 'A las…'], ['¿Qué día es…?', 'Hoy es…'] ] },
        { type: 'table', title: { es: '1b. Para informarte de datos personales', ko: '개인 정보를 물을 때', en: 'Asking for personal details' },
          head: ['Pregunta', 'Respuesta'],
          rows: [ ['¿Cuántos años tienes?', 'Tengo…'], ['¿Cuándo es tu cumpleaños?', 'Es el…'] ] },
        { type: 'vocab', title: { es: '1c. Y para felicitar', ko: '축하할 때', en: 'Congratulating' },
          items: [
            { es: '¡Felicidades!', ko: '축하해요!', en: 'Congratulations!', e: '🎉' },
            { es: '¡Muchas felicidades!', ko: '정말 축하해요!', en: 'Many congratulations!', e: '🥳' },
            { es: '¡Feliz cumpleaños!', ko: '생일 축하해요!', en: 'Happy birthday!', e: '🎂' }
          ] },
        { type: 'vocab', title: { es: '2a. Los números', ko: '숫자', en: 'Numbers' },
          items: [
            { es: 'veinte', ko: '20', en: '20' }, { es: 'veintiuno', ko: '21', en: '21' }, { es: 'veintidós', ko: '22', en: '22' },
            { es: 'treinta', ko: '30', en: '30' }, { es: 'treinta y uno', ko: '31', en: '31' }, { es: 'treinta y dos', ko: '32', en: '32' },
            { es: 'cuarenta', ko: '40', en: '40' }, { es: 'cincuenta', ko: '50', en: '50' }, { es: 'sesenta', ko: '60', en: '60' },
            { es: 'setenta', ko: '70', en: '70' }, { es: 'ochenta', ko: '80', en: '80' }, { es: 'noventa', ko: '90', en: '90' }, { es: 'cien', ko: '100', en: '100' }
          ] },
        { type: 'vocab', title: { es: '2b. Los meses del año', ko: '열두 달', en: 'Months of the year' },
          items: [
            { es: 'enero', ko: '1월', en: 'January' }, { es: 'febrero', ko: '2월', en: 'February' }, { es: 'marzo', ko: '3월', en: 'March' },
            { es: 'abril', ko: '4월', en: 'April' }, { es: 'mayo', ko: '5월', en: 'May' }, { es: 'junio', ko: '6월', en: 'June' },
            { es: 'julio', ko: '7월', en: 'July' }, { es: 'agosto', ko: '8월', en: 'August' }, { es: 'septiembre', ko: '9월', en: 'September' },
            { es: 'octubre', ko: '10월', en: 'October' }, { es: 'noviembre', ko: '11월', en: 'November' }, { es: 'diciembre', ko: '12월', en: 'December' }
          ] },
        { type: 'vocab', title: { es: '2c. Los días de la semana', ko: '요일', en: 'Days of the week' },
          items: [
            { es: 'lunes', ko: '월요일', en: 'Monday' }, { es: 'martes', ko: '화요일', en: 'Tuesday' }, { es: 'miércoles', ko: '수요일', en: 'Wednesday' },
            { es: 'jueves', ko: '목요일', en: 'Thursday' }, { es: 'viernes', ko: '금요일', en: 'Friday' }, { es: 'sábado', ko: '토요일', en: 'Saturday' }, { es: 'domingo', ko: '일요일', en: 'Sunday' }
          ] },
        { type: 'table', title: { es: '3a. Presentes irregulares (E > I)', ko: '불규칙 현재형 (E→I)', en: 'Irregular presents (E > I)' },
          head: ['', 'Pedir'],
          rows: [ ['Yo', 'pido'], ['Tú', 'pides'], ['Él, ella, usted', 'pide'], ['Nosotros, as', 'pedimos'], ['Vosotros, as', 'pedís'], ['Ellos, ellas, ustedes', 'piden'] ] },
        { type: 'table', title: { es: '3b. La formación del gerundio', ko: '현재분사 만들기', en: 'Forming the gerund' },
          head: ['Verbos -AR (+ ANDO)', 'Verbos -ER o -IR (+ IENDO)'],
          rows: [ ['hablar: hablando', 'beber: bebiendo · vivir: viviendo'], ['Irregulares:', 'decir: diciendo · dormir: durmiendo · pedir: pidiendo · poder: pudiendo · sentir: sintiendo · ser: siendo'] ] },
        { type: 'table', title: { es: '3c. Para decir lo que una persona hace en el momento de hablar', ko: '말하는 순간 하고 있는 일 말하기', en: 'Saying what someone is doing right now' },
          head: ['', 'Estar + gerundio'],
          rows: [ ['Yo', 'estoy'], ['Tú', 'estás'], ['Él, ella, usted', 'está'], ['Nosotros, as', 'estamos'], ['Vosotros, as', 'estáis'], ['Ellos, ellas, ustedes', 'están'] ] },
        { type: 'table', title: { es: '3d. Y los posesivos', ko: '소유사', en: 'Possessives' },
          head: ['Una persona: una cosa', 'Una persona: varias cosas', 'Varias personas: una cosa', 'Varias personas: varias cosas'],
          rows: [ ['mi', 'mis', 'nuestro, a', 'nuestros, as'], ['tu', 'tus', 'vuestro, a', 'vuestros, as'], ['su', 'sus', 'su', 'sus'] ] }
      ] }
  ]
});

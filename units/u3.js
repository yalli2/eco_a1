ECO.unit({
  num: 3,
  title: '¿Dónde vives?',
  emoji: '🏠📍',
  pages: '26–35',
  topics: { ko: '주소 · 전화번호 · 위치 표현 · 규칙/불규칙 동사 현재형', en: 'Addresses · phone numbers · location · present tense' },
  goals: [
    { es: 'Preguntar y decir la dirección, el teléfono y el correo electrónico', ko: '주소, 전화번호, 이메일 묻고 말하기', en: 'Ask for and give your address, phone number and e-mail' },
    { es: 'Ubicar', ko: '위치 말하기', en: 'Say where things are' },
    { es: 'Números y direcciones', ko: '숫자와 주소', en: 'Numbers and addresses' },
    { es: 'Presente de verbos regulares. Uso de TÚ, USTED, VOS', ko: '규칙 동사 현재형, TÚ·USTED·VOS의 사용', en: 'Present of regular verbs. Use of TÚ, USTED, VOS' },
    { es: 'Presente de verbos irregulares', ko: '불규칙 동사 현재형', en: 'Present of irregular verbs' },
    { es: 'Dar datos personales e indicar una dirección', ko: '개인 정보 말하기와 길·위치 안내하기', en: 'Give personal details and give directions' },
    { es: 'Establecimientos públicos', ko: '스페인의 상점과 공공 시설', en: 'Public establishments' }
  ],
  people: { 'Leticia': 'f', 'Marcelo': 'm', 'Lucía': 'f', 'Antonio': 'm', 'Elena': 'f' },
  sections: [
    /* ───────────── PORTADA ───────────── */
    { id: 'portada', tag: '', name: 'Portada',
      sub: { es: '¿Dónde vives?', ko: '어디에 사니?', en: 'Where do you live?' },
      blocks: [
        { type: 'note', es: 'Imágenes: A ☕ la Cafetería Suiza (desayuno hasta las 11: café con bollo o chocolate con churros y zumo, 3 €) · B 📞 «Contestador de Antonio y Lucía, número 612 32 50 14…» · C ☎️ «Este es el número 908 42 05 05. Puede dejar un mensaje después de la señal.» · D 🗺️ un plano en el ordenador (Calle Delicias, Paseo de la Estación, Plaza de la Villa).',
          ko: '그림 설명: A 카페 수이사, B 안토니오와 루시아의 자동응답기, C 마르셀로의 자동응답기, D 컴퓨터 속 지도.',
          en: 'Pictures: A Café Suiza, B Antonio and Lucía’s answering machine, C Marcelo’s answering machine, D a map on the computer.' },
        { type: 'dialog', title: { es: 'Mensajes en el contestador', ko: '자동응답기 메시지', en: 'Answering-machine messages' },
          lines: [
            { who: 'Marcelo', es: 'Este es el número nueve, cero, ocho, cuatro, dos, cero, cinco, cinco. Puede dejar un mensaje después de la señal. Gracias.', ko: '908 42 05 05번입니다. 신호음이 울린 후 메시지를 남겨 주세요. 감사합니다.', en: 'This is 908 42 05 05. You can leave a message after the tone. Thank you.' },
            { who: 'Leticia', es: 'Hola Marcelo, soy Leticia. Oye, mañana desayunamos en un sitio nuevo. En la cafetería Suiza. Está en la calle Delicias, en el número cinco, al lado de una oficina de correos. Te envío un plano de la zona por correo electrónico. Llamas tú a Lucía y Antonio, ¿vale? Hasta luego.', ko: '안녕 마르셀로, 나 레티시아야. 내일 새로운 곳에서 아침 먹자. 카페 수이사야. 델리시아스 거리 5번지, 우체국 옆이야. 이메일로 그 지역 지도를 보낼게. 루시아와 안토니오에게는 네가 전화해 줘, 알았지? 이따 봐.', en: 'Hi Marcelo, it’s Leticia. Tomorrow we’re having breakfast somewhere new: Café Suiza. It’s at 5 Delicias Street, next to a post office. I’ll e-mail you a map of the area. You call Lucía and Antonio, OK? See you.' },
            { who: 'Lucía', es: 'Contestador de Antonio y Lucía, número seis, uno, dos, tres, dos, cinco, cero, uno, cuatro. Si quieres, deja un mensaje y te llamamos. Adiós.', ko: '안토니오와 루시아의 자동응답기, 612 32 50 14번입니다. 원하면 메시지를 남겨, 우리가 전화할게. 안녕.', en: 'Antonio and Lucía’s answering machine, 612 32 50 14. Leave a message if you like and we’ll call you back. Bye.' },
            { who: 'Marcelo', es: 'Hola, chicos, soy Marcelo. El desayuno con Leticia es en la cafetería Suiza. La dirección es calle Delicias cinco, enfrente de la estación de metro de Palos. La cafetería está a la derecha del Hotel Ginebra. Hasta mañana.', ko: '안녕 얘들아, 나 마르셀로야. 레티시아와의 아침 식사는 카페 수이사에서 해. 주소는 델리시아스 거리 5번지, 팔로스 지하철역 맞은편이야. 카페는 호텔 히네브라 오른쪽에 있어. 내일 봐.', en: 'Hi guys, it’s Marcelo. Breakfast with Leticia is at Café Suiza. The address is 5 Delicias Street, opposite Palos metro station. The café is to the right of the Hotel Ginebra. See you tomorrow.' }
          ] },
        { type: 'match', id: 'p1', n: '1', listen: true,
          title: { es: 'Escucha y numera las imágenes.', ko: '듣고 그림에 번호를 매기세요.', en: 'Listen and number the pictures.' },
          left: ['A ☕ La Cafetería Suiza', 'B 📞 El contestador de Antonio y Lucía', 'C ☎️ El contestador de Marcelo (908 42 05 05)', 'D 🗺️ El plano en el ordenador'],
          right: ['1', '2', '3', '4'], a: [3, 2, 0, 1] },
        { type: 'choice', id: 'p2', n: '2', listen: true,
          title: { es: 'Escucha otra vez y marca en el plano dónde está la cafetería.', ko: '다시 듣고 지도에서 카페가 어디 있는지 표시하세요.', en: 'Listen again and mark on the map where the café is.' },
          items: [
            { say: 'La dirección es calle Delicias cinco, enfrente de la estación de metro de Palos. La cafetería está a la derecha del Hotel Ginebra, al lado de una oficina de correos.',
              q: '🗺️ Plano: A (calle Delicias, entre el Hotel Ginebra y la Oficina de Correos, enfrente de la Estación) · B (Plaza de la Villa) · C (al lado de la Estación) · D (Paseo de la Estación). ¿Dónde está la cafetería?',
              opts: ['A', 'B', 'C', 'D'], a: 0 }
          ] }
      ] },

    /* ───────────── A ───────────── */
    { id: 'a', tag: 'A', name: 'Comprensión y práctica',
      sub: { es: 'Número de teléfono y direcciones', ko: '전화번호와 주소', en: 'Phone numbers and addresses' },
      blocks: [
        { type: 'vocab', title: { es: 'Los números del 0 al 9', ko: '0부터 9까지의 숫자', en: 'Numbers 0 to 9' },
          items: [
            { es: 'cero', ko: '0', en: '0', e: '0️⃣' }, { es: 'uno', ko: '1', en: '1', e: '1️⃣' },
            { es: 'dos', ko: '2', en: '2', e: '2️⃣' }, { es: 'tres', ko: '3', en: '3', e: '3️⃣' },
            { es: 'cuatro', ko: '4', en: '4', e: '4️⃣' }, { es: 'cinco', ko: '5', en: '5', e: '5️⃣' },
            { es: 'seis', ko: '6', en: '6', e: '6️⃣' }, { es: 'siete', ko: '7', en: '7', e: '7️⃣' },
            { es: 'ocho', ko: '8', en: '8', e: '8️⃣' }, { es: 'nueve', ko: '9', en: '9', e: '9️⃣' }
          ] },
        { type: 'fill', id: 'a1', n: '1 (1)', listen: true,
          title: { es: 'Escucha y completa los diálogos. ① El número del contestador.', ko: '듣고 대화를 완성하세요. ① 자동응답기 번호', en: 'Listen and complete the dialogues. ① The answering-machine number.' },
          items: [
            { q: '📞 «Este es el 9 - 0 - 8 - ___.»', a: ['4-2-0-5-0-5|42 05 05|420505|4 2 0 5 0 5|42-05-05'], hint: 'nueve, cero, ocho, cuatro, dos, cero, cinco, cinco' }
          ] },
        { type: 'fill', id: 'a2', n: '1 (2)', listen: true,
          title: { es: 'Escucha y completa los diálogos. ② Completa con las palabras del cuadro.', ko: '듣고 대화를 완성하세요. ② 상자 안의 단어로 채우세요.', en: 'Listen and complete the dialogues. ② Use the words in the box.' },
          bank: ['desayunamos', 'comemos', 'merendamos', 'cenamos', 'avenida', 'calle', 'paseo', 'plaza', 'cuatro', 'cinco', 'ocho', 'a la derecha', 'a la izquierda', 'al lado', 'enfrente', 'fax', 'carta', 'correo electrónico'],
          items: [
            { q: 'Oye, mañana ___ en la cafetería Suiza.', a: ['desayunamos'] },
            { q: '¿Cuál es la dirección? — Está en la ___ Delicias.', a: ['calle'] },
            { q: '¿En qué número? — En el número ___.', a: ['cinco|5'] },
            { q: '¿Dónde está? — Está ___ de una oficina de correos y ___ del Hotel Ginebra.', a: ['al lado', 'a la derecha'] },
            { q: '¿Me envías un plano? — Sí, te envío un plano por ___.', a: ['correo electrónico'] }
          ] },
        { type: 'vocab', title: { es: 'Situar en el espacio', ko: '위치 표현', en: 'Saying where things are' },
          items: [
            { es: 'cerca de / lejos de', ko: '~에서 가까이 / 멀리', en: 'near / far from', e: '↔️' },
            { es: 'al lado de', ko: '~의 옆에', en: 'next to', e: '⬅️' },
            { es: 'a la derecha de / a la izquierda de', ko: '~의 오른쪽에 / 왼쪽에', en: 'to the right of / to the left of', e: '➡️' },
            { es: 'enfrente de', ko: '~의 맞은편에', en: 'opposite', e: '🔁' },
            { es: 'delante de / detrás de', ko: '~의 앞에 / 뒤에', en: 'in front of / behind', e: '⬆️' },
            { es: 'entre', ko: '~ 사이에', en: 'between', e: '↕️' }
          ] },
        { type: 'choice', id: 'a3', n: '2', listen: true,
          title: { es: 'Observa el cuadro, escucha y escribe las respuestas.', ko: '표를 보고, 듣고, 대답을 고르세요.', en: 'Look at the box, listen and choose the answers.' },
          items: [
            { say: '¿Dónde está la oficina de correos? Está entre el hotel y el estanco.', q: '¿Dónde está la oficina de correos? 🏨📮🚬', opts: ['Está entre el hotel y el estanco.', 'Está detrás de la cafetería.', 'Está delante del estanco.', 'Está a la derecha del hospital.'], a: 0 },
            { say: '¿Dónde está la estación del metro? Detrás de la cafetería.', q: '¿Dónde está la estación del metro? 🚇☕', opts: ['Entre el hotel y el estanco.', 'Detrás de la cafetería.', 'A la izquierda de la oficina de correos.', 'Delante del estanco.'], a: 1 },
            { say: '¿Dónde están los niños? Mira, están jugando a la derecha del hospital.', q: '¿Dónde están los niños? 🏥⚽', opts: ['A la izquierda del hospital.', 'Detrás del hospital.', 'A la derecha del hospital.', 'Delante de la cafetería.'], a: 2 },
            { say: '¿Dónde está la cafetería? Allí, a la izquierda de la oficina de correos.', q: '¿Dónde está la cafetería? ☕📮', opts: ['A la derecha de la oficina de correos.', 'A la izquierda de la oficina de correos.', 'Enfrente de la oficina de correos.', 'Detrás de la oficina de correos.'], a: 1 },
            { say: '¿Dónde está el buzón? Delante del estanco.', q: '¿Dónde está el buzón? 📫🚬', opts: ['Detrás del estanco.', 'Delante del estanco.', 'Lejos del estanco.', 'Entre el hotel y el estanco.'], a: 1 }
          ] },
        { type: 'match', id: 'a4', n: '3', listen: true,
          title: { es: 'Escucha y ordena el diálogo.', ko: '듣고 대화의 순서를 맞추세요.', en: 'Listen and put the dialogue in order.' },
          left: ['1.º', '2.º', '3.º', '4.º', '5.º', '6.º', '7.º', '8.º', '9.º', '10.º'],
          right: ['a. En el 5.', 'b. Hola, ¿dónde vives?', 'c. Es el 907 11 00 14.', 'd. ¿En qué número?', 'e. ¿Cuál es tu correo electrónico?', 'f. Vivo en la calle Goya.', 'g. Mi correo es marcelo@inter.es', 'h. Está cerca de la estación.', 'i. ¿Dónde está esa calle?', 'j. ¿Cuál es tu número de teléfono?'],
          a: [1, 5, 3, 0, 8, 7, 9, 2, 4, 6] },
        { type: 'dialog', title: { es: 'El diálogo ordenado', ko: '순서대로 맞춘 대화', en: 'The dialogue in order' },
          lines: [
            { who: 'Leticia', es: 'Hola, ¿dónde vives?', ko: '안녕, 어디 살아?', en: 'Hi, where do you live?' },
            { who: 'Marcelo', es: 'Vivo en la calle Goya.', ko: '고야 거리에 살아.', en: 'I live on Goya Street.' },
            { who: 'Leticia', es: '¿En qué número?', ko: '몇 번지?', en: 'What number?' },
            { who: 'Marcelo', es: 'En el 5.', ko: '5번지.', en: 'Number 5.' },
            { who: 'Leticia', es: '¿Dónde está esa calle?', ko: '그 거리는 어디 있어?', en: 'Where is that street?' },
            { who: 'Marcelo', es: 'Está cerca de la estación.', ko: '역 근처에 있어.', en: 'It’s near the station.' },
            { who: 'Leticia', es: '¿Cuál es tu número de teléfono?', ko: '전화번호가 뭐야?', en: 'What’s your phone number?' },
            { who: 'Marcelo', es: 'Es el 907 11 00 14.', ko: '907 11 00 14야.', en: 'It’s 907 11 00 14.' },
            { who: 'Leticia', es: '¿Cuál es tu correo electrónico?', ko: '이메일 주소는 뭐야?', en: 'What’s your e-mail?' },
            { who: 'Marcelo', es: 'Mi correo es marcelo@inter.es', ko: '내 이메일은 marcelo@inter.es야.', en: 'My e-mail is marcelo@inter.es' }
          ] },
        { type: 'open', id: 'a5', n: '4',
          title: { es: 'Y tú, ¿dónde vives? Di tu dirección y dónde está tu casa.', ko: '너는 어디 사니? 주소와 집이 어디 있는지 말해 보세요.', en: 'And you, where do you live? Say your address and where your house is.' },
          items: [
            { q: '¿Dónde vives?', model: 'Yo vivo en la calle Mayor, número 12.' },
            { q: '¿Dónde está tu casa?', model: 'Mi casa está cerca de la estación, al lado de una farmacia.' }
          ] }
      ] },

    /* ───────────── B ───────────── */
    { id: 'b', tag: 'B', name: 'Pronunciación y ortografía',
      sub: { es: 'La ce (c), la zeta (z), la cu (q) y la entonación de la frase', ko: 'c, z, q의 발음과 문장의 억양', en: 'The letters c, z, q and sentence intonation' },
      blocks: [
        { type: 'table', title: { es: 'La c, la z y la qu', ko: 'c, z, qu의 발음', en: 'c, z and qu' },
          head: ['', 'Sonido', 'Ejemplos'],
          rows: [
            ['C + E, I', '[θ]', '1. Gracias · 2. Marcelo · 3. Cero'],
            ['C + A, O, U', '[k]', '4. Cafetería · 5. Correos · 6. Cuatro'],
            ['Z (siempre)', '[θ]', '7. Suiza · 8. Zona · 9. Diez'],
            ['QU + E, I', '[k]', '10. Queda · 11. Que · 12. Quince']
          ],
          note: { ko: 'c는 e, i 앞에서 [θ](영어 think의 th), a, o, u 앞에서 [k]. z는 항상 [θ]. qu는 e, i 앞에서 [k] (u는 소리 나지 않음).', en: 'c = [θ] (like “th” in think) before e, i and [k] before a, o, u. z is always [θ]. qu = [k] before e, i (the u is silent).' } },
        { type: 'dictation', id: 'b1', n: '1a', listen: true,
          title: { es: 'Escucha y repite la pronunciación de las palabras siguientes.', ko: '다음 단어의 발음을 듣고 따라 하세요 (그리고 써 보세요).', en: 'Listen and repeat the words (then write them).' },
          items: [ { say: 'Gracias' }, { say: 'Marcelo' }, { say: 'Cero' }, { say: 'Cafetería' }, { say: 'Correos' }, { say: 'Cuatro' }, { say: 'Suiza' }, { say: 'Zona' }, { say: 'Diez' }, { say: 'Queda' }, { say: 'Que' }, { say: 'Quince' } ] },
        { type: 'fill', id: 'b2', n: '1b', listen: true,
          title: { es: 'Escucha estas palabras y escribe las letras que faltan (c, z, qu).', ko: '단어를 듣고 빠진 글자(c, z, qu)를 쓰세요.', en: 'Listen and write the missing letters (c, z, qu).' },
          items: [
            { q: 'a. Estan___o', a: ['c'] },
            { q: 'b. ___afetería', a: ['C|c'] },
            { q: 'c. Pla___a', a: ['z'] },
            { q: 'd. Bu___ón', a: ['z'] },
            { q: 'e. ___alle', a: ['C|c'] },
            { q: 'f. ___orreos', a: ['C|c'] },
            { q: 'g. Par___e', a: ['qu'] },
            { q: 'h. ___iudad', a: ['C|c'] },
            { q: 'i. Supermer___ado', a: ['c'] },
            { q: 'j. ___ine', a: ['C|c'] }
          ] },
        { type: 'choice', id: 'b3', n: '1c', listen: true,
          title: { es: 'Escucha y ordena según el orden en que se pronuncia.', ko: '듣고 어느 단어가 발음되는지 고르세요.', en: 'Listen and choose the word you hear.' },
          items: [
            { say: 'Cinco', opts: ['Cinco', 'Bingo'], a: 0 },
            { say: 'Bingo', opts: ['Cinco', 'Bingo'], a: 1 },
            { say: 'Placa', opts: ['Plaza', 'Placa'], a: 1 },
            { say: 'Plaza', opts: ['Plaza', 'Placa'], a: 0 },
            { say: 'Zona', opts: ['Zona', 'Lona'], a: 0 },
            { say: 'Lona', opts: ['Zona', 'Lona'], a: 1 }
          ] },
        { type: 'note', es: 'En algunas zonas de España y en toda América Latina, el sonido [θ] no existe. Por eso, <b>za, ce, ci, zo</b> y <b>zu</b> se pronuncian siempre [s]. A esto se le llama <b>seseo</b>.',
          ko: '스페인 일부 지역과 라틴아메리카 전역에는 [θ] 소리가 없어서 za, ce, ci, zo, zu를 항상 [s]로 발음합니다. 이것을 세세오(seseo)라고 합니다.',
          en: 'In some parts of Spain and all of Latin America the [θ] sound does not exist, so za, ce, ci, zo, zu are always pronounced [s]. This is called seseo.' },
        { type: 'choice', id: 'b4', n: '2', listen: true,
          title: { es: 'Escucha estas palabras pronunciadas por un hablante que «sesea».', ko: '세세오(seseo)로 발음하는 사람의 단어를 듣고, 어떻게 발음되는지 고르세요.', en: 'Listen to these words said by a speaker with seseo and choose how they sound.' },
          items: [
            { say: 'Gracias', q: 'a. Gracias', opts: ['[grasias]', '[graθias]'], a: 0 },
            { say: 'Marcelo', q: 'b. Marcelo', opts: ['[marθelo]', '[marselo]'], a: 1 },
            { say: 'Cero', q: 'c. Cero', opts: ['[sero]', '[θero]'], a: 0 },
            { say: 'Suiza', q: 'd. Suiza', opts: ['[suiθa]', '[suisa]'], a: 1 },
            { say: 'Zona', q: 'e. Zona', opts: ['[sona]', '[θona]'], a: 0 },
            { say: 'Diez', q: 'f. Diez', opts: ['[dieθ]', '[dies]'], a: 1 }
          ] },
        { type: 'speak', n: '3a', title: { es: 'Escucha y repite estas frases con entonación diferente.', ko: '서로 다른 억양의 문장을 듣고 따라 하세요.', en: 'Listen and repeat these sentences with different intonation.' },
          prompt: { ko: '감탄문, 의문문, 평서문의 억양 차이에 주의하며 따라 하세요.', en: 'Repeat, paying attention to exclamations, questions and statements.' },
          model: [ { who: 'A', es: '¡Hola!' }, { who: 'B', es: '¿Cómo te llamas?' }, { who: 'A', es: 'Yo soy Miguel.' }, { who: 'B', es: '¡Encantada!' }, { who: 'A', es: '¿Dónde vives?' } ] },
        { type: 'note', es: 'La frase <b>afirmativa</b> termina hacia abajo ↘. Ejemplo: Está en la calle Delicias.',
          ko: '평서문은 끝을 내려서(↘) 말합니다.', en: 'Statements end with falling intonation ↘.' },
        { type: 'dictation', id: 'b5', n: '3b', listen: true,
          title: { es: 'Escucha y repite. (La frase afirmativa termina hacia abajo.)', ko: '듣고 따라 한 뒤 써 보세요. (평서문 ↘)', en: 'Listen, repeat and write. (Statements ↘)' },
          items: [ { say: 'Está al lado de la oficina de correos.' }, { say: 'Vivo en la calle Goya.' }, { say: 'Me llamo Manuel.' }, { say: 'Te envío un plano por fax.' } ] },
        { type: 'note', es: 'La frase <b>interrogativa</b> termina hacia abajo ↘ con interrogativo inicial. Ejemplo: ¿Cuál es la dirección?',
          ko: '의문사(¿Cuál?, ¿Dónde? 등)로 시작하는 의문문은 끝을 내립니다(↘).', en: 'Questions that start with a question word end with falling intonation ↘.' },
        { type: 'dictation', id: 'b6', n: '3c', listen: true,
          title: { es: 'Escucha y repite. (Interrogativa con interrogativo inicial ↘)', ko: '듣고 따라 한 뒤 써 보세요. (의문사 의문문 ↘)', en: 'Listen, repeat and write. (Wh-questions ↘)' },
          items: [ { say: '¿Cómo te llamas?' }, { say: '¿De dónde eres?' }, { say: '¿Dónde vives?' }, { say: '¿Dónde está la cafetería?' } ] },
        { type: 'note', es: 'La frase <b>interrogativa</b> termina hacia arriba ↗ sin interrogativo inicial. Ejemplo: ¿Me envías un plano?',
          ko: '의문사 없이 예/아니요로 답하는 의문문은 끝을 올립니다(↗).', en: 'Yes/no questions (no question word) end with rising intonation ↗.' },
        { type: 'dictation', id: 'b7', n: '3d', listen: true,
          title: { es: 'Escucha y repite. (Interrogativa sin interrogativo inicial ↗)', ko: '듣고 따라 한 뒤 써 보세요. (예/아니요 의문문 ↗)', en: 'Listen, repeat and write. (Yes/no questions ↗)' },
          items: [ { say: '¿Está cerca?' }, { say: '¿Hablas español?' }, { say: '¿Me entiendes?' }, { say: '¿Eres uruguaya?' } ] }
      ] },

    /* ───────────── C ───────────── */
    { id: 'c', tag: 'C', name: 'Léxico',
      sub: { es: 'Números y direcciones', ko: '숫자와 주소', en: 'Numbers and addresses' },
      blocks: [
        { type: 'table', title: { es: '1a. Observa. Los números del 0 al 19', ko: '0부터 19까지의 숫자', en: 'Numbers 0–19' },
          head: ['', '', '', ''],
          rows: [
            ['0 cero', '1 uno', '2 dos', '3 tres'],
            ['4 cuatro', '5 cinco', '6 seis', '7 siete'],
            ['8 ocho', '9 nueve', '10 diez', '11 once'],
            ['12 doce', '13 trece', '14 catorce', '15 quince'],
            ['16 dieciséis', '17 diecisiete', '18 dieciocho', '19 diecinueve']
          ] },
        { type: 'fill', id: 'c1', n: '1b',
          title: { es: 'Escribe en este cartón de bingo números del 0 al 19.', ko: '빙고 카드에 0~19의 숫자를 글자로 써 보세요.', en: 'Write numbers 0–19 (in words) on this bingo card.' },
          items: [
            { q: '3 → ___', a: ['tres'] }, { q: '7 → ___', a: ['siete'] }, { q: '10 → ___', a: ['diez'] },
            { q: '11 → ___', a: ['once'] }, { q: '12 → ___', a: ['doce'] }, { q: '13 → ___', a: ['trece'] },
            { q: '14 → ___', a: ['catorce'] }, { q: '15 → ___', a: ['quince'] }, { q: '16 → ___', a: ['dieciséis'] },
            { q: '17 → ___', a: ['diecisiete'] }, { q: '18 → ___', a: ['dieciocho'] }, { q: '19 → ___', a: ['diecinueve'] }
          ] },
        { type: 'choice', id: 'c2', n: '1b', listen: true,
          title: { es: 'Ahora escucha y tacha los números que oyes. Si completas el cartón, di ¡Bingo!', ko: '이제 듣고 들리는 숫자를 지우세요. 카드를 다 채우면 “빙고!”라고 외치세요.', en: 'Now listen and cross out the numbers you hear. If you complete the card, say “Bingo!”' },
          items: [
            { say: 'catorce', opts: ['4', '14', '40'], a: 1 },
            { say: 'cinco', opts: ['5', '15', '50'], a: 0 },
            { say: 'doce', opts: ['2', '12', '10'], a: 1 },
            { say: 'diecisiete', opts: ['7', '17', '16'], a: 1 },
            { say: 'trece', opts: ['3', '13', '30'], a: 1 },
            { say: 'seis', opts: ['6', '7', '16'], a: 0 },
            { say: 'quince', opts: ['5', '15', '50'], a: 1 },
            { say: 'once', opts: ['1', '11', '10'], a: 1 },
            { say: 'dieciocho', opts: ['8', '18', '80'], a: 1 },
            { say: 'nueve', opts: ['9', '19', '90'], a: 0 }
          ] },
        { type: 'reading', title: { es: 'Los sobres', ko: '봉투들', en: 'The envelopes' },
          paras: [
            { es: '✉️ Estanco Pérez · C/ Goya, 13 · 15009 LA CORUÑA', ko: '페레스 담배 가게 · 고야 거리 13번지 · 라코루냐', en: 'Pérez tobacconist · 13 Goya St. · La Coruña' },
            { es: '✉️ D. Mario López García · Gta. de Quevedo, 9 · 28008 MADRID', ko: '마리오 로페스 가르시아 씨 · 케베도 로터리 9번지 · 마드리드', en: 'Mr. Mario López García · 9 Quevedo Roundabout · Madrid' },
            { es: '✉️ Carlos Fernández López · C/ Hipólito Irigoyen, 1956 · 1086 BUENOS AIRES', ko: '카를로스 페르난데스 로페스 · 이폴리토 이리고옌 거리 1956번지 · 부에노스아이레스', en: 'Carlos Fernández López · 1956 Hipólito Irigoyen St. · Buenos Aires' },
            { es: '✉️ Farmacia La Salud · Pza. Urquinaona, 1 · 08001 BARCELONA', ko: '라 살루드 약국 · 우르키나오나 광장 1번지 · 바르셀로나', en: 'La Salud pharmacy · 1 Urquinaona Square · Barcelona' }
          ] },
        { type: 'choice', id: 'c3', n: '2',
          title: { es: 'Lee estos sobres y marca las direcciones.', ko: '봉투를 읽고 주소를 확인하세요.', en: 'Read these envelopes and identify the addresses.' },
          items: [
            { q: 'Estanco Pérez está en…', opts: ['la calle Goya, número 13, en La Coruña', 'la plaza Goya, número 3, en Madrid', 'la glorieta de Goya, número 13, en Barcelona'], a: 0 },
            { q: 'D. Mario López García vive en…', opts: ['la calle de Quevedo, 9', 'la glorieta de Quevedo, 9', 'el paseo de Quevedo, 19'], a: 1 },
            { q: 'Carlos Fernández López vive en…', opts: ['la avenida Hipólito Irigoyen, en Madrid', 'la calle Hipólito Irigoyen, 1956, en Buenos Aires', 'la plaza Hipólito Irigoyen, 1086, en Buenos Aires'], a: 1 },
            { q: 'La Farmacia La Salud está en…', opts: ['la plaza Urquinaona, 1, en Barcelona', 'la calle Urquinaona, 1, en Barcelona', 'la plaza Urquinaona, 8, en La Coruña'], a: 0 }
          ] },
        { type: 'match', id: 'c4', n: '3a',
          title: { es: 'Relaciona.', ko: '약어와 단어를 연결하세요.', en: 'Match the abbreviations.' },
          left: ['1. C/', '2. P.º', '3. Avda.', '4. Pza.', '5. N.º', '6. Gta.'],
          right: ['a. Paseo', 'b. Número', 'c. Plaza', 'd. Calle', 'e. Avenida', 'f. Glorieta'],
          a: [3, 0, 4, 2, 1, 5] },
        { type: 'reading', title: { es: '3b. Lee la siguiente carta postal.', ko: '다음 엽서를 읽으세요.', en: 'Read the following postcard.' },
          paras: [
            { es: 'Querido Luis:', ko: '사랑하는 루이스에게:', en: 'Dear Luis,' },
            { es: 'Ahora vivo en una ciudad al lado de un río. Las calles son pequeñas y no tiene avenidas. Los edificios altos están lejos del centro: son la iglesia y el hospital. Tenemos un museo y un monumento a Colón. Mi casa está en la Plaza Mayor enfrente de un parque. ¿Quieres conocerla?',
              ko: '나는 지금 강 옆에 있는 도시에 살아. 거리는 좁고 대로는 없어. 높은 건물들은 시내 중심에서 멀리 있어: 성당과 병원이야. 박물관과 콜럼버스 기념비도 있어. 우리 집은 마요르 광장에 있고 공원 맞은편이야. 와 보고 싶니?',
              en: 'Now I live in a town next to a river. The streets are small and it has no avenues. The tall buildings are far from the centre: the church and the hospital. We have a museum and a monument to Columbus. My house is in the Plaza Mayor, opposite a park. Do you want to see it?' },
            { es: 'Tu amigo, Carlos', ko: '너의 친구 카를로스가', en: 'Your friend, Carlos' },
            { es: '(Dirección: D. Luis Gómez · Gta. de Ibiza, 34 · 28000 MADRID)', ko: '(받는 사람: 루이스 고메스 · 이비사 로터리 34번지 · 마드리드)', en: '(To: Mr. Luis Gómez · 34 Ibiza Roundabout · Madrid)' }
          ] },
        { type: 'tf', id: 'c5', n: '3c',
          title: { es: 'Di si es verdadero (V) o falso (F).', ko: '참(V)인지 거짓(F)인지 고르세요.', en: 'True (V) or false (F)?' },
          items: [
            { q: '1. Carlos vive en una ciudad.', a: true },
            { q: '2. La ciudad está lejos de un río.', a: false },
            { q: '3. La ciudad no tiene calles.', a: false },
            { q: '4. Los edificios altos están en el centro.', a: false },
            { q: '5. La iglesia y el hospital son edificios altos.', a: true },
            { q: '6. La ciudad tiene un museo.', a: true },
            { q: '7. Luis vive en la plaza Mayor.', a: false },
            { q: '8. El parque está cerca de casa de Carlos.', a: true }
          ] }
      ] },

    /* ───────────── D1 ───────────── */
    { id: 'd1', tag: 'D', name: 'Gramática',
      sub: { es: 'Presente de verbos regulares. Uso de TÚ, USTED, VOS', ko: '규칙 동사 현재형 · TÚ, USTED, VOS의 사용', en: 'Present of regular verbs · TÚ, USTED, VOS' },
      blocks: [
        { type: 'table', title: { es: '1a. Observa. Verbos regulares (-AR, -ER, -IR)', ko: '규칙 동사 (-AR, -ER, -IR)', en: 'Regular verbs (-AR, -ER, -IR)' },
          head: ['', 'Hablar', 'Beber', 'Vivir'],
          rows: [
            ['Yo', 'hablo', 'bebo', 'vivo'],
            ['Tú', 'hablas', 'bebes', 'vives'],
            ['Él, ella, usted', 'habla', 'bebe', 'vive'],
            ['Nosotros, as', 'hablamos', 'bebemos', 'vivimos'],
            ['Vosotros, as', 'habláis', 'bebéis', 'vivís'],
            ['Ellos, ellas, ustedes', 'hablan', 'beben', 'viven']
          ],
          note: { ko: '어미 -ar/-er/-ir를 떼고 인칭에 따라 -o, -as/-es, -a/-e, -amos/-emos/-imos, -áis/-éis/-ís, -an/-en을 붙입니다.', en: 'Drop -ar/-er/-ir and add the person endings: -o, -as/-es, -a/-e, -amos/-emos/-imos, -áis/-éis/-ís, -an/-en.' } },
        { type: 'fill', id: 'd1', n: '1b',
          title: { es: 'Completa el cuadro.', ko: '표를 완성하세요.', en: 'Complete the table.' },
          items: [
            { q: 'Desayunar: yo desayuno · tú ___ · él ___ · nosotros desayunamos · vosotros ___ · ellos ___', a: ['desayunas', 'desayuna', 'desayunáis', 'desayunan'] },
            { q: 'Comprender: yo ___ · tú ___ · él comprende · nosotros ___ · vosotros ___ · ellos comprenden', a: ['comprendo', 'comprendes', 'comprendemos', 'comprendéis'] },
            { q: 'Escribir: yo ___ · tú escribes · él ___ · nosotros ___ · vosotros escribís · ellos ___', a: ['escribo', 'escribe', 'escribimos', 'escriben'] }
          ] },
        { type: 'fill', id: 'd2', n: '1c',
          title: { es: 'Completa las frases.', ko: '문장을 완성하세요.', en: 'Complete the sentences.' },
          items: [
            { q: '1. Don Víctor, ¿me ___ usted?', a: ['comprende'], hint: 'comprender' },
            { q: '2. Manuel y yo ___ español y francés.', a: ['hablamos'], hint: 'hablar' },
            { q: '3. Yo ___ y ___ español correctamente.', a: ['hablo', 'escribo'], hint: 'hablar, escribir' },
            { q: '4. Elena y Marta no ___ bien esta palabra.', a: ['comprenden'], hint: 'comprender' },
            { q: '5. ¿Vosotros ___ español?', a: ['habláis'], hint: 'hablar' }
          ] },
        { type: 'table', title: { es: '2a. Observa. TÚ - VOS - USTED', ko: 'TÚ - VOS - USTED', en: 'TÚ - VOS - USTED' },
          head: ['', ''],
          rows: [
            ['TÚ', 'informal'],
            ['USTED', 'formal'],
            ['VOS', '= Tú en Argentina, Uruguay, Paraguay y otros países de América Latina'],
            ['USTEDES', 'plural de TÚ, VOS y USTED en América Latina']
          ],
          note: { ko: 'tú는 친한 사이(비격식), usted는 격식. 아르헨티나·우루과이·파라과이 등에서는 tú 대신 vos를 씁니다. 라틴아메리카에서는 복수형으로 vosotros 대신 ustedes를 씁니다.', en: 'tú = informal, usted = formal. In Argentina, Uruguay, Paraguay etc. vos replaces tú. In Latin America ustedes is the plural for all of them.' } },
        { type: 'fill', id: 'd3', n: '2b', listen: true,
          title: { es: 'Los verbos usados con VOS cambian en el Presente. Escucha y repite.', ko: 'VOS와 함께 쓰는 동사는 현재형이 달라집니다. 듣고 따라 하며 VOS 형태를 쓰세요.', en: 'Verbs used with VOS change in the present. Listen, repeat and write the VOS form.' },
          items: [
            { q: '1. Tú eres / Vos ___.', a: ['sos'] },
            { q: '2. Tú hablas / Vos ___.', a: ['hablás'] },
            { q: '3. Tú comprendes / Vos ___.', a: ['comprendés'] },
            { q: '4. Tú escribes / Vos ___.', a: ['escribís'] }
          ] },
        { type: 'classify', id: 'd4', n: '2c',
          title: { es: 'Clasifica las frases en el cuadro.', ko: '문장을 표에 분류하세요.', en: 'Classify the sentences in the table.' },
          cats: ['Formal (en España y en Argentina)', 'Informal en España', 'Informal en Argentina'],
          items: [
            { w: '¿Vos hablás inglés?', c: 2 },
            { w: '¿Puede usted escribirlo?', c: 0 },
            { w: '¿Hablas español?', c: 1 },
            { w: '¿Cómo te llamás?', c: 2 },
            { w: '¿Puedes repetir, por favor?', c: 1 },
            { w: '¿Me entiendes?', c: 1 },
            { w: '¿Sos español?', c: 2 }
          ] }
      ] },

    /* ───────────── D2 ───────────── */
    { id: 'd2', tag: 'D', name: 'Gramática',
      sub: { es: 'Presente de verbos irregulares', ko: '불규칙 동사 현재형', en: 'Present of irregular verbs' },
      blocks: [
        { type: 'table', title: { es: '3a. Observa. Querer, Tener, Repetir', ko: 'Querer(원하다), Tener(가지다), Repetir(반복하다)', en: 'Querer (want), Tener (have), Repetir (repeat)' },
          head: ['', 'Querer', 'Tener', 'Repetir'],
          rows: [
            ['Yo', 'quiero', 'tengo', 'repito'],
            ['Tú', 'quieres', 'tienes', 'repites'],
            ['Él, ella, usted', 'quiere', 'tiene', 'repite'],
            ['Nosotros, as', 'queremos', 'tenemos', 'repetimos'],
            ['Vosotros, as', 'queréis', 'tenéis', 'repetís'],
            ['Ellos, ellas, ustedes', 'quieren', 'tienen', 'repiten']
          ],
          note: { ko: 'e → ie (querer, tener), e → i (repetir)로 바뀌지만 nosotros, vosotros에서는 바뀌지 않습니다. tener의 yo형은 tengo.', en: 'Stem changes e → ie (querer, tener) and e → i (repetir), except in nosotros/vosotros. Tener: yo tengo.' } },
        { type: 'fill', id: 'd5', n: '3a',
          title: { es: 'Observa y completa las frases.', ko: '표를 보고 문장을 완성하세요.', en: 'Look and complete the sentences.' },
          items: [
            { q: '1. Las chicas no ___ nada.', a: ['quieren'], hint: 'querer' },
            { q: '2. No hablan español, pero lo ___ todo.', a: ['repiten'], hint: 'repetir' },
            { q: '3. Nosotros no ___ nada.', a: ['tenemos'], hint: 'tener' },
            { q: '4. Los niños no ___ chocolate.', a: ['tienen'], hint: 'tener' },
            { q: '5. El profesor ___ la pregunta.', a: ['repite'], hint: 'repetir' },
            { q: '6. ¿Ustedes ___ algo? No, gracias, no ___ nada.', a: ['quieren', 'queremos'], hint: 'querer' }
          ] },
        { type: 'classify', id: 'd6', n: '3b',
          title: { es: 'Señala si los verbos de estas frases son regulares o irregulares.', ko: '문장의 동사가 규칙인지 불규칙인지 표시하세요.', en: 'Say whether the verbs are regular or irregular.' },
          cats: ['Verbos regulares', 'Verbos irregulares'],
          items: [
            { w: 'a. ¿Repetimos?', c: 1 },
            { w: 'b. Queremos café y un bollo, por favor.', c: 1 },
            { w: 'c. ¿Dónde viven?', c: 0 },
            { w: 'd. ¿Desayunas conmigo?', c: 0 },
            { w: 'e. Te enviamos un plano por correo.', c: 0 },
            { w: 'f. Llamas tú a Lucía y Antonio.', c: 0 },
            { w: 'g. ¿Tenéis correo electrónico?', c: 1 }
          ] },
        { type: 'fill', id: 'd7', n: '3c',
          title: { es: 'Completa.', ko: '완성하세요.', en: 'Complete.' },
          items: [
            { q: '1. ¿Viven ustedes en la calle Aribau? No, ___ en la calle Bailén.', a: ['vivimos'] },
            { q: '2. Ellas quieren pescado. Y vosotras, ¿qué ___?', a: ['queréis'] },
            { q: '3. ¿Tienes móvil? Sí, sí ___. Es el 661 00 00 01.', a: ['tengo'] },
            { q: '4. Yo desayuno en casa, pero Juan ___ en la cafetería.', a: ['desayuna'] },
            { q: '5. ¿Habláis español? Sí, ___ español y francés.', a: ['hablamos'] }
          ] },
        { type: 'fill', id: 'd8', n: '3d',
          title: { es: 'Pon las siguientes frases en plural.', ko: '다음 문장을 복수형으로 바꾸세요.', en: 'Put these sentences into the plural.' },
          items: [
            { q: '1. El cliente desea un sombrero. → ___', a: ['Los clientes desean unos sombreros.|Los clientes desean sombreros.|Los clientes desean unos sombreros|Los clientes desean sombreros'] },
            { q: '2. ¿Habla usted español? → ___', a: ['¿Hablan ustedes español?|Hablan ustedes español?|¿Hablan ustedes español'] },
            { q: '3. Es una estudiante alemana. → ___', a: ['Son unas estudiantes alemanas.|Son estudiantes alemanas.|Son unas estudiantes alemanas|Son estudiantes alemanas'] },
            { q: '4. El profesor habla de España. → ___', a: ['Los profesores hablan de España.|Los profesores hablan de España'] },
            { q: '5. ¿Comprendes el problema? → ___', a: ['¿Comprendéis los problemas?|¿Comprendéis el problema?|Comprendéis los problemas?|Comprendéis el problema?'] }
          ] },
        { type: 'fill', id: 'd9', n: '3e',
          title: { es: 'Y estas en singular.', ko: '이번에는 단수형으로 바꾸세요.', en: 'And these into the singular.' },
          items: [
            { q: '1. Las chicas no tienen sombreros. → ___', a: ['La chica no tiene sombrero.|La chica no tiene sombreros.|La chica no tiene sombrero|La chica no tiene sombreros'] },
            { q: '2. ¿Quieren ustedes unos tomates? → ___', a: ['¿Quiere usted un tomate?|Quiere usted un tomate?|¿Quiere usted un tomate'] },
            { q: '3. ¿Repetimos? → ___', a: ['¿Repito?|Repito?'] },
            { q: '4. Tenemos unos amigos marroquíes. → ___', a: ['Tengo un amigo marroquí.|Tengo un amigo marroquí'] },
            { q: '5. ¿Habláis de mí? → ___', a: ['¿Hablas de mí?|Hablas de mí?'] }
          ] }
      ] },

    /* ───────────── E ───────────── */
    { id: 'e', tag: 'E', name: 'Expresión oral',
      sub: { es: 'Dar datos personales e indicar una dirección', ko: '개인 정보 말하기와 위치 안내하기', en: 'Giving personal details and directions' },
      blocks: [
        { type: 'reading', title: { es: 'Las tarjetas', ko: '명함', en: 'The cards' },
          paras: [
            { es: '🪪 <b>Elena García Pérez</b> · Calle Corrientes, 1134 · 1428 Buenos Aires · Argentina · Tel. 11 933.00.01 · Móvil: 15 495.00.01 · elega@argentina.com.ar', ko: '엘레나 가르시아 페레스의 명함 (부에노스아이레스 코리엔테스 거리 1134번지)', en: 'Elena García Pérez’s card (1134 Corrientes St., Buenos Aires)' },
            { es: '💊 <b>Farmacia La Salud</b> · Plaza de la Ciudad, 1 · 28001 - Madrid · España · Tel. 908.20.01.14 · Fax: 908.15.16.17', ko: '라 살루드 약국 명함 (마드리드 시우닫 광장 1번지)', en: 'La Salud pharmacy card (1 Plaza de la Ciudad, Madrid)' }
          ] },
        { type: 'speak', n: '1a', title: { es: 'A partir de los datos de estas tarjetas practica diferentes preguntas con tu compañero.', ko: '명함 정보를 이용해 짝과 여러 질문을 연습하세요.', en: 'Using the data on these cards, practise different questions with a partner.' },
          prompt: { ko: '이름, 주소, 번지, 전화번호, 팩스, 이메일을 묻고 답하세요.', en: 'Ask and answer about name, address, number, phone, fax and e-mail.' },
          model: [
            { who: 'A', es: 'Hola. ¿Cómo se llama?' }, { who: 'B', es: 'Elena García.' },
            { who: 'A', es: '¿Dónde vive?' }, { who: 'B', es: 'En la calle Corrientes.' },
            { who: 'A', es: '¿En qué número?' }, { who: 'B', es: 'En el 1134.' },
            { who: 'A', es: '¿Cuál es el teléfono de la farmacia?' }, { who: 'B', es: 'El 908 20 01 14.' },
            { who: 'A', es: '¿Y el fax?' }, { who: 'B', es: 'El 908 15 16 17.' }
          ] },
        { type: 'fill', id: 'e1', n: '1a',
          title: { es: 'Completa las respuestas con los datos de las tarjetas.', ko: '명함 정보로 대답을 완성하세요.', en: 'Complete the answers with the data on the cards.' },
          items: [
            { q: '¿Dónde vive Elena? — En la calle ___.', a: ['Corrientes'] },
            { q: '¿En qué número? — En el ___.', a: ['1134|mil ciento treinta y cuatro'] },
            { q: '¿Cuál es su correo electrónico? — ___', a: ['elega@argentina.com.ar'] },
            { q: '¿Cuál es el teléfono de la farmacia? — El ___.', a: ['908.20.01.14|908 20 01 14|908200114|908-20-01-14'] },
            { q: '¿Y el fax? — El ___.', a: ['908.15.16.17|908 15 16 17|908151617|908-15-16-17'] }
          ] },
        { type: 'open', id: 'e2', n: '1b',
          title: { es: 'Escribe una tarjeta y habla con tu compañero, como en el ejercicio anterior.', ko: '자신의 명함을 만들고 앞의 활동처럼 짝과 대화하세요.', en: 'Write a card and talk to your partner, as in the previous exercise.' },
          items: [
            { q: 'Nombre y apellidos', model: 'Ana Martín Ruiz' },
            { q: 'Dirección', model: 'Avenida de la Paz, 25, 28010 Madrid' },
            { q: 'Teléfono', model: '915 33 20 18' },
            { q: 'Correo electrónico', model: 'anamartin@correo.es' }
          ] },
        { type: 'speak', n: '2', title: { es: 'Habla con tu compañero para decirle el lugar donde vives. Mira el modelo.', ko: '짝에게 사는 곳을 말해 보세요. 예시를 보세요.', en: 'Tell your partner where you live. Look at the model.' },
          prompt: { ko: '어디 사는지, 그곳이 어디에 있는지, 몇 번지인지 묻고 답하세요.', en: 'Ask and answer where you live, where it is and what number.' },
          model: [
            { who: 'A', es: '¿Dónde vives?' }, { who: 'B', es: 'En la calle Mayor.' },
            { who: 'A', es: '¿Dónde está?' }, { who: 'B', es: 'Cerca de la estación.' },
            { who: 'A', es: '¿Y en qué número?' }, { who: 'B', es: 'En el 15.' }
          ] },
        { type: 'note', es: 'Plano (Madrid): Museo Thyssen-Bornemisza (al lado de Neptuno) · Cafetería · Farmacia · Restaurante · Hotel · Metro · Museo del Prado · Real Jardín Botánico · Atocha · Centro de Arte Reina Sofía.',
          ko: '지도(마드리드): 티센 보르네미사 미술관, 넵투누스 분수, 카페, 약국, 식당, 호텔, 지하철, 프라도 미술관, 왕립 식물원, 아토차, 레이나 소피아 예술센터.',
          en: 'Map (Madrid): Thyssen-Bornemisza Museum, Neptune fountain, café, pharmacy, restaurant, hotel, metro, Prado Museum, Royal Botanic Garden, Atocha, Reina Sofía Art Centre.' },
        { type: 'speak', n: '3', title: { es: 'Describe dónde están los museos.', ko: '미술관들이 어디에 있는지 설명하세요.', en: 'Describe where the museums are.' },
          prompt: { ko: '지도를 보고 위치 표현(cerca de, al lado de, enfrente de…)을 사용해 세 미술관의 위치를 설명하세요.', en: 'Use location phrases (cerca de, al lado de, enfrente de…) to describe where the three museums are.' },
          model: [
            { who: 'A', es: 'El Museo Thyssen-Bornemisza está al lado de Neptuno.' },
            { who: 'B', es: 'El Museo del Prado está al lado del Real Jardín Botánico, cerca de Neptuno.' },
            { who: 'A', es: 'El Centro de Arte Reina Sofía está cerca de Atocha, al lado del hotel y del metro.' }
          ] }
      ] },

    /* ───────────── MUNDO HISPANO ───────────── */
    { id: 'mundo', tag: '', name: 'Mundo hispano',
      sub: { es: 'El paisaje urbano en España', ko: '스페인의 도시 풍경', en: 'The urban landscape in Spain' },
      blocks: [
        { type: 'vocab', title: { es: 'Lugares de la ciudad', ko: '도시의 장소들', en: 'Places in town' },
          items: [
            { es: 'el puesto de la ONCE', ko: 'ONCE 복권 판매대 (시각장애인 협회)', en: 'ONCE lottery kiosk', e: '🎟️' },
            { es: 'el estanco', ko: '담배 가게 (우표도 판매)', en: 'tobacconist’s (also sells stamps)', e: '🚬' },
            { es: 'la administración de lotería', ko: '복권 판매소', en: 'lottery shop', e: '🎰' },
            { es: 'la oficina de correos', ko: '우체국', en: 'post office', e: '🏤' },
            { es: 'el buzón', ko: '우체통', en: 'postbox', e: '📫' },
            { es: 'el hospital', ko: '병원', en: 'hospital', e: '🏥' },
            { es: 'la farmacia', ko: '약국', en: 'pharmacy', e: '💊' },
            { es: 'el kiosco', ko: '신문 가판대', en: 'newsstand', e: '📰' },
            { es: 'la tasca', ko: '선술집', en: 'tavern / bar', e: '🍷' },
            { es: 'la panadería', ko: '빵집', en: 'bakery', e: '🥖' },
            { es: 'la churrería', ko: '추로스 가게', en: 'churros shop', e: '🍩' }
          ] },
        { type: 'match', id: 'm1', n: '1',
          title: { es: 'Relaciona estas palabras con las fotos.', ko: '단어와 사진을 연결하세요.', en: 'Match these words with the photos.' },
          left: ['A 🏥 Edificio con el letrero «INSALUD – Hospital»', 'B 💊 Tienda con el letrero «Farmacia» y una cruz verde', 'C 📰 Puesto en la calle de «Prensa y revistas»', 'D 🎰 Tienda de «Loterías y Apuestas del Estado»', 'E 🏤 Edificio con el letrero amarillo «Correos»', 'F 📫 Caja amarilla en la calle para echar cartas', 'G 🚬 Tienda con el letrero «Tabacos»', 'H 🥖 Tienda con el letrero «Panadería»', 'I 🍩 Local con el letrero «Churrería»', 'J 🍷 Bar con el letrero «La Tasca»', 'K 🎟️ Caseta marrón con el letrero «ONCE»'],
          right: ['Hospital', 'Farmacia', 'Kiosco', 'Administración de lotería', 'Oficina de correos', 'Buzón', 'Estanco', 'Panadería', 'Churrería', 'Tasca', 'Puesto de la ONCE'],
          a: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
        { type: 'choice', id: 'm2', n: '2',
          title: { es: 'Relaciona con flechas.', ko: '장소와 그곳에서 사는(얻는) 것을 연결하세요.', en: 'Match each place with what you get there.' },
          items: [
            { q: '1. Administración de lotería', opts: ['Lotería y juegos de azar', 'Pan y bollos', 'Medicina'], a: 0 },
            { q: '2. Estanco', opts: ['Comidas y bebidas', 'Tabaco (y también sellos)', 'Periódicos y revistas'], a: 1 },
            { q: '3. Panadería', opts: ['Sellos y cartas', 'Medicina', 'Pan y bollos'], a: 2 },
            { q: '4. Oficina de correos', opts: ['Sellos y cartas', 'Tabaco', 'Comidas y bebidas'], a: 0 },
            { q: '5. Hospital', opts: ['Periódicos y revistas', 'Medicina', 'Lotería y juegos de azar'], a: 1 },
            { q: '6. Kiosco', opts: ['Pan y bollos', 'Tabaco', 'Periódicos y revistas'], a: 2 },
            { q: '7. Farmacia', opts: ['Medicina', 'Comidas y bebidas', 'Sellos y cartas'], a: 0 },
            { q: '8. Tasca', opts: ['Lotería y juegos de azar', 'Comidas y bebidas', 'Medicina'], a: 1 },
            { q: '9. Puesto de la ONCE', opts: ['Periódicos y revistas', 'Pan y bollos', 'Lotería y juegos de azar'], a: 2 }
          ] },
        { type: 'open', id: 'm3', n: '3',
          title: { es: '¿Hay en tu país algunas tiendas diferentes? ¿Cuáles?', ko: '너희 나라에는 다른 종류의 가게가 있니? 어떤 것들이니?', en: 'Are there any different shops in your country? Which ones?' },
          items: [
            { q: '¿Hay en tu país algunas tiendas diferentes? ¿Cuáles?', model: 'Sí, en Corea hay muchas tiendas de conveniencia (편의점). Abren las 24 horas y venden comida, bebidas y sellos.' }
          ] }
      ] },

    /* ───────────── SÍNTESIS ───────────── */
    { id: 'sintesis', tag: '', name: 'Síntesis',
      sub: { es: 'A B C D E', ko: '단원 종합', en: 'Unit review' },
      blocks: [
        { type: 'note', es: 'La ilustración: una calle con una farmacia, un estanco, un bingo, la Cafetería Rodríguez, la administración de lotería «Doña Manolita», el Restaurante Sánchez y un kiosco con revistas. Un niño echa una carta en el buzón, dos chicas pasean, un coche azul y un señor mayor con bastón.',
          ko: '그림: 약국, 담배 가게, 빙고장, 로드리게스 카페, 도냐 마놀리타 복권 판매소, 산체스 식당, 잡지 가판대가 있는 거리. 한 아이가 우체통에 편지를 넣고, 두 여자가 걷고, 파란 차와 지팡이를 든 할아버지가 있습니다.',
          en: 'The picture: a street with a pharmacy, a tobacconist’s, a bingo hall, Café Rodríguez, the “Doña Manolita” lottery shop, Restaurante Sánchez and a newsstand. A boy posts a letter in a postbox, two girls walk, a blue car and an old man with a stick.' },
        { type: 'tf', id: 's1', n: '1',
          title: { es: 'Mira la ilustración durante un minuto y luego marca lo que has visto.', ko: '그림을 1분 동안 본 뒤, 본 것을 표시하세요 (있으면 V, 없으면 F).', en: 'Look at the picture for one minute, then mark what you saw (V = seen, F = not seen).' },
          items: [
            { q: 'Un kiosco', a: true },
            { q: 'Un puesto de la ONCE', a: false },
            { q: 'Una cafetería', a: true },
            { q: 'Una administración de lotería', a: true },
            { q: 'Un hospital', a: false },
            { q: 'Un buzón', a: true },
            { q: 'Una oficina de correos', a: false },
            { q: 'Una tasca', a: false },
            { q: 'Una churrería', a: false },
            { q: 'Un estanco', a: true }
          ] },
        { type: 'speak', n: '1a', title: { es: 'Describe la imagen.', ko: '그림을 묘사하세요.', en: 'Describe the picture.' },
          prompt: { ko: '위치 표현을 사용해 그림 속 가게와 사람들이 어디에 있는지 말하세요.', en: 'Use location phrases to say where the shops and people are.' },
          model: [
            { who: 'A', es: 'El estanco está entre la farmacia y el bingo.' },
            { who: 'B', es: 'La Cafetería Rodríguez está a la izquierda de la lotería Doña Manolita.' },
            { who: 'A', es: 'El niño está delante del buzón, al lado de la farmacia.' },
            { who: 'B', es: 'El kiosco está a la derecha del Restaurante Sánchez.' }
          ] },
        { type: 'speak', n: '1b', title: { es: 'Elige a dos personajes e imagina el diálogo.', ko: '두 인물을 골라 대화를 상상해 만드세요.', en: 'Choose two characters and imagine the dialogue.' },
          prompt: { ko: '예: 할아버지가 운전자에게 길을 묻는 장면.', en: 'E.g. the old man asks the driver for directions.' },
          model: [
            { who: 'A', es: 'Perdone, ¿dónde está la oficina de correos?' },
            { who: 'B', es: 'Está en la calle Goya, cerca de la estación.' },
            { who: 'A', es: '¿Está lejos?' },
            { who: 'B', es: 'No, está muy cerca, a la derecha del hotel.' },
            { who: 'A', es: 'Muchas gracias.' }
          ] }
      ] },

    /* ───────────── YA CONOCES ───────────── */
    { id: 'yaconoces', tag: '', name: 'Ya conoces',
      sub: { es: 'A B C D E', ko: '이 단원에서 배운 것', en: 'What you know now' },
      blocks: [
        { type: 'vocab', title: { es: '1a. Las expresiones para manejarse en la calle: Situar en el espacio', ko: '거리에서 쓰는 표현: 위치 말하기', en: 'Getting around: saying where things are' },
          items: [
            { es: 'cerca de / lejos de', ko: '~ 가까이 / 멀리', en: 'near / far from', e: '↔️' },
            { es: 'al lado de', ko: '~ 옆에', en: 'next to', e: '⬅️' },
            { es: 'a la derecha de / a la izquierda de', ko: '~ 오른쪽에 / 왼쪽에', en: 'to the right / left of', e: '➡️' },
            { es: 'enfrente de', ko: '~ 맞은편에', en: 'opposite', e: '🔁' },
            { es: 'delante de / detrás de', ko: '~ 앞에 / 뒤에', en: 'in front of / behind', e: '⬆️' },
            { es: 'entre', ko: '~ 사이에', en: 'between', e: '↕️' }
          ] },
        { type: 'table', title: { es: '1b. Y para informarte de datos personales', ko: '개인 정보 묻고 답하기', en: 'Asking for personal details' },
          head: ['Pregunta', 'Respuesta'],
          rows: [
            ['¿Dónde vives?', 'Vivo en la calle…'],
            ['¿En qué número?', 'En el…'],
            ['¿Dónde está esa calle?', 'Está cerca de…'],
            ['¿Tienes correo electrónico / teléfono?', 'Mi correo es …@… . …'],
            ['¿Cuál es tu correo electrónico?', 'Mi correo es …@… . …'],
            ['¿Cuál es tu número de teléfono?', 'Es el…']
          ] },
        { type: 'note', es: '<b>2a. Los números:</b> cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince, dieciséis, diecisiete, dieciocho, diecinueve y veinte.',
          ko: '숫자 0~20', en: 'Numbers 0–20' },
        { type: 'vocab', title: { es: '2b. Las palabras de la comunicación', ko: '통신 관련 단어', en: 'Communication words' },
          items: [
            { es: 'la carta', ko: '편지', en: 'letter', e: '✉️' },
            { es: 'el contestador', ko: '자동응답기', en: 'answering machine', e: '📟' },
            { es: 'el correo electrónico', ko: '이메일', en: 'e-mail', e: '📧' },
            { es: 'el fax', ko: '팩스', en: 'fax', e: '📠' },
            { es: 'el mensaje', ko: '메시지', en: 'message', e: '💬' },
            { es: 'llamar', ko: '전화하다', en: 'to call', e: '📞' },
            { es: 'dejar un mensaje', ko: '메시지를 남기다', en: 'to leave a message', e: '📝' },
            { es: 'la señal', ko: '신호음', en: 'tone / beep', e: '🔔' },
            { es: 'el teléfono', ko: '전화', en: 'telephone', e: '☎️' }
          ] },
        { type: 'vocab', title: { es: '2c. Los lugares para orientarte', ko: '길 찾기에 필요한 장소', en: 'Places for finding your way' },
          items: [
            { es: 'la administración de lotería', ko: '복권 판매소', en: 'lottery shop', e: '🎰' },
            { es: 'el ambulatorio', ko: '보건소, 외래 진료소', en: 'health centre', e: '🩺' },
            { es: 'la avenida', ko: '대로', en: 'avenue', e: '🛣️' },
            { es: 'el bingo', ko: '빙고장', en: 'bingo hall', e: '🎱' },
            { es: 'el buzón', ko: '우체통', en: 'postbox', e: '📫' },
            { es: 'la cafetería', ko: '카페', en: 'café', e: '☕' },
            { es: 'la calle', ko: '거리', en: 'street', e: '🛤️' },
            { es: 'la carretera', ko: '도로, 국도', en: 'road', e: '🛣️' },
            { es: 'la casa', ko: '집', en: 'house', e: '🏠' },
            { es: 'la churrería', ko: '추로스 가게', en: 'churros shop', e: '🍩' },
            { es: 'los edificios', ko: '건물들', en: 'buildings', e: '🏢' },
            { es: 'la estación de metro', ko: '지하철역', en: 'metro station', e: '🚇' },
            { es: 'el estanco', ko: '담배 가게', en: 'tobacconist’s', e: '🚬' },
            { es: 'la farmacia', ko: '약국', en: 'pharmacy', e: '💊' },
            { es: 'la glorieta', ko: '로터리', en: 'roundabout', e: '🔄' },
            { es: 'el hospital', ko: '병원', en: 'hospital', e: '🏥' },
            { es: 'el hotel', ko: '호텔', en: 'hotel', e: '🏨' },
            { es: 'la iglesia', ko: '성당, 교회', en: 'church', e: '⛪' },
            { es: 'el kiosco', ko: '가판대', en: 'newsstand', e: '📰' },
            { es: 'el monumento', ko: '기념비', en: 'monument', e: '🗽' },
            { es: 'el museo', ko: '박물관, 미술관', en: 'museum', e: '🏛️' },
            { es: 'la oficina de correos', ko: '우체국', en: 'post office', e: '🏤' },
            { es: 'el parque', ko: '공원', en: 'park', e: '🌳' },
            { es: 'el paseo', ko: '산책로, 대로', en: 'boulevard', e: '🚶' },
            { es: 'la plaza', ko: '광장', en: 'square', e: '⛲' },
            { es: 'el puesto de la ONCE', ko: 'ONCE 복권 판매대', en: 'ONCE kiosk', e: '🎟️' },
            { es: 'el restaurante', ko: '식당', en: 'restaurant', e: '🍽️' },
            { es: 'el río', ko: '강', en: 'river', e: '🏞️' },
            { es: 'la tasca', ko: '선술집', en: 'tavern', e: '🍷' }
          ] },
        { type: 'vocab', title: { es: '2d. Los verbos', ko: '동사', en: 'Verbs' },
          items: [
            { es: 'desayunar', ko: '아침을 먹다', en: 'to have breakfast', e: '🥐' },
            { es: 'comer', ko: '점심을 먹다', en: 'to have lunch', e: '🍲' },
            { es: 'merendar', ko: '간식을 먹다', en: 'to have an afternoon snack', e: '🧁' },
            { es: 'cenar', ko: '저녁을 먹다', en: 'to have dinner', e: '🍝' }
          ] },
        { type: 'table', title: { es: '3a. El Presente de los verbos regulares', ko: '규칙 동사 현재형', en: 'Present tense of regular verbs' },
          head: ['', 'Hablar', 'Beber', 'Vivir'],
          rows: [
            ['Yo', 'hablo', 'bebo', 'vivo'],
            ['Tú', 'hablas', 'bebes', 'vives'],
            ['Él, ella, usted', 'habla', 'bebe', 'vive'],
            ['Nosotros, as', 'hablamos', 'bebemos', 'vivimos'],
            ['Vosotros, as', 'habláis', 'bebéis', 'vivís'],
            ['Ellos, ellas, ustedes', 'hablan', 'beben', 'viven']
          ] },
        { type: 'table', title: { es: '3b. Y de algunos irregulares', ko: '몇몇 불규칙 동사 현재형', en: 'And some irregular verbs' },
          head: ['', 'Querer', 'Tener', 'Repetir'],
          rows: [
            ['Yo', 'quiero', 'tengo', 'repito'],
            ['Tú', 'quieres', 'tienes', 'repites'],
            ['Él, ella, usted', 'quiere', 'tiene', 'repite'],
            ['Nosotros, as', 'queremos', 'tenemos', 'repetimos'],
            ['Vosotros, as', 'queréis', 'tenéis', 'repetís'],
            ['Ellos, ellas, ustedes', 'quieren', 'tienen', 'repiten']
          ] }
      ] }
  ]
});

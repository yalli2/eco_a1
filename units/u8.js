ECO.unit({
  num: 8,
  title: 'Vamos a salir',
  emoji: '🌦️🎒',
  pages: '76–85',
  topics: { ko: '계획 · 날씨 · 활동 제안 · 의무 표현', en: 'Plans · weather · suggesting activities · obligation' },
  goals: [
    { es: 'Hablar del futuro.', ko: '미래에 대해 말하기', en: 'Talk about the future' },
    { es: 'Hablar del tiempo.', ko: '날씨에 대해 말하기', en: 'Talk about the weather' },
    { es: 'Hacer planes y proponer actividades.', ko: '계획을 세우고 활동 제안하기', en: 'Make plans and suggest activities' },
    { es: 'Expresar obligación personal.', ko: '개인적 의무 표현하기', en: 'Express personal obligation' },
    { es: 'Las estaciones del año, el tiempo y actividades.', ko: '계절, 날씨, 활동 (어휘)', en: 'Seasons, weather and activities (vocabulary)' },
    { es: 'IR A + infinitivo. TENER QUE + infinitivo. MUY, MUCHO. El Imperativo.', ko: 'IR A + 동사원형, TENER QUE + 동사원형, MUY/MUCHO, 명령법', en: 'IR A + infinitive, TENER QUE + infinitive, MUY/MUCHO, the imperative' },
    { es: 'El Camino de Santiago.', ko: '산티아고 순례길', en: 'The Way of St James' }
  ],
  people: { 'Gerardo': 'm', 'Leticia': 'f', 'Almudena': 'f', 'Patricia': 'f', 'Andrés': 'm' },
  sections: [
    /* ───────────── PORTADA ───────────── */
    { id: 'portada', tag: '', name: 'Portada',
      sub: { es: 'Vamos a salir', ko: '놀러 가자', en: "Let's go out" },
      blocks: [
        { type: 'note', ko: '그림: 밤늦게까지 일하는 레티시아에게 헤라르도가 주말에 놀러 가자고 제안합니다.', en: 'Picture: Gerardo suggests a weekend trip to Leticia, who is still working late at night.' },
        { type: 'fill', id: 'p1', n: '1', listen: true,
          title: { es: 'Escucha y completa el diálogo con las frases del cuadro.', ko: '듣고 상자 속 문장으로 대화를 완성하세요.', en: 'Listen and complete the dialogue with the phrases in the box.' },
          bank: ['¿Pero no va a hacer frío?', '¿Y si vamos a una casa rural?', 'Pon la radio, anda.', 'Tenemos que ver el tiempo.', '¿Qué tal si…', 'Es que…'],
          items: [
            { q: 'LETICIA: Sí. ___ tengo que terminar esto hoy.', a: ['Es que'] },
            { q: 'GERARDO: No sé. ¿___ vamos al campo o a algún sitio para descansar?', a: ['Qué tal si'] },
            { q: 'LETICIA: ¿___?', a: ['Y si vamos a una casa rural'] },
            { q: 'LETICIA: Sí, sí, ¿___?', a: ['pero no va a hacer frío'] },
            { q: 'GERARDO: ¡Ah! No sé. ___. Y si hace malo vamos mejor a una ciudad.', a: ['Tenemos que ver el tiempo'] },
            { q: 'LETICIA: Sí, claro. Pero tenemos que decidir dónde vamos para hacer las reservas. ___.', a: ['Pon la radio, anda'] }
          ] },
        { type: 'dialog', title: { es: 'Diálogo completo', ko: '전체 대화', en: 'Full dialogue' },
          lines: [
            { who: 'Gerardo', es: '¿Todavía estás trabajando? Si son ya más de las nueve.', ko: '아직도 일하고 있어? 벌써 9시가 넘었는데.', en: "Are you still working? It's already past nine." },
            { who: 'Leticia', es: 'Sí. Es que tengo que terminar esto hoy.', ko: '응. 이걸 오늘 끝내야 하거든.', en: 'Yes. The thing is I have to finish this today.' },
            { who: 'Gerardo', es: 'Trabajas demasiado. ¿Por qué no salimos este fin de semana?', ko: '너 일을 너무 많이 해. 이번 주말에 놀러 가는 게 어때?', en: "You work too much. Why don't we go out this weekend?" },
            { who: 'Leticia', es: 'Bueno. ¿Dónde podemos ir?', ko: '좋아. 어디 갈 수 있을까?', en: 'OK. Where can we go?' },
            { who: 'Gerardo', es: 'No sé. ¿Qué tal si vamos al campo o a algún sitio para descansar?', ko: '글쎄. 시골이나 쉴 수 있는 곳에 가는 건 어때?', en: 'I don’t know. How about going to the countryside or somewhere to rest?' },
            { who: 'Leticia', es: '¿Y si vamos a una casa rural?', ko: '시골 민박에 가는 건 어때?', en: 'What if we go to a country house?' },
            { who: 'Gerardo', es: '¡Buena idea!', ko: '좋은 생각이야!', en: 'Good idea!' },
            { who: 'Leticia', es: 'Busca en Internet alguna dirección.', ko: '인터넷에서 주소를 좀 찾아봐.', en: 'Look up an address on the Internet.' },
            { who: 'Gerardo', es: 'Muy bien, ahora mismo. Mira esta, es bonita, ¿no?', ko: '좋아, 지금 바로. 이거 봐, 예쁘지 않아?', en: "OK, right now. Look at this one, it's nice, isn't it?" },
            { who: 'Leticia', es: 'Sí, sí, ¿pero no va a hacer frío?', ko: '응, 응, 그런데 춥지 않을까?', en: "Yes, yes, but isn't it going to be cold?" },
            { who: 'Gerardo', es: '¡Ah! No sé. Tenemos que ver el tiempo. Y si hace malo vamos mejor a una ciudad.', ko: '아! 모르겠어. 날씨를 봐야 해. 날씨가 나쁘면 차라리 도시로 가자.', en: "Oh! I don't know. We have to check the weather. And if it's bad, we'd better go to a city." },
            { who: 'Leticia', es: 'Sí, claro. Pero tenemos que decidir dónde vamos para hacer las reservas. Pon la radio, anda.', ko: '그래. 그런데 예약하려면 어디 갈지 정해야 해. 라디오 좀 켜 봐.', en: 'Sure. But we have to decide where we are going to make the bookings. Come on, turn on the radio.' },
            { who: 'Gerardo', es: 'Voy.', ko: '알았어.', en: 'Coming.' }
          ] },
        { type: 'choice', id: 'p2', n: '2', listen: true,
          title: { es: 'Escucha el programa de radio y di a qué mapa corresponden las previsiones del tiempo.', ko: '라디오 방송을 듣고 각 일기예보가 어느 지도에 해당하는지 고르세요.', en: 'Listen to the radio programme and say which map each weather forecast matches.' },
          items: [
            { say: 'Hoy hizo buen tiempo en toda la península. Amaneció cubierto en el norte, pero a lo largo de la mañana las nubes se fueron y salió el sol. En las islas Baleares y en las islas Canarias también tuvieron un día de primavera.',
              opts: ['Mapa 1: ☀️ sol, 🌡️ termómetros y 💨 viento en el este', 'Mapa 2: 🌧️ nubes con lluvia y ⛈️ tormentas', 'Mapa 3: ☀️ sol en casi toda España, ☁️ una nube en el norte'], a: 2 },
            { say: 'Mañana tenemos que abrir los paraguas, vamos a tener un cambio. Por el oeste va a entrar un frente frío con lluvias generalizadas: va a llover mucho en Galicia y en Asturias, bastante en el resto de la península, y poco en Baleares y Canarias.',
              opts: ['Mapa 1: ☀️ sol, 🌡️ termómetros y 💨 viento en el este', 'Mapa 2: 🌧️ nubes con lluvia y ⛈️ tormentas', 'Mapa 3: ☀️ sol en casi toda España, ☁️ una nube en el norte'], a: 1 },
            { say: 'El sábado y el domingo, el tiempo va a ser soleado. En el centro de la península van a subir mucho las temperaturas; por el este van a entrar vientos cálidos y en el sur los termómetros van a llegar a 30 grados: demasiado para estas fechas, ¿verdad? En resumen, en el fin de semana lleven sus abanicos.',
              opts: ['Mapa 1: ☀️ sol, 🌡️ termómetros y 💨 viento en el este', 'Mapa 2: 🌧️ nubes con lluvia y ⛈️ tormentas', 'Mapa 3: ☀️ sol en casi toda España, ☁️ una nube en el norte'], a: 0 }
          ] }
      ] },

    /* ───────────── A ───────────── */
    { id: 'a', tag: 'A', name: 'Comprensión y práctica',
      sub: { es: 'Planes y el tiempo', ko: '계획과 날씨', en: 'Plans and the weather' },
      blocks: [
        { type: 'choice', id: 'a1', n: '1', listen: true,
          title: { es: '¿Qué oyes?', ko: '무엇이 들리나요?', en: 'What do you hear?' },
          items: [
            { say: 'Trabajas demasiado.', opts: ['Trabajas demasiado.', 'Trabaja demasiado.'], a: 0 },
            { say: 'Pon la radio.', opts: ['Pon la radio.', 'Pone la radio.'], a: 0 },
            { say: 'Va a entrar.', opts: ['Va a entrar.', 'Van a entrar.'], a: 0 },
            { say: 'Por el oeste.', opts: ['Por el este.', 'Por el oeste.'], a: 1 },
            { say: 'Va a llover mucho.', opts: ['Va a llover mucho.', 'Va a haber mucho.'], a: 0 },
            { say: 'Tenemos que ver el tiempo.', opts: ['Podemos ver el tiempo.', 'Tenemos que ver el tiempo.'], a: 1 }
          ] },
        { type: 'match', id: 'a2', n: '2',
          title: { es: 'Relaciona las frases con los dibujos.', ko: '문장과 그림을 연결하세요.', en: 'Match the sentences with the pictures.' },
          left: ['1. Llueve mucho.', '2. Llueve poco.', '3. Llueve bastante.', '4. Llueve demasiado.', '5. Hace mucho calor.', '6. Trabaja demasiado.', '7. Trabaja mucho.', '8. Trabaja poco.', '9. Estoy muy bien.', '10. Estoy muy mal.'],
          right: ['😌🦶 Oficinista con los pies en la mesa', '😫📞 Oficinista con muchos papeles y dos teléfonos', '🤒🛏️ Chico enfermo en la cama del hospital', '🌧️🌧️ Calle con lluvia fuerte', '🌊🌧️ Calle inundada, lluvia sin parar', '😎🚶 Chico paseando con gafas de sol', '🌧️ Calle con lluvia normal', '📞✍️ Oficinista escribiendo y hablando por teléfono', '🌦️ Calle con unas gotas de lluvia', '🥵☀️ Señor sudando con un periódico'],
          a: [3, 8, 6, 4, 9, 1, 7, 0, 5, 2] },
        { type: 'match', id: 'a3', n: '3',
          title: { es: 'Ordena los adverbios de cantidad por orden creciente.', ko: '양의 부사를 작은 것부터 큰 순서로 배열하세요.', en: 'Put the adverbs of quantity in increasing order.' },
          left: ['1.º (el menos)', '2.º', '3.º', '4.º (el más)'],
          right: ['Demasiado', 'Poco', 'Muy / mucho', 'Bastante'],
          a: [1, 3, 2, 0] },
        { type: 'classify', id: 'a4', n: '4',
          title: { es: 'Relaciona: ¿Mañana (M), Hoy (H) o Ayer (A)?', ko: '연결하세요: 내일(M), 오늘(H), 어제(A)?', en: 'Match: tomorrow (M), today (H) or yesterday (A)?' },
          cats: ['Ayer', 'Hoy', 'Mañana'],
          items: [
            { w: 'Llovió y estuvo nublado todo el día.', c: 0 },
            { w: 'Está lloviendo un poco, pero hace calor.', c: 1 },
            { w: 'Va a llover por la tarde.', c: 2 },
            { w: 'Estás trabajando demasiado. Tienes que descansar.', c: 1 },
            { w: 'Vas a trabajar mucho.', c: 2 },
            { w: 'Trabajó mucho todo el día, el pobre.', c: 0 }
          ] },
        { type: 'match', id: 'a5', n: '5a',
          title: { es: 'Relaciona.', ko: '연결하세요.', en: 'Match.' },
          left: ['A ☀️🥵 (hace mucho calor)', 'B ❄️🧣 (nieva, hace frío)', 'C 🌤️🙂 (hace buen tiempo)', 'D ☁️🌂 (está nublado)'],
          right: ['Quedarse en casa.', 'Salir a pasear.', 'Llevar el paraguas.', 'Ir a la piscina.'],
          a: [3, 0, 1, 2] },
        { type: 'note', es: 'Ejemplo: <i>Si hace frío, tienes que quedarte en casa.</i>', ko: '<b>Si</b> + 현재형, <b>tener que</b> + 동사원형: “~하면 ~해야 한다”', en: '<b>Si</b> + present, <b>tener que</b> + infinitive: “if…, you have to…”' },
        { type: 'order', id: 'a6', n: '5b',
          title: { es: 'Escribe las frases como en el ejemplo.', ko: '예시처럼 문장을 만드세요.', en: 'Write the sentences as in the example.' },
          items: [
            { a: 'Si hace calor, tienes que ir a la piscina.' },
            { a: 'Si hace buen tiempo, tienes que salir a pasear.' },
            { a: 'Si está nublado, tienes que llevar el paraguas.' }
          ] },
        { type: 'open', id: 'a7', n: '6',
          title: { es: 'Y hoy, ¿qué tiempo va a hacer?', ko: '그럼 오늘은 날씨가 어떨까요?', en: 'And today, what is the weather going to be like?' },
          items: [ { q: 'Y hoy, ¿qué tiempo va a hacer?', model: 'Hoy va a hacer sol, pero por la tarde va a llover un poco.' } ] }
      ] },

    /* ───────────── B ───────────── */
    { id: 'b', tag: 'B', name: 'Pronunciación y ortografía',
      sub: { es: 'El diptongo y los acentos', ko: '이중모음과 강세 부호', en: 'Diphthongs and accents' },
      blocks: [
        { type: 'note', es: 'Las vocales <b>A, E, O</b> son fuertes, y las vocales <b>I, U</b> son débiles.<br>Cuando una vocal fuerte y una débil forman sílaba se llama <b>diptongo</b>: Bue-no, Si-tio, Tiem-po, Ca-na-rias.', ko: 'A, E, O는 강모음, I, U는 약모음입니다. 강모음과 약모음이 한 음절을 이루면 이중모음이라고 합니다.', en: 'A, E, O are strong vowels; I, U are weak. A strong + weak vowel in one syllable is a diphthong.' },
        { type: 'note', es: 'Hay diptongos con tilde sobre la vocal fuerte: A-ma-ne-ció, Tam-bién, Miér-co-les, A-diós.', ko: '강모음 위에 강세 부호가 있는 이중모음도 있습니다.', en: 'Some diphthongs carry an accent mark on the strong vowel.' },
        { type: 'note', es: 'Se rompe el diptongo en dos sílabas si la vocal débil tiene el acento. Se escribe entonces la tilde sobre ella: Frí-o, To-da-ví-a, Dí-a, Ra-úl.', ko: '약모음에 강세가 오면 이중모음이 두 음절로 나뉘고, 그 약모음 위에 강세 부호를 씁니다.', en: 'If the weak vowel is stressed, the diphthong breaks into two syllables and the accent mark goes on the weak vowel.' },
        { type: 'note', es: 'Dos vocales débiles juntas siempre forman diptongo. Si llevan tilde, se pone sobre la segunda vocal: Fui, Muy, Ciu-dad, Cons-truí.', ko: '약모음 두 개가 함께 오면 항상 이중모음입니다. 강세 부호가 있으면 두 번째 모음 위에 씁니다.', en: 'Two weak vowels together always form a diphthong. An accent mark goes on the second vowel.' },
        { type: 'dictation', id: 'b1', n: '1', listen: true,
          title: { es: 'Escucha y repite.', ko: '듣고 따라 하세요. (받아 써 보세요)', en: 'Listen and repeat. (Write what you hear.)' },
          items: [ { say: 'Bueno' }, { say: 'Sitio' }, { say: 'Tiempo' }, { say: 'Canarias' }, { say: 'Amaneció' }, { say: 'También' }, { say: 'Miércoles' }, { say: 'Adiós' }, { say: 'Frío' }, { say: 'Todavía' }, { say: 'Día' }, { say: 'Raúl' }, { say: 'Fui' }, { say: 'Muy' }, { say: 'Ciudad' }, { say: 'Construí' } ] },
        { type: 'fill', id: 'b2', n: '2',
          title: { es: 'Separa estas palabras en sílabas.', ko: '이 단어들을 음절로 나누세요. (하이픈 - 사용)', en: 'Split these words into syllables (use hyphens).' },
          items: [
            { q: 'Baleares → ___', a: ['Ba-le-a-res'] },
            { q: 'Llueve → ___', a: ['Llue-ve'] },
            { q: 'Leticia → ___', a: ['Le-ti-cia'] },
            { q: 'María → ___', a: ['Ma-rí-a'] },
            { q: 'Demasiado → ___', a: ['De-ma-sia-do'] },
            { q: 'Buena → ___', a: ['Bue-na'] },
            { q: 'Soleado → ___', a: ['So-le-a-do'] },
            { q: 'Ciudadano → ___', a: ['Ciu-da-da-no'] },
            { q: 'Fuimos → ___', a: ['Fui-mos'] },
            { q: 'País → ___', a: ['Pa-ís'] },
            { q: 'Serio → ___', a: ['Se-rio'] },
            { q: 'Gutiérrez → ___', a: ['Gu-tié-rrez'] }
          ] },
        { type: 'choice', id: 'b3', n: '3', listen: true,
          title: { es: 'Escucha y pon la tilde si es necesario.', ko: '듣고 필요하면 강세 부호를 붙이세요.', en: 'Listen and add the accent mark if necessary.' },
          items: [
            { say: 'Estáis', opts: ['Estais', 'Estáis'], a: 1 },
            { say: 'Viento', opts: ['Viento', 'Viénto'], a: 0 },
            { say: 'Viajar', opts: ['Viajar', 'Viajár'], a: 0 },
            { say: 'Envío', opts: ['Envio', 'Envío'], a: 1 },
            { say: 'Diario', opts: ['Diario', 'Diarío'], a: 0 },
            { say: 'Tenéis', opts: ['Teneis', 'Tenéis'], a: 1 },
            { say: 'Viernes', opts: ['Viernes', 'Viérnes'], a: 0 },
            { say: 'Noviembre', opts: ['Noviembre', 'Noviémbre'], a: 0 },
            { say: 'Después', opts: ['Despues', 'Después'], a: 1 },
            { say: 'Tía', opts: ['Tia', 'Tía'], a: 1 },
            { say: 'Demasiado', opts: ['Demasiado', 'Demasíado'], a: 0 },
            { say: 'Asturias', opts: ['Asturias', 'Asturías'], a: 0 }
          ] },
        { type: 'fill', id: 'b4', n: '4', listen: true,
          title: { es: 'Escucha y completa con IA o con ÍA.', ko: '듣고 IA 또는 ÍA로 완성하세요.', en: 'Listen and complete with IA or ÍA.' },
          bank: ['ia', 'ía'],
          items: [
            { q: 'Famil___', a: ['ia'] },
            { q: 'Histor___', a: ['ia'] },
            { q: 'Env___', a: ['ía'] },
            { q: 'Anunc___', a: ['ia'] },
            { q: 'Tranv___', a: ['ía'] },
            { q: 'Fer___', a: ['ia'] },
            { q: 'Rub___', a: ['ia'] },
            { q: 'Vac___', a: ['ía'] },
            { q: 'Lluv___', a: ['ia'] },
            { q: 'Cafeter___', a: ['ía'] },
            { q: 'Fotograf___', a: ['ía'] },
            { q: 'Ind___', a: ['ia'] }
          ] },
        { type: 'choice', id: 'b5', n: '5', listen: true,
          title: { es: '¿Qué oyes?', ko: '무엇이 들리나요?', en: 'What do you hear?' },
          items: [
            { say: 'Ahí', opts: ['Hay', 'Ahí'], a: 1 },
            { say: 'Rey', opts: ['Rey', 'Reí'], a: 0 },
            { say: 'Leí', opts: ['Ley', 'Leí'], a: 1 },
            { say: 'Hoy', opts: ['Hoy', 'Oí'], a: 0 }
          ] }
      ] },

    /* ───────────── C ───────────── */
    { id: 'c', tag: 'C', name: 'Léxico',
      sub: { es: 'Las estaciones del año, el tiempo y actividades', ko: '계절, 날씨와 활동', en: 'Seasons, weather and activities' },
      blocks: [
        { type: 'match', id: 'c1', n: '1a',
          title: { es: 'Relaciona las imágenes con las palabras y con las estaciones del año.', ko: '그림과 단어를 연결하세요. (어떤 계절과 어울리는지도 생각해 보세요)', en: 'Match the pictures with the words (and think of the matching seasons).' },
          left: ['A ☁️', 'B ☀️', 'C 🌨️', 'D 🌧️', 'E ⚡', 'F 💨', 'G 🌫️', 'H 🌡️🔴', 'I 🌡️⚪'],
          right: ['sol', 'nubes', 'lluvia', 'niebla', 'nieve', 'tormenta', 'viento', 'altas temperaturas', 'bajas temperaturas'],
          a: [1, 0, 4, 2, 5, 6, 3, 7, 8] },
        { type: 'match', id: 'c2', n: '1b',
          title: { es: 'Relaciona las estaciones del año con las fotos.', ko: '계절과 사진을 연결하세요.', en: 'Match the seasons with the photos.' },
          left: ['1 🌳🌼 Árbol verde con flores', '2 🍂 Árbol sin hojas, hojas naranjas en el suelo', '3 🌳☀️ Árbol verde, cielo amarillo', '4 ❄️ Árbol con nieve'],
          right: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
          a: [0, 2, 1, 3] },
        { type: 'fill', id: 'c3', n: '1c',
          title: { es: 'Lee y completa el diálogo con las palabras que faltan.', ko: '읽고 빠진 단어로 대화를 완성하세요.', en: 'Read and complete the dialogue with the missing words.' },
          bank: ['nublado', 'tormenta', 'mal', 'bueno', 'tarde', 'llover', 'meteorológico', 'Y si'],
          items: [
            { q: 'ALMUDENA: ¿___ vamos a hacer 30 kilómetros?', a: ['Y si'] },
            { q: 'PATRICIA: No sé. Hace ___ tiempo.', a: ['mal'] },
            { q: 'ALMUDENA: Está ___, pero no va a ___.', a: ['nublado', 'llover'] },
            { q: 'PATRICIA: Ayer el servicio ___ habló de ___.', a: ['meteorológico', 'tormenta'] },
            { q: 'ALMUDENA: Sí, pero por la ___. Ahora el tiempo es ___. ¿Salimos?', a: ['tarde', 'bueno'] }
          ] },
        { type: 'dialog', title: { es: 'Diálogo completo', ko: '전체 대화', en: 'Full dialogue' },
          lines: [
            { who: 'Almudena', es: '¿Y si vamos a hacer 30 kilómetros?', ko: '30킬로미터 걸으러 가는 건 어때?', en: 'What if we go and do 30 kilometres?' },
            { who: 'Patricia', es: 'No sé. Hace mal tiempo.', ko: '글쎄. 날씨가 나빠.', en: "I don't know. The weather is bad." },
            { who: 'Almudena', es: 'Está nublado, pero no va a llover.', ko: '흐리긴 하지만 비는 안 올 거야.', en: "It's cloudy, but it isn't going to rain." },
            { who: 'Patricia', es: 'Ayer el servicio meteorológico habló de tormenta.', ko: '어제 기상청에서 폭풍우가 온다고 했어.', en: 'Yesterday the weather service talked about a storm.' },
            { who: 'Almudena', es: 'Sí, pero por la tarde. Ahora el tiempo es bueno. ¿Salimos?', ko: '응, 하지만 오후에. 지금은 날씨가 좋아. 나갈까?', en: 'Yes, but in the afternoon. The weather is good now. Shall we go?' },
            { who: 'Patricia', es: 'Vale. Pero tenemos que volver pronto.', ko: '좋아. 하지만 일찍 돌아와야 해.', en: 'OK. But we have to come back early.' }
          ] },
        { type: 'reading', title: { es: 'Juego de lógica', ko: '논리 퍼즐', en: 'Logic puzzle' },
          paras: [
            { es: '- Paco va a ir a una ciudad europea en avión, pero no con Lourdes.', ko: '파코는 비행기로 유럽 도시에 가지만 루르데스와는 아니다.', en: 'Paco is going to a European city by plane, but not with Lourdes.' },
            { es: '- Fernando y Esther van a ir en autobús y se van a alojar en un camping.', ko: '페르난도와 에스테르는 버스로 가서 캠핑장에 묵는다.', en: 'Fernando and Esther are going by bus and will stay at a campsite.' },
            { es: '- Lourdes va a ir a la montaña en Semana Santa y se va a alojar en una casa rural.', ko: '루르데스는 부활절 주간에 산에 가서 시골 민박에 묵는다.', en: 'Lourdes is going to the mountains at Easter and will stay in a country house.' },
            { es: '- Rosana va a salir en Navidad para ver museos.', ko: '로사나는 크리스마스에 박물관을 보러 간다.', en: 'Rosana is going away at Christmas to see museums.' },
            { es: '- Enrique va a salir para hacer excursiones y practicar deporte.', ko: '엔리케는 소풍과 운동을 하러 간다.', en: 'Enrique is going away to go hiking and do sport.' },
            { es: 'En el cuadro ya sabemos: una pareja se aloja <b>en un hotel</b>; otra pareja <b>va a la playa a descansar en verano</b>; la tercera va <b>en bicicleta</b>.', ko: '표에 이미 나와 있는 것: 한 커플은 호텔에 묵고, 다른 커플은 여름에 해변으로 쉬러 가고, 세 번째 커플은 자전거로 간다.', en: 'Already in the table: one couple stays in a hotel; another goes to the beach to rest in summer; the third goes by bike.' }
          ] },
        { type: 'fill', id: 'c4', n: '2a',
          title: { es: 'Tres parejas van a salir. Lee la información y completa el cuadro.', ko: '세 커플이 여행을 갑니다. 정보를 읽고 표를 완성하세요.', en: 'Three couples are going away. Read the information and complete the table.' },
          bank: ['Rosana', 'Enrique', 'Navidad', 'Semana Santa', 'avión', 'autobús', 'camping', 'casa rural', 'montaña', 'museos'],
          items: [
            { q: '¿Quiénes? Paco y ___ · ¿Qué van a hacer? Ver ___ en una ciudad europea · ¿Cuándo? En ___ · ¿Cómo? En ___ · ¿Dónde se alojan? En un hotel.', a: ['Rosana', 'museos', 'Navidad', 'avión'] },
            { q: '¿Quiénes? Fernando y Esther · Van a la playa a descansar · En verano · ¿Cómo? En ___ · ¿Dónde se alojan? En un ___.', a: ['autobús', 'camping'] },
            { q: '¿Quiénes? Lourdes y ___ · ¿Qué van a hacer? Ir a la ___ a hacer excursiones y deporte · ¿Cuándo? En ___ · ¿Cómo? En bicicleta · ¿Dónde se alojan? En una ___.', a: ['Enrique', 'montaña', 'Semana Santa', 'casa rural'] }
          ] },
        { type: 'speak', n: '2b',
          title: { es: 'Propón una excursión para el fin de semana: medio de transporte, alojamiento, actividad.', ko: '주말 여행을 제안하세요: 교통수단, 숙소, 활동.', en: 'Suggest a weekend trip: transport, accommodation, activity.' },
          prompt: { ko: '“Vamos a ir a… y nos vamos a alojar en…”, “Vamos a visitar…”를 사용해 제안해 보세요.', en: 'Use “Vamos a ir a… y nos vamos a alojar en…”, “Vamos a visitar…”.' },
          model: [ { who: 'A', es: 'Vamos a ir a Segovia en tren y nos vamos a alojar en un hotel. Vamos a visitar el acueducto y el alcázar.' }, { who: 'B', es: '¡Qué buena idea! ¿Y si comemos cochinillo?' } ] }
      ] },

    /* ───────────── D1 ───────────── */
    { id: 'd1', tag: 'D', name: 'Gramática',
      sub: { es: 'IR A + infinitivo, TENER QUE + infinitivo. MUY, MUCHO', ko: 'IR A + 동사원형, TENER QUE + 동사원형, MUY/MUCHO', en: 'IR A + infinitive, TENER QUE + infinitive, MUY/MUCHO' },
      blocks: [
        { type: 'note', es: '<b>1a. Observa.</b> Para hablar del futuro: <i>Mañana voy a salir de viaje.</i>', ko: '미래를 말할 때: ir 동사 현재형 + a + 동사원형 (“~할 것이다”).', en: 'To talk about the future: present of ir + a + infinitive (“going to…”).' },
        { type: 'table', title: { es: 'IR A + infinitivo', ko: 'IR A + 동사원형', en: 'IR A + infinitive' },
          head: ['', 'IR', '', 'infinitivo'],
          rows: [ ['Yo', 'voy', 'a', 'entrar'], ['Tú', 'vas', 'a', 'salir'], ['Él / ella / usted', 'va', 'a', 'estudiar'], ['Nosotros/as', 'vamos', 'a', 'cenar'], ['Vosotros/as', 'vais', 'a', '…'], ['Ellos / ellas / ustedes', 'van', 'a', '…'] ] },
        { type: 'fill', id: 'd1', n: '1b',
          title: { es: 'Forma frases.', ko: '문장을 만드세요. (IR A + 동사원형)', en: 'Make sentences (IR A + infinitive).' },
          items: [
            { q: 'Yo / estudiar / Medicina. → Voy a estudiar Medicina.<br>Nosotros / cenar / en un restaurante. → ___', a: ['Vamos a cenar en un restaurante.|Nosotros vamos a cenar en un restaurante.'] },
            { q: '¿Cuándo / tú / volver / a casa? → ___', a: ['¿Cuándo vas a volver a casa?|¿Cuándo vas a volver tú a casa?'] },
            { q: '¿Vosotros / ir / al cine? → ___', a: ['¿Vais a ir al cine?|¿Vosotros vais a ir al cine?'] },
            { q: 'Mañana / nosotros / no / trabajar. → ___', a: ['Mañana no vamos a trabajar.|Mañana nosotros no vamos a trabajar.'] },
            { q: 'Esta noche / ella / no / salir. → ___', a: ['Esta noche ella no va a salir.|Esta noche no va a salir.'] },
            { q: 'Mañana / yo / ir / al cine. → ___', a: ['Mañana voy a ir al cine.|Mañana yo voy a ir al cine.'] }
          ] },
        { type: 'fill', id: 'd2', n: '1c',
          title: { es: 'Completa las frases con las expresiones.', ko: '표현을 사용해 문장을 완성하세요.', en: 'Complete the sentences with the expressions.' },
          bank: ['se va a tomar unas semanas de descanso', 'vamos a volver', 'van a invitar', 'voy a cerrar', 'se van a caer', 'voy a llamar'],
          items: [
            { q: 'Está lloviendo, ___ las ventanas.', a: ['voy a cerrar'] },
            { q: 'En mayo ___ a nuestro país.', a: ['vamos a volver'] },
            { q: 'Se puso enfermo por trabajar demasiado y ___.', a: ['se va a tomar unas semanas de descanso'] },
            { q: 'Los niños están muy cerca de la piscina, ___.', a: ['se van a caer'] },
            { q: 'Virginia y Adela ___ a todas sus amigas a la fiesta.', a: ['van a invitar'] },
            { q: 'Ya son las seis de la tarde, ___ a un taxi para volver a casa.', a: ['voy a llamar'] }
          ] },
        { type: 'table', title: { es: '2a. Observa: MUY y MUCHO', ko: 'MUY와 MUCHO', en: 'MUY and MUCHO' },
          head: ['MUY', 'MUCHO'],
          rows: [ ['muy + adjetivo / adverbio', 'verbo + mucho'], ['La terraza es <i>muy</i> alegre.', 'Trabajas <i>mucho</i>.'], ['Estoy <i>muy</i> bien.', ''] ],
          note: { ko: 'muy는 형용사·부사 앞에, mucho는 동사 뒤에 옵니다.', en: 'muy goes before adjectives/adverbs; mucho goes after verbs.' } },
        { type: 'choice', id: 'd3', n: '2b',
          title: { es: 'Completa con MUY o MUCHO.', ko: 'MUY 또는 MUCHO로 완성하세요.', en: 'Complete with MUY or MUCHO.' },
          items: [
            { q: 'Te quiero ___ .', opts: ['muy', 'mucho'], a: 1 },
            { q: 'Mi abuela está ___ triste.', opts: ['muy', 'mucho'], a: 0 },
            { q: 'Me gusta ___ esa película.', opts: ['muy', 'mucho'], a: 1 },
            { q: 'La temperatura es ___ alta.', opts: ['muy', 'mucho'], a: 0 },
            { q: 'Anoche llovió ___ en todo el país.', opts: ['muy', 'mucho'], a: 1 },
            { q: 'Todos mis amigos salen ___ por las noches.', opts: ['muy', 'mucho'], a: 1 },
            { q: 'Llegó ___ tarde a la cita.', opts: ['muy', 'mucho'], a: 0 }
          ] },
        { type: 'note', es: '<b>3a. Observa.</b> Para expresar obligación o necesidad: <i>El semáforo está rojo, tengo que parar. Vamos a salir, tenemos que comprar.</i>', ko: '의무나 필요를 표현할 때: tener 현재형 + que + 동사원형 (“~해야 한다”).', en: 'To express obligation or need: present of tener + que + infinitive (“have to…”).' },
        { type: 'table', title: { es: 'TENER QUE + infinitivo', ko: 'TENER QUE + 동사원형', en: 'TENER QUE + infinitive' },
          head: ['', 'TENER', '', 'infinitivo'],
          rows: [ ['Yo', 'tengo', 'que', 'ir'], ['Tú', 'tienes', 'que', 'parar'], ['Él / ella / usted', 'tiene', 'que', 'beber'], ['Nosotros/as', 'tenemos', 'que', 'comprar'], ['Vosotros/as', 'tenéis', 'que', '…'], ['Ellos / ellas / ustedes', 'tienen', 'que', '…'] ] },
        { type: 'fill', id: 'd4', n: '3b',
          title: { es: 'Completa las frases con TENER QUE.', ko: 'TENER QUE로 문장을 완성하세요.', en: 'Complete the sentences with TENER QUE.' },
          items: [
            { q: 'Si vamos de viaje, ___ ver el tiempo.', a: ['tenemos que'] },
            { q: 'Mis hijos ___ estudiar el fin de semana.', a: ['tienen que'] }
          ] }
      ] },

    /* ───────────── D2 ───────────── */
    { id: 'd2', tag: 'D', name: 'Gramática',
      sub: { es: 'El Imperativo', ko: '명령법', en: 'The imperative' },
      blocks: [
        { type: 'table', title: { es: '4a. Observa: IMPERATIVO', ko: '명령법 (규칙 동사)', en: 'Imperative (regular verbs)' },
          head: ['', 'Hablar', 'Beber', 'Vivir'],
          rows: [ ['Tú', 'habla', 'bebe', 'vive'], ['Usted', 'hable', 'beba', 'viva'], ['Vosotros, as', 'hablad', 'bebed', 'vivid'], ['Ustedes', 'hablen', 'beban', 'vivan'] ],
          note: { ko: 'tú형 = 3인칭 단수 현재형, vosotros형 = 동사원형의 -r → -d. usted/ustedes는 -ar → -e/-en, -er/-ir → -a/-an.', en: 'tú = 3rd person singular present; vosotros = infinitive -r → -d; usted/ustedes: -ar → -e/-en, -er/-ir → -a/-an.' } },
        { type: 'fill', id: 'd5', n: '4b',
          title: { es: 'Completa los cuadros con las formas del Imperativo.', ko: '명령형으로 표를 완성하세요.', en: 'Complete the tables with the imperative forms.' },
          items: [
            { q: 'Entrar → tú: entra · usted: ___ · vosotros: ___ · ustedes: ___', a: ['entre', 'entrad', 'entren'] },
            { q: 'Leer → tú: ___ · usted: ___ · vosotros: leed · ustedes: ___', a: ['lee', 'lea', 'lean'] },
            { q: 'Abrir → tú: ___ · usted: ___ · vosotros: ___ · ustedes: abran', a: ['abre', 'abra', 'abrid'] }
          ] },
        { type: 'fill', id: 'd6', n: '5a',
          title: { es: 'Completa el cuadro.', ko: '표를 완성하세요. (불규칙 명령형)', en: 'Complete the table (irregular imperatives).' },
          items: [
            { q: 'Hacer → haz · haga · haced · ___', a: ['hagan'] },
            { q: 'Poner → pon · ___ · poned · pongan', a: ['ponga'] },
            { q: 'Decir → di · diga · ___ · digan', a: ['decid'] },
            { q: 'Tener → ten · tenga · tened · ___', a: ['tengan'] },
            { q: 'Salir → ___ · salga · salid · salgan', a: ['sal'] },
            { q: 'Ir → ve · vaya · id · ___', a: ['vayan'] },
            { q: 'Venir → ___ · venga · ___ · vengan', a: ['ven', 'venid'] }
          ] },
        { type: 'fill', id: 'd7', n: '5b',
          title: { es: 'Completa las frases con las formas del Imperativo.', ko: '명령형으로 문장을 완성하세요.', en: 'Complete the sentences with the imperative forms.' },
          items: [
            { q: 'Señora Gómez, escriba su nombre aquí, por favor. (ejemplo)<br>Mónica, ___ la ventana, por favor.', a: ['abre'], hint: 'abrir/tú' },
            { q: 'Antes de empezar, ___ las frases.', a: ['leed'], hint: 'leer/vosotros' },
            { q: 'Sonia y Laura, ___ por favor.', a: ['venid|vengan'], hint: 'venir' },
            { q: 'Señor, ___ por esta puerta.', a: ['entre'], hint: 'entrar' },
            { q: '___ los deberes.', a: ['Haced'], hint: 'hacer/vosotros' },
            { q: '___ a todas las preguntas.', a: ['Respondan'], hint: 'responder/ustedes' },
            { q: '___ a tu madre en la cocina.', a: ['Ayuda'], hint: 'ayudar/tú' },
            { q: 'Aquí no puedes estar, ___ ahora mismo.', a: ['sal'], hint: 'salir' },
            { q: '___ a aquella mesa y ___ a aquel señor.', a: ['Vaya', 'pregunte'], hint: 'ir - preguntar/usted' },
            { q: '___ las cajas en el suelo, por favor.', a: ['Poned'], hint: 'poner/vosotros' }
          ] },
        { type: 'fill', id: 'd8', n: '5c',
          title: { es: 'Escribe las instrucciones en imperativo debajo de cada dibujo.', ko: '각 표지판 아래에 명령형으로 지시문을 쓰세요. (tú형)', en: 'Write the instructions in the imperative under each sign (tú form).' },
          bank: ['Usar el cinturón de seguridad.', 'Ir todo recto.', 'Parar.', 'Tener cuidado, zona escolar.', 'Reducir la velocidad.'],
          items: [
            { q: '1 ⚠️🚸 (señal de niños) → ___', a: ['Ten cuidado, zona escolar.|Ten cuidado, zona escolar|Ten cuidado|Tenga cuidado, zona escolar.|Tenga cuidado'] },
            { q: '2 🛑 STOP → ___', a: ['Para.|Para|Pare.|Pare'] },
            { q: '3 🔵 (cinturón de seguridad) → ___', a: ['Usa el cinturón de seguridad.|Usa el cinturón de seguridad|Use el cinturón de seguridad.|Use el cinturón de seguridad'] },
            { q: '4 🔴 80 → ___', a: ['Reduce la velocidad.|Reduce la velocidad|Reduzca la velocidad.|Reduzca la velocidad'] },
            { q: '5 ⬆️ → ___', a: ['Ve todo recto.|Ve todo recto|Vaya todo recto.|Vaya todo recto'] }
          ] },
        { type: 'fill', id: 'd9', n: '6',
          title: { es: 'Completa el texto con las palabras que faltan.', ko: '빠진 말로 글을 완성하세요.', en: 'Complete the text with the missing words.' },
          bank: ['tengo que', 'tenemos que', 'recuerda', 'voy a', 'termina'],
          items: [
            { q: 'Mercedes, no te puedo esperar, ___ ir a una reunión importante.', a: ['tengo que'] },
            { q: '___ tú sola el trabajo, por favor, porque ___ volver tarde.', a: ['Termina', 'voy a'] },
            { q: '___, mañana es nuestro gran día y ___ presentar el proyecto. Andrés', a: ['Recuerda', 'tenemos que'] }
          ] }
      ] },

    /* ───────────── E ───────────── */
    { id: 'e', tag: 'E', name: 'Expresión oral',
      sub: { es: 'Hablar de planes y proponer actividades', ko: '계획 말하기와 활동 제안하기', en: 'Talking about plans and suggesting activities' },
      blocks: [
        { type: 'table', title: { es: 'Hacer planes', ko: '계획·의도·바람 표현', en: 'Plans, intentions, wishes' },
          head: ['', ''],
          rows: [ ['Hacer planes', 'voy a + infinitivo'], ['Expresar intenciones', 'pienso + infinitivo'], ['Deseos', 'quiero + infinitivo'] ] },
        { type: 'open', id: 'e1', n: '1a',
          title: { es: 'Haz una lista de qué cosas quieres hacer en el futuro.', ko: '앞으로 하고 싶은 일의 목록을 만드세요.', en: 'Make a list of things you want to do in the future.' },
          items: [
            { q: 'Planes (voy a…)', model: 'Voy a estudiar en la universidad.' },
            { q: 'Intenciones (pienso…)', model: 'Pienso aprender a conducir.' },
            { q: 'Deseos (quiero…)', model: 'Yo quiero ir a vivir al extranjero y voy a buscar un trabajo…' }
          ] },
        { type: 'table', title: { es: 'Expresiones de tiempo futuro', ko: '미래 시간 표현', en: 'Future time expressions' },
          head: ['', ''],
          rows: [ ['hoy - mañana - pasado mañana', '오늘 - 내일 - 모레 / today - tomorrow - the day after tomorrow'], ['la semana / el mes / el año que viene (próximo/a)', '다음 주 / 다음 달 / 내년 / next week, month, year'], ['dentro de una hora / semana / mes / año', '한 시간 / 일주일 / 한 달 / 일 년 후에 / in an hour, a week…'] ] },
        { type: 'speak', n: '1b',
          title: { es: 'Ahora habla con tu compañero. A ver si tenéis proyectos parecidos.', ko: '이제 짝과 이야기하세요. 비슷한 계획이 있는지 보세요.', en: 'Now talk to your partner. See if you have similar plans.' },
          prompt: { ko: '미래 시간 표현을 사용해 서로의 계획을 물어보세요.', en: "Ask about each other's plans using future time expressions." },
          model: [ { who: 'A', es: 'Tú no estás casado, ¿no?' }, { who: 'B', es: 'No.' }, { who: 'A', es: '¿Y piensas casarte?' }, { who: 'B', es: 'Sí, un día. Dentro de mucho tiempo.' } ] },
        { type: 'speak', n: '1c',
          title: { es: 'Explica a la clase qué va a hacer tu compañero.', ko: '짝이 무엇을 할 것인지 반 친구들에게 설명하세요.', en: 'Tell the class what your partner is going to do.' },
          prompt: { ko: '3인칭(va a…, piensa…, quiere…)으로 발표하세요.', en: 'Use the third person (va a…, piensa…, quiere…).' },
          model: [ { who: 'A', es: 'Mi compañera va a estudiar Medicina. El año que viene piensa viajar a México y quiere aprender a bailar salsa.' } ] },
        { type: 'open', id: 'e2', n: '2a',
          title: { es: 'Da instrucciones a estas personas para cambiar su vida.', ko: '이 사람들이 생활을 바꾸도록 명령형으로 조언하세요.', en: 'Give these people instructions to change their lives.' },
          items: [
            { q: 'A 😩💻 Un hombre trabaja demasiado en la oficina.', model: 'Trabaja menos, descansa y sal con tus amigos.' },
            { q: 'B 🛋️😎 Un chico está todo el día en el sillón sin hacer nada.', model: 'Levántate, haz deporte y busca un trabajo.' }
          ] },
        { type: 'table', title: { es: 'La agenda', ko: '일정표', en: 'The diary' },
          head: ['', 'Mañana', 'Tarde', 'Noche'],
          rows: [ ['Lunes', 'Felicitar a Elena', '', ''], ['Martes', 'Médico con mamá', '', ''], ['Miércoles', 'Comprar el sofá', '', 'Cena Sr. López'], ['Jueves', '', 'Profesor de Iván', ''], ['Viernes', 'Examen conducir', '', ''], ['Sábado', '', '', 'Fiesta Hugo'], ['Domingo', '', 'Iván y Elena. Cine', ''] ] },
        { type: 'fill', id: 'e3', n: '2b',
          title: { es: 'Mira la agenda y di lo que tiene que hacer esta persona durante la semana.', ko: '일정표를 보고 이 사람이 이번 주에 해야 할 일을 말하세요.', en: 'Look at the diary and say what this person has to do during the week.' },
          items: [
            { q: 'El lunes por la mañana tiene que ___ a Elena.', a: ['felicitar'] },
            { q: 'El martes por la mañana tiene que ir al ___ con su madre.', a: ['médico'] },
            { q: 'El miércoles por la mañana tiene que ___ el sofá.', a: ['comprar'] },
            { q: 'El miércoles por la noche tiene que ___ con el señor López.', a: ['cenar'] },
            { q: 'El jueves por la tarde tiene que hablar con el ___ de Iván.', a: ['profesor'] },
            { q: 'El viernes por la mañana tiene el ___ de conducir.', a: ['examen'] },
            { q: 'El sábado por la noche tiene que ir a la ___ de Hugo.', a: ['fiesta'] },
            { q: 'El domingo por la tarde tiene que ir al ___ con Iván y Elena.', a: ['cine'] }
          ] },
        { type: 'open', id: 'e4', n: '2c',
          title: { es: 'Y tú, ¿qué tienes que hacer esta semana?', ko: '그럼 너는 이번 주에 무엇을 해야 하나요?', en: 'And you, what do you have to do this week?' },
          items: [ { q: '¿Qué tienes que hacer esta semana?', model: 'El lunes tengo que estudiar para el examen de español y el jueves tengo que ir al dentista.' } ] },
        { type: 'table', title: { es: 'Proponer y responder', ko: '제안하기와 대답하기', en: 'Suggesting and replying' },
          head: ['Proponer', 'Responder'],
          rows: [ ['¿Por qué no…?', 'Muy bien. / ¡Estupendo!'], ['¿Y si…?', '¡Qué buena / gran idea!'], ['¿Qué tal si…?', 'Mejor vamos a… / No, no puedo. Es que…'] ] },
        { type: 'speak', n: '3',
          title: { es: 'Vamos a organizar una actividad de fin de curso. Elige una, piensa qué se puede hacer y proponlo en la clase.', ko: '학년 말 활동을 계획해 봅시다. 하나를 골라 무엇을 할 수 있을지 생각하고 반에 제안하세요.', en: "Let's organise an end-of-year activity. Choose one, think about what you can do and suggest it to the class." },
          prompt: { ko: '위 표의 제안·대답 표현을 사용하세요.', en: 'Use the suggesting/replying expressions above.' },
          model: [ { who: 'A', es: '¿Qué tal si hacemos una excursión a la montaña?' }, { who: 'B', es: 'No, no puedo. Es que no tengo bicicleta. Mejor vamos a la playa.' }, { who: 'A', es: '¿Y si hacemos una fiesta en la playa?' }, { who: 'B', es: '¡Qué buena idea!' } ] }
      ] },

    /* ───────────── MUNDO HISPANO ───────────── */
    { id: 'mundo', tag: '', name: 'Mundo hispano',
      sub: { es: 'El Camino de Santiago', ko: '산티아고 순례길', en: 'The Way of St James' },
      blocks: [
        { type: 'reading', title: { es: '1. Lee el texto. El Camino de Santiago', ko: '글을 읽으세요. 산티아고 순례길', en: 'Read the text. The Way of St James' },
          paras: [
            { es: 'En España hay un museo de más de ochocientos kilómetros por el norte de la Península Ibérica. Es el Camino de Santiago. A principios del siglo IX se descubrió aquí el sepulcro del Apóstol Santiago y desde entonces es lugar de peregrinación para millones de europeos.', ko: '스페인에는 이베리아 반도 북부를 가로지르는 800km가 넘는 박물관이 있습니다. 바로 산티아고 순례길입니다. 9세기 초 이곳에서 사도 산티아고(야고보)의 무덤이 발견되었고, 그 후로 수백만 유럽인의 순례지가 되었습니다.', en: "In Spain there is a museum more than 800 km long across the north of the Iberian Peninsula: the Way of St James. In the early 9th century the tomb of the Apostle James was discovered here, and since then it has been a place of pilgrimage for millions of Europeans." },
            { es: 'Hoy es un atractivo turístico más de Galicia y del norte de España. En el año 2000 fueron a Santiago más de cincuenta mil personas de cien países diferentes. Pero en 2001 se superó esta cifra en un 15-20%.', ko: '오늘날 이곳은 갈리시아와 스페인 북부의 또 하나의 관광 명소입니다. 2000년에는 100개국에서 5만 명이 넘는 사람이 산티아고에 갔고, 2001년에는 이 숫자를 15~20% 넘어섰습니다.', en: 'Today it is another tourist attraction of Galicia and northern Spain. In 2000 more than 50,000 people from 100 countries went to Santiago. In 2001 this figure was exceeded by 15–20%.' },
            { es: 'Se llama peregrino a quien recorre al menos 100 kilómetros andando, a caballo o en bicicleta por el Camino de Santiago. El objetivo es llegar a la Catedral de Compostela y ver al Apóstol Santiago. Pero una vez allí, además, se puede disfrutar de uno de los centros más importantes de arte románico, gótico, renacentista y barroco del mundo. A lo largo de todo el camino los viajeros encuentran buenos alojamientos y restaurantes donde comer las especialidades de la cocina regional de las ciudades por las que se pasa. A la belleza de los monumentos se une la de los paisajes.', ko: '산티아고 길을 걸어서, 말을 타고, 또는 자전거로 최소 100km 이상 가는 사람을 순례자라고 합니다. 목표는 콤포스텔라 대성당에 도착해 사도 산티아고를 보는 것입니다. 그곳에서는 세계에서 가장 중요한 로마네스크·고딕·르네상스·바로크 예술의 중심지 중 하나도 즐길 수 있습니다. 길 곳곳에서 여행자들은 좋은 숙소와, 지나가는 도시의 향토 요리를 먹을 수 있는 식당을 만납니다. 기념물의 아름다움에 풍경의 아름다움이 더해집니다.', en: 'A pilgrim is someone who travels at least 100 km on foot, on horseback or by bike along the Way. The goal is to reach the Cathedral of Compostela and see the Apostle James. Once there, you can also enjoy one of the world’s most important centres of Romanesque, Gothic, Renaissance and Baroque art. All along the way travellers find good accommodation and restaurants serving the regional specialities of the towns they pass through. The beauty of the landscapes adds to that of the monuments.' }
          ] },
        { type: 'choice', id: 'm1', n: '2',
          title: { es: 'Responde a las preguntas.', ko: '질문에 답하세요.', en: 'Answer the questions.' },
          items: [
            { q: '¿Qué es un peregrino?', opts: ['Una persona que recorre al menos 100 km andando, a caballo o en bicicleta por el Camino.', 'Un turista que visita la catedral en autobús.', 'Un guía del museo de Santiago.'], a: 0 },
            { q: '¿Cuántos kilómetros tiene el Camino de Santiago?', opts: ['Unos 100 kilómetros.', 'Más de ochocientos kilómetros.', 'Cincuenta mil kilómetros.'], a: 1 },
            { q: '¿Cuándo se descubrió el sepulcro del Apóstol Santiago?', opts: ['En el año 2000.', 'A finales del siglo XIX.', 'A principios del siglo IX.'], a: 2 },
            { q: '¿Cuántos peregrinos hicieron el camino en el año 2000? ¿Y en el 2001?', opts: ['En 2000, más de 50.000; en 2001, un 15-20% más.', 'En 2000, 100; en 2001, 120.', 'En 2000, un millón; en 2001, la mitad.'], a: 0 }
          ] },
        { type: 'open', id: 'm2', n: '3',
          title: { es: 'En tu opinión, ¿qué es lo más interesante del Camino de Santiago?', ko: '당신 생각에 산티아고 순례길에서 가장 흥미로운 것은 무엇인가요?', en: 'In your opinion, what is the most interesting thing about the Way of St James?' },
          items: [ { q: '¿Qué es lo más interesante del Camino de Santiago?', model: 'Para mí lo más interesante son los paisajes y conocer a personas de muchos países diferentes.' } ] },
        { type: 'speak', n: '4',
          title: { es: 'Piensa en una ruta turística de tu país; explica cómo es y propón a la clase hacerla.', ko: '자기 나라의 관광 코스를 하나 생각해서 어떤 곳인지 설명하고 반 친구들에게 함께 가자고 제안하세요.', en: 'Think of a tourist route in your country; explain what it is like and suggest doing it to the class.' },
          prompt: { ko: '예: 제주 올레길, 지리산 둘레길 등. ¿Por qué no…? / ¿Qué tal si…?를 사용하세요.', en: 'E.g. the Jeju Olle Trail. Use ¿Por qué no…? / ¿Qué tal si…?' },
          model: [ { who: 'A', es: 'En Corea hay una ruta muy bonita: el Olle de Jeju. Tiene más de 400 kilómetros por la costa de la isla. ¿Qué tal si vamos en primavera y hacemos dos o tres rutas andando?' } ] }
      ] },

    /* ───────────── SÍNTESIS ───────────── */
    { id: 'sintesis', tag: '', name: 'Síntesis',
      sub: { es: 'A B C D E', ko: '종합 정리', en: 'Unit review' },
      blocks: [
        { type: 'note', es: '<b>1. Observa la imagen.</b> Una calle con la tienda «Lotería MARCOS». A la izquierda el cielo está nublado; a la derecha hace sol.<br>A: dos chicas con maletas en la parada del autobús 110. B: una chica ayuda a una señora mayor. C: una pareja de turistas mira un plano. D: un hombre sale corriendo de la lotería con un billete. E: una mujer vende paraguas y un grupo de turistas con cámaras.', ko: '그림 설명: “Lotería MARCOS” 가게가 있는 거리. 왼쪽 하늘은 흐리고 오른쪽은 해가 납니다. A 110번 버스 정류장의 여행 가방을 든 두 여자, B 할머니를 돕는 여자, C 지도를 보는 관광객 커플, D 복권을 들고 뛰어나오는 남자, E 우산 파는 여자와 카메라를 든 관광객 무리.', en: 'Picture: a street with the shop “Lotería MARCOS”. On the left the sky is cloudy; on the right it is sunny. A two girls with suitcases at bus stop 110; B a girl helping an old lady; C a tourist couple looking at a map; D a man running out of the lottery shop with a ticket; E a woman selling umbrellas and a group of tourists with cameras.' },
        { type: 'speak', n: '1a',
          title: { es: 'Describe el tiempo que hace.', ko: '날씨를 묘사하세요.', en: 'Describe the weather.' },
          prompt: { ko: 'Hace…, Está…, Hay… 표현을 사용하세요.', en: 'Use Hace…, Está…, Hay….' },
          model: [ { who: 'A', es: 'A la izquierda está nublado y hace frío. A la derecha hace sol y buen tiempo.' } ] },
        { type: 'speak', n: '1b',
          title: { es: 'Elige uno de los personajes, descríbelo e imagina qué planes tiene, qué va a hacer.', ko: '인물 한 명을 골라 묘사하고, 어떤 계획이 있고 무엇을 할지 상상해 보세요.', en: 'Choose a character, describe them and imagine their plans and what they are going to do.' },
          prompt: { ko: 'IR A + 동사원형을 사용하세요.', en: 'Use IR A + infinitive.' },
          model: [ { who: 'A', es: 'El hombre D es moreno y tiene bigote. Tiene un billete de lotería. Va a ganar mucho dinero y va a viajar por todo el mundo.' } ] },
        { type: 'open', id: 's1', n: '1c',
          title: { es: '¿Qué recomendaciones le das a tu personaje? Escríbelas.', ko: '그 인물에게 어떤 조언을 하겠어요? 써 보세요.', en: 'What advice do you give your character? Write it.' },
          items: [ { q: 'Recomendaciones (imperativo):', model: 'No gastes todo el dinero. Compra una casa y ayuda a tu familia.' } ] },
        { type: 'reading', title: { es: 'Casa La llave', ko: '시골 민박 “카사 라 야베”', en: 'Casa La llave (country house)' },
          paras: [ { es: 'Casa Rural (4 habitaciones). Hontoria - 33593 - Llanes - (Asturias). 985 44 44 22 - 985 40 79 62 (Fax).<br>Casa de piedra del siglo XIX. Vistas de gran belleza. Está cerca de los Picos de Europa y rodeada de hermosas playas.', ko: '시골 민박(방 4개). 아스투리아스 야네스. 19세기 돌집. 아름다운 전망. 피코스 데 에우로파 근처, 아름다운 해변으로 둘러싸여 있음.', en: 'Country house (4 rooms), Llanes, Asturias. 19th-century stone house. Beautiful views. Near the Picos de Europa and surrounded by lovely beaches.' } ] },
        { type: 'open', id: 's2', n: '1d',
          title: { es: 'Escribe un correo electrónico a un amigo o amiga y proponle una salida a esta casa rural.', ko: '친구에게 이메일을 써서 이 시골 민박으로 놀러 가자고 제안하세요.', en: 'Write an email to a friend suggesting a trip to this country house.' },
          items: [ { q: 'Correo electrónico:', model: 'Hola, Marta: ¿Qué tal si vamos el fin de semana que viene a una casa rural en Asturias? Se llama Casa La llave, es una casa de piedra del siglo XIX y está cerca de los Picos de Europa. Podemos hacer excursiones por la montaña y, si hace buen tiempo, ir a la playa. Tenemos que reservar pronto porque solo tiene cuatro habitaciones. ¿Vienes? Un beso, Ana.' } ] }
      ] },

    /* ───────────── YA CONOCES ───────────── */
    { id: 'yaconoces', tag: '', name: 'Ya conoces',
      sub: { es: 'Resumen de la unidad', ko: '단원 요약', en: 'Unit summary' },
      blocks: [
        { type: 'vocab', title: { es: '1a. Las expresiones para hablar del tiempo', ko: '날씨 표현', en: 'Weather expressions' },
          items: [
            { es: 'Hace sol', ko: '해가 난다', en: "It's sunny", e: '☀️' },
            { es: 'Hace calor', ko: '덥다', en: "It's hot", e: '🥵' },
            { es: 'Hace frío', ko: '춥다', en: "It's cold", e: '🥶' },
            { es: 'Hay nubes', ko: '구름이 있다', en: 'There are clouds', e: '☁️' },
            { es: 'Hay viento', ko: '바람이 분다', en: "It's windy", e: '💨' },
            { es: 'Está soleado', ko: '화창하다', en: "It's sunny", e: '🌞' },
            { es: 'Está nublado', ko: '흐리다', en: "It's cloudy", e: '🌥️' },
            { es: 'Nieva', ko: '눈이 온다', en: "It's snowing", e: '❄️' },
            { es: 'Llueve', ko: '비가 온다', en: "It's raining", e: '🌧️' }
          ] },
        { type: 'note', es: '<b>1b. Las expresiones temporales de futuro:</b> mañana - pasado mañana - la semana / el mes / el año que viene (próximo/a) - dentro de una hora / semana / mes / año', ko: '미래 시간 표현: 내일, 모레, 다음 주/달/해, ~후에', en: 'Future time expressions: tomorrow, the day after tomorrow, next week/month/year, in an hour/week…' },
        { type: 'table', title: { es: '1c. Y para proponer actividades', ko: '활동 제안하기', en: 'Suggesting activities' },
          head: ['Proponer', 'Responder'],
          rows: [ ['¿Por qué no…?', 'Muy bien. / ¡Estupendo!'], ['¿Y si…?', '¡Qué buena / gran idea! / Mejor vamos a…'], ['¿Qué tal si…?', 'No, no puedo. Es que…'] ] },
        { type: 'vocab', title: { es: '2a. Las palabras para hablar del tiempo y el clima', ko: '날씨와 기후 어휘', en: 'Weather and climate words' },
          items: [
            { es: 'el sol', ko: '해', en: 'sun', e: '☀️' },
            { es: 'las nubes', ko: '구름', en: 'clouds', e: '☁️' },
            { es: 'la lluvia', ko: '비', en: 'rain', e: '🌧️' },
            { es: 'la niebla', ko: '안개', en: 'fog', e: '🌫️' },
            { es: 'la nieve', ko: '눈', en: 'snow', e: '❄️' },
            { es: 'la tormenta', ko: '폭풍우, 뇌우', en: 'storm', e: '⛈️' },
            { es: 'el viento', ko: '바람', en: 'wind', e: '💨' },
            { es: 'las altas temperaturas', ko: '높은 기온', en: 'high temperatures', e: '🌡️' },
            { es: 'las bajas temperaturas', ko: '낮은 기온', en: 'low temperatures', e: '🧊' }
          ] },
        { type: 'vocab', title: { es: '2b. Las estaciones del año', ko: '계절', en: 'The seasons' },
          items: [
            { es: 'la primavera', ko: '봄', en: 'spring', e: '🌸' },
            { es: 'el verano', ko: '여름', en: 'summer', e: '🏖️' },
            { es: 'el otoño', ko: '가을', en: 'autumn', e: '🍂' },
            { es: 'el invierno', ko: '겨울', en: 'winter', e: '⛄' }
          ] },
        { type: 'vocab', title: { es: '2c. Las palabras para hablar de excursiones y viajes', ko: '소풍과 여행 어휘', en: 'Trips and travel words' },
          items: [
            { es: 'el hotel', ko: '호텔', en: 'hotel', e: '🏨' },
            { es: 'el camping', ko: '캠핑장', en: 'campsite', e: '⛺' },
            { es: 'la casa rural', ko: '시골 민박', en: 'country house', e: '🏡' },
            { es: 'el avión', ko: '비행기', en: 'plane', e: '✈️' },
            { es: 'el tren', ko: '기차', en: 'train', e: '🚆' },
            { es: 'el coche', ko: '자동차', en: 'car', e: '🚗' },
            { es: 'visitar museos', ko: '박물관을 방문하다', en: 'visit museums', e: '🏛️' },
            { es: 'hacer excursiones', ko: '소풍/하이킹을 하다', en: 'go on trips / hikes', e: '🥾' }
          ] },
        { type: 'note', es: '<b>3a.</b> Para hablar de futuro, de planes y proyectos: <b>IR A + infinitivo</b>.<br><b>3b.</b> El contraste entre MUY y MUCHO: <b>MUY + adjetivo / adverbio</b> · <b>verbo + MUCHO</b>.<br><b>3c.</b> Para expresar la necesidad o la obligación: <b>TENER QUE + infinitivo</b>.', ko: '미래·계획: IR A + 동사원형 / MUY + 형용사·부사, 동사 + MUCHO / 의무·필요: TENER QUE + 동사원형', en: 'Future/plans: IR A + infinitive · MUY + adjective/adverb, verb + MUCHO · obligation: TENER QUE + infinitive' },
        { type: 'table', title: { es: '3d. El Imperativo regular', ko: '규칙 명령형', en: 'Regular imperative' },
          head: ['', 'Hablar', 'Beber', 'Vivir'],
          rows: [ ['Tú', 'habla', 'bebe', 'vive'], ['Usted', 'hable', 'beba', 'viva'], ['Vosotros/as', 'hablad', 'bebed', 'vivid'], ['Ustedes', 'hablen', 'beban', 'vivan'] ],
          note: { ko: '책의 표에는 usted형이 “habla”로 잘못 인쇄되어 있어 “hable”로 바로잡았습니다.', en: 'The book’s table misprints the usted form as “habla”; corrected to “hable”.' } },
        { type: 'table', title: { es: '3e. Y el de algunos verbos irregulares', ko: '불규칙 명령형', en: 'Some irregular imperatives' },
          head: ['', 'Hacer', 'Poner', 'Decir', 'Tener', 'Salir', 'Ir', 'Venir'],
          rows: [ ['Tú', 'haz', 'pon', 'di', 'ten', 'sal', 've', 'ven'], ['Usted', 'haga', 'ponga', 'diga', 'tenga', 'salga', 'vaya', 'venga'], ['Vosotros/as', 'haced', 'poned', 'decid', 'tened', 'salid', 'id', 'venid'], ['Ustedes', 'hagan', 'pongan', 'digan', 'tengan', 'salgan', 'vayan', 'vengan'] ] }
      ] }
  ]
});

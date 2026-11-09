ECO.unit({
  num: 2,
  title: '¿Cómo se dice en español?',
  emoji: '🥘🛒',
  pages: '16–25',
  topics: { ko: '가게에서 · 음식 · 명사의 성과 수 · 관사', en: 'In a shop · food · gender and number of nouns · articles' },
  goals: [
    { es: 'Señalar que no se entiende, solicitar la repetición de lo dicho, pedir a alguien que hable más despacio', ko: '이해하지 못했다고 말하기, 다시 말해 달라고 하기, 천천히 말해 달라고 부탁하기', en: 'Say you don’t understand, ask for repetition, ask someone to speak more slowly' },
    { es: 'Llamar la atención, dar las gracias, pedir perdón', ko: '주의 끌기, 감사하기, 사과하기', en: 'Get someone’s attention, say thank you, apologise' },
    { es: 'Manejarse en un comercio', ko: '가게에서 물건 사기', en: 'Get by in a shop' },
    { es: 'Pronunciación: el acento tónico', ko: '발음: 강세', en: 'Pronunciation: word stress' },
    { es: 'Léxico: la comida', ko: '어휘: 음식', en: 'Vocabulary: food' },
    { es: 'Gramática: el género del nombre; el número del nombre y los artículos', ko: '문법: 명사의 성, 명사의 수와 관사', en: 'Grammar: gender of nouns; number of nouns and articles' },
    { es: 'Expresión oral: preguntar por una comida y comprar', ko: '말하기: 음식에 대해 묻고 사기', en: 'Speaking: ask about food and buy it' },
    { es: 'Mundo hispano: el desayuno en España; platos de la gastronomía hispana', ko: '스페인어권 세계: 스페인의 아침 식사, 스페인어권 대표 음식', en: 'Hispanic world: breakfast in Spain; dishes of Hispanic cuisine' }
  ],
  people: { 'Vendedora': 'f', 'Clienta': 'f', 'Cliente': 'm', 'Vendedor': 'm', 'Tú': 'm' },
  sections: [
    /* ---------------- PORTADA ---------------- */
    { id: 'portada', tag: '', name: 'Portada',
      sub: { es: 'En un bar de tapas', ko: '타파스 바에서', en: 'In a tapas bar' },
      blocks: [
        { type: 'note', ko: '두 관광객(빨간 머리 여자와 남자)이 스페인의 한 가게에서 음식을 고르고 있어요. 6컷 만화를 읽고 들으며 빈칸을 채우세요.', en: 'Two tourists (a red-haired woman and a man) are choosing food in a shop in Spain. Read and listen to the 6-panel comic and fill in the gaps.' },
        { type: 'fill', id: 'p1', n: '1', listen: true,
          title: { es: 'Lee, escucha y completa las palabras que faltan en cada viñeta.', ko: '읽고 듣고, 각 컷에 빠진 말을 채우세요.', en: 'Read, listen and complete the missing words in each panel.' },
          bank: ['¿perdón?', 'buenos días', 'por favor', 'lo siento', 'muchas gracias', 'sí'],
          items: [
            { q: '① Vendedora: Buenos días, ¿qué desean? — Clienta: ___, por favor, ¿qué es esto?', a: ['Buenos días|buenos días'] },
            { q: '② Vendedora: Tortilla de patatas, señora. — Clienta: ¿___?', a: ['Perdón|perdón'] },
            { q: '③ Vendedora: Entonces, ¿quiere tortilla de patatas? — Clienta: No, ___. ¿Y tú?', a: ['muchas gracias|Muchas gracias'] },
            { q: '④ Clienta: ¿Cómo? ¿Puede repetir, ___?', a: ['por favor|Por favor'] },
            { q: '⑤ Cliente: Oye, ¿quieres algo o no? — Clienta: ___, ¿cómo se dice en español “spanish rice”?', a: ['Sí|sí'] },
            { q: '⑥ Vendedora: ¡Ah, paella! ___, no tengo.', a: ['Lo siento|lo siento'] }
          ] },
        { type: 'dialog', title: { es: '¿Cómo se dice en español?', ko: '스페인어로 뭐라고 해요?', en: 'How do you say it in Spanish?' },
          lines: [
            { who: 'Vendedora', es: 'Buenos días, ¿qué desean?', ko: '안녕하세요, 뭘 드릴까요?', en: 'Good morning, what would you like?' },
            { who: 'Cliente', es: 'Hola.', ko: '안녕하세요.', en: 'Hello.' },
            { who: 'Clienta', es: 'Buenos días, por favor, ¿qué es esto?', ko: '안녕하세요, 저기요, 이건 뭐예요?', en: 'Good morning, excuse me, what is this?' },
            { who: 'Vendedora', es: 'Tortilla de patatas, señora.', ko: '감자 토르티야예요, 손님.', en: 'Potato omelette, madam.' },
            { who: 'Clienta', es: '¿Perdón?', ko: '네? 뭐라고요?', en: 'Pardon?' },
            { who: 'Vendedora', es: 'Tor-ti-lla de pa-ta-tas.', ko: '토르-티-야 데 파-타-타스.', en: 'Po-ta-to o-me-lette.' },
            { who: 'Clienta', es: '¡Ah, sí!', ko: '아, 네!', en: 'Ah, yes!' },
            { who: 'Vendedora', es: 'Entonces, ¿quiere tortilla de patatas?', ko: '그럼 감자 토르티야 드릴까요?', en: 'So, would you like potato omelette?' },
            { who: 'Clienta', es: 'No, muchas gracias. ¿Y tú?', ko: '아니요, 고맙습니다. 너는?', en: 'No, thank you very much. And you?' },
            { who: 'Cliente', es: 'No, yo no quiero nada.', ko: '아니, 난 아무것도 안 먹을래.', en: 'No, I don’t want anything.' },
            { who: 'Clienta', es: 'Oiga, ¿y esto qué es?', ko: '저기요, 그럼 이건 뭐예요?', en: 'Excuse me, and what is this?' },
            { who: 'Vendedora', es: 'Gazpacho.', ko: '가스파초예요.', en: 'Gazpacho.' },
            { who: 'Clienta', es: '¿Cómo? ¿Puede repetir, por favor?', ko: '네? 다시 말씀해 주시겠어요?', en: 'Sorry? Can you repeat, please?' },
            { who: 'Vendedora', es: 'Gaz-pa-cho. ¿Quiere?', ko: '가스-파-초. 드릴까요?', en: 'Gaz-pa-cho. Would you like some?' },
            { who: 'Clienta', es: '¡Ah! No, no.', ko: '아! 아니요, 괜찮아요.', en: 'Ah! No, no.' },
            { who: 'Cliente', es: 'Oye, ¿quieres algo o no?', ko: '야, 뭐 먹을 거야, 말 거야?', en: 'Hey, do you want something or not?' },
            { who: 'Clienta', es: 'Sí, ¿cómo se dice en español “spanish rice”?', ko: '응, “spanish rice”를 스페인어로 뭐라고 해?', en: 'Yes, how do you say “Spanish rice” in Spanish?' },
            { who: 'Cliente', es: '¡Ah, “paela”! Quiere “paela”.', ko: '아, “파엘라”! “파엘라” 달래요.', en: 'Ah, “paela”! She wants “paela”.' },
            { who: 'Vendedora', es: 'Perdone, no le entiendo.', ko: '죄송하지만 못 알아듣겠어요.', en: 'Sorry, I don’t understand you.' },
            { who: 'Cliente', es: 'Sí, arroz con muchas cosas.', ko: '네, 여러 가지가 들어간 밥이요.', en: 'Yes, rice with lots of things.' },
            { who: 'Vendedora', es: '¡Ah, paella! Lo siento, no tengo.', ko: '아, 파에야! 죄송해요, 없어요.', en: 'Ah, paella! Sorry, I don’t have any.' },
            { who: 'Clienta', es: '¡Oh!', ko: '아!', en: 'Oh!' },
            { who: 'Cliente', es: 'Gracias.', ko: '고맙습니다.', en: 'Thank you.' }
          ] }
      ] },

    /* ---------------- A ---------------- */
    { id: 'a', tag: 'A', name: 'Comprensión y práctica',
      sub: { es: 'En una tienda', ko: '가게에서', en: 'In a shop' },
      blocks: [
        { type: 'choice', id: 'a1', n: '1', listen: true,
          title: { es: '¿Qué oyes?', ko: '무엇이 들리나요?', en: 'What do you hear?' },
          items: [
            { say: 'No le entiendo.', opts: ['No te entiendo.', 'No le entiendo.'], a: 1 },
            { say: '¿Puede repetir?', opts: ['¿Puedes repetir?', '¿Puede repetir?'], a: 1 },
            { say: 'Quiere paella.', opts: ['Quieres paella.', 'Quiere paella.'], a: 1 },
            { say: '¿Quieres algo o no?', opts: ['¿Quieres algo o no?', '¿Quiere algo o no?'], a: 0 }
          ] },
        { type: 'fill', id: 'a2', n: '2',
          title: { es: 'Completa los diálogos.', ko: '대화를 완성하세요.', en: 'Complete the dialogues.' },
          bank: ['Perdón', 'Por favor', 'Oye', 'Gracias', 'Ah', 'Muchas gracias', '¿Perdón?', '¿Cómo?', 'Oiga'],
          items: [
            { q: '— ¿Puede repetir, ___? — Gazpacho. — ___, no le entiendo. — ¡Gaz-pa-cho!', a: ['por favor|Por favor', 'Perdón|perdón'] },
            { q: '— ___, ¿quieres algo? — No, ___.', a: ['Oye|oye', 'gracias|Gracias'] },
            { q: '— ¿Qué es esto? — Esto es paella. — ¿___? — Paella. — ¡___, paella! ___.', a: ['Perdón|perdón', 'Ah|ah', 'Muchas gracias|muchas gracias'] },
            { q: '— ___, ¿y esto qué es? — Tortilla de patatas. — ¿___?', a: ['Oiga|oiga', 'Cómo|cómo'] }
          ] },
        { type: 'classify', id: 'a3', n: '3',
          title: { es: 'Clasifica las expresiones siguientes.', ko: '다음 표현을 분류하세요.', en: 'Classify the following expressions.' },
          cats: ['Expresiones formales (USTED)', 'Expresiones informales (TÚ)'],
          items: [
            { w: '¿Qué desean?', c: 0 },
            { w: '¿Quiere tortilla de patatas?', c: 0 },
            { w: '¿Y tú quieres tortilla de patatas?', c: 1 },
            { w: '¿Puede repetir, por favor?', c: 0 },
            { w: '¿Quieres algo o no?', c: 1 },
            { w: 'No le entiendo.', c: 0 }
          ] },
        { type: 'note', ko: '그림 A: 바텐더가 손가락을 저으며 "없다"는 몸짓을 해요. 그림 B: 여자가 커피포트를 들고 친구에게 커피를 따라 줘요. 그림 C: 두 소년이 초콜릿을 보고 있어요.', en: 'Picture A: a barman wags his finger meaning “no”. Picture B: a woman holds a coffee pot and offers her friend coffee. Picture C: two boys look at a chocolate bar.' },
        { type: 'match', id: 'a4', n: '4',
          title: { es: 'Relaciona los diálogos con los dibujos.', ko: '대화와 그림을 연결하세요.', en: 'Match the dialogues with the pictures.' },
          left: ['1. — ¿Tiene tortilla de patatas? — No, lo siento.', '2. — ¿Qué es eso? — Una tableta. — ¿Cómo? — Chocolate. — ¡Ah! Chocolate.', '3. — ¿Quieres café? — ¿Café? Sí, gracias.'],
          right: ['A 🙅‍♂️ camarero que dice “no”', 'B ☕ mujer con una cafetera', 'C 🍫 dos chicos con chocolate'],
          a: [0, 2, 1] }
      ] },

    /* ---------------- B ---------------- */
    { id: 'b', tag: 'B', name: 'Pronunciación y ortografía',
      sub: { es: 'El acento tónico', ko: '강세', en: 'Word stress' },
      blocks: [
        { type: 'note', es: 'El acento tónico aparece en sílabas diferentes según las palabras: <b>ho</b>la, us<b>ted</b>, ape<b>lli</b>do, Ecua<b>dor</b>, <b>Mé</b>xico.', ko: '강세(가장 세게 발음하는 음절)는 단어마다 위치가 달라요. ● = 강세 음절, • = 약한 음절.', en: 'The stressed syllable is in a different place depending on the word. ● = stressed syllable, • = unstressed syllable.' },
        { type: 'classify', id: 'b1', n: '1', listen: true,
          title: { es: 'Escucha y repite la pronunciación de las palabras siguientes.', ko: '다음 단어의 발음을 듣고 따라 하세요. 그리고 강세 유형별로 분류하세요.', en: 'Listen and repeat these words, then sort them by stress pattern.' },
          cats: ['•●', '●•', '••●', '•●•', '●••'],
          items: [
            { w: 'Usted', c: 0 }, { w: 'Madrid', c: 0 },
            { w: 'Nombre', c: 1 }, { w: 'Hola', c: 1 },
            { w: 'Ecuador', c: 2 }, { w: 'Paraguay', c: 2 },
            { w: 'Alberto', c: 3 }, { w: 'Mañana', c: 3 },
            { w: 'Fátima', c: 4 }, { w: 'México', c: 4 }
          ] },
        { type: 'choice', id: 'b2', n: '2', listen: true,
          title: { es: 'Escucha y repite estas palabras despacio y subraya el lugar del acento tónico.', ko: '이 단어들을 천천히 듣고 따라 한 뒤, 강세가 있는 음절을 고르세요.', en: 'Listen and repeat these words slowly and mark the stressed syllable.' },
          items: [
            { say: 'Tortilla', opts: ['TOR-ti-lla', 'tor-TI-lla', 'tor-ti-LLA'], a: 1 },
            { say: 'Arroz', opts: ['A-rroz', 'a-RROZ'], a: 1 },
            { say: 'Agua', opts: ['A-gua', 'a-GUA'], a: 0 },
            { say: 'Patata', opts: ['PA-ta-ta', 'pa-TA-ta', 'pa-ta-TA'], a: 1 },
            { say: 'Café', opts: ['CA-fé', 'ca-FÉ'], a: 1 },
            { say: 'Zumo', opts: ['ZU-mo', 'zu-MO'], a: 0 },
            { say: 'Gazpacho', opts: ['GAZ-pa-cho', 'gaz-PA-cho', 'gaz-pa-CHO'], a: 1 },
            { say: 'Leche', opts: ['LE-che', 'le-CHE'], a: 0 },
            { say: 'Chocolate', opts: ['CHO-co-la-te', 'cho-CO-la-te', 'cho-co-LA-te', 'cho-co-la-TE'], a: 2 },
            { say: 'Paella', opts: ['PA-e-lla', 'pa-E-lla', 'pa-e-LLA'], a: 1 },
            { say: 'Aceite', opts: ['A-cei-te', 'a-CEI-te', 'a-cei-TE'], a: 1 },
            { say: 'Naranja', opts: ['NA-ran-ja', 'na-RAN-ja', 'na-ran-JA'], a: 1 }
          ] },
        { type: 'note', es: 'Si la palabra lleva acento escrito, esa es la sílaba del acento tónico: Pe<b>rú</b>, <b>dí</b>a, <b>Mé</b>xico.', ko: '단어에 강세 부호(´)가 있으면 그 음절이 강세 음절이에요.', en: 'If a word has a written accent, that is the stressed syllable.' },
        { type: 'choice', id: 'b3', n: '3', listen: true,
          title: { es: '¿Qué oyes?', ko: '무엇이 들리나요?', en: 'What do you hear?' },
          items: [
            { say: 'Llamo', opts: ['Llamo', 'Llamó'], a: 0 },
            { say: 'Estás', opts: ['Estas', 'Estás'], a: 1 },
            { say: 'Nombre', opts: ['Nombre', 'Nombré'], a: 0 },
            { say: 'Llamé', opts: ['Llamé', 'Llame'], a: 0 },
            { say: 'Apellido', opts: ['Apellido', 'Apellidó'], a: 0 },
            { say: 'Quito', opts: ['Quito', 'Quitó'], a: 0 }
          ] },
        { type: 'choice', id: 'b4', n: '4', listen: true,
          title: { es: 'Escucha los diálogos y marca el icono que corresponde.', ko: '대화를 듣고 알맞은 아이콘을 고르세요.', en: 'Listen to the dialogues and mark the matching icon.' },
          items: [
            { say: 'Por favor, ¿los lavabos? — Aquí están.', opts: ['ℹ️ 1', '🚕 2', '🚻 3', '🚌 4', '📞 5', '🍽️ 6'], a: 2 },
            { say: '¿Para ir al centro? — Sí, esta es la parada de autobús, el autobús 35.', opts: ['ℹ️ 1', '🚕 2', '🚻 3', '🚌 4', '📞 5', '🍽️ 6'], a: 3 },
            { say: 'Quiero comer algo. — Mira, allí hay un restaurante.', opts: ['ℹ️ 1', '🚕 2', '🚻 3', '🚌 4', '📞 5', '🍽️ 6'], a: 5 },
            { say: 'Taxi, taxi. Al hotel Regina.', opts: ['ℹ️ 1', '🚕 2', '🚻 3', '🚌 4', '📞 5', '🍽️ 6'], a: 1 },
            { say: '¿Hay un teléfono? — Sí, la cabina de teléfonos está allí.', opts: ['ℹ️ 1', '🚕 2', '🚻 3', '🚌 4', '📞 5', '🍽️ 6'], a: 4 },
            { say: 'Información, ¿en qué puedo ayudarle? — ¿Información? Hola, buenos días, mire…', opts: ['ℹ️ 1', '🚕 2', '🚻 3', '🚌 4', '📞 5', '🍽️ 6'], a: 0 }
          ] },
        { type: 'fill', id: 'b5', n: '4',
          title: { es: 'Después, escribe la palabra.', ko: '그다음, 각 아이콘의 단어를 쓰세요.', en: 'Then write the word for each icon.' },
          items: [
            { q: 'ℹ️ (1) → ___', a: ['información|la información'] },
            { q: '🚕 (2) → ___', a: ['taxi|el taxi'] },
            { q: '🚻 (3) → ___', a: ['lavabos|los lavabos'] },
            { q: '🚌 (4) → ___', a: ['autobús|el autobús|parada de autobús|la parada de autobús'] },
            { q: '📞 (5) → ___', a: ['teléfono|el teléfono|cabina de teléfonos|la cabina de teléfonos'] },
            { q: '🍽️ (6) → ___', a: ['restaurante|el restaurante'] }
          ] }
      ] },

    /* ---------------- C ---------------- */
    { id: 'c', tag: 'C', name: 'Léxico',
      sub: { es: 'La comida', ko: '음식', en: 'Food' },
      blocks: [
        { type: 'note', ko: '카페의 칠판 메뉴 “Elige tu desayuno(아침 식사를 고르세요)”에 8가지 음식 그림이 있어요.', en: 'A café blackboard “Elige tu desayuno” (Choose your breakfast) shows 8 pictures.' },
        { type: 'fill', id: 'c1', n: '1',
          title: { es: 'Mira esta ilustración y escribe el nombre.', ko: '그림을 보고 이름을 쓰세요.', en: 'Look at the picture and write the name.' },
          bank: ['café solo', 'chocolate', 'té', 'zumo de naranja', 'cruasán', 'tostadas', 'pan con aceite', 'bollos'],
          items: [
            { q: '🥐 → ___', a: ['cruasán'] },
            { q: '🍊🥤 → ___', a: ['zumo de naranja'] },
            { q: '☕ (negro, sin leche) → ___', a: ['café solo'] },
            { q: '🍫 (taza caliente) → ___', a: ['chocolate'] },
            { q: '🍵 (con bolsita) → ___', a: ['té'] },
            { q: '🍞 + 🫒 → ___', a: ['pan con aceite'] },
            { q: '🧁🧁🧁 → ___', a: ['bollos'] },
            { q: '🍞 tostado con mermelada → ___', a: ['tostadas'] }
          ] },
        { type: 'open', id: 'c2', n: '2',
          title: { es: 'Escribe tu propio desayuno.', ko: '나만의 아침 식사를 써 보세요.', en: 'Write your own breakfast.' },
          items: [ { q: 'Por favor, quiero… … Gracias.', model: 'Por favor, quiero un café con leche, unas tostadas con aceite y un zumo de naranja. Gracias.' } ] },
        { type: 'fill', id: 'c3', n: '3',
          title: { es: 'Escribe el nombre de estas comidas y bebidas.', ko: '이 음식과 음료의 이름을 쓰세요.', en: 'Write the names of these foods and drinks.' },
          bank: ['pescado', 'naranja', 'pan', 'tomate', 'carne', 'chocolate', 'queso', 'manzana', 'leche'],
          items: [
            { q: 'a. 🍊 → la ___', a: ['naranja'] },
            { q: 'b. 🍞 → el ___', a: ['pan'] },
            { q: 'c. 🍅 → el ___', a: ['tomate'] },
            { q: 'd. 🐟 → el ___', a: ['pescado'] },
            { q: 'e. 🥩 → la ___', a: ['carne'] },
            { q: 'f. 🍫 → el ___', a: ['chocolate'] },
            { q: 'g. 🧀 → el ___', a: ['queso'] },
            { q: 'h. 🍏 → la ___', a: ['manzana'] },
            { q: 'i. 🥛 → la ___', a: ['leche'] }
          ] },
        { type: 'open', id: 'c4', n: '3',
          title: { es: 'Después completa el diálogo entre un vendedor y tú.', ko: '그다음, 판매원과 나의 대화를 완성하세요.', en: 'Then complete the dialogue between a shopkeeper and you.' },
          items: [
            { q: 'Vendedor: Buenos días. — Tú: ___', model: 'Buenos días.' },
            { q: 'Vendedor: ¿Qué desea? — Tú: ¿Tiene ___?', model: '¿Tiene naranjas?' },
            { q: 'Vendedor: No, no tengo. — Tú: ¿Y ___?', model: '¿Y pan?' },
            { q: 'Vendedor: Sí. ¿Quiere ___? — Tú: Sí, por favor. También quiero ___.', model: '¿Quiere pan? — Sí, por favor. También quiero pescado.' },
            { q: 'Vendedor: No tengo, lo siento. — Tú: Entonces quiero ___.', model: 'Entonces quiero carne.' },
            { q: 'Vendedor: Muy bien. — Tú: ¿Tiene ___? — Vendedor: ¿Perdone? — Tú: ___', model: '¿Tiene chocolate? — ¿Perdone? — Chocolate.' },
            { q: 'Vendedor: ¡Ah, sí! — Tú: También quiero ___ y ___.', model: 'También quiero tomates y queso.' },
            { q: 'Vendedor: Estupendo. — Tú: Además quiero ___. — Vendedor: No, ___ no tengo.', model: 'Además quiero manzanas. — No, manzanas no tengo.' },
            { q: 'Tú: Entonces ___. — Vendedor: ¿Algo más? — Tú: Y ___. — Vendedor: Aquí tiene. — Tú: Gracias.', model: 'Entonces nada. — ¿Algo más? — Y leche.' }
          ] }
      ] },

    /* ---------------- D1 ---------------- */
    { id: 'd1', tag: 'D', name: 'Gramática',
      sub: { es: 'El género del nombre', ko: '명사의 성', en: 'Gender of nouns' },
      blocks: [
        { type: 'table', title: { es: '1a. Observa: -o / -a', ko: '1a. 살펴보기: -o / -a', en: '1a. Look: -o / -a' },
          head: ['Masculino', 'Femenino'],
          rows: [['alumno', 'alumna'], ['niño', 'niña'], ['gato', 'gata']],
          note: { ko: '사람과 동물의 남성 명사는 보통 -o로, 여성 명사는 -a로 끝나요.', en: 'Masculine nouns for people and animals often end in -o and feminine ones in -a.' } },
        { type: 'table', title: { es: 'Consonante + a', ko: '자음 + a', en: 'Consonant + a' },
          head: ['Masculino', 'Femenino'],
          rows: [['profesor', 'profesora'], ['señor', 'señora']],
          note: { ko: '자음으로 끝나는 사람·동물의 남성 명사가 많고, 여성형은 -a를 붙여요.', en: 'Many masculine nouns for people and animals end in a consonant; the feminine adds -a.' } },
        { type: 'table', title: { es: 'Palabras distintas', ko: '형태가 다른 단어', en: 'Different words' },
          head: ['Masculino', 'Femenino'],
          rows: [['hombre', 'mujer'], ['padre', 'madre'], ['toro', 'vaca']],
          note: { ko: '남성과 여성을 전혀 다른 단어로 나타내는 명사도 있어요.', en: 'Some nouns have completely different words for masculine and feminine.' } },
        { type: 'table', title: { es: 'Los nombres de cosas no siguen ninguna norma.', ko: '사물 명사는 규칙이 없어요.', en: 'Nouns for things follow no rule.' },
          head: ['Masculino', 'Femenino'],
          rows: [['teléfono', 'tortilla'], ['día', 'mano'], ['café', 'noche'], ['arroz', 'información']],
          note: { ko: '사물의 성은 외워야 해요: el día(남성)인데 -a, la mano(여성)인데 -o로 끝나요.', en: 'Learn the gender of things: el día is masculine despite -a, la mano is feminine despite -o.' } },
        { type: 'fill', id: 'd1b', n: '1b',
          title: { es: 'Cambia a femenino.', ko: '여성형으로 바꾸세요.', en: 'Change to feminine.' },
          items: [
            { q: 'a. Alumno → ___', a: ['alumna'] },
            { q: 'b. Hombre → ___', a: ['mujer'] },
            { q: 'c. Profesor → ___', a: ['profesora'] },
            { q: 'd. Niño → ___', a: ['niña'] },
            { q: 'e. Señor → ___', a: ['señora'] },
            { q: 'f. Compañero → ___', a: ['compañera'] },
            { q: 'g. Amigo → ___', a: ['amiga'] },
            { q: 'h. Chico → ___', a: ['chica'] }
          ] },
        { type: 'fill', id: 'd1c', n: '1c',
          title: { es: 'Cambia a masculino.', ko: '남성형으로 바꾸세요.', en: 'Change to masculine.' },
          items: [
            { q: 'a. Directora → ___', a: ['director'] },
            { q: 'b. Madre → ___', a: ['padre'] },
            { q: 'c. Gata → ___', a: ['gato'] },
            { q: 'd. Vendedora → ___', a: ['vendedor'] },
            { q: 'e. Loba → ___', a: ['lobo'] },
            { q: 'f. Maestra → ___', a: ['maestro'] },
            { q: 'g. Abuela → ___', a: ['abuelo'] },
            { q: 'h. Vaca → ___', a: ['toro'] }
          ] },
        { type: 'match', id: 'd1d', n: '1d',
          title: { es: 'Relaciona.', ko: '연결하세요.', en: 'Match.' },
          left: ['a. Papá', 'b. León', 'c. Esposo', 'd. Muchacho', 'e. Doctor'],
          right: ['1. Esposa', '2. Muchacha', '3. Mamá', '4. Doctora', '5. Leona'],
          a: [2, 4, 0, 1, 3] },
        { type: 'note', es: '1. Quiero <u>aceite</u> y <u>pan</u>, por favor. 2. Carlos es <u>profesor</u> y su esposa es <u>doctora</u>. 3. No tengo <u>ordenador</u> ni <u>impresora</u>. 4. Tiene <u>chocolate</u> y <u>leche</u>. 5. ¿Quiere <u>tortilla</u> de <u>patatas</u>? 6. Esto es <u>carne</u> con <u>tomate</u>. 7. <u>Teléfono</u> es una <u>palabra</u> internacional.', ko: '밑줄 친 명사를 확인하세요.', en: 'Look at the underlined nouns.' },
        { type: 'classify', id: 'd1e', n: '1e',
          title: { es: 'Clasifica los nombres subrayados.', ko: '밑줄 친 명사를 분류하세요.', en: 'Classify the underlined nouns.' },
          cats: ['Masculinos', 'Femeninos'],
          items: [
            { w: 'aceite', c: 0 }, { w: 'pan', c: 0 }, { w: 'profesor', c: 0 }, { w: 'doctora', c: 1 },
            { w: 'ordenador', c: 0 }, { w: 'impresora', c: 1 }, { w: 'chocolate', c: 0 }, { w: 'leche', c: 1 },
            { w: 'tortilla', c: 1 }, { w: 'patatas', c: 1 }, { w: 'carne', c: 1 }, { w: 'tomate', c: 0 },
            { w: 'teléfono', c: 0 }, { w: 'palabra', c: 1 }
          ] }
      ] },

    /* ---------------- D2 ---------------- */
    { id: 'd2', tag: 'D', name: 'Gramática',
      sub: { es: 'El número del nombre y los artículos', ko: '명사의 수와 관사', en: 'Number of nouns and articles' },
      blocks: [
        { type: 'table', title: { es: '2a. Artículo determinado', ko: '2a. 정관사', en: '2a. Definite article' },
          head: ['', 'Masculino', 'Femenino'],
          rows: [['Singular', 'el', 'la'], ['Plural', 'los', 'las']],
          note: { ko: '정관사 = 영어 the (이미 아는 것, 특정한 것).', en: 'Definite article = “the” (something known or specific).' } },
        { type: 'table', title: { es: 'Artículo indeterminado', ko: '부정관사', en: 'Indefinite article' },
          head: ['', 'Masculino', 'Femenino'],
          rows: [['Singular', 'un', 'una'], ['Plural', 'unos', 'unas']],
          note: { ko: '부정관사 = 영어 a/an, some (처음 말하는 것, 정해지지 않은 것).', en: 'Indefinite article = “a/an”, “some” (something new or not specific).' } },
        { type: 'fill', id: 'd2b', n: '2b',
          title: { es: 'Pon el artículo determinado.', ko: '정관사를 쓰세요.', en: 'Write the definite article.' },
          items: [
            { q: 'a. ___ palabra', a: ['la'] }, { q: 'b. ___ nombres', a: ['los'] },
            { q: 'c. ___ apellidos', a: ['los'] }, { q: 'd. ___ información', a: ['la'] },
            { q: 'e. ___ naranjas', a: ['las'] }, { q: 'f. ___ teléfonos', a: ['los'] },
            { q: 'g. ___ carne', a: ['la'] }, { q: 'h. ___ pescado', a: ['el'] },
            { q: 'i. ___ chocolates', a: ['los'] }, { q: 'j. ___ lavabo', a: ['el'] },
            { q: 'k. ___ noches', a: ['las'] }, { q: 'l. ___ tarde', a: ['la'] }
          ] },
        { type: 'fill', id: 'd2c', n: '2c',
          title: { es: 'Pon el artículo indeterminado.', ko: '부정관사를 쓰세요.', en: 'Write the indefinite article.' },
          items: [
            { q: 'a. ___ país', a: ['un'] }, { q: 'b. ___ ciudades', a: ['unas'] },
            { q: 'c. ___ saludo', a: ['un'] }, { q: 'd. ___ despedida', a: ['una'] },
            { q: 'e. ___ letras', a: ['unas'] }, { q: 'f. ___ argentino', a: ['un'] },
            { q: 'g. ___ toros', a: ['unos'] }, { q: 'h. ___ verbo', a: ['un'] },
            { q: 'i. ___ idioma', a: ['un'] }, { q: 'j. ___ ficha', a: ['una'] },
            { q: 'k. ___ compañeras', a: ['unas'] }, { q: 'l. ___ profesoras', a: ['unas'] }
          ] },
        { type: 'choice', id: 'd2d', n: '2d',
          title: { es: 'Marca el artículo correcto.', ko: '알맞은 관사를 고르세요.', en: 'Choose the correct article.' },
          items: [
            { q: '1. ___ alumnos son buenos estudiantes.', opts: ['El', 'Los'], a: 1 },
            { q: '2. ¿Quieres ___ café?', opts: ['un', 'unos'], a: 0 },
            { q: '3. ___ paella tiene un limón.', opts: ['El', 'La'], a: 1 },
            { q: '4. Necesito ___ información.', opts: ['un', 'una'], a: 1 },
            { q: '5. ¿Es usted ___ abuela de Juan?', opts: ['el', 'la'], a: 1 },
            { q: '6. Susana trabaja por ___ noche.', opts: ['el', 'la'], a: 1 },
            { q: '7. ___ naranjas, por favor.', opts: ['Unos', 'Unas'], a: 1 },
            { q: '8. ¿Son ustedes ___ señores Martínez?', opts: ['los', 'las'], a: 0 }
          ] },
        { type: 'fill', id: 'd2e', n: '2e',
          title: { es: 'Pon las siguientes frases en femenino.', ko: '다음 문장을 여성형으로 바꾸세요.', en: 'Put the following sentences in the feminine.' },
          items: [
            { q: '1. Quiero hablar con el director. → ___', a: ['Quiero hablar con la directora.'] },
            { q: '2. Es mi padre. → ___', a: ['Es mi madre.'] },
            { q: '3. Quiero un gato. → ___', a: ['Quiero una gata.'] },
            { q: '4. Ellos no son los vendedores. → ___', a: ['Ellas no son las vendedoras.'] },
            { q: '5. ¡Es un niño! → ___', a: ['¡Es una niña!'] },
            { q: '6. Buenos días, señor, ¿qué desea? → ___', a: ['Buenos días, señora, ¿qué desea?'] }
          ] },
        { type: 'table', title: { es: '3a. Observa: el plural', ko: '3a. 살펴보기: 복수형', en: '3a. Look: the plural' },
          head: ['Singular', 'Plural', ''],
          rows: [
            ['amigo', 'amigos', 'vocal → +s'], ['fiesta', 'fiestas', 'vocal → +s'], ['café', 'cafés', 'vocal → +s'],
            ['información', 'informaciones', 'consonante o -í → +es'], ['jamón', 'jamones', 'consonante o -í → +es'], ['marroquí', 'marroquíes', 'consonante o -í → +es'],
            ['el arroz', 'los arroces', '-z → -ces'], ['el lunes', 'los lunes', '-s → no cambia']
          ],
          note: { ko: '모음으로 끝나면 +s, 자음이나 -í로 끝나면 +es. -z로 끝나면 -ces, -s로 끝나는 많은 명사는 변하지 않아요. (información → informaciones처럼 강세 부호가 없어지기도 해요.)', en: 'Ending in a vowel → +s; in a consonant or -í → +es. -z → -ces; many nouns ending in -s don’t change. (Written accents may disappear: información → informaciones.)' } },
        { type: 'fill', id: 'd2f', n: '3b',
          title: { es: 'Cambia al plural.', ko: '복수형으로 바꾸세요.', en: 'Change to the plural.' },
          items: [
            { q: 'a. El tomate → ___', a: ['los tomates'] },
            { q: 'b. Una paella → ___', a: ['unas paellas'] },
            { q: 'c. Un pescado → ___', a: ['unos pescados'] },
            { q: 'd. Una playa → ___', a: ['unas playas'] },
            { q: 'e. Un televisor → ___', a: ['unos televisores'] },
            { q: 'f. El autobús → ___', a: ['los autobuses'] },
            { q: 'g. Un bar → ___', a: ['unos bares'] },
            { q: 'h. La noche → ___', a: ['las noches'] }
          ] },
        { type: 'fill', id: 'd2g', n: '3c',
          title: { es: 'Pon las siguientes frases en plural.', ko: '다음 문장을 복수형으로 바꾸세요.', en: 'Put the following sentences in the plural.' },
          items: [
            { q: '1. El cliente quiere naranja. → ___', a: ['Los clientes quieren naranjas.'] },
            { q: '2. ¿Es usted español? → ___', a: ['¿Son ustedes españoles?'] },
            { q: '3. Es una estudiante alemana. → ___', a: ['Son unas estudiantes alemanas.'] },
            { q: '4. Es un amigo israelí. → ___', a: ['Son unos amigos israelíes.|Son unos amigos israelís.'] },
            { q: '5. La profesora no es inglesa. → ___', a: ['Las profesoras no son inglesas.'] }
          ] }
      ] },

    /* ---------------- E ---------------- */
    { id: 'e', tag: 'E', name: 'Expresión oral',
      sub: { es: 'Preguntar por una comida y comprar', ko: '음식에 대해 묻고 사기', en: 'Asking about food and buying' },
      blocks: [
        { type: 'table', title: { es: 'Para preguntar', ko: '묻는 표현', en: 'Asking expressions' },
          head: ['Informal', 'Formal'],
          rows: [
            ['¿Cómo se dice … en español?', '¿Cómo se dice … en español?'],
            ['¿Qué es esto?', '¿Qué es esto?'],
            ['¿Puedes repetir, por favor?', '¿Puede repetir, por favor?'],
            ['No te entiendo.', 'No le entiendo.'],
            ['¿Perdón?', '¿Perdón?'],
            ['¿Cómo?', '¿Cómo?']
          ] },
        { type: 'speak', n: '1',
          title: { es: 'Pregunta a tu compañero o al profesor qué son estas cosas.', ko: '짝이나 선생님에게 이것들이 무엇인지 물어보세요.', en: 'Ask your partner or the teacher what these things are.' },
          prompt: { ko: 'a ☕ b 🥛 c 🧀 d 🍏 e 🍫 f 🥩 g 🍅 h 🍊 i 🫒 j 🍬(설탕) k 🐟 l 🧂 m 🍞 n 🍍🍇 — 위 표현을 사용해 묻고 답하세요.', en: 'a ☕ b 🥛 c 🧀 d 🍏 e 🍫 f 🥩 g 🍅 h 🍊 i 🫒 j sugar k 🐟 l 🧂 m 🍞 n 🍍🍇 — ask and answer using the expressions above.' },
          model: [
            { who: 'A', es: '¿Cómo se dice b. en español?' }, { who: 'B', es: 'Leche.' }, { who: 'A', es: 'Gracias.' },
            { who: 'A', es: '¿Qué es a.?' }, { who: 'B', es: 'Café.' }, { who: 'A', es: '¿Puede repetir, por favor?' }, { who: 'B', es: 'Ca-fé.' }
          ] },
        { type: 'fill', id: 'e1', n: '1',
          title: { es: '¿Cómo se dice en español? Escribe el nombre.', ko: '스페인어로 뭐라고 하나요? 이름을 쓰세요.', en: 'How do you say it in Spanish? Write the name.' },
          bank: ['café', 'leche', 'queso', 'manzana', 'chocolate', 'carne', 'tomate', 'naranja', 'aceite', 'azúcar', 'pescado', 'sal', 'pan', 'fruta'],
          items: [
            { q: 'a. ☕ → ___', a: ['café'] }, { q: 'b. 🥛 → ___', a: ['leche'] },
            { q: 'c. 🧀 → ___', a: ['queso'] }, { q: 'd. 🍏 → ___', a: ['manzana'] },
            { q: 'e. 🍫 → ___', a: ['chocolate'] }, { q: 'f. 🥩 → ___', a: ['carne'] },
            { q: 'g. 🍅 → ___', a: ['tomate'] }, { q: 'h. 🍊 → ___', a: ['naranja'] },
            { q: 'i. 🫒 (botella de oliva) → ___', a: ['aceite'] }, { q: 'j. bote “AZÚCAR” → ___', a: ['azúcar'] },
            { q: 'k. 🐟 → ___', a: ['pescado'] }, { q: 'l. bote “SAL” 🧂 → ___', a: ['sal'] },
            { q: 'm. 🍞 → ___', a: ['pan'] }, { q: 'n. 🍍🍇🍌 → ___', a: ['fruta|frutas'] }
          ] },
        { type: 'speak', n: '2a',
          title: { es: 'Habla con tu compañero. Uno es el vendedor y otro el cliente. Pide una cosa distinta cada vez (café, aceite, pan, huevos…).', ko: '짝과 대화하세요. 한 명은 판매원, 한 명은 손님이에요. 매번 다른 것을 주문하세요(커피, 기름, 빵, 달걀…).', en: 'Talk with your partner. One is the shopkeeper, the other the customer. Ask for something different each time (coffee, oil, bread, eggs…).' },
          prompt: { ko: '판매원: “Buenas tardes, ¿qué desea?”로 시작하고, 손님이 잘 못 알아들으면 다시 말해 주세요.', en: 'Shopkeeper starts with “Buenas tardes, ¿qué desea?”; repeat if the customer doesn’t understand.' },
          model: [
            { who: 'A', es: 'Buenas tardes, ¿qué desea?' }, { who: 'B', es: 'Quiero aceite, por favor.' },
            { who: 'A', es: '¿Perdón? No le entiendo.' }, { who: 'B', es: 'A-cei-te.' },
            { who: 'A', es: '¡Ah, aceite!' }, { who: 'B', es: 'Sí, muchas gracias.' }
          ] },
        { type: 'speak', n: '2b',
          title: { es: 'Quieres una cosa y no conoces el nombre en español. Pregunta al compañero o al profesor.', ko: '원하는 물건의 스페인어 이름을 몰라요. 짝이나 선생님에게 물어보세요.', en: 'You want something and don’t know its name in Spanish. Ask your partner or the teacher.' },
          prompt: { ko: '📞 전화기, 💻 컴퓨터, 🥖 샌드위치(보카디요), ☕ 컵 — 그림을 가리키며 물어보세요.', en: '📞 telephone, 💻 computer, 🥖 sandwich (bocadillo), ☕ cup — point and ask.' },
          model: [
            { who: 'A', es: '¿Cómo se dice 📞 en español?' }, { who: 'B', es: 'Teléfono.' },
            { who: 'A', es: '¿Cómo se escribe 💻?' }, { who: 'B', es: 'Ordenador: o-r-d-e-n-a-d-o-r.' },
            { who: 'A', es: 'Quiero un 🥖. ¿Cómo se dice en español?' }, { who: 'B', es: 'Bocadillo.' },
            { who: 'A', es: '¿Cómo se dice en español ☕?' }, { who: 'B', es: 'Taza.' }
          ] }
      ] },

    /* ---------------- MUNDO HISPANO ---------------- */
    { id: 'mundo', tag: '', name: 'Mundo hispano',
      sub: { es: 'El desayuno en España y platos de la gastronomía hispana', ko: '스페인의 아침 식사와 스페인어권 대표 음식', en: 'Breakfast in Spain and dishes of Hispanic cuisine' },
      blocks: [
        { type: 'reading', title: { es: 'Un desayuno típico en España', ko: '스페인의 전형적인 아침 식사', en: 'A typical breakfast in Spain' },
          paras: [ { es: 'En la foto hay tostadas con mantequilla, mermelada, un café con leche y un zumo de naranja.', ko: '사진에는 버터를 바른 토스트, 잼, 카페 콘 레체(밀크커피), 오렌지 주스가 있어요.', en: 'In the photo there is toast with butter, jam, a white coffee and an orange juice.' } ] },
        { type: 'fill', id: 'm1', n: '1a',
          title: { es: 'Este es un desayuno típico en España. Escribe las palabras.', ko: '이것은 스페인의 전형적인 아침 식사예요. 단어를 쓰세요.', en: 'This is a typical breakfast in Spain. Write the words.' },
          bank: ['tostadas', 'mantequilla', 'mermelada', 'café con leche', 'zumo de naranja'],
          items: [
            { q: '🍞 (pan tostado en el plato) → ___', a: ['tostadas|las tostadas'] },
            { q: '🧈 (en el plato, junto al pan) → ___', a: ['mantequilla|la mantequilla'] },
            { q: '🫐 (en el cuenco pequeño) → ___', a: ['mermelada|la mermelada'] },
            { q: '🥤🍊 (en el vaso) → ___', a: ['zumo de naranja|el zumo de naranja'] },
            { q: '☕🥛 (en la taza) → ___', a: ['café con leche|el café con leche'] }
          ] },
        { type: 'open', id: 'm2', n: '1b',
          title: { es: '¿Es igual en tu país? ¿Cuál es el desayuno típico?', ko: '여러분 나라도 같나요? 전형적인 아침 식사는 무엇인가요?', en: 'Is it the same in your country? What is the typical breakfast?' },
          items: [ { q: 'En mi país el desayuno típico es…', model: 'No, no es igual. En Corea el desayuno típico es arroz, sopa y kimchi.' } ] },
        { type: 'speak', n: '1c',
          title: { es: 'Compara los resultados con tus compañeros.', ko: '결과를 친구들과 비교해 보세요.', en: 'Compare your results with your classmates.' },
          prompt: { ko: '서로의 나라/가정의 아침 식사를 비교해 말해 보세요.', en: 'Compare your typical breakfasts.' },
          model: [ { who: 'A', es: '¿Cuál es el desayuno típico en tu país?' }, { who: 'B', es: 'Arroz, sopa y kimchi. ¿Y en tu país?' }, { who: 'A', es: 'Café con leche y tostadas.' } ] },
        { type: 'fill', id: 'm3', n: '2a',
          title: { es: 'Aquí tienes unos platos típicos de la gastronomía hispana. ¿Cuáles conoces? Escribe el nombre.', ko: '스페인어권의 대표 음식이에요. 아는 것이 있나요? 이름을 쓰세요.', en: 'Here are some typical dishes of Hispanic cuisine. Which do you know? Write the name.' },
          bank: ['tacos', 'churrasco', 'tortilla de patatas', 'paella', 'chocolate', 'gazpacho', 'arepas', 'chiles'],
          items: [
            { q: '1. 🫓 pan redondo de maíz relleno (Venezuela, Colombia) → ___', a: ['arepas'] },
            { q: '2. 🌶️ rojos y picantes (México) → ___', a: ['chiles'] },
            { q: '3. ☕ taza de bebida caliente y marrón → ___', a: ['chocolate'] },
            { q: '4. 🥩 carne a la parrilla (Argentina) → ___', a: ['churrasco'] },
            { q: '5. 🍅 sopa fría roja en una taza (Andalucía) → ___', a: ['gazpacho'] },
            { q: '6. 🥘 arroz con marisco (Valencia) → ___', a: ['paella'] },
            { q: '7. 🌮 tortillas de maíz con carne y queso (México) → ___', a: ['tacos'] },
            { q: '8. 🥔🥚 redonda y amarilla (España) → ___', a: ['tortilla de patatas'] }
          ] },
        { type: 'choice', id: 'm4', n: '2b', listen: true,
          title: { es: '¿Cómo se pronuncian estas palabras? Escucha y marca el acento tónico.', ko: '이 단어들은 어떻게 발음하나요? 듣고 강세 음절을 고르세요.', en: 'How are these words pronounced? Listen and mark the stressed syllable.' },
          items: [
            { say: 'tacos', opts: ['TA-cos', 'ta-COS'], a: 0 },
            { say: 'churrasco', opts: ['CHU-rras-co', 'chu-RRAS-co', 'chu-rras-CO'], a: 1 },
            { say: 'patatas', opts: ['PA-ta-tas', 'pa-TA-tas', 'pa-ta-TAS'], a: 1 },
            { say: 'paella', opts: ['PA-e-lla', 'pa-E-lla', 'pa-e-LLA'], a: 1 },
            { say: 'chocolate', opts: ['CHO-co-la-te', 'cho-CO-la-te', 'cho-co-LA-te', 'cho-co-la-TE'], a: 2 },
            { say: 'gazpacho', opts: ['GAZ-pa-cho', 'gaz-PA-cho', 'gaz-pa-CHO'], a: 1 },
            { say: 'arepas', opts: ['A-re-pas', 'a-RE-pas', 'a-re-PAS'], a: 1 },
            { say: 'chiles', opts: ['CHI-les', 'chi-LES'], a: 0 }
          ] }
      ] },

    /* ---------------- SÍNTESIS ---------------- */
    { id: 'sintesis', tag: '', name: 'Síntesis',
      sub: { es: 'A B C D E', ko: 'A~E 종합', en: 'Review of A–E' },
      blocks: [
        { type: 'note', es: '1. Mira la ilustración.', ko: '그림: 밤의 디스코텍/바. 사람들이 춤추고, 마시고, 이야기해요. A = 모자 쓴 여자와 춤추는 남자, B = 테이블에서 음료를 들고 외치는 남자, C = 휴대전화로 통화하는 사람, D = 음료를 든 빨간 머리 여자.', en: 'Picture: a disco/bar at night. People are dancing, drinking and talking. A = girl in a hat and a boy dancing, B = boy at a table with a drink shouting, C = person talking on the phone, D = red-haired woman with a drink.' },
        { type: 'speak', n: '1a',
          title: { es: 'Describe la escena (¿Dónde están? ¿Qué hacen?).', ko: '장면을 묘사하세요(어디에 있나요? 무엇을 하나요?).', en: 'Describe the scene (Where are they? What are they doing?).' },
          prompt: { ko: '배운 단어로 장소와 사람들을 간단히 말해 보세요.', en: 'Use the words you know to describe the place and the people.' },
          model: [ { who: 'A', es: 'Están en una discoteca. Hay un bar. Hay chicos y chicas. Unos bailan, otros hablan y beben.' } ] },
        { type: 'open', id: 's1', n: '1b',
          title: { es: 'Imagina una frase para cada persona.', ko: '각 인물의 대사를 하나씩 상상해 보세요.', en: 'Imagine a sentence for each person.' },
          items: [
            { q: 'A:', model: '¿Quieres bailar?' },
            { q: 'B:', model: '¡Oiga, un zumo de naranja, por favor!' },
            { q: 'C:', model: '¿Perdón? No te entiendo. ¿Puedes repetir?' },
            { q: 'D:', model: 'Hola, ¿cómo te llamas?' }
          ] },
        { type: 'open', id: 's2', n: '1c',
          title: { es: 'Elige a uno de los personajes e imagina el diálogo.', ko: '인물 한 명을 골라 대화를 상상해 쓰세요.', en: 'Choose one of the characters and imagine the dialogue.' },
          items: [ { q: 'Diálogo:', model: '— Oiga, por favor, ¿qué es esto? — Es un zumo de naranja. — ¿Cómo? ¿Puede repetir? — Zu-mo de na-ran-ja. — ¡Ah! Quiero un zumo, por favor. — Aquí tiene. — Muchas gracias.' } ] }
      ] },

    /* ---------------- YA CONOCES ---------------- */
    { id: 'yaconoces', tag: '', name: 'Ya conoces',
      sub: { es: 'Resumen de la unidad', ko: '단원 정리', en: 'Unit summary' },
      blocks: [
        { type: 'vocab', title: { es: '1. Las expresiones para manejarse en una tienda', ko: '1. 가게에서 쓰는 표현', en: '1. Expressions for getting by in a shop' },
          items: [
            { es: 'Oye / Oiga.', ko: '저기(요)! (주의 끌기)', en: 'Hey! / Excuse me!', e: '🙋' },
            { es: 'Muchas gracias. / Gracias.', ko: '정말 고마워요. / 고마워요.', en: 'Thank you very much. / Thanks.', e: '🙏' },
            { es: 'Perdón. / Perdone. / Perdona.', ko: '죄송해요 / 실례합니다.', en: 'Sorry. / Excuse me.', e: '😅' },
            { es: 'Lo siento.', ko: '유감이에요 / 미안해요.', en: 'I’m sorry.', e: '😔' },
            { es: 'Por favor.', ko: '부탁해요.', en: 'Please.', e: '🤲' },
            { es: '¿Cómo? / ¿Perdón?', ko: '네? 뭐라고요?', en: 'Sorry? / Pardon?', e: '❓' },
            { es: 'No le / te entiendo.', ko: '못 알아듣겠어요.', en: 'I don’t understand you.', e: '🤷' },
            { es: '¿Puede / Puedes repetir?', ko: '다시 말해 주시겠어요?', en: 'Can you repeat?', e: '🔁' }
          ] },
        { type: 'table', title: { es: 'Formal / Informal', ko: '격식 / 비격식', en: 'Formal / Informal' },
          head: ['Formal', 'Informal'],
          rows: [
            ['¿Qué desea(n)?', '¿Qué quieres?'],
            ['¿Puede repetir, por favor?', '¿Puedes repetir, por favor?'],
            ['¿Quiere tortilla de patatas?', '¿Quieres tortilla de patatas?'],
            ['No le entiendo.', 'No te entiendo.'],
            ['Perdone.', 'Perdona.']
          ] },
        { type: 'vocab', title: { es: '2. Las comidas y bebidas', ko: '2. 음식과 음료', en: '2. Food and drinks' },
          items: [
            { es: 'el aceite', ko: '기름(올리브유)', en: 'oil', e: '🫒' },
            { es: 'el agua', ko: '물', en: 'water', e: '💧' },
            { es: 'el arroz', ko: '쌀, 밥', en: 'rice', e: '🍚' },
            { es: 'el azúcar', ko: '설탕', en: 'sugar', e: '🍬' },
            { es: 'los bollos', ko: '빵(번)', en: 'buns', e: '🧁' },
            { es: 'el café con leche', ko: '밀크커피', en: 'white coffee', e: '☕' },
            { es: 'el café solo', ko: '블랙커피', en: 'black coffee', e: '☕' },
            { es: 'la carne', ko: '고기', en: 'meat', e: '🥩' },
            { es: 'el café cortado', ko: '우유를 조금 넣은 커피', en: 'coffee with a dash of milk', e: '☕' },
            { es: 'el cruasán', ko: '크루아상', en: 'croissant', e: '🥐' },
            { es: 'el chocolate', ko: '초콜릿, 핫초코', en: 'chocolate', e: '🍫' },
            { es: 'la ensaimada', ko: '엔사이마다(마요르카 빵)', en: 'ensaimada (Majorcan pastry)', e: '🥯' },
            { es: 'el gazpacho', ko: '가스파초(차가운 토마토 수프)', en: 'gazpacho (cold tomato soup)', e: '🍅' },
            { es: 'la leche', ko: '우유', en: 'milk', e: '🥛' },
            { es: 'la magdalena', ko: '마들렌(머핀)', en: 'muffin', e: '🧁' },
            { es: 'la manzana', ko: '사과', en: 'apple', e: '🍏' },
            { es: 'la naranja', ko: '오렌지', en: 'orange', e: '🍊' },
            { es: 'la paella', ko: '파에야', en: 'paella', e: '🥘' },
            { es: 'el pan', ko: '빵', en: 'bread', e: '🍞' },
            { es: 'la patata', ko: '감자', en: 'potato', e: '🥔' },
            { es: 'el pescado', ko: '생선', en: 'fish', e: '🐟' },
            { es: 'el plátano', ko: '바나나', en: 'banana', e: '🍌' },
            { es: 'el queso', ko: '치즈', en: 'cheese', e: '🧀' },
            { es: 'la sal', ko: '소금', en: 'salt', e: '🧂' },
            { es: 'el té', ko: '차', en: 'tea', e: '🍵' },
            { es: 'el tomate', ko: '토마토', en: 'tomato', e: '🍅' },
            { es: 'la tortilla', ko: '토르티야(스페인식 오믈렛)', en: 'Spanish omelette', e: '🍳' },
            { es: 'la tostada con mantequilla y la mermelada', ko: '버터 바른 토스트와 잼', en: 'toast with butter and jam', e: '🍞' },
            { es: 'la uva', ko: '포도', en: 'grape', e: '🍇' },
            { es: 'el zumo de naranja', ko: '오렌지 주스', en: 'orange juice', e: '🧃' }
          ] },
        { type: 'table', title: { es: '3a. La forma para conocer el género de las palabras', ko: '3a. 명사의 성을 아는 방법', en: '3a. How to know the gender of words' },
          head: ['', 'Masculino', 'Femenino'],
          rows: [
            ['-o / -a', 'alumno, niño, gato', 'alumna, niña, gata'],
            ['consonante / +a', 'profesor, señor', 'profesora, señora'],
            ['palabras distintas', 'hombre, padre, toro', 'mujer, madre, vaca'],
            ['cosas (sin norma)', 'teléfono, día, café, arroz', 'tortilla, mano, noche, información']
          ] },
        { type: 'table', title: { es: '3b. Y los artículos', ko: '3b. 관사', en: '3b. And the articles' },
          head: ['', 'Determinado M.', 'Determinado F.', 'Indeterminado M.', 'Indeterminado F.'],
          rows: [['Singular', 'el', 'la', 'un', 'una'], ['Plural', 'los', 'las', 'unos', 'unas']] },
        { type: 'table', title: { es: '3c. El número del nombre', ko: '3c. 명사의 수', en: '3c. Number of nouns' },
          head: ['Singular', 'Plural'],
          rows: [
            ['acabado en vocal: amigo, fiesta, café', '+s: amigos, fiestas, cafés'],
            ['acabado en consonante o en -í: información, jamón, marroquí', '+es: informaciones, jamones, marroquíes'],
            ['-z: el arroz', '-ces: los arroces'],
            ['-s: el lunes', 'no cambia: los lunes']
          ] }
      ] }
  ]
});

ECO.unit({
  num: 6,
  title: 'Bienvenida, Lola',
  emoji: '🏠👨‍👩‍👧',
  pages: '56–65',
  topics: { ko: '집 · 가족 · 사람 묘사 · 좋아하는 것', en: 'The home · family · describing people · likes' },
  goals: [
    { es: 'Describir la vivienda.', ko: '집 묘사하기', en: 'Describe a home' },
    { es: 'Identificar a la familia y describir personas.', ko: '가족을 소개하고 사람 묘사하기', en: 'Identify family members and describe people' },
    { es: 'Expresar gustos y aficiones.', ko: '취향과 취미 표현하기', en: 'Express likes and hobbies' }
  ],
  people: { 'Lola': 'f', 'Raquel': 'f', 'Julia': 'f', 'Mario': 'm', 'Javier': 'm', 'Óscar': 'm', 'Todos': 'm' },
  sections: [
    /* ───────────── PORTADA ───────────── */
    { id: 'portada', tag: '', name: 'Portada',
      sub: { es: 'Bienvenida, Lola', ko: '환영해, 롤라', en: 'Welcome, Lola' },
      blocks: [
        { type: 'reading', title: { es: 'Anuncio', ko: '광고', en: 'Ad' },
          paras: [
            { es: 'Buscamos estudiante joven para compartir casa de dos pisos con jardín, tres habitaciones con terraza, dos cuartos de baño, cocina y salón, garaje. Zona tranquila, a 2 Km del centro de Madrid. Raquel. Teléfono: 914306219. raquel@ya.es',
              ko: '2층 집을 함께 쓸 젊은 학생을 구합니다. 정원, 테라스가 있는 방 3개, 욕실 2개, 부엌과 거실, 차고가 있습니다. 조용한 동네, 마드리드 시내에서 2km. 라켈. 전화: 914306219. raquel@ya.es',
              en: 'Looking for a young student to share a two-storey house with a garden, three bedrooms with a terrace, two bathrooms, a kitchen and living room, garage. Quiet area, 2 km from central Madrid. Raquel. Phone: 914306219. raquel@ya.es' }
          ] },
        { type: 'fill', id: 'p1', n: '1',
          title: { es: 'Lee este anuncio y escribe el nombre de las partes de la casa.', ko: '광고를 읽고 집의 각 부분 이름을 쓰세요.', en: 'Read the ad and write the names of the parts of the house.' },
          bank: ['habitaciones', 'cuarto de baño', 'cocina', 'salón', 'garaje', 'jardín', 'terraza'],
          items: [
            { q: '🛏️🛏️ → las ___', a: ['habitaciones'] },
            { q: '🛁🚽 → el ___', a: ['cuarto de baño|baño'] },
            { q: '🍳🧊 → la ___', a: ['cocina'] },
            { q: '🛋️📺 → el ___', a: ['salón'] },
            { q: '🚗 → el ___', a: ['garaje'] },
            { q: '🌳🌷 → el ___', a: ['jardín'] },
            { q: '☀️🪴 (fuera de la habitación) → la ___', a: ['terraza'] }
          ] },
        { type: 'fill', id: 'p2', n: '2', listen: true,
          title: { es: 'Escucha y completa los nombres de las partes de la casa y los miembros de la familia.', ko: '듣고 집의 각 부분과 가족 구성원의 이름을 완성하세요.', en: 'Listen and complete the names of the parts of the house and the family members.' },
          items: [
            { q: 'Lola: Aquí abajo están el ___ y el comedor.', a: ['salón'] },
            { q: 'Lola: A la izquierda está la ___ …', a: ['cocina'] },
            { q: 'Lola: … y a la derecha hay un cuarto de ___ pequeño.', a: ['baño'] },
            { q: 'Julia: El ___ me gusta, es muy bonito.', a: ['salón'] },
            { q: 'Mario: ¡Aquí está la cama de mi ___ Lola!', a: ['hermana'] },
            { q: 'Javier: ¡Y aquí está la mesa de mi ___ Lola!', a: ['hija'] },
            { q: 'Lola: El alto es Mario, mi ___.', a: ['hermano'] },
            { q: 'Lola: Javier es mi ___ y el pequeño es mi sobrino, el ___ de Mario.', a: ['padre', 'hijo'] },
            { q: 'Lola: ¿Subimos a las ___, mamá?', a: ['habitaciones'] },
            { q: 'Lola: Mira, ahí al final del pasillo está el ___ de baño. Y esta es mi ___.', a: ['cuarto', 'habitación'] },
            { q: 'Julia: Me gusta, es grande. ¡Y hay una ___!', a: ['terraza'] }
          ] },
        { type: 'dialog', title: { es: 'Bienvenida, Lola (transcripción)', ko: '환영해, 롤라 (대본)', en: 'Welcome, Lola (transcript)' },
          lines: [
            { who: 'Lola', es: 'Hola, Raquel. Mira, esta es mi madre. Mamá, esta es Raquel, la compañera de la casa.', ko: '안녕, 라켈. 봐, 우리 엄마야. 엄마, 이쪽은 하우스메이트 라켈이에요.', en: 'Hi, Raquel. Look, this is my mother. Mum, this is Raquel, my housemate.' },
            { who: 'Raquel', es: 'Hola.', ko: '안녕하세요.', en: 'Hello.' },
            { who: 'Julia', es: 'Encantada, Raquel. ¿Dónde pongo esta lámpara?', ko: '반가워요, 라켈. 이 램프는 어디에 둘까요?', en: 'Nice to meet you, Raquel. Where shall I put this lamp?' },
            { who: 'Raquel', es: 'De momento, allí, al lado del sofá o encima del sillón.', ko: '일단 저기, 소파 옆이나 안락의자 위에요.', en: 'For now, over there, next to the sofa or on the armchair.' },
            { who: 'Lola', es: '¿Te gusta la casa, mamá? Aquí abajo están el salón y el comedor. A la izquierda está la cocina y a la derecha hay un cuarto de baño pequeño.', ko: '엄마, 집 마음에 들어요? 여기 아래층에 거실과 식당이 있어요. 왼쪽은 부엌, 오른쪽에는 작은 욕실이 있어요.', en: 'Do you like the house, Mum? Down here are the living room and the dining room. On the left is the kitchen and on the right there is a small bathroom.' },
            { who: 'Julia', es: 'El salón me gusta, es muy bonito. ¿Y las habitaciones?', ko: '거실 마음에 든다, 아주 예쁘네. 방들은?', en: 'I like the living room, it’s very nice. And the bedrooms?' },
            { who: 'Lola', es: 'Están arriba.', ko: '위층에 있어요.', en: 'They’re upstairs.' },
            { who: 'Mario', es: '¡Aquí está la cama de mi hermana Lola!', ko: '여기 내 여동생 롤라의 침대 왔어요!', en: 'Here’s my sister Lola’s bed!' },
            { who: 'Javier', es: '¡Y aquí está la mesa de mi hija Lola!', ko: '그리고 여기 내 딸 롤라의 책상!', en: 'And here’s my daughter Lola’s table!' },
            { who: 'Óscar', es: '¡Y aquí está la silla de mi tía Lola!', ko: '그리고 여기 롤라 고모의 의자!', en: 'And here’s my aunt Lola’s chair!' },
            { who: 'Lola', es: '¡Papá, Mario, Óscar, por favor! Siempre están jugando.', ko: '아빠, 마리오, 오스카, 제발! 맨날 장난이야.', en: 'Dad, Mario, Óscar, please! They’re always messing around.' },
            { who: 'Raquel', es: 'Son muy simpáticos.', ko: '다들 정말 유쾌하시네.', en: 'They’re very nice.' },
            { who: 'Lola', es: 'El alto es Mario, mi hermano. Javier es mi padre y el pequeño es mi sobrino, el hijo de Mario.', ko: '키 큰 사람이 오빠 마리오야. 하비에르는 우리 아빠고, 꼬마는 조카, 마리오의 아들이야.', en: 'The tall one is Mario, my brother. Javier is my father and the little one is my nephew, Mario’s son.' },
            { who: 'Raquel', es: '¡Hola a todos!', ko: '모두 안녕하세요!', en: 'Hello, everyone!' },
            { who: 'Todos', es: '¡Hola!', ko: '안녕!', en: 'Hello!' },
            { who: 'Lola', es: '¿Subimos a las habitaciones, mamá? Mira, ahí al final del pasillo está el cuarto de baño. Y esta es mi habitación.', ko: '엄마, 방에 올라가 볼까요? 봐요, 복도 끝에 욕실이 있어요. 그리고 여기가 제 방이에요.', en: 'Shall we go up to the bedrooms, Mum? Look, the bathroom is at the end of the corridor. And this is my room.' },
            { who: 'Julia', es: 'Me gusta, es grande. ¡Y hay una terraza!', ko: '좋다, 넓네. 테라스도 있구나!', en: 'I like it, it’s big. And there’s a terrace!' },
            { who: 'Raquel', es: 'Sí, es alegre, pero pequeña.', ko: '네, 밝긴 한데 작아요.', en: 'Yes, it’s bright, but small.' }
          ] }
      ] },

    /* ───────────── A ───────────── */
    { id: 'a', tag: 'A', name: 'Comprensión y práctica',
      sub: { es: 'La vivienda y las personas', ko: '집과 사람들', en: 'The home and people' },
      blocks: [
        { type: 'choice', id: 'a1', n: '1', listen: true,
          title: { es: '¿Qué oyes?', ko: '무엇이 들리나요?', en: 'What do you hear?' },
          items: [
            { say: '¿Dónde pongo esta lámpara?', opts: ['¿Dónde pongo esta lámpara?', '¿Dónde pones la lámpara?'], a: 0 },
            { say: 'El salón me gusta.', opts: ['El salón me gusta.', 'El salón no me gusta.'], a: 0 },
            { say: 'Aquí está la cama.', opts: ['Aquí está la cama.', 'Allí está la cama.'], a: 0 },
            { say: 'Este es mi sobrino.', opts: ['Este es mi sobrino.', 'Ese es mi sobrino.'], a: 0 },
            { say: 'Esta es mi habitación.', opts: ['Esta es mi habitación.', 'Está mi habitación.'], a: 0 }
          ] },
        { type: 'tf', id: 'a2', n: '2',
          title: { es: 'Di si es verdadero (V) o falso (F).', ko: '맞으면 V, 틀리면 F를 고르세요.', en: 'Say if it is true (V) or false (F).' },
          items: [
            { q: 'Raquel y Lola son compañeras de casa.', a: true },
            { q: 'Las habitaciones están abajo.', a: false },
            { q: 'A la madre de Lola no le gusta el salón.', a: false },
            { q: 'En el salón hay un sofá.', a: true },
            { q: 'Mario es alto.', a: true },
            { q: 'El sobrino de Lola se llama Óscar.', a: true },
            { q: 'En la casa hay dos cuartos de baño.', a: true }
          ] },
        { type: 'reading', title: { es: '3a. Lee el texto sobre la familia de Lola.', ko: '3a. 롤라의 가족에 관한 글을 읽으세요.', en: '3a. Read the text about Lola’s family.' },
          paras: [
            { es: 'Esta es la foto de mi familia. Somos ocho. Yo soy la chica delgada y estoy entre mi padre y mi madre, se llaman Javier y Julia. Mi padre es el de gafas. Es muy simpático.',
              ko: '이건 우리 가족 사진이에요. 우리는 여덟 명이에요. 저는 마른 여자아이고 아빠와 엄마 사이에 있어요. 부모님 이름은 하비에르와 훌리아예요. 아빠는 안경 쓴 사람이에요. 아주 다정해요.',
              en: 'This is my family photo. There are eight of us. I’m the slim girl, between my father and my mother; their names are Javier and Julia. My father is the one with glasses. He’s very nice.' },
            { es: 'A la derecha de mi padre están mis abuelos, Dolores y Pascual, son los padres de mi madre. Son ya mayores, pero muy alegres. El chico alto, guapo y de bigote es mi hermano Mario. Lucía, la mujer rubia, es su esposa, mi cuñada. Es una mujer muy inteligente. Es profesora en la universidad. Ellos tienen un hijo de siete años: es mi sobrino Óscar. Es muy divertido.',
              ko: '아빠 오른쪽에는 할머니 돌로레스와 할아버지 파스쿠알이 계세요. 엄마의 부모님이에요. 연세가 많지만 아주 쾌활하세요. 키 크고 잘생긴 콧수염 남자는 오빠 마리오예요. 금발 여자 루시아는 그의 아내, 제 새언니예요. 아주 똑똑하고 대학교수예요. 두 사람에게는 일곱 살 아들이 있어요. 제 조카 오스카예요. 아주 재미있어요.',
              en: 'To my father’s right are my grandparents, Dolores and Pascual, my mother’s parents. They’re old now, but very cheerful. The tall, handsome boy with a moustache is my brother Mario. Lucía, the blonde woman, is his wife, my sister-in-law. She’s a very intelligent woman. She’s a university lecturer. They have a seven-year-old son: my nephew Óscar. He’s very funny.' }
          ] },
        { type: 'fill', id: 'a3b', n: '3b',
          title: { es: 'Completa las frases.', ko: '문장을 완성하세요.', en: 'Complete the sentences.' },
          bank: ['hermano/a', 'tío/a', 'cuñado/a', 'nieto/a', 'abuelo/a', 'madre', 'hijo/a', 'esposo/a'],
          items: [
            { q: 'Julia es la ___ de Javier.', a: ['esposa|mujer'] },
            { q: 'Julia y Javier son los ___ de Óscar.', a: ['abuelos'] },
            { q: 'Lucía es la ___ de Óscar.', a: ['madre'] },
            { q: 'Lola y Mario son ___.', a: ['hermanos'] },
            { q: 'Lola es la ___ de Óscar.', a: ['tía'] },
            { q: 'Lola y Mario son los ___ de Dolores y Pascual.', a: ['nietos'] },
            { q: 'Lucía y Lola son ___.', a: ['cuñadas'] },
            { q: 'Julia es ___ de Dolores y Pascual.', a: ['hija|la hija'] }
          ] },
        { type: 'match', id: 'a3c', n: '3c',
          title: { es: '¿Cómo son? Relaciona.', ko: '어떤 사람들인가요? 연결하세요.', en: 'What are they like? Match.' },
          left: ['Mario es…', 'Óscar es…', 'Javier, Mario y Óscar son…', 'Javier tiene…', 'Lucía es…'],
          right: ['rubia y muy inteligente.', 'gafas.', 'simpáticos.', 'muy divertido.', 'alto y tiene bigote.'],
          a: [4, 3, 2, 1, 0] },
        { type: 'open', id: 'a4', n: '4',
          title: { es: 'Haz el árbol de tu familia y explícalo.', ko: '가계도를 그리고 설명하세요.', en: 'Draw your family tree and explain it.' },
          items: [
            { q: '¿Cómo es tu familia? ¿Cuántos sois?', model: 'En mi familia somos cuatro: mi padre, mi madre, mi hermana y yo.' },
            { q: 'Describe a una persona de tu familia.', model: 'Mi padre se llama Juan. Es alto, moreno y lleva gafas. Es muy simpático.' }
          ] }
      ] },

    /* ───────────── B ───────────── */
    { id: 'b', tag: 'B', name: 'Pronunciación y ortografía',
      sub: { es: 'La ele (l), elle (ll) y la i griega (y)', ko: 'l, ll, y의 발음', en: 'The letters l, ll and y' },
      blocks: [
        { type: 'note', es: 'La letra <b>L</b> se pronuncia [l].<br>La letra <b>Y</b> se pronuncia [i] si va sola o a final de palabra.<br>La letra <b>LL</b> y la <b>Y</b> (a principio de palabra o en medio) se pronuncian [y].',
          ko: '<b>L</b>은 [l]로 발음합니다.<br><b>Y</b>가 혼자 쓰이거나 단어 끝에 오면 [i]로 발음합니다.<br><b>LL</b>과 단어 처음·중간의 <b>Y</b>는 [y]로 발음합니다.',
          en: '<b>L</b> is pronounced [l].<br><b>Y</b> is pronounced [i] when alone or at the end of a word.<br><b>LL</b> and <b>Y</b> (at the beginning or in the middle of a word) are pronounced [y].' },
        { type: 'dictation', id: 'b1', n: '1', listen: true,
          title: { es: 'Escucha y repite la pronunciación de las palabras siguientes.', ko: '다음 단어의 발음을 듣고 따라 하세요. (받아쓰기)', en: 'Listen and repeat the pronunciation of these words. (Write them.)' },
          items: [ { say: 'lámpara' }, { say: 'hablamos' }, { say: 'árbol' }, { say: 'y' }, { say: 'soy' }, { say: 'rey' },
                   { say: 'llamar' }, { say: 'llorar' }, { say: 'paella' }, { say: 'yo' }, { say: 'ayer' }, { say: 'uruguayo' } ] },
        { type: 'dictation', id: 'b2', n: '2', listen: true,
          title: { es: 'Sonido [l]. Escucha y repite.', ko: '[l] 소리. 듣고 따라 하세요.', en: 'Sound [l]. Listen and repeat.' },
          items: [ { say: 'novela' }, { say: 'libro' }, { say: 'abril' }, { say: 'lengua' }, { say: 'fundamental' }, { say: 'feliz' } ] },
        { type: 'dictation', id: 'b3', n: '3', listen: true,
          title: { es: 'Sonido [y]. Escucha y repite.', ko: '[y] 소리. 듣고 따라 하세요.', en: 'Sound [y]. Listen and repeat.' },
          items: [ { say: 'lluvia' }, { say: 'llorar' }, { say: 'yegua' }, { say: 'apellido' }, { say: 'calle' }, { say: 'playa' },
                   { say: 'desayuno' }, { say: 'taller' }, { say: 'yogur' } ] },
        { type: 'dictation', id: 'b4', n: '4', listen: true,
          title: { es: 'Sonido [i]. Escucha y repite.', ko: '[i] 소리. 듣고 따라 하세요.', en: 'Sound [i]. Listen and repeat.' },
          items: [ { say: 'y' }, { say: 'rey' }, { say: 'voy' }, { say: 'estoy' }, { say: 'hay' }, { say: 'Paraguay' } ] },
        { type: 'choice', id: 'b5', n: '5', listen: true,
          title: { es: 'Contraste [l] y [y]. ¿Qué oyes?', ko: '[l]과 [y]의 대조. 무엇이 들리나요?', en: 'Contrast [l] and [y]. What do you hear?' },
          items: [
            { say: 'lloro', opts: ['loro', 'lloro'], a: 1 },
            { say: 'allá', opts: ['alá', 'allá'], a: 1 },
            { say: 'pollo', opts: ['polo', 'pollo'], a: 1 },
            { say: 'vale', opts: ['vale', 'valle'], a: 0 }
          ] },
        { type: 'choice', id: 'b6', n: '6', listen: true,
          title: { es: 'Contraste [l] y [r]. Escribe 1 ó 2 según el orden en que lo escuchas.', ko: '[l]과 [r]의 대조. 들리는 순서대로 1, 2를 고르세요.', en: 'Contrast [l] and [r]. Mark 1 or 2 in the order you hear them.' },
          items: [
            { q: 'a. Hola / Hora', say: 'hora… hola', opts: ['1 Hola – 2 Hora', '1 Hora – 2 Hola'], a: 1 },
            { q: 'b. Pala / Para', say: 'pala… para', opts: ['1 Pala – 2 Para', '1 Para – 2 Pala'], a: 0 },
            { q: 'c. Hablamos / Abramos', say: 'abramos… hablamos', opts: ['1 Hablamos – 2 Abramos', '1 Abramos – 2 Hablamos'], a: 1 },
            { q: 'd. Abril / Abrir', say: 'abril… abrir', opts: ['1 Abril – 2 Abrir', '1 Abrir – 2 Abril'], a: 0 }
          ] },
        { type: 'speak', n: '7',
          title: { es: 'Piensa en otras palabras y díctaselas a tu compañero.', ko: '다른 단어를 생각해서 짝에게 받아쓰기를 시켜 보세요.', en: 'Think of other words and dictate them to your partner.' },
          prompt: { ko: 'l, ll, y가 들어간 단어를 골라 짝에게 불러 주세요.', en: 'Choose words with l, ll or y and dictate them to your partner.' },
          model: [ { who: 'A', es: 'Llave. Silla. Leche. Mayo. Hoy.' }, { who: 'B', es: '¿Llave con elle?' }, { who: 'A', es: 'Sí, con elle.' } ] }
      ] },

    /* ───────────── C ───────────── */
    { id: 'c', tag: 'C', name: 'Léxico',
      sub: { es: 'La casa y adjetivos de descripción', ko: '집과 묘사 형용사', en: 'The house and descriptive adjectives' },
      blocks: [
        { type: 'reading', title: { es: '1a. Mi nuevo piso', ko: '1a. 나의 새 아파트', en: '1a. My new flat' },
          paras: [
            { es: 'Me gusta mi nuevo piso. Está en el sexto, pero el edificio tiene ascensor. La habitación pequeña está enfrente de la entrada. Sigues por el pasillo y a la derecha está la habitación grande y después un cuarto de baño. Al final está la cocina. Al final del pasillo, a la izquierda, están el salón y el comedor. Hay otra habitación más y otro cuarto de baño.',
              ko: '나는 새 아파트가 마음에 든다. 6층이지만 건물에 엘리베이터가 있다. 작은 방은 현관 맞은편에 있다. 복도를 따라가면 오른쪽에 큰 방이 있고 그다음에 욕실이 있다. 끝에는 부엌이 있다. 복도 끝 왼쪽에는 거실과 식당이 있다. 방이 하나 더 있고 욕실도 하나 더 있다.',
              en: 'I like my new flat. It’s on the sixth floor, but the building has a lift. The small bedroom is opposite the entrance. You go along the corridor and on the right is the big bedroom and then a bathroom. At the end is the kitchen. At the end of the corridor, on the left, are the living room and the dining room. There is one more bedroom and another bathroom.' }
          ] },
        { type: 'fill', id: 'c1a', n: '1a',
          title: { es: 'Lee y después escribe en el plano de la casa las partes de este piso.', ko: '글을 읽고 이 아파트의 각 부분을 쓰세요. (평면도 대신 문장 완성)', en: 'Read and then write the parts of this flat on the plan. (Sentence completion instead of the plan.)' },
          bank: ['entrada', 'habitación', 'cuarto de baño', 'cocina', 'salón', 'comedor', 'ascensor', 'sexto'],
          items: [
            { q: 'El piso está en el ___, pero el edificio tiene ___.', a: ['sexto', 'ascensor'] },
            { q: 'La habitación pequeña está enfrente de la ___.', a: ['entrada'] },
            { q: 'A la derecha del pasillo está la ___ grande.', a: ['habitación'] },
            { q: 'Después de la habitación grande hay un ___.', a: ['cuarto de baño'] },
            { q: 'Al final está la ___.', a: ['cocina'] },
            { q: 'Al final del pasillo, a la izquierda, están el ___ y el ___.', a: ['salón', 'comedor'] }
          ] },
        { type: 'match', id: 'c1b', n: '1b',
          title: { es: 'Relaciona estas palabras con los dibujos.', ko: '단어를 그림과 연결하세요.', en: 'Match these words with the pictures.' },
          left: ['1 🍽️ (mueble con cuatro patas)', '2 🚪👕 (para la ropa)', '3 🪴', '4 🛏️', '5 📚 (para los libros)', '6 💡', '7 🪑', '8 🛋️ (para dos o tres personas)', '9 💺 (silla grande y cómoda)'],
          right: ['mesa', 'sillón', 'estantería', 'lámpara', 'silla', 'sofá', 'cama', 'planta', 'armario'],
          a: [0, 8, 7, 6, 2, 3, 4, 5, 1] },
        { type: 'match', id: 'c2a', n: '2a',
          title: { es: 'Observa las imágenes y relaciona los contrarios.', ko: '그림을 보고 반대말을 연결하세요.', en: 'Look at the pictures and match the opposites.' },
          left: ['delgado, a', 'alto, a', 'joven', 'rubio, a', 'guapo, a'],
          right: ['viejo, a', 'moreno, a', 'gordo, a', 'feo, a', 'bajo, a'],
          a: [2, 4, 0, 1, 3] },
        { type: 'match', id: 'c2b', n: '2b',
          title: { es: 'Relaciona.', ko: '반대말을 연결하세요.', en: 'Match (opposites).' },
          left: ['simpático, a', 'inteligente', 'divertido, a'],
          right: ['aburrido', 'antipático, a', 'tonto, a'],
          a: [1, 2, 0] },
        { type: 'speak', n: '2c',
          title: { es: 'Describe a una persona de la clase. Tus compañeros adivinan quién es.', ko: '반 친구 한 명을 묘사하세요. 친구들이 누구인지 맞힙니다.', en: 'Describe someone in the class. Your classmates guess who it is.' },
          prompt: { ko: '외모와 성격 형용사를 사용해 묘사해 보세요.', en: 'Use adjectives for appearance and personality.' },
          model: [ { who: 'A', es: 'Es una chica alta y morena. Es muy simpática y divertida.' }, { who: 'B', es: '¿Es Ana?' }, { who: 'A', es: '¡Sí!' } ] }
      ] },

    /* ───────────── D1 ───────────── */
    { id: 'd1', tag: 'D', name: 'Gramática',
      sub: { es: 'HAY / ESTÁ(N). Los demostrativos. AQUÍ, AHÍ, ALLÍ', ko: 'HAY / ESTÁ(N), 지시사, AQUÍ·AHÍ·ALLÍ', en: 'HAY / ESTÁ(N). Demonstratives. AQUÍ, AHÍ, ALLÍ' },
      blocks: [
        { type: 'table', title: { es: '1a. Observa: HAY', ko: '1a. 관찰: HAY (있다 – 존재)', en: '1a. Look: HAY (there is/are)' },
          head: ['Estructura', 'Ejemplo'],
          rows: [
            ['HAY + un(o), una, unos, unas (+ sustantivo)', '<i>Hay una (mesa).</i>'],
            ['HAY + un(o), dos, tres… (+ sustantivo)', '<i>Hay dos cuartos de baño.</i>'],
            ['HAY + sustantivo', '<i>En mi habitación no hay terraza.</i>']
          ],
          note: { ko: 'HAY는 정해지지 않은 것이 “있다/없다”를 말할 때 씁니다. 형태는 항상 hay (단수·복수 동일).', en: 'HAY says something (unspecified) exists. It never changes: hay for singular and plural.' } },
        { type: 'table', title: { es: '1a. Observa: ESTÁ(N)', ko: '1a. 관찰: ESTÁ(N) (위치)', en: '1a. Look: ESTÁ(N) (location)' },
          head: ['Estructura', 'Ejemplo'],
          rows: [
            ['ESTÁ(N) + el, la, los, las + sustantivo', '<i>A la derecha está la cocina.</i>'],
            ['ESTÁ(N) + preposición', '<i>La mesa está a la derecha de la cama.</i>']
          ],
          note: { ko: 'ESTÁ(N)은 이미 알고 있는 특정한 것(정관사·고유명사)이 “어디에 있는지” 말할 때 씁니다.', en: 'ESTÁ(N) tells where a specific, known thing (definite article / proper noun) is.' } },
        { type: 'fill', id: 'd1b', n: '1b',
          title: { es: 'Completa con HAY o ESTÁ(N).', ko: 'HAY 또는 ESTÁ(N)로 완성하세요.', en: 'Complete with HAY or ESTÁ(N).' },
          bank: ['hay', 'está', 'están'],
          items: [
            { q: 'En esta calle ___ dos restaurantes.', a: ['hay'] },
            { q: 'Cerca de aquí ___ la Puerta del Sol.', a: ['está'] },
            { q: 'Al final del pasillo ___ la terraza.', a: ['está'] },
            { q: 'En mi casa no ___ animales.', a: ['hay'] },
            { q: '¿___ una farmacia por aquí, por favor?', a: ['Hay'] },
            { q: 'Mis sobrinos ___ en su habitación.', a: ['están'] },
            { q: '¿Dónde ___ el cuarto de baño, por favor?', a: ['está'] },
            { q: '¿___ un estanco cerca, por favor?', a: ['Hay'] },
            { q: 'Las lámparas ___ encima de la cama.', a: ['están'] },
            { q: '___ una habitación.', a: ['Hay'] }
          ] },
        { type: 'table', title: { es: '2a. Observa: adverbios y demostrativos', ko: '2a. 관찰: 장소 부사와 지시사', en: '2a. Look: adverbs of place and demonstratives' },
          head: ['Adverbios', '', 'Masculino', 'Femenino', 'Neutro'],
          rows: [
            ['aquí', '– lejos', 'este, estos', 'esta, estas', 'esto'],
            ['ahí', '↓', 'ese, esos', 'esa, esas', 'eso'],
            ['allí', '+ lejos', 'aquel, aquellos', 'aquella, aquellas', 'aquello']
          ],
          note: { ko: 'aquí/este = 말하는 사람 가까이, ahí/ese = 듣는 사람 가까이(조금 멀리), allí/aquel = 둘 다에게서 멀리.', en: 'aquí/este = near the speaker, ahí/ese = near the listener (a bit far), allí/aquel = far from both.' } },
        { type: 'choice', id: 'd2b', n: '2b',
          title: { es: 'Señala la respuesta correcta.', ko: '알맞은 답을 고르세요.', en: 'Choose the correct answer.' },
          items: [
            { q: 'Mi casa es ___ de allí.', opts: ['esta', 'aquello', 'aquella'], a: 2 },
            { q: '¿Conoces a ___ persona de ahí?', opts: ['ese', 'esa', 'esta'], a: 1 },
            { q: '___ restaurante está aquí cerca.', opts: ['Eso', 'Este', 'Aquel'], a: 1 },
            { q: '___ de allí no son mis hijos.', opts: ['Aquellas', 'Estos', 'Aquellos'], a: 2 }
          ] },
        { type: 'fill', id: 'd2c', n: '2c',
          title: { es: 'Completa los diálogos con AQUÍ, AHÍ, ALLÍ.', ko: 'AQUÍ, AHÍ, ALLÍ로 대화를 완성하세요.', en: 'Complete the dialogues with AQUÍ, AHÍ, ALLÍ.' },
          bank: ['aquí', 'ahí', 'allí'],
          items: [
            { q: '• Mira, esa es mi hermana Lourdes. ○ ¿Cuál, aquella morena? • No, no. Esa de ___.', a: ['ahí'] },
            { q: '• Aquella mujer de ___ es mi madre. ○ ¿La rubia? • Sí, sí.', a: ['allí'] },
            { q: '• ¿Comemos en aquel restaurante? ○ ¿En cuál, es ese de ___? • No, hombre. En aquel de ___.', a: ['ahí', 'allí'] },
            { q: '• ¿Qué es eso? ○ ¿El qué, esto? • No, no. Eso de ___.', a: ['ahí'] }
          ] }
      ] },

    /* ───────────── D2 ───────────── */
    { id: 'd2', tag: 'D', name: 'Gramática',
      sub: { es: 'El verbo GUSTAR. Cuantificadores. TAMBIÉN, TAMPOCO', ko: 'GUSTAR 동사, 정도 표현, TAMBIÉN·TAMPOCO', en: 'The verb GUSTAR. Quantifiers. TAMBIÉN, TAMPOCO' },
      blocks: [
        { type: 'table', title: { es: '3a. Observa: el verbo GUSTAR', ko: '3a. 관찰: GUSTAR 동사', en: '3a. Look: the verb GUSTAR' },
          head: ['', 'Pronombre', 'Verbo', 'Ejemplo'],
          rows: [
            ['(No)', 'me / te / le', 'GUSTA', 'la casa. / este sofá. / tu hermano.'],
            ['(No)', 'nos / os / les', 'GUSTAN', 'las casas. / estos sofás. / tus hermanos.']
          ],
          note: { ko: '좋아하는 대상이 단수면 gusta, 복수면 gustan. 사람은 간접목적대명사(me, te, le, nos, os, les)로 나타냅니다. 실제로는 어느 대명사와도 gusta/gustan 둘 다 쓸 수 있어요.', en: 'Singular thing liked → gusta; plural → gustan. The person is an indirect object pronoun (me, te, le, nos, os, les). Any pronoun can go with gusta or gustan.' } },
        { type: 'fill', id: 'd3b', n: '3b',
          title: { es: 'Completa con GUSTA o GUSTAN.', ko: 'GUSTA 또는 GUSTAN으로 완성하세요.', en: 'Complete with GUSTA or GUSTAN.' },
          bank: ['gusta', 'gustan'],
          items: [
            { q: 'A Lola le ___ su habitación.', a: ['gusta'] },
            { q: 'A mí no me ___ el café.', a: ['gusta'] },
            { q: 'A mis padres les ___ la terraza.', a: ['gusta'] },
            { q: '¿Os ___ aquellas chicas?', a: ['gustan'] },
            { q: 'No nos ___ el restaurante.', a: ['gusta'] },
            { q: '¿A ti te ___ esas lámparas?', a: ['gustan'] }
          ] },
        { type: 'match', id: 'd3c', n: '3c',
          title: { es: 'Relaciona.', ko: '연결하세요.', en: 'Match.' },
          left: ['A mí', 'A Juan y a Pedro', 'A usted', 'A nosotras', 'A ti', 'A ella', 'A vosotros'],
          right: ['Me', 'Te', 'Le', 'Nos', 'Os', 'Les'],
          a: [0, 5, 2, 3, 1, 2, 4] },
        { type: 'fill', id: 'd3d', n: '3d',
          title: { es: 'Escribe el pronombre personal correcto: ME, TE, LE, NOS, OS, LES.', ko: '알맞은 대명사를 쓰세요: ME, TE, LE, NOS, OS, LES.', en: 'Write the correct personal pronoun: ME, TE, LE, NOS, OS, LES.' },
          bank: ['me', 'te', 'le', 'nos', 'os', 'les'],
          items: [
            { q: 'A nosotros ___ gusta la playa.', a: ['nos'] },
            { q: '¿A ti ___ gusta mi sombrero?', a: ['te'] },
            { q: 'A ella ___ gustan los chicos altos.', a: ['le'] },
            { q: '¿A ustedes ___ gusta el cine?', a: ['les'] },
            { q: 'A mis amigos ___ gustan las rubias.', a: ['les'] },
            { q: 'A Luis no ___ gustan los aviones.', a: ['le'] }
          ] },
        { type: 'order', id: 'd4a', n: '4a',
          title: { es: 'Ordena los cuantificadores de más a menos.', ko: '정도 표현을 많은 것에서 적은 것 순으로 배열하세요.', en: 'Order the quantifiers from most to least.' },
          items: [ { a: 'mucho bastante un poco nada' } ] },
        { type: 'open', id: 'd4b', n: '4b',
          title: { es: 'Responde las preguntas.', ko: '질문에 답하세요.', en: 'Answer the questions.' },
          items: [
            { q: '¿Te gusta el tango?', model: 'Sí, me gusta bastante. / No, no me gusta nada.' },
            { q: '¿Te gustan los deportes?', model: 'Sí, me gustan mucho.' },
            { q: '¿Os gusta esta ciudad?', model: 'Sí, nos gusta mucho.' },
            { q: '¿Os gusta el cine?', model: 'Sí, nos gusta bastante.' },
            { q: '¿Os gustan las fiestas?', model: 'Sí, nos gustan mucho.' },
            { q: '¿Te gusta el café?', model: 'Me gusta un poco.' }
          ] },
        { type: 'dialog', title: { es: '5a. Observa: TAMBIÉN, TAMPOCO', ko: '5a. 관찰: TAMBIÉN(~도), TAMPOCO(~도 아니다)', en: '5a. Look: TAMBIÉN (too), TAMPOCO (neither)' },
          lines: [
            { who: 'A', es: 'A mí me gusta este sofá.', ko: '나는 이 소파가 좋아.', en: 'I like this sofa.' },
            { who: 'B', es: 'A mí también.', ko: '나도.', en: 'Me too.' },
            { who: 'A', es: 'A mí no.', ko: '나는 아니야.', en: 'I don’t.' },
            { who: 'A', es: 'No me gusta esta lámpara.', ko: '이 램프는 마음에 안 들어.', en: 'I don’t like this lamp.' },
            { who: 'B', es: 'A mí tampoco.', ko: '나도 안 들어.', en: 'Me neither.' },
            { who: 'A', es: 'A mí sí.', ko: '나는 좋아.', en: 'I do.' }
          ] },
        { type: 'note', ko: '긍정문에 동의 → A mí también / 반대 → A mí no. 부정문에 동의 → A mí tampoco / 반대 → A mí sí.', en: 'Agree with a positive → A mí también / disagree → A mí no. Agree with a negative → A mí tampoco / disagree → A mí sí.' },
        { type: 'open', id: 'd5b', n: '5b',
          title: { es: '¿Y a ti?', ko: '너는? (también / tampoco / sí / no로 답하세요)', en: 'And you? (Answer with también / tampoco / sí / no)' },
          items: [
            { q: 'Me gusta la comida italiana.', model: 'A mí también. / A mí no.' },
            { q: 'No me gusta el fútbol.', model: 'A mí tampoco. / A mí sí.' },
            { q: 'Me gusta el rock.', model: 'A mí también. / A mí no.' },
            { q: 'No me gusta el cine romántico.', model: 'A mí tampoco. / A mí sí.' },
            { q: 'No me gusta el chocolate.', model: 'A mí tampoco. / A mí sí.' },
            { q: 'Me gusta el café.', model: 'A mí también. / A mí no.' }
          ] }
      ] },

    /* ───────────── E ───────────── */
    { id: 'e', tag: 'E', name: 'Expresión oral',
      sub: { es: 'Describir la casa y a las personas', ko: '집과 사람 묘사하기', en: 'Describing the house and people' },
      blocks: [
        { type: 'match', id: 'e1a', n: '1a',
          title: { es: 'Relaciona.', ko: '사진(설명)과 문장을 연결하세요.', en: 'Match the photos (descriptions) and sentences.' },
          left: ['A 👱‍♂️ (pelo amarillo)', 'B 👨🏽 (pelo negro)', 'C 🧔 (pelo en la cara)', 'D 👨 (pelo sobre la boca)', 'E 🤓', 'F 🤠'],
          right: ['Es rubio.', 'Es moreno.', 'Tiene barba.', 'Tiene bigote.', 'Lleva gafas.', 'Lleva sombrero.'],
          a: [0, 1, 2, 3, 4, 5] },
        { type: 'table', title: { es: 'Describir a una persona', ko: '사람 묘사하기', en: 'Describing a person' },
          head: ['', 'Ejemplos'],
          rows: [
            ['Es + adjetivo', 'Es alto/a…'],
            ['Tiene + sustantivo', 'Tiene el pelo largo, corto… / Tiene bigote, barba…'],
            ['Lleva + sustantivo', 'Lleva gafas, sombrero…']
          ] },
        { type: 'speak', n: '1b',
          title: { es: 'Piensa en una persona y tu compañero te hace preguntas para adivinarlo.', ko: '한 사람을 떠올리면 짝이 질문해서 누구인지 맞힙니다.', en: 'Think of a person; your partner asks questions to guess who it is.' },
          prompt: { ko: '유명인 중에서 고르세요: Dalí, Isabel Allende, Rigoberta Menchú, Vargas Llosa, Penélope Cruz, Jennifer López, Antonio Banderas, Ricky Martin, Shakira, Enrique Iglesias, Pablo Picasso, García Márquez.', en: 'Choose a famous person: Dalí, Isabel Allende, Rigoberta Menchú, Vargas Llosa, Penélope Cruz, Jennifer López, Antonio Banderas, Ricky Martin, Shakira, Enrique Iglesias, Pablo Picasso, García Márquez.' },
          model: [ { who: 'A', es: '¿Es hombre o mujer?' }, { who: 'B', es: 'Mujer.' }, { who: 'A', es: '¿Es rubia?' }, { who: 'B', es: 'No, es morena.' }, { who: 'A', es: '¿Es Penélope Cruz?' }, { who: 'B', es: '¡Sí!' } ] },
        { type: 'open', id: 'e1c', n: '1c',
          title: { es: 'Descríbete a ti mismo. Después mezclamos las descripciones. Elige una y léela. ¿Quién es?', ko: '자신을 묘사하세요. 묘사를 섞은 뒤 하나를 골라 읽고 누구인지 맞혀 보세요.', en: 'Describe yourself. Then we mix the descriptions. Pick one and read it. Who is it?' },
          items: [ { q: '¿Cómo te ves?', model: 'Soy un hombre joven, alto y guapo. Soy inteligente, pero un poco aburrido.' } ] },
        { type: 'table', title: { es: 'Describir la casa', ko: '집 묘사하기', en: 'Describing the house' },
          head: ['', 'Ejemplos'],
          rows: [
            ['TIENE', 'un salón, dos habitaciones, una mesa…'],
            ['ES', 'grande, pequeño, alegre…'],
            ['HAY', 'una cocina, dos sillas, una terraza…'],
            ['El/la/los/las + sustantivo + ESTÁ(N)', 'en, cerca de, al lado de…']
          ] },
        { type: 'open', id: 'e2a', n: '2a',
          title: { es: 'Dibuja tu casa y descríbela.', ko: '집을 그리고 묘사하세요.', en: 'Draw your house and describe it.' },
          items: [ { q: '¿Cómo es tu casa?', model: 'Mi casa es grande y alegre. Tiene un salón, tres habitaciones, una cocina y dos cuartos de baño. Hay una terraza. La cocina está al lado del salón.' } ] },
        { type: 'vocab', title: { es: 'En España / En América', ko: '스페인 / 중남미 어휘', en: 'Spain / Latin America' },
          items: [
            { es: 'piso, apartamento → departamento', ko: '아파트', en: 'flat, apartment', e: '🏢' },
            { es: 'habitación, cuarto → pieza', ko: '방', en: 'room', e: '🛏️' },
            { es: 'ascensor → elevador', ko: '엘리베이터', en: 'lift, elevator', e: '🛗' }
          ] },
        { type: 'speak', n: '2b',
          title: { es: 'Describe tu habitación y tu compañero la dibuja al mismo tiempo.', ko: '내 방을 묘사하면 짝이 동시에 그림을 그립니다.', en: 'Describe your room and your partner draws it at the same time.' },
          prompt: { ko: 'hay, está(n), a la derecha de, al lado de, encima de 등을 사용하세요.', en: 'Use hay, está(n), a la derecha de, al lado de, encima de, etc.' },
          model: [ { who: 'A', es: 'En mi habitación hay una cama, una mesa y una silla. La mesa está al lado de la ventana. La lámpara está encima de la mesa.' }, { who: 'B', es: '¿Dónde está el armario?' }, { who: 'A', es: 'A la derecha de la cama.' } ] }
      ] },

    /* ───────────── MUNDO HISPANO ───────────── */
    { id: 'mundo', tag: '', name: 'Mundo hispano',
      sub: { es: 'La población étnica de América Latina', ko: '라틴아메리카의 민족 구성', en: 'The ethnic population of Latin America' },
      blocks: [
        { type: 'reading', title: { es: '1. Lee el texto.', ko: '1. 글을 읽으세요.', en: '1. Read the text.' },
          paras: [
            { es: 'La población de América Latina crece muy deprisa, por eso la mayoría de sus habitantes son muy jóvenes: más del 30% tiene menos de 15 años. Estos son los habitantes por países:',
              ko: '라틴아메리카의 인구는 매우 빠르게 늘고 있어서 주민 대부분이 아주 젊습니다. 30% 이상이 15세 미만입니다. 나라별 인구는 다음과 같습니다.',
              en: 'Latin America’s population is growing very fast, so most of its inhabitants are very young: more than 30% are under 15. These are the inhabitants by country:' }
          ] },
        { type: 'table', title: { es: 'Habitantes por países', ko: '나라별 인구', en: 'Inhabitants by country' },
          head: ['País', 'Habitantes', 'País', 'Habitantes'],
          rows: [
            ['Argentina', '36.578.000', 'Nicaragua', '4.983.000'],
            ['Bolivia', '8.143.000', 'Panamá', '2.816.000'],
            ['Chile', '15.018.000', 'Paraguay', '5.353.000'],
            ['Colombia', '41.566.000', 'Perú', '25.662.000'],
            ['Costa Rica', '3.933.000', 'Puerto Rico', '3.850.000'],
            ['Cuba', '11.159.000', 'Rep. Dominicana', '8.364.000'],
            ['Ecuador', '12.411.000', 'Uruguay', '3.313.000'],
            ['El Salvador', '6.159.000', 'Venezuela', '23.704.000'],
            ['Guatemala', '11.090.000', '', ''],
            ['Honduras', '6.316.000', '<b>Total</b>', '<b>327.789.000</b>'],
            ['México', '97.367.000', '', '']
          ] },
        { type: 'reading', title: { es: 'Los grupos étnicos', ko: '민족 집단', en: 'Ethnic groups' },
          paras: [
            { es: 'Con la llegada de los españoles a América empezó la mezcla de etnias. Estos son los grupos étnicos más importantes de América Latina:', ko: '스페인 사람들이 아메리카에 도착하면서 민족의 혼합이 시작되었습니다. 라틴아메리카의 주요 민족 집단은 다음과 같습니다.', en: 'With the arrival of the Spanish in America, the mixing of ethnic groups began. These are the most important ethnic groups in Latin America:' },
            { es: '<b>Indios:</b> son de origen asiático. En Guatemala, Ecuador, Perú, Bolivia y México son muy numerosos.', ko: '<b>원주민:</b> 아시아 기원. 과테말라, 에콰도르, 페루, 볼리비아, 멕시코에 매우 많습니다.', en: '<b>Indigenous people:</b> of Asian origin. Very numerous in Guatemala, Ecuador, Peru, Bolivia and Mexico.' },
            { es: '<b>Blancos:</b> de origen europeo. Son mayoría en Argentina, Uruguay, Chile y Costa Rica.', ko: '<b>백인:</b> 유럽 기원. 아르헨티나, 우루과이, 칠레, 코스타리카에서 다수입니다.', en: '<b>White people:</b> of European origin. The majority in Argentina, Uruguay, Chile and Costa Rica.' },
            { es: '<b>Mestizos:</b> mezcla de indio y blanco. Es el grupo más numeroso en Nicaragua, Honduras, El Salvador, Venezuela y Paraguay.', ko: '<b>메스티소:</b> 원주민과 백인의 혼혈. 니카라과, 온두라스, 엘살바도르, 베네수엘라, 파라과이에서 가장 많은 집단입니다.', en: '<b>Mestizos:</b> mix of indigenous and white. The largest group in Nicaragua, Honduras, El Salvador, Venezuela and Paraguay.' },
            { es: '<b>Negros:</b> los europeos los llevaron de África a América como esclavos. Viven sobre todo en Cuba, Puerto Rico, República Dominicana y Colombia.', ko: '<b>흑인:</b> 유럽인들이 노예로 아프리카에서 아메리카로 데려왔습니다. 주로 쿠바, 푸에르토리코, 도미니카공화국, 콜롬비아에 삽니다.', en: '<b>Black people:</b> Europeans brought them from Africa to America as slaves. They live mainly in Cuba, Puerto Rico, the Dominican Republic and Colombia.' },
            { es: '<b>Mulatos:</b> mezcla de negro y blanco.', ko: '<b>물라토:</b> 흑인과 백인의 혼혈.', en: '<b>Mulattos:</b> mix of black and white.' }
          ] },
        { type: 'choice', id: 'm2', n: '2',
          title: { es: 'Localiza los países en el mapa de este libro e indica dónde están.', ko: '지도에서 나라를 찾아 어디에 있는지 고르세요.', en: 'Find the countries on the map and say where they are.' },
          items: [
            { q: 'Argentina', opts: ['Centroamérica', 'el Caribe', 'Sudamérica', 'Norteamérica'], a: 2 },
            { q: 'Cuba', opts: ['Centroamérica', 'el Caribe', 'Sudamérica', 'Norteamérica'], a: 1 },
            { q: 'Guatemala', opts: ['Centroamérica', 'el Caribe', 'Sudamérica', 'Norteamérica'], a: 0 },
            { q: 'México', opts: ['Centroamérica', 'el Caribe', 'Sudamérica', 'Norteamérica'], a: 3 },
            { q: 'Perú', opts: ['Centroamérica', 'el Caribe', 'Sudamérica', 'Norteamérica'], a: 2 },
            { q: 'Honduras', opts: ['Centroamérica', 'el Caribe', 'Sudamérica', 'Norteamérica'], a: 0 },
            { q: 'República Dominicana', opts: ['Centroamérica', 'el Caribe', 'Sudamérica', 'Norteamérica'], a: 1 },
            { q: 'Paraguay', opts: ['Centroamérica', 'el Caribe', 'Sudamérica', 'Norteamérica'], a: 2 }
          ] },
        { type: 'choice', id: 'm3', n: '3',
          title: { es: '¿Qué país tiene más habitantes?', ko: '인구가 가장 많은 나라는?', en: 'Which country has the most inhabitants?' },
          items: [ { q: '¿Qué país tiene más habitantes?', opts: ['Argentina', 'Colombia', 'México', 'Perú'], a: 2 } ] },
        { type: 'tf', id: 'm4', n: '4',
          title: { es: 'Di si es verdadero (V) o falso (F).', ko: '맞으면 V, 틀리면 F를 고르세요.', en: 'Say if it is true (V) or false (F).' },
          items: [
            { q: 'La mayoría de los habitantes de América Latina son jóvenes.', a: true },
            { q: 'Los padres de un mulato son de origen indio y negro.', a: false },
            { q: 'En Guatemala viven muchos indios.', a: true },
            { q: 'Los negros llegaron a América desde Asia.', a: false },
            { q: 'En Cuba hay muchos mulatos y negros.', a: true },
            { q: 'La mayoría de los chilenos son mestizos.', a: false },
            { q: 'Los padres de una mestiza son de origen indio y blanco.', a: true }
          ] }
      ] },

    /* ───────────── SÍNTESIS ───────────── */
    { id: 'sintesis', tag: '', name: 'Síntesis',
      sub: { es: 'A B C D E', ko: '종합 정리', en: 'Unit review' },
      blocks: [
        { type: 'note', es: '1. Observa la imagen: un edificio con varios pisos (A–H).',
          ko: '그림: 여러 집이 보이는 건물 – A 아이들이 노는 방, B 욕조에서 목욕하는 여자, C 거실의 가족, D 어학원 수업, E 침대에서 자는 사람, F 길에서 위를 가리키는 남자들, G 우체국에 들어가는 남자, H 의자를 옮기는 이삿짐.',
          en: 'Picture: a building with several flats – A children playing in a room, B a woman in the bath, C a family in the living room, D a class at a language school, E someone sleeping in bed, F men in the street pointing up, G a man going into the post office, H movers carrying an armchair.' },
        { type: 'speak', n: '1a',
          title: { es: 'Describe un piso. ¿Qué hay?', ko: '집 하나를 묘사하세요. 무엇이 있나요?', en: 'Describe a flat. What is there?' },
          prompt: { ko: 'hay와 está(n)을 사용해 그림 속 집 하나를 묘사하세요.', en: 'Use hay and está(n) to describe one flat in the picture.' },
          model: [ { who: 'A', es: 'En el piso C hay un salón. Hay un sofá y una mesa. La familia está en el salón.' } ] },
        { type: 'speak', n: '1b',
          title: { es: 'Elige a una persona, di cómo es y qué está haciendo.', ko: '한 사람을 골라 어떤 사람인지, 무엇을 하고 있는지 말하세요.', en: 'Choose a person, say what he/she is like and what he/she is doing.' },
          prompt: { ko: '외모 형용사와 “está + -ando/-iendo” 를 사용하세요.', en: 'Use appearance adjectives and “está + -ando/-iendo”.' },
          model: [ { who: 'A', es: 'En el piso B hay una mujer morena, tiene el pelo largo. Está en el cuarto de baño.' }, { who: 'B', es: 'En el piso D hay un profesor rubio, lleva gafas. Está leyendo un libro.' } ] },
        { type: 'reading', title: { es: '1c. Inmobiliaria – Alquiler – Pisos', ko: '1c. 부동산 – 임대 – 아파트', en: '1c. Estate agent – Rentals – Flats' },
          paras: [
            { es: '<b>ATOCHA</b>, piso 4 dormitorios, salón, cocina, 2 baños, 2 terrazas, amueblado, muy soleado, ascensor, junto al metro. Comunidad incluida. Precio: 990 euros. Telf.: 806 51 55 06.',
              ko: '<b>아토차</b>: 침실 4개, 거실, 부엌, 욕실 2개, 테라스 2개, 가구 완비, 햇빛 잘 듦, 엘리베이터, 지하철역 옆. 관리비 포함. 가격: 990유로.',
              en: '<b>ATOCHA</b>: 4-bedroom flat, living room, kitchen, 2 bathrooms, 2 terraces, furnished, very sunny, lift, next to the metro. Service charges included. Price: 990 euros.' },
            { es: '<b>AUSTRIAS</b>, piso 100 m², 2 dormitorios, salón, cocina, 2 baños completos, exterior, muy luminoso, aire acondicionado, calefacción individual, ascensor, nueva construcción lujo, 4 balcones. Precio: 1.440 euros. mariao@yahoo.es Telf.: 770 72 44 34.',
              ko: '<b>아우스트리아스</b>: 100㎡, 침실 2개, 거실, 부엌, 완비된 욕실 2개, 바깥쪽 전망, 아주 밝음, 에어컨, 개별 난방, 엘리베이터, 고급 신축, 발코니 4개. 가격: 1,440유로.',
              en: '<b>AUSTRIAS</b>: 100 m² flat, 2 bedrooms, living room, kitchen, 2 full bathrooms, street-facing, very bright, air conditioning, individual heating, lift, new luxury building, 4 balconies. Price: 1,440 euros.' }
          ] },
        { type: 'tf', id: 's1c', n: '1c',
          title: { es: 'Buscas piso y encuentras estas dos ofertas. Compáralos. (V/F)', ko: '집을 구하다가 두 매물을 찾았습니다. 비교해 보세요. (V/F)', en: 'You are looking for a flat and find these two offers. Compare them. (T/F)' },
          items: [
            { q: 'El piso de Atocha tiene más dormitorios.', a: true },
            { q: 'El piso de Austrias es más barato.', a: false },
            { q: 'Los dos pisos tienen ascensor.', a: true },
            { q: 'El piso de Atocha está junto al metro.', a: true },
            { q: 'El piso de Austrias tiene un cuarto de baño.', a: false },
            { q: 'El piso de Atocha tiene dos terrazas.', a: true }
          ] },
        { type: 'open', id: 's1c2', n: '1c',
          title: { es: '¿Cuál te gusta más? ¿Por qué?', ko: '어느 집이 더 마음에 드나요? 왜요?', en: 'Which one do you like more? Why?' },
          items: [ { q: '¿Cuál te gusta más? ¿Por qué?', model: 'Me gusta más el piso de Atocha porque tiene cuatro dormitorios, dos terrazas y está junto al metro. Y es más barato.' } ] }
      ] },

    /* ───────────── YA CONOCES ───────────── */
    { id: 'yaconoces', tag: '', name: 'Ya conoces',
      sub: { es: 'A B C D E', ko: '이번 과에서 배운 것', en: 'What you know now' },
      blocks: [
        { type: 'table', title: { es: '1a. Las expresiones para ubicar objetos', ko: '1a. 물건의 위치를 말하는 표현', en: '1a. Expressions to locate objects' },
          head: ['Pregunta', 'Respuesta'],
          rows: [ ['¿Dónde está…?', 'Está en…'], ['¿Hay un / una…?', 'Hay un / una…'], ['¿Dónde pongo…?', ''] ] },
        { type: 'note', es: '<b>1b. Y para expresar gustos:</b> (No) me gusta mucho / bastante / un poco / nada.',
          ko: '좋아하는 정도 표현: mucho(많이) > bastante(꽤) > un poco(조금) > nada(전혀).', en: 'Expressing likes: mucho (a lot) > bastante (quite) > un poco (a little) > nada (not at all).' },
        { type: 'vocab', title: { es: '2a. Los miembros de la familia', ko: '2a. 가족 구성원', en: '2a. Family members' },
          items: [
            { es: 'el hermano', ko: '형제', en: 'brother', e: '👦' },
            { es: 'el tío', ko: '삼촌·이모부 등', en: 'uncle', e: '👨' },
            { es: 'el cuñado', ko: '처남·매형·시동생 등', en: 'brother-in-law', e: '🤝' },
            { es: 'el nieto', ko: '손자', en: 'grandson', e: '👶' },
            { es: 'el abuelo', ko: '할아버지', en: 'grandfather', e: '👴' },
            { es: 'la madre', ko: '어머니', en: 'mother', e: '👩' },
            { es: 'el padre', ko: '아버지', en: 'father', e: '👨‍🦱' },
            { es: 'el hijo', ko: '아들', en: 'son', e: '🧒' },
            { es: 'la esposa', ko: '아내', en: 'wife', e: '👰' },
            { es: 'el marido', ko: '남편', en: 'husband', e: '🤵' }
          ] },
        { type: 'vocab', title: { es: '2b. Las partes de la casa', ko: '2b. 집의 부분', en: '2b. Parts of the house' },
          items: [
            { es: 'la habitación', ko: '방, 침실', en: 'bedroom, room', e: '🛏️' },
            { es: 'la entrada', ko: '현관', en: 'entrance', e: '🚪' },
            { es: 'el pasillo', ko: '복도', en: 'corridor', e: '↔️' },
            { es: 'el cuarto de baño', ko: '욕실', en: 'bathroom', e: '🛁' },
            { es: 'el salón', ko: '거실', en: 'living room', e: '🛋️' },
            { es: 'el comedor', ko: '식당(방)', en: 'dining room', e: '🍽️' },
            { es: 'la cocina', ko: '부엌', en: 'kitchen', e: '🍳' },
            { es: 'la terraza', ko: '테라스', en: 'terrace', e: '☀️' }
          ] },
        { type: 'vocab', title: { es: '2c. Los muebles', ko: '2c. 가구', en: '2c. Furniture' },
          items: [
            { es: 'la mesa', ko: '탁자, 책상', en: 'table', e: '🍽️' },
            { es: 'el sillón', ko: '안락의자', en: 'armchair', e: '💺' },
            { es: 'la estantería', ko: '책장, 선반', en: 'shelves', e: '📚' },
            { es: 'la lámpara', ko: '램프', en: 'lamp', e: '💡' },
            { es: 'el escritorio', ko: '책상', en: 'desk', e: '🖥️' },
            { es: 'la silla', ko: '의자', en: 'chair', e: '🪑' },
            { es: 'el sofá', ko: '소파', en: 'sofa', e: '🛋️' },
            { es: 'la cama', ko: '침대', en: 'bed', e: '🛏️' },
            { es: 'el armario', ko: '옷장', en: 'wardrobe', e: '🚪' }
          ] },
        { type: 'vocab', title: { es: '2d. Los adjetivos de descripción física', ko: '2d. 외모 묘사 형용사', en: '2d. Adjectives for physical description' },
          items: [
            { es: 'delgado', ko: '마른', en: 'slim' }, { es: 'viejo', ko: '늙은', en: 'old' },
            { es: 'alto', ko: '키가 큰', en: 'tall' }, { es: 'moreno', ko: '갈색/검은 머리의, 피부가 가무잡잡한', en: 'dark-haired' },
            { es: 'joven', ko: '젊은', en: 'young' }, { es: 'gordo', ko: '뚱뚱한', en: 'fat' },
            { es: 'rubio', ko: '금발의', en: 'blond' }, { es: 'feo', ko: '못생긴', en: 'ugly' },
            { es: 'guapo', ko: '잘생긴, 예쁜', en: 'good-looking' }, { es: 'bajo', ko: '키가 작은', en: 'short' }
          ] },
        { type: 'vocab', title: { es: '2e. Los adjetivos de descripción del carácter', ko: '2e. 성격 묘사 형용사', en: '2e. Adjectives for personality' },
          items: [
            { es: 'simpático', ko: '친절한, 호감 가는', en: 'nice, friendly' }, { es: 'triste', ko: '슬픈', en: 'sad' },
            { es: 'antipático', ko: '불친절한', en: 'unfriendly' }, { es: 'divertido', ko: '재미있는', en: 'fun' },
            { es: 'tonto', ko: '어리석은', en: 'silly' }, { es: 'inteligente', ko: '똑똑한', en: 'intelligent' },
            { es: 'aburrido', ko: '지루한', en: 'boring' }
          ] },
        { type: 'table', title: { es: '3a. El contraste HAY y ESTÁ(N)', ko: '3a. HAY와 ESTÁ(N)의 대조', en: '3a. HAY vs ESTÁ(N)' },
          head: ['Estructura', 'Ejemplo'],
          rows: [
            ['HAY + un(o), una, unos, unas (+ sustantivo)', '<i>Hay una (mesa).</i>'],
            ['HAY + un(o), dos, tres… (+ sustantivo)', '<i>Hay dos cuartos de baño.</i>'],
            ['HAY + sustantivo', '<i>En mi habitación no hay terraza.</i>'],
            ['ESTÁ(N) + el, la, los, las + sustantivo', '<i>A la derecha está la cocina.</i>'],
            ['ESTÁ(N) + preposición', '<i>La mesa está a la derecha de la cama.</i>']
          ] },
        { type: 'table', title: { es: '3b. El verbo GUSTAR', ko: '3b. GUSTAR 동사', en: '3b. The verb GUSTAR' },
          head: ['', 'Pronombre', 'Verbo', 'Ejemplo'],
          rows: [
            ['(No)', 'me / te / le', 'GUSTA', 'la casa. / este sofá. / tu hermano.'],
            ['(No)', 'nos / os / les', 'GUSTAN', 'las casas. / estos sofás. / tus hermanos.']
          ] },
        { type: 'table', title: { es: '3c. Los adverbios de lugar y los demostrativos', ko: '3c. 장소 부사와 지시사', en: '3c. Adverbs of place and demonstratives' },
          head: ['Adverbios', '', 'Masculino', 'Femenino', 'Neutro'],
          rows: [
            ['aquí', '– lejos', 'este, estos', 'esta, estas', 'esto'],
            ['ahí', '↓', 'ese, esos', 'esa, esas', 'eso'],
            ['allí', '+ lejos', 'aquel, aquellos', 'aquella, aquellas', 'aquello']
          ] }
      ] }
  ]
});

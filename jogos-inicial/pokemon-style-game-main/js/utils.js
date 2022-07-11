function rectangularCollision({character, rectangle1, rectangle2 }) {

  let validCharacterHeight = rectangle1.height;
  let validCharacterWidth = rectangle1.width;
  if (character === 'npc') {
    
    validCharacterWidth = (rectangle1.width - 50)
    console.log('character', character, validCharacterWidth)
  } else if (character === 'fence') {
    validCharacterHeight = (rectangle1.height - 50 )
  }
  

  return (
    rectangle1.position.x + validCharacterWidth >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + validCharacterHeight >= rectangle2.position.y
  )
}

function checkForCharacterCollision({
  characters,
  player,
  characterOffset = { x: 0, y: 0 }
}) {
  let resut = false;
  // monitor para colisão de NPC
  for (let i = 0; i < characters.length; i++) {
    const character = characters[i]

    if (
      rectangularCollision({
        character: 'npc',
        rectangle1: player,
        rectangle2: {
          ...character,
          position: {
            x: character.position.x + characterOffset.x,
            y: character.position.y + characterOffset.y
          }
        }
      })
    ) {
      console.log('go');
      resut = true;
    }
  }
  return resut
}

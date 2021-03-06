var faker = require('faker')

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

module.exports = {
  generateVacancies: function(queryIndex = 0, queryLength = 5) {
    return [...Array(queryLength)].map((vacancy, index) => ({
      id: queryIndex + index,
      title: faker.commerce.department(),
      subtitle: faker.commerce.department(),
      shortDescription: faker.lorem.paragraph(),
      educationLevels: shuffle(['grad', 'co', 'mba', 'msc', 'phd', 'ma']).slice(
        0,
        1 + Math.round(Math.random() * 1)
      ),
      disciplines: shuffle([
        'humanities',
        'social',
        'art',
        'ec',
        'it',
        'ma'
      ]).slice(0, 1 + Math.round(Math.random() * 1)),
      areas: shuffle(['n', 'e', 's', 'w']).slice(
        0,
        1 + Math.round(Math.random() * 3)
      ),
      url: 'http://www.butdoesitfloat.com'
    }))
  }
}

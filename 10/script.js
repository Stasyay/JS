const cats = JSON.parse(dataInfo)
console.log(cats)

const contentEl = document.querySelector('.content');

cats.forEach(cat => {

    const catCard = document.createElement('div')
    catCard.classList.add('cat')

    const catName = document.createElement('h1')
    catName.classList.add('cat__name')
    catName.textContent = cat.name

    const catImg = document.createElement('img')
    catImg.classList.add('cat__image')
    catImg.alt = cat.catName
    catImg.src = cat.reference_image_id

    const catDsc = document.createElement('p')
    catDsc.classList.add('cat__dsc')
    catDsc.textContent = cat.description

    const catWiki = document.createElement('a')
    catWiki.classList.add('cat__link')
    catWiki.href = cat.wikipedia_url
    catWiki.textContent = 'See more...'

    const catCountry = document.createElement('p')
    catCountry.classList.add('cat__dsc')
    catCountry.innerHTML = `<span class = "cat__color">Country:</span> ${cat.origin}`

    const catTemperament = document.createElement('p')
    catTemperament.classList.add('cat__dsc')
    catTemperament.innerHTML = `<span class = "cat__color">Temperament:</span> ${cat.temperament}`

    contentEl.append(catCard)
    catCard.append(catName)
    catCard.append(catImg)
    catCard.append(catDsc)
    catCard.append(catWiki)
    catCard.append(catTemperament)
    catCard.append(catCountry)

    console.log(cat.reference_image_id)

})
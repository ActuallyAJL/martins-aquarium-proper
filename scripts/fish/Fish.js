/**
 *  Fish which renders individual fish objects as HTML
 */
 export const Fish = (fishObj) => {
	return `<article class="fish-card">
				<div><img class="fish-image" src="${fishObj.image}" /></div>
				<h3 class="fish-name">${fishObj.properName}, the ${fishObj.name}</h3>
				<ul>
					<li class="fish-details">${fishObj.species}</li>
					<li class="fish-details">Length: ${fishObj.length} inches</li>
					<li class="fish-details">Found: ${fishObj.location}</li>
					<li class="fish-details">Diet: ${fishObj.diet}</li>
				</ul>
        	</article>`
}
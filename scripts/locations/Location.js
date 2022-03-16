/**
 *  Location which renders individual location objects as HTML
 */
 export const Location = (locationObj) => {
	return `<article class="location-card">
				<div><img class="location-image" src="${locationObj.image}" /></div>
				<h3 class="location-name">${locationObj.properName} is from ${locationObj.name}</h3>
				<ul>
					<li class="location-details">${locationObj.species}</li>
					<li class="location-details">Length: ${locationObj.length} inches</li>
					<li class="location-details">Found: ${locationObj.location}</li>
					<li class="location-details">Diet: ${locationObj.diet}</li>
				</ul>
        	</article>`
}
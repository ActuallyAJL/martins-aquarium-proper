/**
 *  Tip which renders individual tip objects as HTML
 */
 export const Tip = (tipObj) => {
	return `<article class="tip-card">
				<div><img class="tip-image" src="${tipObj.image}" /></div>
				<h3 class="tip-name">${tipObj.properName}, the ${tipObj.name}</h3>
				<ul>
					<li class="tip-details">${tipObj.species}</li>
					<li class="tip-details">Length: ${tipObj.length} inches</li>
					<li class="tip-details">Found: ${tipObj.location}</li>
					<li class="tip-details">Diet: ${tipObj.diet}</li>
				</ul>
        	</article>`
}
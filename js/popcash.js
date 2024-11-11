var uid = '483463'
var wid = '729854'
var pop_fback = 'up'
var pop_tag = document.createElement('script')
pop_tag.src = '//cdn.popcash.net/show.js'
document.body.appendChild(pop_tag)
pop_tag.onerror = function () {
	pop_tag = document.createElement('script')
	pop_tag.src = '//cdn2.popcash.net/show.js'
	document.body.appendChild(pop_tag)
}

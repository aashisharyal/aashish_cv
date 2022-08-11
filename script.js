console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)


	
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbytQ-0ZBMGIsRetcK8qLwb2yXiJjGBpYWv58KjN0Fv-Luyhs1DE8xlWqdLUsa_tGSRNMg/exec'
		const form = document.forms['google-sheet']
	  
		form.addEventListener('submit', e => {
		  e.preventDefault()
		  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
			.then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
			.catch(error => console.error('Error!', error.message))
		})
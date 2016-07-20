/**
Create this function to prevent global variables
 */
(function () {
	var phoneList;

	/**
	 * create new XMLHttpRequest instance named xhr
	 * @type {XMLHttpRequest}
	 */
	var xhr = new XMLHttpRequest();

	/**
	 * config the xhr instance, set method=GET url="/phones" async=false
	 */
	xhr.open('GET', '/phones', false);

	/**
	 * Subscribe to event "readystatechange" for request
	 */
	xhr.addEventListener('readystatechange', function () {
		/** if the request is not done return from function */
		if (xhr.readyState != 4) return;

		/** if the request is done go here */

		/** check if status of request != 200, so the request is failed, give user info about failure */
		if (xhr.status != 200) {
			alert(xhr.status + ': ' + xhr.statusText);
		}
		/** check if status of request === 200, so the resuest is successful */
		else {
			/** save list of phones in variable phoneList */
			phoneList = JSON.parse(xhr.responseText);

			/** create list of phones on page */
			createPhoneList(phoneList);
		}
	});

	xhr.send();

	function createPhoneList(listOfPhones) {
		listOfPhones.forEach(createListItem);
	}

	function createListItem(phone) {
		var li =
			document.createElement('li');

		li.innerHTML = phone.name + ': ' + phone.number;
		li.className = "list-group-item clearfix";

		var a = document.createElement('a');
		a.innerHTML = "Delete";
		a.setAttribute('href', '#');
		a.className = "text-danger pull-right";

		li.appendChild(a);

		document.querySelector('ul').appendChild(li);
	}

	addContact.addEventListener('click', function () {
		var newContact = {
			name: personName.value,
			number: number.value
		};

		createListItem(newContact);

		personName.value = "";
		number.value = "";

		phoneList.push(newContact);

		var xhr = new XMLHttpRequest();
		xhr.open('PUT', '/phones', false);
		xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		xhr.send(JSON.stringify(newContact));
	});

})();
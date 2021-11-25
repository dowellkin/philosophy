let arr = info.split('\n');
arr = arr.map(el => el.split(';'))

const app = document.getElementById('app');

const table = document.createElement('table');
app.append(table);

arr.forEach((row, rowIndex) => {
	const rowWrapper = document.createElement('tr');
	row = row.filter(el => el)
	row.forEach((cell, index, arr) => {
		const cellWrapper = document.createElement(rowIndex < 2 || arr.length == 1 ? 'th' :'td');
		if(index == 2){
			cell = cell.replaceAll('"""', '"')
			cell = cell.replaceAll('""', '"')
		}
		if(index == 0){
			cell = cell[0].toUpperCase() + cell.slice(1);
		}
		cellWrapper.innerText = cell;
		if(arr.length == 1){
			cellWrapper.setAttribute('colspan', 3);
		}
		rowWrapper.append(cellWrapper);
	})
	table.append(rowWrapper);
});
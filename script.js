/**
* The following is the function where the solution shall be written
*/

function solution (input) {
	let output = [];

  input = input.replace(/[^\d]/g, '')

	if (input.length == 1) {
		return [input];
	}

	for (let i = 0; i < input.length; i++) {
		const first = input[i];
		const charsRemaining = input.substring(0, i) + input.substring(i + 1);
		const remainingPerms = solution(charsRemaining);
		for (let j = 0; j < remainingPerms.length; j++) {
			output.push(first + remainingPerms[j]);
		}
	}
	return output.sort().reverse();
}

// some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
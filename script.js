//gets two 3x3 matricies from the currenly filled cells of the table
function getMatrixes() {
  let matrixA = [];
  let matrixB = [];

  for (let i = 0; i < 3; i++) {
    matrixA[i] = [];
    matrixB[i] = [];

    for (let j = 0; j < 3; j++) {
      matrixA[i][j] = parseInt(document.getElementById(`aCell${i+1}_${j+1}`).value);
      matrixB[i][j] = parseInt(document.getElementById(`bCell${i+1}_${j+1}`).value);
    }
  }
  multiplyMatrices(matrixA, matrixB);
  return [matrixA, matrixB];
}


//Takes two 3x3 matrix a and b and returns the multiplication result 
function multiplyMatrices(matrixA, matrixB) {
  let result = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
  displayResult(result);
  return result;
}

function displayResult(resultMatrix) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById(`resultCell${i+1}_${j+1}`).textContent = resultMatrix[i][j];
        }
    }
}
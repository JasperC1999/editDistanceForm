"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editDistance = void 0;
function editDistance(str1, str2) {
    if (str1.length === 0)
        return str2.length;
    if (str2.length === 0)
        return str1.length;
    var matrix = [];
    for (var i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    for (var i = 0; i <= str1.length; i++) {
        matrix[0][i] = i;
    }
    for (var i = 1; i <= str2.length; i++) {
        for (var j = 1; j <= str1.length; j++) {
            if (str2[i - 1] === str1[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            }
            else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
            }
        }
    }
    return matrix[str2.length][str1.length];
}
exports.editDistance = editDistance;

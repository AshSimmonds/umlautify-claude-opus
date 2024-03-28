document.getElementById('convertBtn').addEventListener('click', function() {
  var inputText = document.getElementById('inputText').value;
  var convertedText = convertSpecialCharacters(inputText);
  document.getElementById('output').textContent = convertedText;
});

function convertSpecialCharacters(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}
